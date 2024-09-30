---
title: Initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

Das CSS-Schlüsselwort **`initial`** wendet den [anfänglichen (oder Standard-)Wert](/de/docs/Web/CSS/initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften auf ihre jeweiligen Anfangswerte auf einmal zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Inheritance#inherited_properties) kann der anfängliche Wert unerwartet sein. Sie sollten in Erwägung ziehen, stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} zu verwenden.

## Beispiele

### Verwendung von initial zum Zurücksetzen der Farbe für ein Element

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

Mit dem `initial`-Schlüsselwort in diesem Beispiel wird der `color`-Wert auf dem `em`-Element auf den in der Spezifikation definierten Anfangswert von [`color`](/de/docs/Web/CSS/color#formal_definition) zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwenden Sie das Schlüsselwort {{cssxref("inherit")}}, um eine Eigenschaft eines Elements so zu gestalten wie die seines Elternelements.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den von der Benutzer-Agent-Stylesheet festgelegten Wert (oder durch Benutzerstile, falls vorhanden) zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft erlaubt es Ihnen, alle Eigenschaften auf ihren anfänglichen, vererbten, zurückgesetzten oder unbestimmten Zustand auf einmal zurückzusetzen.
