---
title: ascent-override
slug: Web/CSS/Reference/At-rules/@font-face/ascent-override
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`ascent-override`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} at-rule definiert die Ascendenty-Metrik für die Schriftart. Die Ascendenty-Metrik ist die Höhe über der Basislinie, die CSS verwendet, um Linienboxen in einem Inline-Formatierungskontext auszurichten.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der metrische Wert aus der Schriftartdatei übernommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben von Metriken einer Ersatzschrift

Die `ascent-override`-Eigenschaft kann helfen, wenn die Metriken einer Ersatzschrift überschrieben werden müssen, um besser mit denen einer primären Web-Schriftart übereinzustimmen.

```css
@font-face {
  font-family: "web-font";
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: "local-font";
  src: local("Local Font");
  ascent-override: 125%;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face/descent-override", "descent-override")}}
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
