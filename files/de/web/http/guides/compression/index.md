---
title: Kompression in HTTP
slug: Web/HTTP/Guides/Compression
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**Kompression** ist eine wichtige Methode, um die Leistung einer Website zu erhöhen. Bei einigen Dokumenten senkt eine Größenreduktion von bis zu 70 % den Bandbreitenbedarf erheblich. Im Laufe der Jahre wurden Algorithmen effizienter, und neue werden von Clients und Servern unterstützt.

In der Praxis müssen Webentwickler keine Kompressionsmechanismen implementieren, da sowohl Browser als auch Server diese bereits integriert haben. Sie müssen jedoch sicherstellen, dass der Server richtig konfiguriert ist. Kompression erfolgt auf drei verschiedenen Ebenen:

- Zuerst werden einige Dateiformate mit spezifisch optimierten Methoden komprimiert,
- dann kann eine allgemeine Kompression auf HTTP-Ebene stattfinden (die Ressource wird komprimiert von Ende zu Ende übertragen),
- und schließlich kann die Kompression auf der Verbindungsebene zwischen zwei Knoten einer HTTP-Verbindung definiert werden.

## Dateiformat-Kompression

Jeder Datentyp enthält eine gewisse Redundanz, also _verschwendeten Platz_. Während Text typischerweise bis zu 60 % Redundanz aufweisen kann, kann diese Rate bei anderen Medien wie Audio und Video noch höher sein. Anders als Text verwenden diese anderen Medientypen viel Platz, um ihre Daten zu speichern, und der Bedarf zur Optimierung von Speicherplatz wurde sehr früh erkannt. Ingenieure entwickelten den optimierten Kompressionsalgorithmus, der für Dateiformate entwickelt wurde, die speziell für diesen Zweck konzipiert sind. Kompressionsalgorithmen für Dateien können in zwei Hauptkategorien unterteilt werden:

- _Verlustfreie Kompression_, bei der der Kompressions-Dekompressionszyklus die wiederhergestellten Daten nicht verändert. Diese entsprechen (Byte für Byte) den Originaldaten.
  Für Bilder verwenden `gif` oder `png` verlustfreie Kompression.
- _Verlustbehaftete Kompression_, bei welcher der Zyklus die Originaldaten auf eine (hoffentlich) für den Benutzer unmerkliche Weise verändert.
  Videoformate im Web sind verlustbehaftet; auch das `jpeg`-Bildformat ist verlustbehaftet.

Einige Formate können sowohl für verlustfreie als auch für verlustbehaftete Kompression verwendet werden, wie `webp`, und in der Regel kann der verlustbehaftete Algorithmus so konfiguriert werden, dass mehr oder weniger stark komprimiert wird, was natürlich zu einer geringeren oder höheren Qualität führt. Für eine bessere Leistung einer Website ist es ideal, so viel wie möglich zu komprimieren und dabei ein akzeptables Qualitätsniveau beizubehalten. Bei Bildern kann es vorkommen, dass ein mit einem Werkzeug generiertes Bild nicht ausreichend für das Web optimiert ist. Es wird empfohlen, Werkzeuge zu verwenden, die so viel wie möglich mit der erforderlichen Qualität komprimieren. Es gibt [zahlreiche Werkzeuge](https://www.creativebloq.com/design/image-compression-tools-1132865), die darauf spezialisiert sind.

Verlustbehaftete Kompressionsalgorithmen sind in der Regel effizienter als verlustfreie.

> [!NOTE]
> Da die Kompression bei einer bestimmten Art von Dateien besser funktioniert, bringt es in der Regel nichts, sie ein zweites Mal zu komprimieren. Tatsächlich kann dies oft kontraproduktiv sein, da die Kosten für den Overhead (Algorithmen benötigen in der Regel ein Wörterbuch, das zur ursprünglichen Größe hinzufügt) höher sein können als der zusätzliche Gewinn durch die Kompression, was zu einer größeren Datei führt. Verwenden Sie die beiden folgenden Techniken nicht für Dateien in einem komprimierten Format.

## End-to-End-Kompression

Bei der Kompression liegen die größten Leistungsverbesserungen von Websites in der End-to-End-Kompression. End-to-End-Kompression bezieht sich auf eine Kompression des Nachrichtentextes, die vom Server vorgenommen wird und unverändert bleibt, bis sie den Client erreicht. Welche Zwischenknoten auch immer vorhanden sind, sie lassen den Text unberührt.

<!--
%%{init: { "sequence": { "wrap": true, "width": 175, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant Proxy1 as Proxy
    participant Proxy2 as Proxy
    participant Server

    Note over Client: Resource requested.
    Client->>Server:
    Note over Server: Resource is compressed and returned.
    Server->>Client:
    Note over Proxy1,Proxy2: Intermediate nodes do not uncompress the body.
    Note over Client: Client decompresses the body.
-->

![Ein Server sendet einen komprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird an keinem Übergang im Netzwerk dekomprimiert, bis er den Client erreicht.](httpenco1.svg)

Alle modernen Browser und Server unterstützen dies, und das Einzige, was zu verhandeln ist, ist der zu verwendende Kompressionsalgorithmus. Diese Algorithmen sind für Text optimiert. In den 1990er Jahren entwickelte sich die Kompressionstechnologie rasant, und viele aufeinanderfolgende Algorithmen wurden zu den möglichen Optionen hinzugefügt. Heutzutage sind nur zwei relevant: `gzip`, der häufigste Algorithmus, und `br`, der neue Herausforderer.

Um den Algorithmus auszuwählen, verwenden Browser und Server die [proaktive Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation). Der Browser sendet einen {{HTTPHeader("Accept-Encoding")}}-Header mit den von ihm unterstützten Algorithmen und deren Prioritätsreihenfolge; der Server wählt einen aus, verwendet ihn, um den Text der Antwort zu komprimieren, und verwendet den {{HTTPHeader("Content-Encoding")}}-Header, um dem Browser mitzuteilen, welchen Algorithmus er ausgewählt hat. Da die Inhaltsaushandlung verwendet wurde, um eine Darstellung basierend auf ihrer Kodierung auszuwählen, muss der Server einen {{HTTPHeader("Vary")}}-Header senden, der mindestens {{HTTPHeader("Accept-Encoding")}} zusammen mit diesem Header in der Antwort enthält; so können Caches die unterschiedlichen Darstellungen der Ressource zwischenspeichern.

<!--
%%{init: { "sequence": { "wrap": true, "width":380, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note over Client: The client signifies its ability to understand two compression algorithms.
    Client->>Server: GET /doc HTTP/1.1<br/>Accept-Encoding: br, gzip
    Note over Server: The resource is sent compressed. The Vary header indicates that content negotiation has been used to select the algorithm.
    Server->>Client: HTTP/1.1 200 OK<br/>Content-Encoding: br<br/>Vary: Accept-Encoding
-->

![Ein Client fordert Inhalte mit einem 'Accept-Encoding: br, gzip'-Header an. Der Server antwortet mit einem Text, der mit dem Brotli-Algorithmus komprimiert wurde, und den erforderlichen 'Content-Encoding'- und 'Vary'-Headers.](httpcompression1.svg)

Da Kompression erhebliche Leistungsverbesserungen mit sich bringt, wird empfohlen, sie für alle Dateien außer bereits komprimierten wie Bildern, Audiodateien und Videos zu aktivieren.

Apache unterstützt Kompression und verwendet [mod_deflate](https://httpd.apache.org/docs/current/mod/mod_deflate.html); für Nginx gibt es [ngx_http_gzip_module](https://nginx.org/en/docs/http/ngx_http_gzip_module.html); für IIS das [`<httpCompression>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpCompression/)-Element.

## Hop-by-Hop-Kompression

Hop-by-Hop-Kompression, obwohl ähnlich zur End-to-End-Kompression, unterscheidet sich durch ein grundlegendes Element: Die Kompression erfolgt nicht auf der Ressource im Server, wodurch eine spezifische Darstellung erstellt wird, die dann übertragen wird, sondern auf dem Nachrichtentext zwischen zwei beliebigen Knoten auf dem Pfad zwischen Client und Server. Verbindungen zwischen aufeinanderfolgenden Zwischenknoten können eine _andere_ Kompression anwenden.

<!--
%%{init: { "sequence": { "wrap": true, "width": 130, "noteAlign": "center", "messageAlign": "left" }} }%%

sequenceDiagram
    participant Client
    participant N1 as Node
    participant N2 as Node
    participant N3 as Node
    participant Server

    Client->>N1: Uncompressed
    Note left of Client: Client sends an uncompressed body.
    Note over N1,N3: Intermediate nodes send the body with or without compression on a hop-by-hop basis.
    N1->>N2: Uncompressed
    N2->>N3: Compressed
    N3->>Server: Uncompressed
    Note right of Server: The server receives an uncompressed body.
-->

![Ein Server sendet einen unkomprimierten HTTP-Text an einen Client über Netzwerkknoten. Der Text wird von Knoten im Netzwerk abhängig von 'Transfer-Encoding'-Headers komprimiert und dekomprimiert, bevor er den Client erreicht.](httpte1.svg)

Dazu verwendet HTTP einen Mechanismus ähnlich der Inhaltsaushandlung für die End-to-End-Kompression: Der Knoten, der die Anfrage überträgt, gibt mit dem {{HTTPHeader("TE")}}-Header seine Absicht bekannt, und der andere Knoten wählt die geeignete Methode, wendet sie an und zeigt seine Wahl mit dem {{HTTPHeader("Transfer-Encoding")}}-Header an.

<!--
%%{init: { "sequence": { "wrap": true, "width": 175, "noteAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Node1 as Node
    participant Node2 as Node
    participant Server

    Note over Client: Request message
    Client->>Node1: GET /doc HTTP/1.1

    Note over Node1: Shows support for compression while forwarding message.
    Node1->>Node2: GET /doc HTTP/1.1<br/>TE: gzip, br

    Note over Node2: Forwards message
    Node2->>Server: GET /doc HTTP/1.1

    Note over Server: Returns resource in an uncompressed body.
    Server->>Node2: HTTP/1.1 200 OK

    Note over Node2: Compresses body and forwards message.
    Node2->>Node1: HTTP/1.1 200 OK<br/>Transfer-Encoding: br

    Note over Node1: Decompresses resource and returns message to Client.
    Node1->>Client: HTTP/1.1 200 OK
-->

![Ein Client fordert Inhalte von einem Server ohne kompressionsbezogene Headers an. Der Server antwortet mit einem unkomprimierten Text. Der Text wird von Knoten im Netzwerk komprimiert und dekomprimiert, bevor er den Client erreicht.](httpcomp2.svg)

In der Praxis ist die Hop-by-Hop-Kompression für den Server und den Client transparent und wird selten verwendet. {{HTTPHeader("TE")}} und {{HTTPHeader("Transfer-Encoding")}} werden hauptsächlich verwendet, um eine Antwort in Teilen zu senden, was es ermöglicht, mit der Übertragung einer Ressource zu beginnen, ohne deren Länge zu kennen.

Beachten Sie, dass die Verwendung von {{HTTPHeader("Transfer-Encoding")}} und Kompression auf Hoplevel so selten ist, dass die meisten Server, wie Apache, Nginx oder IIS, keine einfache Möglichkeit haben, dies zu konfigurieren. Solche Konfigurationen erfolgen in der Regel auf Proxyebene.

## Siehe auch

- Glossareinträge:
  - {{Glossary("Brotli_compression", "Brotli-Kompression")}}
  - {{Glossary("Gzip_compression", "Gzip-Kompression")}}
  - {{Glossary("Lossless_compression", "Verlustfreie Kompression")}}
  - {{Glossary("Lossy_compression", "Verlustbehaftete Kompression")}}
  - {{Glossary("Zstandard_compression", "Zstandard-Kompression")}}
