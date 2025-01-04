---
title: Verbindungsverwaltung in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: a0a4a3a87561e731449a6e85efcb66c99a746e9b
---

{{HTTPSidebar}}

Die Verbindungsverwaltung ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat einen großen Einfluss auf die Leistung von Webseiten und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich hauptsächlich auf TCP als Transportprotokoll, das eine Verbindung zwischen dem Client und dem Server bereitstellt. In der Anfangszeit verwendete HTTP ein einziges Modell zur Verwaltung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Eine neue wurde jedes Mal erstellt, wenn eine Anfrage gesendet werden musste, und nach Erhalt der Antwort wieder geschlossen.

Dieses einfache Modell hatte eine inhärente Performanceeinschränkung: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen dem Client und dem Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell ineffizient erwies.

In HTTP/1.1 wurden zwei neuere Modelle eingeführt. Das Modell der persistente Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet und reduziert die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht einen Schritt weiter, indem es mehrere aufeinanderfolgende Anfragen sendet, ohne auf eine Antwort zu warten, wodurch viel von der Netzwerklatenz reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für die Verbindungsverwaltung hinzu.

Es ist wichtig zu beachten, dass die Verbindungsverwaltung in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten angewendet wird, die [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) und nicht [End-to-End](/de/docs/Web/HTTP/Headers#end-to-end_headers) ist. Das Modell, das bei Verbindungen zwischen einem Client und seinem ersten Proxy verwendet wird, kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder einem beliebigen Zwischenproxy) verwendet wird. Die HTTP-Header, die zur Definition des Verbindungsmodells beteiligt sind, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept von HTTP-Verbindungs-Upgrade-Prozessen, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext aufgerüstet wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird in einer eigenen Verbindung abgeschlossen; das bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake stattfindet und diese serialisiert werden.

Der TCP-Handshake selbst ist zeitaufwändig, jedoch passt sich eine TCP-Verbindung ihrer Last an und wird mit andauernden (oder warmen) Verbindungen effizienter. Kurzlebige Verbindungen nutzen diese Effizienzmerkmale von TCP nicht und die Leistung sinkt von optimal auf ein Minimum, indem sie weiterhin über eine neue, kalte Verbindung übertragen werden.

Dieses Modell ist das Standardmodell, das in HTTP/1.0 verwendet wird (wenn kein {{HTTPHeader("Connection")}}-Header vorhanden ist oder dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Es sei denn, Sie haben es mit einem sehr alten System zu tun, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei wesentliche Nachteile: Die Zeit, die zum Aufbau einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich erst, wenn diese Verbindung über einen längeren Zeitraum genutzt wird (warme Verbindung). Um diese Probleme zu lindern, wurde das Konzept einer _persistenten Verbindung_ entwickelt, noch vor HTTP/1.1. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für eine bestimmte Zeit geöffnet und kann für mehrere Anfragen wiederverwendet werden, wodurch ein neuer TCP-Handshake überflüssig wird und die Performancesteigerungsfähigkeiten von TCP genutzt werden. Diese Verbindung bleibt nicht für immer geöffnet: Leerlaufende Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung offen gehalten werden soll).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und unter starker Last können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen können nicht-persistente Verbindungen, die sofort geschlossen werden, wenn sie im Leerlauf sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Das Setzen von {{HTTPHeader("Connection")}} auf etwas anderes als `close`, üblicherweise `retry-after`, macht sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (er wird jedoch häufig als Vorsichtsmaßnahme gegen Fälle hinzugefügt, die ein Fallback auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxies](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unvorhersehbaren Verhaltensweisen, die Webentwickler nicht leicht vorhersehen und diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben einen direkten Einfluss auf die durch das Pipelining bereitgestellte Verbesserung. Ohne diese Informationen können wichtige Nachrichten hinter unwichtigen verzögert werden. Die Vorstellung von wichtig entwickelt sich sogar während des Seitenlayouts weiter! HTTP-Pipelining bietet daher in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining ist anfällig für {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus ersetzt, _Multiplexing_, der von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequentiell ausgegeben. Die nächste Anfrage wird erst gesendet, sobald die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen betroffen sind, kann dies zu einer erheblichen Verzögerung führen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess, mehrere aufeinanderfolgende Anfragen über dieselbe persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dadurch wird die Latenz der Verbindung vermieden. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Bedarf an Größe der HTTP-Anfragen weiterhin wächst.

Nicht alle Arten von HTTP-Anfragen können gepipelined werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Pipeline-Inhalt wiederholt werden.

Heute sollte jeder HTTP/1.1-kompatible Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Sofern Sie nicht einen sehr spezifischen unmittelbaren Bedarf haben, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele unbeeinträchtigte Anfragen sehr gut handhaben. Domain Sharding ist sogar nachteilig für die Performance. Die meisten HTTP/2-Implementierungen verwenden eine Technik, die als [Verbindungskondensierung](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/) bezeichnet wird, um eventuell vorhandenes Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, auch ohne irgendeine Reihenfolge, kann sie nicht ohne ausreichend verfügbare Bandbreite optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Früher lag der Standard bei 2 bis 3 Verbindungen, aber das hat sich inzwischen zu einer häufigeren Verwendung von 6 parallelen Verbindungen erhöht. Es besteht das Risiko, dass auf Serverseite {{Glossary("Denial_of_Service", "DoS")}}-Schutz ausgelöst wird, wenn versucht wird, mehr als diese Anzahl zu nutzen.

Wenn der Server eine schnellere Website- oder Anwendungsantwort wünscht, kann er die Eröffnung von mehr Verbindungen erzwingen. Zum Beispiel, anstatt alle Ressourcen auf derselben Domain zu haben, sagen wir `www.example.com`, könnte er sie über mehrere Domains verteilen, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains verweist auf denselben Server, und der Webbrowser wird 6 Verbindungen zu jeder öffnen (in unserem Beispiel werden die Verbindungen auf 18 erhöht). Diese Technik wird _Domain Sharding_ genannt.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei parallel verlaufenden Anfragen an. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar und der Client kann vier Anfragen parallel ausführen, wodurch die Bilder in kürzerer Zeit heruntergeladen werden.](httpsharding.png)

## Fazit

Eine verbesserte Verbindungsverwaltung ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie in den Leerlauf übergeht – zu der besten Leistung. Das Scheitern von Pipelining hat jedoch zur Entwicklung überlegener Modelle der Verbindungsverwaltung geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Evolution von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
