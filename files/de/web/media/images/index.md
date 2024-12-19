---
title: Verwenden von Bildern in HTML
slug: Web/Media/images
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}-Element ermöglicht es Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Web/HTML/Responsive_images) unterstützt. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites beschäftigen.

## Referenzen

Diese Artikel decken einige der HTML-Elemente und CSS-Eigenschaften ab, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML `<img>`-Element** wird verwendet, um ein Bild in eine Webseite einzubetten. Es unterstützt eine breite Palette von Attributen, die steuern, wie das Bild sich verhält, und erlaubt es Ihnen, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen hinzuzufügen, die das Bild nicht sehen können.
- {{HTMLElement("picture")}}
  - : Das **HTML `<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes Kind-`<source>`-Element und wählt das am besten passende aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie eines [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video), an die Größe seines Containers angepasst werden soll.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten [ersetzten Element](/de/docs/Web/CSS/Replaced_element) innerhalb des Boxmodels des Elements an. Bereiche der Box, die nicht vom Objekt des ersetzten Elements bedeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Leitfäden

Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die von Webbrowsern allgemein unterstützt werden, einschließlich Details zu ihren jeweiligen Anwendungsfällen, Fähigkeiten und Kompatibilitätsfaktoren. Darüber hinaus bietet dieser Artikel Anleitungen zur Auswahl des besten Bilddateityps für eine gegebene Situation.
- [Das Einfügen von `width` und `height`-Attributen hilft, Ruckeln zu vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass deren {{Glossary("aspect_ratio", "Seitenverhältnisse")}} frühzeitig vom Browser berechnet werden und später verwendet werden können, um die Anzeigengröße eines Bildes zu reservieren, bevor es geladen wird.

## Weitere Themen

Verwandte Themen, die von Interesse sein könnten.

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren – und sehen uns an, welche Werkzeuge HTML bietet, um deren Implementierung zu erleichtern.
