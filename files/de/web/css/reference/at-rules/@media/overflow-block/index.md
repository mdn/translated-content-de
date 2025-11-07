---
title: overflow-block
slug: Web/CSS/Reference/At-rules/@media/overflow-block
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`overflow-block`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie das Ausgabegerät mit Inhalten umgeht, die den initialen [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) entlang der Blockachse überlaufen.

> [!NOTE]
> Die `overflow-block`-Eigenschaft bestimmt nicht, ob ein Überlauf auftritt; vielmehr gibt sie an, wie das Gerät mit einem solchen Überlauf umgeht. Typischerweise ist das Verhalten auf Bildschirmen in den meisten Browsern "scroll": Wenn der Inhalt den verfügbaren vertikalen Raum übersteigt, ermöglicht das Gerät das Scrollen, um auf den überlaufenen Inhalt zuzugreifen.

## Syntax

Die `overflow-block`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Inhalt, der die Blockachse überläuft, wird nicht angezeigt.
- `scroll`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen darauf angezeigt werden.
- `optional-paged`
  - : Inhalt, der die Blockachse überläuft, kann durch Scrollen darauf angezeigt werden, aber Seitenumbrüche können manuell ausgelöst werden (wie z.B. über {{cssxref("break-inside")}}, usw.), um den folgenden Inhalt auf der nächsten Seite anzuzeigen.
- `paged`
  - : Inhalt wird in einzelne Seiten unterteilt; Inhalt, der eine Seite entlang der Blockachse überläuft, wird auf der folgenden Seite angezeigt.

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

- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
