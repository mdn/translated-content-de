---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Der **`size-adjust`** [CSS](/de/docs/Web/CSS)-Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert einen Multiplikator für Glyphenkonturen und Metriken, die mit dieser Schriftart verbunden sind. Dies erleichtert es, die Designs verschiedener Schriftarten zu harmonisieren, wenn sie in derselben Schriftgröße gerendert werden.

Der `size-adjust`-Deskriptor verhält sich ähnlich wie die {{cssxref("font-size-adjust")}}-Eigenschaft. Er berechnet eine Anpassung pro Schriftart durch das Anpassen der ex-Höhen.

## Syntax

```css
size-adjust: 90%;
```

### Werte

- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert mit einem anfänglichen Wert von 100 %.

Alle mit dieser Schriftart verbundenen Metriken werden mit dem angegebenen Prozentsatz skaliert. Dies umfasst Glyphenvorschübe, Baseline-Tabellen und durch {{cssxref("@font-face")}}-Deskriptoren bereitgestellte Überschreibungen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschriftart

Die `size-adjust`-Eigenschaft kann hilfreich sein, wenn die Metriken einer Ersatzschriftart überschrieben werden, um besser mit denen einer primären Webschriftart übereinzustimmen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local("Local Font");
  size-adjust: 90%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/font-display", "font-display")}}-Deskriptor
- {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor
- {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptor
- {{cssxref("@font-face/font-style", "font-style")}}-Deskriptor
- {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptor
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}-Deskriptor
- {{cssxref("@font-face/src", "src")}}-Deskriptor
- {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor
- {{cssxref('font-size-adjust')}}-Eigenschaft
