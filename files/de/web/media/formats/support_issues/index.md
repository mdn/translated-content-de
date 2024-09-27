---
title: Umgang mit Problemen bei der Medienunterstützung in Webinhalten
slug: Web/Media/Formats/Support_issues
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Eine der Realitäten bei der Arbeit mit Audio- und Videopräsentationen und -manipulation im Web ist, dass es eine Vielzahl von Medienformaten gibt, die unterschiedliche Grade an Beliebtheit und verschiedene Fähigkeiten aufweisen. Die Verfügbarkeit von Auswahlmöglichkeiten ist für den Benutzer von Vorteil, da er das Format auswählen kann, das am besten zu seinen Bedürfnissen passt. Es gibt jedoch einen Nachteil: Da es so viele zur Auswahl gibt, mit so vielen verschiedenen Arten von Lizenzen und Designprinzipien, bleibt es jedem Webbrowser-Entwickler überlassen, zu entscheiden, welche Medientypen und Codecs unterstützt werden sollen.

Dies stellt eine kleine, aber relativ leicht zu überwindende Belastung für den Webentwickler dar: die korrekte Handhabung der Situation, wenn der Browser des Benutzers einen bestimmten Medientyp nicht verarbeiten kann. Dieser Leitfaden behandelt Techniken, die Sie verwenden können, um Webinhalte zu entwickeln, die Ihre Medienanforderungen erfüllen und gleichzeitig die größtmögliche Kompatibilität bieten. Themen, die wir untersuchen werden, sind Fallbacks, Basismedienformate und Fehlerbehandlungspraktiken, die es Ihren Inhalten ermöglichen, in möglichst vielen Situationen zu funktionieren.

## Verwendung von Posterbildern

Ein **Posterbild** ist ein Standbild, das den Inhalt eines Videos darstellt. Dies kann das erste Videobild sein; in vielen Fällen ist das erste Bild jedoch leer oder enthält nichts außer dem Logo eines Unternehmens oder einem anderen Bild, das dem Betrachter keinen Kontext für den Inhalt des Videos bietet.

Ein gutes Posterbild ist entweder ein repräsentatives Bild des Videoinhalts oder ein Bild, das nicht einmal aus dem Video selbst stammt, sondern Bilder und/oder Text enthält, die dem Betrachter eine nützliche Vorstellung vom Inhalt des Videos geben. Im Fall eines Actionfilms könnte das Posterbild beispielsweise ein ikonisches exemplarisches Bild aus einer der bekanntesten Szenen des Films sein.

Ein ähnliches Konzept kann auf Standbilder angewendet werden; wenn ein Bild, das Sie präsentieren möchten, sehr groß ist und möglicherweise Zeit zum Herunterladen benötigt (insbesondere für langsamere Geräte oder Verbindungen), können Sie eine niedrigere Auflösung oder eine alternative Version anbieten, die angezeigt wird, bis die Vollversion verfügbar ist.

Wir werden uns beide Szenarien ansehen und wie man sie umsetzt.

### Posterbilder für Videos

### Progressive Bilder

Bilder—ob sie mit {{HTMLElement("img")}} oder {{HTMLElement("picture")}} eingebettet sind—unterstützen kein Konzept ähnlich den Posterbildern. Es gibt jedoch Möglichkeiten, ein Bild in niedriger Qualität anzuzeigen, während es noch geladen wird. Dies erfordert die Erstellung Ihrer Bilder in **progressiven** Formaten, wie progressive [JPEG](/de/docs/Glossary/JPEG) oder interlaced [PNG](/de/docs/Glossary/PNG).

Sobald Ihr Bild in progressiver Form konvertiert ist, können Sie es wie gewohnt verwenden.

```html
<img
  src="/images/staff-photo-huge-progressive.jpg"
  alt="Staff Photo, taken in January of 1972" />
```

Bei der Verwendung eines progressiven Bildes werden die Daten so gespeichert, dass der Browser in der Lage ist, eine Darstellung des Bildes in niedriger Qualität so schnell wie möglich zu rendern und dann das Bild während oder nachdem es vollständig geladen wurde zu aktualisieren, um es in voller Qualität darzustellen.

> [!NOTE]
> Progressive (oder interlaced) Bilder sind von Natur aus geringfügig größer als die nicht-progressiven Versionen derselben Bilder. Ob das Interlacing Ihren Benutzern zugutekommt, liegt bei Ihnen zu bestimmen.

## Mehrere Quellen angeben

## Kompatibilität in JavaScript überprüfen

[`HTMLMediaElement.canPlayType`](/de/docs/Web/API/HTMLMediaElement/canPlayType) und [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static)…

## Wiedergabefehler erkennen

## Präsentation mit CSS anpassen

## Speicherverwaltung
