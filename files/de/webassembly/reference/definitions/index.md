---
title: WebAssembly-Definitionen
slug: WebAssembly/Reference/Definitions
l10n:
  sourceCommit: 0471f8e12d10a6fb1f301185823c8262dd18e3c6
---

Diese Seitenreihe beschreibt die Top-Level-Moduldefinitionsfunktionen in Wasm zur Definition von Elementen wie Tabellen, Typen, Speicher, Funktionen usw.

## Typen

- [`func`](/de/docs/WebAssembly/Reference/Definitions/types/func)
  - : Eine Funktionssignatur, die die Kennung, Parametertypen, den Körper und die Ergebnistypen einer Funktion definiert.

## Definitionen

- [`data`](/de/docs/WebAssembly/Reference/Definitions/data)
  - : Definiert ein Segment von Bytes, das in den linearen Speicher kopiert werden kann.
- [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)
  - : Deklariert eine Reihe von Referenzen, die in eine Wasm-`table` kopiert werden können.
- [`global`](/de/docs/WebAssembly/Reference/Definitions/global)
  - : Erstellt eine neue globale Variable.
- [`import`](/de/docs/WebAssembly/Reference/Definitions/import)
  - : Deklariert einen oder mehrere **Imports**. Jeder verweist auf einen Wert, der vom Host importiert wird (wie eine Funktion oder ein Speicher), und macht ihn im Wasm-Modul nutzbar.
- [`memory`](/de/docs/WebAssembly/Reference/Definitions/memory)
  - : Deklariert einen Block von linearem Speicher in Einheiten von 64KB-Seiten.
- [`table`](/de/docs/WebAssembly/Reference/Definitions/table)
  - : Erstellt eine neue Tabelle.
- [`tag`](/de/docs/WebAssembly/Reference/Definitions/tag)
  - : Deklariert einen Ausnahmetyp, der im Modul geworfen werden kann.

## Spezifikationen

{{Specifications}}
