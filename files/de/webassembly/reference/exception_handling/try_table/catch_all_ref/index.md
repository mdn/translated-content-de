---
title: "catch_all_ref: try_table-Klausel"
short-title: catch_all_ref
slug: WebAssembly/Reference/Exception_handling/try_table/catch_all_ref
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`catch_all_ref`**-Klausel fängt jede Ausnahme ab und schiebt einen [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die Ausnahme darstellt, auf den Stapel.

{{InteractiveExample("Wat Demo: catch_all_ref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag and the log function
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log))

  (func $try_and_catch (param $value i32)
    ;; Define a variable to store an exnref
    (local $err exnref)
    ;; catch_all_ref catches any exception thrown and pushes an exnref
    (block $handler (result exnref)
      (try_table (catch_all_ref $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Save exnref before calling log to notify user
    ;; that exception has been thrown
    (local.set $err)
    (call $log)
    ;; Restore exnref
    (local.get $err)
    ;; rethrow original exception
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
  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import the tag and the log function into the module
const env = {
  my_error: myErrorTag,
  log() {
    console.log("An error was caught!");
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  // Negative value causes function to throw
  (result) => result.instance.exports.try_and_catch(-1),
);
```

## Syntax

```plain
catch_all_ref block_identifier
```

- `catch_all_ref`
  - : Die `catch_all_ref`-Klausel.
- `block_identifier`
  - : Der Bezeichner für den [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), zu dem verzweigt werden soll, wenn die Ausnahme abgefangen wird. Dies kann sein:
    - Ein identifizierender Name, wie durch den Bezeichner des entsprechenden Blocks definiert.
    - Eine Blockindexnummer — `0` für den innersten Block, `1` für den nächstinneren usw.

### Typ

```plain
[] -> [exception_ref]
```

- `exception_ref`
  - : Ein [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die geworfene Ausnahme darstellt.

Dieser Wert wird nicht direkt an der Stelle der `catch_all_ref`-Klausel auf den Stapel geschoben, sondern an der Stelle des Blocks, zu dem verzweigt wird, wenn die Ausnahme geworfen wird.

### Binäre Kodierung

| Klausel         | catch_all_ref Typ-Byte |
| --------------- | ---------------------- |
| `catch_all_ref` | `0x03`                 |

`catch_all_ref` ist keine eigenständige Anweisung — stattdessen wird sie als Klausel innerhalb einer `try_table`-Anweisung mit einem Byte von `0x03` kodiert. Eine `try_table` mit einer einzelnen `catch_all_ref`-Klausel:

```wat
(try_table (catch_all_ref $handler) ... )
```

würde so kodiert werden:

```plain
... 0x01 0x03 0x00 ...
```

## Beschreibung

Die `catch_all_ref`-Klausel kann in einem [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Block enthalten sein, um alle geworfenen Ausnahmen abzufangen. Wenn eine Ausnahme geworfen wird, verzweigt der Code zum angegebenen `block`, woraufhin ein [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Wert, der die geworfene Ausnahme darstellt, auf den Stapel geschoben wird.

Die Ausnahme kann dann mit einer [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung erneut geworfen werden.

`catch_all_ref` ist nützlich, wenn Sie anzeigen möchten, dass eine Art Ausnahme geworfen wurde, aber die Ausnahme auch erneut werfen möchten. Beispielsweise möchten Sie möglicherweise eine Aktion wie Aufräumen oder Protokollierung durchführen, aber dann die Benutzer dennoch darüber informieren, dass ein Fehler aufgetreten ist.

Der referenzierte Block muss einen Ergebnistyp deklarieren, der mit dem geschobenen `exnref` übereinstimmt. In dem zuvor gezeigten Beispiel gibt der Block, zu dem verzweigt wird, wenn die Ausnahme abgefangen wird, einen `exnref`-Typ in seinem `result` an:

```wat
(block $handler (result exnref)
  ...
)
```

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_all`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
