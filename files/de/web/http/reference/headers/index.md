---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen in einer Anfrage oder Antwort mit einer Nachricht zu übermitteln.
In HTTP/1.X ist ein Header ein nicht groß-/kleinschreibungssensitiver Name, gefolgt von einem Doppelpunkt, dann optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklerwerkzeugen angesehen werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) (`:status: 200`) versehen.
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Proprietäre benutzerdefinierte Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die sie verursachten, als nicht standardisierte Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) eingeführt wurden, abgelehnt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen Originalinhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert ist.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anforderungs-Header")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Halten zusätzliche Informationen über die Antwort, wie zum Beispiel ihren Standort oder den bereitstellenden Server.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Hauptteil der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), oder angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten representationsunabhängige Informationen über Nutzdatendaten, einschließlich Inhaltlänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den Endempfänger der Nachricht übermittelt werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenliegende Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transporteebene-Verbindung von Bedeutung und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem {{httpheader("Connection")}} Header festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource zu erhalten.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten gegenüber einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um Zugang zu einer Ressource hinter einem Proxyserver zu erhalten.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten gegenüber einem Proxyserver zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen sowohl in Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach der die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL die Cache-Übereinstimmung beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber einfacher in manchen Umgebungen zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur dann an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur dann an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum nicht verändert wurde. Dies gewährleistet die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen oder implementiert ein optimistisches Nebenläufigkeitskontrollsystem beim Ändern bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie die Anfrage-Header abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleiben soll.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsaushandlung

Weitere Details finden Sie im [Artikel zur Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Datentypen")}}, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Das Kodierungsverfahren, in der Regel ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), das auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt unter der vollständigen Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrage-Inhalt Aushandlung_ Antwort-Header, der die [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) angibt, die der Server in einer {{HTTPMethod("PATCH")}} Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrage-Inhalt Aushandlung_ Antwort-Header, der die [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) angibt, die der Server in einer {{HTTPMethod("POST")}} Anfrage verstehen kann.

## Steuerelemente

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE), gibt an, wie viele Hops die Anfrage machen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage angezeigt werden kann, wenn das Anmeldeinformationen-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort angezeigt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischen gespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server wissen zu lassen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server wissen zu lassen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher eine Abfrage stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, die Werte von Attributen zu sehen, die über Funktionen der [Ressourcen-Timing-API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, welche ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übermittelte Ressource inline angezeigt werden soll (Standardverhalten ohne Header) oder wie ein Download zu behandeln ist und der Browser ein „Speichern unter“-Dialogfeld anzeigen soll.

## Integritäts-Prüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("hash_function", "Prüfsumme")}} des Stream von Oktetten, die in einer HTTP-Nachricht umrahmt sind (dem Nachrichtsinhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("hash_function", "Prüfsumme")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung.
    Im Gegensatz zu {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an.
    Es ist das `Content-`-Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.
    Es ist das `Repr-`-Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichtentext

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum bestimmt sind, sodass ein Benutzer nach Vorlieben der eigenen bevorzugten Sprache differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzuzeigen.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wurde, in Fällen, in denen es für den Client ansonsten unklar wäre.
Browser haben keine native Handhabung zum Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, spezifischen Implementierungen verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten bei der Anfrageverarbeitung an. Beispielsweise kann es minimale Antwortinhalte (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normalerweise, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche Präferenzen, die im `Prefer`-Header angegeben wurden, vom Server angewendet wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy im Weg der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys, sowohl vorwärts als auch rückwärts, hinzugefügt und kann sowohl in den Anfrage-Headern als auch in den Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Media-Player, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen von inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teilausschnitt von Bedeutung ist.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder auf eine andere weiterzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfragenden Benutzeragenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}}-Header gesendet werden, mit Anfragen einbezogen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokoll-Gegenstellen ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-Benutzeragenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Gruppe von HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Embedding-Richtlinie für ein gegebenes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen können, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzeragent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, aber nicht durchsetzen. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung der [Zertifikat-Transparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von nicht korrekt ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem eigenen Rahmen einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zuzulassen und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der Website-Betreibern ermöglicht, einen oder mehrere Endpoints anzugeben, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die Richtlinie {{CSP("upgrade-insecure-requests")}} erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie z. B. Adobe Acrobat oder Apache Flex (unter anderen), die Erlaubnis erteilen, mit Daten über Domains hinweg umzugehen, die andernfalls aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies` Header überschreibt solche Policy-Dateien, sodass Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während sie keine Nützlichkeit für die Anwendung oder ihre Besucher bietet. Entfernen Sie diesen Header, um potenzielle Schwachstellen zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Cross-Site-Scripting-Filterung.

### Fetch-Metadaten-Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage basierend auf ihrem Ursprung und der Nutzung der Ressource erlaubt sein sollte.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung des Anfragestarters und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein Bool-Wert ist, sodass mögliche Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind nicht _streng_ "Fetch-Metadaten-Anfrage-Header", bieten jedoch ähnliche Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die unmittelbare Verwendung durch den Benutzer-Agenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorzeitig für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in einer vorweggenommenen Anfrage gesendet wird, um eine Ressource während des Starts des Service-Workers mit `fetch()` abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource zurückgegeben werden soll als bei einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warnungs- und Fehlermeldungen senden soll, wenn die [Reporting-API](/de/docs/Web/API/Reporting_API) genutzt wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warnungs- und Fehlermeldungen senden soll, wenn die [Reporting-API](/de/docs/Web/API/Reporting_API) genutzt wird.

## Übertragungskodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der Benutzeragenten akzeptieren kann.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende einer chunked Nachricht zusätzliche Felder einzuschließen.

## WebSockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung aufzurüsten.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die WebSocket-Erweiterungen an, die der Client in bevorzugter Reihenfolge unterstützt.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählten Erweiterungen an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header, der einen Schlüssel enthält, der bestätigt, dass der Client ausdrücklich die Absicht hat, eine `WebSocket`-Verbindung zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die Subprotokolle an, die der Client in bevorzugter Reihenfolge unterstützt.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die Version des WebSocket-Protokolls an, das vom Client verwendet wird.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird und listet die vom Server unterstützten Versionen auf.

## Sonstige

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege aufzulisten, um diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entitäts-Header-Feld bietet eine Möglichkeit, eine oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten sollte, bevor eine Folgeanfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Entsprechende Anfragen für das Skript einer Service-Worker-Ressource.
    Dieser Header hilft Administratoren, die Anfragen für das Service-Worker-Skript zu protokollieren, um Überwachungszwecke zu erfüllen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) durch die Aufnahme dieses Headers [in die Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufzuheben.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "SourceMap")}}, damit Debugger durch den ursprünglichen Quellcode anstatt durch generierten oder transformierten Code navigieren können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll über dasselbe Transportprotokoll zu aktualisieren. Zum Beispiel kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP oder HTTPS Verbindung in einen WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Clientpriorität anzugeben oder in einer Antwort, wenn der Server beschließt, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Attributions-Berichterstattungs-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine in einer Website eingebettete Werbung klickt und dann das Produkt auf der Händlerseite kauft — und dann Berichte über diese Konversionen abzurufen. Dies geschieht ohne auf Tracking-Cookies von Drittanbietern angewiesen zu sein, sondern indem verschiedene Header verwendet werden, um **Quellen** und **Auslöser** zu registrieren, die gematcht werden, um auf eine Konversion zu schließen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort, die der aktuellen Anfrage entspricht, berechtigt ist, an der Attribution-Berichterstattung teilzunehmen, indem entweder eine Attribution-Quelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage inkludiert, die einen `Attribution-Reporting-Eligible` Header enthalten hat, dies wird verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage inkludiert, die einen `Attribution-Reporting-Eligible` Header enthalten hat, dies wird verwendet, um einen Attribution-Auslöser zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Gruppe von Anfrage-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bieten und es Servern ermöglichen, das, was bereitgestellt wird, für diese Bedingungen zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, an denen sie vom Client interessiert sind, mit {{HTTPHeader("Accept-CH")}}. Der Client kann dann wählen, ob er die angeforderten Header in nachfolgenden Anfragen einbeziehen möchte.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise mithilfe des `Accept-CH` Header-Feldes oder eines äquivalenten HTML-`<meta>`-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut anbieten.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgelistet.

#### Benutzer-Agent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anfrage-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und Benutzerpräferenzen, die auf dem Benutzeragenten oder der Plattform gesetzt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Branding und Version des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : CPU-Architekturbiteness des Benutzeragenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jedes Branding in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt generell eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des Betriebssystems des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzeragent in 32-Bit-Modus auf 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers für weniger Animationen und Layoutverschiebungen des Inhalts.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header gibt die Präferenz des Benutzeragenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hinweise sind nicht in [Fenced-Frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf die [Berechtigungsrichtlinien-](/de/docs/Web/HTTP/Guides/Permissions_Policy)Delegierung angewiesen sind, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Bildgerät, das in Anfragen benutzt wurde, bei Verwendung des Bildschirm-{{HTTPHeader("DPR")}} Client-Hinweises zu bestätigen, der verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Geräte-Gedächtnis-API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, die das Gerät des Clients für die Pixeldichte (die Anzahl der physischen {{Glossary("device_pixel", "Geräte-Pixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}) bereitstellt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header stellt die Layout-Vorschau-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereit.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header zeigt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben es einem Server, zu wählen, welche Informationen basierend auf der Benutzerwahl und der Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Client-Verbindung zum Server, in Mbps. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), das am besten mit der Latenz und Bandbreite der Verbindung übereinstimmt. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwenderschicht-Round-Trip-Time (RTT) in Millisekunden, die auch die Serververarbeitungszeit umfasst. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein Zeichenfolgenparameter `on`, der die Präferenz des Benutzeragenten für reduzierten Datenverbrauch anzeigt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Benutzerpräferenz zur Nachverfolgung (Do Not Track) angibt.
    Veraltet zugunsten der Global Privacy Control (GPC), die Servern über den {{HTTPHeader("Sec-GPC")}}-Header kommuniziert wird und Kunden über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wird. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder Dienstleistung persönliche Informationen an Dritt
