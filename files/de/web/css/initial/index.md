---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Das **`initial`**-Schlüsselwort [CSS](/de/docs/Web/CSS) wendet den [anfänglichen (oder Standard-)Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibeeigenschaft {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften in einem Schritt auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) kann der anfängliche Wert unerwartet sein. Es ist ratsam, stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} zu verwenden.

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

Mit dem `initial`-Schlüsselwort in diesem Beispiel wird der `color`-Wert des `em`-Elements auf den anfänglichen Wert von [`color`](/de/docs/Web/CSS/color#formal_definition), wie in der Spezifikation definiert, zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements identisch mit der seines Elternteils zu machen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren anfänglichen Wert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren anfänglichen, vererbten, rückgesetzten oder nicht gesetzten Zustand zurückzusetzen.
