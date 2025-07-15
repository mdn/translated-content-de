---
title: color-gamut
slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Farbumfang ({{Glossary("gamut", "gamut")}}) anzuwenden, der vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt wird.

## Syntax

Das `color-gamut`-Feature wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} als Schlüsselwortwerte angegeben:

- `srgb`
  - : Der User-Agent und das Ausgabegerät können ungefähr den {{Glossary("Color_space#srgb", "sRGB")}} Farbumfang oder mehr unterstützen. Dies schließt die überwiegende Mehrheit der Farbdisplays ein.
- `p3`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Farbumfang unterstützen, der durch den [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum oder mehr spezifiziert wird. Der P3-Farbumfang ist größer und schließt den sRGB-Farbumfang ein.
- `rec2020`
  - : Der User-Agent und das Ausgabegerät können ungefähr den Farbumfang unterstützen, der durch den [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) Farbraum oder mehr spezifiziert wird. Der REC. 2020-Farbumfang ist größer und schließt den P3-Farbumfang ein.

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

- Funktion [`color()`](/de/docs/Web/CSS/color_value/color), um Farben in einem definierten Farbraum anzugeben.
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`@media`](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den color-gamut-Ausdruck anzugeben.
- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie man eine Media Query verwendet.
- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
