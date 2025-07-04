---
title: Komprimierung in HTTP
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**Komprimierung** ist ein wichtiger Weg, um die Leistung einer Website zu steigern. Für einige Dokumente führt eine Größenreduzierung von bis zu 70% zu einem geringeren Bandbreitenbedarf. Im Laufe der Jahre wurden die Algorithmen auch effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Komprimierungsmechanismen implementieren, da sowohl Browser als auch Server diese bereits implementiert haben, jedoch müssen sie sicherstellen, dass der Server entsprechend konfiguriert ist. Die Komprimierung erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann eine allgemeine Komprimierung auf HTTP-Ebene erfolgen (die Ressource wird komprimiert von Ende zu Ende übertragen),
- und schließlich kann die Komprimierung auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformat-Komprimierung

Jeder Datentyp weist eine gewisse Redundanz auf, also _ungenutzter Speicherplatz_. Wenn Text typischerweise bis zu 60% Redundanz aufweisen kann, kann diese Rate bei anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text benötigen diese anderen Medientypen viel Speicherplatz für die Datenspeicherung, und der Bedarf, Speicher zu optimieren und Platz zurückzugewinnen, wurde schon sehr früh erkannt. Ingenieure entwickelten den optimierten Komprimierungsalgorithmus, der von Dateiformaten für diesen speziellen Zweck verwendet wird. Komprimierungsalgorithmen für Dateien können in zwei große Kategorien eingeteilt werden:

- _Verlustfreie Komprimierung_, bei der der Komprimierungs-Dekomprimierungs-Zyklus die zurückgewonnenen Daten nicht verändert. Sie stimmen (Byte für Byte) mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Komprimierung.
- _Verlustbehaftete Komprimierung_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer nicht wahrnehmbare Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Komprimierung verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was dann natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Für Bilder könnte ein von einem Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Werkzeuge](https://www.creativebloq.com/design/image-compression-tools-1132865), die hierfür spezialisiert sind.

Verlustbehaftete Komprimierungsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da Komprimierung bei bestimmten Dateitypen besser funktioniert, nutzt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten für den Overhead (Algorithmen benötigen in der Regel ein Wörterbuch, das zur ursprünglichen Größe hinzukommt) höher sein können als der zusätzliche Gewinn durch Komprimierung, was zu einer größeren Datei führt. Verwenden Sie die beiden folgenden Techniken nicht für bereits komprimierte Dateien.

## End-to-End-Komprimierung

Bei der Komprimierung liegen die größten Leistungsverbesserungen von Websites in der End-to-End-Komprimierung. End-to-End-Komprimierung bezieht sich auf eine Komprimierung des Nachrichtentextes, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Unabhängig von den Zwischenknoten lassen sie den Text unberührt.

![Ein Server sendet einen komprimierten HTTP-Text über Netzwerkknoten an einen Client. Der Text wird an keinem Punkt im Netzwerk dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das Einzige, was verhandelt werden muss, ist der zu verwendende Komprimierungsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Komprimierungstechnologie rasant, und zahlreiche aufeinanderfolgende Algorithmen wurden dem Satz möglicher Auswahl hinzugefügt. Heutzutage sind nur noch zwei relevant: `gzip`, das am häufigsten verwendete, und `br` der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, verwenden Browser und Server die [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit dem von ihm unterstützten Algorithmus und dessen Priorität. Der Server wählt einen aus, benutzt ihn, um den Nachrichtentext zu komprimieren, und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser den gewählten Algorithmus mitzuteilen. Da die Inhaltsverhandlung verwendet wurde, um eine Repräsentation basierend auf ihrer Kodierung auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält; auf diese Weise können Caches die verschiedenen Repräsentationen der Ressource zwischenspeichern.

![Ein Client fordert Inhalte mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem Text, der mit dem Brotli-Algorithmus komprimiert wurde, sowie den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da Komprimierung signifikante Leistungsverbesserungen bringt, wird empfohlen, sie für alle Dateien zu aktivieren, außer für bereits komprimierte wie Bilder, Audiodateien und Videos.

Apache unterstützt Komprimierung und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/) Element.

## Transport des Komprimierungswörterbuchs

Moderne Komprimierungsformate wie {{Glossary("Brotli_compression", "Brotli Compression")}} und {{Glossary("Zstandard_compression", "Zstandard Compression")}} können Wörterbücher mit häufig verwendeten Daten nutzen, um die Komprimierung weiter zu erhöhen, indem diese innerhalb der komprimierten Datei referenziert werden. Für HTTP-Antworten verwendet dies in der Regel das vordefinierte statische Wörterbuch, das in diesem Format enthalten ist (zum Beispiel [ist das Brotli-Statische Wörterbuch im Quellcode verfügbar](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)).

[Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ermöglicht es einem Entwickler, eine Ressource anzugeben, die als Wörterbuch für zukünftige Anfragen verwendet werden kann. Dies kann entweder eine spezifische Wörterbuchdatei oder eine vorhandene Ressource sein (zum Beispiel könnte `app.v1.js` als Wörterbuch beim Herunterladen von `app.v2.js` verwendet werden). Dies verbessert typischerweise die Komprimierung und damit die Ladezeit. Im Beispiel `app.vX.js` würde der Großteil des Downloads nur aus dem Delta zwischen den beiden Versionen bestehen, und die gemeinsamen Bytes könnten aus der bereits heruntergeladenen Originaldatei `app.v1.js` referenziert werden.

## Hop-by-hop-Komprimierung

Hop-by-hop-Komprimierung, obwohl ähnlich zur End-to-End-Komprimierung, unterscheidet sich durch ein wesentliches Element: Die Komprimierung erfolgt nicht auf der Ressource im Server, um eine spezifische Darstellung zu erstellen, die dann übertragen wird, sondern auf dem Nachrichtentext zwischen zwei beliebigen Knoten auf dem Pfad zwischen Client und Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Komprimierung anwenden.

![Ein Server sendet einen unkomprimierten HTTP-Text über Netzwerkknoten an einen Client. Der Text wird je nach 'Transfer-Encoding'-Headern von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Um dies zu erreichen, verwendet HTTP einen Mechanismus ähnlich der Inhaltsverhandlung für End-to-End-Komprimierung: Der Knoten, der die Anfrage sendet, gibt seinen Willen mit dem {{HTTPHeader("TE")}}-Header an, und der andere Knoten wählt die geeignete Methode, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

![Ein Client, der Inhalte von einem Server ohne komprimierungsbezogene Header anfordert. Der Server antwortet mit einem unkomprimierten Text. Der Text wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die hop-by-hop-Komprimierung für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, mit der Übertragung einer Ressource zu beginnen, ohne ihre Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Komprimierung auf Hop-Ebene so selten ist, dass die meisten Server wie Apache, Nginx oder IIS keine einfache Möglichkeit zur Konfiguration haben. Eine solche Konfiguration erfolgt in der Regel auf Proxiebene.

## Siehe auch

- [Leitfaden zum Transport von Komprimierungswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Komprimierung")}}
  - {{Glossary("Gzip_compression", "Gzip-Komprimierung")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Komprimierung")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Komprimierung")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}}
  - {{Glossary("Compression_Dictionary_Transport", "Transport von Komprimierungswörterbüchern")}}
