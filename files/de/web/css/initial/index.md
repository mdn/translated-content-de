---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Das **`initial`** CSS-Schlüsselwort wendet den [anfänglichen (oder Standard-)Wert](/de/docs/Web/CSS/CSS_cascade/initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der Kurzschreibweise-Eigenschaft {{cssxref("all")}}. Wenn `all` auf `initial` gesetzt wird, können alle CSS-Eigenschaften auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzeln zurückzusetzen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} in Betracht ziehen.

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

Mit dem Schlüsselwort `initial` wird in diesem Beispiel der `color`-Wert des `em`-Elements auf den Anfangswert von [`color`](/de/docs/Web/CSS/color#formal_definition) zurückgesetzt, wie in der Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements mit der seiner Eltern zu identisch zu machen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der vom Benutzeragenten-Stylesheet (oder von Benutzerstilen, falls vorhanden) festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, alle Eigenschaften auf einmal auf ihren Anfangswert, vererbten Wert, zurückgenommenen Wert oder nicht gesetzten Wert zurückzusetzen.
