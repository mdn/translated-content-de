---
title: Umgang mit Medienunterstützungsproblemen in Webinhalten
short-title: Umgang mit nicht unterstützten Medien
slug: Web/Media/Guides/Formats/Support_issues
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

Eine der Realitäten bei der Arbeit mit Audio- und Videopräsentation und -manipulation im Web ist, dass es eine Vielzahl von Medienformaten gibt, die unterschiedliche Beliebtheit und Fähigkeiten besitzen. Die Verfügbarkeit von Auswahlmöglichkeiten ist für den Benutzer gut, da er das Format wählen kann, das seinen Bedürfnissen am besten entspricht. Es gibt jedoch einen Nachteil: Da es so viele Formate gibt, die mit unterschiedlichen Lizenzen und Designprinzipien verbunden sind, bleibt es jedem Webbrowser-Entwickler überlassen, zu entscheiden, welche Mediendateitypen und Codecs unterstützt werden.

Das stellt eine kleine, aber vernünftigerweise leicht zu überwindende Herausforderung für den Webentwickler dar: den Umgang mit der Situation, wenn der Browser des Benutzers einen bestimmten Medientyp nicht verarbeiten kann. Dieser Leitfaden behandelt Techniken, die Sie einsetzen können, um Webinhalte zu entwickeln, die Ihre Medienanforderungen erfüllen und gleichzeitig die größtmögliche Kompatibilität bieten. Zu den Themen gehören Fallbacks, grundlegende Medienformate und Fehlerbehandlungspraktiken, die es Ihren Inhalten ermöglichen, in möglichst vielen Situationen zu funktionieren.

## Verwendung von Poster-Frames

Ein **Poster-Frame** ist ein Standbild, das repräsentativ für den Inhalt eines Videos ist. Dies kann der erste Frame des Videos sein; oft ist der erste Frame jedoch leer oder enthält nichts außer dem Logo eines Unternehmens oder einem anderen Bild, das dem Betrachter keinen Kontext für den Inhalt des Videos gibt.

Ein gutes Poster-Frame ist eines, das entweder repräsentativ für den Inhalt des Videos ist oder ein Bild darstellt, das nicht einmal aus dem Video selbst stammt, aber Bild- und/oder Textinhalte enthält, die dem Betrachter eine nützliche Vorstellung vom Inhalt des Videos vermitteln. Im Falle eines Actionfilms könnte der Poster-Frame beispielsweise ein ikonisches Bild einer der bekanntesten Szenen des Films sein.

Ein ähnliches Konzept kann auf Standbilder angewendet werden; wenn ein Bild, das Sie präsentieren möchten, sehr groß ist und Zeit zum Herunterladen benötigt (besonders bei langsameren Geräten oder Verbindungen), können Sie eine niedrig aufgelöste oder alternative Version anbieten, die angezeigt wird, bis die Vollversion in hoher Qualität verfügbar ist.

Wir werden uns beide Szenarien und deren Implementierung ansehen.

### Poster-Frames für Videos

### Progressive Bilder

Bilder – sei es, dass sie mit {{HTMLElement("img")}} oder {{HTMLElement("picture")}} eingebettet werden – unterstützen kein Konzept ähnlich den Poster-Frames. Es gibt jedoch Möglichkeiten, ein Bild in niedriger Qualität zu präsentieren, während es noch geladen wird. Dies erfordert die Erstellung Ihrer Bilder in **progressiven** Formaten, wie progressive {{Glossary("JPEG", "JPEG")}} oder interlaced {{Glossary("PNG", "PNG")}}.

Sobald Ihr Bild in progressive Form konvertiert wurde, können Sie es wie gewohnt verwenden.

```html
<img
  src="/images/staff-photo-huge-progressive.jpg"
  alt="Staff Photo, taken in January of 1972" />
```

Bei Verwendung eines progressiven Bildes werden die Daten so gespeichert, dass der Browser eine Darstellung in niedriger Qualität des Bildes so schnell wie möglich rendern kann und das Bild dann aktualisiert, während es geladen wird oder nachdem es vollständig geladen wurde, um es in voller Qualität anzuzeigen.

> [!NOTE]
> Progressive (oder interlaced) Bilder sind von Natur aus etwas größer als die nicht-progressiven Versionen derselben Bilder. Ob das Interlacing Ihren Benutzern zugutekommt, müssen Sie selbst bestimmen.

## Angabe mehrerer Quellen

## Kompatibilität in JavaScript prüfen

[`HTMLMediaElement.canPlayType`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)…

## Erkennen von Wiedergabefehlern

## Anpassung der Präsentation mit CSS

## Speicherverwaltung
