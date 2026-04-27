---
title: "global.set: Wasm Text-Instruktion"
short-title: global.set
slug: WebAssembly/Reference/Variables/global.set
l10n:
  sourceCommit: a21bf857ac668ad72a36aad0d8ad7e87c6bdc4d8
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
  - : Der `global.set`-Instruktionstyp. Muss immer zuerst eingefügt werden.
- `identifier`
  - : Ein Identifikator für die globale Variable, deren Wert Sie setzen möchten. Dies kann einer der folgenden sein:
    - `name`
      - : Der [identifizierende Name](/de/docs/WebAssembly/Reference/Definitions/global#identifier), der für die globale Variable festgelegt wurde, als sie zuerst initialisiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_global`.
    - `index`
      - : Die Indexnummer der globalen Variable, zum Beispiel `0` für die erste globale Variable im Wasm-Skript, `1` für die zweite usw.

### Typ

```plain
[new_value] -> []
```

- `new_value`
  - : Der neue Wert, der für die globale Variable gesetzt wird. Damit die `global.set`-Instruktion erfolgreich ist, muss die globale Variable veränderbar sein (das [`mut`](/de/docs/WebAssembly/Reference/Definitions/global#mut) Flag wurde gesetzt, als sie deklariert wurde), und der `new_value` muss dasselbe [`data_type`](/de/docs/WebAssembly/Reference/Definitions/global#data_type) wie die globale Variable haben.

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
