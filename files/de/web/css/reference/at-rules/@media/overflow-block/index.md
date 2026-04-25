---
title: "`overflow-block` CSS Media-Feature"
short-title: overflow-block
slug: Web/CSS/Reference/At-rules/@media/overflow-block
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`overflow-block`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die entlang der Blockachse den initialen [besitzenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) überfließen.

> [!NOTE]
> Die Eigenschaft `overflow-block` bestimmt nicht, ob ein Überlauf auftritt; vielmehr zeigt sie an, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scroll" sein: Wenn der Inhalt den verfügbaren vertikalen Bereich überschreitet, ermöglicht das Gerät das Scrollen, um auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Das `overflow-block` Feature wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Blockachse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen sichtbar gemacht werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen sichtbar gemacht werden, jedoch können Seitenumbrüche manuell ausgelöst werden (z.B. über {{cssxref("break-inside")}}, etc.), um den folgenden Inhalt auf der nächsten Seite anzuzeigen.
- `paged`
  - : Inhalt wird in einzelne Seiten aufgeteilt; Inhalt, der eine Seite in der Blockachse überläuft, wird auf der folgenden Seite angezeigt.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
