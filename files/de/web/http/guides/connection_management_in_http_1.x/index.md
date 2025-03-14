---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Verbindungsmanagement ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat großen Einfluss auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich hauptsächlich auf TCP als Transportprotokoll, um eine Verbindung zwischen dem Client und dem Server bereitzustellen. In seiner Anfangszeit nutzte HTTP ein einziges Modell zur Handhabung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Es wurde jedes Mal eine neue erstellt, wenn eine Anfrage gesendet werden musste, und geschlossen, sobald die Antwort empfangen wurde.

Dieses Modell hatte eine angeborene Leistungsbegrenzung: Das Öffnen jeder TCP-Verbindung ist eine ressourcenintensive Operation. Mehrere Nachrichten müssen zwischen dem Client und dem Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, wodurch sich dieses frühere Modell als ineffizient erwies.

Zwei neuere Modelle wurden in HTTP/1.1 entwickelt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet und reduziert die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das Modell des HTTP-Pipelinings geht noch einen Schritt weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne auf eine Antwort zu warten, wodurch ein großer Teil der Netzwerklatenz reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten angewendet wird, was [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) ist und nicht [End-to-End](/de/docs/Web/HTTP/Reference/Headers#end-to-end_headers). Das Modell, das in Verbindungen zwischen einem Client und seinem ersten Proxy verwendet wird, kann sich von dem Modell zwischen einem Proxy und dem Zielserver (oder anderen Zwischenproxys) unterscheiden. Die HTTP-Header, die bei der Definition des Verbindungsmodells eine Rolle spielen, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) Header mit Werten, die von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept von HTTP-Verbindungs-Upgrades, bei dem eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 in Klartext aktualisiert wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) wird anderswo ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche HTTP-Modell und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über ihre eigene Verbindung abgeschlossen; das bedeutet, dass ein TCP-Handshake vor jeder HTTP-Anfrage stattfindet, und diese sind serialisiert.

Der TCP-Handshake selbst ist zeitaufwendig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter mit nachhaltigeren (oder warmen) Verbindungen. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht und die Leistung verschlechtert sich, wenn weiterhin über eine neue, kalte Verbindung übertragen wird.

Dieses Modell ist das Standardmodell, das in HTTP/1.0 verwendet wird (wenn kein {{HTTPHeader("Connection")}}-Header vorhanden ist, oder wenn dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Sofern Sie es nicht mit einem sehr alten System zu tun haben, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei große Nachteile: Die Zeit, die für die Einrichtung einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich erst, wenn diese Verbindung für einige Zeit genutzt wurde (warme Verbindung). Um diese Probleme zu entschärfen, wurde das Konzept der _persistenten Verbindung_ entworfen, noch bevor HTTP/1.1 eingeführt wurde. Alternativ kann sie als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für eine bestimmte Zeit geöffnet und kann für mehrere Anfragen wiederverwendet werden, wodurch der Bedarf an einem neuen TCP-Handshake entfällt und die leistungssteigernden Möglichkeiten von TCP genutzt werden. Diese Verbindung bleibt nicht für immer geöffnet: Leerlaufende Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung geöffnet bleiben soll).

Persistente Verbindungen haben auch Nachteile: Selbst wenn sie im Leerlauf sind, verbrauchen sie Serverressourcen, und bei hoher Auslastung können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung von nicht-persistenten Verbindungen, die unmittelbar im Leerlauf geschlossen werden, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Wenn {{HTTPHeader("Connection")}} auf einen anderen Wert als `close`, normalerweise `retry-after`, gesetzt wird, werden sie persistent.

In HTTP/1.1 ist die Persistenz der Standard, und der Header ist nicht mehr erforderlich (wird jedoch oft als Vorsichtsmaßnahme gegen Fälle, die ein Fallback zu HTTP/1.0 erfordern, hinzugefügt).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern nicht standardmäßig aktiviert:
>
> - Fehlerhafte [Proxyserver](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unvorhersehbaren Verhaltensweisen, die Webentwickler nicht leicht vorhersehen und diagnostizieren können.
> - Pipelining ist komplex, um korrekt implementiert zu werden: Die Größe der zu übertragenen Ressource, die tatsächlich verwendete [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time) sowie die effektive Bandbreite haben einen direkten Einfluss auf die durch die Pipeline erzielte Verbesserung. Ohne diese Kenntnisse können wichtige Nachrichten hinter unwichtigen verzögert werden. Die Definition von "wichtig" kann sich sogar während des Seitenlayouts ändern! Daher bringt HTTP-Pipelining in den meisten Fällen nur marginale Verbesserungen.
> - Pipelining ist anfällig für das {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, das _Multiplexing_, ersetzt, der in HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen nacheinander ausgeführt. Die nächste Anfrage wird erst ausgeführt, wenn die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen beeinflusst werden, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server „gesehen“ wird.

Pipelining ist der Prozess, aufeinanderfolgende Anfragen über dieselbe persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximale Segmentgröße) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Bedarf an Größe für HTTP-Anfragen weiter wächst.

Nicht alle Arten von HTTP-Anfragen können gepipelinet werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt, {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Inhalt der Pipeline wiederholt werden.

Heute sollte jeder HTTP/1.1-kompatible Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: Ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert hat.

## Domain-Sharding

> [!NOTE]
> Sofern Sie nicht einen sehr spezifischen aktuellen Bedarf haben, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain-Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele unveranlasste Anfragen sehr gut bewältigen. Domain-Sharding ist sogar leistungsmindernd. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [Verbindungskonsolidierung](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain-Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne Ordnung, kann sie nicht optimal sein, wenn nicht ausreichend Bandbreite zur Verfügung steht. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Der Standard lag einst bei 2 bis 3 Verbindungen, hat sich jedoch jetzt auf die verstärkte Nutzung von 6 parallelen Verbindungen erhöht. Es besteht das Risiko, den {{Glossary("Denial_of_Service", "DoS-Schutz")}} auf der Serverseite auszulösen, wenn versucht wird, mehr als diese Anzahl zu erreichen.

Wenn der Server eine schnellere Website oder Anwendungsantwort wünscht, kann er das Öffnen weiterer Verbindungen erzwingen. Zum Beispiel, anstatt alle Ressourcen auf derselben Domain zu haben, sagen wir `www.example.com`, könnte er sie auf mehrere Domains aufteilen, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains löst denselben Server auf und der Webbrowser wird 6 Verbindungen zu jeder öffnen (in unserem Beispiel erhöht sich die Anzahl der Verbindungen auf 18). Diese Technik wird als _Domain-Sharding_ bezeichnet.

![Ohne Domain-Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei parallelen Anfragen an. Mit Domain-Sharding sind die Bilder von zwei Domains verfügbar und der Client kann vier Anfragen parallel ausführen und die Bilder in kürzerer Zeit herunterladen.](httpsharding.png)

## Schlussfolgerung

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Steigerung der Leistung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie im Leerlauf wird – zur besten Leistung. Der Misserfolg des Pipelinings hat jedoch zur Entwicklung überlegener Verbindungsmanagementmodelle geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Weiterentwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
