---
title: HTTP-Statuscodes
slug: Web/HTTP/Reference/Status
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

HTTP-Statuscodes geben an, ob eine bestimmte [HTTP](/de/docs/Web/HTTP)-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen eingeteilt:

1. [Informative Antworten](#informative_antworten) (`100` – `199`)
2. [Erfolgreiche Antworten](#erfolgreiche_antworten) (`200` – `299`)
3. [Umleitungsnachrichten](#umleitungsnachrichten) (`300` – `399`)
4. [Client-Fehlerantworten](#client-fehlerantworten) (`400` – `499`)
5. [Server-Fehlerantworten](#server-fehlerantworten) (`500` – `599`)

Die unten aufgeführten Statuscodes sind in [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes) definiert.

> [!NOTE]
> Wenn Sie eine Antwort erhalten, die hier nicht aufgeführt ist, handelt es sich um eine nicht standardisierte Antwort, möglicherweise spezifisch für die Software des Servers.

## Informative Antworten

- {{HTTPStatus(100, "100 Continue")}}
  - : Diese Zwischennachricht zeigt an, dass der Client die Anfrage fortsetzen oder die Antwort ignorieren sollte, wenn die Anfrage bereits abgeschlossen ist.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : Dieser Code wird als Antwort auf einen {{HTTPHeader("Upgrade")}}-Anfrageheader vom Client gesendet und zeigt das Protokoll an, zu dem der Server wechselt.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : Dieser Code wurde in {{Glossary("WebDAV", "WebDAV")}}-Kontexten verwendet, um anzuzeigen, dass eine Anfrage vom Server empfangen wurde, aber zum Zeitpunkt der Antwort kein Status verfügbar war.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : Dieser Statuscode ist hauptsächlich dafür vorgesehen, mit dem {{HTTPHeader("Link")}}-Header verwendet zu werden, damit der Benutzeragent Ressourcen [vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload) kann, während der Server eine Antwort vorbereitet, oder um zu einer Quelle [vorzubereiten](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect), von der die Seite Ressourcen benötigt.

## Erfolgreiche Antworten

- {{HTTPStatus(200, "200 OK")}}
  - : Die Anfrage war erfolgreich. Das Ergebnis und die Bedeutung von "Erfolg" hängen von der HTTP-Methode ab:
    - {{HTTPMethod("GET")}}: Die Ressource wurde abgerufen und im Nachrichtenrumpf übermittelt.
    - {{HTTPMethod("HEAD")}}: Repräsentations-Header sind in der Antwort enthalten, ohne Nachrichtenrumpf.
    - {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}}: Die Ressource, die das Ergebnis der Aktion beschreibt, wird im Nachrichtenrumpf übermittelt.
    - {{HTTPMethod("TRACE")}}: Der Nachrichtenrumpf enthält die Anfrage, wie sie vom Server empfangen wurde.
- {{HTTPStatus(201, "201 Created")}}
  - : Die Anfrage war erfolgreich und eine neue Ressource wurde als Ergebnis erstellt. Dies ist typischerweise die Antwort, die nach {{HTTPMethod("POST")}}-Anfragen gesendet wird, oder einige {{HTTPMethod("PUT")}}-Anfragen.
- {{HTTPStatus(202, "202 Accepted")}}
  - : Die Anfrage wurde empfangen, aber noch nicht bearbeitet.
    Es ist unverbindlich, da es im HTTP-Protokoll keine Möglichkeit gibt, später eine asynchrone Antwort zu senden, die das Ergebnis der Anfrage angibt.
    Sie ist für Fälle vorgesehen, in denen ein anderer Prozess oder Server die Anfrage verarbeitet, oder für die Stapelverarbeitung.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : Dieser Antwortcode bedeutet, dass die zurückgegebenen Metadaten nicht genau die gleichen sind wie diejenigen, die vom Ursprungsserver verfügbar sind, sondern von einer lokalen oder einer Drittanbieter-Kopie gesammelt wurden.
    Dies wird meist zur Spiegelung oder Sicherung einer anderen Ressource verwendet.
    Außer in diesem speziellen Fall wird die {{HTTPStatus(200, "200 OK")}}-Antwort diesem Status vorgezogen.
- {{HTTPStatus(204, "204 No Content")}}
  - : Es gibt keinen Inhalt, der für diese Anfrage gesendet werden könnte, aber die Header sind nützlich.
    Der Benutzeragent kann seine zwischengespeicherten Header für diese Ressource mit den neuen aktualisieren.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Weist den Benutzeragenten an, das Dokument zurückzusetzen, das diese Anfrage gesendet hat.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : Dieser Antwortcode wird als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Guides/Range_requests) verwendet, wenn der Client einen Teil oder Teile einer Ressource angefordert hat.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Übermittelt Informationen zu mehreren Ressourcen, für Situationen, in denen mehrere Statuscodes zutreffend sein könnten.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Wird innerhalb eines `<dav:propstat>`-Antwortelements verwendet, um zu vermeiden, die internen Mitglieder mehrerer Bindungen zu derselben Sammlung wiederholt aufzuzählen.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : Der Server hat eine {{HTTPMethod("GET")}}-Anfrage für die Ressource erfüllt und die Antwort ist eine Darstellung des Ergebnisses einer oder mehrerer Instanz-Manipulationen, die auf die aktuelle Instanz angewendet wurden.

## Umleitungsnachrichten

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : Bei der [agentengesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) hat die Anfrage mehr als eine mögliche Antwort und der Benutzeragent oder Benutzer sollte eine davon auswählen.
    Es gibt keine standardisierte Methode für Clients, automatisch eine der Antworten auszuwählen, daher wird dies selten verwendet.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : Die URL der angeforderten Ressource wurde dauerhaft geändert. Die neue URL wird in der Antwort angegeben.
- {{HTTPStatus(302, "302 Found")}}
  - : Dieser Antwortcode bedeutet, dass sich die URI der angeforderten Ressource _vorübergehend_ geändert hat.
    Weitere Änderungen an der URI könnten in der Zukunft vorgenommen werden, daher sollte die gleiche URI vom Client bei zukünftigen Anfragen verwendet werden.
- {{HTTPStatus(303, "303 See Other")}}
  - : Der Server hat diese Antwort gesendet, um den Client zu veranlassen, die angeforderte Ressource an einer anderen URI mit einer {{HTTPMethod("GET")}}-Anfrage abzurufen.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : Dies wird für Caching-Zwecke verwendet.
    Es teilt dem Client mit, dass die Antwort nicht modifiziert wurde, sodass der Client dieselbe zwischengespeicherte Version der Antwort weiter verwenden kann.
- `305 Use Proxy` {{deprecated_inline}}
  - : In einer früheren Version der HTTP-Spezifikation definiert, um anzuzeigen, dass auf eine angeforderte Antwort über einen Proxy zugegriffen werden muss.
    Es wurde aufgrund von Sicherheitsbedenken bezüglich der Konfiguration eines Proxy in-band veraltet.
- `306 unused`
  - : Dieser Antwortcode wird nicht mehr verwendet, ist aber reserviert. Er wurde in einer früheren Version der HTTP/1.1-Spezifikation verwendet.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : Der Server sendet diese Antwort, um den Client anzuweisen, die angeforderte Ressource an einer anderen URI mit derselben Methode abzurufen, die in der vorherigen Anfrage verwendet wurde.
    Dies hat die gleichen Semantik wie der Antwortcode `302 Found`, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anfrage eine {{HTTPMethod("POST")}} verwendet wurde, muss in der umgeleiteten Anfrage auch eine `POST` verwendet werden.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : Dies bedeutet, dass die Ressource nun dauerhaft an einer anderen URI befindet, die durch den {{HTTPHeader("Location")}}-Antwortheader angegeben wird.
    Dies hat die gleichen Semantik wie der HTTP-Antwortcode `301 Moved Permanently`, mit der Ausnahme, dass der Benutzeragent die verwendete HTTP-Methode _nicht ändern_ darf: Wenn in der ersten Anfrage eine {{HTTPMethod("POST")}} verwendet wurde, muss in der zweiten Anfrage auch eine `POST` verwendet werden.

## Client-Fehlerantworten

- {{HTTPStatus(400, "400 Bad Request")}}
  - : Der Server kann oder wird die Anfrage nicht aufgrund von etwas, das als Client-Fehler angesehen wird (z.B. fehlerhafte Anfragesyntax, ungültige Anfragennachricht-Rahmung oder täuschende Anfragenweiterleitung), verarbeiten.
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Obwohl der HTTP-Standard "unauthorized" spezifiziert, bedeutet diese Antwort semantisch "unauthenticated".
    Das heißt, der Client muss sich authentifizieren, um die angeforderte Antwort zu erhalten.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : Der ursprüngliche Zweck dieses Codes war für digitale Zahlungssysteme, jedoch wird dieser Statuscode selten verwendet und es gibt keine Standardkonvention.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : Der Client hat keine Zugriffsrechte für den Inhalt; das heißt, dass sie nicht autorisiert sind und der Server daher die angeforderte Ressource nicht bereitstellen wird.
    Im Gegensatz zu `401 Unauthorized` ist die Identität des Clients dem Server bekannt.
- {{HTTPStatus(404, "404 Not Found")}}
  - : Der Server kann die angeforderte Ressource nicht finden.
    Im Browser bedeutet das, dass die URL nicht erkannt wird.
    In einer API kann dies auch bedeuten, dass der Endpunkt gültig ist, aber die Ressource selbst nicht existiert.
    Server können diese Antwort auch anstelle von `403 Forbidden` senden, um das Vorhandensein einer Ressource vor einem nicht autorisierten Client zu verbergen.
    Dieser Antwortcode ist aufgrund seines häufigen Auftretens im Web wahrscheinlich der bekannteste.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : Die [Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) ist dem Server bekannt, wird jedoch von der Zielressource nicht unterstützt.
    Beispielsweise darf eine API `DELETE` auf einer Ressource nicht erlauben oder die `TRACE`-Methode insgesamt.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : Diese Antwort wird gesendet, wenn der Webserver nach Durchführung der [server-gesteuerten Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) keinen Inhalt findet, der den vom Benutzeragenten gegebenen Kriterien entspricht.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : Dies ist ähnlich wie `401 Unauthorized`, jedoch muss die Authentifizierung von einem Proxy durchgeführt werden.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : Diese Antwort wird von einigen Servern auf einer inaktiven Verbindung gesendet, selbst ohne vorherige Anfrage durch den Client.
    Es bedeutet, dass der Server diese ungenutzte Verbindung beenden möchte.
    Diese Antwort wird viel häufiger verwendet, da einige Browser HTTP-Vorverbindungsmechanismen verwenden, um das Browsen zu beschleunigen.
    Einige Server können eine Verbindung ohne das Senden dieser Nachricht beenden.
- {{HTTPStatus(409, "409 Conflict")}}
  - : Diese Antwort wird gesendet, wenn eine Anfrage mit dem aktuellen Zustand des Servers in Konflikt steht.
    Bei {{Glossary("WebDAV", "WebDAV")}} Remote-Web-Autoren sind `409`-Antworten Fehler, die an den Client gesendet werden, damit ein Benutzer möglicherweise einen Konflikt lösen und die Anfrage erneut senden kann.
- {{HTTPStatus(410, "410 Gone")}}
  - : Diese Antwort wird gesendet, wenn der angeforderte Inhalt dauerhaft vom Server gelöscht wurde, ohne eine Weiterleitungsadresse.
    Clients sollten ihre Caches und Links zur Ressource entfernen.
    Die HTTP-Spezifikation sieht vor, dass dieser Statuscode für "zeitlich begrenzte, werbende Dienste" verwendet wird.
    APIs sollten sich nicht verpflichtet fühlen, Ressourcen, die gelöscht wurden, mit diesem Statuscode anzugeben.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Der Server hat die Anfrage abgelehnt, da das {{HTTPHeader("Content-Length")}}-Header-Feld nicht definiert ist und der Server dies erfordert.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : Bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) hat der Client Vorbedingungen in seinen Headern angegeben, die der Server nicht erfüllt.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : Der Anfragerumpf ist größer als die vom Server festgelegten Grenzwerte.
    Der Server kann die Verbindung schließen oder ein {{HTTPHeader("Retry-After")}}-Headerfeld zurückgeben.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : Die vom Client angeforderte URI ist länger als der Server bereit ist zu interpretieren.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : Das Medienformat der angeforderten Daten wird vom Server nicht unterstützt, sodass der Server die Anfrage ablehnt.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : Die [Bereiche](/de/docs/Web/HTTP/Guides/Range_requests), die vom `Range`-Header-Feld in der Anfrage angegeben sind, können nicht erfüllt werden.
    Es ist möglich, dass der Bereich außerhalb der Größe der Zieldaten der Ressource liegt.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : Dieser Antwortcode bedeutet, dass die Erwartung, die durch das {{HTTPHeader("Expect")}}-Anfrageheaderfeld angegeben wird, vom Server nicht erfüllt werden kann.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : Der Server lehnt den Versuch ab, mit einer Teekanne Kaffee zu brühen.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : Die Anfrage wurde an einen Server gerichtet, der nicht in der Lage ist, eine Antwort zu erzeugen.
    Dies kann von einem Server gesendet werden, der nicht dafür konfiguriert ist, Antworten für die Kombination aus Schema und Autorität zu produzieren, die in der Anforderungs-URI enthalten sind.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage war gut geformt, konnte aber aufgrund semantischer Fehler nicht durchgeführt werden.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Ressource, auf die zugegriffen wird, ist gesperrt.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Anfrage ist aufgrund des Fehlers einer vorherigen Anfrage fehlgeschlagen.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Zeigt an, dass der Server nicht bereit ist, eine Anfrage zu verarbeiten, die möglicherweise wiederholt wird.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : Der Server verweigert die Ausführung der Anfrage mit dem aktuellen Protokoll, ist jedoch möglicherweise bereit, dies nach der Aktualisierung des Clients auf ein anderes Protokoll zu tun.
    Der Server sendet einen {{HTTPHeader("Upgrade")}}-Header in einer 426-Antwort, um das benötigte Protokoll anzuzeigen.
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : Der Ursprungsserver erfordert, dass die Anfrage [bedingungsgebunden](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.
    Diese Antwort soll das Problem des 'verlorenen Updates' verhindern, bei dem ein Client eine Ressource abfragt, ihren Zustand modifiziert und ihn dann zurück zum Server schickt, während mittlerweile eine dritte Partei den Zustand auf dem Server geändert hat, was zu einem Konflikt führt.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : Der Benutzer hat zu viele Anfragen in einer bestimmten Zeitspanne gesendet ({{Glossary("Rate_limit", "Ratenbegrenzung")}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten, da die Header-Felder zu groß sind.
    Die Anfrage kann nach der Reduzierung der Größe der Anfragen-Header-Felder erneut gesendet werden.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : Der Benutzeragent hat eine Ressource angefordert, die gesetzlich nicht bereitgestellt werden kann, wie z.B. eine von einer Regierung zensierte Webseite.

## Server-Fehlerantworten

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : Der Server ist auf eine Situation gestoßen, mit der er nicht umgehen kann.
    Dieser Fehler ist allgemein und zeigt an, dass der Server keinen passenderen `5XX`-Statuscode finden kann, um zu antworten.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : Die Anfragemethode wird vom Server nicht unterstützt und kann nicht bearbeitet werden. Die einzigen Methoden, die Server unterstützen müssen (und daher diesen Code nicht zurückgeben dürfen), sind {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : Diese Fehlerantwort bedeutet, dass der Server, obwohl er als Gateway fungiert und versucht, eine erforderliche Antwort zu erhalten, eine ungültige Antwort erhalten hat.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : Der Server ist nicht bereit, die Anfrage zu bearbeiten.
    Häufige Ursachen sind ein Server, der aufgrund von Wartungsarbeiten nicht betriebsbereit ist oder überlastet ist.
    Beachten Sie, dass zusammen mit dieser Antwort eine benutzerfreundliche Seite gesendet werden sollte, die das Problem erklärt.
    Diese Antwort sollte für vorübergehende Bedingungen verwendet werden und der {{HTTPHeader("Retry-After")}}-HTTP-Header sollte, wenn möglich, die geschätzte Zeit bis zur Wiederherstellung des Dienstes enthalten.
    Der Webmaster muss auch auf die gesendeten Cache-bezogenen Header achten, da diese temporären Bedingungsantworten in der Regel nicht zwischengespeichert werden sollten.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : Diese Fehlerantwort wird gegeben, wenn der Server als Gateway fungiert und keine rechtzeitige Antwort erhalten kann.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : Die in der Anfrage verwendete HTTP-Version wird vom Server nicht unterstützt.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : Der Server hat einen internen Konfigurationsfehler: Während der Inhaltsverhandlung ist die gewählte Variante so konfiguriert, dass sie selbst an der Inhaltsverhandlung teilnimmt, was zu zirkulären Referenzen bei der Erstellung von Antworten führt.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Die Methode konnte nicht auf der Ressource ausgeführt werden, weil der Server nicht in der Lage ist, die zur vollständigen Bearbeitung der Anfrage benötigte Darstellung zu speichern.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV", "WebDAV")}})
  - : Der Server hat eine Endlosschleife während der Verarbeitung der Anfrage entdeckt.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : Die Client-Anfrage deklariert eine HTTP-Erweiterung ({{RFC("2774")}}), die verwendet werden sollte, um die Anfrage zu verarbeiten, aber die Erweiterung wird nicht unterstützt.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Liste der HTTP-Statuscodes auf Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA offizielles Register der HTTP-Statuscodes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
