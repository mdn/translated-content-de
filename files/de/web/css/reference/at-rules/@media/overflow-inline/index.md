---
title: overflow-inline
slug: Web/CSS/Reference/At-rules/@media/overflow-inline
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät Inhalte behandelt, die entlang der Inline-Achse den initialen [enthältlichen Block](/de/docs/Web/CSS/CSS_display/Containing_block) überschreiten.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: wenn der Inhalt den verfügbaren horizontalen Raum überschreitet, können Sie scrollen, um auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Die `overflow-inline`-Funktion wird als ein Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `none`
  - : Inhalt, der die Inline-Achse überschreitet, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Inline-Achse überschreitet, kann durch Scrollen aufgerufen werden.

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
