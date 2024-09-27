---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
l10n:
  sourceCommit: 0fd3414a0e35e6e30a2cd34977de607a23000bef
---

{{CSSRef}}

Das **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den initialen [Enthaltenden Block](/de/docs/Web/CSS/Containing_block) entlang der Inline-Achse überfließen.

## Syntax

Das `overflow-inline` Feature wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Inhalte, die die Inline-Achse überfließen, werden nicht angezeigt.
- `scroll`
  - : Inhalte, die die Inline-Achse überfließen, können durch Scrollen sichtbar gemacht werden.

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
