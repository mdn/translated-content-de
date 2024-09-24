---
title: HTMLOptionsSammlung
slug: Web/API/HTMLOptionsCollection
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOptionsCollection`**-Schnittstelle repräsentiert eine Sammlung von [`<option>`](/de/docs/Web/HTML/Element/option) HTML-Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zum Auswählen aus der Liste sowie optional zum Ändern ihrer Elemente. Dieses Objekt wird nur durch die `options`-Eigenschaft von [select](/de/docs/Web/API/HTMLSelectElement) zurückgegeben.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- `length`
  - : `unsigned long`. Wie durch die Spezifikation optional erlaubt, ist diese Eigenschaft nicht schreibgeschützt. Sie können entweder Optionen vom Ende entfernen, indem Sie den Wert verringern, oder leere Optionen am Ende hinzufügen, indem Sie den Wert erhöhen. Mozilla erlaubt dies, während andere Implementierungen möglicherweise eine [DOMException](/de/docs/Web/API/DOMException) auslösen könnten.

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihrer Elternschnittstelle, [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLCollection")}}
- [Guide zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
