---
title: Kompression in HTTP
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

**Kompression** ist ein wichtiger Weg, um die Leistung einer Website zu steigern. Bei einigen Dokumenten kann eine Größenreduzierung von bis zu 70% den Bedarf an Bandbreitenkapazität senken. Im Laufe der Jahre wurden Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Kompressionsmechanismen implementieren, da sowohl Browser als auch Server diese bereits implementiert haben. Sie müssen jedoch sicherstellen, dass der Server entsprechend konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- Erstens werden einige Dateiformate mit spezifischen optimierten Methoden komprimiert,
- dann kann eine allgemeine Kompression auf HTTP-Ebene erfolgen (die Ressource wird von Ende zu Ende komprimiert übertragen),
- und schließlich kann die Kompression auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformatkompression

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeten Speicherplatz_. Während Texte typischerweise bis zu 60% Redundanz aufweisen können, kann diese Rate bei einigen anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text verwenden diese anderen Medientypen viel Speicherplatz zur Datenspeicherung, und der Bedarf, Speicher zu optimieren und Platz zu sparen, war frühzeitig offensichtlich. Ingenieure haben den für diesen speziellen Zweck entwickelten optimierten Kompressionsalgorithmus für Dateiformate entworfen. Kompressionsalgorithmen für Dateien können in zwei breite Kategorien unterteilt werden:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompessions-Zyklus die wiederhergestellten Daten nicht verändert. Sie stimmen Byte für Byte mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können für sowohl verlustfreie als auch verlustbehaftete Kompression verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so weit wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern kann ein durch ein Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so weit wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Tools](https://www.creativebloq.com/design/image-compression-tools-1132865), die dafür spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind normalerweise effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei einer bestimmten Art von Dateien besser funktioniert, bringt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten für den Overhead (Algorithmen benötigen in der Regel ein Wörterbuch, das zur anfänglichen Größe hinzugefügt wird) höher sein können als der zusätzliche Gewinn durch die Kompression, was zu einer größeren Datei führt. Verwenden Sie die beiden folgenden Techniken nicht für Dateien in einem komprimierten Format.

## End-to-End-Kompression

Bei der Kompression liegt bei der End-to-End-Kompression das größte Leistungspotenzial für Websites. End-to-End-Kompression bezieht sich auf eine Kompression des Nachrichtentextes, die vom Server durchgeführt und unverändert belassen wird, bis er den Client erreicht. Was auch immer die Zwischenknoten sind, sie lassen den Text unberührt.

![Ein Server, der einen komprimierten HTTP-Text an einen Client über Netzwerk-Knoten sendet. Der Text wird auf keiner Station im Netzwerk dekomprimiert, bevor er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das Einzige, was verhandelt werden muss, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie schnell weiter, und zahlreiche aufeinanderfolgende Algorithmen wurden zu den möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur zwei relevant: `gzip`, der am häufigsten verwendete, und `br`, der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, nutzen Browser und Server die [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den unterstützten Algorithmen und deren Priorität, der Server wählt einen aus, verwendet ihn zur Kompression des Antworttexts und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser den gewählten Algorithmus mitzuteilen. Da die Inhaltsverhandlung verwendet wurde, um anhand der Kodierung eine Repräsentation auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält; auf diese Weise können Caches die verschiedenen Repräsentationen der Ressource zwischenspeichern.

![Ein Client, der Inhalte mit einem 'Accept-Encoding: br, gzip'-Header anfordert. Der Server antwortet mit einem unter Verwendung des Brotli-Algorithmus komprimierten Text und den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da Kompression wesentliche Leistungssteigerungen bietet, wird empfohlen, sie für alle Dateien mit Ausnahme von bereits komprimierten wie Bilder, Audiodateien und Videos zu aktivieren.

Apache unterstützt Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/) Element.

## Transport von Kompressionswörterbüchern

Moderne Kompressionsformate wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} können Wörterbücher mit häufig verwendeten Daten nutzen, um die Kompression weiter zu erhöhen, indem diese innerhalb der komprimierten Datei referenziert werden. Typischerweise wird bei HTTP-Antworten das vordefinierte statische Wörterbuch verwendet, das in diesem Format enthalten ist (zum Beispiel [das Brotli-statistische Wörterbuch ist im Quellcode verfügbar](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)).

Der [Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ermöglicht es einem Entwickler, eine Ressource anzugeben, die als Wörterbuch für zukünftige Anfragen verwendet werden kann. Dies kann entweder eine spezifische Wörterbuchdatei oder eine vorhandene Ressource sein (zum Beispiel, indem `app.v1.js` als Wörterbuch beim Herunterladen von `app.v2.js` verwendet wird). Dies verbessert typischerweise die Kompression und damit die Ladezeit. Im Beispiel `app.vX.js` würde der größte Teil des Downloads nur aus dem Delta zwischen den beiden Versionen bestehen, und die gemeinsamen Bytes könnten aus der bereits heruntergeladenen `app.v1.js`-Datei referenziert werden.

## Hop-by-Hop-Kompression

Die Hop-by-Hop-Kompression unterscheidet sich von der End-to-End-Kompression durch ein fundamentales Element: Die Kompression erfolgt nicht an der Ressource auf dem Server, wodurch eine spezifische Darstellung erzeugt wird, die dann übertragen wird, sondern an dem Nachrichtentext zwischen zwei Knoten auf dem Weg zwischen dem Client und dem Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _unterschiedliche_ Kompression anwenden.

![Ein Server, der einen unkomprimierten HTTP-Text an einen Client über Netzwerk-Knoten sendet. Der Text wird von Knoten im Netzwerk entsprechend den 'Transfer-Encoding'-Headern vor dem Erreichen des Clients komprimiert und dekomprimiert.](httpte1.svg)

Um dies zu tun, verwendet HTTP einen Mechanismus, der der Inhaltsverhandlung für die End-to-End-Kompression ähnlich ist: Der Knoten, der die Anfrage überträgt, signalisiert seinen Willen mit dem {{HTTPHeader("TE")}}-Header und der andere Knoten wählt die geeignete Methode aus, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

In der Praxis ist die Hop-by-Hop-Kompression für Server und Clients transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, sodass Sie mit der Übertragung einer Ressource beginnen können, ohne deren Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf Hop-Ebene so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit haben, es zu konfigurieren. Eine solche Konfiguration erfolgt normalerweise auf Proxy-Ebene.

## Siehe auch

- [Leitfaden für den Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
  - {{Glossary("Compression_Dictionary_Transport", "Transport von Kompressionswörterbüchern")}}
