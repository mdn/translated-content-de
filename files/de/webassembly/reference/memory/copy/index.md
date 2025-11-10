---
title: "copy: Wasm-Textinstruktion"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: d47940f987297e6d5202c55576afef1ddc8565e7
---

Die **`copy`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Speicherbereich in einen anderen.

Die Instruktion gibt keinen Wert zurück. Wenn der Quell- oder Zielbereich außerhalb der Grenzen liegt, wird die Instruktion angehalten.

## Syntax

Kopie innerhalb des Standardspeichers

```wat
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopie eines angegebenen Speichers (wenn mehrfache Speicher unterstützt werden)

```wat
;; Copy data in specific memory  [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory 2)  ;; Copy memory within memory with index 2

;; Copy within memory referenced by its name
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory $memoryName) ;; Copy memory with memory named "$memoryName"

;; Copy same memory using an S function
(memory.copy (memory $memoryName) (i32.const 50) (i32.const 100) (i32.const 25))
```

### Instruktionen und Opcodes

| Instruktion   | Binärer Opcode |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle gibt die Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.
