---
title: Farbumfang
slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`color-gamut`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich des von dem {{glossary("User Agent")}} und dem Ausgabegerät unterstützten Farb-{{glossary("Gamut")}} anzuwenden.

## Syntax

Die `color-gamut`-Funktion ist als einer der folgenden {{glossary("Farbraum", "Farbräume")}} als Schlüsselwortwerte angegeben:

- `srgb`
  - : Der User Agent und das Ausgabegerät können ungefähr den [sRGB](/de/docs/Glossary/Color_space#srgb) Gamut oder mehr unterstützen. Dies schließt die überwiegende Mehrheit der Farbdisplays ein.
- `p3`
  - : Der User Agent und das Ausgabegerät können ungefähr den von dem [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum spezifizierten Gamut oder mehr unterstützen. Der P3 Gamut ist größer als und schließt den sRGB Gamut ein.
- `rec2020`
  - : Der User Agent und das Ausgabegerät können ungefähr den von der [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) spezifizierten Gamut oder mehr unterstützen. Der REC. 2020 Gamut ist größer als und schließt den P3 Gamut ein.

## Beispiele

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### Resultat

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [`color()`](/de/docs/Web/CSS/color_value/color) Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`@media`](/de/docs/Web/CSS/@media) Regel, die verwendet wird, um den color-gamut-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
