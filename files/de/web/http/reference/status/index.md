---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

HTTP-Antwortstatuscodes geben an, ob eine spezifische [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde.
Antworten werden in fünf Klassen gruppiert:

1. [Informative Antworten](#informative_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Weiterleitungsnachrichten](#weiterleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgeführt ist, handelt es sich um eine nicht standardmäßige Antwort, möglicherweise benutzerdefiniert für die Server-Software.

## Informative Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren soll, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf ein {{HTTPHeader("Upgrade")}}-Anforderungsheader vom Client gesendet und gibt das Protokoll an, auf das der Server umschaltet.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist primär zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, sodass der Benutzeragent Ressourcen vorladen kann, während der Server eine Antwort vorbereitet oder eine [Preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einer Quelle aufbaut, von der die Seite Ressourcen benötigen wird.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtentext übertragen.
    - {{HTTPMethod("HEAD")}}: Repräsentationsheader sind in der Antwort enthalten, jedoch ohne Nachrichtentext.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtentext übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtentext enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und es wurde eine neue Ressource als Ergebnis erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es in HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage mitteilt.
    Sie ist für Fälle vorgesehen, in denen eine andere Prozess- oder Serverinstanz die Anfrage bearbeitet oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau mit denen vom Ursprungsserver übereinstimmen, sondern von einer lokalen oder einer Drittpartei-Kopie stammen.
    Dies wird meist für Spiegelungen oder Backups einer anderen Ressource verwendet.
    Abgesehen von diesem spezifischen Fall ist die {{HTTPStatus(200, "200 OK")}}-Antwort für diesen Status vorzuziehen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt für diese Anfrage zu senden, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Weist den Benutzeragenten an, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Liefert Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, dass die internen Mitglieder mehrerer Bindungen an dasselbe Verzeichnis wiederholt aufgelistet werden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt und die Antwort ist eine Repräsentation des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Weiterleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei [agentengesteuerter Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort und der Benutzeragent oder Benutzer sollte eine davon wählen.
    Es gibt keinen standardisierten Weg für Clients, eine der Antworten automatisch zu wählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen der URI könnten in Zukunft vorgenommen werden, daher sollte die gleiche URI vom Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client dazu zu bringen, die angeforderte Ressource an einer anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird zu Caching-Zwecken verwendet.
    Es teilt dem Client mit, dass die Antwort nicht modifiziert wurde, sodass der Client weiterhin die gleiche [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : Definiert in einer früheren Version der HTTP-Spezifikation, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy abgerufen werden muss.
    Sie wurde aufgrund von Sicherheitsbedenken hinsichtlich der In-Band-Konfiguration eines Proxy deprecated.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet; ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource unter einer anderen URI mit der gleichen Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantiken wie der Antwortcode `302 Found`, mit der Ausnahme, dass der Benutzeragent _nicht_ die HTTP-Methode ändern darf: Wenn ein {{HTTPMethod("POST")}} in der ersten Anfrage verwendet wurde, muss ein `POST` in der umgeleiteten Anfrage verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource jetzt dauerhaft unter einer anderen URI zu finden ist, die durch den {{HTTPHeader("Location")}}-Antwortheader angegeben wird.
    Dies hat die gleichen Semantiken wie der HTTP-Antwortcode `301 Moved Permanently`, mit der Ausnahme, dass der Benutzeragent _nicht_ die HTTP-Methode ändern darf: Wenn ein {{HTTPMethod("POST")}} in der ersten Anfrage verwendet wurde, muss ein `POST` in der zweiten Anfrage verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann die Anfrage nicht verarbeiten oder weigert sich, sie zu verarbeiten, aufgrund von etwas, das als Clientfehler wahrgenommen wird (z. B. fehlerhafte Anfragesyntax, ungültige Anfragenachrichten-Rahmen oder irreführende Anforderungsleitung).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" ("nicht autorisiert") angibt, bedeutet diese Antwort semantisch "unauthenticated" ("nicht authentifiziert").
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Bezahlsysteme gedacht, allerdings wird dieser Statuscode selten verwendet und es gibt keine standardisierte Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, daher verweigert der Server die Bereitstellung der angeforderten Ressource.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Zugriffspunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können auch diese Antwort anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird aber von der Zielressource nicht unterstützt.
    Zum Beispiel kann eine API `DELETE` auf einer Ressource nicht erlauben oder die `TRACE`-Methode gänzlich.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung einer [Server-gesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten angegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, aber die Authentifizierung muss von einem Proxy vorgenommen werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern bei einer untätigen Verbindung gesendet, selbst ohne vorherige Anfrage des Clients.
    Es bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird viel öfter verwendet, da einige Browser HTTP-Vorverbindungsmechanismen verwenden, um das Browsen zu beschleunigen.
    Einige Server können eine Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Status des Servers in Konflikt steht.
    Im {{Glossary("WebDAV", "WebDAV")}} fernauthoring werden `409`-Antworten als Fehler an den Client gesendet, damit ein Benutzer einen Konflikt möglicherweise beheben und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne eine Weiterleitungsadresse.
    Es wird erwartet, dass Clients ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, promotive Dienste" verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode zu kennzeichnen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server lehnt die Anfrage ab, da das {{HTTPHeader("Content-Length")}}-Headerfeld nicht definiert ist und der Server es erfordert.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : In [Bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client Präbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Nachrichtentext der Anfrage ist größer als die vom Server definierten Begrenzungen.
    Der Server könnte die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die URI, die vom Client angefordert wird, ist länger, als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests), die im `Range`-Headerfeld der Anfrage angegeben sind, können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Zieldatenressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die Erwartung, die durch das {{HTTPHeader("Expect")}}-Anforderungsheaderfeld angegeben ist, vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zuzubereiten.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der in der Lage ist, keine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht konfiguriert ist, um Antworten für die Kombination aus Schema und Autorität zu erstellen, die in der Anforderungs-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war gut formatiert, konnte jedoch aufgrund semantischer Fehler nicht befolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Scheiterns einer vorhergehenden Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Zeigt an, dass der Server nicht bereit ist, eine Anfrage zu verarbeiten, die eventuell erneut abgespielt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server weigert sich, die Anfrage unter Verwendung des aktuellen Protokolls auszuführen, ist jedoch eventuell bereit, dies zu tun, nachdem der Client auf ein anderes Protokoll aktualisiert hat.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das erforderliche(n) Protokoll(e) anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver erfordert, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort ist dazu gedacht, das Problem des 'verlorenen Updates' zu verhindern, bei dem ein Client den Status einer Ressource mit {{HTTPMethod("GET")}} abruft, ihn modifiziert und mit {{HTTPMethod("PUT")}} an den Server zurücksendet, währenddessen eine Drittpartei den Status auf dem Server verändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ({{Glossary("Rate_limit", "Rate-Limitierung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, da die Headerfelder zu groß sind.
    Die Anfrage kann nach Reduzierung der Größe der Anforderungsheaderfelder erneut übermittelt werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie z. B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, die er nicht verarbeiten kann.
    Dieser Fehler ist generisch und zeigt an, dass der Server keinen passenderen `5XX`-Statuscode finden kann, mit dem er antworten kann.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlermeldung bedeutet, dass der Server, während er als Gateway arbeitet, eine ungültige Antwort erhalten hat, die zur Bearbeitung der Anfrage benötigt wird.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der für Wartungsarbeiten heruntergefahren oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite, die das Problem erklärt, gesendet werden sollte.
    Diese Antwort sollte für vorübergehende Bedingungen verwendet werden, und der {{HTTPHeader("Retry-After")}} HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die caching-bezogenen Header achten, die zusammen mit dieser Antwort gesendet werden, da diese temporären Bedingungsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlermeldung wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsverhandlung ist die gewählte Variante so konfiguriert, dass sie sich selbst in der Inhaltsverhandlung engagiert, was zu zirkulären Referenzen bei der Erstellung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte an der Ressource nicht ausgeführt werden, da der Server nicht in der Lage ist, die Repräsentation zu speichern, die benötigt wird, um die Anfrage erfolgreich abzuschließen.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife während der Verarbeitung der Anfrage festgestellt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Client-Anfrage deklariert eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Bearbeitung der Anfrage verwendet werden sollte, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Gibt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste von HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
