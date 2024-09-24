---
title: "fill: Wasm-Textanweisung"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`fill`** [Speicheranweisung](/de/docs/WebAssembly/Reference/Memory) setzt alle Bytes in einem Speicherbereich auf ein gegebenes Byte.

Die Anweisung gibt keinen Wert zurück. Sie löst eine Ausnahme aus, wenn der angegebene Speicherbereich außerhalb der Grenzen liegt.

## Syntax

Füllen innerhalb des Standardspeichers

```wasm
;; Füllen des Bereichs bei Offset/Bereich im Standardspeicher mit 255
i32.const 200 ;; Der Zeiger auf den zu aktualisierenden Bereich
i32.const 255 ;; Der Wert, auf den jedes Byte gesetzt wird (muss < 256 sein)
i32.const 100 ;; Die Anzahl der zu aktualisierenden Bytes
memory.fill ;; Standardspeicher füllen

;; Standardspeicher mit einer S-Funktion füllen
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Füllen des angegebenen Speichers (wenn Multi-Speicher unterstützt wird)

```wasm
;; Füllen eines spezifischen Speichers, der durch seinen Index referenziert wird
i32.const 200 ;; Der Zeiger auf den zu aktualisierenden Bereich
i32.const 255 ;; Der Wert, auf den jedes Byte gesetzt wird (muss < 256 sein)
i32.const 100 ;; Die Anzahl der zu aktualisierenden Bytes
memory.fill (memory 1) ;; Speicher mit Index 1 füllen

;; Speicher füllen, der durch seinen Namen referenziert wird
i32.const 200 ;; Der Zeiger auf den zu aktualisierenden Bereich
i32.const 255 ;; Der Wert, auf den jedes Byte gesetzt wird (muss < 256 sein)
i32.const 100 ;; Die Anzahl der zu aktualisierenden Bytes
memory.fill (memory $memoryName) ;; Speicher mit dem Namen "$memoryName" füllen

;; Gleichen Speicher mit einer S-Funktion füllen
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
> Speicherunterstützung in Wasm-Modulen entspricht der [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) JavaScript API.
> Der Schlüssel [multiMemory](#webassembly.multimemory) zeigt Versionen an, in denen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
