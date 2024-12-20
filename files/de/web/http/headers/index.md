---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: 3cb8c590ddc700407ac4295ca4d3191ac10ddc8e
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht-anfälliger Name, gefolgt von einem Doppelpunkt, dann optionalen Leerzeichen, die ignoriert werden, und schließlich seinem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwickler-Tools betrachtet werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die entstanden, wenn nichtstandardmäßige Felder standardmäßig wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) als veraltet erklärt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können entsprechend ihrer Kontexte gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie deren Standort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie deren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder die angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Payload-Daten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch entsprechend ihrer Behandlung durch {{Glossary("Proxy_server", "Proxies")}} gruppiert werden:

- End-to-end-Header
  - : Diese Header _müssen_ zum endgültigen Empfänger der Nachricht übertragen werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene sinnvoll und _dürfen nicht_ von Proxies weitergeleitet oder gespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem {{httpheader("Connection")}}-Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzer-Agenten bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzer-Agenten bei einem Proxy-Server zu authentifizieren.

## Cache

- {{HTTPHeader("Age")}}
  - : Die Zeit, in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln diktieren, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das verwendet wird, um verschiedene Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein einzigartiger String, der die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource keinen der angegebenen ETags entspricht. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übermittelt wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übermitteln, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übermittelt wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragmentes eines bestimmten Bereiches mit den vorherigen sicher oder ermöglicht die Implementierung eines optimistischen Concurrency-Control-Systems beim Ändern bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfragen-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue von dem Ursprung-Server anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsaushandlung

Weitere Einzelheiten finden Sie im Artikel [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Compression), der auf der zurückgesendeten Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Nutzers: Der Server sollte immer darauf achten, eine explizite Nutzerauswahl (wie etwa die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _request content negotiation_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _request content negotiation_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu verarbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE), gibt die maximale Anzahl von Hops an, die die Anfrage durchlaufen kann, bevor sie an den Absender reflektiert wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agenten.

## CORS

Für mehr Informationen, siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldezeugnis-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort freigegeben werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Erteilen einer Preflight-Anfrage verwendet, um den Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Erteilen einer Preflight-Anfrage verwendet, um den Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet werden würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übermittelte Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll, und der Browser einen "Speichern unter"-Dialog präsentieren sollte.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("digest", "Digest")}} des Oktettstroms, der in einer HTTP-Nachricht gerahmt ist (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("digest", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung. Anders als der {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Teilt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header mit. Es ist das `Content-` Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Teilt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header mit. Es ist das `Repr-` Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum vorgesehen sind, damit ein Nutzer je nach seinen eigenen bevorzugten Sprachen unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der klientenseitigen Seite der Proxy-Server, die verändert oder verloren gehen, wenn ein Proxy auf dem Anforderungspfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl vorwärts- als auch rückwärts-Proxys, und kann sowohl in den Anfrage- als auch in den Antwort-Headern erscheinen.

## Teilbereichsanforderungen

HTTP [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Media-Player, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachrichten ein Teilnachricht zu platzieren ist.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Fordert den Browser auf, die Seite neu zu laden oder zu einer anderen zu leiten. Nimmt den gleichen Wert an wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzer-Agenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link auf die aktuell angeforderte Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}}-Header gesendet werden, bei Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Benutzer-Agenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die unterstützten HTTP-Anfrage-Methoden einer Ressource auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu erklären.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort auf die Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP Explainer Artikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem ihre Effekte überwacht, aber nicht erzwungen werden. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, die Berichterstattung und Durchsetzung von [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren, um die Verwendung von missbräuchlich ausgestellten Zertifikaten für diese Site zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus zum Erlauben und Verweigern der Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{HTMLElement("iframe")}}s, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der Website-Betreibern die Angabe von einem oder mehreren Endpunkten ermöglicht, die zum Empfang von Fehlern wie CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verletzungen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern sollte.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Erlaubnis gewähren, Daten über Domänen hinweg zu verarbeiten, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients ungewollte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, bietet jedoch keinen Nutzen für die Anwendung oder deren Besucher. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Cross-Site-Skriptfilterung.

### Fetch Metadata Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch Metadata Anfrage-Header")}} stellen Informationen über den Kontext bereit, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen zu treffen, ob eine Anfrage erlaubt werden soll, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsort eines Anforderungsinitiators und dem Zielort an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage für einen Server an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturiertes Header, dessen Wert ein boolesches ist, sodass die möglichen Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfragen-Header sind nicht _streng genommen_ "Fetch-Metadata-Anfrage-Header", aber sie liefern ähnlich Informationen über den Kontext, wie eine Ressource verwendet werden wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die unmittelbare Nutzung durch den Benutzer-Agenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der anzeigt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in einer präemptiven Anfrage gesendet wird, um eine Ressource während des Startvorgangs des Service Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource zurückgegeben werden sollte als bei einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte zu spezifizieren, an denen der Browser Warn- und Fehlerberichte beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte zu spezifizieren, an denen der Browser Warn- und Fehlerberichte beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der Benutzerclient akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Sender, zusätzliche Felder am Ende einer Chunked-Nachricht hinzuzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung aufzurüsten.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client bevorzugten WebSocket-Erweiterungen an. In Antworten gibt er die vom Server aus den Vorlieben des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header, der einen Schlüssel enthält, der verifiziert, dass der Client ausdrücklich beabsichtigt, eine `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client bevorzugten Subprotokolle an. In Antworten gibt er das aus den Vorlieben des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an. In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zum Erreichen dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den gerade verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht ursprünglich erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet ein Mittel zum Serialisieren von einem oder mehreren Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten soll, bevor eine Folgeanfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufen für das Skriptressourcen eines Service Workers hinzugefügt. Dieser Header hilft Administratoren, Anfragen von Service Worker-Skriptdateien zu protokollieren, um Überwachungszwecke zu erfüllen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) durch die Aufnahme dieses Headers [in die Antwort des Service Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) zu beheben.
- {{HTTPHeader("SourceMap")}}
  - : Link zu einer {{Glossary("source_map", "Quellkarte")}}, damit Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code schrittweise laufen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Beispielsweise kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 zu HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in ein WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung. Der Wert kann in einer Anfrage gesendet werden, um die Priorität des Clients anzugeben, oder in einer Antwort, wenn der Server beschließt, die Anforderung neu zu priorisieren.

## Experimentelle Header

### Attribution Reporting Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Benutzer auf eine Anzeige klickt, die auf einer Website eingebettet ist, und dann auf der Website des Anbieters das Produkt kauft – und dann Berichte über diese Konversionen abzurufen. Sie tut dies, ohne auf Drittanbieter-Cookies zurückzugreifen, sondern verwendet stattdessen verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die eine Konversion anzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort, die mit der aktuellen Anfrage übereinstimmt, berechtigt ist, an der Attribution-Reporting teilzunehmen, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt, verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt, verwendet, um einen Attributionsauslöser zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anfrage-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen liefern und es Servern ermöglichen, das Servierte für diese Bedingungen zu optimieren.

Server fordern die Client-Hinweis-Header, an denen sie interessiert sind, proaktiv vom Client an, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, ob er die angeforderten Header in nachfolgenden Anfragen aufnimmt.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise mit dem `Accept-CH` Header-Feld oder einem äquivalenten HTML `<meta>`-Element mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzer-Agent-Client-Hinweise

Die [UA Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anfrage-Header, die Informationen über den Benutzer-Agenten, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die auf dem Benutzer-Agenten oder der Plattform festgelegt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformationen des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitness der zugrunde liegenden CPU-Architektur des Benutzer-Agenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des Benutzer-Agenten, die beschreiben, wie der Benutzer mit dem Benutzer-Agenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzer-Agent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätmodell des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem-/Plattform des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des Betriebssystem des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzer-Agent läuft im 32-Bit-Modus auf 64-Bit-Windows.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Vorliebe des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Vorliebe des Benutzers, weniger Animationen und Inhaltslayoutsverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header zeigt die Vorliebe des Benutzer-Agenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hinweise sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, weil sie auf [Berechtigungsrichtliniendelegation](/de/docs/Web/HTTP/Permissions_Policy) basieren, die genutzt werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Bild-Gerät-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge der verfügbaren Client-RAM-Speicher. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der das Pixelverhältnis des Clientgeräts angibt (die Anzahl der physischen Gerätepixel für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header gibt die Layout-Ansichtbereichsbreite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header zeigt die gewünschte Ressourcenbreite in physikalischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server zu entscheiden, auf Grundlage der Benutzerwahl und der Netzwerkauslastung und Latenz, welche Informationen gesendet werden sollen.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Verzögerung und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsbenutzerlagen-Rundlaufzeit (RTT) in Millisekunden, die die Serverbearbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein `on`, das die Präferenz des Benutzer-Agenten für eine reduzierte Datennutzung angibt.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Präferenz des Benutzers zum Tracking angibt (Do Not Track). Veraltet zugunsten der Global Privacy Control (GPC), die den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und den Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage galt. Verwendung in Verbindung mit DNT.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen mit Dritten zu verkaufen oder zu teilen.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, um Webanwendungen zu erlauben, ihre Ursprünge zu isolieren.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkausfall-Meldepolitik zu erklären.

### Themen-API

Die Topics API stellt einen Mechanismus bereit, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) implementieren können. Weitere Informationen finden Sie in der [Topics API](/de/docs/Web/API/Topics_API)-Dokumentation.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse, die aus der URL einer aufrufenden Seite abgeleitet wurden, als in der Antwort auf eine Anfrage beobachtet zu markieren, die von einer [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Werbetechnologieplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Sonstiges

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header-Feld senden, um die Absicht anzugeben, vorhandene Signaturen zu nutzen und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS frühe Daten übermittelt wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzuzeigen, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in ein _Ursprung-gekapseltes [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll. Diese Isolierung ermöglicht es Benutzer-Agenten, implementierungsspezifische Ressourcen wie Prozesse oder Threads für Agent-Cluster effizienter zuzuweisen.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Login-Status zu setzen, also ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht. Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld überträgt eine Liste von Signaturen für einen Austausch, jede mit Informationen darüber, wie die Autorität bestimmt und die Signatur erneuert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur aufgenommen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zur Spekulationsregelmenge des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget festgelegt, um die Verwendung verschiedener risikoreicher Lademodi zu ermöglichen. Beispielsweise erfordert das Prerendering von Sitzungen mit berechtigter Nutzung dasselbe Präfix-Präfix `credentialed-prerender`.

## Nicht-standardmäßige Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der eine Verbindung zu einem Webserver über einen HTTP-Proxy oder einen Lastverteiler herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde und den ein Client verwendet hat, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung mit Ihrem Proxy oder Load-Balancer herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching, eine Funktion, mit der Browser proaktiv die Namensauflösung von Domains sowohl für Links durchführen, die ein Benutzer möglicherweise auswählt, als auch für URLs von Elementen, die von dem Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb der öffentlichen Suchmaschinenergebnisse indiziert werden soll. Der Header ist effektiv äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an jedem Punkt in der Anforderung-Antwort-Kette verschiedene Effekte haben kann. Wird für die Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Beitrag leisten

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Überprüfen Sie https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
