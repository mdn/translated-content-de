---
title: WebAssembly-Definitionen
slug: WebAssembly/Reference/Definitions
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Dieses Set von Seiten beschreibt die Moduleigenschaften auf oberster Ebene, die in Wasm verfügbar sind, um Elemente wie Tabellen, Typen, Speicher, Funktionen usw. zu definieren.

## Typen

- [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func)
  - : Ein Funktionssignature, die die Kennung einer Funktion, die Parametertypen, den Körper und die Ergebnistypen definiert.

## Definitionen

- [`data`](/de/docs/WebAssembly/Reference/Definitions/data)
  - : Definiert ein Segment von Bytes, das in den linearen Speicher kopiert werden kann.
- [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)
  - : Deklariert eine Reihe von Referenzen, die in eine Wasm-`table` kopiert werden können.
- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
  - : Erstellt eine neue globale Variable.
- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)
  - : Deklariert einen Block von linearem Speicher in Einheiten von 64KB-Seiten.
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
  - : Erstellt eine neue Tabelle.
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)
  - : Deklariert einen Ausnahme-Typ, der im Modul ausgelöst werden kann.
