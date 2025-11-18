---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOListElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die in der normalen [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle definiert sind, auf die sie auch durch Vererbung zugreift) für die Manipulation von geordneten Listen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOListElement.reversed`](/de/docs/Web/API/HTMLOListElement/reversed)
  - : Ein boolescher Wert, der das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) widerspiegelt und definiert, ob die Nummerierung absteigend ist (d.h. der Wert ist `true`) oder aufsteigend (`false`).
- [`HTMLOListElement.start`](/de/docs/Web/API/HTMLOListElement/start)
  - : Ein `long`-Wert, der das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) widerspiegelt und den Wert der ersten Zahl des ersten Elements der Liste definiert.
- [`HTMLOListElement.type`](/de/docs/Web/API/HTMLOListElement/type)
  - : Ein String-Wert, der den [`type`](/de/docs/Web/HTML/Reference/Elements/ol#type) widerspiegelt und die Art des verwendeten Markers zur Anzeige definiert. Es kann folgende Werte annehmen:
    - `'1'` bedeutet, dass dezimale Zahlen verwendet werden: `1`, `2`, `3`, `4`, `5`, …
    - `'a'` bedeutet, dass das lateinische Alphabet in Kleinbuchstaben verwendet wird: `a`, `b`, `c`, `d`, `e`, …
    - `'A'` bedeutet, dass das lateinische Alphabet in Großbuchstaben verwendet wird: `A`, `B`, `C`, `D`, `E`, …
    - `'i'` bedeutet, dass die lateinischen Zahlen in Kleinbuchstaben verwendet werden: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'` bedeutet, dass die lateinischen Zahlen in Großbuchstaben verwendet werden: `I`, `II`, `III`, `IV`, `V`, …

- [`HTMLOListElement.compact`](/de/docs/Web/API/HTMLOListElement/compact) {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden sollte. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Reference/Elements/ol#compact)-Attribut wider und berücksichtigt nicht die {{cssxref("line-height")}} CSS-Eigenschaft, die für dieses Verhalten auf modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ol") }}.
