---
title: "copy: Wasm Text-Instruktion"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`copy`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers in einen anderen.

Die Instruktion gibt keinen Wert zurück.
Wenn entweder der Quell- oder der Zielbereich außerhalb der Grenzen liegt, löst die Instruktion eine Ausnahme aus.

## Syntax

Kopie innerhalb des Standardspeichers

```wasm
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopie eines angegebenen Speichers (falls Multi-Memory unterstützt wird)

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

### Instruktionen und Opcodes

| Instruktion   | Binäroperation |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Unterstützung von Speicher in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript-API.
> Der [multiMemory](#webassembly.multimemory)-Schlüssel gibt Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
