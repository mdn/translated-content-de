---
title: "fill: Wasm Text-Anweisung"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`fill`** [Speicher-Anweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein angegebenes Byte.

Die Anweisung gibt keinen Wert zurück.
Es entsteht eine Ausnahme (trap), wenn der angegebene Speicherbereich außerhalb der Grenzen liegt.

## Syntax

Füllen innerhalb des Standardspeichers

```wasm
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-function
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Füllen des angegebenen Speichers (wenn Multi-Speicher unterstützt wird)

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
> Speichersupport in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript API.
> Der Schlüssel [multiMemory](#webassembly.multimemory) zeigt Versionen an, in denen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
