---
title: overflow-block
slug: Web/CSS/@media/overflow-block
l10n:
  sourceCommit: 0813b7f6eb4aca4d2b7440a4644658495fa1f9d7
---

{{CSSRef}}

Die **`overflow-block`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät Inhalte behandelt, die den initialen [Enthaltenen Block](/de/docs/Web/CSS/Containing_block) entlang der Blockachse überlaufen.

> [!NOTE]
> Die `overflow-block`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; sie zeigt vielmehr die Handhabung eines solchen Überlaufs durch das Gerät. Typischerweise wird auf Bildschirmen in den meisten Browsern das Verhalten "scrollen" sein: Wenn der Inhalt den verfügbaren vertikalen Raum überschreitet, erlaubt das Gerät das Scrollen, um auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Das `overflow-block`-Feature wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Blockachse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen angezeigt werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen angezeigt werden, aber Seitenumbrüche können manuell ausgelöst werden (wie z. B. über {{cssxref("break-inside")}}, etc.), um den nachfolgenden Inhalt auf der nächsten Seite anzuzeigen.
- `paged`
  - : Inhalt wird in separate Seiten aufgeteilt; Inhalt, der eine Seite in der Blockachse überläuft, wird auf der folgenden Seite angezeigt.

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
