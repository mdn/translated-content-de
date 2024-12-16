---
title: Kompression in HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

**Kompression** ist eine wichtige Methode, um die Leistung einer Website zu steigern. Bei einigen Dokumenten führt eine Größenreduktion von bis zu 70 % zu einem geringeren Bedarf an Bandbreitenkapazität. Im Laufe der Jahre wurden die Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Kompressionsmechanismen implementieren, da sowohl Browser als auch Server diese bereits implementiert haben. Sie müssen jedoch sicherstellen, dass der Server ausreichend konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann auf HTTP-Ebene eine allgemeine Verschlüsselung erfolgen (die Ressource wird von Ende zu Ende komprimiert übertragen),
- und schließlich kann die Kompression auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Kompression von Dateiformaten

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeter Speicherplatz_. Während Text typischerweise bis zu 60 % Redundanz aufweisen kann, kann dieser Wert bei anderen Medien wie Audio und Video deutlich höher sein. Anders als Text nutzen diese anderen Medientypen viel Speicherplatz zur Speicherung ihrer Daten, und der Bedarf, Speicher zu optimieren und Platz zu gewinnen, wurde sehr früh erkannt. Ingenieure entwickelten die optimierten Kompressionsalgorithmen, die von Dateiformaten verwendet werden, die für diesen spezifischen Zweck entwickelt wurden. Die für Dateien verwendeten Kompressionsalgorithmen können in zwei große Kategorien eingeteilt werden:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompressionszyklus die wiederhergestellten Daten nicht verändert. Diese entsprechen (byteweise) dem Original.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; auch das `jpeg` Bildformat ist verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Kompression verwendet werden, wie z.B. `webp`, und in der Regel kann ein verlustbehafteter Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was dann natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Für Bilder könnte ein von einem Tool generiertes Bild nicht optimal genug für das Web sein; es wird empfohlen, Tools zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Tools](https://www.creativebloq.com/design/image-compression-tools-1132865), die darauf spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei bestimmten Dateitypen besser funktioniert, bringt es normalerweise nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten des Overheads (Algorithmen benötigen normalerweise ein Wörterbuch, das zur ursprünglichen Größe hinzukommt) höher sein können als der zusätzliche Gewinn, was zu einer größeren Datei führt. Verwenden Sie die folgenden Techniken nicht für Dateien in einem komprimierten Format.

## Ende-zu-Ende-Kompression

Für die Kompression bietet die Ende-zu-Ende-Kompression die größten Leistungssteigerungen von Websites. Ende-zu-Ende-Kompression bezieht sich auf eine Kompression des Nachrichtentextes, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Unabhängig von den Zwischenknoten lassen diese den Nachrichtentext unberührt.

![Ein Server sendet einen komprimierten HTTP-Body über Netzwerkknoten zu einem Client. Der Body wird auf keiner Etappe im Netzwerk dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das Einzige, was verhandelt werden muss, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie rasant, und zahlreiche aufeinanderfolgende Algorithmen wurden zur Menge der möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur noch zwei relevant: `gzip`, der häufigste, und `br` der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, verwenden Browser und Server die [proaktive Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}} Header mit den Algorithmen, die er unterstützt, und ihrer Vorrangordnung; der Server wählt einen aus, verwendet ihn, um den Nachrichtentext der Antwort zu komprimieren, und verwendet den Header {{HTTPHeader("Content-Encoding")}}, um dem Browser den gewählten Algorithmus mitzuteilen. Da die Inhaltsaushandlung verwendet wurde, um eine Darstellung basierend auf ihrer Kodierung auszuwählen, muss der Server einen Header {{HTTPHeader("Vary")}} senden, der mindestens {{HTTPHeader("Accept-Encoding")}} neben diesem Header in der Antwort enthält; auf diese Weise können Caches die verschiedenen Darstellungen der Ressource zwischenspeichern.

![Ein Client fordert Inhalte mit einem 'Accept-Encoding: br, gzip' Header an. Der Server antwortet mit einem mit dem Brotli-Algorithmus komprimierten Body und den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da die Kompression erhebliche Leistungsverbesserungen bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierte Dateien wie Bilder, Audiodateien und Videos zu aktivieren.

Apache unterstützt die Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/) Element.

## Hop-by-hop-Kompression

Die Hop-by-hop-Komprimierung unterscheidet sich von der Ende-zu-Ende-Komprimierung durch ein grundlegendes Element: Die Komprimierung erfolgt nicht auf der Ressource im Server, wodurch eine spezifische Darstellung erstellt wird, die dann übertragen wird, sondern auf dem Nachrichtentext zwischen zwei Knoten auf dem Pfad zwischen dem Client und dem Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Komprimierung anwenden.

![Ein Server sendet einen unkomprimierten HTTP-Body über Netzwerkknoten zu einem Client. Der Body wird von den Knoten im Netzwerk je nach 'Transfer-Encoding'-Header komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Dazu verwendet HTTP einen Mechanismus ähnlich der Inhaltsaushandlung für die Ende-zu-Ende-Komprimierung: Der Knoten, der die Anfrage überträgt, gibt seine Bereitschaft mit dem {{HTTPHeader("TE")}} Header an, und der andere Knoten wählt die geeignete Methode, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}} Header an.

![Ein Client fordert Inhalte von einem Server ohne kompressionsbezogene Header an. Der Server antwortet mit einem unkomprimierten Body. Der Body wird von den Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-hop-Komprimierung für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, mit der Übertragung einer Ressource zu beginnen, ohne deren Länge zu kennen.

Es ist zu beachten, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Komprimierung auf der Hop-Ebene so selten ist, dass die meisten Server wie Apache, Nginx oder IIS keine einfache Möglichkeit haben, dies zu konfigurieren. Eine solche Konfiguration erfolgt normalerweise auf Proxyl-Ebene.

## Siehe auch

- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
