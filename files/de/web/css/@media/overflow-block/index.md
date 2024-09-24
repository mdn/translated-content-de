---
title: overflow-block
slug: Web/CSS/@media/overflow-block
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`overflow-block`** [CSS](/de/docs/Web/CSS) [Media-Abfragefunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den anfänglichen [enthüllenden Block](/de/docs/Web/CSS/Containing_block) entlang der Blockachse überfließen.

## Syntax

Die `overflow-block`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Blockachse überfließt, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überfließt, kann durch Scrollen angezeigt werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überfließt, kann durch Scrollen angezeigt werden, aber Seitenumbrüche können manuell ausgelöst werden (wie zum Beispiel über {{cssxref("break-inside")}}, etc.), sodass der folgende Inhalt auf der nächsten Seite angezeigt wird.
- `paged`
  - : Inhalt wird in einzelne Seiten aufgeteilt; Inhalt, der auf einer Seite entlang der Blockachse überfließt, wird auf der folgenden Seite angezeigt.

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
@media (overflow-block: scroll) {
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

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
