---
title: "throw_ref: Wasm-Ausnahmebehandlungsanweisung"
short-title: throw_ref
slug: WebAssembly/Reference/Exception_handling/throw_ref
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`throw_ref`** [Ausnahmebehandlungs](/de/docs/WebAssembly/Reference/Exception_handling)anweisung wirft eine zuvor geworfene Ausnahme erneut, die durch einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert dargestellt wird.

{{InteractiveExample("Wat Demo: throw_ref", "tabbed-taller")}}

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

```plain
throw_ref
```

- `throw_ref`
  - : Die `throw_ref`-Anweisung.

### Typ

```plain
[exception] -> []
```

- `exception`
  - : Die Ausnahme, die erneut geworfen werden soll, muss ein `exnref`-Wert sein.

### Binärkodierung

| Anweisung   | Binärformat | Beispieltext => binär |
| ----------- | ----------- | --------------------- |
| `throw_ref` | `0x0a`      | `throw_ref` => `0x0a` |

## Beschreibung

Eine `throw_ref`-Anweisung kann verwendet werden, um eine zuvor geworfene Ausnahme erneut zu werfen, wie sie durch einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert dargestellt wird. Werte des Typs `exnref` werden durch [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)- und [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klauseln auf den Stapel geschoben.

Im Allgemeinen ist das erneute Werfen von Ausnahmen nützlich, weil Sie möglicherweise eine Aktion wie Bereinigung oder Protokollierung durchführen möchten, aber dennoch den Nutzern mitteilen möchten, dass ein Fehler aufgetreten ist.

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
