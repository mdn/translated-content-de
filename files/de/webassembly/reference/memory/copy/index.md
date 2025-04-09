---
title: "copy: Wasm Text-Instruktion"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Die **`copy`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers zu einem anderen.

Die Instruktion gibt keinen Wert zurück. Wenn entweder der Quell- oder der Zielbereich außerhalb der Grenzen liegt, führt die Instruktion zu einem Fehler (trap).

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

Kopieren eines angegebenen Speichers (wenn Multi-Memory unterstützt wird)

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

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der JavaScript-API [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory).
> Der Schlüssel [multiMemory](#webassembly.multimemory) zeigt die Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
