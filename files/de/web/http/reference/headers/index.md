---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

**HTTP-Header** ermöglichen es dem Client und dem Server, mit einer Nachricht in einer Anfrage oder Antwort zusätzliche Informationen zu übermitteln.
In HTTP/1.X ist ein Header ein Name ohne Berücksichtigung der Groß- und Kleinschreibung, gefolgt von einem Doppelpunkt, anschließend optionalen Leerzeichen, die ignoriert werden, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header bei der Anzeige in Entwicklertools kleingeschrieben (`accept: */*`) und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt vorangestellt (`:status: 200`).
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden in der Vergangenheit mit dem Präfix `X-` verwendet, aber diese Konvention wurde 2012 aufgrund der Schwierigkeiten, die sie verursachte, wenn nicht standardisierte Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, als veraltet eingestuft; andere sind in der [IANA-Registrierung für HTTP-Feldnamen](https://www.iana.org/assignments/http-fields) aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Die IANA-Registrierung führt Header auf, einschließlich [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, etwa ihren Speicherort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Body der Ressource, etwa ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Komprimierung.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Payload-Daten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: an den Server bei einer Anfrage oder an den Client bei einer Antwort. Zwischenliegende Proxys müssen diese Header unverändert erneut übertragen und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Verbindung auf Transportebene relevant und _dürfen nicht_ von Proxys erneut übertragen oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem Header {{HTTPHeader("Connection")}} gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines User-Agents gegenüber einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines User-Agents gegenüber einem Proxy-Server.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die der anfragenden Website zugeordnet sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach dem bzw. der die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL den Cache-Abgleich beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das zum Vergleichen mehrerer Versionen derselben Ressource verwendet wird. Es ist weniger genau als {{HTTPHeader("ETag")}}, in einigen Umgebungen aber einfacher zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit keinem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache nicht mehr aktuell ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Konsistenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen Fragmenten sicher oder implementiert beim Ändern bestehender Dokumente ein optimistisches Nebenläufigkeitskontrollsystem.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfrage-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine aktuelle Antwort vom Origin-Server anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Weitere Details finden Sie im Artikel zur [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Datentypen")}}, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, in der Regel ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server voraussichtlich zurücksenden soll. Dies ist ein Hinweis und liegt nicht zwingend vollständig unter der Kontrolle des Benutzers: Der Server sollte stets darauf achten, keine ausdrückliche Benutzerwahl zu überschreiben, etwa die Auswahl einer Sprache aus einer Dropdown-Liste.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Antwort-Header für _Inhaltsaushandlung bei Anfragen_, der bekannt gibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Antwort-Header für _Inhaltsaushandlung bei Anfragen_, der bekannt gibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, damit er die Anfrage korrekt verarbeiten kann.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei der Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage durchführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem Header {{HTTPHeader("Set-Cookie")}} gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Credentials-Flag `true` ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header beim Stellen der eigentlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubten Methoden an.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt durch Auflisten ihrer Namen an, welche Header als Teil der Antwort offengelegt werden können.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Ausgeben einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header beim Stellen der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Ausgeben einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) beim Stellen der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Fetch stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Origins an, die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden und die andernfalls aufgrund von Cross-Origin-Einschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser einen „Speichern unter“-Dialog anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} des in einer HTTP-Nachricht gerahmten Oktettstroms bereit (des Nachrichteninhalts), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung bereit.
    Anders als bei {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Drückt den Wunsch nach einem Header {{HTTPHeader("Content-Digest")}} aus.
    Er ist das `Content-`-Analogon von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Drückt den Wunsch nach einem Header {{HTTPHeader("Repr-Digest")}} aus.
    Er ist das `Repr-`-Analogon von {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinie

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle Ressourcen, die der User-Agent lädt (eines bestimmten Typs), Garantien für [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) aufweisen.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Meldet Ressourcen, die der User-Agent lädt und die Garantien für [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) verletzen würden, wenn die Integritätsrichtlinie durchgesetzt würde (mithilfe des Headers `Integrity-Policy`).

## Informationen zum Nachrichten-Body

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource als dezimale Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die für das Publikum bestimmte(n) menschliche(n) Sprache(n), sodass ein Benutzer nach seiner eigenen bevorzugten Sprache unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Nachrichtensignaturen

- {{HTTPHeader("Accept-Signature")}}
  - : Der Header [`Accept-Signature`](https://www.rfc-editor.org/info/rfc9421/#section-5.1) fordert eine signierte Antwort oder nachfolgende Anfrage an und gibt die zu signierenden Komponenten sowie Signaturparameter an.
- {{HTTPHeader("Signature")}}
  - : Der Header [`Signature`](https://www.rfc-editor.org/info/rfc9421/#section-4.2) enthält einen oder mehrere beschriftete Signaturwerte. Jede Bezeichnung entspricht einem Eintrag in `Signature-Input`.
- {{HTTPHeader("Signature-Input")}}
  - : Der Header [`Signature-Input`](https://www.rfc-editor.org/info/rfc9421/#section-4.1) identifiziert die geordnete Liste der von jeder Signatur abgedeckten Nachrichtenkomponenten und ihrer Metadaten, etwa Erstellungszeit und Schlüsselkennung.

> [!NOTE]
> Diese Definitionen folgen RFC 9421. Der [Entwurf zu Signed HTTP Exchanges (SXG)](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html) definiert ebenfalls `Accept-Signature` und `Signature` mit inkompatibler Semantik sowie einen eigenen Header `Signed-Headers`. Die einzige Browserimplementierung von SXG, Chromium, unterstützt diese jedoch nicht als HTTP-Header.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, falls dies andernfalls für den Client nicht eindeutig wäre.
Browser haben keine native Unterstützung zum Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für bestimmte Serververhalten während der Anfrageverarbeitung an. Beispielsweise kann minimaler Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) angefordert werden. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche im Header `Prefer` angegebenen Präferenzen vom Server angewendet wurden. Dies ist ein reiner Antwort-Header, der Transparenz über die Behandlung von Präferenzen bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die verändert werden oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys, sowohl Forward- als auch Reverse-Proxys, hinzugefügt und kann in Anfrage-Headern und Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Media-Player, die wahlfreien Zugriff unterstützen, Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und Download-Manager, mit denen Benutzer einen Download anhalten und fortsetzen können.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der Remote-Ressource übereinstimmt. Wird verwendet, um das Herunterladen zweier Bereiche aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, an welcher Stelle einer vollständigen Body-Nachricht eine Teilnachricht gehört.

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
  - : Die Adresse der vorherigen Webseite, von der aus einem Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Steuert, welche Referrer-Informationen, die im Header {{HTTPHeader("Referer")}} gesendet werden, in gestellten Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokollpartnern ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anfragemethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die der Origin-Server zur Verarbeitung der Anfrage verwendet.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort von Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert die Ressourcen, die der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, mit Richtlinien zu experimentieren, indem deren Auswirkungen überwacht, aber nicht durchgesetzt werden. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht Websites, sich für die Meldung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu entscheiden, um die Verwendung fehlerhaft ausgestellter Zertifikate für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website und in eingebetteten {{htmlelement("iframe")}}s zu erlauben oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, mit dem Websiteinhaber einen oder mehrere Endpunkte angeben können, die zum Empfangen von Fehlern wie CSP-Verletzungsberichten, Berichten zu {{HTTPHeader("Cross-Origin-Opener-Policy")}} oder anderen allgemeinen Verletzungen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt Kommunikation über HTTPS statt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet dem Server ein Signal, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt, und dass er die Direktive {{CSP("upgrade-insecure-requests")}} erfolgreich verarbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den in {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderem) die Berechtigung erteilen, Daten über Domains hinweg zu verarbeiten, die ansonsten aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) eingeschränkt wären.
    Der Header `X-Permitted-Cross-Domain-Policies` überschreibt solche Policy-Dateien, sodass Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, ohne der Anwendung oder ihren Besuchern einen Nutzen zu bieten. Entfernen Sie diesen Header, um die Offenlegung potenzieller Sicherheitslücken zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert Cross-Site-Scripting-Filterung.

### Fetch-Metadaten-Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} stellen Informationen über den Kontext bereit, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um anhand des Ursprungs der Anfrage und der beabsichtigten Verwendung der Ressource zu entscheiden, ob eine Anfrage erlaubt werden soll.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen der Origin eines Anfrageinitiators und der Origin seines Ziels an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt einem Server den Modus der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktivierung ausgelöst wurde. Es ist ein Structured Header, dessen Wert ein boolescher Wert ist; mögliche Werte sind daher `?0` für false und `?1` für true.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind nicht _streng genommen_ „Fetch-Metadaten-Anfrage-Header“, stellen aber ähnlich Informationen über den Kontext bereit, wie eine Ressource verwendet werden soll. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck nicht die unmittelbare Nutzung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorsorglich für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in einer vorsorglichen Anfrage zum [`fetch()`](/de/docs/Web/API/Window/fetch) einer Ressource während des Starts eines Service Workers gesendet wird. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden soll als bei einer normalen `fetch()`-Operation.

## Fetch-Speicherzugriffs-Header

Diese Header ermöglichen einen erweiterten Workflow für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den „Speicherzugriffsstatus“ für den aktuellen Fetch-Kontext an, der `none`, `inactive` oder `active` ist.
    Der Server kann mit `Activate-Storage-Access` antworten, um anzufordern, dass der Browser eine Berechtigung mit Status `inactive` aktiviert und die Anfrage wiederholt, oder eine Ressource mit Zugriff auf ihre Third-Party-Cookies lädt, wenn der Status `active` ist.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine vorhandene Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann oder eine Ressource mit Cookie-Zugriff laden kann, wenn bereits eine aktivierte Berechtigung vorhanden ist.

## Vom Server gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header zur Angabe von Serverendpunkten, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header zur Angabe von Serverendpunkten, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.

## Transferkodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der User-Agent akzeptieren möchte.
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
  - : Anfrage-Header mit einem Schlüssel, der bestätigt, dass der Client ausdrücklich beabsichtigt, eine `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Sonstiges

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zum Erreichen dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält Datum und Uhrzeit, zu denen die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld stellt ein Mittel bereit, um einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Übermittelt eine oder mehrere Metriken und Beschreibungen für den angegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Fetches für die Skriptressource eines Service Workers eingeschlossen.
    Dieser Header hilft Administratoren dabei, Anfragen nach Service-Worker-Skripten zu Überwachungszwecken zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in die Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Source Map")}}, sodass Debugger den ursprünglichen Quellcode statt generiertem oder transformiertem Code schrittweise durchlaufen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser Header, der nur in HTTP/1.1 verfügbar ist, kann verwendet werden, um eine bereits hergestellte Client-/Serververbindung auf ein anderes Protokoll hochzustufen (über dasselbe Transportprotokoll). Beispielsweise kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung auf WebSocket hochzustufen.
- {{HTTPHeader("Priority")}}
  - : Liefert einen Hinweis zur Priorität einer bestimmten Ressourcenanfrage auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server sich dafür entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Header für Attribution Reporting

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht Entwicklern, Conversions zu messen — beispielsweise wenn ein Benutzer auf eine auf einer Website eingebettete Anzeige klickt und dann den Artikel auf der Website des Verkäufers kauft — und anschließend auf Berichte über diese Conversions zuzugreifen. Dies geschieht ohne Third-Party-Tracking-Cookies, stattdessen werden verschiedene Header verwendet, um **Quellen** und **Trigger** zu registrieren, die abgeglichen werden, um eine Conversion anzuzeigen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an Attribution Reporting teilzunehmen, indem entweder eine Attributionsquelle oder ein Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen Header `Attribution-Reporting-Eligible` enthielt, und dient zum Registrieren einer Attributionsquelle.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage eingeschlossen, die einen Header `Attribution-Reporting-Eligible` enthielt, und dient zum Registrieren eines Attributionstriggers.

### Client Hints

HTTP-[Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anfrage-Headern, die nützliche Informationen über den Client bereitstellen, etwa Gerätetyp und Netzwerkbedingungen, und Servern ermöglichen, das Bereitgestellte für diese Bedingungen zu optimieren.

Server fordern die Client-Hint-Header, an denen sie interessiert sind, proaktiv über {{HTTPHeader("Accept-CH")}} vom Client an. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können mithilfe des Header-Felds `Accept-CH` oder eines entsprechenden HTML-Elements `<meta>` mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Unterstützung für Client Hints bekannt geben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client Hints auch [kritische Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client Hints sind unten aufgeführt.

#### User-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anfrage-Header, die Informationen über den User-Agent, die Plattform/Architektur, auf der er ausgeführt wird, sowie im User-Agent oder auf der Plattform festgelegte Benutzerpräferenzen bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Branding und Version des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Zugrunde liegende Plattformarchitektur des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitness der zugrunde liegenden CPU-Architektur des User-Agents (zum Beispiel „64“ Bit).
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
  - : Zugrunde liegendes Betriebssystem/Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des zugrunde liegenden Betriebssystems des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob die Binärdatei des User-Agents im 32-Bit-Modus auf 64-Bit-Windows ausgeführt wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Verschiebungen des Content-Layouts zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header, der die Präferenz des User-Agents für reduzierte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hints sind innerhalb von [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, weil sie auf der Delegierung von [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die zum Offenlegen von Daten verwendet werden könnte.

#### Geräte- und responsive Bild-Client-Hints

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Anfrage-Header, der das Device Pixel Ratio des Clientgeräts bereitstellt (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} für jeden {{Glossary("CSS_pixel", "CSS-Pixel")}}).
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

Netzwerk-Client-Hints ermöglichen einem Server, anhand der Benutzerwahl sowie der Netzwerkbandbreite und -latenz zu wählen, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} („Netzwerkprofil“), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Round-Trip-Time (RTT) der Anwendungsebene in Millisekunden, einschließlich der Verarbeitungszeit des Servers. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenfolge `on`, die die Präferenz des User-Agents für eine reduzierte Datennutzung angibt.

### Compression Dictionary Transport

[Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Methode, ein gemeinsames Komprimierungswörterbuch zu verwenden, um die Übertragungsgröße von HTTP-Antworten zu reduzieren, statt das standardmäßige statische Wörterbuch in der {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder der {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anfrage-Header verwenden, um das beste ihm verfügbare Wörterbuch anzugeben, das der Server zur Komprimierung verwenden kann.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat und der Server im Header `Use-As-Dictionary` eine `id` für das Wörterbuch bereitgestellt hat.
    Anfragen nach Ressourcen, die das Wörterbuch verwenden können, enthalten einen Header `Available-Dictionary` sowie die vom Server bereitgestellte Wörterbuch-`id` im Header `Dictionary-ID`.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Abgleichkriterien auf, für die das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten von Global Privacy Control (GPC), das Servern über den Header {{HTTPHeader("Sec-GPC")}} mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird zusammen mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder weiterzugeben.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _Origin-schlüsselbasierten [Agent Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es User-Agents, implementierungsspezifische Ressourcen für Agent Clusters, etwa Prozesse oder Threads, effizienter zuzuweisen.

### Vom Server gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Richtlinie für die Meldung von Netzwerkfehlern zu deklarieren.

### Topics API

Die Topics API bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Weitere Informationen finden Sie in der Dokumentation zur [Topics API](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Interessenthemen, die aus der URL einer aufrufenden Website abgeleitet wurden, als in der Antwort auf eine durch eine Funktion zur Aktivierung der Topics API erzeugte Anfrage beobachtet zu markieren.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die für den aktuellen Benutzer ausgewählten Themen zusammen mit der zugehörigen Anfrage sendet, damit eine Werbetechnologieplattform eine personalisierte Anzeige zur Darstellung auswählen kann.

### Sonstiges

- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early Data übermittelt wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Stellt einen eindeutigen Schlüssel für `POST`- und `PATCH`-Anfragen bereit, wodurch diese idempotent ausgeführt werden können.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, also ob aktuell Benutzer im IdP im Browser angemeldet sind oder nicht.
    Dieser wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit JSON-Definitionen von [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Speculation-Rule-Satz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Speculation Rules, die zu der Spekulation geführt haben, sodass ein Server erkennen kann, welche Regel(n) eine Spekulation verursacht haben, und sie gegebenenfalls blockieren kann.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um sich für die Verwendung verschiedener Lademodi mit höherem Risiko zu entscheiden. Beispielsweise erfordert Cross-Origin-, Same-Site-[Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen Wert `credentialed-prerender` für `Supports-Loading-Mode`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder Load Balancer eine Verbindung mit einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglich angeforderten Host, den ein Client für die Verbindung mit Ihrem Proxy oder Load Balancer verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client für die Verbindung mit Ihrem Proxy oder Load Balancer verwendet hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert DNS-Prefetching, eine Funktion, durch die Browser proaktiv die Auflösung von Domainnamen für Links durchführen, denen der Benutzer möglicherweise folgen möchte, sowie für URLs von Elementen, auf die das Dokument verweist, einschließlich Bildern, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der HTTP-Header [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) wird verwendet, um anzugeben, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indexiert werden soll. Der Header entspricht Elementen [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots).

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an jeder Stelle der Anfrage-Antwort-Kette verschiedene Auswirkungen haben kann. Wird für Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der Header `Cache-Control` noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zu List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Registrierung](https://www.iana.org/assignments/http-fields)
- [HTTP Working Group](https://httpwg.org/specs/)
