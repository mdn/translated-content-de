---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort auszutauschen.
In HTTP/1.X ist ein Header eine nicht auf Groß-/Kleinschreibung achtende Bezeichnung, gefolgt von einem Doppelpunkt, dann optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwickler-Tools betrachtet werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) versehen (`:status: 200`).
Mehr Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte, proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die entstanden, als nicht standardmäßige Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) zu Standardfeldern wurden, abgelehnt; weitere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgelistet, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf und enthält [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten zusätzliche Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie zum Beispiel ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Darstellungs-Header")}}
  - : Enthalten Informationen über den Hauptteil der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Lastdaten-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Lastdaten, einschließlich Inhaltslänge und Kodierung, die für den Transport verwendet wird.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxyserver")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den Endempfänger der Nachricht übertragen werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung auf niedrigster Ebene von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder gecached werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem Header {{HTTPHeader("Connection")}} gesetzt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden sollte.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents beim Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden sollte.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents bei einem Proxyserver.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit, in Sekunden, die das Objekt im Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach denen die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie sich die Abfrageparameter einer URL auf das Cache-Matching auswirken. Diese Regeln diktieren, ob die gleiche URL mit verschiedenen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Konditionen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum modifiziert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht modifiziert wurde. Dies stellt die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit früheren sicher oder dient zur Implementierung eines Systems zur optimistischen Nebenläufigkeitskontrolle bei der Modifikation bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfrage-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine frische vom Origin-Server anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsverhandlung

Weitere Details finden Sie im Artikel zur [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesandt werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, meist ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der für die zurückgesandte Ressource verwendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die Menschensprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht notwendigerweise vollständig unter der Kontrolle des Benutzers: der Server sollte immer darauf achten, die explizite Benutzerwahl (wie zum Beispiel eine Sprache aus einem Dropdown-Menü zu wählen) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _request content negotiation_ Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}} Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _request content negotiation_ Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}} Anfrage verstehen kann.

## Steuerungsmechanismen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) gibt es die maximale Anzahl von Sprüngen an, die die Anfrage machen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Credential-Flag true ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort freigegeben werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache bleiben können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Erstellung einer Preflight-Anfrage verwendet, um den Server wissen zu lassen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Erstellung einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Fetch stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, denen es erlaubt ist, Werte von Attributen abzurufen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als Null berichtet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialogfeld anzeigen sollte.

## Integritäts-Hashes

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} des Streams von Oktetten, die in einer HTTP-Nachricht gerahmt sind (der Nachrichtinhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} der gewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} wird bei diesem Digest {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}} nicht berücksichtigt.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Analogon von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Analogon von {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinie

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle vom Benutzer-Agent geladenen Ressourcen (einer bestimmten Art) [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Garantien haben.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Berichtet über Ressourcen, die der Benutzer-Agent lädt und die die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) Garantien verletzen würden, wenn die Integritätsrichtlinie durchgesetzt würde (unter Verwendung des `Integrity-Policy` Headers).

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die für das Publikum vorgesehene menschliche Sprache(n), sodass ein Benutzer eigene bevorzugte Sprache(n) unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewandt wurde, in Fällen, in denen es andernfalls für den Client unklar wäre.
Browser haben keine native Handhabung für das Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementation-specific Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhaltensweisen während der Anfrageverarbeitung an. Zum Beispiel kann er minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche im `Prefer` Header angegebenen Präferenzen vom Server angewandt wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Ansicht von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies, sowohl Forward- als auch Reverse-Proxies, hinzugefügt und kann sowohl in den Anfrage-Headern als auch in den Antwort-Headern erscheinen.

## Range-Anfragen

HTTP [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) erlauben es dem Client, einen Teil einer Ressource vom Server anzufordern.
Range-Anfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die nur Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer erlauben, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Range-Anfragen unterstützt und in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Range-Anfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um zu verhindern, dass zwei Bereiche von unvereinbaren Versionen der Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teilnachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen umzuleiten. Hat denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anfragkontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse eines menschlichen Nutzers, der den anfordernden Benutzer-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}} Header mit gesendeten Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokollpartnern ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Erlaubt einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu erklären.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert Ressourcen, die der Benutzer-Agent für eine Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, aber nicht erzwingen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}} Dokumenten, die über eine HTTP `POST` Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, das Reporting und die Durchsetzung von [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu aktivieren, um die Verwendung von fehlerhaft ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der es Website-Eigentümern ermöglicht, einen oder mehrere Endpunkte für den Empfang von Fehlern wie CSP-Verstoßmeldungen, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichten oder anderen allgemeinen Verstößen anzugeben.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, um die Bevorzugung eines verschlüsselten und authentifizierten Antworts auszudrücken und zeigt an, dass der Client die {{CSP("upgrade-insecure-requests")}} Direktive erfolgreich bearbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine richtlinienübergreifende Datei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderen) die Erlaubnis geben, Daten über Domänen hinweg zu behandeln, die andernfalls aufgrund der [Identitätsursprungsrichtlinie](/de/docs/Web/Security/Defenses/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies` Header überschreibt solche Richtliniendateien, sodass Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es keine Nützlichkeit für die Anwendung oder ihre Besucher bietet. Deaktivieren Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Filtern von Cross-Site-Scripting.

### Fetch-Metadaten-Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden soll, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsinitiator einer Anfrage und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein Boolean ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind nicht _streng_ "Fetch-Metadaten-Anfrage-Header", bieten aber ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die Informationen, die zurückgegeben werden:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die sofortige Verwendung durch den Benutzer-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der anzeigt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in präventiver Anfrage gesendet wird, um [`fetch()`](/de/docs/Web/API/Window/fetch) eine Ressource während des Startvorgangs des Service-Workers zu holen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einer normalen `fetch()`-Operation.

## Fetch-Speicherzugriffs-Header

Diese Header ermöglichen einen verbesserten Workflow für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffsstatus" für den aktuellen Abrufkontext an, der einer von `none`, `inactive` oder `active` sein wird.
    Der Server kann mit `Activate-Storage-Access` antworten, um zu verlangen, dass der Browser eine `inactive` Berechtigung aktiviert und die Anfrage erneut versucht oder eine Ressource mit Zugriff auf seine Drittanbieter-Cookies lädt, wenn der Status `active` ist.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird in Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine bestehende Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies erneut versuchen oder eine Ressource mit Cookie-Zugriff laden kann, wenn bereits eine aktivierte Berechtigung besteht.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header zur Angabe von Serverendpunkten, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) genutzt wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header zur Angabe von Serverendpunkten, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) genutzt wird.

## Transcodierung der Übertragung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzer-Agent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, zusätzliche Felder am Ende einer chunked-Nachricht hinzuzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der angibt, dass der Server bereit ist, eine WebSocket-Verbindung hochzustufen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen an.
    In Antworten gibt er die vom Server aus den Client-Vorlieben ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header, der einen Schlüssel enthält, der bestätigt, dass der Client explizit die Öffnung eines `WebSocket` beabsichtigt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten Sub-Protokolle an.
    In Antworten gibt er das vom Server aus den Client-Vorlieben ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen, die der Server unterstützt, auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege aufzulisten, um diesen Service zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativ verwendeten Service zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten sollte, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Fetches für das Script-Resource eines Service-Workers enthalten.
    Dieser Header hilft Administratoren, Anfragen für Service-Worker-Scripts zu protokollieren, um sie zu Überwachungszwecken zu verwenden.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "Source Map")}}, sodass Debugger durch den Originalquellcode anstelle von generiertem oder transformiertem Code treten können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) hochzustufen. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket hochzustufen.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität einer bestimmten Ressourcenanfrage auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Attribution-Reporting-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Conversions zu messen — zum Beispiel, wenn ein Benutzer auf eine in einer Seite eingebettete Anzeige klickt und dann fortfährt, den Artikel auf der Seite des Anbieters zu kaufen — und dann Berichte über diese Conversions abzurufen. Dies geschieht, ohne sich auf Third-Party-Tracking-Cookies zu verlassen, stattdessen verlässt es sich auf verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die darauf hinweisen, dass eine Conversion stattgefunden hat.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Seitenanforderung durch die Registrierung entweder einer Zuweisungsquelle oder eines Auslösers für die Berichterstattung geeignet ist.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Teil einer Antwort auf eine Anforderung, die einen `Attribution-Reporting-Eligible` Header enthielt; dies wird verwendet, um eine Zuweisungsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Teil einer Antwort auf eine Anforderung, die einen `Attribution-Reporting-Eligible` Header enthielt; dies wird verwendet, um einen Zuweisungsauslöser zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anfrage-Headern, die nützliche Informationen über den Client wie den Gerätetyp und die Netzwerkkonditionen liefern und es Servern ermöglichen, das zu optimieren, was für diese Bedingungen serviert wird.

Server fordern proaktiv die Client-Hinweis-Header, an denen sie vom Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise über das `Accept-CH` Header-Feld oder ein entsprechendes HTML `<meta>` Element mit [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut ankündigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die unterschiedlichen Kategorien von Client-Hinweisen sind unten aufgelistet.

#### Benutzeragent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anfrage-Header, die Informationen über den Benutzer-Agent, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die auf dem Benutzer-Agent oder der Plattform gesetzt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Benutzeragent-Branding und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Benutzeragent-Grundplattformarchitektur.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Benutzeragent-Grund-CPU-Architektur-Bitness (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Benutzeragent-Formfaktoren, die beschreiben, wie der Benutzer mit dem Benutzer-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Benutzeragent-Vollversionszeichenfolge.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jede Marke in der Markenliste des Benutzer-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Benutzeragent-Gerätemodell.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Benutzeragent-Grundlage bzw. Betriebssystem/Plattform.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Benutzeragent-Betriebssystemversion.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzer-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Benutzerpräferenz für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Benutzerpräferenz, weniger Animationen und Layoutverschiebungen für Inhalte zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header, der die Benutzeragent-Präferenz für reduzierte Transparenz angibt.

> [!NOTE]
> Benutzeragent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie sich auf die [Rechte-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Delegation stützen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte- und responsive Bild-Client-Hinweise

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefährer Betrag des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Anfrage-Header, der das Geräte-Pixelverhältnis des Clients bereitstellt (die Anzahl der physikalischen {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{experimental_inline}}
  - : Anfrage-Header, der die Layout-Viewport-Höhe des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Sec-CH-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Bildbreite in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.

##### Veraltete Geräte- und responsive Bild-Client-Hinweise

- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Width")}}

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben es einem Server, zu wählen, welche Informationen basierend auf der Benutzerauswahl und der Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Client-Verbindung zum Server, in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der die Latenz und Bandbreite der Verbindung am besten beschreibt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Rundlaufzeit auf Anwendungsebene (RTT) in Millisekunden, die die Serverbearbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzer-Agents für reduzierten Datenverbrauch angibt.

### Kompressionswörterbuch-Transport

[Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das Standard-Static-Wörterbuch in {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anfrage-Header verwenden, um das beste Wörterbuch anzugeben, das ihm für den Server zur Verwendung bei der Kompression zur Verfügung steht.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary` Header bereitstellt.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, verfügen über einen `Available-Dictionary` Header und die vom Server bereitgestellte `Dictionary-ID` im `Dictionary-ID` Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Übereinstimmungskriterien auf, für die das Wörterbuch bei zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten der Global Privacy Control (GPC), die durch den {{HTTPHeader("Sec-GPC")}} Header an Server kommuniziert wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status anzeigt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer damit einverstanden ist, dass eine Website oder ein Service ihre persönlichen Informationen an Dritte verkauft oder teilt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugeordnete [`Document`](/de/docs/Web/API/Document) in einem _ursprungsbasierten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte.
    Diese Isolation ermöglicht es Benutzer-Agents, implementationsspezifische Ressourcen für Agenten-Cluster wie Prozesse oder Threads effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkausfallberichtpolitik zu erklären.

### Themen-API

Die Topics API bietet einen Mechanismus, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) implementieren können.
Siehe die [Themen-API](/de/docs/Web/API/Topics_API) Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Seite abgeleitet sind, wenn in der Antwort auf eine Anforderung, die durch eine Funktion generiert wurde, die die Topics API ermöglicht.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Werbeplattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzugeben, von verfügbaren Signaturen zu profitieren und um anzugeben, welche Art von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early Data übermittelt wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Bietet einen eindeutigen Schlüssel für `POST`- und `PATCH` Anfragen, sodass sie idempotent gemacht werden können.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld vermittelt eine Liste von Signaturen für einen Austausch, wobei jede von ihnen mit Informationen darüber versehen ist, wie die Autorität bestimmt und die Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zu dem Spekulationsregel-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Spekulationsregeln, die zur Spekulation führten, sodass ein Server identifizieren kann, welche Regel(n) eine Spekulation verursacht haben, und diese möglicherweise blockieren.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um zu verschiedenen risikoreicheren Lademodi zu wechseln. Zum Beispiel erfordert cross-origin, same-site [Pre-Rendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Lastenausgleicher mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client zum Verbinden mit Ihrem Proxy oder Lastenausgleicher verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client zum Verbinden mit Ihrem Proxy oder Lastenausgleicher verwendet hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Namensauflösung bei Domänen sowohl für Links durchführen, denen der Benutzer möglicherweise folgen könnte, als auch für URLs von Artikeln im Dokument, einschließlich Bilder, CSS, JavaScript und so weiter.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb der Suchmaschinenergebnisse indexiert werden soll. Der Header entspricht den [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der verschiedene Effekte überall entlang der Request-Response-Kette haben kann. Wird für Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, in denen der `Cache-Control` Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warnhinweise über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite über Liste der HTTP-Header-Felder](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Arbeitsgruppe](https://httpwg.org/specs/)
