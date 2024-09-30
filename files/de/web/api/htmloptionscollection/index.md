---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOptionsCollection`**-Schnittstelle repräsentiert eine Sammlung von [`<option>`](/de/docs/Web/HTML/Element/option)-HTML-Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zur Auswahl aus der Liste sowie optional zur Änderung ihrer Elemente. Dieses Objekt wird nur von der `options`-Eigenschaft von [select](/de/docs/Web/API/HTMLSelectElement) zurückgegeben.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
  - : Gibt die Anzahl der Optionen in der Sammlung zurück oder setzt sie.
- [`HTMLOptionsCollection.selectedIndex`](/de/docs/Web/API/HTMLOptionsCollection/selectedIndex)
  - : Die Indexnummer des ersten ausgewählten {{HTMLElement("option")}}-Elements. Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

- [`HTMLOptionsCollection.add()`](/de/docs/Web/API/HTMLOptionsCollection/add)
  - : Fügt ein [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)- oder [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)-Element zur Sammlung der `option`-Elemente hinzu oder fügt es vor einer angegebenen Option hinzu.
- [`HTMLOptionsCollection.remove()`](/de/docs/Web/API/HTMLOptionsCollection/remove)
  - : Entfernt das Element an der angegebenen Stelle aus der Optionssammlung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [Indexierte Sammlungen Leitfaden](/de/docs/Web/JavaScript/Guide/Indexed_collections)
