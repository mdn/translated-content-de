---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Guides/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Verbindungsmanagement ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat großen Einfluss auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _dauerhafte Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich hauptsächlich auf TCP als Transportprotokoll, das eine Verbindung zwischen dem Client und dem Server herstellt. In den Anfangszeiten von HTTP wurde ein einziges Modell zur Handhabung solcher Verbindungen verwendet. Diese Verbindungen waren kurzlebig: Es wurde jedes Mal eine neue erstellt, wenn eine Anfrage gesendet werden musste, und sie wurde geschlossen, sobald die Antwort eingegangen war.

Dieses einfache Modell hatte eine inhärente Leistungsbeschränkung: Das Öffnen jeder TCP-Verbindung ist eine ressourcenintensive Operation. Mehrere Nachrichten müssen zwischen Client und Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten benötigen viele Anfragen (ein Dutzend oder mehr), um die benötigte Menge an Informationen bereitzustellen, was dieses frühere Modell ineffizient macht.

Zwei neuere Modelle wurden in HTTP/1.1 entwickelt. Das Modell der dauerhaften Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen offen, wodurch die Zeit zum Öffnen neuer Verbindungen reduziert wird. Das HTTP-Pipelining-Modell geht noch einen Schritt weiter, indem es mehrere aufeinanderfolgende Anfragen sendet, ohne auf eine Antwort zu warten, was einen Großteil der Latenz im Netzwerk reduziert.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, dauerhafte Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu wissen, dass sich das Verbindungsmanagement in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten bezieht, das [von Hop zu Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) und nicht [Ende-zu-Ende](/de/docs/Web/HTTP/Reference/Headers#end-to-end_headers) ist. Das Modell, das bei Verbindungen zwischen einem Client und seinem ersten Proxy verwendet wird, kann sich von dem unterscheiden, das zwischen einem Proxy und dem Zielserver (oder anderen Zwischenproxies) verwendet wird. Die HTTP-Header, die zur Definition des Verbindungsmodells verwendet werden, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [von Hop zu Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers) und ihre Werte können durch Zwischenknoten verändert werden.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei dem eine HTTP/1.1-Verbindung auf ein anderes Protokoll, wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext, aufgerüstet wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über eine eigene Verbindung abgeschlossen; das bedeutet, dass ein TCP-Handschlag vor jeder HTTP-Anfrage stattfindet und diese serialisiert werden.

Der TCP-Handschlag selbst ist zeitaufwendig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter, je länger sie (oder wärmere Verbindungen) genutzt wird. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht und die Leistung verschlechtert sich vom Optimum, indem sie über eine neue, kalte Verbindung übertragen werden.

Dieses Modell ist das Standardmodell, das in HTTP/1.0 verwendet wird (wenn es keinen {{HTTPHeader("Connection")}}-Header gibt oder dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Es gibt keinen zwingenden Grund, dieses Modell zu verwenden, es sei denn, Sie arbeiten mit einem sehr alten System, das keine dauerhaften Verbindungen unterstützt.

## Dauerhafte Verbindungen

Kurzlebige Verbindungen haben zwei große Nachteile: Die Zeit, die zum Aufbau einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich nur, wenn diese Verbindung einige Zeit in Gebrauch war (warme Verbindung). Um diese Probleme zu lösen, wurde das Konzept der _dauerhaften Verbindung_ entworfen, bereits vor HTTP/1.1. Alternativ kann dies als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine dauerhafte Verbindung bleibt für einen bestimmten Zeitraum geöffnet und kann für mehrere Anfragen wiederverwendet werden, wodurch der Bedarf an einem neuen TCP-Handschlag entfällt und die Leistungssteigerungsfähigkeiten von TCP genutzt werden. Diese Verbindung bleibt nicht unbegrenzt offen: Leerlaufende Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung offen gehalten werden soll).

Dauerhafte Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und bei starker Auslastung können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung von nicht dauerhaften Verbindungen, die sofort geschlossen werden, sobald sie im Leerlauf sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht dauerhaft. Das Setzen von {{HTTPHeader("Connection")}} auf etwas anderes als `close`, üblicherweise `retry-after`, macht sie dauerhaft.

In HTTP/1.1 ist die Persistenz der Standard, und der Header ist nicht mehr erforderlich (wird jedoch oft als Schutzmaßnahme gegen Fälle hinzugefügt, die ein Zurückfallen auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxies](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unberechenbaren Verhaltensweisen, die Webentwickler nicht leicht vorhersehen und diagnostizieren können.
> - Pipelining ist komplex, korrekt umzusetzen: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben direkten Einfluss auf die durch die Pipeline gebotene Verbesserung. Ohne diese zu kennen, können wichtige Nachrichten hinter unwichtigen verzögert werden. Der Begriff "wichtig" entwickelt sich sogar während des Seitenlayouts weiter! HTTP-Pipelining bringt daher nur in den meisten Fällen eine marginale Verbesserung.
> - Pipelining ist dem {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}} unterworfen.
>
> Aus diesen Gründen wurde das Pipelining durch einen besseren Algorithmus, das _Multiplexing_, ersetzt, der von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequenziell ausgeführt. Die nächste Anfrage wird erst ausgeführt, wenn die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerkverzögerungen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server "gesehen" wird.

Pipelining ist der Prozess, um aufeinanderfolgende Anfragen über dieselbe dauerhafte Verbindung zu senden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximale Segmentgröße) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Größenbedarf von HTTP-Anfragen weiter wächst.

Nicht alle Arten von HTTP-Anfragen können gepipelint werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Pipeline-Inhalt wiederholt werden.

Heute sollte jeder HTTP/1.1-kompatible Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: Ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Sofern Sie keinen sehr spezifischen unmittelbaren Bedarf haben, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele unpriorisierte Anfragen sehr gut handhaben. Domain Sharding ist sogar leistungsschädlich. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [Connection Coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne jegliche Ordnung, kann sie ohne ausreichend vorhandene Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domäne und senden parallele Anfragen. Dies waren früher einmal 2 bis 3 Verbindungen, aber jetzt wird häufiger die Verwendung von 6 parallelen Verbindungen angewendet. Es besteht das Risiko einer {{Glossary("Denial_of_Service", "DoS")}}-Schutzauslösung auf der Serverseite, wenn man mehr als diese Anzahl versucht.

Wenn der Server eine schnellere Website oder Anwendungsantwort wünscht, kann der Server das Öffnen weiterer Verbindungen erzwingen. Beispielsweise könnte er, anstatt alle Ressourcen auf demselben Domainnamen `www.example.com` zu haben, diese auf mehrere Domains verteilen, z. B. `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains löst denselben Server auf, und der Webbrowser wird zu jedem 6 Verbindungen öffnen (in unserem Beispiel die Verbindungen auf 18 erhöhen). Diese Technik wird _Domain Sharding_ genannt.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei parallelen Anfragen an. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar und der Client kann vier Anfragen parallel ausführen, wodurch die Bilder in kürzerer Zeit heruntergeladen werden.](httpsharding.png)

## Schlussfolgerung

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie im Leerlauf ist – zur besten Leistung. Das Scheitern des Pipelining hat jedoch zur Entwicklung überlegener Verbindungsmanagementmodelle geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossareinträge:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
