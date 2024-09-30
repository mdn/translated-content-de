---
title: "Rezept: Media Objects"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das _Media Object_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf eine zweispaltige Box mit einem Bild auf der einen Seite und einem beschreibenden Text auf der anderen, z. B. ein Social-Media-Post.

![Beispiel eines Media Objects mit Profilbild auf der linken Seite und Lorem-Ipsum-Text auf der rechten Seite, der 80% des Raums einnimmt](media-object.png)

## Anforderungen

Das Media Object-Muster benötigt einige oder alle der folgenden Eigenschaften:

- Gestapelt auf mobilen Geräten, zwei Spalten auf Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Media Objects können verschachtelt werden.
- Das Media Object sollte den Inhalt freigeben, egal welche Seite am höchsten ist.

## Das Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 2700)}}

> [!CALLOUT]
>
> [Laden Sie dieses Beispiel herunter](https://github.com/mdn/css-examples/blob/main/css-cookbook/media-objects--download.html)

## Getroffene Entscheidungen

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Media Object zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn ich es brauche. Das bedeutet, dass, wenn wir einen Footer mit kurzem Inhalt darüber haben, der Footer nach unten an das Ende des Media Objects verschoben werden kann.

Ein weiterer Grund zur Verwendung von Grid-Layout ist, dass ich {{cssxref("fit-content")}} für die Spur-Größenbestimmung des Bildes verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird die Spur, wenn wir ein kleines Bild wie ein Icon haben, nur so groß wie die Größe dieses Bildes — die `max-content`-Größe. Wenn das Bild größer ist, stoppt die Spur das Wachstum bei 200 Pixeln und da das Bild eine {{cssxref("max-width")}} von 100% angewendet hat, verkleinert es sich, sodass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald wir eine maximale Breite von 500 Pixeln haben, sodass sich das Media Object auf kleineren Geräten stapelt.

Eine Option für das Muster ist, es zu drehen, um das Bild auf die andere Seite zu wechseln — dies wird durch Hinzufügen der `media-flip`-Klasse erreicht, die eine umgedrehte Grid-Vorlage definiert, wodurch das Layout gespiegelt wird.

Wenn wir ein Media Object in ein anderes verschachteln, müssen wir es in die zweite Spur im regulären Layout und die erste Spur bei Umkehrung platzieren.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
