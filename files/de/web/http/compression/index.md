---
title: Compression in HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

**Kompression** ist eine wichtige Methode, um die Leistung einer Website zu steigern. Bei einigen Dokumenten kann eine Größenreduktion von bis zu 70 % die erforderliche Bandbreitenkapazität senken. Im Laufe der Jahre wurden Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Komprimierungsmechanismen implementieren, da sowohl Browser als auch Server diese bereits implementiert haben. Sie müssen jedoch sicherstellen, dass der Server angemessen konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- zuerst werden einige Dateiformate mit spezifischen optimierten Methoden komprimiert,
- dann kann auf HTTP-Ebene eine allgemeine Verschlüsselung erfolgen (die Ressource wird vom Anfang bis zum Ende komprimiert übertragen),
- und schließlich kann die Kompression auf der Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Kompression von Dateiformaten

Jeder Datentyp enthält eine gewisse Redundanz, das heißt, _verschwendeten Raum_. Wenn Text typischerweise eine Redundanz von bis zu 60 % haben kann, kann dieser Wert bei anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text beanspruchen diese anderen Medientypen viel Speicherplatz, um ihre Daten zu speichern, und die Notwendigkeit, Speicherplatz zu optimieren und wiederzugewinnen, war früh erkennbar. Ingenieure entwickelten optimierte Komprimierungsalgorithmen, die für den spezifischen Zweck von Dateiformaten ausgelegt sind. Die für Dateien verwendeten Kompressionsalgorithmen können in zwei große Kategorien unterteilt werden:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompressions-Zyklus die wiederhergestellten Daten nicht verändert. Sie stimmen (Byte für Byte) mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Kompression verwendet werden, wie `webp`, und üblicherweise kann der verlustbehaftete Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern könnte ein von einem Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Tools](https://www.creativebloq.com/design/image-compression-tools-1132865), die darauf spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei einer bestimmten Art von Dateien besser funktioniert, liefert sie normalerweise nichts, wenn sie ein zweites Mal komprimiert werden. Tatsächlich ist dies oft kontraproduktiv, da der Aufwand für den Overhead (Algorithmen benötigen normalerweise ein Wörterbuch, das zur Ausgangsgröße hinzukommt) höher sein kann als der zusätzliche Gewinn bei der Kompression, was zu einer größeren Datei führt. Verwenden Sie die folgenden beiden Techniken nicht für Dateien in einem komprimierten Format.

## Ende-zu-Ende-Kompression

Für die Komprimierung liegt der größte Leistungsgewinn von Websites in der Ende-zu-Ende-Kompression. Ende-zu-Ende-Kompression bezieht sich auf eine Kompression des Nachrichtentextes, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Unabhängig von den Zwischenknoten bleibt der Nachrichtentext unangetastet.

![Ein Server sendet einen komprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird bei keinem Schritt im Netzwerk dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das einzige, was verhandelt werden muss, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie schnell, und zahlreiche aufeinanderfolgende Algorithmen wurden zu den möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur noch zwei relevant: `gzip`, der am häufigsten verwendete, und `br`, der neue Herausforderer.

Um den zu verwendenden Algorithmus auszuwählen, verwenden Browser und Server [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den von ihm unterstützten Algorithmen und deren Präferenzreihenfolge, der Server wählt einen aus, verwendet ihn, um den Antworttext zu komprimieren, und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser den gewählten Algorithmus mitzuteilen. Da die Inhaltsverhandlung verwendet wurde, um basierend auf der Kodierung eine Repräsentation auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält, um so den Caches die Zwischenspeicherung der verschiedenen Repräsentationen der Ressource zu ermöglichen.

![Ein Client fordert Inhalte mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem Körper, der unter Verwendung des Brotli-Algorithmus komprimiert ist, sowie den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da Kompression erhebliche Leistungsverbesserungen mit sich bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierten wie Bildern, Audiodateien und Videos zu aktivieren.

Apache unterstützt die Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/) Element.

## Hop-bei-Hop-Kompression

Die Hop-bei-Hop-Kompression ähnelt zwar der Ende-zu-Ende-Kompression, unterscheidet sich jedoch durch ein wesentliches Element: Die Kompression erfolgt nicht bei der Ressource auf dem Server, wodurch eine spezifische Darstellung erzeugt wird, die dann übertragen wird, sondern bei der Nachrichtentext zwischen zwei beliebigen Knoten auf dem Weg zwischen dem Client und dem Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _unterschiedliche_ Kompression anwenden.

![Ein Server sendet einen unkomprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird von Knoten im Netzwerk je nach 'Transfer-Encoding'-Header komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Um dies zu ermöglichen, verwendet HTTP einen ähnlichen Mechanismus wie die Inhaltsverhandlung für die Ende-zu-Ende-Kompression: Der Knoten, der die Anfrage übermittelt, gibt seinen Wunsch durch den {{HTTPHeader("TE")}}-Header bekannt, und der andere Knoten wählt die geeignete Methode, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

![Ein Client fordert Inhalte von einem Server ohne Kompressionsbezogene Header an. Der Server antwortet mit einem unkomprimierten Text. Der Text wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-bei-Hop-Kompression für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden meist verwendet, um eine Antwort in Stücken zu senden und so mit der Übertragung einer Ressource zu beginnen, ohne deren Länge zu kennen.

Es sei darauf hingewiesen, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf der Hop-Ebene so selten ist, dass die meisten Server wie Apache, Nginx oder IIS keine einfache Möglichkeit zur Konfiguration bieten. Eine solche Konfiguration erfolgt in der Regel auf Proxy-Ebene.
