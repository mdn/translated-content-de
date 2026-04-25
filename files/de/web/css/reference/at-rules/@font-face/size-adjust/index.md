---
title: "`size-adjust` CSS-Attribut-Deskriptor"
short-title: size-adjust
slug: Web/CSS/Reference/At-rules/@font-face/size-adjust
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`size-adjust`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} Attribut-Regel definiert einen Multiplikator für Glyphenkonturen und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in derselben Schriftgröße gerendert werden.

Der `size-adjust` Deskriptor verhält sich ähnlich wie die {{cssxref("font-size-adjust")}} Eigenschaft. Er berechnet eine Anpassung pro Schriftart durch Abgleichen der x-Höhen.

## Syntax

```css
size-adjust: 90%;
```

### Werte

- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert mit einem Initialwert von 100%.

Alle mit dieser Schriftart verbundenen Metriken werden um den angegebenen Prozentsatz skaliert. Dies schließt Glyphenvorschübe, Baselinientabellen und von {{cssxref("@font-face")}}-Deskriptoren bereitgestellte Überschreibungen ein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschriftart

Die `size-adjust` Eigenschaft kann helfen, wenn die Metriken einer Ersatzschriftart überschrieben werden sollen, um besser mit denen einer primären Webschriftart übereinzustimmen.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  size-adjust: 90%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}} Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}} Deskriptor
- {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor
- {{cssxref("@font-face/src", "src")}} Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
- {{cssxref('font-size-adjust')}} Eigenschaft
