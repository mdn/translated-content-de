---
title: overflow-block
slug: Web/CSS/@media/overflow-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`overflow-block`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät Inhalte behandelt, die das Anfangs-[Enthaltende Block](/de/docs/Web/CSS/CSS_display/Containing_block) entlang der Blockachse überlaufen.

> [!NOTE]
> Die Eigenschaft `overflow-block` bestimmt nicht, ob ein Überlauf auftritt; sie zeigt vielmehr, wie das Gerät mit einem solchen Überlauf umgeht. Auf Bildschirmen in den meisten Browsern wird das Verhalten typischerweise "scroll" sein: Wenn Inhalte den verfügbaren vertikalen Raum überschreiten, ermöglicht das Gerät das Scrollen, um auf den übergelaufenen Inhalt zuzugreifen.

## Syntax

Das `overflow-block`-Feature wird als Schlüsselwortwert aus der folgenden Liste angegeben.

- `none`
  - : Inhalt, der die Blockachse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen betrachtet werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen betrachtet werden, aber Seitenumbrüche können manuell ausgelöst werden (wie etwa über {{cssxref("break-inside")}}, etc.), um den folgenden Inhalt auf der nächsten Seite anzuzeigen.
- `paged`
  - : Inhalte werden in einzelne Seiten aufgeteilt; Inhalt, der eine Seite in der Blockachse überläuft, wird auf der folgenden Seite angezeigt.

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
