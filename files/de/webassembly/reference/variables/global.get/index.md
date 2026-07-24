---
title: "global.get: Wasm-Variable-Anweisung"
short-title: global.get
slug: WebAssembly/Reference/Variables/global.get
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`global.get`** [Variable-Anweisung](/de/docs/WebAssembly/Reference/Variables) lädt den Wert einer globalen Variablen auf den Stapel.

{{InteractiveExample("Wat Demo: global_get", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var i32 (i32.const 10))
  (func $main

    global.get $var ;; Load the value of $var variable onto the stack
    call $log ;; Log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
global.get identifier
```

- `global.get`
  - : Der Typ der `global.get`-Anweisung. Muss immer zuerst angegeben werden.
- `identifier`
  - : Ein Bezeichner für die globale Variable, deren Wert Sie abrufen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Der [identifizierende Name](/de/docs/WebAssembly/Reference/Definitions/global#identifier), der für die globale Variable beim Deklarieren festgelegt wurde. Dieser muss mit einem `$`-Symbol beginnen, z.B. `$my_global`.
    - `index`
      - : Die Indexnummer der globalen Variable, z.B. `0` für die erste globale Variable im Wasm-Skript, `1` für die zweite usw.

### Typ

```plain
[] -> [output]
```

- `output`
  - : Der von der `global.get`-Anweisung zurückgegebene globale Wert.

### Opcodes

| Anweisung    | Binärformat | Beispieltext => binär         |
| ------------ | ----------- | ----------------------------- |
| `global.get` | `0x23`      | `global.get 0` => `0x23 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
- [`global.set`](/de/docs/WebAssembly/Reference/Variables/global.set)
