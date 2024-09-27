---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das Verbindungsmanagement ist ein zentrales Thema in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat erhebliche Auswirkungen auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining_.

HTTP stützt sich hauptsächlich auf TCP als Transportprotokoll und stellt eine Verbindung zwischen Client und Server her. In der Anfangszeit von HTTP wurde ein einzelnes Modell verwendet, um solche Verbindungen zu handhaben. Diese Verbindungen waren kurzlebig: Eine neue Verbindung wurde jedes Mal erstellt, wenn eine Anfrage gesendet werden musste, und geschlossen, sobald die Antwort eingegangen war.

Dieses einfache Modell hatte eine inhärente Leistungsbegrenzung: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen dem Client und dem Server ausgetauscht werden. Netzwerk-Latenz und -Bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten benötigen viele Anfragen (ein Dutzend oder mehr), um die Menge an benötigten Informationen bereitzustellen, was dieses frühere Modell ineffizient macht.

Zwei neuere Modelle wurden in HTTP/1.1 entwickelt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen geöffnet, wodurch die Zeit für das Öffnen neuer Verbindungen verkürzt wird. Das HTTP-Pipelining-Modell geht einen Schritt weiter, indem es mehrere aufeinanderfolgende Anfragen sendet, ohne auf eine Antwort zu warten, wodurch ein Großteil der Netzwerklatenz reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP für die Verbindung zwischen zwei aufeinanderfolgenden Knoten gilt, was [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) ist und nicht [end-to-end](/de/docs/Web/HTTP/Headers#end-to-end_headers). Das Modell, das in den Verbindungen zwischen einem Client und seinem ersten Proxy verwendet wird, kann sich von dem Modell zwischen einem Proxy und dem Zielserver (oder einem beliebigen Zwischenproxy) unterscheiden. Die HTTP-Header, die an der Definition des Verbindungsmodells beteiligt sind, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers)-Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungs-Upgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll wie TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext aufgerüstet wird. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) ist an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über eine eigene Verbindung abgeschlossen; das bedeutet, dass ein TCP-Handshake vor jeder HTTP-Anfrage erfolgt, und diese werden seriell verarbeitet.

Der TCP-Handshake selbst ist zeitaufwändig, aber eine TCP-Verbindung passt sich ihrer Last an und wird effizienter bei längerer Nutzung (oder wärmeren) Verbindungen. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht, und die Leistung sinkt von optimal ab, wenn weiterhin über eine neue, kalte Verbindung übertragen wird.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn es keinen {{HTTPHeader("Connection")}}-Header gibt oder wenn dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit dem Wert `close` gesendet wird.

> [!NOTE]
> Es gibt keinen überzeugenden Grund, dieses Modell zu verwenden, es sei denn, Sie arbeiten mit einem sehr alten System, das keine persistente Verbindung unterstützt.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei wesentliche Nachteile: Die Zeit, die zum Einrichten einer neuen Verbindung benötigt wird, ist erheblich, und die Leistung der zugrunde liegenden TCP-Verbindung verbessert sich nur, wenn diese Verbindung längere Zeit in Gebrauch war (warme Verbindung). Um diese Probleme zu erleichtern, wurde das Konzept einer _persistenten Verbindung_ entwickelt, sogar schon vor HTTP/1.1. Alternativ kann dies auch als _Keep-Alive-Verbindung_ bezeichnet werden.

Eine persistente Verbindung ist eine Verbindung, die für einen bestimmten Zeitraum offen bleibt und für mehrere Anfragen wiederverwendet werden kann, wodurch der Bedarf an einem neuen TCP-Handshake entfällt und die Leistungsverbesserungen von TCP genutzt werden. Diese Verbindung bleibt nicht für immer geöffnet: Inaktive Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung geöffnet bleiben sollte).

Persistente Verbindungen haben auch Nachteile; selbst wenn sie inaktiv sind, verbrauchen sie Server-Ressourcen, und bei hoher Belastung können [DoS-Angriffe](/de/docs/Glossary/DoS_attack) durchgeführt werden. In solchen Fällen können nicht-persistente Verbindungen, die geschlossen werden, sobald sie inaktiv sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Das Setzen von {{HTTPHeader("Connection")}} auf etwas anderes als `close`, normalerweise `retry-after`, macht sie persistent.

In HTTP/1.1 ist Persistenz der Standard, und der Header wird nicht mehr benötigt (aber er wird oft als defensive Maßnahme gegen Fälle hinzugefügt, die einen Rückgriff auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern standardmäßig nicht aktiviert:
>
> - Fehlerhafte [Proxys](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch weit verbreitet und führen zu seltsamen und unberechenbaren Verhaltensweisen, die Webentwickler nicht leicht vorhersehen und diagnostizieren können.
> - Pipelining ist komplex, korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben direkten Einfluss auf die Verbesserung, die durch das Pipelining erzielt wird. Ohne diese Informationen können wichtige Nachrichten hinter unwichtigen zurückbleiben. Die Vorstellung von wichtig ändert sich sogar während der Seitenlayout-Erstellung! HTTP-Pipelining bringt daher in den meisten Fällen nur marginale Verbesserungen.
> - Pipelining unterliegt dem [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking)-Problem.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, das _Multiplexing_, ersetzt, das von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen nacheinander ausgeführt. Die nächste Anfrage wird erst gesendet, nachdem die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerk-Latenzen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor der Server die nächste Anfrage _erhält_.

Pipelining ist der Prozess, aufeinanderfolgende Anfragen über dieselbe persistente Verbindung zu senden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt werden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl die Anforderungen an die Größe von HTTP-Anfragen weiter wachsen.

Nicht alle Arten von HTTP-Anfragen können pipelined werden: Nur [idempotente](/de/docs/Glossary/idempotent) Methoden, das sind {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher erneut gesendet werden. Sollte ein Fehler auftreten, kann der Inhalt des Pipelines wiederholt werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen haben: Ein wesentlicher Grund, warum kein moderner Browser dieses Feature standardmäßig aktiviert.

## Domain Sharding

> [!NOTE]
> Verwenden Sie diese veraltete Technik nicht, es sei denn, Sie haben einen sehr spezifischen unmittelbaren Bedarf; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann unbepriorisierte parallele Anfragen sehr gut handhaben. Domain Sharding ist sogar leistungsmindernd. Die meisten HTTP/2-Implementierungen verwenden eine Technik, die als [Connection Coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/) bekannt ist, um eventuelles Domain Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, selbst ohne eine Reihenfolge, kann sie nicht optimal sein, ohne ausreichend große verfügbare Bandbreite. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domain und senden parallele Anfragen. Der Standard lag einst bei 2 bis 3 Verbindungen, dies hat sich jedoch auf eine häufigere Verwendung von 6 parallelen Verbindungen erhöht. Es besteht das Risiko, auf der Serverseite einen [DoS](/de/docs/Glossary/DOS_attack)-Schutz auszulösen, wenn mehr als diese Anzahl versucht wird.

Wenn der Server eine schnellere Website- oder Anwendungsantwort wünscht, ist es möglich, dass der Server die Öffnung von mehr Verbindungen erzwingt. Beispielsweise könnte er anstelle aller Ressourcen auf derselben Domain, sagen wir `www.example.com`, diese auf mehrere Domains aufteilen, z. B. `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domains zeigt auf denselben Server, und der Webbrowser öffnet jeweils 6 Verbindungen (in unserem Beispiel werden die Verbindungen auf 18 erweitert). Diese Technik wird als _Domain Sharding_ bezeichnet.

![Ohne Domain Sharding fordert ein Client sechs Bilder von einer Domain mit maximal zwei parallel laufenden Anfragen an. Mit Domain Sharding sind die Bilder von zwei Domains verfügbar und der Client kann vier Anfragen parallel ausführen und die Bilder in kürzerer Zeit herunterladen.](httpsharding.png)

## Fazit

Besseres Verbindungsmanagement ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie inaktiv wird – zur besten Leistung. Das Scheitern des Pipelining hat jedoch dazu geführt, dass überlegene Modelle für das Verbindungsmanagement entwickelt wurden, die in HTTP/2 integriert wurden.
