---
title: overflow-block
slug: Web/CSS/Reference/At-rules/@media/overflow-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`overflow-block`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die entlang der Blockachse den ursprünglichen [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) überschreiten.

> [!NOTE]
> Die `overflow-block`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; sie zeigt vielmehr, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise ist das Verhalten auf Bildschirmen in den meisten Browsern "scroll": Wenn der Inhalt den verfügbaren vertikalen Raum überschreitet, ermöglicht das Gerät das Scrollen, um auf den überlaufenden Inhalt zuzugreifen.

## Syntax

Das Merkmal `overflow-block` wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Blockachse überschreitet, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überschreitet, kann durch Scrollen gesehen werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überschreitet, kann durch Scrollen gesehen werden, aber Seitenumbrüche können manuell ausgelöst werden (wie z.B. über {{cssxref("break-inside")}}, etc.), um den folgenden Inhalt auf der nächsten Seite anzuzeigen.
- `paged`
  - : Inhalt wird in einzelne Seiten aufgeteilt; Inhalt, der eine Seite in der Blockachse überschreitet, wird auf der folgenden Seite angezeigt.

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
