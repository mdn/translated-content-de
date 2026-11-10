---
title: "MathMLElement: Eigenschaft tabIndex"
short-title: tabIndex
slug: Web/API/MathMLElement/tabIndex
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("MathML")}}

Die Eigenschaft **`tabIndex`** der Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) gibt die Position des aktuellen MathML-Elements in der Tabulatorreihenfolge an.

Die Tabulatorreihenfolge ist wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente mit identischen `tabIndex`-Werten werden in der Reihenfolge angesteuert, in der sie erscheinen. Die Navigation erfolgt vom niedrigsten zum höchsten `tabIndex`.
2. Elemente, die das Attribut `tabIndex` nicht unterstützen, oder es unterstützen und deren `tabIndex` den Wert `0` hat, in der Reihenfolge, in der sie erscheinen.

Deaktivierte Elemente nehmen nicht an der Tabulatorreihenfolge teil. Die Werte müssen weder aufeinanderfolgend sein noch mit einem bestimmten Wert beginnen. Sie können sogar negativ sein, allerdings begrenzt jeder Browser sehr große Werte.

## Wert

Eine Ganzzahl.

## Beispiele

### Verwendung der Eigenschaft tabIndex

```html
<math id="math1" tabindex="2">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
</math>

<math id="math2">
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>
```

```js
const math1 = document.getElementById("math1");
const math2 = document.getElementById("math2");

// Access and modify the tabIndex
console.log(math1.tabIndex); // 2
math2.tabIndex = 1; // Add math2 to the tab order before math1

// Programmatically focus on an element with negative tabIndex
math1.tabIndex = -1;
math1.focus(); // Works, even though it is not in the tabbing order
```

### Ergebnis

{{EmbedLiveSample("using_the_tabindex_property",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
- [Barrierefreiheit von JavaScript-Widgets, die mit der Tastatur bedient werden können](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
