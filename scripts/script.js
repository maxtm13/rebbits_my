document.addEventListener('DOMContentLoaded', function() {
    var squareBody = document.querySelector('.square-body');
    if (!squareBody) return;

    var initialOrder = Array.prototype.slice.call(squareBody.children);
    var currentOrder = initialOrder.slice();

    var resetBtn = document.querySelector('.btn-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            currentOrder = initialOrder.slice();
            for (var i = 0; i < currentOrder.length; i++) {
                squareBody.appendChild(currentOrder[i]);
            }
        });
    }

    squareBody.addEventListener('click', function(e) {
        var arrow = e.target.closest('.arrow');
        if (!arrow) return;

        var block = arrow.closest('.block');
        if (!block) return;

        var blocks = Array.prototype.slice.call(squareBody.children);
        var idx = blocks.indexOf(block);
        if (idx === -1) return;

        var targetIdx = -1;

        if (arrow.classList.contains('top')) {
            targetIdx = idx - 5;
        } else if (arrow.classList.contains('bottom')) {
            targetIdx = idx + 5;
        } else if (arrow.classList.contains('left')) {
            targetIdx = idx - 1;
        } else if (arrow.classList.contains('right')) {
            targetIdx = idx + 1;
        }

        if (targetIdx >= 0 && targetIdx < blocks.length) {
            var temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[targetIdx];
            currentOrder[targetIdx] = temp;

            for (var j = 0; j < currentOrder.length; j++) {
                squareBody.appendChild(currentOrder[j]);
            }
        }
    });
});
