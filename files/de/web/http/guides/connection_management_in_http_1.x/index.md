---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: bc45e7d6005f231e1f18c8cec29ca0b7c1e694bb
---

Das Verbindungsmanagement ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen wirkt sich maßgeblich auf die Leistung von Websites und Webanwendungen aus. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP basiert größtenteils auf TCP als Transportprotokoll und stellt eine Verbindung zwischen dem Client und dem Server her. In den Anfängen von HTTP wurde ein einziges Modell verwendet, um solche Verbindungen zu handhaben. Diese Verbindungen waren kurzlebig: Es wurde jedes Mal eine neue erstellt, wenn eine Anfrage gesendet werden musste, und sie wurde geschlossen, sobald die Antwort eingegangen war.

Dieses Modell weist eine angeborene Leistungsgrenze auf: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Es müssen mehrere Nachrichten zwischen dem Client und dem Server ausgetauscht werden. Die Netzwerklatenz und Bandbreite wirken sich auf die Leistung aus, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigten Informationen bereitzustellen, was das frühere Modell ineffizient macht.

In HTTP/1.1 wurden zwei neuere Modelle eingeführt. Das Modell der Persistenzverbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet und verkürzt so die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht noch einen Schritt weiter, indem es mehrere aufeinanderfolgende Anfragen sendet, ohne auf eine Antwort zu warten, und so die Latenz im Netzwerk erheblich reduziert.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP für die Verbindung zwischen zwei aufeinanderfolgenden Knoten gilt, die [hop-by-hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) und nicht [end-to-end](/de/docs/Web/HTTP/Reference/Headers#end-to-end_headers) erfolgt. Das verwendete Modell in Verbindungen zwischen einem Client und seinem ersten Proxy kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder einem Zwischenproxy) verwendet wird. Die HTTP-Header, die das Verbindungsmodell definieren, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll aufgerüstet wird, wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird in einer eigenen Verbindung bearbeitet; dies bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake stattfindet, und diese sind sequenziell.

Der TCP-Handshake selbst ist zeitaufwendig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter mit längeren (oder warmen) Verbindungen. Kurzlebige Verbindungen nutzen dieses Effizienzmerkmal von TCP nicht, und die Leistung wird durch die kontinuierliche Übertragung über eine neue, kalte Verbindung von ihrem Optimum abweichen.

Dieses Modell ist das Standardmodell, das in HTTP/1.0 verwendet wird (wenn kein {{HTTPHeader("Connection")}} Header vorhanden ist oder sein Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}} Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Es gibt keinen überzeugenden Grund, dieses Modell zu verwenden, es sei denn, Sie haben es mit einem sehr alten System zu tun, das keine persistente Verbindung unterstützt.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei große Nachteile: Die Zeit, die für die Einrichtung einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich nur, wenn diese Verbindung eine Weile in Gebrauch ist (warme Verbindung). Um diese Probleme zu lindern, wurde das Konzept der _persistenten Verbindung_ entwickelt, sogar vor HTTP/1.1. Alternativ kann es auch als _keep-alive connection_ bezeichnet werden.

Eine persistente Verbindung bleibt für eine gewisse Zeit offen und kann für mehrere Anfragen wiederverwendet werden, wodurch der Bedarf an einem neuen TCP-Handshake entfällt und die leistungssteigernden Fähigkeiten von TCP genutzt werden. Diese Verbindung bleibt jedoch nicht dauerhaft offen: Leerlaufende Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}} Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung offen gehalten werden sollte).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und unter hoher Last können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung von nicht-persistenten Verbindungen, die sofort geschlossen werden, sobald sie inaktiv sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Wenn der {{HTTPHeader("Connection")}} Header auf etwas anderes als `close` gesetzt ist, normalerweise `retry-after`, werden sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header ist nicht mehr erforderlich (wird aber häufig als vorbeugende Maßnahme gegen Fälle hinzugefügt, die ein Fallback auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxies](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch verbreitet und führen zu seltsamen und unregelmäßigen Verhaltensweisen, die Webentwickler nicht vorhersehen und leicht diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, der effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), der verwendet wird, sowie die effektive Bandbreite haben einen direkten Einfluss auf die Verbesserung, die durch die Pipeline erzielt wird. Ohne diese Kenntnis können wichtige Nachrichten hinter unwichtigen verzögert werden. Der Begriff „wichtig“ entwickelt sich sogar während des Layouts einer Seite weiter! HTTP-Pipelining bringt daher in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining unterliegt dem {{Glossary("head_of_line_blocking", "head-of-line blocking")}}.
>
> Aus diesen Gründen wurde das Pipelining durch einen besseren Algorithmus ersetzt, _Multiplexing_, das in HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequentiell ausgeführt. Die nächste Anfrage wird erst gestellt, wenn die Antwort auf die aktuelle eingegangen ist. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server „gesehen“ wird.

Pipelining ist der Prozess, um aufeinanderfolgende Anfragen über dieselbe persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Bedarf an Größe der HTTP-Anfragen weiter wächst.

Nicht alle Arten von HTTP-Anfragen können gepipelint werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Pipeline-Inhalt wiederholt werden.

Heutzutage sollte jeder HTTP/1.1-konforme Proxy und Server das Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Es sei denn, Sie haben einen sehr spezifischen unmittelbaren Bedarf, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele, nicht priorisierte Anfragen sehr gut verwalten. Domain Sharding ist sogar leistungsmindernd. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [connection coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne jegliche Reihenfolge, kann sie ohne ausreichend verfügbare Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Früher waren 2 bis 3 Verbindungen der Standard, aber heute nutzen sie häufiger 6 parallele Verbindungen. Es besteht das Risiko, auf der Serverseite {{Glossary("Denial_of_Service", "DoS")}}-Schutz auszulösen, wenn mehr als diese Anzahl versucht wird.

Wenn der Server eine schnellere Website- oder Anwendungsantwort wünscht, kann der Server das Öffnen weiterer Verbindungen erzwingen. Beispielsweise könnten statt aller Ressourcen auf derselben Domain, sagen wir `www.example.com`, sie auf mehrere Domains verteilt werden, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains löst dasselbe Problem – der Webbrowser öffnet 6 Verbindungen zu jeder (in unserem Beispiel werden die Verbindungen auf 18 erhöht). Diese Technik wird _Domain Sharding_ genannt.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei parallelen Anfragen an. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar und der Client kann vier Anfragen parallel ausführen und die Bilder in kürzerer Zeit herunterladen.](httpsharding.png)

## Fazit

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Steigerung der Leistung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie inaktiv wird – zur besten Leistung. Das Scheitern von Pipelining hat jedoch dazu geführt, dass überlegene Modelle für das Verbindungsmanagement entwickelt wurden, die in HTTP/2 aufgenommen wurden.

## Siehe auch

- [Die Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
