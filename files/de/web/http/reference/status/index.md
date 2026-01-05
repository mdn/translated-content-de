---
title: HTTP-Antwortstatuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: cd8ed9bfa89d5ced4fd6c2083d7d90bcda41e441
---

HTTP-Antwortstatuscodes zeigen an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen unterteilt:

1. [Informationelle Antworten](#informationelle_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind durch [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgeführt ist, handelt es sich um eine nicht standardmäßige Antwort, möglicherweise benutzerdefiniert für die Serversoftware.

## Informationelle Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischenantwort zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren soll, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anforderungsheader vom Client gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich zur Verwendung mit dem {{HTTPHeader("Link")}}-Header vorgesehen, um dem Benutzeragenten zu ermöglichen, Ressourcen zu [vorzuladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload), während der Server eine Antwort vorbereitet, oder eine [Vorverbindung](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) zu einem Ursprung herzustellen, von dem die Seite Ressourcen benötigen wird.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtenrumpf übertragen.
    - {{HTTPMethod("HEAD")}}: Repräsentationsheader sind in der Antwort ohne Nachrichtenrumpf enthalten.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenrumpf übertragen.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtenrumpf enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und infolgedessen wurde eine neue Ressource erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen oder einigen {{HTTPMethod("PUT")}}-Anfragen gesendet wird.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Sie ist unverbindlich, da es im HTTP kein Mittel gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage anzeigt.
    Sie ist für Fälle vorgesehen, in denen ein anderer Prozess oder Server die Anfrage bearbeitet, oder für Batch-Verarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau die gleichen sind wie die, die vom Ursprungsserver erhältlich sind, sondern von einer lokalen oder einer Drittanbieter-Kopie gesammelt wurden.
    Dies wird hauptsächlich für Spiegelungen oder Backups einer anderen Ressource verwendet.
    Mit Ausnahme dieses spezifischen Falls wird die {{HTTPStatus(200, "200 OK")}}-Antwort gegenüber diesem Status bevorzugt.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt, der für diese Anfrage gesendet werden soll, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Fordert den Benutzeragenten auf, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client eine Teil- oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen über mehrere Ressourcen für Situationen, in denen mehrere Statuscodes angebracht sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, dass die internen Mitglieder mehrerer Bindungen an dieselbe Sammlung wiederholt aufgezählt werden.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt, und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [agent-driven content negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort und der Benutzeragent oder Benutzer sollte eine davon auswählen.
    Es gibt keinen standardisierten Weg, wie Clients automatisch eine der Antworten auswählen können. Deshalb wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass sich der URI der angeforderten Ressource _vorübergehend_ geändert hat.
    Weitere Änderungen des URI könnten in der Zukunft vorgenommen werden, daher sollte derselbe URI von Client in zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client anzuweisen, die angeforderte Ressource an einem anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht geändert wurde, sodass der Client die gleiche [zwischengespeicherte](/de/docs/Web/HTTP/Guides/Caching) Version der Antwort weiter verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass auf die angeforderte Antwort über einen Proxy zugegriffen werden muss.
    Er wurde aus Sicherheitsgründen im Zusammenhang mit der Banden-Konfiguration eines Proxys abgelehnt.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource an einem anderen URI mit demselben Verfahren abzurufen, das in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantiken wie der `302 Found`-Antwortcode, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet wurde, muss in der umgeleiteten Anfrage ein `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass sich die Ressource jetzt dauerhaft an einem anderen URI befindet, der im {{HTTPHeader("Location")}}-Antwortheader angegeben wird.
    Dies hat die gleichen Semantiken wie der `301 Moved Permanently`-HTTP-Antwortcode, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anfrage ein {{HTTPMethod("POST")}} verwendet wurde, muss in der zweiten Anfrage ein `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder wird die Anfrage aufgrund eines wahrgenommenen Clientfehlers nicht bearbeiten (z. B. fehlerhafte Anfrage-Syntax, ungültige Anframenachrichtrahmung oder betrügerische Anforderungsleitung).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" (nicht autorisiert) angibt, bedeutet diese Antwort semantisch "unauthenticated" (nicht authentifiziert).
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Bezahlsysteme, jedoch wird dieser Statuscode selten verwendet und es gibt keine standardmäßige Konvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte auf den Inhalt; das heißt, er ist nicht authorisiert, sodass der Server die angeforderte Ressource verweigert.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet dies, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können auch diese Antwort anstelle von `403 Forbidden` senden, um die Existenz einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist wahrscheinlich der bekannteste aufgrund seines häufigen Auftretens im Web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Beispielsweise kann eine API `DELETE` für eine Ressource oder die `TRACE`-Methode insgesamt nicht zulassen.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung der [servergesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den Kriterien entspricht, die vom Benutzeragenten angegeben wurden.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, jedoch muss die Authentifizierung durch einen Proxy erfolgen.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern auf einer inaktiven Verbindung gesendet, selbst ohne vorherige Anfrage durch den Client.
    Das bedeutet, dass der Server diese ungenutzte Verbindung schließen möchte.
    Diese Antwort wird seit einiger Zeit häufiger verwendet, da einige Browser HTTP-Vorverbindungsmechanismen nutzen, um das Surfen zu beschleunigen.
    Einige Server können eine Verbindung schließen, ohne diese Nachricht zu senden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Status des Servers in Konflikt steht.
    Bei {{Glossary("WebDAV", "WebDAV")}}-Remote-Web-Autorisierung sind `409`-Antworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise einen Konflikt lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne Weiterleitungsadresse.
    Clients sollten ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte Promotion-Services" verwendet wird.
    APIs sollten sich nicht gezwungen fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode zu kennzeichnen.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Server lehnt die Anfrage ab, weil das {{HTTPHeader("Content-Length")}}-Headerfeld nicht definiert ist und der Server es benötigt.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Rumpf der Anfrage ist größer als die vom Server festgelegten Grenzen.
    Der Server könnte die Verbindung schließen oder einen {{HTTPHeader("Retry-After")}}-Header-Feld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger, als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, sodass der Server die Anfrage ablehnt.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests), die durch das `Range`-Headerfeld in der Anfrage angegeben werden, können nicht erfüllt werden.
    Möglicherweise liegt der Bereich außerhalb der Größe der Daten der Zielressource.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die Erwartung, die durch das {{HTTPHeader("Expect")}}-Anforderungsheaderfeld angezeigt wird, vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, Kaffee mit einer Teekanne zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann.
    Dies kann von einem Server gesendet werden, der nicht konfiguriert ist, Antworten für die Kombination aus Schema und Autorität zu erzeugen, die in der Anforderungs-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war wohlgeformt, konnte aber aufgrund semantischer Fehler nicht durchgeführt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage schlug aufgrund eines Fehlers einer vorherigen Anfrage fehl.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Gibt an, dass der Server nicht bereit ist, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server lehnt es ab, die Anfrage mit dem aktuellen Protokoll auszuführen, könnte dies jedoch tun, nachdem der Client auf ein anderes Protokoll aktualisiert hat.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das erforderliche(n) Protokoll(e) anzugeben.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver fordert, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das Problem des "verlorenen Updates" verhindern, bei dem ein Client den Status einer Ressource {{HTTPMethod("GET")}}t, ihn modifiziert und {{HTTPMethod("PUT")}}t, während eine dritte Partei den Status auf dem Server zwischenzeitlich geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einer bestimmten Zeit gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil die Headerfelder zu groß sind.
    Die Anfrage kann nach Reduzierung der Größe der Anforderungsheaderfelder erneut eingereicht werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die aus rechtlichen Gründen nicht bereitgestellt werden kann, wie beispielsweise eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server hat eine Situation festgestellt, die er nicht handhaben kann.
    Dieser Fehler ist generisch, was darauf hinweist, dass der Server keinen passenderen `5XX`-Statuscode zur Antwortfindung finden kann.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die von Servern unterstützt werden müssen (und daher diesen Code nicht zurückgeben sollten), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, während er als Gateway arbeitete, um eine Antwort zu erhalten, die zur Bearbeitung der Anfrage erforderlich ist, eine ungültige Antwort erhielt.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der für Wartungen heruntergefahren wurde oder überlastet ist.
    Beachten Sie, dass mit dieser Antwort zusammen eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erläutert.
    Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die mit dieser Antwort gesendeten Cache-bezogenen Header achten, da diese vorübergehenden Bedingungsantworten normalerweise nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und keine Antwort rechtzeitig erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsverhandlung ist die gewählte Variante so konfiguriert, dass sie selbst an der Inhaltsverhandlung beteiligt ist, was zu zirkulären Referenzen bei der Erstellung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht auf der Ressource ausgeführt werden, weil der Server nicht in der Lage ist, die für die erfolgreiche Durchführung der Anfrage erforderliche Darstellung zu speichern.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife während der Bearbeitung der Anfrage entdeckt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Client-Anfrage erklärt eine HTTP-Erweiterung ({{RFC("2774")}}), die zur Bearbeitung der Anfrage verwendet werden soll, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugang zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
