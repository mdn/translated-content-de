---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`initial`** CSS-Schlüsselwort wendet den [anfänglichen (oder Standard-)Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweiseigenschaft {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften auf ihre jeweiligen Anfangswerte in einem Rutsch zurückgesetzt werden, anstatt jede einzeln zurückzusetzen.

Bei [geerbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) kann der anfängliche Wert unerwartet sein. Es sollte in Betracht gezogen werden, stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} zu verwenden.

## Beispiele

### Verwendung von initial, um die Farbe für ein Element zurückzusetzen

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

Mit dem Schlüsselwort `initial` wird in diesem Beispiel der `color`-Wert des `em`-Elements auf den anfänglichen Wert von [`color`](/de/docs/Web/CSS/color#formal_definition) zurückgesetzt, wie in der Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenebene festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbt wird, oder auf ihren anfänglichen Wert, falls nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren anfänglichen, geerbten, zurückgesetzten oder ungültigen Zustand zurückzusetzen.
