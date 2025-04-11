---
title: Verwendung von Bildern in HTML
slug: Web/Media/Guides/Images
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}-Element ermöglicht Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) unterstützt. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites befassen. Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, einschließlich Details zu ihren individuellen Anwendungsfällen, Fähigkeiten und Kompatibilitätsfaktoren. Zusätzlich bietet dieser Artikel Anleitungen zur Auswahl des besten Bilddateityps für eine gegebene Situation.
- [Das Hinzufügen von `width`- und `height`-Attributen hilft, Ruckler zu vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass ihre {{Glossary("aspect_ratio", "Seitenverhältnisse")}} frühzeitig vom Browser berechnet werden und später verwendet werden können, um die Anzeigengröße eines Bildes zu reservieren, bevor es geladen wird.

## Referenzen

Diese Artikel behandeln einige der HTML-Elemente und CSS-Eigenschaften, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML `<img>`-Element** wird verwendet, um ein Bild in eine Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die kontrollieren, wie das Bild sich verhält, und ermöglicht es Ihnen, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text für Personen hinzuzufügen, die das Bild nicht sehen können.
- {{HTMLElement("picture")}}
  - : Das **HTML `<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für unterschiedliche Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes `<source>`-Kind-Element und wählt das am besten passende aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wie z. B. ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img) oder [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), an die Größe seines Containers angepasst werden soll.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten {{Glossary("replaced_elements", "ersetzten Element")}} innerhalb des Elements an. Bereiche der Box, die nicht vom Objekt des ersetzten Elements abgedeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Siehe auch

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen Sie das Konzept von responsiven Bildern kennen — Bilder, die gut auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen funktionieren — und welche Werkzeuge HTML bietet, um sie umzusetzen.
