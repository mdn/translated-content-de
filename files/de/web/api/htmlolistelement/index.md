---
title: HTMLOListElement
slug: Web/API/HTMLOListElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLOListElement`**-Schnittstelle bietet spezielle Eigenschaften (über die hinaus, die auf der regulären {{domxref("HTMLElement")}}-Schnittstelle definiert sind, die ebenfalls durch Vererbung verfügbar sind) für die Manipulation von geordneten Listen-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLOListElement.reversed")}}
  - : Ein boolescher Wert, der das [`reversed`](/de/docs/Web/HTML/Element/ol#reversed) widerspiegelt und definiert, ob die Nummerierung absteigend ist, also ist ihr Wert `true`, oder aufsteigend (`false`).
- {{domxref("HTMLOListElement.start")}}
  - : Ein `long`-Wert, der das [`start`](/de/docs/Web/HTML/Element/ol#start) widerspiegelt und den Wert der ersten Nummer des ersten Elements der Liste definiert.
- {{domxref("HTMLOListElement.type")}}

  - : Ein String-Wert, der das [`type`](/de/docs/Web/HTML/Element/ol#type) widerspiegelt und die Art des zu verwendenden Markers definiert. Es kann die folgenden Werte haben:

    - `'1'`, was bedeutet, dass Dezimalzahlen verwendet werden: `1`, `2`, `3`, `4`, `5`, …
    - `'a'`, was bedeutet, dass das lateinische Alphabet in Kleinbuchstaben verwendet wird: `a`, `b`, `c`, `d`, `e`, …
    - `'A'`, was bedeutet, dass das lateinische Alphabet in Großbuchstaben verwendet wird: `A`, `B`, `C`, `D`, `E`, …
    - `'i'`, was bedeutet, dass die römischen Zahlen in Kleinbuchstaben verwendet werden: `i`, `ii`, `iii`, `iv`, `v`, …
    - `'I'`, was bedeutet, dass die römischen Zahlen in Großbuchstaben verwendet werden: `I`, `II`, `III`, `IV`, `V`, …

- {{domxref("HTMLOListElement.compact")}} {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, dass der Abstand zwischen Listenelementen reduziert werden sollte. Diese Eigenschaft spiegelt nur das [`compact`](/de/docs/Web/HTML/Element/ol#compact)-Attribut wider; sie berücksichtigt nicht die {{cssxref("line-height")}} CSS-Eigenschaft, die für dieses Verhalten auf modernen Seiten verwendet wird.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("ol") }}.
