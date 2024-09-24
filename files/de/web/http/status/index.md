---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Status
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP-Antwortstatuscodes geben an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Die Antworten sind in fünf Klassen gruppiert:

1. [Informationelle Antworten](#informationelle_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die nicht in [dieser Liste](#informationelle_antworten) enthalten ist, handelt es sich um eine nicht standardmäßige Antwort, die möglicherweise spezifisch für die Software des Servers ist.

## Informationelle Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese vorläufige Antwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anforderungsheader vom Client gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV")}})
  - : Dieser Code zeigt an, dass der Server die Anfrage erhalten hat und verarbeitet, aber noch keine Antwort verfügbar ist.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich zum Einsatz mit dem {{HTTPHeader("Link")}}-Header gedacht, sodass der Benutzeragent beginnen kann, Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), während der Server eine Antwort vorbereitet oder eine [Vorverbindung](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einer Quelle aufbaut, von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Die Bedeutung von "Erfolg" hängt von der HTTP-Methode ab:

    - `GET`: Die Ressource wurde abgerufen und im Nachrichtenkörper übertragen.
    - `HEAD`: Die Darstellungskopfzeilen sind in der Antwort enthalten, jedoch ohne Nachrichtenkörper.
    - `PUT` oder `POST`: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenkörper übertragen.
    - `TRACE`: Der Nachrichtenkörper enthält die Anfordernachricht, wie sie vom Server empfangen wurde.

- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und als Ergebnis wurde eine neue Ressource erstellt. Dies wird typischerweise als Antwort auf `POST`-Anfragen oder einige `PUT`-Anfragen gesendet.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde erhalten, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es keinen Weg gibt, eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage anzeigt.
    Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet oder für Batch-Verarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht exakt die gleichen sind wie die, die vom Ursprungsserver verfügbar sind, sondern von einer lokalen oder einer Drittkopie stammen.
    Er wird hauptsächlich für Spiegelungen oder Backups einer anderen Ressource verwendet.
    Abgesehen von diesem spezifischen Fall wird die `200 OK`-Antwort diesem Status vorgezogen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt, der für diese Anfrage gesendet werden soll, aber die Header könnten nützlich sein.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument, das diese Anfrage gesendet hat, zurückzusetzen.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird verwendet, wenn der {{HTTPHeader("Range")}}-Header vom Client gesendet wird, um nur einen Teil einer Ressource anzufordern.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, dass die internen Mitglieder mehrerer Bindungen an dieselbe Sammlung wiederholt aufgezählt werden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine `GET`-Anfrage nach der Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Die Anfrage hat mehr als eine mögliche Antwort. Der Benutzeragent oder Benutzer sollte eine auswählen. (Es gibt keinen standardisierten Weg, eine der Antworten auszuwählen, aber HTML-Links zu den Möglichkeiten werden empfohlen, damit der Benutzer eine auswählen kann.)
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen an der URI könnten in der Zukunft erfolgen. Daher sollte diese gleiche URI vom Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client dazu aufzufordern, die angeforderte Ressource an einer anderen URI mit einer GET-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client die gleiche zwischengespeicherte Version der Antwort weiterhin verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : Definiert in einer früheren Version der HTTP-Spezifikation, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy abgerufen werden muss.
    Es wurde aus Sicherheitsgründen bezüglich der inband-Konfiguration eines Proxys als veraltet markiert.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet; er ist nur reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client dazu aufzufordern, die angeforderte Ressource an einer anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleiche Semantik wie der `302 Found`-HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _die HTTP-Methode nicht ändern darf_: Wenn ein `POST` in der ersten Anfrage verwendet wurde, muss ein `POST` in der zweiten Anfrage verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource nun dauerhaft an einer anderen URI zu finden ist, die im `Location:`-HTTP-Antwortheader angegeben ist.
    Dies hat die gleiche Semantik wie der `301 Moved Permanently`-HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _die HTTP-Methode nicht ändern darf_: Wenn ein `POST` in der ersten Anfrage verwendet wurde, muss ein `POST` in der zweiten Anfrage verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder will die Anfrage aufgrund von etwas nicht verarbeiten, das als Client-Fehler angesehen wird (z. B. fehlerhafte Anfragesyntax, ungültige Anfragenachrichtenrahmen oder irreführende Anforderungsweiterleitung).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" angibt, bedeutet diese Antwort semantisch "unauthenticated".
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : Dieser Antwortcode ist für zukünftige Verwendung reserviert.
    Das ursprüngliche Ziel für die Erstellung dieses Codes war die Verwendung für digitale Zahlungssysteme, jedoch wird dieser Statuscode sehr selten verwendet und es gibt keine standardmäßige Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, es ist nicht autorisiert, und der Server lehnt es ab, die angeforderte Ressource zu liefern.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die Anfragemethode ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Ein API könnte zum Beispiel nicht zulassen, dass `DELETE` zum Entfernen einer Ressource aufgerufen wird.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach dem Durchführen einer [servergesteuerten Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten angegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Diese ist ähnlich wie `401 Unauthorized`, aber die Authentifizierung muss von einem Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern auf einer inaktiven Verbindung gesendet, auch ohne vorherige Anfrage durch den Client.
    Es bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird viel häufiger verwendet, da einige Browser, wie Chrome, Firefox 27+ oder IE9, HTTP-Vorverbindungsmechanismen verwenden, um das Surfen zu beschleunigen.
    Beachten Sie auch, dass einige Server einfach die Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt gerät.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde und keine Weiterleitungsadresse vorliegt.
    Es wird erwartet, dass Clients ihre Caches und Links zu der Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, Promotion-Dienste" verwendet wird.
    APIs sollten sich nicht gezwungen fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode zu kennzeichnen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, da das `Content-Length`-Headerfeld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Der Client hat Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : Die Anforderungseinheit ist größer als die vom Server festgelegten Grenzen.
    Der Server könnte die Verbindung schließen oder ein `Retry-After`-Headerfeld zurücksenden.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server zu interpretieren bereit ist.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, sodass der Server die Anfrage ablehnt.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Der vom `Range`-Headerfeld in der Anfrage spezifizierte Bereich kann nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Daten der Ziel-URI liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das `Expect`-Anforderungsheaderfeld angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erstellen.
    Dies kann von einem Server gesendet werden, der nicht für die Erstellung von Antworten für die Kombination aus Schema und Autorität konfiguriert ist, die in der Anforderungs-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte jedoch aufgrund semantischer Fehler nicht bearbeitet werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlschlags einer vorherigen Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Bedeutet, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server lehnt es ab, die Anfrage mit dem aktuellen Protokoll auszuführen, könnte jedoch bereit sein, dies zu tun, nachdem der Client auf ein anderes Protokoll aktualisiert hat.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das erforderliche(n) Protokoll(e) anzuzeigen.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage bedingt ist.
    Diese Antwort ist vorgesehen, um das 'Lost Update'-Problem zu verhindern, bei dem ein Client den Zustand einer Ressource `GET`t, sie modifiziert und sie `PUT`t, während ein Dritter den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ("Rate Limiting").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, da die Headerfelder zu groß sind.
    Die Anfrage kann nach Reduzierung der Größe der Anforderungsheaderfelder erneut gesendet werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie z. B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, mit der er nicht umgehen kann.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht verarbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind `GET` und `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlermeldung bedeutet, dass der Server, während er als Gateway arbeitete, um eine Antwort zu erhalten, die zum Bearbeiten der Anfrage benötigt wurde, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der wegen Wartungsarbeiten heruntergefahren ist oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für temporäre Bedingungen verwendet werden und der `Retry-After` HTTP-Header sollte, wenn möglich, die geschätzte Zeit enthalten, bevor der Service wiederhergestellt ist.
    Der Webmaster sollte auch auf die caching-bezogenen Header achten, die zusammen mit dieser Antwort gesendet werden, da diese temporären Bedingungsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlermeldung wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Die gewählte Variantenressource ist so konfiguriert, dass sie sich selbst an einer transparenten Inhaltsaushandlung beteiligt, und ist daher kein geeigneter Endpunkt im Verhandlungsprozess.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV")}})
  - : Die Methode konnte nicht für die Ressource ausgeführt werden, da der Server nicht in der Lage ist, die Darstellung zu speichern, die benötigt wird, um die Anfrage erfolgreich abzuschließen.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : Der Server hat eine Endlosschleife beim Verarbeiten der Anfrage entdeckt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Weitere Erweiterungen der Anfrage sind erforderlich, damit der Server sie erfüllen kann.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugang zu erhalten.

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Offizielles Register der HTTP-Statuscodes der IANA](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
