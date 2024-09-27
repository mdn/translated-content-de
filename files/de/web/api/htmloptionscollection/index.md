---
title: HTMLOptionsCollection
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOptionsCollection`**-Schnittstelle repräsentiert eine Sammlung von [`<option>`](/de/docs/Web/HTML/Element/option)-HTML-Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste sowie optional zum Ändern ihrer Elemente. Dieses Objekt wird nur von der `options`-Eigenschaft des [select](/de/docs/Web/API/HTMLSelectElement)-Elements zurückgegeben.

{{InheritanceDiagram}}

## Instanzeigenschaften

- `length`
  - : `unsigned long`. Wie spezifikationsgemäß optional erlaubt, ist diese Eigenschaft nicht schreibgeschützt. Sie können entweder Optionen vom Ende entfernen, indem Sie den Wert verringern, oder leere Optionen am Ende hinzufügen, indem Sie den Wert erhöhen. Mozilla erlaubt dies, während andere Implementierungen möglicherweise eine [DOMException](/de/docs/Web/API/DOMException) auslösen könnten.

## Instanzmethoden

_Diese Schnittstelle erbt die Methoden ihrer Elternschnittstelle, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
