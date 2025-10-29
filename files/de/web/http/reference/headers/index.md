---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 6aa1d0e74a78963ba77070be6313a2c59f96af91
---

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort auszutauschen.
In HTTP/1.X ist ein Header ein nicht case-sensitiver Name, gefolgt von einem Doppelpunkt, dann optionalem Leerzeichen, das ignoriert wird, und abschließend seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in den Entwicklertools betrachtet werden (`accept: */*`), und bei einer speziellen Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`).
Sie finden weitere Informationen zur Syntax in jeder Protokollversion auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten eingestellt, die auftraten, wenn nicht standardmäßige Felder im [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden; andere sind im [IANA HTTP-Feldnamen-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über deren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten zusätzliche Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie seinen [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzlast-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Nutzdaten, einschließlich Inhaltlänge und der für den Transport verwendeten Kodierung.

Header können auch nach der Art und Weise gruppiert werden, wie sie von {{Glossary("Proxy_server", "Proxies")}} behandelt werden:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenzeitliche Proxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne transportebene Verbindung von Bedeutung und _dürfen nicht_ von Proxies weiterübermittelt oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem {{HTTPHeader("Connection")}}-Header festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zur Zugriffssteuerung auf eine Ressource verwendet werden sollte.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzeragents mit einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zur Zugriffssteuerung auf eine Ressource hinter einem Proxyserver verwendet werden sollte.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzeragents mit einem Proxyserver.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen sowohl in Anfragen als auch in Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach dem die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Cache-Einträge im Browser gespeichert wird.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette zur Identifizierung der Version der Ressource. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit keinem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies sichert die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit früheren, oder implementiert ein optimistisches Konkurrenzkontrollsystem bei der Modifikation bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine frische vom Ursprung-Server anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung geöffnet bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben sollte.

## Inhaltsverhandlung

Für weitere Einzelheiten lesen Sie den [Artikel zur Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, in der Regel ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhalt-Verhandlung_-Antwort-Header, der die Medientypen angibt, die der Server bei einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhalt-Verhandlung_-Antwort-Header, der die Medientypen angibt, die der Server bei einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordentlich zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei der Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl der Sprünge an, die die Anfrage machen kann, bevor sie an den Absender reflektiert wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Für mehr Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Credential-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Voranfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource in der Antwort auf eine Voranfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort freigegeben werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Voranfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausstellung einer Voranfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausstellung einer Voranfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigte Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die sonst aufgrund von Cross-Origin-Beschränkungen als Null gemeldet werden würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialogfeld anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} des Oktettstroms, der in einer HTTP-Nachricht umrahmt wird (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}} nicht.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an.
    Es ist das `Content-`-Analogon von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.
    Es ist das `Repr-`-Analogon von {{HTTPHeader("Want-Content-Digest")}}.

## Integritätspolitik

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle vom Benutzeragenten geladenen Ressourcen (eines bestimmten Typs) Garantien der [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity) haben.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Erstellt Berichte über Ressourcen, die der Benutzeragent lädt, und die Leistungsoptionen [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantie verletzen würden, wenn die Integritätspolitik durchgesetzt würde (unter Verwendung des `Integrity-Policy`-Headers).

## Nachrichtentextinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, damit ein Benutzer nach der bevorzugten Sprache des Benutzers unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzuzeigen.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, falls es sonst für den Client mehrdeutig wäre.
Browser haben keine native Handhabung zum Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten während der Anfrageverarbeitung an. Zum Beispiel kann Minimalantwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) angefordert werden. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche im `Prefer`-Header spezifizierten Präferenzen vom Server angewendet wurden. Es ist ein nur für Antworten gültiger Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy auf dem Weg der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies hinzugefügt, sowohl von Forward- als auch Reverse-Proxies, und kann in den Anfragen- und den Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer erlauben, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das gegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Verhindert das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil einer Nachricht dazugehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzeragenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, an der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur derzeit angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit den Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenkette, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-Benutzeragenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Gruppe von HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort auf die Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert Ressourcen, die der Benutzeragent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, mit Richtlinien zu experimentieren, indem die Auswirkungen überwacht, aber nicht durchgesetzt werden. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung falsch ausgestellter Zertifikate für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionen im eigenen Frame einer Website zu erlauben oder zu verweigern, sowie in {{htmlelement("iframe")}}s, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der Website-Besitzern erlaubt, einen oder mehrere Endpunkte zu spezifizieren, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingen Sie die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt, und dass er erfolgreich mit der {{CSP("upgrade-insecure-requests")}}-Direktive umgehen kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlaubt werden sollte, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine bereichsübergreifende Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderen) die Erlaubnis erteilen, Daten über Domains hinweg zu verarbeiten, die sonst aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients trotzdem unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hostingumgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es keine Nützlichkeit für die Anwendung oder ihre Besucher bietet. Setzen Sie diesen Header ab, um potenzielle Schwachstellen offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadatenanforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anforderung stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anforderung zugelassen werden soll, basierend darauf, woher die Anforderung kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anforderung an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein Boolescher Wert ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anforderung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ genommen "Fetch-Metadatenanforderungsheader", liefern jedoch ebenso Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die unmittelbare Verwendung durch den Benutzeragenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorsorglich für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in vorsorglichen Anfragen verwendet wird, um eine Ressource während des Starts eines Service-Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte zu spezifizieren, wohin der Browser bei der Verwendung der [Reporting-API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Server-Endpunkte zu spezifizieren, wohin der Browser bei der Verwendung der [Reporting-API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.

## Übertragungscodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher zum Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der Benutzeragent akzeptiert.
- {{HTTPHeader("Trailer")}}
  - : Erlaubt es dem Absender, zusätzliche Felder am Ende einer segmentierten Nachricht einzufügen.

## WebSockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der bestätigt, dass der Client explizit beabsichtigt, ein `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die unterstützten Subprotokolle des Clients in bevorzugter Reihenfolge an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten aufzulisten, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entitäten-Headerfeld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufen für das Skriptressourcen eines Service-Workers enthalten.
    Dieser Header hilft Administratoren, Anfragen von Service-Worker-Skripten für Überwachungszwecke zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in die Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "Quellkarte")}}, damit Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code navigieren können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur)-Header kann verwendet werden, um eine bereits etablierte Client-/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) hochzustufen. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 zu HTTP 2.0 hochzustufen oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Clientpriorität anzuzeigen, oder in einer Antwort, wenn der Server die Anfrage neu priorisieren möchte.

## Experimentelle Header

### Attributionsberichte-Header

Die [Attributions-Reporting-API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel wenn ein Benutzer auf eine in eine Seite eingebettete Anzeige klickt und dann das Produkt auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen zuzugreifen. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies, sondern stützt sich auf verschiedene Header, um **Quellen** und **Trigger** zu registrieren, die zusammengebracht werden, um eine Konversion anzuzeigen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an Attributionsberichten teilzunehmen, indem entweder eine Attributionquelle oder ein Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um eine Attributionquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um einen Attributiontrigger zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Gruppe von Anforderungs-Headern, die nützliche Informationen über den Client liefern wie Gerätetyp und Netzwerkbedingungen und es Servern ermöglichen, das, was für diese Bedingungen serviert wird, zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, an denen sie interessiert sind, vom Client unter Verwendung von {{HTTPHeader("Accept-CH")}}. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise mithilfe des Headerfeldes `Accept-CH` oder eines entsprechenden HTML-`<meta>`-Elements mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzeragent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungs-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und vom Benutzeragenten oder Plattform gesetzte Benutzerpräferenzen liefern:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Benutzeragent-Marken und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : CPU-Architektur-Bitness des Benutzeragenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Form-Faktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständiger Versionsstring des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzeragentenprogramm im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Layout-Verschiebungen von Inhalten zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header gibt die Präferenz des Benutzeragenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzeragent-Client-Hinweise sind in [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der [Erlaubnisrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der in Anfragen, in denen der Bildschirm client-Hinweis {{HTTPHeader("DPR")}} verwendet wurde, das Bildgerät-zu-Pixel-Verhältnis (DPR) bestätigt, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speicherplatzes des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der das clientseitige Geräte-Pixel-Verhältnis liefert (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header gibt die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header gibt die gewünschte Breite der Ressource in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, auszuwählen, welche Informationen basierend auf der Benutzerwahl und der Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in MBit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : RTT (Round-Trip Time) auf Anwendungsschicht in Millisekunden, die auch die Serververarbeitungszeit umfasst. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzeragenten anzeigt, weniger Daten zu verwenden.

### Kompressionswörterbuch-Transport

Der [Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein geteiltes Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das Standard-Statik-Wörterbuch in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungs-Header verwenden, um das beste verfügbare Wörterbuch anzugeben, das der Server für die Kompression verwenden soll.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitgestellt hat.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte Dictionary-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Abgleichskriterien auf, für die das Wörterbuch bei zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten der Global Privacy Control (GPC), die mithilfe des {{HTTPHeader("Sec-GPC")}}-Headers an Server kommuniziert wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einem Verkauf oder Teilen seiner persönlichen Informationen durch eine Website oder einen Dienst mit Dritten einwilligt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [Dokument](/de/docs/Web/API/Document) in einem Ursprungs-gebundenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters) platziert werden soll.
    Diese Isolierung ermöglicht es Benutzeragenten, implementationsspezifischen Ressourcen für Agenten-Cluster effizienter zuzuordnen, wie Prozesse oder Threads.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichtspolitik zu deklarieren.

### Themen-API

Die Themen-API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Lesen Sie die [Themen-API](/de/docs/Web/API/Topics_API)-Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um markierte Themen, die aus der URL einer aufrufenden Seite im Response auf eine Anfrage gelöscht werden, die von einer [Funktion, die die Themen-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), abgeleitet wurden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der verbundenen Anfrage sendet, die von einer Werbetechnikplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt wird.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Headerfeld senden, um die Absicht anzuzeigen, Verfügbarkeitssignaturen zu nutzen und anzugeben, welche Arten von Signaturen es unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Vordaten übermittelt wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Bietet einen einzigartigen Schlüssel für `POST`- und `PATCH`-Anfragen, der es ermöglicht, diese idempotent auszuführen.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob irgendwelche Benutzer im IdP im aktuellen Browser angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Headerfeld überträgt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität bestimmt und diese Signatur aktualisiert wird.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Headerfeld identifiziert eine geordnete Liste von Antwort-Headerfeldern, die in eine Signatur einbezogen werden.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen zeigen, die [Raumregeln](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Spekulationsregeln, die zur Spekulation geführt haben, damit ein Server identifizieren kann, welche Regel(n) eine Spekulation verursacht haben und sie möglicherweise blockieren.

- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um sich für die Nutzung verschiedener höher-riskanter Lade-Modi zu entscheiden. Zum Beispiel erfordert das Cross-Origin-, Same-Site-Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastverteiler zu einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde, den ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastverteiler herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastverteiler herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv domainnameauflösung sowohl für Links, die der Benutzer möglicherweise verfolgt, als auch URLs für Elemente, die vom Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript und so weiter, durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indiziert werden soll. Der Header ist äquivalent zu [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der entlang der Anforderung-Reaktions-Kette verschiedene Effekte haben kann. Wird für die Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, wo der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zu Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
