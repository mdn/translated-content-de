---
title: Bilder in HTML verwenden
slug: Web/Media/images
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das {{Glossary("HTML")}}-{{HTMLElement("img")}}-Element ermöglicht das Einbetten von Bildern in ein HTML-Dokument, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) bereitstellt. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites befassen.

## Referenzen

Diese Artikel decken einige der HTML-Elemente und CSS-Eigenschaften ab, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML-`<img>`-Element** wird verwendet, um ein Bild in eine Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die steuern, wie das Bild sich verhält, und es erlaubt das Hinzufügen wichtiger Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen, die das Bild nicht sehen.
- {{HTMLElement("picture")}}
  - : Das **HTML-`<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt das am besten passende aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element) wie einem [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video) in seiner Containergröße angepasst wird.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten [ersetzten Element](/de/docs/Web/CSS/Replaced_element) innerhalb des Elements an. Bereiche der Box, die nicht von dem Objekt des ersetzten Elements überdeckt werden, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Leitfäden

Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die von Webbrowsern meist unterstützt werden, einschließlich Details über deren individuelle Anwendungsfälle, Fähigkeiten und Kompatibilitätsfaktoren. Außerdem bietet dieser Artikel Anleitungen zur Auswahl des besten Bilddateityps für eine gegebene Situation.
- [Durch das Hinzufügen von `width` und `height`-Attributen können Ruckler vermieden werden](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass deren {{glossary("aspect ratio", "Seitenverhältnisse")}} frühzeitig vom Browser berechnet werden können und später verwendet werden, um die Anzeigengröße eines Bildes zu reservieren, bevor es geladen wird.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten.

- [HTML lernen: Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen derartigen Merkmalen gut funktionieren – und sehen uns an, welche Werkzeuge HTML bereitstellt, um sie zu implementieren.
