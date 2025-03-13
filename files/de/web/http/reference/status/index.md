---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert:

1. [Informationsantworten](#informationsantworten) (`100` – `199`)
2. [Erfolgsantworten](#erfolgsantworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind in [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgelistet ist, handelt es sich um eine nicht-standardisierte Antwort, möglicherweise spezifisch für die Software des Servers.

## Informationsantworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anfrage-Header vom Client gesendet und zeigt an, auf welches Protokoll der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich dafür vorgesehen, mit dem {{HTTPHeader("Link")}}-Header verwendet zu werden und dem User-Agent zu ermöglichen, Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), während der Server eine Antwort vorbereitet, oder eine [Vorverbindung](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einem Ursprung aufzubauen, von dem die Seite Ressourcen benötigt.

## Erfolgsantworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtentext übertragen.
    - {{HTTPMethod("HEAD")}}: Repräsentationsheader sind in der Antwort enthalten, jedoch ohne Nachrichtentext.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtentext übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtentext enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und es wurde infolgedessen eine neue Ressource erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es keinen Weg in HTTP gibt, später eine asynchrone Antwort über das Ergebnis der Anfrage zu senden.
    Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau dieselben sind, wie sie vom Ursprungsserver verfügbar sind, sondern von einer lokalen oder einer Drittpartei-Kopie gesammelt wurden.
    Dies wird hauptsächlich für Spiegelung oder Sicherung einer anderen Ressource verwendet.
    Abgesehen von diesem spezifischen Fall wird die {{HTTPStatus(200, "200 OK")}}-Antwort gegenüber diesem Status bevorzugt.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt für diese Anfrage zu senden, aber die Header sind nützlich.
    Der User-Agent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Teilt dem User-Agent mit, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, die internen Mitglieder mehrerer Bindungen an dieselbe Sammlung wiederholt aufzuzählen.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP-Delta-Kodierung](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanzen-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei [agentengesteuerter Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort und der User-Agent oder Benutzer sollte eine davon wählen.
    Es gibt keinen standardisierten Weg für Clients, automatisch eine der Antworten auszuwählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen der URI könnten in der Zukunft vorgenommen werden, sodass der Client dieselbe URI in zukünftigen Anfragen verwenden sollte.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client aufzufordern, die angeforderte Ressource mit einer {{HTTPMethod("GET")}}-Anfrage an einer anderen URI abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird zu Caching-Zwecken verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client weiterhin dieselbe [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : Definiert in einer früheren Version der HTTP-Spezifikation, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy aufgerufen werden muss.
    Es wurde aufgrund von Sicherheitsbedenken bezüglich der in-band Konfiguration eines Proxys verworfen.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client aufzufordern, die angeforderte Ressource an einer anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat dieselbe Semantik wie der `302 Found`-Antwortcode, mit der Ausnahme, dass der User-Agent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage eine {{HTTPMethod("POST")}} verwendet wurde, muss auch in der umgeleiteten Anfrage eine `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource jetzt dauerhaft an einer anderen URI lokalisiert ist, die durch den {{HTTPHeader("Location")}}-Antwortheader angegeben wird.
    Dies hat dieselbe Semantik wie der `301 Moved Permanently`-HTTP-Antwortcode, mit der Ausnahme, dass der User-Agent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage eine {{HTTPMethod("POST")}} verwendet wurde, muss auch in der zweiten Anfrage eine `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann die Anfrage aufgrund eines wahrgenommenen Client-Fehlers nicht verarbeiten oder lehnt diese ab (z.B. fehlerhafte Anfragesyntax, ungültige Nachrichtenumrandung oder täuschende Anforderungsweiterleitung).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" spezifiziert, bedeutet diese Antwort semantisch "unauthenticated".
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Zahlungssysteme, jedoch wird dieser Statuscode selten verwendet und es gibt keine Standardkonvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, daher verweigert der Server die Bereitstellung der angeforderten Ressource.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Zum Beispiel darf eine API möglicherweise `DELETE` auf einer Ressource oder die `TRACE`-Methode überhaupt nicht zulassen.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung einer [servergesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom User-Agent angegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich zu `401 Unauthorized`, jedoch muss eine Authentifizierung durch einen Proxy erfolgen.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird bei einer Leerlaufverbindung von einigen Servern gesendet, selbst ohne vorherige Anfrage des Clients.
    Dies bedeutet, dass der Server diese unbenutzte Verbindung schließen möchte.
    Diese Antwort wird viel häufiger verwendet, da einige Browser HTTP-Vorverbindungsmechanismen nutzen, um das Surfen zu beschleunigen.
    Einige Server können eine Verbindung ohne dieses Nachricht schließen.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
    In der {{Glossary("WebDAV", "WebDAV")}} Remote-Web-Autorität sind `409`-Antworten Fehler, die an den Client gesendet werden, damit ein Benutzer einen Konflikt lösen und die Anfrage erneut einreichen kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Weiterleitungsadresse.
    Clients sollten ihre Caches und Links zu der Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, Werbeaktionen" verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode anzuzeigen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server lehnt die Anfrage ab, weil das {{HTTPHeader("Content-Length")}}-Headerfeld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client die Bedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Anforderungstext ist größer als die vom Server definierten Grenzen.
    Der Server kann die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die von dem Client angeforderte URI ist länger, als der Server zu interpretieren bereit ist.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests), die im `Range`-Headerfeld der Anfrage angegeben sind, können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Datensätze der Zielressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das {{HTTPHeader("Expect")}}-Anfrageheaderfeld angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zu brauen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die in der Anfrage-URI enthaltene Kombination aus Schema und Autorität zu erzeugen.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte jedoch aufgrund semantischer Fehler nicht befolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund eines Fehlers einer früheren Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Gibt an, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die wiederholt werden könnte.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server verweigert die Durchführung der Anfrage mit dem aktuellen Protokoll, ist jedoch möglicherweise bereit, dies nach der Aktualisierung des Clients auf ein anderes Protokoll zu tun.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um die erforderlichen Protokoll(e) anzuzeigen.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungserver erfordert, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das "verlorene Aktualisierungs"-Problem verhindern, bei dem ein Client eine Ressourcenzustand über {{HTTPMethod("GET")}} abruft, ihn modifiziert und über {{HTTPMethod("PUT")}} zurück an den Server sendet, währenddessen eine dritte Partei den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil die Header-Felder zu groß sind.
    Die Anfrage kann nach Verkleinerung der Größe der Header-Felder erneut eingereicht werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der User-Agent hat eine Ressource angefordert, die rechtlich nicht bereitgestellt werden kann, wie z.B. eine Webseite, die von einer Regierung zensiert wurde.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server hat eine Situation festgestellt, die er nicht handhaben kann.
    Dieser Fehler ist generisch und zeigt an, dass der Server keinen passenderen `5XX`-Statuscode finden kann, um zu antworten.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, während er als Gateway arbeitete, um eine Antwort zu erhalten, die zur Bearbeitung der Anfrage benötigt wurde, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein aufgrund von Wartungsarbeiten oder Überlastung nicht erreichbarer Server.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für temporäre Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die zusammen mit dieser Antwort gesendeten cachingbezogenen Header achten, da diese temporäre Zustandsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway arbeitet und in der vorgegebenen Zeit keine Antwort erhält.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsaushandlung ist die gewählte Variante so konfiguriert, dass sie selbst an der Inhaltsaushandlung teilnimmt, was zu zirkulären Referenzen bei der Erstellung der Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht auf der Ressource ausgeführt werden, da der Server nicht in der Lage ist, die zur erfolgreichen Erfüllung der Anfrage benötigte Darstellung zu speichern.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife beim Verarbeiten der Anfrage festgestellt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Clientanfrage erklärt eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden soll, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Gibt an, dass der Client sich authentifizieren muss, um Netzwerkzugang zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Verzeichnis der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
