---
title: "`overflow-inline` CSS-Media-Feature"
short-title: overflow-inline
slug: Web/CSS/Reference/At-rules/@media/overflow-inline
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die entlang der Inline-Achse den initialen [umgebenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) überlaufen.

> [!NOTE]
> Die Eigenschaft `overflow-inline` bestimmt nicht, ob ein Überlauf auftritt; sie zeigt vielmehr, wie das Gerät einen solchen Überlauf behandelt. Typischerweise wird das Verhalten auf Bildschirmen in den meisten Browsern "scroll" sein: Wenn der Inhalt den verfügbaren horizontalen Raum überschreitet, ermöglicht es das Gerät, durch Scrollen auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Die `overflow-inline`-Feature wird als Schlüsselwortwert angegeben, der aus der nachstehenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Inline-Achse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Inline-Achse überläuft, kann durch Scrollen sichtbar gemacht werden.

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
