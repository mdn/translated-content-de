---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Status
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert:

1. [Informationsantworten](#informationsantworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgelisteten Statuscodes sind in [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die nicht auf [dieser Liste](#informationsantworten) steht, ist es eine nicht standardisierte Antwort, möglicherweise individuell für die Server-Software.

## Informationsantworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischenerantwortung zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}} Anfrageheader des Clients gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Dieser Code zeigt an, dass der Server die Anfrage erhalten hat und bearbeitet, aber noch keine Antwort verfügbar ist.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist in erster Linie dafür vorgesehen, mit dem {{HTTPHeader("Link")}} Header verwendet zu werden, um dem Benutzeragenten zu ermöglichen, Ressourcen [vorzuladen](/de/docs/Web/HTML/Attributes/rel/preload), während der Server eine Antwort vorbereitet oder eine [Vorverbindung](/de/docs/Web/HTML/Attributes/rel/preconnect) zu einer Herkunft hergestellt wird, von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}

  - : Die Anfrage war erfolgreich. Die genaue Bedeutung von "Erfolg" hängt von der HTTP-Methode ab:

    - `GET`: Die Ressource wurde abgerufen und im Nachrichtentext übertragen.
    - `HEAD`: Die Repräsentations-Header sind in der Antwort enthalten, ohne Nachrichtentext.
    - `PUT` oder `POST`: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtentext übertragen.
    - `TRACE`: Der Nachrichtentext enthält die Anfragenachricht, wie sie vom Server empfangen wurde.

- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich, und eine neue Ressource wurde infolgedessen erstellt. Dies ist typischerweise die Antwort, die nach `POST`-Anfragen oder einigen `PUT`-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es im HTTP keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage mitteilt.
    Sie ist für Fälle gedacht, in denen ein anderer Prozess oder Server die Anfrage bearbeitet, oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau identisch mit denen sind, die vom Ursprungsserver verfügbar sind, sondern aus einer lokalen oder Drittanbieter-Kopie gesammelt wurden.
    Dies wird hauptsächlich für Spiegel oder Backups einer anderen Ressource verwendet.
    Außer für diesen speziellen Fall wird die `200 OK`-Antwort gegenüber diesem Status bevorzugt.
- {{HTTPStatus(204, "204 No Content")}}
  - : Für diese Anfrage gibt es keinen Inhalt zu senden, aber die Header könnten nützlich sein.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Weist den Benutzeragenten an, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird verwendet, wenn der {{HTTPHeader("Range")}} Header vom Client gesendet wird, um nur einen Teil einer Ressource anzufordern.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen, für Situationen, in denen mehrere Statuscodes angemessen sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>` Antwortelements verwendet, um zu vermeiden, die internen Mitglieder mehrerer Bindungen an die gleiche Sammlung wiederholt aufzulisten.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine `GET`-Anfrage für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer instanzbasierter Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Die Anfrage hat mehr als eine mögliche Antwort. Der Benutzeragent oder der Benutzer sollte eine davon auswählen. (Es gibt keine standardisierte Methode zur Auswahl einer der Antworten, aber HTML-Links zu den Möglichkeiten werden empfohlen, damit der Benutzer wählen kann.)
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL ist in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass die URI der angeforderten Ressource _vorübergehend_ geändert wurde.
    Weitere Änderungen der URI könnten in der Zukunft erfolgen. Daher sollte derselbe URI vom Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client anzuweisen, die angeforderte Ressource an einer anderen URI mit einer GET-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client weiterhin die gleiche zwischengespeicherte Version der Antwort verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : Definiert in einer früheren Version der HTTP-Spezifikation, um anzuzeigen, dass eine angeforderte Antwort über einen Proxy abgerufen werden muss.
    Aufgrund von Sicherheitsbedenken bezüglich der In-Band-Konfiguration eines Proxys wurde sie veraltet.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet; er ist nur reserviert. In einer früheren Version der HTTP/1.1-Spezifikation wurde er verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client zu veranlassen, die angeforderte Ressource an einer anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat dieselben Semantiken wie der `302 Found` HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die verwendete HTTP-Methode ändern darf: Wenn in der ersten Anfrage `POST` verwendet wurde, muss in der zweiten Anfrage `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource jetzt dauerhaft an einer anderen URI befindet, die durch den `Location:` HTTP-Antwortheader angegeben wird.
    Dies hat dieselben Semantiken wie der `301 Moved Permanently` HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent _nicht_ die verwendete HTTP-Methode ändern darf: Wenn in der ersten Anfrage `POST` verwendet wurde, muss in der zweiten Anfrage `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann die Anfrage aufgrund eines als Client-Fehler wahrgenommenen Problems nicht verarbeiten (z. B. verkürzte Anforderungssyntax, ungültige Anforderungsnachrichtenformatierung oder irreführendes Anforderungsrouting).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" angibt, bedeutet diese Antwort semantisch "unauthenticated".
    Das bedeutet, dass der Client sich authentifizieren muss, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}} {{experimental_inline}}
  - : Dieser Antwortcode ist für die zukünftige Verwendung reserviert.
    Das ursprüngliche Ziel der Erstellung dieses Codes war die Verwendung für digitale Zahlungssysteme, jedoch wird dieser Statuscode sehr selten verwendet und es gibt keine Standardkonvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht autorisiert, daher verweigert der Server die Bereitstellung der angeforderten Ressource.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste, da er häufig im Web auftritt.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die Anfragemethode ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Zum Beispiel könnte eine API es nicht zulassen, dass `DELETE` zum Entfernen einer Ressource aufgerufen wird.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach dem Durchführen der [durch den Server gesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten vorgegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich zu `401 Unauthorized`, aber die Authentifizierung muss über einen Proxy erfolgen.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird auf einer inaktiven Verbindung von einigen Servern gesendet, selbst ohne vorherige Anforderung durch den Client.
    Das bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird weitaus mehr verwendet, seit einige Browser, wie Chrome, Firefox 27+ oder IE9, HTTP-Vorverbindungsmechanismen verwenden, um das Surfen zu beschleunigen.
    Beachten Sie auch, dass einige Server die Verbindung lediglich schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Weiterleitungsadresse.
    Es wird erwartet, dass Clients ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, diesen Statuscode für "Dienste mit begrenzter Verfügbarkeit oder Promotionen" zu verwenden.
    APIs sollten sich jedoch nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode zu kennzeichnen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, weil das `Content-Length` Header-Feld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Der Client hat Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Payload Too Large")}}
  - : Die Anforderungseinheit ist größer als die vom Server definierten Grenzen.
    Der Server könnte die Verbindung schließen oder ein `Retry-After` Header-Feld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, daher lehnt der Server die Anfrage ab.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Der vom `Range` Header-Feld in der Anfrage angegebene Bereich kann nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Daten der Ziel-URI liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die durch das `Expect`-Header-Feld in der Anfrage angegebene Erwartung vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, mit einer Teekanne Kaffee zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht so konfiguriert ist, Antworten für die Kombination aus Schema und Autorität zu erzeugen, die in der Anfrage-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war gut geformt, konnte jedoch aufgrund von semantischen Fehlern nicht befolgt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlschlags einer vorherigen Anforderung fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Weist darauf hin, dass der Server nicht bereit ist, das Risiko einzugehen, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server weigert sich, die Anfrage mit dem aktuellen Protokoll auszuführen, ist jedoch möglicherweise bereit, dies nach einem Upgrade des Clients auf ein anderes Protokoll zu tun.
    Der Server sendet einen {{HTTPHeader("Upgrade")}} Header in einer 426-Antwort, um das erforderliche Protokoll(e) anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver verlangt, dass die Anfrage bedingt ist.
    Diese Antwort soll das Problem der 'verlorene Aktualisierung' verhindern, bei dem ein Client den Zustand einer Ressource abruft, diesen verändert und ihn an den Server zurücksetzt, währenddessen eine Drittpartei den Zustand auf dem Server verändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einem bestimmten Zeitraum gesendet ("Ratenbegrenzung").
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil ihre Header-Felder zu groß sind.
    Die Anfrage kann nach einer Verkleinerung der Größe der Anforderungs-Headerfelder erneut gesendet werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie z. B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, mit der er nicht umgehen kann.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht ausgeführt werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind `GET` und `HEAD`.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, obwohl er als Gateway funktioniert, um eine Antwort zu erhalten, die zur Bearbeitung der Anfrage benötigt wird, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der wegen Wartungsarbeiten deaktiviert ist oder überlastet ist.
    Beachten Sie, dass mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der `Retry-After` HTTP-Header sollte, falls möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die zwischenspeicherbezogenen Header achten, die mit dieser Antwort gesendet werden, da diese vorübergehenden Zustandsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und innerhalb der Zeit keine Antwort erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die im Request verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Die gewählte Variantenressource ist so konfiguriert, dass sie selbst eine transparente Inhaltsverhandlung durchführt, und ist daher kein geeigneter Endpunkt im Verhandlungsprozess.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht auf die Ressource angewendet werden, da der Server nicht in der Lage ist, die Darstellung zu speichern, die erforderlich ist, um die Anfrage erfolgreich abzuschließen.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife beim Verarbeiten der Anfrage entdeckt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Weitere Erweiterungen der Anfrage sind erforderlich, damit der Server sie erfüllen kann.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Dies bedeutet, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste von HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [Offizielles IANA-Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
