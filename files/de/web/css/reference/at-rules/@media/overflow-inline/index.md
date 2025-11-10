---
title: overflow-inline
slug: Web/CSS/Reference/At-rules/@media/overflow-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den ursprünglichen [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) entlang der Inline-Achse überlaufen.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: Wenn Inhalte den verfügbaren horizontalen Raum überschreiten, ermöglicht das Gerät das Scrollen, um auf die überlaufenden Inhalte zuzugreifen.

## Syntax

Die `overflow-inline`-Eigenschaft wird als Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `none`
  - : Inhalte, die die Inline-Achse überlaufen, werden nicht angezeigt.
- `scroll`
  - : Inhalte, die die Inline-Achse überlaufen, können durch Scrollen betrachtet werden.

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
