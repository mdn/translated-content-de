---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

HTTP-Antwortstatuscodes geben an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde.
Antworten werden in fünf Klassen eingeteilt:

1. [Informative Antworten](#informative_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsmeldungen](#umleitungsmeldungen) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes werden durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine hier nicht aufgeführte Antwort erhalten, handelt es sich um eine nicht standardisierte Antwort, die möglicherweise für die Software des Servers angepasst wurde.

## Informative Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischenantwort gibt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren soll, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anfrage-Header vom Client gesendet und gibt das Protokoll an, zu dem der Server wechselt.
- `102 Processing` {{deprecated_inline}}
  - : Dieser Code wurde in Kontexten von {{Glossary("WebDAV", "Web Distributed Authoring (WebDAV)")}} verwendet, um anzugeben, dass eine Anfrage vom Server empfangen wurde, zum Zeitpunkt der Antwort jedoch kein Status verfügbar war.
    Der Statuscode wurde erstmals in {{RFC("2518")}} eingeführt, jedoch in {{RFC("4918")}} aus WebDAV entfernt.
    Der Antwortcode wurde als veraltet eingestuft und wird nicht mehr verwendet.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich für die Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen und ermöglicht dem User-Agent, Ressourcen vorab zu [laden](/de/docs/Web/HTML/Reference/Attributes/rel/preload), während der Server eine Antwort vorbereitet, oder eine Vorverbindung zu einem Ursprung herzustellen, von dem die Seite Ressourcen benötigt ([preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)).

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von „Erfolg“ hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtenkörper übertragen.
    - {{HTTPMethod("HEAD")}}: Repräsentations-Header sind ohne Nachrichtenkörper in der Antwort enthalten.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenkörper übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtenkörper enthält die vom Server empfangene Anfrage.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und hat eine neue Ressource erstellt. Dies ist typischerweise die Antwort nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht verarbeitet.
    Sie ist unverbindlich, da es in HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage angibt.
    Sie ist für Fälle vorgesehen, in denen ein anderer Prozess oder Server die Anfrage verarbeitet, oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht exakt mit den vom Ursprungsserver verfügbaren übereinstimmen, sondern aus einer lokalen Kopie oder einer Kopie eines Drittanbieters stammen.
    Dies wird überwiegend für Spiegelungen oder Sicherungskopien einer anderen Ressource verwendet.
    Außer in diesem speziellen Fall ist die Antwort {{HTTPStatus(200, "200 OK")}} diesem Status vorzuziehen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Für diese Anfrage gibt es keinen zu sendenden Inhalt, aber die Header sind nützlich.
    Der User-Agent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Weist den User-Agent an, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder mehrere Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes angemessen sein können.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, dass die internen Mitglieder mehrerer Bindungen an dieselbe Sammlung wiederholt aufgezählt werden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP-Delta-Kodierung](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt, und die Antwort ist eine Repräsentation des Ergebnisses einer oder mehrerer Instanzmanipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsmeldungen

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [agentengesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort, und der User-Agent oder Benutzer sollte eine davon auswählen.
    Es gibt keine standardisierte Möglichkeit für Clients, automatisch eine der Antworten auszuwählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen der URI können künftig erfolgen, daher sollte der Client bei künftigen Anfragen dieselbe URI verwenden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource über eine {{HTTPMethod("GET")}}-Anfrage unter einer anderen URI abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client weiterhin dieselbe [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzugeben, dass auf eine angeforderte Antwort über einen Proxy zugegriffen werden muss.
    Aufgrund von Sicherheitsbedenken hinsichtlich der In-Band-Konfiguration eines Proxys wurde es als veraltet eingestuft.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist jedoch reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource unter einer anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat dieselbe Semantik wie der Antwortcode `302 Found`, mit der Ausnahme, dass der User-Agent die verwendete HTTP-Methode _nicht_ ändern darf: Wurde in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet, muss in der umgeleiteten Anfrage ein `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass sich die Ressource nun dauerhaft unter einer anderen URI befindet, die durch den {{HTTPHeader("Location")}}-Antwort-Header angegeben wird.
    Dies hat dieselbe Semantik wie der HTTP-Antwortcode `301 Moved Permanently`, mit der Ausnahme, dass der User-Agent die verwendete HTTP-Methode _nicht_ ändern darf: Wurde in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet, muss in der zweiten Anfrage ein `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder will die Anfrage aufgrund eines als Client-Fehler wahrgenommenen Problems nicht verarbeiten (z. B. fehlerhafte Anfragesyntax, ungültige Nachrichtenrahmung der Anfrage oder irreführendes Routing der Anfrage).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard „unauthorized“ angibt, bedeutet diese Antwort semantisch „unauthenticated“.
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war die Verwendung für digitale Zahlungssysteme. Dieser Statuscode wird jedoch selten verwendet, und es gibt keine Standardkonvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, sodass der Server die Bereitstellung der angeforderten Ressource verweigert.
    Anders als bei `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, die Ressource selbst jedoch nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um einem nicht autorisierten Client die Existenz einer Ressource zu verbergen.
    Dieser Antwortcode ist aufgrund seines häufigen Auftretens im Web wahrscheinlich der bekannteste.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Beispielsweise kann eine API `DELETE` für eine Ressource oder die Methode `TRACE` generell nicht zulassen.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung einer [servergesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom User-Agent angegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ähnelt `401 Unauthorized`, allerdings muss die Authentifizierung durch einen Proxy erfolgen.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern bei einer inaktiven Verbindung gesendet, auch ohne vorherige Anfrage des Clients.
    Sie bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird wesentlich häufiger verwendet, seit einige Browser HTTP-Vorverbindungsmechanismen verwenden, um das Surfen zu beschleunigen.
    Einige Server können eine Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
    Beim Remote-Web-Authoring mit {{Glossary("WebDAV", "WebDAV")}} sind `409`-Antworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise einen Konflikt lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde und keine Weiterleitungsadresse vorhanden ist.
    Von Clients wird erwartet, dass sie ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für „zeitlich begrenzte Werbedienste“ verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, gelöschte Ressourcen mit diesem Statuscode anzuzeigen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, weil das {{HTTPHeader("Content-Length")}}-Header-Feld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client in seinen Headern Vorbedingungen angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Anfragekörper ist größer als die vom Server festgelegten Grenzen.
    Der Server kann die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Header-Feld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die durch das `Range`-Header-Feld in der Anfrage angegebenen [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests) können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Datengröße der Zielressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das {{HTTPHeader("Expect")}}-Anfrage-Header-Feld angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server verweigert den Versuch, mit einer Teekanne Kaffee zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann.
    Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination aus Schema und Authority zu erzeugen, die in der Anfrage-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte jedoch aufgrund semantischer Fehler nicht ausgeführt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlschlags einer vorherigen Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Gibt an, dass der Server nicht bereit ist, die Verarbeitung einer Anfrage zu riskieren, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server verweigert die Ausführung der Anfrage mit dem aktuellen Protokoll, könnte jedoch dazu bereit sein, nachdem der Client auf ein anderes Protokoll aktualisiert hat.
    Der Server sendet in einer 426-Antwort einen {{HTTPHeader("Upgrade")}}-Header, um die erforderlichen Protokolle anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das Problem der „verlorenen Aktualisierung“ verhindern, bei dem ein Client den Zustand einer Ressource per {{HTTPMethod("GET")}} abruft, ihn verändert und per {{HTTPMethod("PUT")}} an den Server zurücksendet, während in der Zwischenzeit ein Dritter den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat in einem bestimmten Zeitraum zu viele Anfragen gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil ihre Header-Felder zu groß sind.
    Die Anfrage kann nach Verringerung der Größe der Anfrage-Header-Felder erneut übermittelt werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der User-Agent hat eine Ressource angefordert, die rechtlich nicht bereitgestellt werden kann, etwa eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, mit der er nicht umgehen kann.
    Dieser Fehler ist allgemein und weist darauf hin, dass der Server keinen passenderen `5XX`-Statuscode finden kann, mit dem er antworten könnte.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht verarbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und für die sie diesen Code daher nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server beim Arbeiten als Gateway, um eine für die Verarbeitung der Anfrage benötigte Antwort abzurufen, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten.
    Häufige Ursachen sind ein Server, der wegen Wartungsarbeiten nicht verfügbar oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für vorübergehende Zustände verwendet werden, und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss zudem die zusammen mit dieser Antwort gesendeten Caching-bezogenen Header berücksichtigen, da diese Antworten auf vorübergehende Zustände normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway agiert und nicht rechtzeitig eine Antwort erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsaushandlung ist die ausgewählte Variante so konfiguriert, dass sie selbst an der Inhaltsaushandlung teilnimmt, was beim Erstellen von Antworten zu zirkulären Verweisen führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte für die Ressource nicht ausgeführt werden, weil der Server die Repräsentation, die zum erfolgreichen Abschließen der Anfrage erforderlich ist, nicht speichern kann.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat bei der Verarbeitung der Anfrage eine Endlosschleife erkannt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Client-Anfrage deklariert eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden sollte, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Gibt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Offizielles IANA-Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes)
- [Hinweise zur Entfernung von „102 Processing“ in rfc4918](https://www.rfc-editor.org/info/rfc4918/#section-21.4)
