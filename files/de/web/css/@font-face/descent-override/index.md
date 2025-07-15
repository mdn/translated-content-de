---
title: descent-override
slug: Web/CSS/@font-face/descent-override
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`descent-override`** CSS-Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert die Descent-Metrik für die Schriftart. Die Descent-Metrik ist die Höhe unterhalb der Grundlinie, die CSS verwendet, um Linienboxen im Inline-Formatierungskontext zu layouten.

## Syntax

```css
descent-override: normal;
descent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der metrische Wert aus der Schriftartdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben der Metriken einer Schriftart-Backup

Die `descent-override`-Eigenschaft kann hilfreich sein, wenn die Metriken einer Schriftart-Backup überschrieben werden, um besser mit denen einer primären Web-Schriftart übereinzustimmen.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  descent-override: 125%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor
