---
title: initial
slug: Web/CSS/Reference/Values/initial
l10n:
  sourceCommit: d76ae0015414759841076ae52869839b41d6b264
---

Das **`initial`** [CSS](/de/docs/Web/CSS) Schlüsselwort wendet den [Anfangs- (oder Standard-)Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Mit `all` auf `initial` gesetzt, können alle CSS-Eigenschaften auf einmal auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} oder {{cssxref("revert-layer")}} in Betracht ziehen.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir das Schlüsselwort `initial`, um die {{cssxref("color")}}- und {{cssxref("font-size")}}-Eigenschaftswerte eines Elements zurückzusetzen.

#### HTML

```html
<p>
  This text is red and large.
  <em
    >This text is in the initial color (typically black) and initial size
    (typically 16px).</em
  >
  This is red and large again.
</p>
```

#### CSS

Wir setzen `color` und `font-size` auf das `<p>`-Element und setzen dann diese Eigenschaften auf dem {{htmlelement("em")}}-Element auf `initial`, um sie zurückzusetzen.

```css
p {
  color: red;
  font-size: 2rem;
}

em {
  color: initial;
  font-size: initial;
}
```

#### Ergebnis

{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}

Mit dem Schlüsselwort `initial` werden in diesem Beispiel die `color`- und `font-size`-Werte auf dem `em`-Element auf die Anfangswerte für [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("inherit")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, und {{cssxref("unset")}} Schlüsselwörter
- {{cssxref("all")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
