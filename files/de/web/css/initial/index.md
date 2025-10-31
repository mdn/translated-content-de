---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **`initial`** [CSS](/de/docs/Web/CSS) Schlüsselwort wendet den [Initial- (oder Standard-)Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzformeigenschaft {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften auf ihre jeweiligen Anfangswerte in einem Schritt zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} in Betracht ziehen.

## Beispiele

### Verwenden von initial, um die Farbe für ein Element zurückzusetzen

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

Mit dem `initial` Schlüsselwort in diesem Beispiel wird der `color` Wert des `em` Elements auf den initialen Wert von [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) zurückgesetzt, wie in der Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das Benutzeragenten-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf einmal auf ihren Anfangs-, geerbten, zurückgesetzten oder unbestimmten Zustand zurückzusetzen.
