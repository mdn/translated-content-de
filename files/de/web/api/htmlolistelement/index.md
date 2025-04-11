---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOListElement`**-Schnittstelle bietet spezielle Eigenschaften (zusätzlich zu den auf der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle definierten Eigenschaften, die sie ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation von geordneten Listenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLOListElement.reversed`](/de/docs/Web/API/HTMLOListElement/reversed)
  - : Ein boolescher Wert, der das [`reversed`](/de/docs/Web/HTML/Reference/Elements/ol#reversed) widerspiegelt und definiert, ob die Nummerierung absteigend ist, das heißt, ihr Wert ist `true`, oder aufsteigend (`false`).
- [`HTMLOListElement.start`](/de/docs/Web/API/HTMLOListElement/start)
  - : Ein `long`-Wert, der das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) widerspiegelt und den Wert der ersten Nummer des ersten Elements der Liste definiert.
- [`HTMLOListElement.type`](/de/docs/Web/API/HTMLOListElement/type)

  - : Ein String-Wert, der das [`type`](/de/docs/Web/HTML/Reference/Elements/ol#type) widerspiegelt und die Art des zu verwendenden Markers definiert. Es kann die folgenden Werte haben:

    - `'1'`, was bedeutet, dass Dezimalzahlen verwendet werden: `1`, `2`, `3`, `4`, `5`, …
    - `'a'`, was bedeutet, dass das lateinische Alphabet in Kleinbuchstaben verwendet wird: `a`, `b`, `c`, `d`, `e`, …
    - `'A'`, was bedeutet, dass das lateinische Alphabet in Großbuchstaben verwendet wird: `A`, `B`, `C`, `D`, `E`, …
    - `'i'`, was bedeutet, dass die lateinischen Ziffern in Kleinbuchstaben verwendet werden: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'`, was bedeutet, dass die lateinischen Ziffern in Großbuchstaben verwendet werden: `I`, `II`, `III`, `IV`, `V`, …

- [`HTMLOListElement.compact`](/de/docs/Web/API/HTMLOListElement/compact) {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden soll. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Reference/Elements/ol#compact) Attribut wider, berücksichtigt jedoch nicht die in modernen Seiten für dieses Verhalten verwendete {{cssxref("line-height")}} CSS-Eigenschaft.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ol") }}.
