---
title: "copy: Wasm Textinstruktion"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`copy`** [Speicherinstruktion](/de/docs/WebAssembly/Reference/Memory) kopiert Daten von einem Speicherbereich in einen anderen.

Die Instruktion gibt keinen Wert zurück. Wenn entweder der Quell- oder Zielbereich außerhalb des gültigen Bereichs liegt, löst die Instruktion eine Ausnahme aus.

## Syntax

Kopieren innerhalb des Standardspeichers

```wasm
;; Daten im Standardspeicher von [100, 125] nach [50, 75] kopieren
i32.const 50 ;; Zieladresse zum Kopieren
i32.const 100 ;; Quelladresse zum Kopieren
i32.const 25 ;; Anzahl der Bytes zu kopieren
memory.copy  ;; Speicher kopieren

;; Kopieren im Standardspeicher mit einer S-Funktion
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Kopieren in einem bestimmten Speicher (falls multi-memory unterstützt wird)

```wasm
;; Daten in einem speziellen Speicher von [100, 125] nach [50, 75] kopieren
i32.const 50 ;; Zieladresse zum Kopieren
i32.const 100 ;; Quelladresse zum Kopieren
i32.const 25 ;; Anzahl der Bytes zu kopieren
memory.copy (memory 2)  ;; Speicher innerhalb des Speichers mit Index 2 kopieren

;; Kopieren innerhalb eines Speichers, der durch seinen Namen referenziert wird
i32.const 50 ;; Zieladresse zum Kopieren
i32.const 100 ;; Quelladresse zum Kopieren
i32.const 25 ;; Anzahl der Bytes zu kopieren
memory.copy (memory $memoryName) ;; Speicher kopieren mit Speicher namens "$memoryName"

;; Gleichen Speicher mit einer S-Funktion kopieren
(memory.copy (memory $memoryName) (i32.const 50) (i32.const 100) (i32.const 25))
```

### Instruktionen und Opcodes

| Instruktion   | Binäroperation |
| ------------- | -------------- |
| `memory.copy` | `0xFC 0x0a`    |

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript-API.
> Der [multiMemory](#webassembly.multimemory) Schlüssel zeigt die Versionen an, in denen `copy` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
