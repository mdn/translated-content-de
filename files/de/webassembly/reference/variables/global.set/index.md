---
title: "global.set: Wasm Variable-Instruktion"
short-title: global.set
slug: WebAssembly/Reference/Variables/global.set
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Die **`global.set`**-[Variableninstruktion](/de/docs/WebAssembly/Reference/Variables) setzt den Wert einer globalen Variablen.

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
  - : Der Instruktionstyp `global.set`. Muss immer zuerst inkludiert werden.
- `identifier`
  - : Ein Bezeichner für die globale Variable, deren Wert Sie setzen möchten. Dies kann eines der Folgenden sein:
    - `name`
      - : Der [identifizierende Name](/de/docs/WebAssembly/Reference/Definitions/global#identifier), der für die globale Variable festgelegt wurde, als sie erstmals initialisiert wurde. Dieser muss mit einem `$`-Symbol beginnen, zum Beispiel `$my_global`.
    - `index`
      - : Die Indexnummer der globalen Variable, zum Beispiel `0` für die erste globale Variable im Wasm-Skript, `1` für die zweite usw.

### Typ

```plain
[new_value] -> []
```

- `new_value`
  - : Der neue Wert, der für die globale Variable gesetzt wird. Damit die `global.set`-Instruktion erfolgreich ist, muss die globale Variable veränderlich sein (das [`mut`](/de/docs/WebAssembly/Reference/Definitions/global#mut)-Flag wurde bei der Deklaration gesetzt) und der `new_value` muss denselben [`data_type`](/de/docs/WebAssembly/Reference/Definitions/global#data_type) wie die globale Variable haben.

### Opcodes

| Instruktion  | Binärformat | Beispieltext => Binär         |
| ------------ | ----------- | ----------------------------- |
| `global.set` | `0x24`      | `global.set 0` => `0x24 0x00` |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
- [`global.get`](/de/docs/WebAssembly/Reference/Variables/global.get)
