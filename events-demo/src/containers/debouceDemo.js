import React, { useEffect } from "react";

export default function DebouceDemo() {
  function ajax(content) {
    console.log("ajax request:" + content);
  }

  let debounceAjax = debounce(ajax, 500);

  function debounce(fun, delay) {
    return function (args) {
      clearTimeout(fun.id);
      fun.id = setTimeout(function () {
        fun.call(this, args);
      }, delay);
    };
  }

  let test1 = () => console.log("test throttle");
  //   , new Date().Format('HH:mm:ss'));
  let test2 = () => console.log("test debounce");
  //   , new Date().Format('HH:mm:ss'));
  //   setInterval(throttle(test1, 1000), 100);

  useEffect(() => {
    // setInterval(throttle(test1, 1000), 100)
    // setInterval(debounce(test2, 2000), 100)
  }, []);

  let throttleAjax = throttle(ajax, 500);

  function throttle(fun, delay) {
    let last, deferTimer;
    return function (args) {
      let now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fun.call(this, args);
        }, delay);
      } else {
        last = now;
        fun.call(this, args);
      }
    };
  }

  return (
    <div>
      <div>
        <input onChange={(e) => ajax(e.target.value)} />
        {" vanilla input"}
      </div>
      <div>
        <input onChange={(e) => debounceAjax(e.target.value)} />
        {" input with debounce "}
      </div>

      <div>
        <input onChange={(e) => throttleAjax(e.target.value)} />
        {" input with throttle"}
      </div>
    </div>
  );
}
