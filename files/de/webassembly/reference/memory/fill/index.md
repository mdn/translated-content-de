---
title: "fill: Wasm-Text-Instruktion"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
l10n:
  sourceCommit: d47940f987297e6d5202c55576afef1ddc8565e7
---

Die **`fill`**-[Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein vorgegebenes Byte.

Die Instruktion liefert keinen Wert zurück. Sie erzeugt eine Ausnahme, wenn der angegebene Speicherbereich außerhalb des zulässigen Bereichs liegt.

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
> Die `multiMemory`-Kompatibilitätstabelle zeigt Versionen an, in denen `fill` mit einem angegebenen Speicher verwendet werden kann.
