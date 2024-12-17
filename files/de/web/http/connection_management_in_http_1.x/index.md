---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: c13b7a059a543d02e4dbafce42813dad1244dcaa
---

{{HTTPSidebar}}

Das Verbindungsmanagement ist ein Schlüsselaspekt in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen beeinflusst maßgeblich die Leistungsfähigkeit von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich überwiegend auf TCP als Transportprotokoll, das eine Verbindung zwischen Client und Server bereitstellt. In den Anfängen von HTTP wurde ein einziges Modell zur Handhabung solcher Verbindungen genutzt. Diese Verbindungen waren kurzlebig: Jedes Mal, wenn eine Anfrage gesendet werden musste, wurde eine neue Verbindung erstellt und geschlossen, sobald die Antwort eingegangen war.

Dieses einfache Modell hatte eine inhärente Leistungsgrenze: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen Client und Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten benötigen viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell als ineffizient erscheinen lässt.

Zwei neuere Modelle wurden in HTTP/1.1 entwickelt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet, wodurch die Zeit zum Öffnen neuer Verbindungen verkürzt wird. Das HTTP-Pipelining-Modell geht noch einen Schritt weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne auf eine Antwort zu warten, was einen Großteil der Netzwerklatenz verringert.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP für die Verbindung zwischen zwei aufeinanderfolgenden Knoten gilt, was [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) ist und nicht [End-to-End](/de/docs/Web/HTTP/Headers#end-to-end_headers). Das in Verbindungen zwischen einem Client und seinem ersten Proxy verwendete Modell kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder anderen Zwischenproxys) verwendet wird. Die an der Definition des Verbindungsmodells beteiligten HTTP-Header, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 in Klartext umgestellt wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird in einer eigenen Verbindung abgewickelt; dies bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake erfolgt und diese serialisiert werden.

Der TCP-Handshake selbst ist zeitaufwändig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter bei einer nachhaltigeren (oder warmen) Verbindung. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht, und die Leistung verschlechtert sich vom Optimum, indem sie weiterhin über eine neue, kalte Verbindung übertragen werden.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn kein {{HTTPHeader("Connection")}} Header vorhanden ist oder wenn dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}} Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Es gibt keinen zwingenden Grund, dieses Modell zu verwenden, es sei denn, Sie haben es mit einem sehr alten System zu tun, das keine persistente Verbindung unterstützt.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei wesentliche Nachteile: Die Zeit, die für die Herstellung einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung wird nicht besser, es sei denn, diese Verbindung ist bereits seit einiger Zeit in Gebrauch (warme Verbindung). Um diese Probleme zu lindern, wurde bereits vor HTTP/1.1 das Konzept einer _persistenten Verbindung_ entwickelt. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung bleibt für eine gewisse Zeit geöffnet und kann für mehrere Anfragen wiederverwendet werden, was die Notwendigkeit eines neuen TCP-Handshakes spart und die leistungssteigernden Fähigkeiten von TCP nutzt. Diese Verbindung bleibt jedoch nicht dauerhaft geöffnet: Im Leerlauf werden Verbindungen nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}} Header verwenden, um eine Mindestzeit anzugeben, für die die Verbindung offen bleiben sollte).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und bei hoher Auslastung können {{Glossary("Denial_of_Service", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen können nicht-persistente Verbindungen, die sofort geschlossen werden, sobald sie im Leerlauf sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Das Setzen von {{HTTPHeader("Connection")}} auf etwas anderes als `close`, in der Regel `retry-after`, macht sie zu persistenten Verbindungen.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (er wird aber oft als Vorsichtsmaßnahme gegen Fälle hinzugefügt, die ein Zurückfallen auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxies](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unvorhersehbaren Verhaltensweisen, die Webentwickler nicht einfach vorhersehen und diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der zu übertragenden Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben direkten Einfluss auf die Verbesserung durch das Pipelining. Ohne Kenntnis dieser Faktoren können wichtige Nachrichten hinter unwichtigen verzögert werden. Der Begriff der Wichtigkeit entwickelt sich sogar während des Seitenlayouts! Daher bringt HTTP-Pipelining in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining ist dem [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking) Problem ausgesetzt.
>
> Aus diesen Gründen wurde das Pipelining durch einen besseren Algorithmus, _Multiplexing_, ersetzt, der in HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen nacheinander ausgeführt. Die nächste Anfrage wird erst dann gesendet, wenn die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerklatenzen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess, um aufeinanderfolgende Anfragen über die gleiche persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dasselbe TCP-Paket gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl die Nachfrage nach der Größe von HTTP-Anfragen weiterhin wächst.

Nicht alle Arten von HTTP-Anfragen können gepipelined werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Inhalt der Pipeline wiederholt werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: ein bedeutender Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Es sei denn, Sie haben einen sehr spezifischen unmittelbaren Bedarf, verwenden Sie nicht diese veraltete Technik; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele, nicht priorisierte Anfragen sehr gut bearbeiten. Domain Sharding ist sogar nachteilig für die Leistung. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [connection coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuell vorhandenes Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, auch ohne jegliche Reihenfolge, kann sie ohne ausreichend verfügbare Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain, um parallele Anfragen zu senden. Standardmäßig waren es einmal 2 bis 3 Verbindungen, aber das hat sich mittlerweile auf einen gebräuchlicheren Einsatz von 6 parallelen Verbindungen erhöht. Es besteht das Risiko, dass auf der Serverseite Schutzmechanismen vor {{Glossary("Denial_of_Service", "DoS")}} ausgelöst werden, wenn mehr Verbindungen als diese Anzahl versucht werden.

Wenn der Server eine schnellere Website oder Anwendungsantwort wünscht, kann der Server das Öffnen weiterer Verbindungen erzwingen. Zum Beispiel, anstatt alle Ressourcen auf derselben Domain, z.B. `www.example.com`, zu haben, könnte es auf mehrere Domains aufgeteilt werden, z.B. `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains löst sich auf denselben Server auf, und der Webbrowser wird 6 Verbindungen zu jeder öffnen (in unserem Beispiel die Verbindungen auf 18 erhöhen). Diese Technik wird als _Domain Sharding_ bezeichnet.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain an, wobei maximal zwei Anfragen gleichzeitig stattfinden. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar, und der Client kann vier Anfragen parallel ausführen und die Bilder in kürzerer Zeit herunterladen.](httpsharding.png)

## Fazit

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Steigerung der Leistung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie inaktiv wird – zur besten Leistung. Der Misserfolg des Pipelinings hat zur Entwicklung besserer Verbindungsmanagement-Modelle geführt, die in HTTP/2 integriert wurden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
  - {{Glossary("Round_Trip_Time", "Round Trip Time (RTT)")}}
  - {{Glossary("TCP_slow_start", "TCP Slow Start")}}
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("TCP", "Transmission Control Protocol (TCP)")}}
