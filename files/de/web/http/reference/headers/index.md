---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: dba7747cb88680a82b01d4a9ff02f38b5b230c53
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder einer Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht auf Groß- oder Kleinschreibung achtender Name, gefolgt von einem Doppelpunkt, dann optionaler Leerraum, der ignoriert wird, und schließlich dessen Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header beim Betrachten in Entwickler-Tools in Kleinbuchstaben dargestellt (`accept: */*`) und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden traditionell mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unbequemlichkeiten, die sie verursachte, als nicht standardisierte Felder standardisiert wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgeschafft; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können je nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Anforderungs-Header")}}
  - : Enthalten weitere Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie deren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Inhalt der Ressource, wie deren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Payload-Daten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie handhaben:

- End-to-End-Header
  - : Diese Header _müssen_ dem endgültigen Empfänger der Nachricht übermittelt werden: dem Server für eine Anfrage oder dem Client für eine Antwort. Zwischengeschaltete Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung sinnvoll und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mithilfe des {{HTTPHeader("Connection")}} Headers festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent beim Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Proxy-Server zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt im Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Zwischenspeichermechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL die Cache-Daten beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit verschiedenen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das zum Vergleich mehrerer Versionen derselben Ressource verwendet wird. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in manchen Umgebungen einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit keinem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit vorherigen sicher oder implementiert ein optimistisches Mehrbenutzer-Kontrollsystem beim Ändern bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header abgeglichen werden sollen, um zu entscheiden, ob eine gecachte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsverhandlung

Für weitere Details, siehe den Artikel [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie das Auswählen einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Antwort-Header zur _Anforderungsinhaltsverhandlung_, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anforderung verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Antwort-Header zur _Anforderungsinhaltsverhandlung_, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anforderung verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE), gibt die maximale Anzahl an Hops an, die die Anfrage machen kann, bevor sie dem Absender zurückgegeben wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage bereitgestellt werden kann, wenn das Anmeldeinformations-Flag auf true gesetzt ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource in der Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort sichtbar gemacht werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von wo eine Anfrage stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die ansonsten aufgrund von Cross-Origin-Einschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne Header) oder ob sie als Download behandelt werden soll und der Browser einen "Speichern unter"-Dialog präsentieren soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} des Streams von Oktetten, der in einer HTTP-Nachricht (der Nachricht Inhalten) abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} eingerahmt ist.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichtentext

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Weist den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), für die der Inhalt bestimmt ist, sodass ein Benutzer nach der eigenen bevorzugten Sprache differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben. Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, in Fällen, in denen es ansonsten für den Client nicht eindeutig wäre. Browser haben keine native Handhabung zum Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten während der Anfragenverarbeitung an. Beispielsweise kann es minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche Präferenzen, die im `Prefer`-Header angegeben sind, vom Server angewendet wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzhandhabung bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy auf dem Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl Forward- als auch Reverse-Proxys, und kann in den Anforderungs-Headern und den Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer das Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder das Datum der Remote-Ressource übereinstimmt. Wird verwendet, um zu verhindern, dass zwei Bereiche von einer inkompatiblen Version der Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo sich in einer vollständigen Nachricht ein Teilnachricht befindet.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, auf die eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Fordert den Browser auf, die Seite neu zu laden oder zu einer anderen umzuleiten. Nimmt denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse eines menschlichen Benutzers, der die anfordernde Benutzeragentur kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für das virtuelle Hosting) und (optional) die TCP-Portnummer an, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite verfolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}} Header bei Anfragen enthalten sein sollten.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenkette, die den Netzwerkprotokollpartnern ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion der anfordernden Software-Benutzeragentur zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anforderungsmethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Embedding-Policy für ein bestimmtes Dokument festzulegen.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzeragent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, Policies zu testen, indem sie ihre Effekte überwachen, aber nicht durchsetzen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP `POST` Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Meldung und Durchsetzung der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von falsch ausgestellten Zertifikaten für diese Site zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus zum Erlauben und Verweigern der Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die es einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der Website-Besitzern erlaubt, ein oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS statt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt, und dass er die {{CSP("upgrade-insecure-requests")}} Direktive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlauben soll, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderen), die Berechtigung erteilen, Daten über Domänen hinweg zu handhaben, die ansonsten aufgrund der [Ssame-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt würden. Der `X-Permitted-Cross-Domain-Policies` Header überschreibt solche Policy-Dateien, sodass Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während sie der Anwendung oder ihren Besuchern keinen Nutzen bieten. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungs-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um zu entscheiden, ob eine Anfrage auf Basis ihres Ursprungs und wie die Ressource verwendet wird, erlaubt werden soll.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung des Anforderungsinitiators und dem Zielursprung an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktivierung ausgelöst wurde oder nicht. Es handelt sich um einen Structured Header, dessen Wert ein Boolean ist, so dass die möglichen Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungs-Header sind nicht _strikt_ "Fetch-Metadaten-Anforderungs-Header", bieten jedoch ähnliche Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die zurückgegebenen Informationen anzupassen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die unmittelbare Verwendung durch den User-Agent. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource proaktiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungs-Header, der in vorauseilender Anfrage gesendet wird, um eine Ressource während des Service-Worker-Boot-Vorgangs mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Übertragungscodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Codierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transfer-Codierungen an, die der User-Agent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, zusätzliche Felder am Ende der gechunkten Nachricht einzuschließen.

## WebSockets

Headers, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungs-Header, der einen Schlüssel enthält, der überprüft, dass der Client explizit beabsichtigt, eine `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Sub-Protokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten aufzulisten, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit für die Serialisierung eines oder mehrerer Links in HTTP-Head-ern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abfragen nach einem Service-Worker-Skriptressource enthalten.
    Dieser Header hilft Administratoren dabei, Anfragen zu Service-Worker-Skripts zu protokollieren, um Überwachungszwecke zu erfüllen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in die Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Source-Map")}}, damit Debugger durch den Original-Quellcode anstelle von generiertem oder transformiertem Code navigieren können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser nur für HTTP/1.1 gültige Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Beispielsweise kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung in eine WebSocket zu ändern.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Zuordnungs-Melde-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Conversions zu messen — beispielsweise wenn ein Benutzer auf eine Anzeige klickt, die auf einer Website eingebettet ist, und dann das Produkt auf der Seite des Anbieters kauft — und dann Berichte über diese Conversions zu erstellen. Dies erfolgt ohne die Verwendung von Drittanbieter-Tracking-Cookies, sondern durch verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die zusammenpassen, um eine Conversion anzuzeigen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an der Attribution-Meldung teilzunehmen, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um eine Attributionsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um einen Attributionsauslöser zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind ein Satz von Anforderungs-Headern, die nützliche Informationen über den Client wie den Gerätetyp und die Netzwerkbedingungen bereitstellen und es Servern ermöglichen, die bereitgestellten Inhalte für diese Bedingungen zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, die sie vom Client benötigen, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise über das `Accept-CH` Header-Feld oder ein gleichwertiges HTML `<meta>` Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### User-Agent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungs-Header, die Informationen über den User-Agent, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die im User-Agent oder auf der Plattform festgelegt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : User-Agent-Branding und -Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : User-Agent-unterliegende Plattformarchitektur.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitness der User-Agent-unterliegenden CPU-Architektur (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : User-Agent-Formfaktoren, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenkette des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : User-Agent läuft auf einem mobilen Gerät oder bevorzugt allgemein ein "mobiles" Benutzererlebnis.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Unterliegendes Betriebssystem/Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Unterliegende Betriebssystemversion des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob das User-Agent-Programm im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers, weniger Animationen und Inhaltsverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header, der die Bevorzugung des Benutzers für reduzierte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hinweise sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie von der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) abhängen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Bildgerät zu bestätigen, um das Verhältnis von Gerät zu Pixel (DPR) in Anfragen zu bestätigen, in denen der Bildschirm {{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Gerätespeicher-API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der das Verhältnis von Gerät zu Pixel des Clients angibt (die Anzahl der physischen {{Glossary("device_pixel", "Gerätepixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header gibt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server zu entscheiden, welche Informationen basierend auf der Nutzerwahl und Netwerkbandbreite und -verzögerung gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "Effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zu Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsbezogene Rundlaufzeit (RTT) in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Netzwerkinformationen-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, das die Präferenz der Benutzerausrüstung für reduzierte Datennutzung angibt.

### Kompressionswörterbuch-Transport

[Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsam genutztes Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das Standard-Static-Wörterbuch in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungs-Header verwenden, um das beste Wörterbuch, das ihm zur Verfügung steht, anzugeben, damit der Server es zur Kompression verwenden kann.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary` Header bereitgestellt hat.
    Anfragen nach Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte Wörterbuch-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die passenden Kriterien auf, für die das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zu Gunsten von Global Privacy Control (GPC), die den Servern über den {{HTTPHeader("Sec-GPC")}} Header mitgeteilt wird und auf Client-Seite über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst seine persönlichen Informationen an Dritte verkaufen oder weitergeben kann.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einen _ursprungsbezogenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte.
    Diese Isolierung ermöglicht es User-Agents, Implementierungs-spezifische Ressourcen für Agent-Cluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Richtlinie zur Netzwerkausfallmeldung zu erklären.

### Topics-API

Die Topics-API bietet einen Mechanismus, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) implementieren können.
Siehe die [Topics-API](/de/docs/Web/API/Topics_API)-Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Interessenbeobachtungen, die aus der URL einer aufrufenden Website abgeleitet wurden, als beobachtet zu kennzeichnen, wenn die Antwort auf eine Anfrage generiert wird, die durch eine [Funktion, die die Topics-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api).
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet wird, um eine personalisierte Werbung auszuwählen und anzuzeigen.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzugeben, verfügbaren Signaturen zu nutzen und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early Data übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, d.h. ob ein oder mehrere Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und für die [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld überträgt eine Liste von Signaturen für ein Austauschdienst, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur festgestellt und aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Der [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Verwendung verschiedener höherer Risiko-Lademodi zu erlauben. Zum Beispiel erfordert die Cross-Origin, gleiche Site [Vorladen](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder ein Load-Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der vom Client verwendet wurde, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das der Client verwendet hat, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert die DNS-Vorabrufung, eine Funktion, bei der Browser proaktiv die Domainnamenauflösung sowohl bei Links, die der Benutzer möglicherweise verfolgen könnte, als auch bei URLs für Elemente durchführen, auf die im Dokument verwiesen wird, einschließlich Bilder, CSS, JavaScript, usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in den Ergebnissen öffentlicher Suchmaschinen indexiert werden soll. Der Header ist effektiv äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der entlang der Anfrage-Antwort-Kette verschiedene Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
