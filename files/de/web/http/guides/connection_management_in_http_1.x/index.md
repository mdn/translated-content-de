---
title: Verbindungsverwaltung in HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: f0311fa176576faf8be270e23eaf25b725740d87
---

Die Verbindungsverwaltung ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen wirkt sich maßgeblich auf die Leistung von Websites und Webanwendungen aus. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich für sein Transportprotokoll überwiegend auf TCP, das eine Verbindung zwischen dem Client und dem Server bereitstellt. In seinen Anfängen verwendete HTTP ein einziges Modell zur Behandlung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Jedes Mal, wenn eine Anfrage gesendet werden musste, wurde eine neue Verbindung erstellt, und sie wurde geschlossen, sobald die Antwort empfangen worden war.

Dieses Modell hatte eine inhärente Leistungseinschränkung: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Zwischen Client und Server müssen mehrere Nachrichten ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten benötigen viele Anfragen (ein Dutzend oder mehr), um die erforderliche Informationsmenge bereitzustellen, was dieses frühere Modell ineffizient macht.

In HTTP/1.1 wurden zwei neuere Modelle geschaffen. Das Modell persistenter Verbindungen hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet und reduziert so die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht noch einen Schritt weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne überhaupt auf eine Antwort zu warten, wodurch ein großer Teil der Netzwerklatenz reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für die Verbindungsverwaltung hinzu.

Es ist wichtig zu beachten, dass die Verbindungsverwaltung in HTTP für die Verbindung zwischen zwei aufeinanderfolgenden Knoten gilt, die [hop-by-hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) und nicht [end-to-end](/de/docs/Web/HTTP/Reference/Headers#end-to-end_headers) erfolgt. Das für Verbindungen zwischen einem Client und dessen erstem Proxy verwendete Modell kann sich von dem Modell zwischen einem Proxy und dem Zielserver (oder anderen zwischengeschalteten Proxys) unterscheiden. Die HTTP-Header, die an der Definition des Verbindungsmodells beteiligt sind, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)-Header, deren Werte von zwischengeschalteten Knoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext hochgestuft wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über ihre eigene Verbindung abgeschlossen; das bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake stattfindet und diese serialisiert werden.

Der TCP-Handshake selbst ist zeitaufwändig, aber eine TCP-Verbindung passt sich an ihre Last an und wird bei länger aufrechterhaltenen (oder warmen) Verbindungen effizienter. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht, und die Leistung entfernt sich vom Optimum, da weiterhin über eine neue, kalte Verbindung übertragen wird.

Dieses Modell ist das in HTTP/1.0 verwendete Standardmodell (wenn kein {{HTTPHeader("Connection")}}-Header vorhanden ist oder dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit dem Wert `close` gesendet wird.

> [!NOTE]
> Sofern Sie nicht mit einem sehr alten System arbeiten, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen weisen zwei wesentliche Nachteile auf: Die zum Herstellen einer neuen Verbindung benötigte Zeit ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich erst, wenn diese Verbindung einige Zeit verwendet wurde (warme Verbindung). Um diese Probleme zu entschärfen, wurde bereits vor HTTP/1.1 das Konzept einer _persistenten Verbindung_ entwickelt. Alternativ kann sie als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für einen Zeitraum geöffnet und kann für mehrere Anfragen wiederverwendet werden. Dadurch entfällt die Notwendigkeit eines neuen TCP-Handshakes, und die leistungssteigernden Fähigkeiten von TCP werden genutzt. Diese Verbindung bleibt nicht für immer geöffnet: Inaktive Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, für die die Verbindung geöffnet bleiben soll).

Persistente Verbindungen haben auch Nachteile; selbst wenn sie inaktiv sind, verbrauchen sie Serverressourcen, und unter hoher Last können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung nicht persistenter Verbindungen, die geschlossen werden, sobald sie inaktiv sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Wenn {{HTTPHeader("Connection")}} auf einen anderen Wert als `close`, üblicherweise `retry-after`, gesetzt wird, werden sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (er wird jedoch häufig als Schutzmaßnahme für Fälle hinzugefügt, in denen ein Fallback auf HTTP/1.0 erforderlich ist).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxys](https://en.wikipedia.org/wiki/Proxy_server) sind weiterhin verbreitet und führen zu seltsamen und unvorhersehbaren Verhaltensweisen, die Webentwickler nicht einfach vorhersehen und diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, die verwendete effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time) sowie die effektive Bandbreite haben direkten Einfluss auf die durch die Pipeline erzielte Verbesserung. Ohne diese Informationen können wichtige Nachrichten hinter unwichtigen verzögert werden. Die Vorstellung davon, was wichtig ist, verändert sich sogar während des Seitenlayouts! HTTP-Pipelining bringt daher in den meisten Fällen nur eine geringfügige Verbesserung.
> - Pipelining unterliegt dem {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, _Multiplexing_, ersetzt, der von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequenziell ausgegeben. Die nächste Anfrage wird erst ausgegeben, wenn die Antwort auf die aktuelle Anfrage empfangen wurde. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen betroffen sind, kann dies zu einer erheblichen Verzögerung führen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess, aufeinanderfolgende Anfragen über dieselbe persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dadurch wird die Latenz der Verbindung vermieden. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in derselben TCP-Nachricht verpackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Größenbedarf von HTTP-Anfragen weiter wächst.

Nicht alle Arten von HTTP-Anfragen können über Pipelines verarbeitet werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, also {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Inhalt der Pipeline wiederholt werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen aufweisen: Dies ist ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain-Sharding

> [!NOTE]
> Verwenden Sie diese veraltete Technik nicht, sofern Sie keinen sehr spezifischen unmittelbaren Bedarf haben; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain-Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele, nicht priorisierte Anfragen sehr gut verarbeiten. Domain-Sharding ist sogar leistungsschädlich. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [Connection Coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um mögliches Domain-Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, kann sie selbst ohne jede Reihenfolge ohne ausreichend verfügbare Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Standardmäßig waren es früher 2 bis 3 Verbindungen, dies hat sich inzwischen jedoch auf die häufigere Verwendung von 6 parallelen Verbindungen erhöht. Beim Versuch, diese Anzahl zu überschreiten, besteht das Risiko, den {{Glossary("Denial_of_Service", "DoS")}}-Schutz auf Serverseite auszulösen.

Wenn der Server eine schnellere Antwort der Website oder Anwendung wünscht, kann er das Öffnen weiterer Verbindungen erzwingen. Beispielsweise könnte er die Ressourcen, statt alle auf derselben Domain wie `www.example.com` zu haben, auf mehrere Domains wie `www1.example.com`, `www2.example.com` und `www3.example.com` verteilen. Jede dieser Domains wird zum _selben_ Server aufgelöst, und der Webbrowser öffnet zu jeder 6 Verbindungen (in unserem Beispiel erhöht sich die Anzahl der Verbindungen auf 18). Diese Technik wird _Domain-Sharding_ genannt.

![Ohne Domain-Sharding fordert ein Client sechs Bilder von einer Domain an, wobei maximal zwei Anfragen parallel stattfinden. Mit Domain-Sharding sind die Bilder von zwei Domains verfügbar, und der Client kann vier Anfragen parallel ausführen, wodurch die Bilder in kürzerer Zeit heruntergeladen werden.](httpsharding.png)

## Fazit

Eine verbesserte Verbindungsverwaltung ermöglicht eine erhebliche Leistungssteigerung in HTTP. Bei HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie inaktiv wird – zur besten Leistung. Das Scheitern von Pipelining führte jedoch zur Entwicklung überlegener Verbindungsverwaltungsmodelle, die in HTTP/2 integriert wurden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
