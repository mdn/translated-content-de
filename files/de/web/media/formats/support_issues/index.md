---
title: Umgang mit Medienunterstützungsproblemen in Webinhalten
slug: Web/Media/Formats/Support_issues
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{QuickLinksWithSubpages("/de/docs/Web/Media")}}

Eine der Realitäten bei der Arbeit mit Audio- und Videowiedergabe und -manipulation im Web ist, dass es eine Reihe von Medienformaten gibt, die unterschiedlich populär sind und verschiedene Fähigkeiten bieten. Die Vielzahl an Auswahlmöglichkeiten ist gut für den Nutzer, da er das Format wählen kann, das am besten seinen Bedürfnissen entspricht. Es gibt jedoch einen Nachteil: Da es so viele Auswahlmöglichkeiten gibt, mit so vielen verschiedenen Arten von Lizenzen und Designprinzipien, ist jeder Webbrowser-Entwickler auf sich allein gestellt, wenn es darum geht, zu entscheiden, welche Medien-Dateitypen und Codecs unterstützt werden.

Dies stellt eine kleine, aber verhältnismäßig leicht überwindbare Herausforderung für den Webentwickler dar: die Situation korrekt zu handhaben, wenn der Browser des Nutzers einen bestimmten Medientyp nicht verarbeiten kann. Dieser Leitfaden behandelt Techniken, mit denen Sie Webinhalte entwickeln können, die Ihren Medienanforderungen gerecht werden und gleichzeitig die größtmögliche Kompatibilität bieten. Themen, die wir untersuchen werden, umfassen Alternativlösungen, grundlegende Medienformate und Fehlerbehandlungspraktiken, die es Ihren Inhalten ermöglichen, in möglichst vielen Situationen zu funktionieren.

## Verwendung von Posterbildern

Ein **Posterbild** ist ein Standbild, das repräsentativ für den Inhalt eines Videos ist. Dies kann der erste Frame des Videos sein; in vielen Fällen ist der erste Frame jedoch leer oder enthält nichts außer dem Logo eines Unternehmens oder ein anderes Bild, das dem Betrachter keinen Kontext für den Inhalt des Videos gibt.

Ein gutes Posterbild ist eines, das entweder den Inhalt des Videos repräsentiert oder ein Bild ist, das nicht einmal aus dem Video selbst stammt, sondern eine Bildsprache und/oder Text enthält, die dem Betrachter eine nützliche Idee vom Inhalt des Videos vermittelt. Im Fall eines Actionfilms könnte das Posterbild beispielsweise ein ikonisches Exemplarbild aus einer der bekanntesten Szenen des Films sein.

Ein ähnliches Konzept kann auf Standbilder angewendet werden; wenn ein Bild, das Sie präsentieren möchten, sehr groß ist und möglicherweise etwas Zeit zum Herunterladen benötigt (insbesondere für langsamere Geräte oder Verbindungen), können Sie eine Version mit niedrigerer Auflösung oder eine alternative Version anbieten, die angezeigt wird, bis die Version in voller Qualität verfügbar ist.

Wir werden beide Szenarien und deren Implementierung betrachten.

### Posterbilder für Videos

### Progressive Bilder

Bilder – ob sie nun mit {{HTMLElement("img")}} oder {{HTMLElement("picture")}} eingebettet sind – unterstützen kein Konzept ähnlich zu Posterbildern. Es gibt jedoch Möglichkeiten, ein Bild in niedriger Qualität anzuzeigen, während es noch geladen wird. Dies erfordert die Erstellung Ihrer Bilder mit **progressiven** Formaten, wie progressive {{Glossary("JPEG")}} oder interlaceder {{Glossary("PNG")}}.

Sobald Ihr Bild in progressive Form konvertiert wurde, können Sie es wie gewohnt verwenden.

```html
<img
  src="/images/staff-photo-huge-progressive.jpg"
  alt="Staff Photo, taken in January of 1972" />
```

Wenn Sie ein progressives Bild verwenden, werden die Daten so gespeichert, dass der Browser in der Lage ist, eine Darstellung des Bildes in niedriger Qualität so schnell wie möglich zu rendern und dann das Bild beim Laden – oder nachdem es fertig geladen ist – zu aktualisieren, um es in voller Qualität darzustellen.

> [!NOTE]
> Progressive (oder interlacierte) Bilder sind von Natur aus geringfügig größer als die nicht-progressiven Versionen derselben Bilder. Ob das Interlacing Ihren Nutzern zugutekommt, liegt bei Ihnen zu entscheiden.

## Angabe mehrerer Quellen

## Kompatibilität mit JavaScript prüfen

{{domxref("HTMLMediaElement.canPlayType")}} und {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}}…

## Erkennen von Wiedergabefehlern

## Anpassung der Darstellung mit CSS

## Speicherverwaltung
