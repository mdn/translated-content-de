---
title: HTTP header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort auszutauschen.
In HTTP/1.X ist ein Header ein nicht auf Groß- und Kleinschreibung achtender Name, gefolgt von einem Doppelpunkt, optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in den Entwicklerwerkzeugen betrachtet werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) (`:status: 200`) versehen.
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 wegen der Unannehmlichkeiten, die entstanden, wenn nicht standardisierte Felder standardisiert wurden in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgelehnt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischengeschaltete Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung von Bedeutung und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mithilfe des {{httpheader("Connection")}} Headers gesetzt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents mit einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource hinter einem Proxyserver zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents bei einem Proxyserver.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt im Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Anweisungen für Caching-Mechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z.B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach der die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, genutzt um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in manchen Umgebungen leichter zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette zur Identifizierung der Version der Ressource. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der gegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der gegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird genutzt, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht verändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen sicher oder implementiert ein optimistisches Nebenläufigkeitskontrollsystem bei der Änderung bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann anstelle einer neuen Anfrage an den Ursprungsserver.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben sollte.

## Content-Negotiation

Weitere Einzelheiten finden Sie im [Artikel über Content-Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, meistens ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurückzusenden erwartet wird. Dies ist ein Hinweis und liegt nicht unbedingt in der vollen Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Request Content Negotiation_ Antwort-Header, der anzeigt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Request Content Negotiation_ Antwort-Header, der anzeigt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) gibt es die maximale Anzahl von Hops an, die die Anfrage machen kann, bevor sie an den Absender reflektiert wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeinformationen-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort freigegeben werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem deren Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, denen das Anzeigen von Attributwerten über anonyme Abrufe mithilfe von Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) erlaubt ist, die ansonsten aufgrund von Cross-Origin-Beschränkungen auf Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne Header) oder ob sie wie ein Download behandelt und der Browser ein "Speichern unter"-Dialog anzeigen sollte.

## Integritätsdigests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} des Stream-Fragments in einer HTTP-Nachricht (des Nachrichteninhalts) bereit, abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung bereit.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-`-Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-`-Analogon zu {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörper-Informationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl der Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschlichen Sprache(n), die für das Zielpublikum bestimmt sind, sodass es einem Benutzer ermöglicht, gemäß der eigenen bevorzugten Sprache zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, in Fällen, in denen es sonst für den Client mehrdeutig wäre.
Browser haben keine native Handhabung, um Präferenzen über diese Header zu senden; sie werden in benutzerspezifischen, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten während der Anfrageverarbeitung an. Beispielsweise kann es minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche Präferenzen, die im `Prefer` Header angegeben sind, vom Server angewendet wurden. Es ist ein reiner Antwortheader, der Transparenz bei der Präferenzbehandlung bietet.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys, sowohl Forward als auch Reverse Proxies, hinzugefügt und kann in den Anfrage- und Antwortheadern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) erlauben es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt, und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurücksenden soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene Etag oder Datum mit der Remote-Ressource übereinstimmt. Wird verwendet, um das Herunterladen zweier Bereiche von inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil einer Nachricht gehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen umzuleiten. Verwendet denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfragenden Benutzer-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für Virtual Hosting) an und (optional) die TCP-Portnummer, auf der der Server wartet.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorhergehenden Webseite, von der aus ein Link zu der aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}} Header gesendet werden, mit den Anfragen eingeschlossen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-Benutzer-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die unterstützten HTTP-Anforderungsmethoden durch eine Ressource auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprung-Server verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, Richtlinien durch Überwachung, aber nicht durch Erzwingen, ihrer Effekte zu experimentieren. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP `POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für das Melden und Durchsetzen von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von falsch ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browser-Features in einem eigenen Rahmen einer Website sowie in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Website-Betreibern ermöglicht, einen oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich behandeln kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und erzwingt, dass der Browser den im {{HTTPHeader("Content-Type")}} angegebenen Typ verwendet.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Erlaubnis erteilen, Daten über Domains hinweg zu behandeln, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies` Header überschreibt solche Policy-Dateien, sodass Clients unerwünschte Anfragen dennoch blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, ohne dem Anwendung oder ihren Besuchern einen Nutzen zu bieten. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage basierend auf ihrem Ursprung erlaubt werden sollte und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt das Verhältnis zwischen dem Ursprung eines Anfrage-Initiators und dem Ursprung des Ziels an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanforderung durch eine Benutzeraktivierung ausgelöst wurde. Es ist ein Structured Header, dessen Wert ein Boolean ist, also sind die möglichen Werte für false `?0` und für true `?1`.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _strenggenommen_ "Fetch-Metadaten-Anforderungsheader", bieten aber ähnlich Informationen über den Kontext der Nutzung einer Ressource. Ein Server könnte sie nutzen, um sein Zwischenspeicherverhalten zu ändern oder die Informationen, die zurückgegeben werden:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die sofortige Nutzung durch den Benutzer-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, was anzeigt, dass die Ressource vorausschauend für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der bei einer vorauseilenden Anforderung gesendet wird, um eine Ressource während des Startvorgangs des Service Workers per [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um den Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als bei einem normalen `fetch()`-Vorgang.

## Server-Sent Events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, benutzt um anzugeben, wo der Browser Warnungen und Fehlerberichte schicken sollte, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, benutzt um anzugeben, wo der Browser Warnungen und Fehlerberichte schicken sollte, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transferkodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wurde, um die Ressource sicher an den Nutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzer-Agent akzeptieren kann.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Sender, am Ende einer chunked Nachricht zusätzliche Felder einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, eine WebSocket-Verbindung hochzustufen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählten Erweiterungen.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client ausdrücklich beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten Sub-Protokolle in bevorzugter Reihenfolge an.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählten Sub-Protokolle.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und listet die unterstützten Versionen des Servers auf.

## Sonstige

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege zu listen, um diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten sollte, bevor er eine Folgeanfrage macht.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : In Abrufen für das Skript einer Service Worker eingebunden.
    Dieser Header hilft Administratoren, Anfragen für Service Worker Skripte zu protokollieren, um Überwachungszwecke durchzuführen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) durch Einfügen dieses Headers [in die Antwort des Service Worker Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) zu entfernen.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "Source Map")}}, sodass Debugger durch den ursprünglichen Quellcode anstelle des generierten oder transformierten Codes gehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung zu einem anderen Protokoll hochzustufen (über dasselbe Transportprotokoll). Beispielsweise kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket hochzustufen.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server die Anforderung umpriorisieren möchte.

## Experimentelle Header

### Attributionsbericht-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — beispielsweise, wenn ein Benutzer auf eine Anzeige klickt, die auf einer Website eingebettet ist, und dann den Artikel auf der Website des Anbieters kauft — und dann Berichte über diese Konversionen zu erhalten. Dies geschieht ohne Verlass auf Drittanbieter-Tracking-Cookies, sondern durch verschiedene Header zum Registrieren von **Quellen** und **Auslösern**, die abgestimmt sind, um eine Konversion anzuzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort, die der aktuellen Anfrage entspricht, berechtigt ist, an der Attributionsberichterstattung teilzunehmen, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible` Header beinhaltete, wird dieser verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible` Header beinhaltete, wird dieser verwendet, um einen Attributionstrigger zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das zu optimieren, was für diese Bedingungen bereitgestellt wird.

Server fordern proaktiv die Client-Hinweis-Header vom Client an, an denen sie interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, ob er die angeforderten Header in nachfolgenden Anfragen einfügt.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise durch das `Accept-CH` Header-Feld oder ein gleichwertiges HTML `<meta>` Element mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut bekanntgeben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass angenommene Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzer-Agent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzer-Agent, die Plattform/Architektur, auf der er läuft, und Benutzerpräferenzen, die auf dem Benutzer-Agent oder der Plattform gesetzt sind:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Benutzer-Agent-Marke und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : CPU-Architektur-Bitness des Benutzer-Agents (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzer-Agents, die beschreiben, wie der Benutzer mit dem Benutzer-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständiger Versionsstring des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jede Marke in der Markenliste des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzer-Agent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen ein "mobiles" Benutzererlebnis.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzer-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Bevorzugtes Farbdesign des Benutzers (dunkel oder hell).
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Layoutverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungsheader gibt die Präferenz des Benutzer-Agents für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation basieren, die zum Datenleak verwendet werden könnte.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der das Bildgeräteverhältnis zur Pixelanzahl (DPR) in Anfragen bestätigt, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Hauptspeichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Geräteverhältnis der physischen {{Glossary("device_pixel", "Geräte-Pixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} bereitstellt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die gewünschte Ressourcenbreite in physischen Pixeln (die intrinsische Größe eines Bildes) angibt.

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen einem Server, basierend auf der Benutzerwahl, Bandbreite und Latenz des Netzwerks auszuwählen, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der der Latenz und Bandbreite der Verbindung am besten entspricht. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungs-Schicht-Round-Trip-Time (RTT) in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenkette `on`, die die Präferenz des Benutzer-Agents für reduzierte Datennutzung anzeigt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Trackingpräferenz des Benutzers (Do Not Track) angibt.
    Wird zugunsten von Global Privacy Control (GPC) zugunsten verworfen, das Servern über den {{HTTPHeader("Sec-GPC")}} Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Trackingstatus, der auf die entsprechende Anfrage angewendet wurde, angibt. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einem Verkauf oder einer Weitergabe seiner persönlichen Informationen mit Drittanbietern zustimmt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _Ursprung-gebündelten [Agent Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte.
    Diese Isolation ermöglicht es Benutzer-Agents, implementation-spezifische Ressourcen wie Prozesse oder Threads effizienter für Agent-Cluster zuzuweisen.

### Server-Sent Events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlererichtlinien-Deklaration zu nutzen.

### Themen-API

Die Themen-API bietet einen Mechanismus, der es Entwicklern ermöglicht, Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Siehe die [Themen-API-Dokumentation](/de/docs/Web/API/Topics_API) für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL der anrufenden Website in der Antwort auf eine Anforderung ermittelt wurden, die durch eine [Funktion, die die Themen-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), markiert wurden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Sonstige

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Headerfeld senden, um die Absicht anzugeben, jede verfügbare Signatur zu nutzen, und anzugeben, welche Arten von Signaturen unterstützen werden.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Daten früher übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, d.h. ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Headerfeld überträgt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität bestimmt und diese Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Headerfeld identifiziert eine geordnete Liste von Antwortheaderfeldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Speculation Rule](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulations-Regelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel festgelegt, um sich für verschiedene risikoreiche Lademodi zu entscheiden. Beispielsweise erfordert das Prerendering von cross-origin-same-site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering), den `Supports-Loading-Mode`-Wert `credentialed-prerender` zu verwenden.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der eine Verbindung zu einem Webserver über einen HTTP-Proxy oder einen Lastausgleicher herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefragt wurde, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastausgleicher zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastausgleicher zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Vorababrufen, eine Funktion, bei der Browser proaktiv die Domainnamensauflösung für Links, die der Benutzer möglicherweise folgen möchte, sowie für URLs Element, wie Bilder, CSS, JavaScript usw., durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchmaschinenindexen indiziert werden soll. Der Header entspricht effektiv dem `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an verschiedenen Stellen entlang der Anfrage-Antwort-Kette unterschiedliche Effekte haben kann. Wird zur Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Beitrag leisten

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Siehe https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
