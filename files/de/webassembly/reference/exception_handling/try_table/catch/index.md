---
title: "catch: try_table Klausel"
short-title: catch
slug: WebAssembly/Reference/Exception_handling/try_table/catch
l10n:
  sourceCommit: b8f9d7c0ac5bb5fb6f658da557e510ef9f4f3394
---

Die **`catch`**-Klausel fängt Ausnahmen ab, die einem angegebenen Fehler-[`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) entsprechen, und schiebt die Ausnahme-Payload auf den Stapel.

{{InteractiveExample("Wat Demo: catch", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag and console.log
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log (param i32)))

  (func $try_and_catch (param $value i32)
    (block $handler (result i32)
      ;; In try_table block, catch thrown exception of type $my_error
      (try_table (catch $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Log value returned by handler block
    call $log
  )

  ;; Function that throws an error of type $my_error
  ;; when its parameter is less than 0
  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Throw exception with payload of 42
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "try_and_catch" (func $try_and_catch))
)

```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import error tag and console.log into the module
const env = {
  my_error: myErrorTag, // import the tag into the module
  log: console.log,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  // Negative value causes function to throw
  (result) => result.instance.exports.try_and_catch(-1),
);
```

## Syntax

```plain
catch tag_identifier block_identifier
```

- `catch`
  - : Die `catch`-Klausel.
- `tag_identifier`
  - : Der Identifikator für den Ausnahme-Typ, der abgefangen werden soll. Dies kann sein:
    - Ein identifizierender Name, wie er durch den [`identifier`](/de/docs/WebAssembly/Reference/Definitions/tag#identifier) des entsprechenden Tag-Typs definiert ist.
    - Eine Tag-Indexnummer — `0` zur Identifizierung des ersten angegebenen Tags, `1` für den zweiten usw.
- `block_identifier`
  - : Der Identifikator für den [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), zu dem verzweigt wird, wenn die Ausnahme abgefangen wird. Dies kann sein:
    - Ein identifizierender Name, wie er durch den Identifikator des entsprechenden Blocks definiert ist.
    - Eine Block-Indexnummer — `0` zur Identifizierung des innersten Blocks, `1` für den nächstinneren usw.

### Typ

```plain
[] -> [payload*]
```

- `payload*`
  - : Null oder mehr Payload-Werte, die durch die ausgelöste Ausnahme erstellt wurden und typischerweise Fehlerkennzeichen darstellen.

Diese Werte werden nicht direkt an der Stelle der `catch`-Klausel auf den Stapel geschoben, sondern an der Stelle des Blocks, zu dem verzweigt wird, wenn die Ausnahme ausgelöst wird.

### Binäre Kodierung

| Klausel | Catch-Typ-Byte |
| ------- | -------------- |
| `catch` | `0x00`         |

`catch` ist keine eigenständige Anweisung — stattdessen wird es als Klausel innerhalb einer `try_table`-Anweisung mit einem Byte von `0x00` kodiert. Eine `try_table` mit einer einzigen `catch`-Klausel:

```wat
(try_table (catch $my_error $handler) ... )
```

würde wie folgt kodiert werden:

```plain
... 0x01 0x00 0x00 0x00 ...
```

## Beschreibung

Die `catch`-Klausel kann innerhalb eines [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Blocks enthalten sein, um Ausnahmen mit einem spezifischen Fehler-[`tag`](/de/docs/WebAssembly/Reference/Definitions/tag) abzufangen. Wenn eine solche Ausnahme auftritt, verzweigt der Code zum angegebenen `block`, wobei die Payload-Werte der Ausnahme auf den Stapel geschoben werden.

`catch` ist nützlich, wenn Sie eine Ausnahme nicht erneut auslösen müssen, aber dennoch melden möchten, dass ein bestimmter Ausnahme-Typ aufgetreten ist.

Der referenzierte Block muss einen Ergebnistyp deklarieren, der mit der Payload der Ausnahme übereinstimmt. Im zuvor gezeigten Beispiel ist der Ausnahme-Typ mit einem einzigen `i32`-Parameter in seiner `tag`-Definition definiert:

```wat
(tag $my_error (import "env" "my_error") (param i32))
```

Wenn die Ausnahme abgefangen wird, gibt der verzweigte Block denselben Datentyp für sein `result` an:

```wat
(block $handler (result i32)
  ...
)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Befehl
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Befehl
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Befehl
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
