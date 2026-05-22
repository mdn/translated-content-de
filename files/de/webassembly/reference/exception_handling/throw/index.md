---
title: "throw: Wasm-Ausnahmebehandlungsanweisung"
short-title: throw
slug: WebAssembly/Reference/Exception_handling/throw
l10n:
  sourceCommit: 48b0dc43b7c13a2c9a5d2c56f110444d2550b90e
---

Die **`throw`**-[Ausnahmebehandlungsanweisung](/de/docs/WebAssembly/Reference/Exception_handling) wirft eine Ausnahme eines bestimmten Typs, wie durch eine [Tag-](/de/docs/WebAssembly/Reference/Definitions/tag) Definition festgelegt.

{{InteractiveExample("Wat Demo: throw", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag from JS
  (tag $my_error (import "env" "my_error") (param i32))

  (func $might_throw (param $value i32)
    ;; If value is negative, run the if block
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Push the error code onto the stack, then throw an exception
        (i32.const 42)        ;; error code payload
        (throw $my_error)     ;; throw with the tag
      )
    )
  )
  (export "might_throw" (func $might_throw))
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
      result.instance.exports.might_throw(-1);
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
throw identifier
```

- `throw`
  - : Die `throw`-Anweisung.
- `identifier`
  - : Ein Bezeichner für den Ausnahmetag-Typ, der geworfen werden soll. Dies kann sein:
    - Ein identifizierender Name, wie durch den [`identifier`](/de/docs/WebAssembly/Reference/Definitions/tag#identifier) des entsprechenden Tag-Typs definiert.
    - Eine Tag-Indexnummer — `0` um den ersten angegebenen Tag zu identifizieren, `1` für den zweiten usw.

### Typ

```plain
[payload1, payload2, payloadN] -> []
```

- `payload`-Werte
  - : Die `payload`-Werte, die normalerweise identifizierende Fehlercodes darstellen.

Die `payload`-Werte können abgerufen werden, wenn die Ausnahme abgefangen wird, entweder durch Klauseln wie [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch) und [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref), oder in JavaScript über eine [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung.

Siehe die [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definitionsreferenzseite für Beispiele von beiden.

### Binärcodierung

| Anweisung | Binärformat     | Beispieltext => binär                                  |
| --------- | --------------- | ------------------------------------------------------ |
| `throw`   | `0x08 x:tagidx` | `(throw $tag (i32.const 42))` => `0x41 0x2a 0x08 0x00` |

## Siehe auch

- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
