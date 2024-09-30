---
title: Komprimierung in HTTP
slug: Web/HTTP/Compression
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**Komprimierung** ist eine wichtige Methode, um die Leistung einer Website zu erhöhen. Bei einigen Dokumenten reduziert die Größenverringerung um bis zu 70 % den Bandbreitenbedarf. Im Laufe der Jahre wurden die Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Komprimierungsmechanismen implementieren, sowohl Browser als auch Server haben diese bereits implementiert. Sie müssen jedoch sicherstellen, dass der Server angemessen konfiguriert ist. Komprimierung erfolgt auf drei verschiedenen Ebenen:

- Zunächst werden einige Dateiformate mit spezifischen, optimierten Methoden komprimiert.
- Dann kann eine allgemeine Verschlüsselung auf HTTP-Ebene erfolgen (die Ressource wird von Ende zu Ende komprimiert übertragen).
- Schließlich kann die Komprimierung auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformatkomprimierung

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeten Speicherplatz_. Bei Text kann die Redundanz typischerweise bis zu 60 % betragen, dieser Wert kann jedoch bei anderen Medien wie Audio und Video wesentlich höher sein. Anders als Text benötigen diese anderen Medientypen viel Speicherplatz zur Speicherung ihrer Daten, und der Bedarf an Speicheroptimierung war schon früh erkennbar. Ingenieure entwickelten die optimierten Komprimierungsalgorithmen für Dateiformate, die speziell für diesen Zweck entworfen wurden. Komprimierungsalgorithmen für Dateien können in zwei Hauptkategorien unterteilt werden:

- _Verlustfreie Komprimierung_, bei der der Komprimierungs-Entkomprimierungs-Zyklus die wiederhergestellten Daten nicht verändert. Diese stimmen (bytegenau) mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Komprimierung.
- _Verlustbehaftete Komprimierung_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; das `jpeg`-Bildformat ist ebenfalls verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch für verlustbehaftete Komprimierung verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass er mehr oder weniger komprimiert, was natürlich zu weniger oder mehr Qualität führt. Für bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern könnte ein von einem Tool generiertes Bild nicht ausreichend für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so stark komprimieren, wie es die erforderliche Qualität zulässt. Es gibt [zahlreiche spezialisierte Tools](https://www.creativebloq.com/design/image-compression-tools-1132865) dafür.

Verlustbehaftete Komprimierungsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da Komprimierung bei einer spezifischen Art von Dateien besser funktioniert, bringt es normalerweise nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten des Overheads (Algorithmen benötigen in der Regel ein Wörterbuch, das die Anfangsgröße erhöht) höher sein können als der zusätzliche Gewinn bei der Komprimierung, was zu einer größeren Datei führt. Verwenden Sie die folgenden Techniken nicht für bereits komprimierte Dateien.

## End-to-End-Komprimierung

Für die Komprimierung ist End-to-End-Komprimierung dort, wo die größten Leistungsverbesserungen für Websites liegen. End-to-End-Komprimierung bezieht sich auf eine Komprimierung des Nachrichtentexts, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Unabhängig von den Zwischenknoten bleibt der Nachrichtentext unberührt.

![Ein Server sendet einen komprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird auf keinem Hop im Netzwerk dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das Einzige, was verhandelt werden muss, ist der zu verwendende Komprimierungsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Komprimierungstechnologie rasant weiter, und zahlreiche nachfolgende Algorithmen wurden in den Satz möglicher Auswahlmöglichkeiten aufgenommen. Heutzutage sind nur noch zwei relevant: `gzip`, der am häufigsten verwendete, und `br`, der neue Herausforderer.

Zur Auswahl des zu verwendenden Algorithmus verwenden Browser und Server die [proaktive Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den unterstützten Algorithmen und deren Priorität, der Server wählt einen aus, verwendet ihn, um den Nachrichtentext der Antwort zu komprimieren und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser den gewählten Algorithmus mitzuteilen. Da die Inhaltsaushandlung verwendet wurde, um eine Darstellung basierend auf der Kodierung auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält, zusammen mit diesem Header in der Antwort; so können Caches die verschiedenen Darstellungen der Ressource zwischenspeichern.

![Ein Client fordert Inhalte mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem Text, der mittels Brotli-Algorithmus komprimiert wurde, sowie den notwendigen 'Content-Encoding' und 'Vary'-Headern.](httpcompression1.svg)

Da die Komprimierung erhebliche Leistungsverbesserungen bringt, wird empfohlen, sie für alle Dateien zu aktivieren, außer für bereits komprimierte, wie Bilder, Audiodateien und Videos.

Apache unterstützt Komprimierung und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/)-Element.

## Hop-by-hop Komprimierung

Hop-by-hop Komprimierung, obwohl ähnlich zur End-to-End Komprimierung, unterscheidet sich in einem grundlegenden Element: Die Komprimierung erfolgt nicht auf der Ressource im Server, die eine spezifische Darstellung erzeugt, die dann übertragen wird, sondern auf dem Nachrichtentext zwischen zwei beliebigen Knoten auf dem Weg zwischen Client und Server. Die Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _unterschiedliche_ Komprimierung anwenden.

![Ein Server sendet einen unkomprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird durch Knoten im Netzwerk je nach 'Transfer-Encoding'-Headern komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Um dies zu erreichen, verwendet HTTP einen ähnlichen Mechanismus wie die Inhaltsverhandlung für die End-to-End Komprimierung: Der Knoten, der die Anforderung überträgt, kündigt seine Bereitschaft mit dem {{HTTPHeader("TE")}}-Header an, und der andere Knoten wählt die geeignete Methode, wendet sie an und zeigt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

![Ein Client fordert Inhalte von einem Server ohne Komprimierungs-bezogene Header an. Der Server antwortet mit einem unkomprimierten Text. Der Text wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-hop Komprimierung für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, eine Ressource zu übertragen, ohne deren Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Komprimierung auf Hop-Ebene so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit zur Konfiguration haben. Solche Konfigurationen erfolgen normalerweise auf Proxy-Ebene.
