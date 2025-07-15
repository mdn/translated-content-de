---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den initialen [Enthaltenen Block](/de/docs/Web/CSS/CSS_display/Containing_block) entlang der Inline-Achse überfließen.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: Wenn Inhalte den verfügbaren horizontalen Raum überschreiten, ermöglicht das Gerät, dass Sie scrollen können, um auf die übergelaufenen Inhalte zuzugreifen.

## Syntax

Die `overflow-inline`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Inhalte, die entlang der Inline-Achse überfließen, werden nicht angezeigt.
- `scroll`
  - : Inhalte, die entlang der Inline-Achse überfließen, können durch Scrollen sichtbar gemacht werden.

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
