---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

**HTTP-Header** ermöglichen es dem Client und dem Server, mit einer Nachricht in einer Anfrage oder Antwort zusätzliche Informationen zu übermitteln.
In HTTP/1.X ist ein Header ein Name ohne Beachtung der Groß- und Kleinschreibung, gefolgt von einem Doppelpunkt, anschließend optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header bei der Anzeige in Entwicklerwerkzeugen kleingeschrieben dargestellt (`accept: */*`) und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt vorangestellt (`:status: 200`).
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit dem Präfix `X-` verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die sie verursachte, wenn nicht standardisierte Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, als veraltet eingestuft; weitere sind in der [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Die IANA-Registry führt Header auf, einschließlich [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können anhand ihres Kontexts gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, etwa ihren Ort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Body der Ressource, etwa ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Komprimierung.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Payload-Daten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: den Server bei einer Anfrage oder den Client bei einer Antwort. Zwischenliegende Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Verbindung auf Transportebene relevant und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mithilfe des Headers {{HTTPHeader("Connection")}} gesetzt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Zugangsdaten zur Authentifizierung eines User-Agents gegenüber einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Zugangsdaten zur Authentifizierung eines User-Agents gegenüber einem Proxyserver.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die sich das Objekt in einem Proxy-Cache befunden hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen sowohl in Anfragen als auch in Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verknüpft sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum bzw. die Uhrzeit, nach dem bzw. der die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL den Cache-Abgleich beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das zum Vergleich mehrerer Versionen derselben Ressource verwendet wird. Es ist weniger genau als {{HTTPHeader("ETag")}}, in einigen Umgebungen jedoch einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit keinem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache nicht mehr aktuell ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen Fragmenten sicher oder implementiert beim Ändern vorhandener Dokumente ein System zur optimistischen Nebenläufigkeitssteuerung.
- {{HTTPHeader("Vary")}}
  - : Legt fest, wie Anfrage-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Origin-Server anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Weitere Einzelheiten finden Sie im Artikel zur [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die natürliche Sprache, die der Server voraussichtlich zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte stets darauf achten, eine ausdrückliche Auswahl des Benutzers nicht zu überschreiben, beispielsweise die Auswahl einer Sprache aus einer Dropdown-Liste.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Antwort-Header für _Anfrage-Inhaltsaushandlung_, der ankündigt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Antwort-Header für _Anfrage-Inhaltsaushandlung_, der ankündigt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, damit die Anfrage ordnungsgemäß verarbeitet werden kann.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage durchlaufen darf, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem Header {{HTTPHeader("Set-Cookie")}} gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Credentials-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubten Methoden an.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt durch Auflisten ihrer Namen an, welche Header als Teil der Antwort offengelegt werden können.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Ausstellen einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Ausstellen einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Fetch stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Origins an, die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden und aufgrund von Cross-Origin-Einschränkungen andernfalls als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne Header) oder ob sie wie ein Download behandelt werden soll und der Browser einen „Speichern unter“-Dialog anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} des in einer HTTP-Nachricht gerahmten Oktettstroms bereit (des Nachrichteninhalts), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung bereit.
    Anders als {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Äußert den Wunsch nach einem Header {{HTTPHeader("Content-Digest")}}.
    Er ist das `Content-`-Analogon von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Äußert den Wunsch nach einem Header {{HTTPHeader("Repr-Digest")}}.
    Er ist das `Repr-`-Analogon von {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinie

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle Ressourcen, die der User-Agent lädt (eines bestimmten Typs), [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantien haben.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Meldet Ressourcen, die der User-Agent lädt und die gegen [Subresource-Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)-Garantien verstoßen würden, wenn die Integritätsrichtlinie durchgesetzt würde (mithilfe des Headers `Integrity-Policy`).

## Informationen zum Nachrichten-Body

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource als dezimale Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die für die Zielgruppe bestimmte(n) natürliche(n) Sprache(n), sodass ein Benutzer nach seiner eigenen bevorzugten Sprache unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Nachrichtensignaturen

- {{HTTPHeader("Accept-Signature")}}
  - : Der Header [`Accept-Signature`](https://www.rfc-editor.org/info/rfc9421/#section-5.1) fordert eine signierte Antwort oder nachfolgende Anfrage an und gibt die zu signierenden Komponenten und Signaturparameter an.
- {{HTTPHeader("Signature")}}
  - : Der Header [`Signature`](https://www.rfc-editor.org/info/rfc9421/#section-4.2) enthält einen oder mehrere beschriftete Signaturwerte. Jede Beschriftung entspricht einem Eintrag in `Signature-Input`.
- {{HTTPHeader("Signature-Input")}}
  - : Der Header [`Signature-Input`](https://www.rfc-editor.org/info/rfc9421/#section-4.1) identifiziert die geordnete Liste der von jeder Signatur abgedeckten Nachrichtenkomponenten sowie deren Metadaten, beispielsweise Erstellungszeit und Schlüsselkennung.

> [!NOTE]
> Diese Definitionen folgen RFC 9421. Der [Entwurf zu Signed HTTP Exchanges (SXG)](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html) definiert ebenfalls `Accept-Signature` und `Signature` mit inkompatibler Semantik sowie einen eigenen Header `Signed-Headers`. Die einzige Browserimplementierung von SXG, Chromium, unterstützt diese jedoch nicht als HTTP-Header.

## Präferenzen

Clients können Präferenzen in Anfragen senden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, wenn dies andernfalls für den Client mehrdeutig wäre.
Browser bieten keine native Unterstützung für das Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für bestimmte Serververhaltensweisen während der Anfrageverarbeitung an. Beispielsweise kann minimaler Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) angefordert werden. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche im Header `Prefer` angegebenen Präferenzen vom Server angewendet wurden. Dies ist ein Header nur für Antworten, der Transparenz über die Behandlung von Präferenzen bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxyservern, die geändert werden oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl von Forward- als auch von Reverse-Proxys, und kann in Anfrage-Headern und Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind für Anwendungen wie Mediaplayer nützlich, die Direktzugriff unterstützen, für Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, sowie für Download-Manager, die Benutzern das Anhalten und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen zweier Bereiche aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, an welcher Stelle in einer vollständigen Body-Nachricht eine Teilnachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Akzeptiert denselben Wert wie das Element `meta` mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse eines menschlichen Benutzers, der den anfragenden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für virtuelles Hosting) und optional die TCP-Portnummer an, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Legt fest, welche Referrer-Informationen, die im Header {{HTTPHeader("Referer")}} gesendet werden, in ausgeführten Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es Netzwerkprotokoll-Gegenstellen ermöglicht, Anwendungstyp, Betriebssystem, Softwareanbieter oder Softwareversion des anfragenden Software-User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anfragemethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die vom Origin-Server verwendete Software zur Verarbeitung der Anfrage.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Embedder-Richtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [erklärenden Artikel zu CORP](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert, welche Ressourcen der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, mit Richtlinien zu experimentieren, indem deren Auswirkungen überwacht, aber nicht durchgesetzt werden. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht Websites die Teilnahme an der Meldung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency), um die Verwendung falsch ausgestellter Zertifikate für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus zum Erlauben und Verweigern der Nutzung von Browserfunktionen im eigenen Frame einer Website sowie in eingebetteten {{htmlelement("iframe")}}s.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der Websiteinhabern erlaubt, einen oder mehrere Endpunkte anzugeben, die zum Empfang von Fehlern wie CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verletzungen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt Kommunikation über HTTPS statt über HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und angibt, dass dieser die Direktive {{CSP("upgrade-insecure-requests")}} erfolgreich verarbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den in {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderem) die Berechtigung erteilen, Daten über Domains hinweg zu verarbeiten, die andernfalls aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) eingeschränkt wären.
    Der Header `X-Permitted-Cross-Domain-Policies` überschreibt solche Richtliniendateien, sodass Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen darüber, ohne der Anwendung oder ihren Besuchern einen Nutzen zu bieten. Entfernen Sie diesen Header, um die Offenlegung potenzieller Sicherheitslücken zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert Cross-Site-Scripting-Filterung.

### Fetch-Metadaten-Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} stellen Informationen über den Kontext bereit, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden soll, basierend darauf, woher die Anfrage stammt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen der Origin des Anfrageinitiators und der Origin des Ziels an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt einem Server den Modus der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktivierung ausgelöst wurde. Es ist ein Structured Header, dessen Wert ein boolescher Wert ist; mögliche Werte sind daher `?0` für falsch und `?1` für wahr.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind nicht _streng genommen_ „Fetch-Metadaten-Anfrage-Header“, stellen jedoch ähnlich Informationen über den Kontext bereit, in dem eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn dieser Zweck nicht die unmittelbare Verwendung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorsorglich für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in einer vorsorglichen Anfrage gesendet wird, um während des Starts eines Service Workers eine Ressource mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource als bei einem normalen `fetch()`-Vorgang zurückgegeben werden soll.

## Fetch-Speicherzugriffs-Header

Diese Header ermöglichen einen erweiterten Workflow für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den „Speicherzugriffsstatus“ für den aktuellen Fetch-Kontext an, der entweder `none`, `inactive` oder `active` ist.
    Der Server kann mit `Activate-Storage-Access` antworten, um anzufordern, dass der Browser eine Berechtigung mit dem Status `inactive` aktiviert und die Anfrage wiederholt, oder um eine Ressource mit Zugriff auf ihre Drittanbieter-Cookies zu laden, wenn der Status `active` ist.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine vorhandene Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann oder eine Ressource mit Cookie-Zugriff laden kann, wenn bereits eine aktivierte Berechtigung vorhanden ist.

## Servergesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungs- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungs- und Fehlerberichte senden soll.

## Übertragungskodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der User-Agent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, am Ende einer in Chunks übertragenen Nachricht zusätzliche Felder einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der angibt, dass der Server bereit ist, auf eine WebSocket-Verbindung hochzustufen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header, der einen Schlüssel enthält, der bestätigt, dass der Client ausdrücklich beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Unterprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Unterprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Sonstiges

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege zum Erreichen dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu denen die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Übermittelt eine oder mehrere Metriken und Beschreibungen für den angegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Fetches für die Skriptressource eines Service Workers eingeschlossen.
    Dieser Header hilft Administratoren dabei, Anfragen für Service-Worker-Skripte zu Überwachungszwecken zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in die Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Source Map")}}, sodass Debugger den ursprünglichen Quellcode statt generierten oder transformierten Code schrittweise durchlaufen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser Header (nur HTTP/1.1) kann verwendet werden, um eine bereits aufgebaute Client-Server-Verbindung auf ein anderes Protokoll hochzustufen (über dasselbe Transportprotokoll). Beispielsweise kann ein Client damit eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- bzw. HTTPS-Verbindung auf einen WebSocket hochstufen.
- {{HTTPHeader("Priority")}}
  - : Liefert einen Hinweis zur Priorität einer bestimmten Ressourcenanfrage auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server die Anfrage neu priorisieren möchte.

## Experimentelle Header

### Attribution-Reporting-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht Entwicklern, Conversions zu messen — beispielsweise wenn ein Benutzer auf eine auf einer Website eingebettete Anzeige klickt und das Produkt anschließend auf der Website des Anbieters kauft — und anschließend auf Berichte zu diesen Conversions zuzugreifen. Dies geschieht ohne Abhängigkeit von Drittanbieter-Tracking-Cookies, indem stattdessen verschiedene Header verwendet werden, um **Quellen** und **Trigger** zu registrieren, die zur Kennzeichnung einer Conversion abgeglichen werden.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die der aktuellen Anfrage entsprechende Antwort zur Teilnahme am Attribution Reporting berechtigt ist, indem entweder eine Attributionsquelle oder ein Attributions-Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen Header `Attribution-Reporting-Eligible` enthielt, und dient zum Registrieren einer Attributionsquelle.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen Header `Attribution-Reporting-Eligible` enthielt, und dient zum Registrieren eines Attributions-Triggers.

### Client Hints

HTTP-[Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Gruppe von Anfrage-Headern, die nützliche Informationen über den Client bereitstellen, etwa Gerätetyp und Netzwerkbedingungen, und es Servern ermöglichen, die unter diesen Bedingungen bereitgestellten Inhalte zu optimieren.

Server fordern die Client-Hint-Header, an denen sie interessiert sind, proaktiv mit {{HTTPHeader("Accept-CH")}} vom Client an. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client Hints mit dem Headerfeld `Accept-CH` oder einem äquivalenten HTML-Element `<meta>` mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) ankündigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client Hints auch [kritische Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client Hints sind unten aufgeführt.

#### User-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anfrage-Header, die Informationen über den User-Agent, die Plattform/Architektur, auf der er ausgeführt wird, sowie Benutzereinstellungen bereitstellen, die im User-Agent oder auf der Plattform festgelegt sind:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Branding und Version des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Zugrunde liegende Plattformarchitektur des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der zugrunde liegenden CPU-Architektur des User-Agents, beispielsweise „64“ Bit.
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des User-Agents, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der User-Agent läuft auf einem Mobilgerät oder bevorzugt allgemeiner eine „mobile“ Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Zugrunde liegendes Betriebssystem bzw. Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des zugrunde liegenden Betriebssystems des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob die Binärdatei des User-Agents unter 64-Bit-Windows im 32-Bit-Modus ausgeführt wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Verschiebungen des Inhaltslayouts zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header, der die Präferenz des User-Agents für verringerte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hints sind innerhalb von [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der Delegierung von [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die zum Offenlegen von Daten verwendet werden könnte.

#### Geräte- und responsive Bild-Client-Hints

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Anfrage-Header, der das Gerätepixelverhältnis des Clients bereitstellt, also die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}.
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{experimental_inline}}
  - : Anfrage-Header, der die Höhe des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Sec-CH-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Breite des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.

##### Veraltete Geräte- und responsive Bild-Client-Hints

- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Width")}}

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, anhand der Benutzerauswahl sowie der Netzwerkbandbreite und -latenz zu bestimmen, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} („Netzwerkprofil“), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Round-Trip-Time (RTT) der Anwendungsschicht in Millisekunden, einschließlich der Verarbeitungszeit des Servers. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenfolge `on`, die die Präferenz des User-Agents für einen reduzierten Datenverbrauch angibt.

### Compression Dictionary Transport

[Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Methode zur Verwendung eines gemeinsam genutzten Komprimierungswörterbuchs, um die Übertragungsgröße von HTTP-Antworten zu reduzieren, anstatt das standardmäßige statische Wörterbuch in der {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder der {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anfrage-Header verwenden, um das beste verfügbare Wörterbuch anzugeben, das der Server zur Komprimierung verwenden kann.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat und der Server im Header `Use-As-Dictionary` eine `id` für das Wörterbuch bereitgestellt hat.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, haben einen Header `Available-Dictionary` sowie die vom Server bereitgestellte Wörterbuch-`id` im Header `Dictionary-ID`.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Abgleichkriterien auf, für die das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Zugunsten von Global Privacy Control (GPC) veraltet, das Servern über den Header {{HTTPHeader("Sec-GPC")}} mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage galt. Wird zusammen mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer damit einverstanden ist, dass eine Website oder ein Dienst seine personenbezogenen Daten an Dritte verkauft oder weitergibt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _Origin-gebundenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es User-Agents, implementierungsspezifische Ressourcen für Agent-Cluster, beispielsweise Prozesse oder Threads, effizienter zuzuweisen.

### Servergesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Richtlinie zur Meldung von Netzwerkfehlern zu deklarieren.

### Topics API

Die Topics API stellt Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie interessenbasierter Werbung (IBA) bereit.
Weitere Informationen finden Sie in der Dokumentation zur [Topics API](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Interessenthemen, die aus der URL einer aufrufenden Website abgeleitet wurden, als in der Antwort auf eine durch eine Funktion zur Aktivierung der Topics API erzeugte Anfrage beobachtet zu markieren.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet. Diese werden von einer Ad-Tech-Plattform verwendet, um eine personalisierte anzuzeigende Anzeige auszuwählen.

### Sonstiges

- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early Data übermittelt wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Stellt einen eindeutigen Schlüssel für `POST`- und `PATCH`-Anfragen bereit, sodass diese idempotent ausgeführt werden können.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, also ob auf dem aktuellen Browser Benutzer beim IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit [Speculation-Rule](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Speculation-Rule-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Speculation Rules, die zu der Spekulation geführt haben, damit ein Server erkennen kann, welche Regel(n) eine Spekulation verursacht haben, und sie gegebenenfalls blockieren kann.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um sich für die Verwendung verschiedener Lademodi mit höherem Risiko anzumelden. Beispielsweise erfordert Cross-Origin-, Same-Site-[Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen Wert von `credentialed-prerender` für `Supports-Loading-Mode`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglich angeforderten Host, den ein Client für die Verbindung zu Ihrem Proxy oder Load Balancer verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client für die Verbindung zu Ihrem Proxy oder Load Balancer verwendet hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert DNS-Prefetching, eine Funktion, mit der Browser proaktiv die Auflösung von Domainnamen sowohl für Links durchführen, denen der Benutzer möglicherweise folgen möchte, als auch für URLs von Elementen, auf die das Dokument verweist, einschließlich Bildern, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der HTTP-Header [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indexiert werden soll. Der Header entspricht Elementen [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots).

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der überall entlang der Anfrage-Antwort-Kette verschiedene Auswirkungen haben kann. Wird zur Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der Header `Cache-Control` noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Working Group](https://httpwg.org/specs/)
