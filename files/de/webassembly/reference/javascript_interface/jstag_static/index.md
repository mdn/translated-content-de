---
title: WebAssembly.JSTag
slug: WebAssembly/Reference/JavaScript_interface/JSTag_static
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`JSTag`**-Eigenschaft im Nur-Lese-Modus des [`WebAssembly`](/de/docs/WebAssembly/Reference/JavaScript_interface) Interfaces ist ein eingebautes [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag), das Ausnahmen repräsentiert, die im JavaScript-Host geworfen werden — es ermöglicht, dass Ausnahmen, die in JavaScript geworfen werden, innerhalb eines Wasm-Moduls behandelt werden.

{{InteractiveExample("WebAssembly.JSTag demo", "tabbed-taller")}}

```wat interactive-example
(module
  (tag $js_tag (import "env" "js_tag") (param externref))
  (import "env" "do_work" (func $do_work))
  (import "env" "log" (func $log (param externref)))

  (func $try_and_catch
    (block $handler (result externref)
      (try_table (catch $js_tag $handler)
        ;; Call a JS function that throws
        (call $do_work)
      )
      (return)
    )
    ;; The JS Error object is on the stack as an externref
    ;; Pass it back to JS for logging
    (call $log)
  )

  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
async function run() {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("{%wasm-url%}"),
    {
      env: {
        js_tag: WebAssembly.JSTag,
        // This JS function throws, which Wasm will catch via JSTag
        do_work() {
          throw new Error("An exception was thrown in JS");
        },
        log(error) {
          // errRef is the JS Error object passed back as an externref
          console.log(error.message);
        },
      },
    },
  );

  instance.exports.try_and_catch();
}

run();
```

## Wert

Ein [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag) mit einem Typ von [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref) (`(tag (param externref))`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Übersicht über [WebAssembly](/de/docs/WebAssembly)
- [`WebAssembly.Tag`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag)
- [tag](/de/docs/WebAssembly/Reference/Definitions/tag) Wasm-Definition
