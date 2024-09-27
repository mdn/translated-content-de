---
title: Verwendung von Bildern in HTML
slug: Web/Media/images
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das [HTML](/de/docs/Glossary/HTML) {{HTMLElement("img")}}-Element ermöglicht es Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) ermöglicht. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites befassen.

## Referenzen

Diese Artikel behandeln einige der HTML-Elemente und CSS-Eigenschaften, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML `<img>`-Element** wird verwendet, um ein Bild auf einer Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die das Verhalten des Bildes steuern, und ermöglicht es, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen, die das Bild nicht sehen, hinzuzufügen.
- {{HTMLElement("picture")}}
  - : Das **HTML `<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt das beste passende darunter aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie etwa eines [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video), an die Größe seines Containers angepasst werden soll.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten [ersetzten Element](/de/docs/Web/CSS/Replaced_element) innerhalb des Elements an. Bereiche des Kastens, die nicht vom Objekt des ersetzten Elements bedeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Leitfäden

Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die von Webbrowsern allgemein unterstützt werden, einschließlich Details zu ihren individuellen Anwendungsfällen, Fähigkeiten und Kompatibilitätsfaktoren. Darüber hinaus bietet dieser Artikel eine Anleitung zur Auswahl des besten Bilddateityps für eine gegebene Situation.
- [Einbeziehung von `width` und `height`-Attributen hilft, Ruckeln zu vermeiden](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert die Art und Weise, wie Browser Bilder laden, sodass ihre [Seitenverhältnisse](/de/docs/Glossary/aspect_ratio) frühzeitig vom Browser berechnet werden und später verwendet werden können, um die Anzeigengröße eines Bildes zu reservieren, bevor es geladen wird.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten.

- [HTML lernen: Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von responsiven Bildern kennen – Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen solchen Merkmalen gut funktionieren – und betrachten, welche Werkzeuge HTML bietet, um sie zu implementieren.
