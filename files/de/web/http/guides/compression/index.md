---
title: Kompression in HTTP
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTTPSidebar}}

**Kompression** ist eine wichtige Möglichkeit, die Leistung einer Website zu erhöhen. Für einige Dokumente reduziert eine Größenverringerung um bis zu 70 % den benötigten Bandbreitenbedarf. Im Laufe der Jahre wurden die Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Komprimierungsmechanismen implementieren, da sowohl Browser als auch Server diese bereits implementiert haben. Sie müssen jedoch sicherstellen, dass der Server entsprechend konfiguriert ist. Die Kompression erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann eine allgemeine Kompression auf HTTP-Ebene erfolgen (die Ressource wird von Ende zu Ende komprimiert übertragen),
- und schließlich kann Kompression auf Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformat-Kompression

Jeder Datentyp weist eine gewisse Redundanz auf, die als _verschwendeter Speicherplatz_ bezeichnet wird. Während Text typischerweise bis zu 60 % Redundanz aufweisen kann, kann dieser Wert bei anderen Medien wie Audio und Video viel höher sein. Im Gegensatz zu Text benötigen diese anderen Medientypen viel Speicherplatz für ihre Daten, und die Notwendigkeit, den Speicherplatz zu optimieren und zurückzugewinnen, wurde sehr früh erkannt. Ingenieure entwickelten den optimierten Komprimierungsalgorithmus, der von Dateiformaten genutzt wird, die speziell für diesen Zweck entwickelt wurden. Komprimierungsalgorithmen für Dateien können in zwei große Kategorien unterteilt werden:

- _Verlustfreie Kompression_, bei der der Komprimierungs-Dekomprimierungs-Zyklus die wiederhergestellten Daten nicht verändert. Es stimmt (Byte für Byte) mit dem Original überein.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei der der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; auch das `jpeg`-Bildformat ist verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch verlustbehaftete Kompression verwendet werden, wie `webp`. Üblicherweise kann ein verlustbehafteter Algorithmus so konfiguriert werden, mehr oder weniger zu komprimieren, was natürlich zu weniger oder mehr Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren, während ein akzeptables Qualitätsniveau beibehalten wird. Bei Bildern könnte ein Bild, das von einem Tool erzeugt wurde, nicht für das Web optimiert sein; es wird empfohlen, Tools zu verwenden, die so viel wie möglich unter Erhaltung der erforderlichen Qualität komprimieren. Es gibt [zahlreiche spezialisierte Tools](https://www.creativebloq.com/design/image-compression-tools-1132865) dafür.

Verlustbehaftete Komprimierungsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei einer bestimmten Art von Dateien besser funktioniert, bringt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich ist dies oft kontraproduktiv, da die Kosten für den Overhead (Algorithmen benötigen in der Regel ein Wörterbuch, das zur ursprünglichen Größe hinzukommt) höher sein können als der zusätzliche Kompressionsgewinn, was zu einer größeren Datei führt. Verwenden Sie die beiden folgenden Techniken nicht für Dateien in einem komprimierten Format.

## End-to-End-Kompression

Bei der Kompression liegen die größten Leistungsverbesserungen von Websites bei der End-to-End-Kompression. End-to-End-Kompression bezieht sich auf die Kompression des Nachrichtenkörpers, die vom Server durchgeführt wird und unverändert bleibt, bis sie den Client erreicht. Welche Zwischenschritte auch immer beteiligt sind, sie lassen den Körper unangetastet.

![Ein Server, der einen komprimierten HTTP-Körper über Netzwerkknoten an einen Client sendet. Der Körper wird auf keiner Netzwerkstation dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen sie, und das Einzige, was verhandelt werden muss, ist der zu verwendende Komprimierungsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie in rasantem Tempo, und zahlreiche aufeinanderfolgende Algorithmen wurden zu den möglichen Auswahlmöglichkeiten hinzugefügt. Heutzutage sind nur zwei relevant: `gzip`, der am weitesten verbreitete, und `br`, der neue Herausforderer.

Um zu wählen, welcher Algorithmus verwendet werden soll, verwenden Browser und Server die [proaktive Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den von ihm unterstützten Algorithmen und ihrer Prioritätsreihenfolge, der Server wählt einen aus, verwendet ihn, um den Antwortkörper zu komprimieren, und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser mitzuteilen, welchen Algorithmus er gewählt hat. Da die Inhaltsverhandlung zur Auswahl einer Darstellung basierend auf ihrer Kodierung verwendet wurde, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} enthält, zusammen mit diesem Header in der Antwort; auf diese Weise können Caches die verschiedenen Darstellungen der Ressource zwischenspeichern.

![Ein Client, der Inhalte mit einem 'Accept-Encoding: br, gzip'-Header anfordert. Der Server antwortet mit einem Körper, der unter Verwendung des Brotli-Algorithmus komprimiert ist, sowie den erforderlichen 'Content-Encoding'- und 'Vary'-Headern.](httpcompression1.svg)

Da die Kompression erhebliche Leistungsverbesserungen mit sich bringt, wird empfohlen, sie für alle Dateien zu aktivieren, außer für bereits komprimierte Dateien wie Bilder, Audiodateien und Videos.

Apache unterstützt die Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es das [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/)-Element.

## Kompressionswörterbuch-Transport

Moderne Kompressionsformate wie {{Glossary("Brotli_compression", "Brotli-Kompression")}} und {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} können Wörterbücher von häufig verwendeten Daten verwenden, um die Kompression noch weiter zu verbessern, indem diese anstelle von Referenzen innerhalb der komprimierten Datei genutzt werden. Typischerweise wird für HTTP-Antworten das vordefinierte statische Wörterbuch dieses Formats verwendet (zum Beispiel ist [das Brotli-Standardwörterbuch im Quellcode verfügbar](https://github.com/google/brotli/blob/master/csharp/org/brotli/dec/Dictionary.cs)).

Der [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ermöglicht es einem Entwickler, eine Ressource zu spezifizieren, die als Wörterbuch für zukünftige Anfragen verwendet werden kann. Dies kann entweder eine spezifische Wörterbuchdatei oder eine bestehende Ressource sein (zum Beispiel `app.v1.js` als Wörterbuch verwenden, wenn `app.v2.js` heruntergeladen wird). Dies verbessert typischerweise die Kompression und damit die Ladezeit. Im Beispiel `app.vX.js` würde der größte Teil des Downloads lediglich aus dem Delta zwischen den beiden Versionen bestehen, und die gemeinsamen Bytes könnten aus der ursprünglich heruntergeladenen Datei `app.v1.js` referenziert werden.

## Hop-by-Hop-Kompression

Hop-by-Hop-Kompression, obwohl sie der End-to-End-Kompression ähnlich ist, unterscheidet sich durch ein grundlegendes Element: Die Kompression erfolgt nicht auf der Ressource im Server, wodurch eine spezifische Darstellung erzeugt wird, die dann übertragen wird, sondern auf dem Körper der Nachricht zwischen zwei Knoten auf dem Weg zwischen Client und Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Kompression anwenden.

![Ein Server, der einen unkomprimierten HTTP-Körper über Netzwerkknoten an einen Client sendet. Der Körper wird von Knoten im Netzwerk komprimiert und dekomprimiert, abhängig von 'Transfer-Encoding'-Headern, bevor er den Client erreicht.](httpte1.svg)

Um dies zu tun, verwendet HTTP einen Mechanismus, der der Inhaltsverhandlung für End-to-End-Kompression ähnelt: Der Knoten, der die Anfrage überträgt, signalisiert seinen Willen mit dem {{HTTPHeader("TE")}}-Header, und der andere Knoten wählt die geeignete Methode aus, wendet sie an und gibt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

![Ein Client fordert Inhalte von einem Server ohne komprimierungsbezogene Header an. Der Server antwortet mit einem unkomprimierten Body. Der Body wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-Hop-Kompression für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden meist verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, eine Ressource zu übertragen, ohne ihre Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf Hop-Ebene so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit zur Konfiguration bieten. Eine solche Konfiguration erfolgt in der Regel auf Proxy-Ebene.

## Siehe auch

- [Leitfaden zur Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Glossarbegriffe:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
  - {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuch-Transport")}}
