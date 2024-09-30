---
title: "store: Wasm-Text-Instruktion"
short-title: store
slug: WebAssembly/Reference/Memory/Store
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`store`**-[Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) werden verwendet, um eine Zahl auf dem Stack in einem Speicher abzulegen.

Es gibt `store`-Instruktionen, um ein `i32`, `i64`, `f32` und `f64` im Speicher abzulegen. Für die Ganzzahlen gibt es separate Instruktionsvarianten, um eine breit typisierte Zahl in eine kleinere Zahl im Speicher abzulegen. Zum Beispiel können Sie eine 32-Bit-Zahl in einem 8-Bit-Speicherplatz mit `i32.store8` ablegen. Wenn die Zahl nicht in den kleineren Zahlentyp passt, wird sie umschlagen. Alle Varianten sind [unten aufgelistet](#instruktionen_und_opcodes).

{{EmbedInteractiveExample("pages/wat/store.html", "tabbed-taller")}}

## Syntax

Speichern im Standardspeicher

```wasm
;; Store value in default memory at particular offset
i32.const 0 ;; stack variable with offset in memory to store the number
i32.const 20 ;; stack variable with the number to store
i32.store ;; store in default memory

;; Store using S-function (same values and offset)
(i32.store (i32.const 0) (i32.const 20))
```

Speichern in spezifiziertem Speicher (falls Multi-Speicher unterstützt wird)

```wasm
;; Store in memory referenced by its index
i32.const 0 ;; offset in memory to store the number
i32.const 20 ;; the number to store
i32.store (memory 2)  ;; store in memory with index 2

;; Store in memory referenced by its name
i32.const 0 ;; offset to store the number
i32.const 20 ;; the number to store
i32.store (memory $memoryName)  ;; store in memory with name "$memoryName"

;; Store in same memory using an S function
(i32.store (memory $memoryName) (i32.const 0) (i32.const 20))
```

### Instruktionen und Opcodes

| Instruktion   | Binärer Opcode |
| ------------- | -------------- |
| `i32.store`   | `0x36`         |
| `i64.store`   | `0x37`         |
| `f32.store`   | `0x38`         |
| `f64.store`   | `0x39`         |
| `i32.store8`  | `0x3a`         |
| `i32.store16` | `0x3b`         |
| `i64.store8`  | `0x3c`         |
| `i64.store16` | `0x3d`         |
| `i64.store32` | `0x3e`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der JavaScript-API [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory).
> Der [multiMemory](#webassembly.multimemory) Schlüssel gibt die Versionen an, in denen `store` mit einem spezifizierten Speicher verwendet werden kann.

{{Compat}}
