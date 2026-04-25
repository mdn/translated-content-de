---
title: "`descent-override` CSS At-Regel-Deskriptor"
short-title: descent-override
slug: Web/CSS/Reference/At-rules/@font-face/descent-override
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`descent-override`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert die Abwärtsmetrik der Schriftart. Die Abwärtsmetrik ist der Bereich unterhalb der Grundlinie, den CSS verwendet, um Linienelemente im Inline-Formatierungskontext zu layouten.

## Syntax

```css
descent-override: normal;
descent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn dieser Wert verwendet wird, wird der Metrikwert aus der Schriftartdatei entnommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben der Metriken einer Ersatzschriftart

Die Eigenschaft `descent-override` kann hilfreich sein, wenn Metriken einer Ersatzschriftart überschrieben werden sollen, um besser mit einer primären Webschriftart übereinzustimmen.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
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
