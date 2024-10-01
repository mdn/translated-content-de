---
title: Verwendung von Bildern in HTML
slug: Web/Media/images
l10n:
  sourceCommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Das {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}-Element ermöglicht es Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) ermöglicht. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites befassen.

## Referenzen

Diese Artikel behandeln einige der HTML-Elemente und CSS-Eigenschaften, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML-`<img>`-Element** wird verwendet, um ein Bild in einer Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die steuern, wie das Bild sich verhält, und erlaubt Ihnen, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen hinzuzufügen, die das Bild nicht sehen.
- {{HTMLElement("picture")}}
  - : Das **HTML-`<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes Kind-`<source>`-Element und wählt die beste Übereinstimmung unter ihnen.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie ein [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video), in seine Containergröße eingepasst werden soll.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten [ersetzten Element](/de/docs/Web/CSS/Replaced_element) innerhalb des Elementbox an. Bereiche der Box, die nicht vom Objekt des ersetzten Elements bedeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Leitfäden

Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Details über ihre individuellen Anwendungsfälle, Fähigkeiten und Kompatibilitätsfaktoren. Darüber hinaus bietet dieser Artikel Anweisungen zur Auswahl des besten Bilddateityps für eine bestimmte Situation.
- [Das Hinzufügen von `width`- und `height`-Attributen hilft, Ruckeln zu vermeiden](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass ihre {{Glossary("aspect_ratio", "Seitenverhältnisse")}} vom Browser frühzeitig berechnet werden und später verwendet werden können, um die Anzeigegröße eines Bildes zu reservieren, bevor es geladen wird.

## Andere Themen

Verwandte Themen, die von Interesse sein könnten.

- [Lernen Sie HTML: Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen Sie das Konzept der responsiven Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und sehen, welche Tools HTML bietet, um deren Implementierung zu unterstützen.
