---
title: overflow-inline
slug: Web/CSS/@media/overflow-inline
l10n:
  sourceCommit: 0813b7f6eb4aca4d2b7440a4644658495fa1f9d7
---

{{CSSRef}}

Die **`overflow-inline`** [CSS](/de/docs/Web/CSS) [Medienabfragefunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den initialen [Enthaltungsblock](/de/docs/Web/CSS/Containing_block) entlang der Inline-Achse überlaufen.

> [!NOTE]
> Die `overflow-inline`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; sie zeigt vielmehr an, wie das Gerät einen solchen Überlauf verarbeitet. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: Wenn der Inhalt den verfügbaren horizontalen Raum überschreitet, ermöglicht das Gerät das Scrollen, um auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Das `overflow-inline`-Feature wird als ein Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `none`
  - : Inhalt, der die Inline-Achse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Inline-Achse überläuft, kann durch Scrollen angezeigt werden.

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
