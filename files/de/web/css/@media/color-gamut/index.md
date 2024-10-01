---
title: color-gamut
slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`color-gamut`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um CSS-Stile basierend auf dem ungefähren Bereich des von dem {{Glossary("user_agent", "User Agent")}} und dem Ausgabegerät unterstützten Farb-{{Glossary("gamut", "Gamut")}} anzuwenden.

## Syntax

Die `color-gamut`-Funktion wird als einer der folgenden {{Glossary("color_space", "Farbräume")}} als Schlüsselwortwerte angegeben:

- `srgb`
  - : Der User Agent und das Ausgabegerät können ungefähr den {{Glossary("Color_space#srgb", "sRGB")}} Gamut oder mehr unterstützen. Dies umfasst die überwiegende Mehrheit der Farbdisplays.
- `p3`
  - : Der User Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter) Farbraum oder mehr angegeben ist. Der P3 Gamut ist größer und umfasst den sRGB Gamut.
- `rec2020`
  - : Der User Agent und das Ausgabegerät können ungefähr den Gamut unterstützen, der durch den [ITU-R Empfehlung BT.2020](https://en.wikipedia.org/wiki/Rec._2020) Farbraum oder mehr angegeben ist. Der REC. 2020 Gamut ist größer und umfasst den P3 Gamut.

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

- [`color()`](/de/docs/Web/CSS/color_value/color)-Funktion, um Farben in einem definierten Farbraum anzugeben.
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`@media`](/de/docs/Web/CSS/@media) At-Regel, die verwendet wird, um den color-gamut-Ausdruck anzugeben.
- [Verwendung von Medienanfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um zu verstehen, wann und wie eine Medienanfrage verwendet werden sollte.
- [CSS Medienanfragen](/de/docs/Web/CSS/CSS_media_queries) Modul
- [sRGB](https://en.wikipedia.org/wiki/SRGB) auf Wikipedia
