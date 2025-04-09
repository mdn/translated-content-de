---
title: "fill: Wasm-Textanweisung"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`fill`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein angegebenes Byte.

Die Anweisung liefert keinen Wert zurück. Sie löst eine Ausnahme aus, wenn der angegebene Speicherbereich außerhalb der Grenzen liegt.

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

Füllen des angegebenen Speichers (wenn Mehrfachspeicher unterstützt wird)

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

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.fill` | `0xFC 0x0b`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Unterstützung von Speicher in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript-API.
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt Versionen an, in denen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
