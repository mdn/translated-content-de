---
title: Bilder in HTML verwenden
slug: Web/Media/Guides/Images
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

Das {{Glossary("HTML", "HTML")}} {{HTMLElement("img")}}-Element ermöglicht es Ihnen, Bilder in ein HTML-Dokument einzubetten, während das {{HTMLElement("picture")}}-Element [responsive Bilder](/de/docs/Web/HTML/Responsive_images) unterstützt. In diesem Leitfaden finden Sie Links zu Ressourcen, die sich mit dem Hinzufügen von Bildern zu Websites befassen. Diese Artikel bieten Anleitungen zur Auswahl und Konfiguration von Bildtypen.

- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
  - : Ein Leitfaden zu den verschiedenen Bilddateitypen, die allgemein von Webbrowsern unterstützt werden, einschließlich Details zu ihren individuellen Anwendungsfällen, Funktionen und Kompatibilitätsfaktoren. Zusätzlich bietet dieser Artikel eine Anleitung zur Auswahl des besten Bilddateityps für eine bestimmte Situation.
- [Die Angabe von `width`- und `height`-Attributen hilft, Ruckeln zu vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
  - : Dies ändert, wie Browser Bilder laden, sodass deren {{Glossary("aspect_ratio", "Seitenverhältnisse")}} frühzeitig vom Browser berechnet werden können, um später die Anzeigegröße eines Bildes vor dem Laden zu reservieren.

## Referenzen

Diese Artikel behandeln einige der HTML-Elemente und CSS-Eigenschaften, die verwendet werden, um zu steuern, wie Bilder im Web angezeigt werden.

### HTML

- {{HTMLElement("img")}}
  - : Das **HTML `<img>`-Element** wird verwendet, um ein Bild in eine Webseite einzubetten. Es unterstützt eine Vielzahl von Attributen, die das Verhalten des Bildes steuern und ermöglicht es, wichtige Informationen wie [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text für Personen hinzuzufügen, die das Bild nicht sehen.
- {{HTMLElement("picture")}}
  - : Das **HTML `<picture>`-Element** enthält null oder mehr {{HTMLElement("source")}}-Elemente und ein {{HTMLElement("img")}}-Element, das Versionen eines Bildes für verschiedene Anzeige-/Geräteszenarien bereitstellt. Der Browser prüft jedes Kind-`<source>`-Element und wählt die beste Übereinstimmung aus.

### CSS

- {{cssxref("object-fit")}}
  - : Die **`object-fit`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie der Inhalt eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wie ein [`<img>`](/de/docs/Web/HTML/Element/img) oder [`<video>`](/de/docs/Web/HTML/Element/video), in seinen Container eingefügt wird.
- {{cssxref("object-position")}}
  - : Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung des Inhalts in einem ausgewählten {{Glossary("replaced_elements", "ersetzten Element")}} innerhalb des Elementrahmens an. Bereiche des Rahmens, die nicht vom Objekt des ersetzten Elements abgedeckt sind, zeigen den Hintergrund des Elements.
- {{cssxref("background-image")}}
  - : Die **`background-image`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt ein oder mehrere Hintergrundbilder für ein Element fest.

## Siehe auch

- [Responsive Images](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und betrachten, welche Werkzeuge HTML bietet, um diese umzusetzen.
