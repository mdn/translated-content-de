---
title: "fill: Wasm-Textinstruktion"
short-title: fill
slug: WebAssembly/Reference/Memory/fill
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Die **`memory.fill`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein gegebenes Byte.

Die Instruktion gibt keinen Wert zurück. Sie löst eine Ausnahme aus, wenn der angezeigte Speicherbereich außerhalb der Grenzen liegt.

## Syntax

Füllen innerhalb des Standardspeichers

```wat
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-function
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Füllen des angegebenen Speichers (falls Multi-Speicher unterstützt wird)

```wat
;; Fill specific memory referenced by its index
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory 1) ;; Fill memory with index 1

;; Fill memory referenced by its name
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory $memoryName) ;; Fill memory with name "$memoryName"

;; Fill same memory using an S function
(memory.fill (memory $memoryName) (i32.const 200) (i32.const 255) (i32.const 100))
```

### Instruktionen und Opcodes

| Instruktion   | Binärer Opcode |
| ------------- | -------------- |
| `memory.fill` | `0xFC 0x0b`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle gibt die Versionen an, in denen `fill` mit einem angegebenen Speicher verwendet werden kann.
