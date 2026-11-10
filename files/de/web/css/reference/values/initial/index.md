---
title: CSS-Schlüsselwort `initial`
short-title: initial
slug: Web/CSS/Reference/Values/initial
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **CSS-Schlüsselwort `initial`** weist einem Element den [Anfangswert (oder Standardwert)](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) einer [CSS](/de/docs/Web/CSS)-Eigenschaft zu. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}. Wird `all` auf `initial` gesetzt, lassen sich alle CSS-Eigenschaften auf einmal auf ihre jeweiligen Anfangswerte zurücksetzen, statt jede einzeln zurückzusetzen.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Inheritance#inherited_properties) kann der Anfangswert unerwartet sein. Ziehen Sie stattdessen die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} oder {{cssxref("revert-rule")}} in Betracht.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir das Schlüsselwort `initial`, um die Werte der Eigenschaften {{cssxref("color")}} und {{cssxref("font-size")}} eines Elements zurückzusetzen.

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

Wir legen `color` und `font-size` für das Element `<p>` fest und setzen diese Eigenschaften anschließend beim Element {{htmlelement("em")}} auf `initial` zurück.

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

{{EmbedLiveSample('basic_usage')}}

Durch das Schlüsselwort `initial` werden in diesem Beispiel die Werte für `color` und `font-size` beim Element `em` auf die jeweiligen Anfangswerte von [`color`](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) und [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size#formal_definition) zurückgesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schlüsselwörter {{cssxref("inherit")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}, {{cssxref("revert-rule")}} und {{cssxref("unset")}}
- {{cssxref("all")}}
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
