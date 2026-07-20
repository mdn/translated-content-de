---
title: "exnref: Wasm-Werttyp"
short-title: exnref
slug: WebAssembly/Reference/Value_types/exnref
l10n:
  sourceCommit: 187220197832f482878607080ae9e7c1edabe108
---

Der **`exnref`** Werttyp repräsentiert eine ausgelöste Ausnahme in einem Wasm-Modul und ermöglicht es, diese erneut auszulösen.

{{InteractiveExample("Wat Demo: exnref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag
  (tag $my_error (import "env" "my_error") (param i32))

  (func $try_and_rethrow (param $value i32)
    ;; Define a variable to store an exnref
    (local $err exnref)

    (block $handler (result i32 exnref)
      (try_table (catch_ref $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )

    ;; catch_ref returns error value and exnref
    ;; Stack is now: i32, exnref (exnref on top)
    (local.set $err)      ;; pop exnref
    (drop)                ;; drop the i32 payload
    (local.get $err)      ;; push exnref back
    (throw_ref)
  )

  ;; Function that throws an error of type $my_error
  ;; when its parameter is less than 0
  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "try_and_rethrow" (func $try_and_rethrow))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import the tag into the module
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  (result) => {
    try {
      // Negative value causes function to throw
      result.instance.exports.try_and_rethrow(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        // 0 is the first payload value, which is equal to 42
        const errorCode = e.getArg(myErrorTag, 0);
        console.log("Error code:", errorCode);
      } else {
        // Throw other errors
        throw e;
      }
    }
  },
);
```

## Syntax

```wat
;; Define variable to hold exnref
(local $err exnref)
```

## Beschreibung

Der `exnref` Typ stellt eine ausgelöste Ausnahme in einem Wasm-Modul dar. Dieser Werttyp wird von den Klauseln [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) und [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) zurückgegeben und bietet eine Referenz auf die soeben ausgelöste Ausnahme. Dies ermöglicht es, die Ausnahme bei Bedarf mit der Anweisung [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref) erneut auszulösen.

Die JavaScript-Schnittstelle [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) stellt eine Wasm-Ausnahme im JavaScript-Host dar.

> [!NOTE]
> Sie können keine Wasm-Funktion aus JavaScript aufrufen, die einen `exnref` Wert als Parameter oder Ergebnis hat. Der Versuch, dies zu tun, führt zu einem Fehler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref) Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table) Anweisung
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) Klausel
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Definition
- [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript-Schnittstelle
