---
title: Verwendung von Bildern in HTML
slug: Web/Media/Guides/Images
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Das {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}-Element ermöglicht es Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Web/HTML/Responsive_images) unterstützt. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Webseiten beschäftigen. Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Details zu deren individuellen Anwendungsfällen, Fähigkeiten und Kompatibilitätsfaktoren. Darüber hinaus bietet dieser Artikel Unterstützung bei der Auswahl des besten Bilddateityps für eine gegebene Situation.
- [Einbeziehung von `width` und `height` Attributen hilft, Ruckeln zu vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass ihre {{Glossary("aspect_ratio", "Seitenverhältnisse")}} frühzeitig vom Browser berechnet werden können und später reserviert werden können, um die Anzeigengröße eines Bildes zu bestimmen, bevor es geladen wird.

## Referenzen

Diese Artikel behandeln einige der HTML-Elemente und CSS-Eigenschaften, die verwendet werden, um zu kontrollieren, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML `<img>`-Element** wird verwendet, um ein Bild in einer Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die das Verhalten des Bildes steuern und ermöglicht Ihnen, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen hinzuzufügen, die das Bild nicht sehen können.
- {{HTMLElement("picture")}}
  - : Das **HTML `<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien bereitstellt. Der Browser berücksichtigt jedes untergeordnete `<source>`-Element und wählt die beste Übereinstimmung unter ihnen aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie eines [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video), in seinen Container angepasst werden soll.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung von Inhalten in einem ausgewählten [ersetzten Element](/de/docs/Web/CSS/Replaced_element) innerhalb des Box-Elements an. Bereiche des Box-Elements, die nicht vom Objekt des ersetzten Elements überdeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Siehe auch

- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen Sie das Konzept der responsiven Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und sehen, welche Werkzeuge HTML bietet, um sie zu implementieren.
