document.addEventListener('DOMContentLoaded', () => {
    const squareBody = document.querySelector('.square-body');
    if (!squareBody) return;

    const initialOrder = Array.from(squareBody.children);
    let currentOrder = [...initialOrder];

    const resetBtn = document.querySelector('.btn-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentOrder = [...initialOrder];
            squareBody.replaceChildren(...currentOrder);
        });
    }

    squareBody.addEventListener('click', (e) => {
        const arrow = e.target.closest('.arrow');
        if (!arrow) return;

        const block = arrow.closest('.block');
        if (!block) return;

        const blocks = Array.from(squareBody.children);
        const idx = blocks.indexOf(block);
        if (idx === -1) return;

        let targetIdx = -1;

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
            const temp = currentOrder[idx];
            currentOrder[idx] = currentOrder[targetIdx];
            currentOrder[targetIdx] = temp;

            squareBody.replaceChildren(...currentOrder);
        }
    });
});
