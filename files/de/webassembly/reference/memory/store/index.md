---
title: "store: Wasm-Textanweisung"
short-title: store
slug: WebAssembly/Reference/Memory/Store
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`store`** [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) werden verwendet, um eine Zahl vom Stack in einem Speicher abzulegen.

Es gibt `store`-Anweisungen zum Ablegen von `i32`, `i64`, `f32` und `f64` im Speicher. Für die Ganzzahlen gibt es separate Anweisungsvarianten, um eine weit typisierte Zahl in eine schmalere Zahl im Speicher zu speichern. Beispielsweise können Sie eine 32-Bit-Zahl in einem 8-Bit-Slot im Speicher mit `i32.store8` speichern. Wenn die Zahl nicht in den schmaleren Zahlentyp passt, wird sie umschlossen. Alle Varianten sind [unten aufgelistet](#anweisungen_und_opcodes).

{{EmbedInteractiveExample("pages/wat/store.html", "tabbed-taller")}}

## Syntax

Speichern im Standardspeicher

```wasm
;; Speichern des Werts im Standardspeicher an einem bestimmten Offset
i32.const 0 ;; Stack-Variable mit Offset im Speicher zum Ablegen der Zahl
i32.const 20 ;; Stack-Variable mit der abzulegenden Zahl
i32.store ;; im Standardspeicher ablegen

;; Speichern mit S-Funktion (gleiche Werte und Offset)
(i32.store (i32.const 0) (i32.const 20))
```

Speichern in einem bestimmten Speicher (wenn Multi-Memory unterstützt wird)

```wasm
;; Speichern im Speicher, der durch seinen Index referenziert wird
i32.const 0 ;; Offset im Speicher, um die Zahl zu speichern
i32.const 20 ;; die abzulegende Zahl
i32.store (memory 2)  ;; im Speicher mit Index 2 speichern

;; Speichern im Speicher, der durch seinen Namen referenziert wird
i32.const 0 ;; Offset, um die Zahl zu speichern
i32.const 20 ;; die abzulegende Zahl
i32.store (memory $memoryName)  ;; im Speicher mit dem Namen "$memoryName" speichern

;; Im gleichen Speicher mit einer S-Funktion speichern
(i32.store (memory $memoryName) (i32.const 0) (i32.const 20))
```

### Anweisungen und Opcodes

| Anweisung     | Binärer Opcode |
| ------------- | -------------- |
| `i32.store`   | `0x36`         |
| `i64.store`   | `0x37`         |
| `f32.store`   | `0x38`         |
| `f64.store`   | `0x39`         |
| `i32.store8`  | `0x3a`         |
| `i32.store16` | `0x3b`         |
| `i64.store8`  | `0x3c`         |
| `i64.store16` | `0x3d`         |
| `i64.store32` | `0x3e`         |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

> [!NOTE]
> Die Speicherunterstützung in Wasm-Modulen entspricht der JavaScript-API [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory).
> Der [multiMemory](#webassembly.multimemory)-Schlüssel gibt an, in welchen Versionen `store` mit einem angegebenen Speicher verwendet werden kann.

{{Compat}}
