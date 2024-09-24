---
title: HTTP Headers
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

**HTTP Headers** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort auszutauschen. Ein HTTP-Header besteht aus seinem nicht case-sensitiven Namen, gefolgt von einem Doppelpunkt (`:`), und danach seinem Wert. {{Glossary("Whitespace", "Leerzeichen")}} vor dem Wert werden ignoriert.

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde im Juni 2012 wegen der Unannehmlichkeiten, die entstanden, wenn nicht-standardisierte Felder standardisiert wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgelehnt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), der „permanent“ (standardisiert), „provisional“ (neu), „deprecated“ (Verwendung wird nicht empfohlen) oder „obsolete“ (nicht mehr in Gebrauch) sein kann.

Header können je nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Request headers")}}
  - : Enthält mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfragt.
- {{Glossary("Response_header", "Response headers")}}
  - : Halten zusätzliche Informationen über die Antwort bereit, wie ihre Standortangaben oder Informationen über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Representation headers")}}
  - : Beinhaltet Informationen über den Körper der Ressource wie ihren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder die angewendete Kodierung/Komprimierung.
- {{Glossary("Payload_header", "Payload headers")}}
  - : Beinhaltet repräsentationsunabhängige Informationen über Nutzdaten wie die Inhaltslänge und die zur Übermittlung verwendete Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie handhaben:

- End-to-end headers
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server bei einer Anfrage oder den Client bei einer Antwort. Zwischenproxies müssen diese Header unverändert übertragen und Caches müssen sie speichern.
- Hop-by-hop headers
  - : Diese Header sind nur für eine einzige Transportverbindung relevant und _dürfen nicht_ von Proxies weitergeleitet oder gecacht werden. Beachten Sie, dass nur hop-by-hop Header mithilfe des {{httpheader("Connection")}} Headers gesetzt werden dürfen.

## Authentication

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Beinhaltet die Anmeldeinformationen, um einen User-Agent bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um hinter einem Proxy-Server auf eine Ressource zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Beinhaltet die Anmeldeinformationen, um einen User-Agent bei einem Proxy-Server zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache gewesen ist.
- {{HTTPHeader("Cache-Control")}}
  - : Anweisungen für Cache-Mechanismen in Anfragen und Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen werden. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Cache-Einträge gespeichert werden soll.

## Conditionals

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das zum Vergleich mehrerer Versionen derselben Ressource verwendet wird. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in manchen Umgebungen einfacher zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu verändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource eine der angegebenen ETags entspricht.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _keine_ der angegebenen ETags entspricht. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übermitteln, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit vorherigen sicher oder ermöglicht die Implementierung eines optimistischen Nebenläufigkeitskontrollsystems beim Ändern vorhandener Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Connection management

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Content negotiation

Für weitere Details siehe den [Artikel über Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Charset")}} {{deprecated_inline}}
  - : Gibt die vom Client unterstützten {{Glossary("character_encoding", "Zeichenkodierungen")}} an.
    Es ist veraltet, da {{Glossary("UTF-8", "UTF-8")}} allgegenwärtig geworden ist und die Verwendung des Headers das Fingerprinting von Clients erleichtert.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, die explizite Benutzerauswahl nicht zu überschreiben (wie z. B. die Auswahl einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _content negotiation_ Antwort-Header für Anfragen, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}} Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _content negotiation_ Antwort-Header für Anfragen, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}} Anfrage verstehen kann.

## Controls

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordentlich zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) gibt dies die maximale Anzahl von Hops an, die die Anfrage durchführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offen gelegt werden kann, wenn das Anmeldekennzeichen wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Voranfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Voranfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Voranfrage im Cache gehalten werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei einer Voranfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei einer Voranfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt die Ursprünge an, die die Werte von Attributen sehen dürfen, die über die Features der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header), oder ob sie wie ein Download gehandhabt werden soll und der Browser einen "Speichern unter"-Dialog anzeigen soll.

## Integrity digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("digest", "Digest")}} des Datenstroms im Kontext einer HTTP-Nachricht (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Bietet einen {{Glossary("digest", "Digest")}} einer Ressource.
    Siehe {{HTTPHeader("Content-Digest")}} und {{HTTPHeader("Repr-Digest")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("digest", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das Pendant zu `Content-` von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Digest")}} Header an.
    Siehe stattdessen {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das Pendant zu `Repr-` von {{HTTPHeader("Want-Content-Digest")}}.

## Message body information

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, sodass ein Benutzer nach den eigenen bevorzugten Sprachbedingungen differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Proxy-Server-Seite, die verändert oder verloren geht, wenn ein Proxy am Weg der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl Vorwärts- als auch Rückwärts-Proxys, und kann in den Anfrage- und Antwort-Headern erscheinen.

## Range requests

HTTP [Range Requests](/de/docs/Web/HTTP/Range_requests) erlauben es dem Client, einen Teil einer Ressource vom Server anzufordern.
Range Requests sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die ein Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Zeigt an, ob der Server Range-Anfragen unterstützt, und falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurücksenden soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Range-Anfrage, die nur dann erfüllt wird, wenn der angegebene etag oder das Datum mit der Remote-Ressource übereinstimmt. Wird verwendet, um zu verhindern, dass zwei Bereiche einer inkompatiblen Version der Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil der Nachricht gehört.

## Redirects

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Leitet den Browser an, die Seite neu zu laden oder zu einer anderen umzuleiten. Nimmt denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Request context

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfragenden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für virtuelles Hosting) und (optional) die TCP-Portnummer an, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Informationen über den Referer in dem {{HTTPHeader("Referer")}} Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Beinhaltet eine charakteristische Zeichenkette, die es den Peers im Netzwerkprotokoll ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-User-Agents zu identifizieren.

## Response context

- {{HTTPHeader("Allow")}}
  - : Listet die Menge an HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Beinhaltet Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Security

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungspolitik für ein gegebenes Dokument festzulegen.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert, welche Ressourcen der User-Agent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, jedoch nicht durchsetzen. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP `POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung der [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um den Einsatz falsch ausgestellter Zertifikate zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browser-Features im eigenen Frame einer Website und in darin eingebetteten {{htmlelement("iframe")}}s zuzulassen oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort Header, der es Website-Besitzern erlaubt, einen oder mehrere Endpunkte zu spezifizieren, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verletzungen zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er erfolgreich die {{CSP("upgrade-insecure-requests")}} Direktive handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine bereichsübergreifende Richtliniendatei (`crossdomain.xml`) zulässig ist. Die Datei kann eine Richtlinie definieren, die Clientanwendungen wie Adobe's Flash Player (nun veraltet), Adobe Acrobat, Microsoft Silverlight (nun veraltet) oder Apache Flex die Erlaubnis erteilt, Daten über Domains hinweg zu verwenden, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Weitere Informationen finden Sie in der [Spezifikation der bereichsübergreifenden Richtliniendatei](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, ohne dass sie nützlich für die Anwendung oder deren Besucher sind. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert Filter gegen Cross-Site-Scripting.

### Fetch metadata request headers

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} bieten Informationen über den Kontext, aus dem die Anforderung stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anforderung erlaubt werden soll, basierend darauf, woher die Anforderung stammt und wie die Ressource verwendet werden soll.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anforderung an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanforderung durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein Boolescher Wert ist, sodass mögliche Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anforderung an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadaten-Anforderungsheader", bieten jedoch ähnlich Informationen darüber, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die Information, die zurückgegeben wird:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anforderung an, wenn der Zweck etwas anderes als die sofortige Verwendung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der bedeutet, dass die Resource vorab für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in voreiligen Anfragen gesendet wird, um eine Ressource während des Service-Worker-Boots einzuholen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einem normalen `fetch()` Vorgang.

## Server-sent events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, wohin der Browser Warnungs- und Fehlerberichte bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, wohin der Browser Warnungs- und Fehlerberichte bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.

## Transfer coding

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher auf den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der User-Agent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Erlaubt es dem Absender, zusätzliche Felder am Ende einer Chunked Nachricht hinzuzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der angibt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu upgraden.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten zeigt er die Erweiterung an, die der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der bestätigt, dass der Client explizit beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients gewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Other

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten aufzulisten, diesen Service zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den in Verwendung befindlichen alternativen Service zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Beinhaltet das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entität-Header-Feld bietet eine Möglichkeit, eine oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten sollte, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) hinzugefügt wird.
- {{HTTPHeader("SourceMap")}}
  - : Verknüpft generierten Code zu einer [Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html).
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu upgraden. Zum Beispiel kann ein Client ihn verwenden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket aufzurüsten.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server die Anfordernis neu priorisieren möchte.

## Experimental headers

### Attribution reporting headers

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann das Produkt bei dem Anbieter kauft — und anschließend Berichte über diese Konversionen zu erhalten. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies, sondern beruht auf verschiedenen Headern zur Registrierung von **Quellen** und **Triggern**, die zusammengeführt werden, um eine Konversion anzuzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort, die der aktuellen Anfrage entspricht, berechtigt ist, an der Attribution-Berichterstattung teilzunehmen, indem entweder eine Attributionsquelle oder ein Trigger registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt und dient zur Registrierung einer Attributionsquelle.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt und dient zur Registrierung eines Attributionstriggers.

### Client hints

HTTP [Client Hints](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen liefern und es Servern ermöglichen, das, was für diese Bedingungen bereitgestellt wird, zu optimieren.

Server fordern proaktiv die Client-Hints-Header an, die sie vom Client interessieren, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, ob die angeforderten Header in zukünftigen Anfragen enthalten sein sollen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client Hints über das `Accept-CH` Header-Feld oder ein äquivalentes HTML `<meta>` Element mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut bekanntmachen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client Hints auch [kritische Client Hints](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client Hints sind im Folgenden aufgelistet.

#### User agent client hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungsheader, die Informationen über den User-Agent, die Plattform/Architektur, auf der er läuft, und die auf dem User-Agent oder der Plattform eingestellten Benutzerpräferenzen bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : User-Agent-Branding und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitness der zugrunde liegenden CPU-Architektur des User-Agents (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des User-Agents, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständiger Versionsstring des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Volle Version für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der User-Agent läuft auf einem mobilen Gerät oder bevorzugt allgemeiner eine „mobile“ Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Das Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Das zugrunde liegende Betriebssystem/Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Die zugrunde liegende Betriebssystemversion des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das User-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows ausgeführt wird oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers, weniger Animationen und Inhaltslayout-Verschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Der Anforderungsheader gibt die Präferenz des User-Agents für reduzierte Transparenz an.

> [!NOTE]
> User-Agent-Client-Hints sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf [Rechte-Delegegierung](/de/docs/Web/HTTP/Permissions_Policy) basieren, die verwendet werden könnte, um Daten zu leaken.

#### Device client hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um das Bildgerät zu Pixelverhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hint verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Device-Pixel-Verhältnis des Clients (die Anzahl physischer Gerätepixel für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}) bereitstellt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader bietet die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}}.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Network client hints

Netzwerkclient-Hints ermöglichen es einem Server, auszuwählen, welche Informationen basierend auf Benutzerentscheidungen und Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Rundreisezeit auf Anwendungsebene (RTT) in Millisekunden, die die Verarbeitungszeit des Servers umfasst. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des User-Agents für reduzierte Datennutzung angibt.

### Privacy

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten der Global Privacy Control (GPC), die Servern über den {{HTTPHeader("Sec-GPC")}} Header kommuniziert wird und auf Kunden über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugreifbar ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wird. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, ihre persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

### Security

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, um Webanwendungen zu ermöglichen, ihre Ursprünge zu isolieren.

### Server-sent events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichterstattungsrichtlinie festzulegen.

### Topics API

Die Topics API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Siehe die [Dokumentation zur Topics API](/de/docs/Web/API/Topics_API) für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu markieren, die aus der URL einer aufrufenden Website abgeleitet wurden, wie sie in der Antwort auf eine von einer [Funktion zur Aktivierung der Topics-API](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet werden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Anzeigenplattform für die Auswahl einer personalisierten Anzeige verwendet werden, die angezeigt werden soll.

### Other

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : Ein Client kann die gewünschte Push-Policy für eine Anfrage ausdrücken, indem er ein [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) Header-Feld in der Anfrage sendet.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzuzeigen, von den verfügbaren Signaturen Gebrauch zu machen, und um anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Frühdaten übermittelt wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _ursprungsbasierten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte.
    Diese Isolation ermöglicht es User-Agents, für Agenten-Cluster Zu den Implementierungsspezifischen Ressourcen wie Prozesse oder Threads effizienter zuzuteilen.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : Eine [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) definiert das Serververhalten bezüglich des Pushens bei der Verarbeitung einer Anfrage.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob Benutzer im aktuellen Browser im IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in einer Signatur enthalten sein sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die JSON-Definitionen für [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Vom Navigationstarget gesetzt, um sich für die Verwendung verschiedener risikoreicher Lademodi zu entscheiden. Beispielsweise erfordert das vorgefilterte, gleiche Site [Vorladen](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## Non-standard headers

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load-Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefragt wurde, den ein Client verwendet hat, um Ihre Proxy oder Ihren Load-Balancer zu erreichen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um Ihre Proxy oder Ihren Load-Balancer zu erreichen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Domainnamenauflösung sowohl für Links, die der Benutzer möglicherweise aufrufen möchte, als auch für URLs für vom Dokument referenzierte Elemente, einschließlich Bildern, CSS, JavaScript usw., durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchergebnisse indiziert werden soll. Der Header ist effektiv gleichbedeutend mit `<meta name="robots" content="…">`.

## Deprecated headers

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der überall entlang der Anfrage-Antwort-Kette verschiedene Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0 Caches verwendet, bei denen der `Cache-Control` Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warnungsinformationen über mögliche Probleme.

## Contributing

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## See also

- [Wikipedia-Seite über die Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Working Group](https://httpwg.org/specs/)
