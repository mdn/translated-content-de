---
title: "MathMLElement: tabIndex-Eigenschaft"
short-title: tabIndex
slug: Web/API/MathMLElement/tabIndex
l10n:
  sourceCommit: 7ef48e3e54f5003f735eafd4bd3a0c2aedb21c27
---

{{APIRef("MathML")}}

Die **`tabIndex`**-Eigenschaft der [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Schnittstelle repräsentiert die Tab-Reihenfolge des aktuellen MathML-Elements.

Die Tab-Reihenfolge ist wie folgt:

1. Elemente mit einem positiven `tabIndex`. Elemente, die identische `tabIndex`-Werte haben, sollten in der Reihenfolge navigiert werden, in der sie erscheinen. Die Navigation erfolgt vom niedrigsten `tabIndex` zum höchsten `tabIndex`.
2. Elemente, die das `tabIndex`-Attribut nicht unterstützen oder es unterstützen und `tabIndex` auf `0` setzen, in der Reihenfolge, in der sie erscheinen.

Deaktivierte Elemente nehmen nicht an der Tab-Reihenfolge teil. Werte müssen nicht sequentiell sein, noch müssen sie mit einem bestimmten Wert beginnen. Sie können sogar negativ sein, obwohl jeder Browser sehr große Werte kürzt.

## Wert

Ein Integer.

## Beispiele

### Verwendung der tabIndex-Eigenschaft

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

{{EmbedLiveSample("tabindex",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
- [Barrierefreiheit von tastaturnavigierbaren JavaScript-Widgets](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [`tabindex`](/de/docs/Web/MathML/Reference/Global_attributes/tabindex)
