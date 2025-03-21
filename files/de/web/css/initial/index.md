---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **`initial`** CSS-Schlüsselwort wendet den [anfänglichen (oder Standard-) Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Mit `all`, das auf `initial` gesetzt ist, können alle CSS-Eigenschaften auf ihre jeweiligen Anfangswerte gleichzeitig zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [geerbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten erwägen, stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} zu verwenden.

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

Mit dem Schlüsselwort `initial` in diesem Beispiel wird der `color`-Wert des `em`-Elements auf den Anfangswert von [`color`](/de/docs/Web/CSS/color#formal_definition) zurückgesetzt, wie in der Spezifikation definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um die Eigenschaft eines Elements mit der seines Elternteils gleichzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den im User-Agent-Stylesheet festgelegten Wert (oder auf Benutzereinstellungen, falls vorhanden) zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren anfänglichen Wert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren anfänglichen, geerbten, zurückgesetzten oder ungelösten Zustand zurückzusetzen.
