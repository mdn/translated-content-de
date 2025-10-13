---
title: ascent-override
slug: Web/CSS/@font-face/ascent-override
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Der **`ascent-override`** [CSS](/de/docs/Web/CSS) Deskriptor für die {{cssxref("@font-face")}} At-Regel definiert die Ascent-Metrik für die Schriftart. Die Ascent-Metrik ist die Höhe oberhalb der Grundlinie, die CSS verwendet, um Line-Boxen im Inline-Formatting-Kontext anzuordnen.

## Syntax

```css
ascent-override: normal;
ascent-override: 90%;
```

### Werte

- `normal`
  - : Der Standardwert. Wenn verwendet, wird der Metrikwert aus der Schriftartdatei entnommen.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben der Metriken einer Ersatzschriftart

Die `ascent-override` Eigenschaft kann helfen, wenn die Metriken einer Ersatzschriftart überschrieben werden müssen, um besser mit denen einer primären Web-Schriftart übereinzustimmen.

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
