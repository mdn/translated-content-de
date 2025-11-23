---
title: "copy: Wasm-Textanweisung"
short-title: copy
slug: WebAssembly/Reference/Memory/copy
l10n:
  sourceCommit: ebf92d37f836b490640a7881c4e5db5c1dea8fe7
---

Die **`copy`**-[Memory-Anweisung](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers in einen anderen.

Die Anweisung gibt keinen Wert zurück. Wenn entweder der Quell- oder der Zielbereich außerhalb des gültigen Bereichs liegt, führt die Anweisung zu einem Fehler.

## Syntax

Kopieren innerhalb des Standardspeichers

```wat
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopieren des angegebenen Speichers (falls Multi-Memory unterstützt wird)

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

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Die `multiMemory`-Kompatibilitätstabelle gibt an, in welchen Versionen `copy` mit einem angegebenen Speicher verwendet werden kann.
