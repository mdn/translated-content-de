---
title: "copy: Wasm-Textanweisung"
short-title: copy
slug: WebAssembly/Reference/Memory/copy
l10n:
  sourceCommit: fb9290c58b1575b6869bd0a69ab7edb3e2184892
---

Die **`memory.copy`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Bereich eines Speichers in einen anderen.

Die Anweisung gibt keinen Wert zurück.
Wenn entweder der Quell- oder der Zielbereich außerhalb der Grenzen liegt, löst die Anweisung eine Ausnahme (trap) aus.

## Syntax

Kopieren innerhalb des Standard-Speichers

```wat
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-expression
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopieren eines angegebenen Speichers (falls Multi-Memory unterstützt wird)

```wat
;; Copy data within specific memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory 2) (memory 2) ;; Copy memory within memory with index 2

;; Copy between memories referenced by their names
i32.const 50 ;; Destination address (in $destMem)
i32.const 100 ;; Source address (in $sourceMem)
i32.const 25 ;; Number of bytes to copy
memory.copy (memory $destMem) (memory $sourceMem) ;; Copy memory from "$sourceMem" to "$destMem"

;; Copy between memories using an S-expression
(memory.copy (memory $destMem) (memory $sourceMem) (i32.const 50) (i32.const 100) (i32.const 25))
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
> Die `multiMemory`-Kompatibilitätstabelle zeigt Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.
