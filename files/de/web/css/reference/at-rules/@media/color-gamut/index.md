---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Das **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich des vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützten Farb-{{Glossary("gamut", "Gamut")}} anzuwenden.

## Syntax

Das `color-gamut`-Feature wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} mit Schlüsselwerten spezifiziert:

- `srgb`
  - : Der User-Agent und das Ausgabegerät können etwa den {{Glossary("Color_space#srgb", "sRGB")}}-Gamut oder mehr unterstützen. Dies schließt die überwiegende Mehrheit der Farbdisplays ein.
- `p3`
  - : Der User-Agent und das Ausgabegerät können etwa den im [Display P3](https://registry.color.org/rgb-registry/displayp3) Farbraum spezifizierten Gamut oder mehr unterstützen. Der P3-Gamut ist größer als und schließt den sRGB-Gamut ein.
- `rec2020`
  - : Der User-Agent und das Ausgabegerät können etwa den im [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) Farbraum spezifizierten Gamut oder mehr unterstützen. Der REC. 2020-Gamut ist größer als und schließt den P3-Gamut ein.

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

- [`color()`](/de/docs/Web/CSS/Reference/Values/color_value/color)-Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)-Modul
- {{cssxref("@media")}}-At-Regel, die verwendet wird, um den color-gamut-Ausdruck zu spezifizieren.
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), um zu verstehen, wann und wie eine Media Query verwendet wird.
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)-Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
