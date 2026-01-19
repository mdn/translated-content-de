---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anforderung oder Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht groß-/kleinschreibungssensitiver Name, gefolgt von einem Doppelpunkt, optionalen Leerzeichen, die ignoriert werden, und schließlich dem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklertools betrachtet werden (`accept: */*`), und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die sie verursachte, als nicht-standardisierte Felder standardisiert wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgelehnt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen originaler Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anforderungsheader")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwortheader")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentationsheader")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten sprachunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxyserver")}} sie verarbeiten:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: den Server bei einer Anforderung oder den Client bei einer Antwort. Zwischengeschaltete Proxys müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene-Verbindung sinnvoll und dürfen _nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{HTTPHeader("Connection")}} Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource hinter einem Proxyserver zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Proxyserver zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache ist.
- {{HTTPHeader("Cache-Control")}}
  - : Anweisungen für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach dem die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt einen Regelsatz an, der definiert, wie Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anforderung zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anforderung zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anforderung bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anforderung bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anforderungen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anforderung bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum modifiziert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anforderung bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht modifiziert wurde. Dies gewährleistet die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit früheren oder um ein optimistisches Sperrkontrollsystem beim Ändern vorhandener Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader verglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anfordern zu müssen.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltshandelsmechanismus

Weitere Details finden Sie im [Artikel zum Inhaltshandelsmechanismus](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, gewöhnlich ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer achten, um eine explizite Benutzerwahl (wie z. B. die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anforderungsinhaltshandels-_ Antwortheader, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anforderung verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anforderungsinhaltshandels-_ Antwortheader, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anforderung verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anforderung ordnungsgemäß zu verarbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE), gibt an, wie viele Sprünge die Anforderung machen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Zeigt an, ob die Antwort auf die Anforderung offengelegt werden kann, wenn das Berechtigungsflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Vorab-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der tatsächlichen Anforderung verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Vorab-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Vorab-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Ausstellen einer Vorab-Anfrage verwendet, um den Server zu informieren, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Ausstellen einer Vorab-Anfrage verwendet, um den Server zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Zeigt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigte Werte von Attributen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, sehen dürfen, die andernfalls aufgrund von Cross-Origin-Beschränkungen als null gemeldet werden würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser einen "Speichern unter"-Dialog präsentieren sollte.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} des Stroms von Oktetten, die in einer HTTP-Nachricht gerahmt sind (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an.
    Es ist das `Content-`-Analogon zur {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.
    Es ist das `Repr-`-Analogon zur {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinie

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle vom User-Agent geladenen Ressourcen (eines bestimmten Typs) Garantien zur [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) haben.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Berichtet über Ressourcen, die der User-Agent lädt, die gegen [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) verstoßen würden, wenn die Integritätsrichtlinie durchgesetzt würde (mithilfe des `Integrity-Policy`-Headers).

## Informationen zum Nachrichtentext

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Verwendet, um den Kompressionsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, sodass ein Benutzer sie entsprechend den eigenen bevorzugten Sprachen differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben. Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, in Fällen, in denen es für den Client sonst nicht klar wäre. Browser haben keine native Verarbeitung zum Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, Implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten während der Anforderungsverarbeitung an. Beispielsweise kann sie minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anforderung normalerweise, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client, welche in dem `Prefer`-Header angegebenen Präferenzen vom Server angewendet wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxy

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxyservern, die verändert oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt durch Proxys, sowohl vorwärts- als auch rückwärtsgewandte Proxys, und kann in den Anforderungs- und Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt an, welchen Teil eines Dokuments der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen von inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil der Nachricht hingehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, auf die eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Fordert den Browser auf, die Seite neu zu laden oder zu einer anderen zu wechseln. Nimmt denselben Wert an wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden User-Agent kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}}-Header gesendet werden, bei Anfragen einbezogen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält einen charakteristischen String, der es Netzwerkprotokoll-Partnern ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anforderungsmethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anforderung zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Erlaubt einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuerung der Ressourcen, die der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, aber nicht durchsetzen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, die Berichterstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu aktivieren, um die Verwendung von für diese Website falsch ausgestellten Zertifikaten zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browser-Funktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der Website-Eigentümern erlaubt, einen oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und angibt, dass er erfolgreich die {{CSP("upgrade-insecure-requests")}}-Richtlinie handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlauben sollte, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} anzuzeigen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine plattformübergreifende Richtliniendatei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Berechtigung geben, Daten über Domains hinweg zu verarbeiten, die andernfalls durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hostingumgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, ohne jedoch einen Nutzen für die Anwendung oder ihre Besucher zu bieten. Entfernen Sie diesen Header, um zu vermeiden, potenzielle Schwachstellen offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} geben Informationen über den Kontext, aus dem die Anforderung stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anforderung basierend auf deren Herkunft und Nutzung der Ressource erlaubt werden sollte.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt das Verhältnis zwischen dem Ursprungsinitiator einer Anforderung und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anforderung an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Zeigt an, ob eine Navigationsanforderung durch Benutzaktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein Boolean ist, also sind mögliche Werte `?0` für falsch und `?1` für wahr.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anforderung an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadaten-Anforderungsheader", geben jedoch ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die zurückgegebenen Informationen zu steuern:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anforderung an, wenn der Zweck etwas anderes als eine sofortige Verwendung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorsorglich für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorab gestellten Anfrage gesendet wird, um eine Ressource beim Start des Serviceworkers zu [`fetch()`](/de/docs/Web/API/Window/fetch). Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource als bei einem normalen `fetch()`-Vorgang zurückgegeben werden soll.

## Fetch-Speicherzugriffsheader

Diese Header ermöglichen einen verbesserten Arbeitsablauf für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den "Speicherzugriffsstatus" für den aktuellen Abrufkontext an, der einer von `none`, `inactive` oder `active` sein wird.
    Der Server kann mit `Activate-Storage-Access` antworten, um den Browser aufzufordern, eine `inactive`-Berechtigung zu aktivieren und die Anforderung erneut zu versuchen, oder um eine Ressource mit Zugriff auf ihre Drittanbieter-Cookies zu laden, wenn der Status `active` ist.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine bestehende Berechtigung für sicheren Zugriff aktivieren und die Anforderung mit Cookies erneut versuchen oder eine Ressource mit Cookie-Zugriff laden kann, wenn bereits eine aktivierte Berechtigung besteht.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warn- und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die zum sicheren Übertragen der Ressource an den Benutzer verwendet wird.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der User Agent akzeptieren kann.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, zusätzliche Felder am Ende einer fragmentierten Nachricht einzufügen.

## WebSockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung zu aktualisieren.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die von der Client-Unterstützung bevorzugten WebSocket-Erweiterungen an.
    In Antworten gibt er an, welche Erweiterung der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der bestätigt, dass der Client explizit die Öffnung eines `WebSocket` beabsichtigt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er an, welches Subprotokoll der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten anzugeben, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den in Gebrauch befindlichen alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit, ein oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgetanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den jeweiligen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : In Abrufen für die Skriptressource eines Serviceworkers enthalten.
    Dieser Header hilft Administratoren, Anfragen von Serviceworker-Skripten zu protokollieren, um Überwachungszwecke zu dienen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header in der [Antwort des Serviceworker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) eingeschlossen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Source Map")}}, sodass Debugger durch den originalen Quellcode anstelle des generierten oder transformierten Codes navigieren können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Beispielsweise kann es verwendet werden, um eine Verbindung von HTTP 1.1 zu HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Gibt einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anforderung gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server die Anforderung neu priorisieren möchte.

## Experimentelle Header

### Attribution-Reporting-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen – beispielsweise wenn ein Benutzer auf eine in einer Website eingebettete Anzeige klickt und dann das Produkt auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen abrufbar zu machen. Dies geschieht ohne Verwendung von Drittanbieter-Tracking-Cookies, stattdessen werden verschiedene Header verwendet, um **Quellen** und **Trigger** zu registrieren, die auf eine Konversion hinweisen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort, die der aktuellen Anfrage entspricht, berechtigt ist, an einem Attribution-Reporting teilzunehmen, indem entweder eine Attributionsquelle oder ein Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage mit einem `Attribution-Reporting-Eligible` Header eingeschlossen, um eine Attributionsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage mit einem `Attribution-Reporting-Eligible` Header eingeschlossen, um einen Attributionstrigger zu registrieren.

### Client-Hints

HTTP [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzbedingungen bereitstellen und es Servern erlauben, zu optimieren, was für diese Bedingungen bereitgestellt wird.

Server fordern proaktiv die vom Client gewünschten Client-Hint-Header an, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, ob er die angeforderten Header in nachfolgenden Anforderungen einschließt.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client Hints mit dem `Accept-CH`-Headerfeld oder einem entsprechenden HTML-`<meta>`-Element mit [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client Hints auch [kritische Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client Hints sind unten aufgeführt.

#### User-Agent-Client-Hints

Die [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungsheader, die Informationen über den User-Agent, die darauf laufende Plattform/Architektur sowie Benutzereinstellungen auf dem User-Agent oder der Plattform bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marke und Version des User Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des User Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitanzahl der zugrunde liegenden CPU-Architektur des User Agents (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des User Agents, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständiger Versionsstring des User Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des User Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der User Agent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des User Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des User Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das User-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Farb-Schema-Präferenz des Benutzers zwischen dunkel und hell.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Inhaltsverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Gibt an, dass die Präferenz des Benutzers für reduzierte Transparenz im User Agent besteht.

> [!NOTE]
> User-Agent-Client-Hints sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) delegiert werden, was zur Datenexfiltration verwendet werden könnte.

#### Geräte- und responsiven Bild-Client-Hints

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefähre Menge an verfügbarem Arbeitsspeicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Anforderungsheader, der die Pixelanzahl pro Zoll (device pixel ratio) des Client-Geräts angibt (die Anzahl der physischen {{Glossary("device_pixel", "Gerätepixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{experimental_inline}}
  - : Anforderungsheader, der die Höhe des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{experimental_inline}}
  - : Anforderungsheader, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Width")}} {{experimental_inline}}
  - : Anforderungsheader, der die Breite des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bietet.

##### Veraltete Geräte- und responsiven Bild-Client-Hints

- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Width")}}

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints erlauben einem Server, auszuwählen, welche Informationen basierend auf der Benutzerwahl und Netzwerkbandbreite sowie Latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefährer Wert für die Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), das die Latenz und Bandbreite der Verbindung am besten beschreibt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Application Layer Round Trip Time (RTT) in Millisekunden, inklusive der Serververarbeitungszeit. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des User Agents für geringeren Datenverbrauch angibt.

### Transport von Kompressionswörterbüchern

[Transport von Kompressionswörterbüchern](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsames Kompressionswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu verringern, anstatt das Standard-Statik-Wörterbuch in der {{Glossary("Brotli_compression", "Brotli-Kompression")}} oder der {{Glossary("Zstandard_compression", "Zstandard-Kompression")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungsheader verwenden, um das beste Wörterbuch anzugeben, das er für den Server zur Kompression hat.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat, und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitstellt.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die serverbereitgestellte Wörterbuch-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die übereinstimmenden Kriterien auf, für die das Wörterbuch zukünftig verwendet werden kann.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Benutzerpräferenz zum Tracking (Do Not Track) angibt.
    Inzwischen durch Global Privacy Control (GPC) abgelöst, das Servern mithilfe des {{HTTPHeader("Sec-GPC")}}-Headers kommuniziert wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anforderung angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, ihre persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einer _origin-basierten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es Benutzer-Agents, implementierungsspezifische Ressourcen für Agenten-Cluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der Entwicklern ermöglicht, eine Netzfehlerberichtspolitik zu deklarieren.

### Topics API

Die Topics API bietet einen Mechanismus, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) implementieren können. Weitere Informationen finden Sie in der [Dokumentation zur Topics API](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL der aufrufenden Website abgeleitet wurden und in der Antwort auf eine Anfrage beobachtet werden, die durch ein [Feature, das die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Headerfeld senden, um die Absicht auszudrücken, eventuelle verfügbare Signaturen zu nutzen, und anzugeben, welche Arten von Signaturen unterstützt werden.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anforderung in TLS-Offline-Daten übermittelt wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Bietet einen eindeutigen Schlüssel für `POST`- und `PATCH`-Anfragen und ermöglicht es, dass sie idempotent gemacht werden.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, gesendet von einem föderierten Identitätsanbieter (IdP), um dessen Anmeldestatus festzulegen, was bedeutet, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Headerfeld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie Autorität bestimmt und die Signatur aktualisiert wird.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Headerfeld identifiziert eine geordnete Liste von Antwort-Headerfeldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelset des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte der Spekulationsregeln, die zur Spekulation geführt haben, sodass ein Server erkennen kann, welche Regel(n) eine Spekulation verursacht haben, und möglicherweise blockieren kann.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Verwendung verschiedener höher riskanter Lademodi zu genehmigen. Zum Beispiel erfordert die plattformübergreifende gleichseitige [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprüngliche IP-Adresse eines Clients, der über einen HTTP-Proxy oder einen Lastausgleichsserver eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastausgleichsserver herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastausgleichsserver herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv DNS-Abfragen von sowohl Links durchführen, denen Benutzer möglicherweise folgen könnten, als auch von URLs für Elemente, auf die vom Dokument referenziert wird, einschließlich Bilder, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzuzeigen, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indexiert werden soll. Der Header ist gleichbedeutend mit [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der überall entlang der Anfrage-Antwort-Kette verschiedene Effekte haben kann. Wird zur Rückwärtskompatibilität mit HTTP/1.0 Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
