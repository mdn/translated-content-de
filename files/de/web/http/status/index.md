---
title: HTTP response status codes
slug: Web/HTTP/Status
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Die Antworten sind in fünf Klassen unterteilt:

1. [Informationelle Antworten](#informationelle_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind in [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die nicht in [dieser Liste](#informationelle_antworten) enthalten ist, handelt es sich um eine nicht standardmäßige Antwort, möglicherweise benutzerdefiniert für die Software des Servers.

## Informationelle Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischenergebnisse antworten darauf, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anfrageheader vom Client gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Dieser Code zeigt an, dass der Server die Anfrage erhalten hat und verarbeitet, aber noch keine Antwort verfügbar ist.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode soll hauptsächlich mit dem {{HTTPHeader("Link")}}-Header verwendet werden, um dem Benutzeragenten zu ermöglichen, Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), während der Server eine Antwort vorbereitet oder eine [Vorabverbindung](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einer Herkunft herstellt, von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}

  - : Die Anfrage war erfolgreich. Die Bedeutung des Erfolgs hängt von der HTTP-Methode ab:

    - `GET`: Die Ressource wurde abgerufen und im Nachrichtenkörper übertragen.
    - `HEAD`: Die Repräsentationsheader sind in der Antwort enthalten, jedoch ohne Nachrichtenkörper.
    - `PUT` oder `POST`: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenkörper übertragen.
    - `TRACE`: Der Nachrichtenkörper enthält die Anfragenachricht, wie sie vom Server empfangen wurde.

- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich, und es wurde eine neue Ressource erstellt. Dies ist typischerweise die Antwort nach `POST`-Anfragen oder einigen `PUT`-Anfragen.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde erhalten, aber noch nicht bearbeitet.
    Es ist unverbindlich, da es keine Möglichkeit in HTTP gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage anzeigt.
    Es ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für Batchverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau die gleichen sind wie die vom Ursprungserver verfügbaren, sondern von einer lokalen oder einer Drittanbieter-Kopie gesammelt wurden.
    Dies wird hauptsächlich für Spiegel oder Backups einer anderen Ressource verwendet.
    Abgesehen von diesem speziellen Fall wird die Antwort `200 OK` gegenüber diesem Status bevorzugt.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt zu senden für diese Anfrage, aber die Header können nützlich sein.
    Der Benutzeragent kann seinen zwischengespeicherten Header dieser Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird verwendet, wenn der {{HTTPHeader("Range")}}-Header vom Client gesendet wird, um nur einen Teil einer Ressource anzufordern.
- {{HTTPStatus(207, "207 Multi-Status")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Vermittelt Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um die wiederholte Auflistung interner Mitglieder mehrerer Bindungen an dieselbe Sammlung zu vermeiden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine `GET`-Anfrage für die Ressource erfüllt und die Antwort ist eine Repräsentation des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Die Anfrage hat mehr als eine mögliche Antwort. Der Benutzeragent oder Benutzer sollte eine von ihnen auswählen. (Es gibt keine standardisierte Methode, um eine der Antworten auszuwählen, aber HTML-Links zu den Möglichkeiten werden empfohlen, damit der Benutzer auswählen kann.)
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen in der URI könnten in der Zukunft vorgenommen werden. Daher sollte dieselbe URI von dem Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client zu veranlassen, die angeforderte Ressource an einem anderen URI mit einer GET-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird zu Caching-Zwecken verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client weiterhin dieselbe zwischengespeicherte Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy aufgerufen werden muss.
    Aufgrund von Sicherheitsbedenken hinsichtlich der In-Band-Konfiguration eines Proxys wurde es veraltet.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet; er ist nur reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client zu veranlassen, die angeforderte Ressource an einem anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantiken wie der HTTP-Antwortcode `302 Found`, mit der Ausnahme, dass der Benutzeragent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage eine `POST`-Methode verwendet wurde, muss auch in der zweiten Anfrage eine `POST`-Methode verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource jetzt dauerhaft an einem anderen URI vorhanden ist, der durch den `Location:`-HTTP-Antwortheader angegeben wird.
    Dies hat die gleichen Semantiken wie der HTTP-Antwortcode `301 Moved Permanently`, mit der Ausnahme, dass der Benutzeragent die HTTP-Methode _nicht_ ändern darf: Wenn in der ersten Anfrage eine `POST`-Methode verwendet wurde, muss auch in der zweiten Anfrage eine `POST`-Methode verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann die Anfrage aufgrund einer wahrgenommenen Client-Fehlermeldung (z.B. fehlerhafte Anfragesyntax, ungültige Anfragenachrichteneinrahmung oder irreführende Anfrageroutung) nicht verarbeiten oder wird dies nicht tun.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" spezifiziert, bedeutet diese Antwort semantisch "unauthenticated".
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : Dieser Antwortcode ist für zukünftige Verwendung reserviert.
    Das ursprüngliche Ziel bei der Erstellung dieses Codes war die Verwendung für digitale Zahlungssysteme, jedoch wird dieser Statuscode sehr selten verwendet und es existiert keine standardisierte Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, daher verweigert der Server die Bereitstellung der angeforderten Ressource.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API bedeutet dies auch, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um das Vorhandensein einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die von dem Server bekannte Anfragemethode wird von der Zielressource nicht unterstützt.
    Beispielsweise kann eine API möglicherweise nicht `DELETE` aufrufen, um eine Ressource zu entfernen.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführen der [servergesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten gegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, jedoch muss die Authentifizierung durch einen Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird auf einer inaktiven Verbindung von einigen Servern gesendet, selbst ohne vorherige Anfrage durch den Client.
    Es bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird viel häufiger verwendet, da einige Browser wie Chrome, Firefox 27+ oder IE9 HTTP-Pre-Connection-Mechanismen verwenden, um das Surfen zu beschleunigen.
    Beachten Sie auch, dass einige Server lediglich die Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne dass eine Weiterleitungsadresse vorhanden ist.
    Clients sollten ihre Caches und Links zu der Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, werbliche Dienste" verwendet wird.
    APIs sollten sich nicht gezwungen fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode anzuzeigen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Server lehnte die Anfrage ab, weil das `Content-Length`-Headerfeld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Der Client hat Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : Die Anfrageeinheit ist größer als die vom Server festgelegten Grenzwerte.
    Der Server könnte die Verbindung schließen oder ein `Retry-After`-Headerfeld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Der im `Range`-Headerfeld der Anfrage angegebene Bereich kann nicht erfüllt werden.
    Es ist möglich, dass der Bereich die Größe der Daten der Ziel-URI überschreitet.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die vom `Expect`-Anfrageheaderfeld angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht für die Kombination aus Schema und Autorität konfiguriert ist, die in der Anforderungs-URI enthalten ist.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Die Anfrage war gut formatiert, konnte jedoch aufgrund von semantischen Fehlern nicht verfolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Die Anfrage schlug aufgrund eines Fehlers einer vorherigen Anfrage fehl.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Zeigt an, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die wiederholt werden könnte.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server lehnt es ab, die Anfrage mit dem aktuellen Protokoll auszuführen, könnte jedoch dazu bereit sein, nachdem der Client auf ein anderes Protokoll aktualisiert wurde.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das erforderliche Protokoll(e) anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage bedingt ist.
    Diese Antwort soll das Problem der "verlorenen Aktualisierung" vermeiden, bei dem ein Client den Zustand einer Ressource abruft (`GET`), ihn ändert und ihn (`PUT`) zurück zum Server sendet, währenddessen aber eine dritte Partei den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat in einem bestimmten Zeitraum zu viele Anfragen gesendet ("Ratenbegrenzung").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, da seine Headerfelder zu groß sind.
    Die Anfrage kann möglicherweise nach Reduzierung der Größe der Anfragetitel erneut gesendet werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die rechtlich nicht bereitgestellt werden kann, wie z.B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, die er nicht handhaben kann.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht verarbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind `GET` und `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlermeldung bedeutet, dass der Server, während er als Gateway arbeitet, um eine Antwort zur Verarbeitung der Anfrage zu erhalten, eine ungültige Antwort erhielt.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der für Wartungsarbeiten ausgefallen ist oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für temporäre Bedingungen verwendet werden, und der `Retry-After`-HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die mit dieser Antwort gesendeten cachebezogenen Header achten, da diese temporären Zustandsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlermeldung wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Die gewählte Variantenressource ist so konfiguriert, dass sie selbst eine transparente Inhaltsaushandlung durchführt, und ist daher kein ordnungsgemäßer Endpunkt im Aushandlungsprozess.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Die Methode konnte aufgrund unzureichender Speicherkapazität des Servers, um die Darstellung zur erfolgreichen Ausführung der Anfrage zu speichern, nicht auf die Ressource angewendet werden.
- {{HTTPStatus(508, "508 Loop Detected")}} ([WebDAV](/de/docs/Glossary/WebDAV))
  - : Der Server hat eine Endlosschleife während der Verarbeitung der Anfrage erkannt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Weitere Erweiterungen der Anfrage sind erforderlich, damit der Server sie erfüllen kann.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste von HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
