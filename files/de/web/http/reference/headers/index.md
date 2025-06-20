---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln. In HTTP/1.X besteht ein Header aus einem nicht zwischen Groß- und Kleinschreibung unterscheidenden Namen, gefolgt von einem Doppelpunkt, dann optionalem Leerzeichen, das ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in den Entwickler-Tools betrachtet werden (`accept: */*`) und sind für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 wegen der Unannehmlichkeiten, die es verursachte, wenn nicht standardmäßige Felder standardisiert wurden, gemäß [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) aufgehoben; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen Originalinhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anforderungs-Header")}}
  - : Enthält weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Beinhaltet zusätzliche Informationen über die Antwort, wie deren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthält Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Beinhaltet darstellungsunabhängige Informationen über Payload-Daten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenproxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung von Bedeutung und _dürfen nicht_ von Proxys weitergeleitet oder gecacht werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{HTTPHeader("Connection")}} Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Zugangsdaten zur Authentifizierung eines Benutzeragenten mit einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Zugangsdaten zur Authentifizierung eines Benutzeragenten bei einem Proxy-Server.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen sowohl in Anfragen als auch in Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach dem die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt sicher, dass ein neues Fragment eines bestimmten Bereichs mit vorherigen kohärent ist oder ein optimistisches Konkurrenzkontrollsystem implementiert wird, wenn bestehende Dokumente geändert werden.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue Anfrage an den Ursprungsserver zu senden.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsverhandlung

Weitere Details finden Sie im [Inhaltsverhandlungsartikel](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt möglicherweise nicht vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, die explizite Wahl des Benutzers (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhaltverhandlungs_-Antwort-Header, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhaltverhandlungs_-Antwort-Header, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage korrekt zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Wenn [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) verwendet wird, gibt an, wie viele Hops die Anfrage durchführen kann, bevor sie an den Absender zurückgesendet wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage angezeigt werden kann, wenn das Anmeldeinformations-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort angezeigt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache gespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei Ausgabe einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Ausgeben einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialogfenster anzeigen soll.

## Integritätsprüfungen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Gibt einen {{Glossary("hash_function", "Digest")}} des stream von Oktette, die in einer HTTP-Nachricht eingerahmt sind (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} an.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Gibt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung an. Anders als der {{HTTPHeader("Content-Digest")}}, berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an. Es ist das `Content-` Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an. Es ist das `Repr-` Analogon zu {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschlichen Sprache(n), die für das Publikum gedacht sind, sodass ein Benutzer gemäß den eigenen bevorzugten Sprachen des Benutzers unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben. Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, in Fällen, in denen dies für den Client ansonsten unklar wäre. Browser haben keine native Unterstützung für das Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementationsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten bei der Anfrageverarbeitung an. Zum Beispiel kann es minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, falls der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche Präferenzen, die im `Prefer`-Header angegeben wurden, vom Server angewendet wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzverarbeitung bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die bei Beteiligung eines Proxy auf dem Pfad der Anfrage verändert oder verloren gehen.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl von Forward- als auch von Reverse-Proxys, und kann sowohl in den Anforderungs- als auch in den Antwort-Headern erscheinen.

## Bereich-Anfragen

HTTP-[Bereich-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) erlauben es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereich-Anfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, für Datentools, die nur einen Teil einer großen Datei benötigen, und für Download-Manager, die es dem Benutzer ermöglichen, einen Download anzuhalten und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereich-Anfragen unterstützt, und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereich-Anfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um den Download von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht der Nachrichtenausschnitt hingehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, auf die eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Anweisung an den Browser, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Hat den gleichen Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzeragenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für Virtual Hosting) und (optional) die TCP-Portnummer an, auf der der Server hört.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur derzeit angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-Benutzeragenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort auf die Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzeragent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, aber nicht durchsetzen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung der [Zertifikat-Transparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung fehlvergebener Zertifikate für die Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der Website-Besitzern erlaubt, einen oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt, und dass es erfolgreich mit der {{CSP("upgrade-insecure-requests")}}-Richtlinie umgehen kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderen), die Handhabung von Daten über Domains hinweg erlauben, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Policy-Dateien, sodass Clients immer noch unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über sie, während sie für die Anwendung oder ihre Besucher keine Nützlichkeit bieten. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Cross-Site-Scripting-Filtering.

### Fetch-Metadaten-Anforderungs-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um zu entscheiden, ob eine Anfrage erlaubt werden soll, basierend darauf, woher die Anfrage stammt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsinitiator einer Anfrage und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token ist, mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token ist, mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein boolescher Wert ist, sodass die möglichen Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token ist, mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt`.

Die folgenden Anforderungs-Header sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungs-Header", liefern jedoch ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu modifizieren oder die Informationen zu ändern, die zurückgegeben werden:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die sofortige Verwendung durch den Benutzeragenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in präemptiven Anfragen gesendet wird, um eine Ressource während des Service-Arbeiter-Starts zu [`fetch()`](/de/docs/Web/API/Window/fetch). Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource als in einem normalen `fetch()`-Vorgang zurückgegeben werden sollte.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transfercodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzeragent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, zusätzliche Felder am Ende einer chunked-Nachricht einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an. In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der verifiziert, dass der Client explizit beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an. In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an. In Antworten wird er nur gesendet, wenn das angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege anzugeben, diesen Service zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Service zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entitäts-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten sollte, bevor eine Folgeanfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-/Antwortzyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Fetches für eine Service-Arbeiter-Skriptressource eingeschlossen. Dieser Header hilft Administratoren, Service-Arbeiter-Skriptanfragen für Überwachungszwecke zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem er in der [Antwort des Service-Arbeiter-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einem {{Glossary("source_map", "Source Map")}}, damit Debugger durch den Original-Quellcode anstelle von generiertem oder transformiertem Code schalten können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits bestehende Client-/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket aufzurüsten.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung. Der Wert kann in einer Anfrage gesendet werden, um die Clientpriorität anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage zu repriorisieren.

## Experimentelle Header

### Attributionsberichte-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Conversions zu messen – zum Beispiel, wenn ein Benutzer auf eine Werbung klickt, die auf einer Seite eingebettet ist und dann auf der Website des Anbieters den Artikel kauft – und dann Berichte über diese Conversions zu erhalten. Dies geschieht, ohne sich auf Cookies von Drittanbietern zu verlassen, sondern indem verschiedene Header verwendet werden, um **Quellen** und **Auslöser** zu registrieren, die übereinstimmen, um eine Conversion anzuzeigen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage für die Teilnahme an der Attributionsberichterstattung geeignet ist, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um eine Attributionsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um einen Attribution-AUSLÖSER zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungs-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, zu optimieren, was für diese Bedingungen bereitgestellt wird.

Server fragen proaktiv die Client-Hinweis-Header an, die sie vom Client interessieren, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise mit dem `Accept-CH`-Headerfeld oder einem äquivalenten HTML-`<meta>`-Element mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut ankündigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzeragent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungs-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und die Benutzervorlieben, die auf dem Benutzeragenten oder der Plattform gesetzt wurden, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformationen des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Architekturbitrate der CPU des Benutzeragenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt, allgemein gesagt, eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzeragenten-Binärprogramm im 32-Bit-Modus auf einem 64-Bit-Windows ausgeführt wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Content-Layout-Verschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungs-Header, der die Präferenz des Benutzeragenten für reduzierte Transparenz angibt.

> [!NOTE]
> Benutzeragent-Client-Hinweise sind innerhalb von [gehegten Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie von der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation abhängen, die dazu verwendet werden könnte, Daten zu lecken.

#### Geräteclient-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der bestätigt, dass das Gerät Bildpixelverhältnis (DPR) in Anfragen verwendet hat, bei denen der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefährer verfügbare RAM-Arbeitsspeicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Gerätepixelverhältnis des Clients angibt (die Anzahl der physischen {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die gewünschte Ressourcenbreite in physischen Pixeln (die intrinsische Größe eines Bildes) an.

#### Netzwerkclient-Hinweise

Netzwerkclient-Hinweise erlauben einem Server, zu entscheiden, welche Informationen gesendet werden sollen, basierend auf der Wahl und Netzwerkbandbreite und -latenz des Benutzers.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefährer Bandbreite der Verbindung des Clients zum Server, in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerk-Profil"), das am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsrundreisezeit (RTT) in Millisekunden, die auch die Serververarbeitungszeit umfasst. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenkette `on`, die die Präferenz des Benutzeragenten für reduzierten Datenverbrauch anzeigt.

### Kompressionswörterbuch-Transport

[Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Methode, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das Standard-Statik-Wörterbuch in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungsheader verwenden, um das beste Wörterbuch anzugeben, das er für den Server zur Verwendung der Kompression verfügbar hat.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat, und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitgestellt hat. Anfragen nach Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte Wörterbuch-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die übereinstimmenden Kriterien auf, für die das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Tracking-Präferenz des Benutzers (Do Not Track) angibt. Abgelehnt zugunsten der Global Privacy Control (GPC), die Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-gebundenen [Agentencluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll. Diese Isolation ermöglicht es den Benutzeragenten, implementierungsspezifische Ressourcen für Agentencluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichterstattungspolitik zu deklarieren.

### Themen-API

Die Themen-API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren. Weitere Informationen finden Sie in der [Themen-API](/de/docs/Web/API/Topics_API)-Dokumentation.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL der aufgerufenen Seite abgeleitet wurden, die als Reaktion auf eine durch eine [Funktion, die die Themen-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), erzeugte Anfrage beobachtet wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet und von einer Adtech-Plattform verwendet wird, um eine personalisierte Anzeige zur Anzeige auszuwählen.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Headerfeld senden, um die Absicht anzugeben, alle verfügbaren Signaturen zu nutzen und anzugeben, welche Arten von Signaturen es unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Vordaten übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, das heißt, ob auf dem aktuellen Browser Benutzer beim IdP angemeldet sind oder nicht. Diese werden vom Browser gespeichert und über die [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Headerfeld überträgt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und die Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Headerfeld identifiziert eine geordnete Liste von Antwort-Headerfeldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs zu Textressourcen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Spekulationsregeln, die zur Spekulation führten, sodass ein Server identifizieren kann, welche Regel(n) eine Spekulation verursacht haben und diese möglicherweise blockieren können.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Von einem Navigationstarget gesetzt, um die Nutzung verschiedener höher risiko-behafteter Lademodi zu ermöglichen. Zum Beispiel erfordert eine `Supports-Loading-Mode`-Wert von `credentialed-prerender` eine Funktionsweise der [vorkonfigurierten Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zu aktivieren.

## Nicht-standardmäßige Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die Quell-IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Lastenausgleichsserver mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichsserver zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichsserver zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, eine Funktion, bei der Browser proaktiv eine Domainnamenauflösung für Links, die der Benutzer verfolgen könnte, sowie für URLs, die von dem Dokument referenzierte Elemente wie Bilder, CSS, JavaScript usw. enthalten, durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchergebnisindizes dargestellt werden soll. Der Header entspricht den [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der mehrere Effekte an jedem Punkt der Anforderungs-/Antwortkette haben kann. Aus Gründen der Abwärtskompatibilität mit HTTP/1.0-Caches, bei denen der `Cache-Control`-Header noch nicht vorhanden ist, verwendet.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
