//函数节流  传入function与延迟时间
export function _throttle(fn, wait = 1000) {
    let timer;
    return function () {
        if (timer != null) return;
        let context = this;
        let args = arguments;
        fn.apply(context, args);
        timer = setTimeout(() => {
            timer = null;
        }, wait);
    }
}