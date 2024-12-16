---
title: Verbindungsverwaltung in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Die Verbindungsverwaltung ist ein wichtiges Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat einen großen Einfluss auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich überwiegend auf TCP als Transportprotokoll und stellt eine Verbindung zwischen dem Client und dem Server her. In den Anfängen von HTTP wurde ein einziges Modell verwendet, um solche Verbindungen zu handhaben. Diese Verbindungen waren kurzlebig: Eine neue Verbindung wurde jedes Mal erstellt, wenn eine Anfrage gesendet werden musste, und wurde geschlossen, sobald die Antwort eingegangen war.

Dieses einfache Modell wies eine grundlegende Leistungsbeschränkung auf: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen Client und Server ausgetauscht werden. Netzwerkverzögerung und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell ineffizient macht.

In HTTP/1.1 wurden zwei neuere Modelle eingeführt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen offen und reduziert die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht einen Schritt weiter, indem es mehrere aufeinanderfolgende Anfragen sendet, ohne auf eine Antwort zu warten, wodurch ein Großteil der Netzwerklatenz reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für die Verbindungsverwaltung hinzu.

Es ist wichtig zu beachten, dass die Verbindungsverwaltung in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten angewendet wird, was [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) und nicht [end-to-end](/de/docs/Web/HTTP/Headers#end-to-end_headers) ist. Das zwischen einem Client und seinem ersten Proxy verwendete Modell kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder einem beliebigen Zwischen-Proxy) verwendet wird. Die HTTP-Header, die bei der Definition des Verbindungsmodells beteiligt sind, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept von HTTP-Verbindungs-Upgrades, bei dem eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 in Klartext umgestellt wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über eine eigene Verbindung abgeschlossen; das bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake erfolgt und diese serialisiert werden.

Der TCP-Handshake selbst ist zeitaufwendig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter bei nachhaltigeren (oder warmen) Verbindungen. Kurzlebige Verbindungen nutzen dieses Effizienzmerkmal von TCP nicht, und die Leistung verschlechtert sich vom Optimum, indem sie weiterhin über eine neue, kalte Verbindung übertragen werden.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn es keinen {{HTTPHeader("Connection")}} Header gibt oder wenn sein Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}} Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Sofern Sie nicht mit einem sehr alten System zu tun haben, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei große Nachteile: Die Zeit, die benötigt wird, um eine neue Verbindung herzustellen, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich nur, wenn diese Verbindung eine Zeit lang genutzt wurde (warme Verbindung). Um diese Probleme zu mildern, wurde das Konzept einer _persistenten Verbindung_ entwickelt, sogar bereits vor HTTP/1.1. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für eine gewisse Zeit offen und kann für mehrere Anfragen wiederverwendet werden, wodurch ein neuer TCP-Handshake überflüssig wird und die leistungssteigernden Fähigkeiten von TCP genutzt werden. Diese Verbindung bleibt jedoch nicht ewig offen: Idle-Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}} Header verwenden, um eine Mindestzeit anzugeben, für die die Verbindung offen gehalten werden soll).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und unter hoher Last können {{Glossary("DoS_attack", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung von nicht-persistenten Verbindungen, die sofort nach dem Leerlauf geschlossen werden, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Das Setzen von {{HTTPHeader("Connection")}} auf einen anderen Wert als `close`, normalerweise `retry-after`, macht sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (aber er wird oft als Vorsichtsmaßnahme gegen Fälle hinzugefügt, die ein Fallback auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxys](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch verbreitet, was zu seltsamen und unberechenbaren Verhaltensweisen führt, die Webentwickler nicht vorhersehen und leicht diagnostizieren können.
> - Pipelining ist komplex, um es korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben einen direkten Einfluss auf die Verbesserung, die durch das Pipelining erzielt wird. Ohne diese zu kennen, können wichtige Nachrichten hinter unwichtigen verzögert werden. Der Gedanke von wichtig entwickelt sich sogar während des Seitenlayouts! Daher bringt HTTP-Pipelining in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining unterliegt dem [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking)-Problem.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, das _Multiplexing_, ersetzt, der von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen nacheinander ausgeführt. Die nächste Anfrage wird erst gestellt, wenn die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerkverzögerungen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess des Sendens aufeinanderfolgender Anfragen über dieselbe persistente Verbindung, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in eine einzige TCP-Nachricht verpackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl die Anforderungen an die Größe von HTTP-Anfragen weiter steigen.

Nicht alle Arten von HTTP-Anfragen können über Pipelining gesendet werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, nämlich {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Inhalt der Pipeline erneut gesendet werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: Ein wesentlicher Grund dafür, dass kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Es sei denn, Sie haben einen sehr spezifischen, unmittelbaren Bedarf, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann unpriorisierte parallele Anfragen sehr gut handhaben. Domain Sharding ist sogar nachteilig für die Leistung. Bei den meisten HTTP/2-Implementierungen wird eine Technik namens [Connection Coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/) verwendet, um eventuell auftretendes Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne eine Reihenfolge, kann sie ohne genügend verfügbare Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Standard war einst 2 bis 3 Verbindungen, aber dies hat sich nun auf einen häufigeren Gebrauch von 6 parallelen Verbindungen erhöht. Es besteht die Gefahr der Auslösung des {{Glossary("DOS_attack", "DoS")}}-Schutzes auf der Serverseite, wenn versucht wird, mehr als diese Anzahl zu verwenden.

Wenn der Server eine schnellere Reaktion der Website oder Anwendung wünscht, ist es für den Server möglich, das Öffnen weiterer Verbindungen zu erzwingen. Beispielsweise, anstatt alle Ressourcen auf derselben Domain zu haben, sagen wir `www.example.com`, könnte es über mehrere Domains verteilt werden, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains wird demselben Server zugewiesen, und der Webbrowser wird 6 Verbindungen zu jeder öffnen (in unserem Beispiel die Verbindungen auf 18 erhöhen). Diese Technik wird als _Domain Sharding_ bezeichnet.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain an, mit maximal zwei parallelen Anfragen. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar, und der Client kann vier Anfragen parallel ausführen, um die Bilder in kürzerer Zeit herunterzuladen.](httpsharding.png)

## Fazit

Eine verbesserte Verbindungsverwaltung ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie in den Leerlauf wechselt – zur besten Leistung. Der Misserfolg des Pipelining hat jedoch zur Entwicklung überlegener Verbindungsmanagement-Modelle geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP slow start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
