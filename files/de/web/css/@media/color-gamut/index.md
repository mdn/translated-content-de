---
title: color-gamut
slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`color-gamut`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich des von dem [User-Agent](/de/docs/Glossary/user_agent) und dem Ausgabegerät unterstützten Farb-[Gamut](/de/docs/Glossary/gamut) anzuwenden.

## Syntax

Das `color-gamut`-Feature wird als einer der folgenden [Farbräume](/de/docs/Glossary/color_space) als Schlüsselwortwert angegeben:

- `srgb`
  - : Der User-Agent und das Ausgabegerät können ungefähr den [sRGB](/de/docs/Glossary/Color_space#srgb)-Gamut oder mehr unterstützen. Dies umfasst die überwiegende Mehrheit der Farbanzeigen.
- `p3`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der vom Farbraum [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) oder mehr spezifiziert wird. Der P3-Gamut ist größer als und umfasst den sRGB-Gamut.
- `rec2020`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der vom Farb­raum­ [ITU-R Recommendation BT.2020](https://en.wikipedia.org/wiki/Rec._2020) oder mehr spezifiziert wird. Der REC. 2020 Gamut ist größer als und umfasst den P3-Gamut.

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

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion zur Angabe von Farben in einem definierten Farbraum.
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`@media`](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den color-gamut-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Media Query verwendet wird.
- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
