---
title: initial
slug: Web/CSS/initial
l10n:
  sourceCommit: 13c58b0430c3972566ea2d3a254129c18b1ed800
---

{{CSSRef}}

Das **`initial`** CSS-Schlüsselwort wendet den [initialen (oder Standard-)Wert](/de/docs/Web/CSS/initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurznotationseigenschaft {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften in einem Durchgang auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzelne separat wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} in Betracht ziehen.

## Beispiele

### Verwendung von initial zum Zurücksetzen der Farbe eines Elements

#### HTML

```html
<p>
  <span>Dieser Text ist rot.</span>
  <em>Dieser Text ist in der initialen Farbe (typischerweise schwarz).</em>
  <span>Das ist wieder rot.</span>
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

- Verwenden Sie das {{cssxref("inherit")}} Schlüsselwort, um eine Eigenschaft eines Elements mit der seines übergeordneten Elements identisch zu machen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren initialen, geerbten, zurückgesetzten oder ungültigen Zustand zurückzusetzen.
