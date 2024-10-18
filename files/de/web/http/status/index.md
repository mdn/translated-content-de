---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Status
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde.
Antworten sind in fünf Klassen gruppiert:

1. [Informationsantworten](#informationsantworten) (`100` – `199`)
2. [Erfolgsantworten](#erfolgsantworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind in [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgelistet ist, handelt es sich um eine nicht standardmäßige Antwort, möglicherweise spezifisch für die Software des Servers.

## Informationsantworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischenantwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, falls die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anforderungsheader vom Client gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode soll hauptsächlich mit dem {{HTTPHeader("Link")}}-Header verwendet werden, um dem Benutzeragenten das [Vorladen](/de/docs/Web/HTML/Attributes/rel/preload) von Ressourcen zu ermöglichen, während der Server eine Antwort vorbereitet oder eine [Vorabverbindung](/de/docs/Web/HTML/Attributes/rel/preconnect) mit einer Herkunftsquelle herstellt, von der die Seite Ressourcen benötigt.

## Erfolgsantworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtentext übertragen.
    - {{HTTPMethod("HEAD")}}: Repräsentationsheader sind in der Antwort ohne Nachrichtentext enthalten.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtentext übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtentext enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich, und eine neue Ressource wurde dadurch erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es keine Möglichkeit in HTTP gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage angibt.
    Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau mit denen vom Ursprungsserver übereinstimmen, sondern von einer lokalen oder einer dritten Kopie gesammelt wurden.
    Dies wird hauptsächlich für Spiegel oder Backups einer anderen Ressource verwendet.
    Außer in diesem spezifischen Fall ist die {{HTTPStatus(200, "200 OK")}}-Antwort dieser Status vorzuziehen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt für diese Anfrage zu senden, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes geeignet sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, dass die internen Mitglieder mehrfacher Bindungen an dieselbe Sammlung wiederholt aufgezählt werden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [agentengesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort, und der Benutzeragent oder Benutzer sollte eine von ihnen auswählen.
    Es gibt keinen standardisierten Weg für Clients, automatisch eine der Antworten auszuwählen, weshalb dies selten verwendet wird.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen der URI könnten in Zukunft vorgenommen werden, daher sollte dieselbe URI vom Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client dazu zu veranlassen, die angeforderte Ressource an einer anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client weiterhin dieselbe [zwischengespeicherte](/de/docs/Web/HTTP/Caching) Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy erreicht werden muss.
    Es wurde aus Sicherheitsgründen bezüglich der In-Band-Konfiguration eines Proxys abgeschafft.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client zur gleichen Methode wie in der vorherigen Anfrage zu veranlassen, um die angeforderte Ressource an einer anderen URI abzurufen.
    Dies hat dieselben Semantiken wie der `302 Found`-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die HTTP-Methode ändern darf: Wenn eine {{HTTPMethod("POST")}}-Anfrage in der ersten Anfrage verwendet wurde, muss eine `POST`-Anfrage in der umgeleiteten Anfrage verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass sich die Ressource nun dauerhaft an einer anderen URI befindet, die durch den {{HTTPHeader("Location")}}-Antwortheader angegeben wird.
    Dies hat dieselben Semantiken wie der `301 Moved Permanently`-HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die HTTP-Methode ändern darf: Wenn eine {{HTTPMethod("POST")}}-Anfrage in der ersten Anfrage verwendet wurde, muss eine `POST`-Anfrage in der zweiten Anfrage verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann die Anfrage nicht verarbeiten oder wird sie nicht verarbeiten aufgrund von etwas, das als Clientfehler wahrgenommen wird (z. B. fehlerhafte Anfrage-Syntax, ungültige Anforderungs-Nachrichtenrahmen oder täuschende Anfrage-Routing).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" angibt, bedeutet diese Antwort semantisch "unauthenticated".
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Zahlungssysteme vorgesehen, jedoch wird dieser Statuscode selten verwendet und es gibt keine standardisierte Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, daher verweigert der Server die Bereitstellung der angeforderten Ressource.
    Im Unterschied zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können auch diese Antwort anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich am bekanntesten, da er häufig im Web auftritt.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Zum Beispiel könnte eine API `DELETE` auf eine Ressource oder die `TRACE`-Methode generell nicht erlauben.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach einer [servergesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten vorgelegten Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, jedoch muss die Authentifizierung durch einen Proxy erfolgen.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird auf einer ruhenden Verbindung von einigen Servern gesendet, auch ohne vorherige Anfrage vom Client.
    Sie bedeutet, dass der Server diese unbenutzte Verbindung schließen möchte.
    Diese Antwort wird häufiger verwendet, da einige Browser HTTP-Vorverbindungsmechanismen verwenden, um das Surfen zu beschleunigen.
    Einige Server können eine Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
    Im {{Glossary("WebDAV", "WebDAV")}}-Fernweb-Autorensystem sind `409`-Antworten Fehler, die an den Client gesendet werden, damit der Benutzer einen Konflikt lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Weiterleitungsadresse.
    Clients sollen ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "begrenzte Werbedienstleistungen" verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode anzuzeigen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, weil das {{HTTPHeader("Content-Length")}}-Headerfeld nicht definiert ist und der Server es erfordert.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : In [Bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) hat der Client Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Nachrichtenkörper der Anfrage ist größer als die vom Server festgelegten Grenzen.
    Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server zu interpretieren bereit ist.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die durch das `Range`-Headerfeld in der Anfrage angegebenen [Bereiche](/de/docs/Web/HTTP/Range_requests) können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Zieldaten der Ressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das {{HTTPHeader("Expect")}}-Headerfeld der Anfrage angegebene Erwartung nicht vom Server erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server verweigert den Versuch, Kaffee mit einer Teekanne zu machen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann.
    Dies kann von einem Server gesendet werden, der nicht konfiguriert ist, um Antworten für die Kombination von Schema und Autorität zu erzeugen, die in der URI der Anfrage enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war gut geformt, konnte aber nicht befolgt werden due to semantische Fehler.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlschlags einer vorherigen Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Gibt an, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server weigert sich, die Anfrage mit dem aktuellen Protokoll auszuführen, könnte jedoch bereit sein, dies nach einem Upgrade des Clients auf ein anderes Protokoll zu tun.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das erforderliche Protokoll bzw. die erforderlichen Protokolle anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver erfordert, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Conditional_requests) ist.
    Diese Antwort ist vorgesehen, um das Problem der 'verlorenen Aktualisierung' zu verhindern, bei dem ein Client den Zustand einer Ressource {{HTTPMethod("GET")}}, ihn ändert und ihn {{HTTPMethod("PUT")}} an den Server zurücksendet, während ein Dritter den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Headerfelder zu groß sind.
    Die Anfrage kann erneut gesendet werden, nachdem die Größe der Headerfelder der Anfrage reduziert wurde.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie z. B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, die er nicht bewältigen kann.
    Dieser Fehler ist allgemein gehalten und zeigt an, dass der Server keinen geeigneteren `5XX`-Statuscode finden kann, um zu antworten.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die der Server unterstützen muss (und daher diesen Code nicht zurückgeben darf), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, während er als Gateway funktionierte, eine ungültige Antwort erhalten hat, die benötigt wurde, um die Anfrage zu bearbeiten.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der wegen Wartungsarbeiten außer Betrieb ist oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für temporäre Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte nach Möglichkeit die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die caching-bezogenen Header achten, die zusammen mit dieser Antwort gesendet werden, da diese temporären Zustandsantworten in der Regel nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsverhandlung ist die gewählte Variante so konfiguriert, dass sie sich selbst an der Inhaltsverhandlung beteiligt, was zu zirkulären Verweisen bei der Erstellung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht auf die Ressource angewendet werden, da der Server nicht in der Lage ist, die Darstellung zu speichern, die zum erfolgreichen Abschluss der Anfrage benötigt wird.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife bei der Verarbeitung der Anfrage erkannt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Der Client-Anforderung wird eine HTTP-Erweiterung ({{RFC("2774")}}) deklariert, die zum Verarbeiten der Anfrage verwendet werden soll, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Gibt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste von HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
