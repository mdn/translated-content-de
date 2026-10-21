---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: bd5271a96d814ed6876e974186c465f1b3959e07
---

**HTTP-Header** ermöglichen es Client und Server, mit einer Anfrage oder Antwort zusätzliche Informationen zu übermitteln.
In HTTP/1.X besteht ein Header aus einem Namen, bei dem die Groß- und Kleinschreibung keine Rolle spielt, einem Doppelpunkt, optionalen Leerzeichen, die ignoriert werden, und schließlich einem Wert (zum Beispiel `Allow: POST`).
In HTTP/2 und höheren Versionen werden Header in Entwicklerwerkzeugen in Kleinbuchstaben angezeigt (`accept: */*`). Einer besonderen Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) wird ein Doppelpunkt vorangestellt (`:status: 200`).
Weitere Informationen zur Syntax der einzelnen Protokollversionen finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte, proprietäre Header wurden früher mit dem Präfix `X-` versehen. Diese Konvention wurde jedoch 2012 in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) verworfen, weil sie Schwierigkeiten verursachte, wenn nicht standardisierte Felder standardisiert wurden. Weitere Header sind im [IANA-Verzeichnis der HTTP-Feldnamen](https://www.iana.org/assignments/http-fields) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Verzeichnis enthält Header einschließlich [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header lassen sich nach ihrem Kontext gruppieren:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder den Client, der sie anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, etwa ihren Speicherort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Inhalt der Ressource, etwa ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung beziehungsweise Komprimierung.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten von der Repräsentation unabhängige Informationen über die Payload-Daten, darunter die Inhaltslänge und die für die Übertragung verwendete Kodierung.

Header lassen sich auch danach gruppieren, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: bei einer Anfrage an den Server, bei einer Antwort an den Client. Dazwischengeschaltete Proxys müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Verbindung auf Transportebene relevant und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass über den Header {{HTTPHeader("Connection")}} nur Hop-by-Hop-Header festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, mit denen sich ein User-Agent bei einem Server authentifiziert.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, mit denen sich ein User-Agent bei einem Proxyserver authentifiziert.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die sich das Objekt bereits in einem Proxy-Cache befindet.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, gespeicherte Daten und Cache), die mit der anfragenden Website verknüpft sind.
- {{HTTPHeader("Expires")}}
  - : Datum und Uhrzeit, ab denen die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Legt Regeln dafür fest, wie sich die Abfrageparameter einer URL auf den Abgleich mit dem Cache auswirken. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource. Es wird verwendet, um verschiedene Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, lässt sich in manchen Umgebungen aber leichter berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit _keinem_ der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder um zu verhindern, dass eine neue Ressource hochgeladen wird, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und verlangt, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. So werden Daten nur übertragen, wenn der Cache nicht mehr aktuell ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und verlangt, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt sicher, dass ein neues Fragment eines bestimmten Bereichs mit vorherigen Fragmenten übereinstimmt, oder ermöglicht bei der Änderung bestehender Dokumente eine optimistische Nebenläufigkeitskontrolle.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfrage-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, statt eine neue vom Ursprungsserver anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Weitere Informationen finden Sie im Artikel zur [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Teilt dem Server mit, welche {{Glossary("MIME_type", "Datentypen")}} zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, in der Regel ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Teilt dem Server mit, in welcher natürlichen Sprache er antworten soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig in der Kontrolle der Nutzer: Der Server sollte stets darauf achten, eine ausdrückliche Entscheidung der Nutzer, etwa die Auswahl einer Sprache aus einem Dropdown-Menü, nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Antwort-Header für die _Aushandlung von Anfrageinhalten_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verarbeiten kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Antwort-Header für die _Aushandlung von Anfrageinhalten_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verarbeiten kann.
- {{HTTPHeader("Accept-Query")}}
  - : Ein Antwort-Header für die _Aushandlung von Anfrageinhalten_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("QUERY")}}-Anfrage verarbeiten kann.

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordnungsgemäß zu verarbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl an Hops an, die eine Anfrage durchlaufen darf, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die der Server zuvor mit dem Header {{HTTPHeader("Set-Cookie")}} gesendet hat.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage zugänglich gemacht werden darf, wenn das Credentials-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt als Antwort auf eine Preflight-Anfrage an, welche Methoden beim Zugriff auf die Ressource erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort mit anderen Origins geteilt werden darf.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Führt die Header auf, die als Teil der Antwort zugänglich gemacht werden dürfen.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden dürfen.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von welchem Origin eine Fetch-Anfrage ausgeht.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Origins an, die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden. Aufgrund von Cross-Origin-Beschränkungen würden diese Werte andernfalls als null gemeldet.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource direkt angezeigt werden soll (das Standardverhalten ohne diesen Header) oder ob sie als Download behandelt werden soll und der Browser einen „Speichern unter“-Dialog anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} des in einer HTTP-Nachricht enthaltenen Oktettstroms (des Nachrichteninhalts) bereit, der von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} abhängt.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung bereit.
    Anders als bei {{HTTPHeader("Content-Digest")}} berücksichtigt dieser Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Drückt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header aus.
    Er ist das `Content-`-Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Drückt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header aus.
    Er ist das `Repr-`-Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinien

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle Ressourcen eines bestimmten Typs, die der User-Agent lädt, Garantien für die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) bieten.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Meldet vom User-Agent geladene Ressourcen, die Garantien für die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) verletzen würden, wenn die Integritätsrichtlinie durchgesetzt würde (mithilfe des Headers `Integrity-Policy`).

## Informationen zum Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource als dezimale Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Gibt den Komprimierungsalgorithmus an.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die natürlichen Sprachen, die für die Zielgruppe vorgesehen sind, damit Nutzer Inhalte anhand ihrer bevorzugten Sprache unterscheiden können.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Nachrichtensignaturen

- {{HTTPHeader("Accept-Signature")}}
  - : Der Header [`Accept-Signature`](https://www.rfc-editor.org/info/rfc9421/#section-5.1) fordert eine signierte Antwort oder eine nachfolgende signierte Anfrage an und gibt die zu signierenden Komponenten sowie die Signaturparameter an.
- {{HTTPHeader("Signature")}}
  - : Der Header [`Signature`](https://www.rfc-editor.org/info/rfc9421/#section-4.2) enthält einen oder mehrere mit Labels versehene Signaturwerte. Jedes Label entspricht einem Eintrag in `Signature-Input`.
- {{HTTPHeader("Signature-Input")}}
  - : Der Header [`Signature-Input`](https://www.rfc-editor.org/info/rfc9421/#section-4.1) gibt die geordnete Liste der Nachrichtenkomponenten an, die von jeder Signatur abgedeckt werden, sowie deren Metadaten, etwa den Erstellungszeitpunkt und die Schlüsselkennung.

> [!NOTE]
> Diese Definitionen entsprechen RFC 9421. Der [Entwurf zu Signed HTTP Exchanges (SXG)](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html) definiert `Accept-Signature` und `Signature` ebenfalls, allerdings mit inkompatibler Semantik, sowie einen eigenen Header `Signed-Headers`. Die einzige Browserimplementierung von SXG, Chromium, unterstützt diese jedoch nicht als HTTP-Header.

## Präferenzen

Clients können Präferenzen in Anfragen senden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wurde, wenn dies für den Client sonst nicht eindeutig wäre.
Browser bieten keine integrierte Unterstützung für das Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für bestimmte Verhaltensweisen des Servers bei der Anfrageverarbeitung an. Beispielsweise kann damit ein minimaler Antwortinhalt (`return=minimal`) oder eine asynchrone Verarbeitung (`respond-async`) angefordert werden. Wenn der Header nicht unterstützt wird, verarbeitet der Server die Anfrage wie üblich.
- {{HTTPHeader("Preference-Applied")}}
  - : Teilt dem Client mit, welche im Header `Prefer` angegebenen Präferenzen der Server angewendet hat. Dieser ausschließlich in Antworten verwendete Header macht die Behandlung von Präferenzen nachvollziehbar.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxyservern, die verloren gehen oder verändert werden, wenn ein Proxy am Anfrageweg beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Forward- und Reverse-Proxys hinzugefügt und kann sowohl in Anfrage- als auch in Antwort-Headern vorkommen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, nur einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind beispielsweise für Mediaplayer mit wahlfreiem Zugriff, Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und Download-Manager nützlich, mit denen Nutzer Downloads anhalten und fortsetzen können.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich angegeben werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt an, welchen Teil eines Dokuments der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erzeugt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. So wird verhindert, dass zwei Bereiche aus inkompatiblen Versionen einer Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, an welcher Stelle des vollständigen Nachrichteninhalts eine Teilnachricht einzuordnen ist.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen Seite weiterzuleiten. Verwendet denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält die Internet-E-Mail-Adresse einer Person, die den anfragenden User-Agent kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für virtuelles Hosting) und optional die Nummer des TCP-Ports an, auf dem der Server Anfragen entgegennimmt.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus einem Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen im Header {{HTTPHeader("Referer")}} bei Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, anhand derer die Kommunikationspartner im Netzwerkprotokoll Anwendungstyp, Betriebssystem, Softwareanbieter oder Softwareversion des anfragenden User-Agents erkennen können.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die eine Ressource unterstützt.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, mit der der Ursprungsserver die Anfrage verarbeitet.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument festzulegen.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [Artikel zur Erläuterung von CORP](/de/docs/Web/Security/Practical_implementation_guides/CORP).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert, welche Ressourcen der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, ohne sie durchzusetzen. Die Berichte über Verstöße bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die per HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, Berichte und die Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu aktivieren, um die Verwendung fehlerhaft ausgestellter Zertifikate für die betreffende Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website sowie in von ihr eingebetteten {{htmlelement("iframe")}}s zu erlauben oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Ein Antwort-Header, über den Websitebetreiber einen oder mehrere Endpunkte angeben können, die Fehler wie Berichte über CSP-Verstöße, Berichte zu {{HTTPHeader("Cross-Origin-Opener-Policy")}} oder andere allgemeine Verstöße empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS statt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Signalisiert dem Server, dass der Client eine verschlüsselte und authentifizierte Antwort bevorzugt und die Direktive {{CSP("upgrade-insecure-requests")}} erfolgreich verarbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den in {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darstellen darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex unter anderem die Verarbeitung von Daten über Domain-Grenzen hinweg erlauben, die aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) sonst eingeschränkt wäre.
    Der Header `X-Permitted-Cross-Domain-Policies` setzt solche Richtliniendateien außer Kraft, damit Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen darüber, ohne der Anwendung oder ihren Besuchern einen Nutzen zu bieten. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anfrage-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anfrage-Header")}} liefern Informationen über den Kontext, aus dem eine Anfrage stammt. Ein Server kann anhand der Herkunft der Anfrage und der vorgesehenen Verwendung der Ressource entscheiden, ob er die Anfrage zulässt.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Origin des Anfrageauslösers und dem Origin des Ziels an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt dem Server den Modus der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Nutzeraktivierung ausgelöst wurde. Es handelt sich um einen strukturierten Header mit einem booleschen Wert: `?0` steht für falsch und `?1` für wahr.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind _streng genommen_ keine „Fetch-Metadaten-Anfrage-Header“, liefern aber ebenfalls Informationen darüber, wie eine Ressource verwendet wird. Ein Server kann sie nutzen, um sein Caching-Verhalten oder die zurückgegebenen Informationen anzupassen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn die Ressource nicht unmittelbar vom User-Agent verwendet werden soll. Der Header hat derzeit einen möglichen Wert: `prefetch` zeigt an, dass die Ressource vorsorglich für eine mögliche spätere Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der bei einer vorsorglichen Anfrage gesendet wird, um während des Starts eines Service Workers eine Ressource mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Sein mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegter Wert kann dem Server mitteilen, dass er eine andere Ressource als bei einer gewöhnlichen `fetch()`-Operation zurückgeben soll.

## Header für den Speicherzugriff beim Fetch

Diese Header ermöglichen einen erweiterten Ablauf für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den „Status des Speicherzugriffs“ für den aktuellen Fetch-Kontext an. Dieser ist entweder `none`, `inactive` oder `active`.
    Der Server kann mit `Activate-Storage-Access` antworten, um den Browser aufzufordern, eine `inactive`-Berechtigung zu aktivieren und die Anfrage zu wiederholen. Ist der Status `active`, kann er den Browser auffordern, die Ressource mit Zugriff auf ihre Drittanbieter-Cookies zu laden.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzugeben, dass der Browser eine bestehende Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann. Wenn die Berechtigung bereits aktiviert ist, kann er die Ressource mit Cookie-Zugriff laden.

## Server-Sent Events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header zur Angabe von Server-Endpunkten, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header zur Angabe von Server-Endpunkten, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.

## Übertragungskodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Kodierungsform an, mit der die Ressource sicher an den Nutzer übertragen wird.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der User-Agent akzeptiert.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende einer in Chunks übertragenen Nachricht zusätzliche Felder anzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) beim [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der angibt, dass der Server bereit ist, auf eine WebSocket-Verbindung umzuschalten.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die Erweiterung an, die der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header mit einem Schlüssel, der bestätigt, dass der Client ausdrücklich einen `WebSocket` öffnen möchte.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Unterprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das Unterprotokoll an, das der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die Version des WebSocket-Protokolls an, die der Client verwendet.
    In Antworten wird er nur gesendet, wenn der Server die angeforderte Protokollversion nicht unterstützt; dann listet er die unterstützten Versionen auf.

## Sonstige Header

- {{HTTPHeader("Alt-Svc")}}
  - : Listet alternative Möglichkeiten auf, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Identifiziert den verwendeten alternativen Dienst.
- {{HTTPHeader("Date")}}
  - : Enthält Datum und Uhrzeit der Erstellung der Nachricht.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld ermöglicht es, einen oder mehrere Links in HTTP-Headern zu serialisieren. Semantisch entspricht es dem HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage sendet.
- {{HTTPHeader("Server-Timing")}}
  - : Übermittelt eine oder mehrere Metriken und Beschreibungen für den jeweiligen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Ist bei Fetch-Anfragen nach der Skriptressource eines Service Workers enthalten.
    Dieser Header hilft Administratoren, Anfragen nach Service-Worker-Skripten zu Überwachungszwecken zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in die Antwort für das Service-Worker-Skript](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Source Map")}}, damit Debugger den ursprünglichen Quellcode statt des generierten oder transformierten Codes schrittweise durchlaufen können.
- {{HTTPHeader("Upgrade")}}
  - : Mit diesem ausschließlich für HTTP/1.1 vorgesehenen Header kann eine bereits bestehende Client-Server-Verbindung auf ein anderes Protokoll umgestellt werden (bei gleichem Transportprotokoll). Ein Client kann damit beispielsweise eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- beziehungsweise HTTPS-Verbindung auf WebSocket umstellen.
- {{HTTPHeader("Priority")}}
  - : Gibt einen Hinweis auf die Priorität einer bestimmten Ressourcenanfrage innerhalb einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Priorität des Clients anzugeben, oder in einer Antwort, wenn der Server die Anfrage neu priorisieren möchte.

## Experimentelle Header

### Header für Attribution Reporting

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Conversions zu messen – beispielsweise wenn ein Nutzer auf eine in einer Website eingebettete Anzeige klickt und anschließend den Artikel auf der Website des Anbieters kauft – und Berichte über diese Conversions abzurufen. Dabei verwendet sie keine Tracking-Cookies von Drittanbietern, sondern verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die zur Erkennung einer Conversion einander zugeordnet werden.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Gibt an, dass die Antwort auf die aktuelle Anfrage am Attribution Reporting teilnehmen kann, indem entweder eine Attributionsquelle oder ein Attributionsauslöser registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage gesendet, die den Header `Attribution-Reporting-Eligible` enthielt, und dient zur Registrierung einer Attributionsquelle.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage gesendet, die den Header `Attribution-Reporting-Eligible` enthielt, und dient zur Registrierung eines Attributionsauslösers.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind Anfrage-Header, die nützliche Informationen über den Client bereitstellen, etwa zum Gerätetyp und zu den Netzwerkbedingungen. So können Server die bereitgestellten Inhalte für diese Bedingungen optimieren.

Server fordern die Client-Hinweis-Header, an denen sie interessiert sind, mithilfe von {{HTTPHeader("Accept-CH")}} aktiv beim Client an. Der Client kann die angeforderten Header anschließend in weitere Anfragen aufnehmen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise über das Header-Feld `Accept-CH` oder ein entsprechendes HTML-Element `<meta>` mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) bekannt geben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um festzulegen, dass akzeptierte Client-Hinweise zugleich [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind nachfolgend aufgeführt.

#### User-Agent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anfrage-Header, die Informationen über den User-Agent, die Plattform beziehungsweise Architektur, auf der er ausgeführt wird, und über Nutzerpräferenzen bereitstellen, die im User-Agent oder auf der Plattform festgelegt wurden:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marke und Version des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Architektur der zugrunde liegenden Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der zugrunde liegenden CPU-Architektur des User-Agents (beispielsweise 64 Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des User-Agents, die beschreiben, wie Nutzer mit ihm interagieren.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Gibt an, ob der User-Agent auf einem Mobilgerät ausgeführt wird oder allgemein eine „mobile“ Nutzererfahrung bevorzugt.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Zugrunde liegendes Betriebssystem beziehungsweise zugrunde liegende Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des zugrunde liegenden Betriebssystems des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob die Binärdatei des User-Agents unter 64-Bit-Windows im 32-Bit-Modus ausgeführt wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz der Nutzer für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz der Nutzer für weniger Animationen und Verschiebungen des Inhaltslayouts.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header, der die Präferenz des User-Agents für reduzierte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hinweise sind in [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der Delegation von [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die zur Offenlegung von Daten genutzt werden könnte.

#### Client-Hinweise für Geräte und responsive Bilder

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefähre Größe des verfügbaren Arbeitsspeichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Anfrage-Header, der das Device Pixel Ratio des Clients angibt (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{experimental_inline}}
  - : Anfrage-Header, der die Höhe des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Width")}} {{experimental_inline}}
  - : Anfrage-Header, der die Breite des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.

##### Veraltete Client-Hinweise für Geräte und responsive Bilder

- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Width")}}

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, anhand der Entscheidung der Nutzer sowie der Bandbreite und Latenz des Netzwerks auszuwählen, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} („Netzwerkprofil“), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Round-Trip-Zeit (RTT) auf Anwendungsebene in Millisekunden, einschließlich der Verarbeitungszeit des Servers. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Die Zeichenfolge `on` gibt an, dass der User-Agent einen geringeren Datenverbrauch bevorzugt.

### Compression Dictionary Transport

[Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) verwendet ein gemeinsames Komprimierungswörterbuch, um die Übertragungsgröße von HTTP-Antworten zu verringern, anstatt das statische Standardwörterbuch der {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann mit diesem Anfrage-Header angeben, welches seiner verfügbaren Wörterbücher sich für die Komprimierung durch den Server am besten eignet.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource besitzt und der Server im Header `Use-As-Dictionary` eine `id` für das Wörterbuch angegeben hat.
    Anfragen nach Ressourcen, die das Wörterbuch verwenden können, enthalten einen Header `Available-Dictionary` sowie die vom Server vergebene Wörterbuch-`id` im Header `Dictionary-ID`.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Übereinstimmungskriterien auf, nach denen das Wörterbuch für zukünftige Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz der Nutzer angibt (Do Not Track).
    Er ist zugunsten von Global Privacy Control (GPC) veraltet. GPC wird Servern über den Header {{HTTPHeader("Sec-GPC")}} mitgeteilt und ist für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die zugehörige Anfrage galt. Wird zusammen mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob die Nutzer damit einverstanden sind, dass eine Website oder ein Dienst ihre personenbezogenen Daten an Dritte verkauft oder weitergibt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der angibt, dass das zugehörige [`Document`](/de/docs/Web/API/Document) einem _nach Origin getrennten [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ zugewiesen werden soll.
    Diese Isolierung ermöglicht es User-Agents, implementierungsspezifische Ressourcen wie Prozesse oder Threads effizienter Agent-Clustern zuzuweisen.

### Server-Sent Events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, mit dem Entwickler eine Richtlinie zur Meldung von Netzwerkfehlern festlegen können.

### Topics API

Die Topics API bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie interessenbasierte Werbung (IBA) umzusetzen.
Weitere Informationen finden Sie in der Dokumentation zur [Topics API](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, mit dem aus der URL einer aufrufenden Website abgeleitete Interessenthemen als beobachtet markiert werden. Er wird als Antwort auf eine Anfrage verwendet, die durch eine Funktion mit Unterstützung für die Topics API erzeugt wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Nutzer zusammen mit der zugehörigen Anfrage sendet. Eine Werbetechnologieplattform verwendet sie, um eine personalisierte Anzeige auszuwählen.

### Sonstige Header

- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage über TLS Early Data übertragen wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Stellt einen eindeutigen Schlüssel für `POST`- und `PATCH`-Anfragen bereit, damit diese idempotent ausgeführt werden können.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, den ein föderierter Identitätsanbieter (IdP) sendet, um seinen Anmeldestatus festzulegen – also ob im aktuellen Browser Nutzer beim IdP angemeldet sind.
    Der Browser speichert diesen Status und verwendet ihn für die [FedCM API](/de/docs/Web/API/FedCM_API).
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit JSON-Definitionen von [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Regelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Speculation Rules, die zur spekulativen Aktion geführt haben. So kann ein Server erkennen, welche Regeln sie ausgelöst haben, und diese gegebenenfalls blockieren.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Verwendung verschiedener risikoreicherer Lademodi zuzulassen. Beispielsweise erfordert [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) für einen anderen Origin innerhalb derselben Site den Wert `credentialed-prerender` für `Supports-Loading-Mode`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder Load Balancer mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglich angeforderten Host, über den sich ein Client mit Ihrem Proxy oder Load Balancer verbunden hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), mit dem sich ein Client mit Ihrem Proxy oder Load Balancer verbunden hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert DNS-Prefetching. Dabei lösen Browser Domainnamen vorsorglich auf – sowohl für Links, denen Nutzer möglicherweise folgen, als auch für URLs von Ressourcen, auf die das Dokument verweist, darunter Bilder, CSS und JavaScript.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der HTTP-Header [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) gibt an, wie eine Webseite in den Ergebnissen öffentlicher Suchmaschinen indexiert werden soll. Er entspricht den Elementen [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots).

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an jeder Stelle der Anfrage-Antwort-Kette unterschiedliche Auswirkungen haben kann. Er dient der Abwärtskompatibilität mit HTTP/1.0-Caches, in denen der Header `Cache-Control` noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Verzeichnis](https://www.iana.org/assignments/http-fields)
- [HTTP Working Group](https://httpwg.org/specs/)
