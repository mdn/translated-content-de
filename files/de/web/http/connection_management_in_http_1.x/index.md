---
title: Verbindungsmanagement in HTTP/1.x
slug: Web/HTTP/Connection_management_in_HTTP_1.x
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das Verbindungsmanagement ist ein zentraler Aspekt in HTTP: Das Öffnen und Aufrechterhalten von Verbindungen hat erheblichen Einfluss auf die Leistung von Websites und Webanwendungen. In HTTP/1.x gibt es mehrere Modelle: _kurzlebige Verbindungen_, _persistente Verbindungen_ und _HTTP-Pipelining._

HTTP basiert hauptsächlich auf TCP als Transportprotokoll, um eine Verbindung zwischen Client und Server bereitzustellen. In seinen Anfängen verwendete HTTP ein einziges Modell für die Handhabung solcher Verbindungen. Diese Verbindungen waren kurzlebig: Eine neue Verbindung wurde jedes Mal erstellt, wenn eine Anfrage gesendet werden musste, und nach Eingang der Antwort wieder geschlossen.

Dieses einfache Modell hatte eine angeborene Leistungsgrenze: Das Öffnen jeder TCP-Verbindung ist ein ressourcenintensiver Vorgang. Mehrere Nachrichten müssen zwischen Client und Server ausgetauscht werden. Netzwerkverzögerungen und -bandbreite beeinflussen die Leistung, wenn eine Anfrage gesendet werden muss. Moderne Webseiten erfordern viele Anfragen (ein Dutzend oder mehr), um die benötigte Informationsmenge bereitzustellen, was dieses frühere Modell ineffizient machte.

Zwei neuere Modelle wurden in HTTP/1.1 eingeführt. Das Modell der persistenten Verbindung hält Verbindungen zwischen aufeinanderfolgenden Anfragen offen und reduziert die Zeit, die zum Öffnen neuer Verbindungen benötigt wird. Das HTTP-Pipelining-Modell geht noch weiter, indem mehrere aufeinanderfolgende Anfragen gesendet werden, ohne auf eine Antwort zu warten, wodurch ein Großteil der Netzwerkverzögerung reduziert wird.

![Vergleicht die Leistung der drei HTTP/1.x-Verbindungsmodelle: kurzlebige Verbindungen, persistente Verbindungen und HTTP-Pipelining.](http1_x_connections.png)

> [!NOTE]
> HTTP/2 fügt zusätzliche Modelle für das Verbindungsmanagement hinzu.

Es ist wichtig zu beachten, dass das Verbindungsmanagement in HTTP auf der Verbindung zwischen zwei aufeinanderfolgenden Knoten basiert, die [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) und nicht [end-to-end](/de/docs/Web/HTTP/Headers#end-to-end_headers) ist. Das verwendete Modell in Verbindungen zwischen einem Client und seinem ersten Proxy kann sich von dem zwischen einem Proxy und dem Zielserver (oder anderen Zwischensystemen) unterscheiden. Die HTTP-Header, die das Verbindungsmodell definieren, wie {{HTTPHeader("Connection")}} und {{HTTPHeader("Keep-Alive")}}, sind [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) Header, deren Werte von Zwischenknoten geändert werden können.

Ein verwandtes Thema ist das Konzept der HTTP-Verbindungsupgrades, bei denen eine HTTP/1.1-Verbindung auf ein anderes Protokoll aktualisiert wird, wie beispielsweise TLS/1.0, WebSocket oder sogar HTTP/2 im Klartext. Dieser [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) wird an anderer Stelle ausführlicher dokumentiert.

## Kurzlebige Verbindungen

Das ursprüngliche Modell von HTTP und das Standardmodell in HTTP/1.0 sind _kurzlebige Verbindungen_. Jede HTTP-Anfrage wird über eine eigene Verbindung abgeschlossen; das bedeutet, dass ein TCP-Handshake vor jeder HTTP-Anfrage erfolgt und diese serialisiert werden.

Der TCP-Handshake an sich ist zeitaufwändig, aber eine TCP-Verbindung passt sich ihrer Belastung an und wird effizienter mit dauerhaft (oder warm) bestehenden Verbindungen. Kurzlebige Verbindungen nutzen diese Effizienzfunktion von TCP nicht und die Leistung verschlechtert sich vom Optimum, indem sie fortgesetzt über eine neue, kalte Verbindung übertragen.

Dieses Modell ist das Standardmodell in HTTP/1.0 (wenn kein {{HTTPHeader("Connection")}}-Header vorhanden ist oder wenn dessen Wert auf `close` gesetzt ist). In HTTP/1.1 wird dieses Modell nur verwendet, wenn der {{HTTPHeader("Connection")}}-Header mit einem Wert von `close` gesendet wird.

> [!NOTE]
> Sofern es sich nicht um ein sehr altes System handelt, das keine persistente Verbindung unterstützt, gibt es keinen zwingenden Grund, dieses Modell zu verwenden.

## Persistente Verbindungen

Kurzlebige Verbindungen haben zwei große Nachteile: Die Zeit, die benötigt wird, um eine neue Verbindung herzustellen, ist erheblich, und die Leistung der zugrundeliegenden TCP-Verbindung verbessert sich erst, wenn diese Verbindung schon längere Zeit genutzt wurde (warme Verbindung). Um diese Probleme zu mildern, wurde das Konzept einer _persistenten Verbindung_ entwickelt, sogar vor HTTP/1.1. Alternativ wird dies als _Keep-Alive-Verbindung_ bezeichnet.

Eine persistente Verbindung ist eine, die für eine gewisse Zeit offen bleibt und für mehrere Anfragen wiederverwendet werden kann, wodurch die Notwendigkeit eines neuen TCP-Handshakes entfällt und die leistungssteigernden Fähigkeiten von TCP genutzt werden. Diese Verbindung bleibt nicht unbegrenzt offen: Inaktive Verbindungen werden nach einiger Zeit geschlossen (ein Server kann den {{HTTPHeader("Keep-Alive")}}-Header verwenden, um eine Mindestzeit anzugeben, die die Verbindung offen bleiben soll).

Persistente Verbindungen haben auch Nachteile; selbst im Leerlauf verbrauchen sie Serverressourcen, und bei starker Auslastung können {{glossary("DoS attack", "DoS-Angriffe")}} durchgeführt werden. In solchen Fällen können nicht-persistente Verbindungen, die geschlossen werden, sobald sie inaktiv sind, eine bessere Leistung bieten.

HTTP/1.0-Verbindungen sind standardmäßig nicht persistent. Wenn {{HTTPHeader("Connection")}} auf etwas Anderes als `close` gesetzt wird, normalerweise `retry-after`, werden sie persistent.

In HTTP/1.1 ist Persistenz standardmäßig aktiv, und der Header ist nicht mehr erforderlich (wird jedoch häufig als Schutzmaßnahme gegen Fälle hinzugefügt, die ein Rückfall auf HTTP/1.0 erfordern).

## HTTP-Pipelining

> [!NOTE]
> HTTP-Pipelining ist in modernen Browsern nicht standardmäßig aktiviert:
>
> - Fehlerhafte [Proxys](https://en.wikipedia.org/wiki/Proxy_server) sind immer noch häufig und führen zu seltsamen und unvorhersehbaren Verhaltensweisen, die Webentwickler nur schwer erkennen und diagnostizieren können.
> - Pipelining ist komplex korrekt zu implementieren: Die Größe der übertragenen Ressource, die effektive [RTT](https://en.wikipedia.org/wiki/Round-trip_delay_time), die verwendet wird, sowie die effektive Bandbreite haben direkten Einfluss auf die durch die Pipeline erzielte Verbesserung. Ohne Kenntnis dieser Faktoren können wichtige Nachrichten hinter unwichtigen verzögert werden. Auch das Konzept der Wichtigkeit entwickelt sich während des Seitenlayouts! HTTP-Pipelining bietet daher in den meisten Fällen nur eine marginale Verbesserung.
> - Pipelining ist anfällig für das [HOL](https://en.wikipedia.org/wiki/Head-of-line_blocking)-Problem.
>
> Aus diesen Gründen wurde Pipelining durch einen besseren Algorithmus, _Multiplexing_, ersetzt, der von HTTP/2 verwendet wird.

Standardmäßig werden [HTTP](/de/docs/Web/HTTP)-Anfragen sequentiell ausgeführt. Die nächste Anfrage wird erst gesendet, wenn die Antwort auf die aktuelle Anfrage eingegangen ist. Da sie von Netzwerkverzögerungen und Bandbreitenbeschränkungen betroffen sind, kann dies zu erheblichen Verzögerungen führen, bevor die nächste Anfrage vom Server „gesehen“ wird.

Pipelining ist der Vorgang, bei dem aufeinanderfolgende Anfragen über dieselbe persistente Verbindung gesendet werden, ohne auf die Antwort zu warten. Dies vermeidet die Latenz der Verbindung. Theoretisch könnte die Leistung auch verbessert werden, wenn zwei HTTP-Anfragen in dieselbe TCP-Nachricht gepackt würden. Die typische [MSS](https://en.wikipedia.org/wiki/Maximum_segment_size) (Maximum Segment Size) ist groß genug, um mehrere einfache Anfragen zu enthalten, obwohl der Größenbedarf von HTTP-Anfragen weiter zunimmt.

Nicht alle Arten von HTTP-Anfragen können gepipelined werden: Nur {{glossary("idempotent")}}-Methoden, das heißt {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}, können sicher wiederholt werden. Sollte ein Fehler auftreten, kann der Pipeline-Inhalt wiederholt werden.

Heute sollte jeder HTTP/1.1-konforme Proxy und Server Pipelining unterstützen, obwohl viele in der Praxis Einschränkungen aufweisen: Ein wesentlicher Grund, warum kein moderner Browser dieses Feature standardmäßig aktiviert.

## Domain-Sharding

> [!NOTE]
> Es sei denn, Sie haben einen sehr spezifischen sofortigen Bedarf, verwenden Sie diese veraltete Technik nicht; wechseln Sie stattdessen zu HTTP/2. In HTTP/2 ist Domain-Sharding nicht mehr nützlich: Die HTTP/2-Verbindung kann parallele nicht priorisierte Anfragen sehr gut handhaben. Domain-Sharding ist sogar leistungsschädlich. Die meisten HTTP/2-Implementierungen verwenden eine Technik namens [connection coalescing](https://daniel.haxx.se/blog/2016/08/18/http2-connection-coalescing/), um eventuelles Domain-Sharding rückgängig zu machen.

Da eine HTTP/1.x-Verbindung Anfragen serialisiert, auch ohne jegliche Reihenfolge, kann sie nicht optimal sein, ohne genügend verfügbare Bandbreite. Als Lösung öffnen Browser mehrere Verbindungen zu jeder Domäne und senden parallele Anfragen. Standard war früher 2 bis 3 Verbindungen, aber das hat sich nun auf eine gebräuchlichere Nutzung von 6 parallelen Verbindungen erhöht. Es besteht die Gefahr, dass [DoS](/de/docs/Glossary/DOS_attack)-Schutz auf der Serverseite ausgelöst wird, wenn versucht wird, mehr als diese Anzahl zu verwenden.

Wenn der Server eine schnellere Website oder Anwendungsantwort wünscht, kann er das Öffnen weiterer Verbindungen erzwingen. Zum Beispiel könnte anstelle aller Ressourcen auf derselben Domäne, z.B. `www.example.com`, eine Aufteilung über mehrere Domänen erfolgen, z.B. `www1.example.com`, `www2.example.com`, `www3.example.com`. Jede dieser Domänen verweist auf denselben Server und der Webbrowser wird 6 Verbindungen zu jeder öffnen (in unserem Beispiel insgesamt 18 Verbindungen). Diese Technik nennt man _Domain-Sharding_.

![Ohne Domain-Sharding fordert ein Client sechs Bilder von einer Domäne mit maximal zwei parallelen Anfragen an. Mit Domain-Sharding sind die Bilder von zwei Domänen verfügbar und der Client kann vier Anfragen parallel ausführen, was das Herunterladen der Bilder schneller macht.](httpsharding.png)

## Schlussfolgerung

Verbessertes Verbindungsmanagement ermöglicht eine erhebliche Leistungssteigerung in HTTP. Mit HTTP/1.1 oder HTTP/1.0 führt die Verwendung einer persistenten Verbindung – zumindest bis sie inaktiv wird – zur besten Leistung. Allerdings hat das Scheitern des Pipelinings zur Entwicklung besserer Verbindungsmanagementmodelle geführt, die in HTTP/2 integriert wurden.
