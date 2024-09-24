---
title: Kompression im HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**Kompression** ist eine wichtige Methode, um die Leistung einer Website zu steigern. Für einige Dokumente kann eine Größenreduzierung von bis zu 70% den Bandbreitenbedarf senken. Im Laufe der Jahre wurden Algorithmen auch effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Kompressionsmechanismen implementieren, sowohl Browser als auch Server haben sie bereits implementiert, aber sie müssen sicherstellen, dass der Server entsprechend konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann auf HTTP-Ebene eine allgemeine Verschlüsselung stattfinden (die Ressource wird von Anfang bis Ende komprimiert übertragen),
- und schließlich kann die Kompression auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformat-Kompression

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeten Raum_. Wenn Text typischerweise bis zu 60% Redundanz aufweisen kann, kann diese Rate bei anderen Medien wie Audio und Video viel höher sein. Anders als Text benötigen diese anderen Medientypen viel Speicherplatz für die Speicherung ihrer Daten, und die Notwendigkeit, Speicherplatz zu optimieren und zurückzugewinnen, wurde sehr früh erkannt. Ingenieure entwickelten den optimierten Kompressionsalgorithmus, der von Dateiformaten verwendet wird, die für diesen spezifischen Zweck entwickelt wurden. Kompressionsalgorithmen für Dateien lassen sich in zwei große Kategorien einteilen:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompressions-Zyklus die wiederhergestellten Daten nicht verändert. Sie stimmen byteweise mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Kompression verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass mehr oder weniger komprimiert wird, was natürlich zu einer geringeren oder höheren Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern könnte ein von einem Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Tools](https://www.creativebloq.com/design/image-compression-tools-1132865), die dafür spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei bestimmten Arten von Dateien besser funktioniert, bringt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten für den Overhead (Algorithmen benötigen in der Regel ein Wörterbuch, das zur anfänglichen Größe hinzukommt) höher sein können als der zusätzliche Gewinn bei der Kompression, was zu einer größeren Datei führt. Verwenden Sie nicht die beiden folgenden Techniken für bereits komprimierte Dateien.

## End-to-End-Kompression

Für die Kompression liegt bei der End-to-End-Kompression der größte Leistungszuwachs von Websites. End-to-End-Kompression bezieht sich auf die Kompression des Körpers einer Nachricht, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Unabhängig von den Zwischenknoten bleibt der Körper unangetastet.

![Ein Server, der einen komprimierten HTTP-Körper über Netzwerkknoten an einen Client sendet. Der Körper wird nicht an einem Knotenpunkt im Netzwerk dekomprimiert, bevor er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das einzige, was verhandelt werden muss, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie rasant, und zahlreiche aufeinanderfolgende Algorithmen wurden dem Satz der möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur noch zwei relevant: `gzip`, der am häufigsten verwendete, und `br`, der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, verwenden Browser und Server [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}} Header mit den Algorithmen, die er unterstützt, und deren Prioritätsreihenfolge, der Server wählt einen aus, verwendet ihn, um den Körper der Antwort zu komprimieren, und teilt dem Browser mit dem {{HTTPHeader("Content-Encoding")}} Header den gewählten Algorithmus mit. Da die Inhaltsverhandlung verwendet wurde, um eine Darstellung basierend auf ihrer Codierung auszuwählen, muss der Server einen {{HTTPHeader("Vary")}} Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} neben diesem Header in der Antwort enthält; so können Caches die verschiedenen Darstellungen der Ressource zwischenspeichern.

![Ein Client, der Inhalte mit einem Header 'Accept-Encoding: br, gzip' anfordert. Der Server antwortet mit einem mit dem Brotli-Algorithmus komprimierten Körper und den erforderlichen 'Content-Encoding' und 'Vary' Headern.](httpcompression1.svg)

Da Kompression bedeutende Leistungsverbesserungen mit sich bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierten wie Bilder, Audiodateien und Videos zu aktivieren.

Apache unterstützt die Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/) Element.

## Hop-by-Hop-Kompression

Hop-by-Hop-Kompression, obwohl ähnlich der End-to-End-Kompression, unterscheidet sich durch ein grundlegendes Element: Die Kompression erfolgt nicht auf der Ressource im Server, wodurch eine spezifische Darstellung erzeugt wird, die dann übertragen wird, sondern auf dem Körper der Nachricht zwischen zwei Knoten auf dem Weg zwischen Client und Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Kompression anwenden.

![Ein Server, der einen unkomprimierten HTTP-Körper an einen Client über Netzwerkknoten sendet. Der Körper wird von den Knoten im Netzwerk entsprechend den 'Transfer-Encoding' Headern vor dem Erreichen des Clients komprimiert und dekomprimiert.](httpte1.svg)

Um dies zu tun, verwendet HTTP einen Mechanismus, der der Inhaltsverhandlung für die End-to-End-Kompression ähnlich ist: Der Knoten, der die Anfrage überträgt, gibt seinen Wunsch mit dem {{HTTPHeader("TE")}} Header bekannt, und der andere Knoten wählt die geeignete Methode aus, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}} Header an.

![Ein Client, der Inhalte von einem Server ohne kompressionsbezogene Header anfordert. Der Server antwortet mit einem unkomprimierten Körper. Der Körper wird von den Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-Hop-Kompression für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, sodass man mit der Übertragung einer Ressource beginnen kann, ohne deren Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf der Hoplevelle so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit zur Konfiguration haben. Eine solche Konfiguration erfolgt in der Regel auf Proxylevel.
