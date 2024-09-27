---
title: Komprimierung in HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**Komprimierung** ist eine wichtige Methode, um die Leistung einer Website zu steigern. Für einige Dokumente reduziert sich die Größe um bis zu 70 %, wodurch der Bandbreitenbedarf sinkt. Im Laufe der Jahre wurden die Algorithmen effizienter und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Komprimierungsmechanismen implementieren, da sowohl Browser als auch Server sie bereits implementiert haben. Sie müssen jedoch sicherstellen, dass der Server ordnungsgemäß konfiguriert ist. Komprimierung erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifischen optimierten Methoden komprimiert,
- dann kann eine allgemeine Verschlüsselung auf HTTP-Ebene stattfinden (die Ressource wird von Ende zu Ende komprimiert übertragen),
- und schließlich kann die Komprimierung auf der Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformat-Komprimierung

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeten Speicherplatz_. Wenn Text typischerweise bis zu 60 % Redundanz aufweisen kann, kann dieser Wert bei anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text benötigen diese anderen Medientypen viel Speicherplatz, um ihre Daten zu speichern, und der Bedarf an Optimierung des Speicherplatzes war schon früh offensichtlich. Ingenieure entwickelten den optimierten Komprimierungsalgorithmus, der von Dateiformaten verwendet wird, die speziell für diesen Zweck entwickelt wurden. Komprimierungsalgorithmen für Dateien können in zwei große Kategorien unterteilt werden:

- _Verlustfreie Komprimierung_, bei der der Komprimierungs-Entkomprimierungs-Zyklus die wiederhergestellten Daten nicht verändert. Diese entsprechen Byte für Byte dem Original.
  Für Bilder verwenden `gif` oder `png` verlustfreie Komprimierung.
- _Verlustbehaftete Komprimierung_, bei der der Zyklus die Originaldaten auf eine für den Benutzer hoffentlich unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; das Bildformat `jpeg` ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Komprimierung verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass mehr oder weniger komprimiert wird, was natürlich zu mehr oder weniger Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren und gleichzeitig ein akzeptables Qualitätsniveau beizubehalten. Bei Bildern könnte ein von einem Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so weit wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche spezialisierte Tools](https://www.creativebloq.com/design/image-compression-tools-1132865) dafür.

Verlustbehaftete Komprimierungsalgorithmen sind normalerweise effizienter als verlustfreie.

> [!NOTE]
> Da die Komprimierung auf einer bestimmten Art von Dateien besser funktioniert, bringt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten für den Overhead (Algorithmen benötigen normalerweise ein Wörterbuch, das zur ursprünglichen Größe hinzukommt) höher sein können als der zusätzliche Gewinn durch die Komprimierung, was zu einer größeren Datei führt. Verwenden Sie die folgenden Techniken nicht für Dateien in einem bereits komprimierten Format.

## End-to-End-Komprimierung

Bei der Komprimierung liegt die größte Leistungsverbesserung von Websites bei der End-to-End-Komprimierung. End-to-End-Komprimierung bezieht sich auf die Komprimierung des Nachrichtentextes, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Welche Zwischenknoten auch immer beteiligt sind, sie lassen den Nachrichtentext unangetastet.

![Ein Server, der einen komprimierten HTTP-Text an einen Client über Netzwerkknoten sendet. Der Text wird an keinem Netzwerk-Hop dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das einzige, was zu verhandeln ist, ist der zu verwendende Komprimierungsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelten sich Komprimierungstechnologien rasch weiter, und zahlreiche aufeinanderfolgende Algorithmen wurden zu den möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur noch zwei relevant: `gzip`, die gebräuchlichste, und `br`, der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, nutzen Browser und Server die [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den unterstützten Algorithmen und ihrer Rangfolge, der Server wählt einen aus, verwendet ihn zur Komprimierung des Antworttexts und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser den ausgewählten Algorithmus mitzuteilen. Da die Inhaltsverhandlung zur Auswahl einer Darstellung basierend auf ihrer Kodierung verwendet wurde, muss der Server einen {{HTTPHeader("Vary")}}-Header mit mindestens {{HTTPHeader("Accept-Encoding")}} zusammen mit diesem Header in der Antwort senden, sodass Caches die verschiedenen Darstellungen der Ressource zwischenspeichern können.

![Ein Client fordert Inhalt mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem mit dem Brotli-Algorithmus komprimierten Text und den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da die Komprimierung erhebliche Leistungsverbesserungen bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierten wie Bilder, Audiodateien und Videos zu aktivieren.

Apache unterstützt Komprimierung und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/)-Element.

## Hop-by-Hop-Komprimierung

Die Hop-by-Hop-Komprimierung ähnelt zwar der End-to-End-Komprimierung, unterscheidet sich jedoch in einem grundlegenden Element: Die Komprimierung erfolgt nicht auf der Ressource im Server, indem eine spezifische Darstellung erstellt wird, die dann übertragen wird, sondern auf dem Nachrichtentext zwischen zwei beliebigen Knoten auf dem Weg zwischen dem Client und dem Server. Die Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Komprimierung anwenden.

![Ein Server, der einen unkomprimierten HTTP-Text an einen Client über Netzwerkknoten sendet. Der Text wird von Knoten im Netzwerk je nach 'Transfer-Encoding'-Headern komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Um dies zu tun, verwendet HTTP einen Mechanismus ähnlich der Inhaltsverhandlung für die End-to-End-Komprimierung: Der Knoten, der die Anfrage überträgt, zeigt seinen Wunsch mit dem {{HTTPHeader("TE")}}-Header an, und der andere Knoten wählt die geeignete Methode, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

In der Praxis ist die Hop-by-Hop-Komprimierung für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, mit der Übertragung einer Ressource zu beginnen, ohne ihre Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Komprimierung auf Hop-Ebene so selten ist, dass die meisten Server wie Apache, Nginx oder IIS keine einfache Möglichkeit haben, sie zu konfigurieren. Eine solche Konfiguration erfolgt normalerweise auf Proxy-Ebene.
