document.addEventListener('DOMContentLoaded', function() {
    var squareBody = document.querySelector('.square-body');
    if (!squareBody) return;

    var initialOrder = [];
    var currentOrder = [];
    var children = squareBody.children;

    for (var i = 0; i < children.length; i++) {
        initialOrder.push(children[i]);
        currentOrder.push(children[i]);
    }

    var resetBtn = document.querySelector('.btn-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            for (var i = 0; i < initialOrder.length; i++) {
                currentOrder[i] = initialOrder[i];
                squareBody.appendChild(initialOrder[i]);
            }
        });
    }

    squareBody.addEventListener('click', function(e) {
        var arrow = e.target.closest('.arrow');
        if (!arrow) return;

        var block = arrow.closest('.block');
        if (!block) return;

        var idx = -1;
        for (var i = 0; i < currentOrder.length; i++) {
            if (currentOrder[i] === block) {
                idx = i;
                break;
            }
        }
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

        if (targetIdx >= 0 && targetIdx < currentOrder.length) {
            var temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[targetIdx];
            currentOrder[targetIdx] = temp;

            for (var j = 0; j < currentOrder.length; j++) {
                squareBody.appendChild(currentOrder[j]);
            }
        }
    });
});
