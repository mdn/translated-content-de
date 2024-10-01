---
title: Umgang mit Medienunterstützungsproblemen in Webinhalten
slug: Web/Media/Formats/Support_issues
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Eine der Realitäten bei der Arbeit mit Audio- und Videodarstellung und -manipulation im Web ist, dass es eine Vielzahl von Medienformaten gibt, mit unterschiedlichen Graden an Popularität und verschiedenen Fähigkeiten. Die Verfügbarkeit von Auswahlmöglichkeiten ist gut für den Benutzer, da er das Format wählen kann, das seinen Bedürfnissen am besten entspricht. Es gibt jedoch einen Nachteil: Da es so viele Formate mit unterschiedlichen Lizenzen und Designprinzipien gibt, bleibt es jedem Webbrowser-Entwickler selbst überlassen, zu entscheiden, welche Medientypen und Codecs unterstützt werden sollen.

Dies stellt eine kleine, jedoch relativ leicht überwindbare Herausforderung für Webentwickler dar: die Situation ordnungsgemäß zu handhaben, wenn der Browser des Benutzers einen bestimmten Medientyp nicht verarbeiten kann. Dieser Leitfaden behandelt Techniken, die Sie verwenden können, um Webinhalte zu entwickeln, die Ihre Medienanforderungen erfüllen und gleichzeitig das am weitesten kompatible Erlebnis bieten. Themen, die wir untersuchen werden, beinhalten Fallbacks, Basis-Medienformate und Fehlerbehandlungspraktiken, die es Ihren Inhalten ermöglichen, in möglichst vielen Situationen zu funktionieren.

## Verwendung von Posterrahmen

Ein **Posterrahmen** ist ein Standbild, das den Inhalt eines Videos repräsentiert. Dies kann der erste Videorahmen sein; jedoch ist in vielen Fällen der erste Rahmen leer oder enthält nichts als das Logo eines Unternehmens oder ein anderes Bild, das dem Betrachter keinen Kontext für den Videoinhalt bietet.

Ein guter Posterrahmen repräsentiert entweder den Inhalt des Videos oder ist ein Bild, das nicht einmal aus dem Video selbst stammt, aber Bild- und/oder Textinhalte enthält, die dem Leser eine nützliche Vorstellung vom Videoinhalt vermitteln. Im Fall eines Actionfilms könnte der Posterrahmen ein ikonisches Beispielbild aus einer der bekanntesten Szenen des Films sein.

Ein ähnliches Konzept kann auf Standbilder angewendet werden; wenn ein Bild, das Sie präsentieren möchten, sehr groß ist und möglicherweise Zeit zum Herunterladen benötigt (insbesondere bei langsameren Geräten oder Verbindungen), können Sie eine Version mit niedrigerer Auflösung oder eine alternative Version anbieten, die angezeigt wird, bis die Vollqualitätsversion verfügbar ist.

Wir werden uns beide Szenarien ansehen und wie man sie umsetzt.

### Posterrahmen für Videos

### Progressive Bilder

Bilder—ob eingebettet mit {{HTMLElement("img")}} oder {{HTMLElement("picture")}}—unterstützen kein Konzept ähnlich wie Posterrahmen. Es gibt jedoch Möglichkeiten, ein Bild in niedriger Qualität anzuzeigen, während es noch geladen wird. Dies erfordert die Erstellung Ihrer Bilder in **progressiven** Formaten, wie progressive {{Glossary("JPEG", "JPEG")}} oder interlaced {{Glossary("PNG", "PNG")}}.

Sobald Ihr Bild in progressive Form konvertiert ist, können Sie es wie gewohnt verwenden.

```html
<img
  src="/images/staff-photo-huge-progressive.jpg"
  alt="Staff Photo, taken in January of 1972" />
```

Bei der Verwendung eines progressiven Bildes werden die Daten so gespeichert, dass der Browser in der Lage ist, eine niedrig aufgelöste Darstellung des Bildes so schnell wie möglich zu rendern und dann—nach dem Laden oder wenn es das Laden beendet hat—das Bild in voller Qualität anzuzeigen.

> [!NOTE]
> Progressive (oder interlaced) Bilder sind von Natur aus geringfügig größer als die nicht-progressiven Versionen derselben Bilder. Ob das Interlacing Ihren Benutzern zugute kommt, müssen Sie selbst bestimmen.

## Spezifizieren mehrerer Quellen

## Überprüfen der Kompatibilität in JavaScript

[`HTMLMediaElement.canPlayType`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)…

## Erkennen von Wiedergabefehlern

## Anpassung der Darstellung mit CSS

## Speichermanagement
