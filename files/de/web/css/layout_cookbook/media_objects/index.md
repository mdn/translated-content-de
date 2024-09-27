---
title: "Rezept: Media Objects"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das _Media Object_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Social-Media-Beitrag.

![Beispiel eines Media Objects mit Profilbild auf der linken Seite und Lorem Ipsum Text rechts, der 80% des Raums einnimmt](media-object.png)

## Anforderungen

Das Media Object-Muster benötigt einige oder alle der folgenden Merkmale:

- Gestapelt auf Mobilgeräten, zweispaltig auf Desktops.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Media Objects können verschachtelt werden.
- Das Media Object sollte die Inhalte räumen, egal welche Seite höher ist.

## Das Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 2700)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/media-objects--download.html)

## Getroffene Entscheidungen

Ich habe mich entschieden, das [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Media Object zu verwenden, da es mir ermöglicht, das Layout bei Bedarf in zwei Dimensionen zu kontrollieren. Das bedeutet, dass wenn wir einen Footer mit kurzem Inhalt darüber haben, der Footer nach unten zum unteren Ende des Media Objects geschoben werden kann.

Ein weiterer Grund für die Verwendung des Grid Layout ist, dass ich {{cssxref("fit-content")}} für die Spurgröße des Bildes nutzen kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln, wenn wir ein kleines Bild wie das Icon haben, wird die Spur nur so groß wie die Größe dieses Bildes — die `max-content` Größe. Wenn das Bild größer ist, hört die Spur bei 200 Pixeln auf zu wachsen und, da das Bild {{cssxref("max-width")}} von 100% angewendet hat, es skaliert sich nach unten, so dass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}} zur Erreichung des Layouts, kann ich das Muster im CSS sehen. Ich definiere mein Grid, wenn wir eine max-width von 500 Pixeln haben, sodass auf kleineren Geräten das Media Object gestapelt wird.

Eine Option für das Muster ist, es zu spiegeln, um das Bild auf die andere Seite zu wechseln — dies wird durch Hinzufügen der `media-flip` Klasse erreicht, die eine gespiegelte Grid-Vorlage definiert und somit das Layout gespiegelt ist.

Wenn wir ein Media Object in ein anderes verschachteln, müssen wir es in die zweite Spur im regulären Layout und in die erste Spur im gespiegelten Layout setzen.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Grid Template Areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
