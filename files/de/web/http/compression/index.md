---
title: Kompression im HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: 328d2e156b35c7e932d96f66aa7297a85c9ebd4f
---

{{HTTPSidebar}}

**Kompression** ist ein wichtiger Weg, um die Leistung einer Website zu steigern. Bei einigen Dokumenten kann eine Reduzierung der Größe um bis zu 70% den Bedarf an Bandbreitenkapazität verringern. Im Laufe der Jahre wurden Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Kompressionsmechanismen implementieren, da sowohl Browser als auch Server diese bereits integriert haben, aber sie müssen sicherstellen, dass der Server entsprechend konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann auf HTTP-Ebene eine allgemeine Kompression erfolgen (die Ressource wird von Ende zu Ende komprimiert übertragen),
- und schließlich kann die Kompression auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Kompression von Dateiformaten

Jeder Datentyp hat eine gewisse Redundanz, das sind _verschwendete Räume_, in sich. Wenn Text typischerweise bis zu 60% Redundanz aufweisen kann, kann diese Rate bei anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text benötigen diese anderen Medientypen viel Speicherplatz, um ihre Daten zu speichern, und die Notwendigkeit, den Speicher zu optimieren und Platz zurückzugewinnen, wurde sehr früh deutlich. Ingenieure entwickelten den optimierten Kompressionsalgorithmus, der von Dateiformaten verwendet wird, die für diesen speziellen Zweck entworfen wurden. Kompressionsalgorithmen für Dateien können in zwei Hauptkategorien unterteilt werden:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompressionszyklus die wiederhergestellten Daten nicht verändert. Diese stimmen (Byte für Byte) mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten in einer (hoffentlich) für den Benutzer unmerklichen Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch für verlustbehaftete Kompression verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was dann natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern kann ein von einem Werkzeug generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Werkzeuge zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Werkzeuge](https://www.creativebloq.com/design/image-compression-tools-1132865), die darauf spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da Kompression besser bei einer bestimmten Art von Dateien funktioniert, bringt es normalerweise nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten des Overheads (Algorithmen benötigen in der Regel ein Wörterbuch, das die Anfangsgröße erhöht) höher sein können als der zusätzliche Gewinn durch die Kompression, was zu einer größeren Datei führt. Verwenden Sie die folgenden Techniken nicht für Dateien in einem komprimierten Format.

## End-to-End-Kompression

Bei der Kompression liegen die größten Leistungsverbesserungen von Websites bei der End-to-End-Kompression. End-to-End-Kompression bezieht sich auf eine Kompression des Körpers einer Nachricht, die vom Server durchgeführt wird und unverändert bis zum Client bleibt. Unabhängig von den Zwischenknoten bleibt der Körper unangetastet.

![Ein Server sendet einen komprimierten HTTP-Körper über Netzknoten an einen Client. Der Körper wird auf keinem Netzwerk-Hop dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen End-to-End-Kompression und das Einzige, was ausgehandelt werden muss, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie rasant weiter und zahlreiche aufeinanderfolgende Algorithmen wurden zu den möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur zwei relevant: `gzip`, der am häufigsten verwendete, und `br`, der neue Herausforderer.

Zur Auswahl des zu verwendenden Algorithmus verwenden Browser und Server [proaktives Inhaltsaushandeln](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den unterstützten Algorithmen und deren Rangfolge, der Server wählt einen aus, verwendet ihn, um den Körper der Antwort zu komprimieren, und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser mitzuteilen, welchen Algorithmus er gewählt hat. Da das Inhaltsaushandeln verwendet wurde, um eine Darstellung basierend auf ihrer Kodierung auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält, und diesen Header in die Antwort aufnehmen; so können Caches die verschiedenen Darstellungen der Ressource cachen.

![Ein Client fordert Inhalt mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem Körper, der mit dem Brotli-Algorithmus komprimiert ist, sowie den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da die Kompression erhebliche Leistungsverbesserungen bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierten wie Bilder, Audiodateien und Videos zu aktivieren.

Apache unterstützt Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/)-Element.

## Hop-by-Hop-Kompression

Hop-by-Hop-Kompression ähnelt der End-to-End-Kompression, unterscheidet sich jedoch in einem wesentlichen Element: Die Kompression erfolgt nicht auf der Ressource auf dem Server, um eine spezifische Darstellung zu schaffen, die dann übertragen wird, sondern auf dem Körper der Nachricht zwischen zwei beliebigen Knoten auf dem Weg zwischen Client und Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Kompression anwenden.

![Ein Server sendet einen unkomprimierten HTTP-Körper über Netzknoten an einen Client. Der Körper wird von Knoten im Netzwerk komprimiert und dekomprimiert, abhängig von 'Transfer-Encoding'-Headern, bevor er den Client erreicht.](httpte1.svg)

Um dies zu tun, verwendet HTTP einen Mechanismus, ähnlich der Inhaltsaushandeln für End-to-End-Kompression: der Knoten, der die Anfrage übermittelt, gibt seinen Willen mit dem {{HTTPHeader("TE")}}-Header an, und der andere Knoten wählt die geeignete Methode, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

![Ein Client fordert Inhalt von einem Server ohne kompressionsbezogene Header an. Der Server antwortet mit einem unkomprimierten Körper. Der Körper wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-Hop-Kompression sowohl für den Server als auch für den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden meist verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, eine Ressource zu übertragen, ohne ihre Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf Hop-Ebene so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit haben, sie zu konfigurieren. Eine solche Konfiguration erfolgt in der Regel auf Proxy-Ebene.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
