---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Das Verbindungsmanagement ist ein Schlüsselthema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen beeinflusst die Leistung von Websites und Webanwendungen erheblich. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP verlässt sich hauptsächlich auf TCP als Transportprotokoll und stellt eine Verbindung zwischen Client und Server her. In seinen Anfängen verwendete HTTP ein einziges Modell zur Handhabung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Jedes Mal, wenn eine Anfrage gesendet werden musste, wurde eine neue Verbindung erstellt und nach Erhalt der Antwort geschlossen.

Dieses Modell hatte eine angeborene Leistungsbeschränkung: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen Client und Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten benötigen viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell ineffizient macht.

In HTTP/1.1 wurden zwei neuere Modelle eingeführt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen offen und reduziert die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht einen Schritt weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne auf eine Antwort zu warten, was einen Großteil der Latenz im Netzwerk reduziert.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten angewendet wird, was [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) und nicht [End-to-End](/de/docs/Web/HTTP/Reference/Headers#end-to-end_headers) ist. Das verwendete Modell bei Verbindungen zwischen einem Client und seinem ersten Proxy kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder Zwischenproxys) verwendet wird. Die HTTP-Header, die zur Definition des Verbindungsmodells verwendet werden, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)-Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext umgestellt wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über ihre eigene Verbindung abgeschlossen; dies bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake stattfindet, und diese werden seriell verarbeitet.

Der TCP-Handshake selbst ist zeitaufwendig, aber eine TCP-Verbindung passt sich ihrer Last an und wird mit mehr anhaltenden (oder warmen) Verbindungen effizienter. Kurzlebige Verbindungen nutzen dieses Effizienzmerkmal von TCP nicht, und die Leistung verschlechtert sich vom Optimalen, indem weiterhin über eine neue, kalte Verbindung übertragen wird.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn kein {{HTTPHeader("Connection")}}-Header vorhanden ist oder dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Sofern Sie nicht mit einem sehr alten System zu tun haben, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei wesentliche Schwächen: die Zeit, die benötigt wird, um eine neue Verbindung herzustellen, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich nur, wenn diese Verbindung schon eine Weile in Gebrauch ist (warme Verbindung). Um diese Probleme zu lösen, wurde das Konzept einer _persistenten Verbindung_ entworfen, noch vor HTTP/1.1. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für einen bestimmten Zeitraum offen und kann für mehrere Anfragen wiederverwendet werden, was die Notwendigkeit eines neuen TCP-Handshakes erspart und die Leistungseigenschaften von TCP nutzt. Diese Verbindung bleibt nicht für immer offen: Leerlaufende Verbindungen werden nach einer gewissen Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestdauer anzugeben, für die die Verbindung offen gehalten werden soll).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und bei hoher Auslastung können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung nicht-persistenter Verbindungen, die sofort geschlossen werden, wenn sie im Leerlauf sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Wenn {{HTTPHeader("Connection")}} auf einen anderen Wert als `close` gesetzt wird, üblicherweise `retry-after`, werden sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header ist nicht mehr erforderlich (wird jedoch häufig als Vorsichtsmaßnahme gegen Fälle hinzugefügt, die ein Zurückfallen auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxys](https://en.wikipedia.org/wiki/Proxy_server) sind nach wie vor verbreitet und führen zu seltsamem und unvorhersehbarem Verhalten, das Web-Entwickler nicht vorhersehen und leicht diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet werden wird sowie die effektive Bandbreite haben direkten Einfluss auf die Verbesserung, die durch das Pipelining erzielt wird. Ohne diese Kenntnis können wichtige Nachrichten hinter unwichtigen verzögert werden. Die Vorstellung von Wichtigkeit kann sich sogar während des Seitenlayouts entwickeln! HTTP-Pipelining bietet daher in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining unterliegt dem {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, das _Multiplexing_, abgelöst, welches von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen nacheinander ausgeführt. Die nächste Anfrage wird erst dann gestellt, wenn die Antwort auf die aktuelle Anfrage erhalten wurde. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen betroffen sind, kann es zu erheblichen Verzögerungen kommen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess des Sendens aufeinanderfolgender Anfragen über dieselbe persistente Verbindung, ohne auf die Antwort zu warten. Dadurch wird die Latenz der Verbindung vermieden. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in die gleiche TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen aufzunehmen, obwohl die Anforderungen an die Größe von HTTP-Anfragen weiter wachsen.

Nicht alle Arten von HTTP-Anfragen können gepipelined werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Inhalt der Pipeline erneut gesendet werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Es sei denn, Sie haben einen sehr spezifischen unmittelbaren Bedarf, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele nicht priorisierte Anfragen sehr gut verarbeiten. Domain Sharding ist sogar leistungsmindernd. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [Connection Coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, kann sie auch ohne Sortierung ohne ausreichende Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Ursprünglich waren es 2 bis 3 Verbindungen, aber mittlerweile ist die Nutzung von 6 parallelen Verbindungen üblicher. Es besteht die Gefahr, die {{Glossary("Denial_of_Service", "DoS")}}-Schutzmaßnahmen auf der Serverseite auszulösen, wenn diese Anzahl überschritten wird.

Wenn der Server eine schnellere Webseiten- oder Anwendungsantwort wünscht, ist es möglich, dass der Server das Öffnen weiterer Verbindungen erzwingt. Anstatt alle Ressourcen auf derselben Domain zu haben, z. B. `www.example.com`, könnte er sie auf mehrere Domains aufteilen, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains wird auf denselben Server aufgelöst, und der Webbrowser öffnet 6 Verbindungen zu jeder (in unserem Beispiel, wodurch die Verbindungen auf 18 erhöht werden). Diese Technik wird _Domain Sharding_ genannt.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain an, wobei maximal zwei Anfragen gleichzeitig stattfinden können. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar, und der Client kann vier Anfragen parallel ausführen und die Bilder schneller herunterladen.](httpsharding.png)

## Fazit

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie im Leerlauf ist – zur besten Leistung. Das Scheitern des Pipelining hat zur Entwicklung überlegener Verbindungsmanagementmodelle geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Die Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
