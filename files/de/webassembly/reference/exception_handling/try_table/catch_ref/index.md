---
title: "catch_ref: try_table Klausel"
short-title: catch_ref
slug: WebAssembly/Reference/Exception_handling/try_table/catch_ref
l10n:
  sourceCommit: 184a2adcf533de244f520829045c2ad85c6af1a8
---

Die **`catch_ref`** Klausel fängt Ausnahmen, die einem bestimmten Fehler-[`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) entsprechen, und schiebt die Ausnahme-Nutzlast und einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Wert, der die Ausnahme repräsentiert, auf den Stapel.

{{InteractiveExample("Wat Demo: catch_ref", "tabbed-taller")}}

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
catch_ref tag_identifier block_identifier
```

- `catch_ref`
  - : Die `catch_ref` Klausel.
- `tag_identifier`
  - : Der Bezeichner für den Ausnahmetyp, der abgefangen werden soll. Dies kann sein:
    - Ein identifizierender Name, wie er durch den [`identifier`](/de/docs/WebAssembly/Reference/Definitions/tag#identifier) des entsprechenden Tagtyps definiert ist.
    - Eine Tag-Indexnummer — `0`, um das erste spezifizierte Tag zu identifizieren, `1` für das zweite usw.
- `block_identifier`
  - : Der Bezeichner für den [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), zu dem verzweigt wird, wenn die Ausnahme abgefangen wird. Dies kann sein:
    - Ein identifizierender Name, wie er durch den Bezeichner des entsprechenden Blocks definiert ist.
    - Eine Block-Indexnummer — `0`, um den innersten Block zu identifizieren, `1` für den nächsten innersten Block usw.

### Typ

```plain
[] -> [payload*, exception_ref]
```

- `payload*`
  - : Null oder mehr Nutzlastwerte, die durch die geworfene Ausnahme erstellt wurden, die typischerweise identifizierende Fehlercodes darstellen.
- `exception_ref`
  - : Ein [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Wert, der die geworfene Ausnahme repräsentiert.

Diese Werte werden nicht direkt an der Stelle der `catch_ref` Klausel auf den Stapel geschoben, sondern sie werden an der Stelle auf den Stapel geschoben, zu der verzweigt wird, wenn die Ausnahme geworfen wird.

### Binäre Codierung

| Klausel     | catch_ref Typ-Byte |
| ----------- | ------------------ |
| `catch_ref` | `0x01`             |

`catch_ref` ist keine eigenständige Anweisung – stattdessen wird sie als Klausel innerhalb einer `try_table` Anweisung mit einem Byte von `0x01` kodiert. Eine `try_table` mit einer einzelnen `catch_ref` Klausel:

```wat
(try_table (catch_ref $my_error $handler) ... )
```

würde so kodiert werden:

```plain
... 0x01 0x01 0x00 0x00 ...
```

## Beschreibung

Die `catch_ref` Klausel kann innerhalb eines [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table) Blocks enthalten sein, um Ausnahmen mit einem bestimmten Fehler-[`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) abzufangen. Wenn eine solche Ausnahme geworfen wird, verzweigt der Code zu dem spezifizierten `block`, wobei die Nutzlastwerte der Ausnahme und ein [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Wert, der die geworfene Ausnahme repräsentiert, auf den Stapel geschoben werden.

Die Ausnahme kann dann mit einer [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref) Anweisung erneut geworfen werden.

`catch_ref` ist nützlich, wenn Sie berichten möchten, dass ein bestimmter Ausnahmetyp geworfen wurde, aber die Ausnahme auch erneut werfen möchten. Sie könnten zum Beispiel eine Aktion wie Bereinigung oder Protokollierung durchführen, aber dennoch den Nutzern mitteilen, dass ein spezifischer Fehler aufgetreten ist.

Der referenzierte Block muss einen Ergebnistyp deklarieren, der zur Nutzlast der Ausnahme und zum `exnref` passt. Im vorher gezeigten Beispiel ist der Ausnahmetyp mit einem einzelnen `i32` Parameter in seiner `tag` Definition definiert:

```wat
(tag $my_error (import "env" "my_error") (param i32))
```

Wenn die Ausnahme abgefangen wird, gibt der Block, zu dem verzweigt wird, denselben Datentyp für die Nutzlast plus einen `exnref` Typ in seinem `result` an:

```wat
(block $handler (result i32 exnref)
  ...
)
```

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw) Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref) Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table) Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch) Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all) Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref) Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) Definition
