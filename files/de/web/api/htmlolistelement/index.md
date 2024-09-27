---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOListElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die auf der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle definiert sind, die sie auch durch Vererbung zur Verfügung hat) zur Manipulation von geordneten Listenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOListElement.reversed`](/de/docs/Web/API/HTMLOListElement/reversed)
  - : Ein boolescher Wert, der das Attribut [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) widerspiegelt und definiert, ob die Nummerierung absteigend ist, d.h. sein Wert ist `true`, oder aufsteigend (`false`).
- [`HTMLOListElement.start`](/de/docs/Web/API/HTMLOListElement/start)
  - : Ein `long`-Wert, der das Attribut [`start`](/de/docs/Web/HTML/Element/ol#start) widerspiegelt und den Wert der ersten Nummer des ersten Elements der Liste definiert.
- [`HTMLOListElement.type`](/de/docs/Web/API/HTMLOListElement/type)

  - : Ein Zeichenfolgenwert, der das Attribut [`type`](/de/docs/Web/HTML/Element/ol#type) widerspiegelt und die Art des zu verwendenden Markers zur Anzeige definiert. Es kann die folgenden Werte haben:

    - `'1'`, was bedeutet, dass Dezimalzahlen verwendet werden: `1`, `2`, `3`, `4`, `5`, …
    - `'a'`, was bedeutet, dass das kleine lateinische Alphabet verwendet wird: `a`, `b`, `c`, `d`, `e`, …
    - `'A'`, was bedeutet, dass das große lateinische Alphabet verwendet wird: `A`, `B`, `C`, `D`, `E`, …
    - `'i'`, was bedeutet, dass die kleinen lateinischen Ziffern verwendet werden: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'`, was bedeutet, dass die großen lateinischen Ziffern verwendet werden: `I`, `II`, `III`, `IV`, `V`, …

- [`HTMLOListElement.compact`](/de/docs/Web/API/HTMLOListElement/compact) {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, dass der Abstand zwischen Listenelementen reduziert werden soll. Diese Eigenschaft spiegelt nur das Attribut [`compact`](/de/docs/Web/HTML/Element/ol#compact) wider und berücksichtigt nicht die für dieses Verhalten in modernen Seiten verwendete {{cssxref("line-height")}} CSS-Eigenschaft.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ol") }}.
