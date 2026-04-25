---
title: "`initial` CSS-Schlüsselwort"
short-title: initial
slug: Web/CSS/Reference/Values/initial
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

Das **`initial`** [CSS](/de/docs/Web/CSS)-Schlüsselwort wendet den [initialen (oder Standard-)Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) einer Eigenschaft auf ein Element an. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Wenn `all` auf `initial` gesetzt ist, können alle CSS-Eigenschaften in einem Schritt auf ihre jeweiligen Anfangswerte zurückgesetzt werden, anstatt jede einzeln wiederherzustellen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Sie sollten stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} oder {{cssxref("revert-rule")}} in Betracht ziehen.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel verwenden wir das `initial` Schlüsselwort, um die Eigenschaftswerte `color` und `font-size` eines Elements zurückzusetzen.

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

Wir setzen `color` und `font-size` am `<p>`-Element fest und setzen diese Eigenschaften dann am {{htmlelement("em")}}-Element auf `initial`, um sie zurückzusetzen.

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

Mit dem `initial` Schlüsselwort in diesem Beispiel werden die `color`- und `font-size`-Werte auf dem `em`-Element auf die Anfangswerte für [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("revert-rule")}}, und {{cssxref("unset")}}
- {{cssxref("all")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
