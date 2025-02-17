---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät Inhalte behandelt, die entlang der Inline-Achse über den initialen [Enthaltungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) hinausgehen.

> [!NOTE]
> Die Eigenschaft `overflow-inline` bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie an, wie das Gerät mit diesem Überlauf umgeht. Typischerweise ist das Verhalten auf Bildschirmen in den meisten Browsern "scroll": Wenn Inhalte den verfügbaren horizontalen Platz überschreiten, ermöglicht das Gerät das Scrollen, um auf die überfließenden Inhalte zuzugreifen.

## Syntax

Die `overflow-inline`-Eigenschaft wird als ein Schlüsselwort aus der unten stehenden Liste angegeben.

- `none`
  - : Inhalte, die die Inline-Achse überschreiten, werden nicht angezeigt.
- `scroll`
  - : Inhalte, die die Inline-Achse überschreiten, können durch Scrollen sichtbar gemacht werden.

## Beispiele

### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

```css
p {
  white-space: nowrap;
}

@media (overflow-inline: scroll) {
  p {
    color: red;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
