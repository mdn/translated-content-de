---
title: overflow-block
slug: Web/CSS/@media/overflow-block
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`overflow-block`**-Eigenschaft [CSS](/de/docs/Web/CSS) [Media Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die über das ursprüngliche [enthältende Blockelement](/de/docs/Web/CSS/CSS_display/Containing_block) entlang der Block-Achse hinausgehen.

> [!NOTE]
> Die `overflow-block`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: Wenn der Inhalt den verfügbaren vertikalen Platz übersteigt, erlaubt das Gerät das Scrollen, um den übergelaufenen Inhalt zu erreichen.

## Syntax

Das `overflow-block`-Feature wird als ein Schlüsselwortwert spezifiziert, das aus der folgenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Block-Achse überschreitet, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Block-Achse überschreitet, kann durch Scrollen sichtbar gemacht werden.
- `optional-paged`
  - : Inhalt, der die Block-Achse überschreitet, kann durch Scrollen sichtbar gemacht werden, aber Seitenumbrüche können manuell ausgelöst werden (zum Beispiel über {{cssxref("break-inside")}}, usw.), sodass der folgende Inhalt auf der nächsten Seite angezeigt wird.
- `paged`
  - : Inhalt wird in diskrete Seiten unterteilt; Inhalt, der eine Seite in der Block-Achse überschreitet, wird auf der nächsten Seite angezeigt.

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
