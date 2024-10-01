---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das Verbindungsmanagement ist ein entscheidendes Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat einen großen Einfluss auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich hauptsächlich auf TCP als Transportprotokoll, um eine Verbindung zwischen Client und Server bereitzustellen. In seinen Anfängen nutzte HTTP ein einzelnes Modell zur Handhabung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Für jede Anfrage, die gesendet werden musste, wurde eine neue Verbindung erstellt, die nach dem Empfang der Antwort geschlossen wurde.

Dieses einfache Modell begrenzte die Leistung: Das Öffnen jeder TCP-Verbindung ist eine ressourcenintensive Operation. Mehrere Nachrichten müssen zwischen dem Client und dem Server ausgetauscht werden. Netzwerklatenz und Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell ineffektiv macht.

Zwei neuere Modelle wurden in HTTP/1.1 eingeführt. Das Modell der persistenten Verbindungen hält Verbindungen zwischen aufeinanderfolgenden Anfragen offen, wodurch die Zeit für das Öffnen neuer Verbindungen reduziert wird. Das HTTP-Pipelining-Modell geht noch einen Schritt weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne auf eine Antwort zu warten, und reduziert so viel von der Latenz im Netzwerk.

![Vergleiche die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP auf die Verbindung zwischen zwei aufeinanderfolgenden Knoten angewendet wird, was [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) ist und nicht [end-to-end](/de/docs/Web/HTTP/Headers#end-to-end_headers). Das Modell, das bei Verbindungen zwischen einem Client und seinem ersten Proxy verwendet wird, kann sich von dem Modell unterscheiden, das zwischen einem Proxy und dem Zielserver (oder anderen Zwischenproxies) verwendet wird. Die HTTP-Header, die das Verbindungsmodell definieren, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) Header, deren Werte von Zwischennoten geändert werden können.

Ein verwandtes Thema ist das Konzept der Upgrades von HTTP-Verbindungen, bei dem eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext aktualisiert wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über eine eigene Verbindung abgeschlossen; dies bedeutet, dass vor jeder HTTP-Anfrage ein TCP-Handshake stattfindet und diese serialisiert werden.

Der TCP-Handshake selbst ist zeitaufwändig, aber eine TCP-Verbindung passt sich ihrer Auslastung an und wird bei stärkerer (oder warmer) Verbindung effizienter. Kurzlebige Verbindungen nutzen dieses Effizienzmerkmal von TCP nicht aus, und die Leistung verschlechtert sich von optimal, da über eine neue, kalte Verbindung übertragen wird.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn kein {{HTTPHeader("Connection")}} Header vorhanden ist oder sein Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}} Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Sofern Sie es nicht mit einem sehr alten System zu tun haben, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei große Probleme: Die Zeit, die benötigt wird, um eine neue Verbindung herzustellen, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung wird nur besser, wenn diese Verbindung eine Zeit lang genutzt wurde (warme Verbindung). Um diese Probleme zu verringern, wurde das Konzept einer _persistenten Verbindung_ entwickelt, sogar vor HTTP/1.1. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung ist eine, die für einen bestimmten Zeitraum offen bleibt und für mehrere Anfragen wiederverwendet werden kann, wodurch die Notwendigkeit eines neuen TCP-Handshakes entfällt und die Leistung verbessernden Fähigkeiten von TCP genutzt werden. Diese Verbindung bleibt nicht für immer offen: Leerlaufende Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}} Header verwenden, um eine Mindestzeit anzugeben, wie lange die Verbindung offen gehalten werden soll).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen und unter hoher Belastung können {{Glossary("DoS_attack", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen kann die Verwendung von nicht-persistenten Verbindungen, die geschlossen werden, sobald sie im Leerlauf sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Indem man {{HTTPHeader("Connection")}} auf etwas anderes als `close` setzt, normalerweise `retry-after`, werden sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (er wird jedoch oft als Vorsichtsmaßnahme gegen Fälle hinzugefügt, die ein Fallback auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxies](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unregelmäßigen Verhaltensweisen, die Webentwickler nicht vorhersehen und leicht diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die genutzt wird, sowie die effektive Bandbreite haben einen direkten Einfluss auf die Verbesserung, die das Pipelining bietet. Ohne diese Kenntnisse könnten wichtige Nachrichten hinter unwichtigen verzögert werden. Der Begriff "wichtig" entwickelt sich sogar während der Seitenlayout! HTTP-Pipelining bietet daher in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining ist anfällig für das [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking)-Problem.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, das _Multiplexing_, ersetzt, das in HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequentiell ausgeführt. Die nächste Anfrage wird erst gesendet, sobald die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie durch Netzwerklatenzzeit und Bandbreitenbeschränkungen beeinflusst werden, kann es zu erheblichen Verzögerungen kommen, bevor die nächste Anfrage vom Server _gesehen_ wird.

Pipelining ist der Prozess, um aufeinanderfolgende Anfragen über die gleiche persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dadurch wird die Latenz der Verbindung vermieden. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl die Nachfrage nach Speichergröße für HTTP-Anfragen weiter wächst.

Nicht alle Arten von HTTP-Anfragen können gepipeline't werden: Nur {{Glossary("idempotent", "idempotente")}} Methoden, das sind {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Pipeline-Inhalt wiederholt werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele praktisch Einschränkungen haben: Ein wesentlicher Grund, warum kein moderner Browser diese Funktion standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Sofern Sie nicht ein sehr spezifisches unmittelbares Bedürfnis haben, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele, nicht priorisierte Anfragen sehr gut handhaben. Domain Sharding ist sogar nachteilig für die Leistung. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [Verbindungskoaleszenz](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain-Sharding zu revertieren.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne jegliche Anordnung, kann sie bei nicht ausreichend verfügbarer Bandbreite nicht optimal sein. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Früher waren das 2 bis 3 Verbindungen, aber dies hat sich nun auf eine häufigere Nutzung von 6 parallelen Verbindungen erhöht. Es besteht das Risiko, dass auf der Serverseite {{Glossary("DOS_attack", "DoS")}}-Schutzmaßnahmen ausgelöst werden, wenn mehr als diese Anzahl versucht wird.

Wenn der Server eine schnellere Website oder Applikationsantwort wünscht, kann der Server die Öffnung weiterer Verbindungen erzwingen. Zum Beispiel könnte er anstelle aller Ressourcen auf derselben Domain, etwa `www.example.com`, diese auf mehrere Domains verteilen, `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains löst denselben Server auf, und der Webbrowser öffnet 6 Verbindungen zu jeder (in unserem Beispiel werden die Verbindungen auf 18 gesteigert). Diese Technik wird als _Domain Sharding_ bezeichnet.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei Anfragen, die parallel stattfinden. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar, und der Client kann vier Anfragen parallel ausführen, wodurch die Bilder in kürzerer Zeit heruntergeladen werden.](httpsharding.png)

## Schlussfolgerung

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Steigerung der Leistung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie in den Leerlauf tritt – zu der besten Leistung. Das Scheitern von Pipelining hat jedoch zur Entwicklung überlegener Verbindungsmanagement-Modelle geführt, die in HTTP/2 integriert wurden.
