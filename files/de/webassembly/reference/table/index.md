---
title: WebAssembly-Tabellenanweisungen
slug: WebAssembly/Reference/Table
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Diese Seitenreihe beschreibt die Tabellenanweisungen in Wasm, die zum Erstellen und Verwalten von [Tabellen](/de/docs/WebAssembly/Reference/Definitions/table) verfügbar sind.

> [!NOTE]
> Eine gleichwertige Funktionalität ist über die [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) API auch in JavaScript verfügbar.

## Anweisungen

- [`table.fill`](/de/docs/WebAssembly/Reference/Table/fill)
  - : Setzt eine Reihe von Tabellenelementen auf denselben Wert.
- [`table.get`](/de/docs/WebAssembly/Reference/Table/get)
  - : Ruft die Referenz ab, die an einem bestimmten Tabellenindex gespeichert ist.
- [`table.grow`](/de/docs/WebAssembly/Reference/Table/grow)
  - : Erhöht die Größe der Tabelle um eine angegebene Anzahl von Elementen.
- [`table.set`](/de/docs/WebAssembly/Reference/Table/set)
  - : Ändert den in einem bestimmten Tabellenelement gespeicherten Wert.
- [`table.size`](/de/docs/WebAssembly/Reference/Table/size)
  - : Gibt die aktuelle Größe der Tabelle zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
