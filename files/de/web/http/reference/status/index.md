---
title: HTTP-Statuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP-Statuscodes geben an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde.
Antworten werden in fünf Klassen gruppiert:

1. [Informatorische Antworten](#informatorische_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind definiert durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes).

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgeführt ist, handelt es sich um eine nicht standardmäßige Antwort, die möglicherweise serverseitig angepasst ist.

## Informatorische Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, falls die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anfrage-Header vom Client gesendet und gibt an, zu welchem Protokoll der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort keine Statusinformation verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich dazu gedacht, mit dem Header {{HTTPHeader("Link")}} verwendet zu werden, sodass der Benutzeragent mit dem [Vorab-Laden](/de/docs/Web/HTML/Reference/Attributes/rel/preload) von Ressourcen beginnen kann, während der Server eine Antwort vorbereitet oder [preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einer Quelle herstellt, von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängt von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtenkörper übermittelt.
    - {{HTTPMethod("HEAD")}}: Repräsentative Header sind in der Antwort enthalten, jedoch kein Nachrichtenkörper.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenkörper übermittelt.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtenkörper enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und eine neue Ressource wurde als Ergebnis erstellt. Dies ist typischerweise die Antwort nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht umgesetzt.
    Sie ist unverbindlich, da es im HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage anzeigt.
    Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für Batch-Verarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau dieselben sind wie vom Ursprungsserver verfügbar, sondern von einer lokalen oder einer Drittpartei-Kopie stammen.
    Dies wird hauptsächlich für Spiegelungen oder Backups einer anderen Ressource verwendet.
    Abgesehen von diesem spezifischen Fall wird die Antwort {{HTTPStatus(200, "200 OK")}} gegenüber diesem Status bevorzugt.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt für diese Anfrage zu senden, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwort-Elements verwendet, um die wiederholte Auflistung der internen Mitglieder mehrfacher Bindungen derselben Sammlung zu vermeiden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta-Encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet werden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [benutzergetriebenen Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort, und der Benutzeragent oder der Benutzer sollte eine davon auswählen.
    Es gibt keine standardisierte Möglichkeit für Clients, automatisch eine der Antworten auszuwählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen an der URI könnten in der Zukunft vorgenommen werden, daher sollte die gleiche URI von der Anfrage in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server sendete diese Antwort, um den Client anzuweisen, die angeforderte Ressource unter einer anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird zu Caching-Zwecken verwendet. Es teilt dem Client mit, dass die Antwort nicht modifiziert wurde, sodass der Client die gleiche [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort weiterhin verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy zugegriffen werden muss. Sie wurde aus Sicherheitsgründen bezüglich der in-band-Konfiguration eines Proxys veraltet.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource an einer anderen URI mit der gleichen Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantiken wie der `302 Found`-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die verwendete HTTP-Methode ändern darf: Wenn ein {{HTTPMethod("POST")}} in der ersten Anfrage verwendet wurde, muss ein `POST` in der umgeleiteten Anfrage verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource nun dauerhaft an einer anderen URI lokalisiert ist, die durch den {{HTTPHeader("Location")}}-Antwort-Header spezifiziert ist.
    Dies hat die gleichen Semantiken wie der `301 Moved Permanently` HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die verwendete HTTP-Methode ändern darf: Wenn ein {{HTTPMethod("POST")}} in der ersten Anfrage verwendet wurde, muss ein `POST` in der zweiten Anfrage verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder will die Anfrage nicht verarbeiten, weil etwas als Client-Fehler wahrgenommen wird (z.B. fehlerhafte Anfrage-Syntax, ungültige Anfrage-Nachricht-Rahmen, oder irreführendes Anfragerouting).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" (nicht autorisiert) spezifiziert, bedeutet diese Antwort semantisch "unauthenticated" (nicht authentifiziert). Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Zahlungssysteme, jedoch wird dieser Statuscode selten verwendet und es existiert keine standardmäßige Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt, das heißt, er ist nicht autorisiert, daher verweigert der Server die angeforderte Ressource.
    Anders als bei `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig, aber die Ressource selbst nicht existiert.
    Server können als Sicherheit alternativ zu `403 Forbidden` diese Antwort senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird aber von der Zielressource nicht unterstützt.
    Zum Beispiel kann eine API `DELETE` auf einer Ressource nicht erlauben oder die Methode `TRACE` insgesamt verbieten.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung der [serverseitigen Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den Kriterien des Benutzeragents entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, aber die Authentifizierung muss von einem Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird über eine inaktive Verbindung von einigen Servern gesendet, selbst ohne vorherige Anfrage vom Client.
    Es bedeutet, dass der Server diese ungenutzte Verbindung abschalten möchte.
    Diese Antwort wird häufiger genutzt, seitdem einige Browser HTTP-Vorverbindungsmechanismen zur Beschleunigung des Surfens verwenden.
    Einige Server mögen eine Verbindung ohne das Senden dieser Nachricht schließen.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
    In {{Glossary("WebDAV", "WebDAV")}}-Fernwebautoren sind `409`-Antworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise einen Konflikt lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Adresse für Weiterleitungen.
    Clients sollten ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, Werbedienstleistungen" verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode anzuzeigen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, weil das {{HTTPHeader("Content-Length")}} Header-Feld nicht definiert ist und der Server dies erfordert.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : In [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client Bedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Anfragetext ist größer als die vom Server definierten Grenzen.
    Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Header-Feld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server interpretieren kann.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die durch den `Range`-Header-Feld in der Anfrage angegebenen [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests) können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Zielressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das {{HTTPHeader("Expect")}}-Anfrage-Header-Feld angezeigten Erwartungen vom Server nicht erfüllt werden können.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu produzieren.
    Dies kann von einem Server gesendet werden, der nicht konfiguriert ist, Antworten für die Kombination aus Schema und Autorität zu produzieren, die in der Anforderungs-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte aber aufgrund semantischer Fehler nicht befolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlschlags einer vorherigen Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Gibt an, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise erneut abgespielt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server lehnt es ab, die Anfrage mit dem aktuellen Protokoll durchzuführen, könnte dies aber nach einer Protokollaktualisierung des Clients tun.
    Der Server sendet in einer 426-Antwort einen {{HTTPHeader("Upgrade")}}-Header, um das erforderliche Protokoll(e) anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das 'verlorene Aktualisierungs'-Problem verhindern, bei dem ein Client den Zustand einer Ressource {{HTTPMethod("GET")}}t, sie modifiziert und sie mit {{HTTPMethod("PUT")}} an den Server zurücksendet, während ein Dritter den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Header-Felder zu groß sind.
    Die Anfrage kann nach Reduzierung der Größe der Anfragen-Header-Felder erneut eingereicht werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie etwa eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server hat eine Situation erlebt, die er nicht handhaben kann.
    Dieser Fehler ist allgemein und zeigt an, dass der Server keinen passenderen `5XX`-Statuscode finden kann, mit dem er antworten könnte.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, während er als Gateway arbeitet, eine ungültige Antwort erhalten hat, die für die Bearbeitung der Anfrage benötigt wird.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein für Wartung heruntergefahrener oder überlasteter Server.
    Beachten Sie, dass mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für temporäre Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte möglichst die geschätzte Zeit vor der Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch die mit dieser Antwort gesendeten Cache-bezogenen Header beachten, da diese temporären Zustandsantworten in der Regel nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhält.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: während der Inhaltsaushandlung ist die gewählte Variante so konfiguriert, dass sie selbst an der Inhaltsaushandlung teilnimmt, was zu zirkulären Referenzen bei der Erstellung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte auf der Ressource nicht ausgeführt werden, da der Server nicht in der Lage ist, die zur erfolgreichen Bearbeitung der Anfrage erforderliche Repräsentation zu speichern.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife bei der Verarbeitung der Anfrage entdeckt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Client-Anfrage deklariert eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden soll, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Gibt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
