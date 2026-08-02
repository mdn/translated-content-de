---
title: WebAssembly table-Anweisungen
slug: WebAssembly/Reference/Table
l10n:
  sourceCommit: f35f247e16286c4e0b1c88fba3d8ce01683c189b
---

Diese Seitenreihe beschreibt die in Wasm verfügbaren Tabellenanweisungen zum Erstellen und Manipulieren von [Tabellen](/de/docs/WebAssembly/Reference/Definitions/table).

> [!NOTE]
> Eine gleichwertige Funktionalität ist über die JavaScript-API [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) verfügbar.

- [`table.copy`](/de/docs/WebAssembly/Reference/Table/copy)
  - : Kopiert Referenzen von einer [`Tabelle`](/de/docs/WebAssembly/Reference/Definitions/table) an eine andere Stelle.
- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
  - : Setzt eine Reihe von Tabellenelementen auf denselben Wert.
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
  - : Ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
  - : Erhöht die Größe der Tabelle um eine angegebene Anzahl von Elementen.
- [`table.init`](/de/docs/WebAssembly/Reference/Table/init)
  - : Kopiert manuell die Referenzen aus einer passiven [`elem`](/de/docs/WebAssembly/Reference/Definitions/elem)-Definition in eine `Tabelle`.
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
  - : Ändert den Wert, der in einem bestimmten Tabellenelement gespeichert ist.
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
  - : Gibt die aktuelle Größe der Tabelle zurück.
