---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLOptionsCollection`**-Interface repräsentiert eine Sammlung von [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-HTML-Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste sowie optional zum Ändern ihrer Elemente. Dieses Objekt wird nur durch die `options`-Eigenschaft von [select](/de/docs/Web/API/HTMLSelectElement) zurückgegeben.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
  - : Gibt die Anzahl der Optionen in der Sammlung zurück oder setzt sie.
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
  - : Die Indexnummer des ersten ausgewählten {{HTMLElement("option")}}-Elements. Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

- [`HTMLOptionsCollection.add()`](/de/docs/Web/API/HTMLOptionsCollection/add)
  - : Fügt ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) oder [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)-Element zur Sammlung von `option`-Elementen hinzu oder fügt es vor einer angegebenen Option hinzu.
- [`HTMLOptionsCollection.remove()`](/de/docs/Web/API/HTMLOptionsCollection/remove)
  - : Entfernt das Element an dem angegebenen Index aus der Optionssammlung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [Leitfaden für indizierte Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
