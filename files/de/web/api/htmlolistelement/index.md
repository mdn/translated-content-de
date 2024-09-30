---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOListElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die auf der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle definiert sind, die ihr durch Vererbung ebenfalls zur Verfügung stehen) zur Manipulation von geordneten Listenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOListElement.reversed`](/de/docs/Web/API/HTMLOListElement/reversed)
  - : Ein boolescher Wert, der das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) widerspiegelt und definiert, ob die Nummerierung absteigend (Wert ist `true`) oder aufsteigend (`false`) ist.
- [`HTMLOListElement.start`](/de/docs/Web/API/HTMLOListElement/start)
  - : Ein `long` Wert, der das [`start`](/de/docs/Web/HTML/Element/ol#start) widerspiegelt und den Wert der ersten Nummer des ersten Listenelements definiert.
- [`HTMLOListElement.type`](/de/docs/Web/API/HTMLOListElement/type)

  - : Ein Zeichenkettenwert, der den [`type`](/de/docs/Web/HTML/Element/ol#type) widerspiegelt und die Art des zu verwendenden Markers zum Anzeigen definiert. Es kann die folgenden Werte annehmen:

    - `'1'` bedeutet, dass Dezimalzahlen verwendet werden: `1`, `2`, `3`, `4`, `5`, …
    - `'a'` bedeutet, dass das kleine lateinische Alphabet verwendet wird: `a`, `b`, `c`, `d`, `e`, …
    - `'A'` bedeutet, dass das große lateinische Alphabet verwendet wird: `A`, `B`, `C`, `D`, `E`, …
    - `'i'` bedeutet, dass kleine lateinische Zahlen verwendet werden: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'` bedeutet, dass große lateinische Zahlen verwendet werden: `I`, `II`, `III`, `IV`, `V`, …

- [`HTMLOListElement.compact`](/de/docs/Web/API/HTMLOListElement/compact) {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden sollte. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Element/ol#compact) Attribut wider, betrachtet jedoch nicht die {{cssxref("line-height")}} CSS-Eigenschaft, die für dieses Verhalten in modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ol") }}.
