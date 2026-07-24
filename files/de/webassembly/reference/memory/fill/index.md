---
title: "fill: Wasm Speicheranweisung"
short-title: fill
slug: WebAssembly/Reference/Memory/fill
l10n:
  sourceCommit: 6e99dbce48ff569afb34ad36a5aa4129a945af31
---

Die **`memory.fill`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein angegebenes Byte.

Die Anweisung gibt keinen Wert zurück.
Es tritt eine Exception auf, wenn der angegebene Speicherbereich außerhalb der Grenzen liegt.

## Syntax

Füllen im Standardspeicher

```wat
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-expression
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Füllen in angegebenem Speicher (wenn Mehrfach-Speicher unterstützt wird)

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

;; Fill same memory using an S-expression
(memory.fill (memory $memoryName) (i32.const 200) (i32.const 255) (i32.const 100))
```

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.fill` | `0xFC 0x0b`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
