---
title: "global.set: Wasm-Textinstruktion"
short-title: global.set
slug: WebAssembly/Reference/Variables/global.set
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Die **`global.set`**-Instruktion setzt die Werte einer globalen Variablen.

{{InteractiveExample("Wat Demo: global_set", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var (mut i32) (i32.const 0))
  (func $main
    i32.const 10 ;; load a number onto the stack
    global.set $var ;; set the $var

    global.get $var ;; load $var onto the stack
    call $log ;; log the result
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
global.set identifier
```

- `global.set`
  - : Der `global.set` Instruktionstyp. Muss immer zuerst angegeben werden.
- `identifier`
  - : Ein Bezeichner für das globale Element, dessen Wert Sie setzen möchten. Dies kann eines der folgenden sein:
    - `name`
      - : Der [identifizierende Name](/de/docs/WebAssembly/Reference/Definitions/global#identifier), der für das globale Element festgelegt wurde, als es erstmals initialisiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_global`.
    - `index`
      - : Die Indexnummer des globalen Elements, zum Beispiel `0` für das erste globale Element im Wasm-Skript, `1` für das zweite usw.

### Typ

```plain
[new_value] -> []
```

- `new_value`
  - : Der neue Wert, der für das globale Element gesetzt wird. Damit die `global.set`-Instruktion erfolgreich ist, muss das globale Element veränderbar sein (das [`mut`](/de/docs/WebAssembly/Reference/Definitions/global#mut) Flag wurde beim Deklarieren gesetzt), und der `new_value` muss den gleichen [`data_type`](/de/docs/WebAssembly/Reference/Definitions/global#data_type) wie das globale Element haben.

### Opcodes

| Instruktion  | Binärformat | Beispieltext => binär         |
| ------------ | ----------- | ----------------------------- |
| `global.set` | `0x24`      | `global.set 0` => `0x24 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
- [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get)
