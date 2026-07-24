---
title: WebAssembly Tabellenanweisungen
slug: WebAssembly/Reference/Table
l10n:
  sourceCommit: 581f82a63c000aa702c51f17f610fcd8e4f97ca8
---

Diese Seitenreihe beschreibt die Tabellenanweisungen in Wasm, die zum Erstellen und Bearbeiten von [Tabellen](/de/docs/WebAssembly/Reference/Definitions/table) verfügbar sind.

> [!NOTE]
> Eine gleichwertige Funktionalität ist über die JavaScript-Schnittstelle [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) API verfügbar.

- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
  - : Setzt einen Bereich von Tabellenelementen auf denselben Wert.
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
  - : Ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
  - : Erhöht die Größe der Tabelle um eine angegebene Anzahl von Elementen.
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
  - : Ändert den Wert, der in einem bestimmten Tabellenelement gespeichert ist.
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
  - : Gibt die aktuelle Größe der Tabelle zurück.
