---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: 2c1cce1810cedbd5b2e92f260c8ad2414072e0e6
---

HTTP-Antwortstatuscodes geben an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert:

1. [Informatorische Antworten](#informatorische_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgeführt ist, handelt es sich um eine nicht standardmäßige Antwort, möglicherweise individuell für die Serversoftware.

## Informatorische Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort bedeutet, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Header in der Anfrage des Clients gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- `102 Processing` {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "Web Distributed Authoring (WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
    Der Statuscode wurde zuerst in {{RFC("2518")}} eingeführt, aber aus WebDAV in {{RFC("4918")}} entfernt.
    Der Antwortcode wurde veraltet und wird nicht mehr verwendet.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, um dem Benutzeragenten zu ermöglichen, [Ressourcen vorzuladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload), während der Server eine Antwort vorbereitet oder eine [Verbindung](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einer Quelle herstellt, von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtenkörper übertragen.
    - {{HTTPMethod("HEAD")}}: Darstellungsheader sind in der Antwort enthalten, jedoch kein Nachrichtenkörper.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenkörper übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtenkörper enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich, und eine neue Ressource wurde als Ergebnis erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Es ist unverbindlich, da es im HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage anzeigt.
    Es ist für Fälle vorgesehen, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau die gleichen sind wie die, die vom Ursprungsserver erhältlich sind, sondern von einer lokalen oder einer Drittanbieter-Kopie stammen.
    Dies wird meist für Spiegel- oder Sicherungskopien einer anderen Ressource verwendet.
    Abgesehen von diesem speziellen Fall wird die {{HTTPStatus(200, "200 OK")}}-Antwort diesem Status vorgezogen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt, der für diese Anfrage gesendet werden soll, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument zurückzusetzen, welches diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Teilanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Liefert Informationen zu mehreren Ressourcen, für Situationen, in denen mehrere Statuscodes geeignet sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwort-Elements verwendet, um zu vermeiden, die internen Mitglieder mehrerer Bindungen an dieselbe Sammlung wiederholt aufzulisten.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [agentengetriebenen Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort und der Benutzeragent oder Benutzer sollte eine davon wählen.
    Es gibt keinen standardisierten Weg für Clients, automatisch eine der Antworten auszuwählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Möglicherweise werden in Zukunft weitere Änderungen der URI vorgenommen, daher sollte die gleiche URI vom Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client aufzufordern, die angeforderte Ressource an einer anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client die gleiche [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort weiterhin verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy zugegriffen werden muss.
    Aufgrund von Sicherheitsbedenken hinsichtlich der In-Band-Konfiguration eines Proxys wurde es veraltet.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet; er ist jedoch reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client aufzufordern, die angeforderte Ressource an einer anderen URI mit der gleichen Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantiken wie der `302 Found`-Antwortcode, mit der Ausnahme, dass der Benutzeragent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet wurde, muss in der weitergeleiteten Anfrage ein `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource jetzt dauerhaft an einer anderen URI verfügbar ist, die im {{HTTPHeader("Location")}}-Antwort-Header angegeben ist.
    Dies hat die gleichen Semantiken wie der `301 Moved Permanently` HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet wurde, muss in der zweiten Anfrage ein `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder will die Anfrage aufgrund etwas, das als Clientfehler wahrgenommen wird, nicht verarbeiten (z.B. fehlerhafte Anfragesyntax, ungültige Anfragenachrichtenstruktur oder irreführende Anfragelenkung).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" (unbefugt) angibt, bedeutet diese Antwort semantisch "unauthenticated" (nicht authentifiziert).
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Zahlungssysteme gedacht, aber dieser Statuscode wird selten verwendet und es gibt keine Standardvorgabe.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist unbefugt, daher weigert sich der Server, die angeforderte Ressource bereitzustellen.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass die Schnittstelle gültig ist, aber die Ressource selbst nicht existiert.
    Server können auch diese Antwort senden, anstatt `403 Forbidden`, um die Existenz einer Ressource vor einem unberechtigten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seiner häufigen Verwendung im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Beispielsweise kann eine API das `DELETE` auf einer Ressource oder die `TRACE`-Methode insgesamt nicht zulassen.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver, nach Durchführung einer [serverseitigen Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation), keinen Inhalt findet, der den vom Benutzeragenten angegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich zu `401 Unauthorized`, aber die Authentifizierung muss von einem Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern auf einer inaktiven Verbindung gesendet, selbst ohne vorherige Anfrage des Clients.
    Es bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird vermehrt verwendet, da einige Browser HTTP-Vorverbindungsmechanismen nutzen, um das Surfen zu beschleunigen.
    Einige Server können eine Verbindung ohne diese Nachricht schließen.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage im Widerspruch zum aktuellen Zustand des Servers steht.
    Bei {{Glossary("WebDAV", "WebDAV")}} Remote Web Authoring werden `409`-Antworten als Fehler an den Client gesendet, sodass ein Nutzer einen Konflikt möglicherweise lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Weiterleitungsadresse.
    Clients sollten ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation beabsichtigt, dass dieser Statuscode für "zeitlich begrenzte Werbedienstleistungen" verwendet wird.
    APIs sollten sich nicht gezwungen fühlen, mit diesem Statuscode anzuzeigen, dass Ressourcen gelöscht wurden.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server lehnte die Anfrage ab, weil das {{HTTPHeader("Content-Length")}}-Headerfeld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Anfragetext ist größer als die vom Server festgelegten Grenzen.
    Der Server kann die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurücksenden.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die durch das `Range`-Headerfeld in der Anfrage angegebenen [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests) können nicht erfüllt werden.
    Möglicherweise liegt der Bereich außerhalb der Größe der Daten der Zielressource.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die im {{HTTPHeader("Expect")}}-Anforderungsheaderfeld angegebene Erwartung nicht vom Server erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch, Kaffee mit einer Teekanne zu brühen, ab.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination aus Schema und Autorität zu erzeugen, die in der angeforderten URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte aber aufgrund von semantischen Fehlern nicht befolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage schlug aufgrund des Scheiterns einer vorherigen Anfrage fehl.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Zeigt an, dass der Server nicht bereit ist, eine Anfrage zu bearbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server weigert sich, die Anfrage mit dem aktuellen Protokoll auszuführen, ist jedoch bereit, dies zu tun, nachdem der Client zu einem anderen Protokoll gewechselt hat.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um die erforderlichen Protokolle anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das Problem "verlorener Aktualisierungen" verhindern, bei dem ein Client den Zustand einer Ressource mit {{HTTPMethod("GET")}} liest, diesen modifiziert und mit {{HTTPMethod("PUT")}} zurück auf den Server schreibt, während ein Dritter den Zustand auf dem Server verändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einer bestimmten Zeitmenge gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil ihre Headerfelder zu groß sind.
    Die Anfrage kann nach einer Reduzierung der Größe der Headerfelder erneut eingereicht werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie z.B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, die er nicht verarbeiten kann.
    Dieser Fehler ist generisch und zeigt an, dass der Server keinen besser geeigneten `5XX`-Statuscode finden kann, um darauf zu antworten.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlermeldung bedeutet, dass der Server, während er als Gateway fungierte, um eine benötigte Antwort zu erhalten, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der für Wartungsarbeiten ausgefallen ist oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}} HTTP-Header sollte, falls möglich, die geschätzte Zeit zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die Cache-bezogenen Header achten, die zusammen mit dieser Antwort gesendet werden, da diese vorübergehenden Bedingungsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlermeldung wird geliefert, wenn der Server als Gateway fungiert und keine rechtzeitige Antwort erhält.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die HTTP-Version, die in der Anfrage verwendet wurde, wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: während der Inhaltsverhandlung ist die gewählte Variante so konfiguriert, dass sie selbst an der Inhaltsverhandlung teilnimmt, was zu Kreisverweisen bei der Erzeugung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht an der Ressource durchgeführt werden, da der Server nicht in der Lage ist, die Darstellung zu speichern, die benötigt wird, um die Anfrage erfolgreich abzuschließen.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife bei der Verarbeitung der Anfrage erkannt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Der Client-Anfrage deklariert eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden sollte, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Zeigt an, dass der Client authentifizieren muss, um Zugang zum Netzwerk zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Verzeichnis der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
- [rfc4918 '102 Processing'-Entfernungsnotizen](https://www.rfc-editor.org/info/rfc4918/#section-21.4)
