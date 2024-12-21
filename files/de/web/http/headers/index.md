---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: e114a6686e813abfcb8f071b18987eb4c1f17ce6
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort auszutauschen. In HTTP/1.X ist ein Header ein nicht auf Groß-/Kleinschreibung achtender Name, gefolgt von einem Doppelpunkt, dann folgt optional ein Leerzeichen, das ignoriert wird, und schließlich sein Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header klein geschrieben, wenn sie in den Entwicklertools angezeigt werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 deprekiert, da sie bei der Standardisierung von nicht standardmäßigen Feldern Unannehmlichkeiten verursachte, wie in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) beschrieben. Weitere sind im [IANA HTTP-Feldnamen-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgelistet, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können gemäß ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten mehr Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Representation-Header")}}
  - : Enthalten Informationen über den Inhalt der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder Kodierung/Kompression, die angewendet wurde.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch gruppiert werden, je nachdem, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenliegende Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung sinnvoll und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem {{httpheader("Connection")}}-Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten bei einem Proxy-Server zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt im Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Anweisungen für Zwischenspeicherungsmechanismen sowohl in Anfragen als auch in Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die bestimmen, wie sich die Abfrageparameter einer URL auf das Cache-Matching auswirken. Diese Regeln diktieren, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um verschiedene Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen sicher oder implementiert ein optimistisches Konkurrentzkontrollsystem bei Änderungen an vorhandenen Dokumenten.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine dauerhafte Verbindung offen bleiben soll.

## Inhaltsaushandlung

Für weitere Details lesen Sie den Artikel [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, in der die Antwort erwartet wird. Dies ist ein Hinweis und nicht unbedingt vollständig unter der Kontrolle des Nutzers: Der Server sollte immer darauf achten, keine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _request content negotiation_ Response-Header, der angibt, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _request content negotiation_ Response-Header, der angibt, welche [Medientypen](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu verarbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) gibt es die maximale Anzahl von Hops an, die die Anfrage durchlaufen kann, bevor sie an den Absender zurückgesendet wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Für weitere Informationen lesen Sie die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage freigegeben werden kann, wenn das Merkmal `credentials` wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server über die HTTP-Header zu informieren, die bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von wo ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, denen erlaubt ist, die Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die ansonsten aufgrund von Cross-Origin-Einschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden sollte (Standardverhalten ohne den Header) oder ob sie wie ein Download gehandhabt werden soll und der Browser ein "Speichern unter"-Dialog präsentieren soll.

## Integritäts-Prüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("digest", "Prüfsumme")}} des oktettumrahmten Streams in einer HTTP-Nachricht (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("digest", "Prüfsumme")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt die Prüfsumme nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Ausdruck des Wunsches nach einem {{HTTPHeader("Content-Digest")}}-Header.
    Es ist das `Content-` Analog zum {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Ausdruck des Wunsches nach einem {{HTTPHeader("Repr-Digest")}}-Header.
    Es ist das `Repr-` Analog zum {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in Dezimalzahlen von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, sodass es einem Benutzer ermöglicht, gemäß der eigenen bevorzugten Sprache zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl vorwärts- als auch rückwärts-Proxys, und kann in den Anforderungsheadern und den Antwortheadern auftreten.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Downloadmanager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und in welcher Einheit der Bereich angegeben werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen von inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachrichtenkörper eine Teilnachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Nimmt den gleichen Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzeragenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domain-Namen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, an der der Server auf Anfragen lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zu der aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Software-Anbieter oder die Softwareversion des anfordernden Benutzersoftwareagenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die von einer Ressource unterstützten HTTP-Anforderungsmethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die der Ursprungsserver verwendet, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu erklären.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen auslesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert Ressourcen, die der Benutzeragent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, aber nicht durchsetzen. Diese Verstöße bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich in die Berichterstattung und Durchsetzung der [Zertifikattransparenz](/de/docs/Web/Security/Certificate_Transparency) einzutragen, um die Verwendung von fälschlicherweise ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbetten, zu erlauben oder zu verbieten.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der Website-Besitzern erlaubt, einen oder mehrere Endpunkte anzugeben, die zum Empfang von Fehlern wie CSP-Verstoßmeldungen, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verstößen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstatt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und erzwingt, dass der Browser den in {{HTTPHeader("Content-Type")}} angegebenen Typ verwendet.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlaubt sein sollte, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Erlaubnis erteilen, Daten über Domains hinweg zu bearbeiten, die ansonsten aufgrund der [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks festgelegt werden und enthält Informationen über diese, während sie keine Nützlichkeit für die Anwendung oder ihre Besucher bieten. Entfernen Sie diesen Header, um potenzielle Sicherheitslücken zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Filtern von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt sein sollte, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung des Anforderungsinitiators und dem Zielursprung an. Es ist ein struktureller Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein struktureller Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde. Es ist ein struktureller Header, dessen Wert ein boolescher ist, sodass mögliche Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein struktureller Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", bieten jedoch ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die unmittelbare Nutzung durch den Benutzeragenten ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorzeitig für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in vorzeitigen Anfragen gesendet wird, um eine Ressource während des Bootens eines Service-Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource als bei einem normalen `fetch()`-Vorgang zurückgegeben werden sollte.

## Server-sent Events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser beim Verwenden der [Reporting-API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlermeldungen senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser beim Verwenden der [Reporting-API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlermeldungen senden soll.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transfer-Codierungen an, die der Benutzeragent akzeptieren kann.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende einer chunked Nachricht zusätzliche Felder hinzuzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung umzusteigen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen an.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählten Erweiterungen an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der bestätigt, dass der Client ausdrücklich beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten Subprotokolle an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege aufzulisten, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten sollte, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufe für die Skriptressource eines Service-Workers einbezogen.
    Dieser Header hilft Administratoren, Service-Worker-Skriptanfragen zu Überwachungszwecken zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) durch Hinzufügen dieses Headers [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) zu entfernen.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "Source-Map")}}, damit Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code schrittweise vorgehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung auf einen WebSocket umzustellen.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanfrage auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server die Neupriorisierung der Anfrage wählt.

## Experimentelle Header

### Zuordnungsberichterstattung Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine Anzeige klickt, die auf einer Site eingebunden ist, und dann auf der Website des Verkäufers einen Kauf tätigt — und dann Berichte über diese Konversionen zuzugreifen. Dies erfolgt ohne Verlassen auf Cookies von Drittanbietern, sondern durch verschiedene Header zur Registrierung von **Quellen** und **Auslösern**, die zusammenpassen, um eine Konversion anzuzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort zur aktuellen Anfrage berechtigt ist, an der Zuordnungsberichterstattung teilzunehmen, indem entweder eine Zuordnungsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage hinzugefügt, die einen `Attribution-Reporting-Eligible`-Header enthielt, um eine Zuordnungsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage hinzugefügt, die einen `Attribution-Reporting-Eligible`-Header enthielt, um einen Zuordnungsauslöser zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anfrage-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bieten und es Servern ermöglichen, das zu optimieren, was unter diesen Bedingungen bereitgestellt wird.

Server fordern proaktiv die Client-Hinweise an, an denen sie vom Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, die angeforderten Header in nachfolgenden Anfragen einzubeziehen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise mithilfe des `Accept-CH`-Header-Felds oder eines äquivalenten HTML-`<meta>`-Elements mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut ankündigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzumelden, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzeragenten-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anfrage-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und die Benutzereinstellungen liefern, die im Benutzeragenten oder auf der Plattform festgelegt sind:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Benutzeragenten-Branding und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Unterliegende Plattform-Architektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Unterliegende CPU-Architektur-Bitness des Benutzeragenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt allgemein eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Unterliegendes Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des unterliegenden Betriebssystems des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzeragenten-Binärcode im 32-Bit-Modus unter 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Vorliebe des Nutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Vorliebe des Nutzers, weniger Animationen und Inhaltslayoutveränderungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header gibt die Präferenz des Benutzeragenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzeragenten-Client-Hinweise sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, weil sie auf die Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) angewiesen sind, die zur Datenweitergabe genutzt werden könnte.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um das Bildgerät zum Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der das Pixelverhältnis des Client-Geräts angibt (die Anzahl physischer Gerätepixel pro {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header gibt die gewünschte Ressourcenbreite in physikalischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, zu wählen, welche Informationen gesendet werden, basierend auf den Benutzerentscheidungen und Netzwerkbandbreite und -latenz.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), das am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsschicht-Round-Trip-Time (RTT) in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein Zeichenfolgenwert `on`, der die Vorliebe des Benutzeragenten für reduzierte Datennutzung angibt.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Vorliebe des Benutzers bezüglich Tracking (Do Not Track) angibt.
    Nicht mehr empfohlen zugunsten von Global Privacy Control (GPC), das den Servern mit dem {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und den Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder Dienstleistung ihre persönlichen Informationen mit Dritten verkauft oder teilt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in einem _ursprungsschlüssel-[Agentencluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll. Diese Isolierung ermöglicht es Benutzeragenten, implementationsspezifische Ressourcen für Agentencluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-sent Events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der Entwicklern ermöglicht, eine Netzwerkfehlerberichterstattungsrichtlinie zu deklarieren.

### Topics-API

Die Topics-API bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie interessenbasierte Werbung (IBA).
Siehe die [Topics-API](/de/docs/Web/API/Topics_API)-Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL einer aufrufenden Site als in der Antwort auf eine Anfrage beobachtet markiert wurden, die von einer [Funktion, die die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Werbungstechnologie-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`ACCEPT-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header senden, um die Absicht anzuzeigen, etwaige verfügbare Signaturen zu nutzen, und um anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Frühdaten übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, d.h., ob Benutzer im aktuellen Browser beim IdP eingeloggt sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`SIGNATURE`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld überträgt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität bestimmt und die Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwortheadern, die in eine Signatur aufgenommen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die zu Textressourcen zeigen, die [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten.
    Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zur Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Setzt ein Navigationsziel, um sich für die Verwendung verschiedener risikoreicheren Lademodi zu entscheiden.
    Zum Beispiel erfordert das präfektierte, gleiche-Site (domänenübergreifende) [Vorladen](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastenausgleich zu einem Webserver Verbindungen herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet, um eine Verbindung zu Ihrem Proxy oder Lastenausgleich herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet, um eine Verbindung zu Ihrem Proxy oder Lastenausgleich herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, eine Funktion, bei der Browser proaktiv die Domainnamensauflösung sowohl auf Links, die der Benutzer möglicherweise auswählt, als auch auf URLs für Elemente, die vom Dokument referenziert werden, einschließlich Bildern, CSS, JavaScript usw., durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in den öffentlichen Suchmaschinenergebnissen indiziert werden soll. Der Header ist im Grunde äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der entlang der gesamten Anforderungs-/Antwortkette verschiedene Auswirkungen haben kann. Wird zur Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Beitrag leisten

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Siehe https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite über Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
