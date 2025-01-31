---
title: "copy: Wasm-Textanweisung"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`copy`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers zu einem anderen.

Die Anweisung gibt keinen Wert zurück. Wenn entweder die Quell- oder Zielbereich außerhalb der Grenzen liegt, löst die Anweisung eine Falle aus.

## Syntax

Kopieren innerhalb des Standard-Speichers

```wasm
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopieren des angegebenen Speichers (wenn Multi-Speicher unterstützt wird)

```wasm
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

| Anweisung     | Binäroperation |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript-API.
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
