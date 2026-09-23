---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

**HTTP-Header** ermöglichen es Client und Server, mit einer Anfrage oder Antwort zusätzliche Informationen zu übermitteln.
In HTTP/1.X besteht ein Header aus einem Namen, bei dem Groß- und Kleinschreibung keine Rolle spielt, gefolgt von einem Doppelpunkt, optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel `Allow: POST`).
In HTTP/2 und neueren Versionen werden Header in Entwicklertools kleingeschrieben angezeigt (`accept: */*`). Eine besondere Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) beginnt außerdem mit einem Doppelpunkt (`:status: 200`).
Weitere Informationen zur Syntax der einzelnen Protokollversionen finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte, proprietäre Header wurden früher mit dem Präfix `X-` versehen. Diese Konvention wurde jedoch 2012 in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) aufgrund der Schwierigkeiten aufgegeben, die entstanden, wenn nicht standardisierte Felder standardisiert wurden. Weitere Header sind im [IANA-Register für HTTP-Feldnamen](https://www.iana.org/assignments/http-fields) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register führt Header einschließlich [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status) auf.

Header lassen sich nach ihrem Kontext gruppieren:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder den Client, der sie anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, etwa ihren Speicherort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Body der Ressource, etwa ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die verwendete Kodierung beziehungsweise Komprimierung.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über die Payload-Daten, darunter die Inhaltslänge und die für die Übertragung verwendete Kodierung.

Header lassen sich auch danach gruppieren, wie {{Glossary("Proxy_server", "Proxys")}} mit ihnen umgehen:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übertragen werden: bei einer Anfrage an den Server, bei einer Antwort an den Client. Zwischengeschaltete Proxys müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Verbindung auf Transportebene relevant und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass über den Header {{HTTPHeader("Connection")}} nur Hop-by-Hop-Header festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines User-Agents bei einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines User-Agents bei einem Proxyserver.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die sich das Objekt bereits in einem Proxy-Cache befindet.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, gespeicherte Daten und Cache), die mit der anfragenden Website verknüpft sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum und die Uhrzeit, ab denen die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Legt Regeln fest, die bestimmen, wie sich die Abfrageparameter einer URL auf den Abgleich mit dem Cache auswirken. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als getrennte Einträge im Browser-Cache gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource. Es wird verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, lässt sich in manchen Umgebungen aber leichter berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource kennzeichnet. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit _keinem_ der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder zu verhindern, dass eine neue Ressource hochgeladen wird, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und fordert die Übertragung der Ressource nur an, wenn sie nach dem angegebenen Datum geändert wurde. So werden Daten nur übertragen, wenn der Cache nicht mehr aktuell ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und fordert die Übertragung der Ressource nur an, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dadurch wird sichergestellt, dass ein neues Fragment eines bestimmten Bereichs mit früheren Fragmenten konsistent ist. Der Header kann auch verwendet werden, um beim Ändern vorhandener Dokumente eine optimistische Nebenläufigkeitskontrolle zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Legt fest, wie Request-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, statt eine neue Antwort vom Ursprungsserver anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Weitere Informationen finden Sie im Artikel zur [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server darüber, welche {{Glossary("MIME_type", "Datentypen")}} er zurücksenden kann.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, in der Regel ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server darüber, in welcher natürlichen Sprache er die Antwort voraussichtlich zurücksenden soll. Dies ist ein Hinweis und unterliegt nicht unbedingt vollständig der Kontrolle des Benutzers: Der Server sollte darauf achten, eine ausdrückliche Entscheidung des Benutzers (etwa die Auswahl einer Sprache aus einer Dropdown-Liste) nicht zu übergehen.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Response-Header zur _Inhaltsaushandlung für Anfragen_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verarbeiten kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Response-Header zur _Inhaltsaushandlung für Anfragen_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verarbeiten kann.
- {{HTTPHeader("Accept-Query")}}
  - : Ein Response-Header zur _Inhaltsaushandlung für Anfragen_, der angibt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("QUERY")}}-Anfrage verarbeiten kann.

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordnungsgemäß zu verarbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage durchlaufen darf, bevor sie an den Absender zurückgesendet wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die der Server zuvor mit dem Header {{HTTPHeader("Set-Cookie")}} gesendet hat.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage zugänglich gemacht werden darf, wenn das Credentials-Flag auf „true“ gesetzt ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt als Antwort auf eine Preflight-Anfrage an, welche Methoden beim Zugriff auf die Ressource erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden darf.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt anhand einer Liste ihrer Namen an, welche Header als Teil der Antwort zugänglich gemacht werden dürfen.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden dürfen.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von welchem Ursprung eine Fetch-Anfrage ausgeht.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die Werte von Attributen einsehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden. Aufgrund von Cross-Origin-Beschränkungen würden diese Werte andernfalls als null gemeldet.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource direkt angezeigt werden soll (das Standardverhalten ohne diesen Header) oder ob sie als Download behandelt werden soll und der Browser einen Dialog zum Speichern anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} des Oktettstroms bereit, der in einer HTTP-Nachricht enthalten ist (des Nachrichteninhalts), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung bereit.
    Anders als {{HTTPHeader("Content-Digest")}} berücksichtigt dieser Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt an, dass ein {{HTTPHeader("Content-Digest")}}-Header gewünscht wird.
    Es ist das `Content-`-Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt an, dass ein {{HTTPHeader("Repr-Digest")}}-Header gewünscht wird.
    Es ist das `Repr-`-Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Integritätsrichtlinie

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle vom User-Agent geladenen Ressourcen eines bestimmten Typs Garantien für die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) erfüllen.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Meldet vom User-Agent geladene Ressourcen, die gegen die Garantien für die [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity) verstoßen würden, wenn die Integritätsrichtlinie (mithilfe des Headers `Integrity-Policy`) durchgesetzt würde.

## Informationen zum Nachrichten-Body

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource als dezimale Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Gibt den verwendeten Komprimierungsalgorithmus an.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die natürliche Sprache oder die natürlichen Sprachen, die für die Zielgruppe vorgesehen sind, damit Benutzer Inhalte entsprechend ihrer bevorzugten Sprache unterscheiden können.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Nachrichtensignaturen

- {{HTTPHeader("Accept-Signature")}}
  - : Der Header [`Accept-Signature`](https://www.rfc-editor.org/info/rfc9421/#section-5.1) fordert eine signierte Antwort oder eine nachfolgende signierte Anfrage an und gibt die zu signierenden Komponenten sowie Signaturparameter an.
- {{HTTPHeader("Signature")}}
  - : Der Header [`Signature`](https://www.rfc-editor.org/info/rfc9421/#section-4.2) enthält einen oder mehrere mit Bezeichnungen versehene Signaturwerte. Jede Bezeichnung entspricht einem Eintrag in `Signature-Input`.
- {{HTTPHeader("Signature-Input")}}
  - : Der Header [`Signature-Input`](https://www.rfc-editor.org/info/rfc9421/#section-4.1) gibt die geordnete Liste der Nachrichtenkomponenten an, die von jeder Signatur abgedeckt werden, sowie deren Metadaten, etwa Erstellungszeitpunkt und Schlüsselkennung.

> [!NOTE]
> Diese Definitionen folgen RFC 9421. Der [Entwurf zu Signed HTTP Exchanges (SXG)](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html) definiert ebenfalls `Accept-Signature` und `Signature`, allerdings mit inkompatibler Semantik, sowie einen eigenen Header `Signed-Headers`. Die einzige Browserimplementierung von SXG, Chromium, unterstützt diese jedoch nicht als HTTP-Header.

## Präferenzen

Clients können Präferenzen in Anfragen senden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wurde, wenn dies für den Client andernfalls nicht eindeutig wäre.
Browser unterstützen das Senden von Präferenzen über diese Header nicht nativ. Sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für bestimmte Verhaltensweisen des Servers bei der Verarbeitung einer Anfrage an. Beispielsweise kann damit ein minimaler Antwortinhalt (`return=minimal`) oder eine asynchrone Verarbeitung (`respond-async`) angefordert werden. Wird der Header nicht unterstützt, verarbeitet der Server die Anfrage wie gewohnt.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche im Header `Prefer` angegebenen Präferenzen der Server angewendet hat. Dieser reine Response-Header macht den Umgang mit Präferenzen nachvollziehbar.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxyservern, die verändert werden oder verloren gehen, wenn ein Proxy am Anfragepfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys – sowohl Forward- als auch Reverse-Proxys – hinzugefügt und kann in Request- und Response-Headern vorkommen.

## Bereichsanfragen

Mit HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) kann ein Client einen Teil einer Ressource vom Server anfordern.
Bereichsanfragen sind beispielsweise für Mediaplayer nützlich, die wahlfreien Zugriff unterstützen, für Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und für Download-Manager, mit denen Benutzer Downloads pausieren und fortsetzen können.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich angegeben werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt an, welchen Teil eines Dokuments der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. So wird verhindert, dass zwei Bereiche aus inkompatiblen Versionen der Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, an welcher Stelle des vollständigen Nachrichten-Bodys eine Teilnachricht einzuordnen ist.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen Seite weiterzuleiten. Verwendet denselben Wert wie das Element `meta` mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält die Internet-E-Mail-Adresse eines Benutzers, der den anfragenden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für virtuelles Hosting) und optional die TCP-Portnummer an, auf der der Server auf Verbindungen wartet.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, auf der sich ein Link zur aktuell angeforderten Seite befand.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen, die im Header {{HTTPHeader("Referer")}} gesendet werden, in Anfragen enthalten sein sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, anhand derer die Kommunikationspartner im Netzwerkprotokoll den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden User-Agents erkennen können.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die eine Ressource unterstützt.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, mit der der Ursprungsserver die Anfrage verarbeitet.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, für ein bestimmtes Dokument eine Einbettungsrichtlinie festzulegen.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Weitere Informationen finden Sie im [Artikel zur Erläuterung von CORP](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert, welche Ressourcen der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, Richtlinien zu erproben, indem sie deren Auswirkungen überwachen, ohne sie durchzusetzen. Die Berichte über Richtlinienverstöße bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an den angegebenen URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht Websites, die Meldung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) zu aktivieren, um die Verwendung fehlerhaft ausgestellter Zertifikate für die jeweilige Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website und in den von ihr eingebetteten {{htmlelement("iframe")}}s zu erlauben oder zu verbieten.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Ein Response-Header, mit dem Websitebetreiber einen oder mehrere Endpunkte für den Empfang von Fehlermeldungen festlegen können, etwa Berichte über CSP-Verstöße, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS statt über HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Signalisiert dem Server, dass der Client eine verschlüsselte und authentifizierte Antwort bevorzugt und die Direktive {{CSP("upgrade-insecure-requests")}} erfolgreich verarbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den in {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darstellen darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex die Verarbeitung von Daten über Domaingrenzen hinweg erlauben, die andernfalls aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) eingeschränkt wäre.
    Der Header `X-Permitted-Cross-Domain-Policies` setzt solche Richtliniendateien außer Kraft, damit Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über sie, ohne der Anwendung oder ihren Besuchern einen Nutzen zu bieten. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadata-Request-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadata-Request-Header")}} liefern Informationen über den Kontext, aus dem eine Anfrage stammt. Ein Server kann anhand der Herkunft der Anfrage und der vorgesehenen Verwendung der Ressource entscheiden, ob die Anfrage zugelassen werden soll.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung des Anfragenauslösers und dem Ursprung des Ziels an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit einem der möglichen Werte `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt dem Server den Modus der Anfrage an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit einem der möglichen Werte `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktion ausgelöst wurde. Es handelt sich um einen Structured Header mit einem booleschen Wert: `?0` für „false“ und `?1` für „true“.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen Structured Header, dessen Wert ein Token mit einem der möglichen Werte `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Request-Header sind _streng genommen_ keine Fetch-Metadata-Request-Header, liefern aber ebenfalls Informationen über den Kontext, in dem eine Ressource verwendet werden soll. Ein Server kann sie nutzen, um sein Caching-Verhalten oder die zurückgegebenen Informationen anzupassen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn die Ressource nicht unmittelbar vom User-Agent verwendet werden soll. Der Header hat derzeit einen möglichen Wert: `prefetch`. Dieser zeigt an, dass die Ressource vorsorglich für eine mögliche spätere Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Request-Header, der bei einer vorgezogenen Anfrage zum Abrufen einer Ressource mit [`fetch()`](/de/docs/Web/API/Window/fetch) während des Starts eines Service Workers gesendet wird. Der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegte Wert kann dem Server mitteilen, dass er eine andere Ressource als bei einem normalen `fetch()`-Aufruf zurückgeben soll.

## Header für den Fetch-Speicherzugriff

Diese Header ermöglichen einen erweiterten Ablauf für die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

- {{HTTPHeader("Sec-Fetch-Storage-Access")}}
  - : Gibt den „Speicherzugriffsstatus“ für den aktuellen Fetch-Kontext an. Dieser hat einen der Werte `none`, `inactive` oder `active`.
    Der Server kann mit `Activate-Storage-Access` antworten, um den Browser aufzufordern, eine `inactive`-Berechtigung zu aktivieren und die Anfrage zu wiederholen. Wenn der Status `active` ist, kann er außerdem anfordern, eine Ressource mit Zugriff auf deren Drittanbieter-Cookies zu laden.
- {{HTTPHeader("Activate-Storage-Access")}}
  - : Wird als Antwort auf `Sec-Fetch-Storage-Access` verwendet, um anzuzeigen, dass der Browser eine vorhandene Berechtigung für sicheren Zugriff aktivieren und die Anfrage mit Cookies wiederholen kann. Ist die Berechtigung bereits aktiviert, kann er eine Ressource mit Cookie-Zugriff laden.

## Server-Sent Events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Ein Response-Header, der Server-Endpunkte angibt, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ein Response-Header, der Server-Endpunkte angibt, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.

## Übertragungskodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Kodierungsform an, mit der die Ressource sicher an den Benutzer übertragen wird.
- {{HTTPHeader("TE")}}
  - : Gibt an, welche Übertragungskodierungen der User-Agent akzeptiert.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, zusätzliche Felder am Ende einer in Chunks übertragenen Nachricht einzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) beim [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein Response-Header, der angibt, dass der Server bereit ist, die Verbindung auf eine WebSocket-Verbindung umzustellen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die Erweiterung an, die der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein Request-Header mit einem Schlüssel, der bestätigt, dass der Client ausdrücklich einen `WebSocket` öffnen möchte.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Unterprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das Unterprotokoll an, das der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn der Server die angeforderte Protokollversion nicht unterstützt, und listet die vom Server unterstützten Versionen auf.

## Sonstige

- {{HTTPHeader("Alt-Svc")}}
  - : Listet alternative Möglichkeiten auf, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Kennzeichnet den verwendeten alternativen Dienst.
- {{HTTPHeader("Date")}}
  - : Enthält Datum und Uhrzeit, zu denen die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld ermöglicht es, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch gleichwertig mit dem HTML-Element {{HTMLElement("link")}}.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Übermittelt eine oder mehrere Metriken und Beschreibungen für den jeweiligen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Ist in Fetch-Anfragen für die Skriptressource eines Service Workers enthalten.
    Dieser Header hilft Administratoren, Anfragen nach Service-Worker-Skripten zu Überwachungszwecken zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in die Antwort auf das Service-Worker-Skript](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Source Map")}}, damit Debugger statt durch generierten oder transformierten Code durch den ursprünglichen Quellcode schrittweise navigieren können.
- {{HTTPHeader("Upgrade")}}
  - : Mit diesem ausschließlich für HTTP/1.1 vorgesehenen Header kann eine bereits bestehende Client-Server-Verbindung auf ein anderes Protokoll umgestellt werden (über dasselbe Transportprotokoll). Beispielsweise kann ein Client damit eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- beziehungsweise HTTPS-Verbindung auf WebSocket umstellen.
- {{HTTPHeader("Priority")}}
  - : Gibt einen Hinweis auf die Priorität einer bestimmten Ressourcenanfrage über eine bestimmte Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Priorität des Clients anzugeben, oder in einer Antwort, wenn der Server die Anfrage neu priorisieren möchte.

## Experimentelle Header

### Header für Attribution Reporting

Mit der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) können Entwickler Conversions messen – beispielsweise, wenn ein Benutzer auf eine in einer Website eingebettete Anzeige klickt und anschließend den beworbenen Artikel auf der Website des Anbieters kauft – und Berichte über diese Conversions abrufen. Statt sich auf Tracking-Cookies von Drittanbietern zu stützen, verwendet sie verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die zur Feststellung einer Conversion miteinander abgeglichen werden.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Gibt an, dass die Antwort auf die aktuelle Anfrage am Attribution Reporting teilnehmen kann, indem entweder eine Attributionsquelle oder ein Attributionsauslöser registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil der Antwort auf eine Anfrage mit dem Header `Attribution-Reporting-Eligible` gesendet und zur Registrierung einer Attributionsquelle verwendet.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil der Antwort auf eine Anfrage mit dem Header `Attribution-Reporting-Eligible` gesendet und zur Registrierung eines Attributionsauslösers verwendet.

### Client Hints

HTTP-[Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind Request-Header, die nützliche Informationen über den Client bereitstellen, etwa den Gerätetyp und die Netzwerkbedingungen. Server können damit die bereitgestellten Inhalte an diese Bedingungen anpassen.

Server fordern die Client-Hint-Header, an denen sie interessiert sind, über {{HTTPHeader("Accept-CH")}} beim Client an. Der Client kann daraufhin entscheiden, die angeforderten Header in nachfolgende Anfragen aufzunehmen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können ihre Unterstützung für Client Hints über das Header-Feld `Accept-CH` oder ein entsprechendes HTML-Element `<meta>` mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) bekannt geben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client Hints zugleich [kritische Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client Hints sind nachfolgend aufgeführt.

#### User-Agent-Client-Hints

[UA-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Request-Header, die Informationen über den User-Agent, die zugrunde liegende Plattform und Architektur sowie über die im User-Agent oder auf der Plattform festgelegten Benutzerpräferenzen bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marke und Version des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Architektur der dem User-Agent zugrunde liegenden Plattform.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der zugrunde liegenden CPU-Architektur des User-Agents (beispielsweise „64“ Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des User-Agents, die beschreiben, wie Benutzer mit ihm interagieren.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der User-Agent läuft auf einem mobilen Gerät oder bevorzugt allgemein eine „mobile“ Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Zugrunde liegendes Betriebssystem beziehungsweise zugrunde liegende Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Version des zugrunde liegenden Betriebssystems des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob die Binärdatei des User-Agents unter einem 64-Bit-Windows im 32-Bit-Modus ausgeführt wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers für weniger Animationen und Layoutverschiebungen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Ein Request-Header, der die Präferenz des User-Agents für reduzierte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hints sind innerhalb von [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der Delegierung über eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die zur Offenlegung von Daten genutzt werden könnte.

#### Client Hints für Geräte und responsive Bilder

- {{HTTPHeader("Sec-CH-Device-Memory")}} {{experimental_inline}}
  - : Ungefähre Größe des verfügbaren Arbeitsspeichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("Sec-CH-DPR")}} {{experimental_inline}}
  - : Ein Request-Header, der das Gerätepixelverhältnis des Clients angibt (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Sec-CH-Viewport-Height")}} {{experimental_inline}}
  - : Ein Request-Header, der die Höhe des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Viewport-Width")}} {{experimental_inline}}
  - : Ein Request-Header, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Sec-CH-Width")}} {{experimental_inline}}
  - : Ein Request-Header, der die Breite des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.

##### Veraltete Client Hints für Geräte und responsive Bilder

- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Device-Memory")}}
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Standardisiert als {{HTTPHeader("Sec-CH-Width")}}

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, die gesendeten Informationen anhand der Benutzerentscheidung sowie der Bandbreite und Latenz der Netzwerkverbindung auszuwählen.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} („Netzwerkprofil“), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Umlaufzeit (RTT) auf Anwendungsebene in Millisekunden, einschließlich der Verarbeitungszeit des Servers. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Die Zeichenfolge `on`, die die Präferenz des User-Agents für einen geringeren Datenverbrauch angibt.

### Compression Dictionary Transport

[Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) verwendet ein gemeinsames Komprimierungswörterbuch, um die Übertragungsgröße von HTTP-Antworten zu verringern, statt das statische Standardwörterbuch der {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann mit diesem Request-Header das beste verfügbare Wörterbuch angeben, das der Server zur Komprimierung verwenden kann.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn dem Browser bereits ein Wörterbuch für eine Ressource zur Verfügung steht und der Server im Header `Use-As-Dictionary` eine `id` für das Wörterbuch angegeben hat.
    Anfragen nach Ressourcen, für die das Wörterbuch verwendet werden kann, enthalten einen Header `Available-Dictionary` sowie die vom Server bereitgestellte Wörterbuch-`id` im Header `Dictionary-ID`.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Abgleichkriterien auf, unter denen das Wörterbuch bei zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ein Request-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Er ist zugunsten von Global Privacy Control (GPC) veraltet. GPC wird Servern über den Header {{HTTPHeader("Sec-GPC")}} mitgeteilt und ist für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ein Response-Header, der den für die zugehörige Anfrage geltenden Tracking-Status angibt. Wird zusammen mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer dem Verkauf oder der Weitergabe seiner personenbezogenen Daten durch eine Website oder einen Dienst an Dritte zustimmt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Ein Response-Header, der angibt, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _nach Ursprung abgegrenzten [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es User-Agents, implementierungsspezifische Ressourcen wie Prozesse oder Threads effizienter für Agent-Cluster zuzuweisen.

### Server-Sent Events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, mit dem Entwickler eine Richtlinie für die Meldung von Netzwerkfehlern festlegen können.

### Topics API

Die Topics API bietet Entwicklern einen Mechanismus zur Umsetzung von Anwendungsfällen wie interessenbezogener Werbung (IBA).
Weitere Informationen finden Sie in der Dokumentation zur [Topics API](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein Response-Header, mit dem aus der URL einer aufrufenden Website abgeleitete Interessenthemen in der Antwort auf eine Anfrage als beobachtet markiert werden. Die Anfrage wurde durch eine Funktion erzeugt, die die Topics API aktiviert.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein Request-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet. Eine Werbetechnologieplattform nutzt diese Themen, um eine personalisierte Anzeige auszuwählen.

### Sonstige

- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage über TLS-Early-Data übertragen wurde.
- {{HTTPHeader("Idempotency-Key")}} {{experimental_inline}}
  - : Stellt einen eindeutigen Schlüssel für `POST`- und `PATCH`-Anfragen bereit, damit diese idempotent ausgeführt werden können.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Ein Response-Header, den ein föderierter Identitätsanbieter (IdP) sendet, um seinen Anmeldestatus festzulegen: ob im aktuellen Browser Benutzer beim IdP angemeldet sind oder nicht.
    Der Browser speichert diesen Status und verwendet ihn für die [FedCM API](/de/docs/Web/API/FedCM_API).
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Stellt eine Liste von URLs bereit, die auf Textressourcen mit JSON-Definitionen von [Speculation Rules](/de/docs/Web/API/Speculation_Rules_API) verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Regelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Speculation Rules, die zur Spekulation geführt haben. So kann ein Server erkennen, welche Regeln die Spekulation ausgelöst haben, und sie gegebenenfalls blockieren.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Verwendung verschiedener risikoreicherer Lademodi zu erlauben. Beispielsweise erfordert [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) zwischen verschiedenen Ursprüngen innerhalb derselben Site den Wert `credentialed-prerender` für `Supports-Loading-Mode`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Kennzeichnet die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Kennzeichnet den ursprünglich angeforderten Host, über den ein Client eine Verbindung zu Ihrem Proxy oder Load Balancer hergestellt hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Kennzeichnet das Protokoll (HTTP oder HTTPS), mit dem ein Client eine Verbindung zu Ihrem Proxy oder Load Balancer hergestellt hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching. Bei dieser Funktion lösen Browser Domainnamen vorsorglich auf – sowohl für Links, denen Benutzer möglicherweise folgen, als auch für URLs von Ressourcen, auf die das Dokument verweist, darunter Bilder, CSS und JavaScript.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der HTTP-Header [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) gibt an, wie eine Webseite in öffentlichen Suchmaschinenergebnissen indexiert werden soll. Der Header entspricht [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Ein implementierungsspezifischer Header, der an beliebiger Stelle in der Anfrage-Antwort-Kette unterschiedliche Auswirkungen haben kann. Er dient der Abwärtskompatibilität mit HTTP/1.0-Caches, in denen der Header `Cache-Control` noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen zu möglichen Problemen.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields)
- [HTTP Working Group](https://httpwg.org/specs/)
