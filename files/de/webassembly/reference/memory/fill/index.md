---
title: "fill: Wasm-Textanweisung"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`fill`**-[Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein bestimmtes Byte.

Die Anweisung gibt keinen Wert zurück.
Sie wirft eine Ausnahme, wenn der angegebene Speicherbereich außerhalb der Grenzen liegt.

## Syntax

Füllen im Standardspeicher

```wasm
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-function
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Füllen angegebenen Speichers (falls Multi-Speicher unterstützt wird)

```wasm
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

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.fill` | `0xFC 0x0b`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der JavaScript-API [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory).
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt die Versionen an, in denen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
