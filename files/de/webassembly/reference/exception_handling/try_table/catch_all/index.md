---
title: "catch_all: try_table-Klausel"
short-title: catch_all
slug: WebAssembly/Reference/Exception_handling/try_table/catch_all
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die **`catch_all`**-Klausel fängt jede Ausnahme ab und schiebt nichts auf den Stapel.

{{InteractiveExample("Wat Demo: catch_all", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag and the log function
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log))

  (func $try_and_catch (param $value i32)
    ;; catch_all catches any exception thrown
    (block $handler
      (try_table (catch_all $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Call log to notify user that exception has been thrown
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
catch_all block_identifier
```

- `catch_all`
  - : Die `catch_all`-Klausel.
- `block_identifier`
  - : Der Bezeichner für den [`block`](/de/docs/WebAssembly/Reference/Control_flow/block), zu dem verzweigt wird, wenn die Ausnahme abgefangen wird. Dies kann sein:
    - Ein identifizierender Name, wie durch den Bezeichner des entsprechenden Blocks definiert.
    - Eine Block-Indexnummer — `0`, um den innersten Block zu identifizieren, `1` für den nächst inneren usw.

### Typ

```plain
[] -> []
```

### Binäre Kodierung

| Klausel     | catch_all Typ-Byte |
| ----------- | ------------------ |
| `catch_all` | `0x02`             |

`catch_all` ist keine eigenständige Klausel – stattdessen wird sie als Klausel innerhalb einer `try_table`-Anweisung mit einem Byte von `0x02` kodiert. Eine `try_table` mit einer einzelnen `catch_all`-Klausel:

```wat
(try_table (catch_all $handler) ... )
```

würde so kodiert werden:

```plain
... 0x01 0x02 0x00 ...
```

## Beschreibung

Die `catch_all`-Klausel kann innerhalb eines [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Blocks enthalten sein, um jede geworfene Ausnahme abzufangen. Wenn eine Ausnahme ausgelöst wird, verzweigt der Code zu dem angegebenen `block`.

`catch_all` ist nützlich, wenn Sie eine Ausnahme nicht erneut werfen müssen und Sie keine spezifische Ausnahme abfangen möchten, aber dennoch berichten möchten, dass eine Ausnahme irgendeiner Art aufgetreten ist.

Im Falle von `catch_all` muss der referenzierte Block keinen Ergebnistyp deklarieren, der zur Nutzlast der Ausnahme passt, da kein Ergebnis auf den Stapel geschoben wird. Im vorher gezeigten Beispiel hat der `block` keinen deklarierten Ergebnistyp:

```wat
(block $handler
  ...
)
```

## Siehe auch

- [`throw`](/de/docs/WebAssembly/Reference/Exception_handling/throw)-Anweisung
- [`throw_ref`](/de/docs/WebAssembly/Reference/Exception_handling/throw_ref)-Anweisung
- [`try_table`](/de/docs/WebAssembly/Reference/Exception_handling/try_table)-Anweisung
  - [`catch`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch)-Klausel
  - [`catch_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)-Klausel
  - [`catch_all_ref`](/de/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)-Klausel
- [`exnref`](/de/docs/WebAssembly/Reference/Value_types/exnref)-Typ
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)-Definition
