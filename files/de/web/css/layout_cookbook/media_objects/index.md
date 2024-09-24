---
title: "Rezept: Medienobjekte"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Das _Medienobjekt_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf ein zweispaltiges Kästchen mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Social-Media-Post.

![Beispiel eines Medienobjekts mit Profilbild auf der linken Seite und Lorem-Ipsum-Text rechts, der 80 % des Raums ausfüllt](media-object.png)

## Anforderungen

Das Muster des Medienobjekts benötigt einige oder alle der folgenden Eigenschaften:

- Gestapelt auf Mobilgeräten, zwei Spalten auf Desktops.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Medienobjekte können verschachtelt sein.
- Das Medienobjekt sollte den Inhalt freigeben, unabhängig davon, welche Seite höher ist.

## Das Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 2700)}}

> [!CALLOUT]
>
> [Dieses Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/media-objects--download.html)

## Getroffene Entscheidungen

Ich habe mich entschieden, das [Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) für das Medienobjekt zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn ich es benötige. Dies bedeutet, dass wir, wenn wir einen Footer haben, bei dem der Inhalt darüber kurz ist, den Footer nach unten an das Ende des Medienobjekts schieben können.

Ein weiterer Grund, das Rasterlayout zu verwenden, ist, dass ich {{cssxref("fit-content")}} für die Größenauswahl der Bildspur verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird die Spur, wenn wir ein kleines Bild wie das Symbol haben, nur so groß wie die Größe dieses Bilds — die `max-content`-Größe. Wenn das Bild größer ist, hört die Spur bei 200 Pixeln auf zu wachsen, und da das Bild eine {{cssxref("max-width")}} von 100 % hat, skaliert es herunter, sodass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Raster, sobald wir eine maximale Breite von 500 Pixeln haben, sodass auf kleineren Geräten das Medienobjekt gestapelt wird.

Eine Option für das Muster besteht darin, es zu spiegeln, um das Bild auf die andere Seite zu verschieben — dies wird durch Hinzufügen der `media-flip`-Klasse erreicht, welche ein gespiegeltes Rastertemplate definiert und das Layout gespiegelt erscheinen lässt.

Wenn wir ein Medienobjekt in einem anderen verschachteln, müssen wir es in dem regulären Layout in die zweite Spur und bei gespiegeltem Layout in die erste Spur platzieren.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Raster-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
