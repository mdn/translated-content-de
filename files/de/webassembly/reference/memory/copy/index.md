---
title: "copy: Wasm-Textanweisung"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`copy`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers in einen anderen.

Die Anweisung gibt keinen Wert zurück. Wenn entweder der Quell- oder der Zielbereich außerhalb der Grenzen liegt, wird die Anweisung abgefangen.

## Syntax

Kopieren innerhalb des Standardspeichers

```wasm
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopieren des angegebenen Speichers (wenn Mehrfachspeicher unterstützt wird)

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

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der JavaScript API [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory).
> Der Schlüssel [multiMemory](#webassembly.multimemory) gibt an, in welchen Versionen `copy` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
