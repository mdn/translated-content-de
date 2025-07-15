---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`size-adjust`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert einen Multiplikator für Glyphenumrisse und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert die Harmonisierung der Designs verschiedener Schriftarten, wenn sie in derselben Schriftgröße gerendert werden.

Der `size-adjust` Deskriptor verhält sich ähnlich wie die {{cssxref("font-size-adjust")}} Eigenschaft. Er berechnet eine Anpassung pro Schriftart durch das Abgleichen der x-Höhen.

## Syntax

```css
size-adjust: 90%;
```

### Werte

- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert mit einem Initialwert von 100%.

Alle mit dieser Schriftart verbundenen Metriken werden durch den angegebenen Prozentsatz skaliert. Dies umfasst Glyphenerweiterungen, Basistabellen und Überschreibungen, die durch {{cssxref("@font-face")}}-Deskriptoren bereitgestellt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschrift

Die `size-adjust` Eigenschaft kann helfen, wenn die Metriken einer Ersatzschrift überschrieben werden, um besser mit denen einer primären Webschrift übereinzustimmen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
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
