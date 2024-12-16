---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: a9686faf53ef37259a11e2d659622a6e0051ee89
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln.
In HTTP/1.X ist ein Header ein nicht groß- und kleinschreibungssensitiver Name, gefolgt von einem Doppelpunkt, dann einem optionalen Leerzeichen, das ignoriert wird, und schließlich dem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklerwerkzeugen betrachtet werden (`accept: */*`), und einer speziellen Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) wird ein Doppelpunkt vorangestellt (`:status: 200`).
Mehr Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite zu [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, jedoch wurde diese Konvention 2012 in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) als veraltet erklärt, da sie Unannehmlichkeiten verursachte, wenn nichtstandardisierte Felder standardisiert wurden; andere sind im [IANA HTTP Feldnamen-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anforderungsheader")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwortheader")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie etwa deren Ort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentationsheader")}}
  - : Enthalten Informationen über den Inhalt der Ressource, wie deren [MIME-Typ](/de/docs/Web/HTTP/MIME_types), oder die Kodierung/Kompression, die angewendet wurde.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten repräsentationsunabhängige Informationen über Payload-Daten, einschließlich der Inhaltslänge und der Kodierung, die für den Transport verwendet wird.

Header können auch entsprechend der Handhabung durch {{Glossary("Proxy_server", "Proxyserver")}} gruppiert werden:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischengeschaltete Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzige Transportebenen-Verbindung relevant und _dürfen nicht_ von Proxys weitergeleitet oder gecacht werden. Beachten Sie, dass nur Hop-by-hop-Header mithilfe des {{httpheader("Connection")}} Headers festgelegt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden sollte.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen User-Agent mit einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden sollte.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Proxyserver zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache gewesen ist.
- {{HTTPHeader("Cache-Control")}}
  - : Richtlinien für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die mit der anfordernden Website verknüpft sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach denen die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Regelmenge an, die definiert, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen werden. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber leichter in einigen Umgebungen zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource einem der gegebenen ETags entspricht.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der gegebenen ETags übereinstimmt. Dies wird verwendet, um Caches (für sichere Anfragen) zu aktualisieren oder um zu verhindern, dass eine neue Ressource hochgeladen wird, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nicht nach dem angegebenen Datum geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen sicher oder implementiert ein optimistisches Konkurrenzkontrollsystem beim Ändern bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader gematcht werden sollen, um zu entscheiden, ob statt einer frischen Anfrage an den Ursprungsserver eine zwischengespeicherte Antwort verwendet werden kann.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Bestimmt, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Für weitere Details lesen Sie den [Artikel zur Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Das Kodierungsverfahren, üblicherweise ein [Kompressionsverfahren](/de/docs/Web/HTTP/Compression), das auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt unter vollständiger Kontrolle des Nutzers: Der Server sollte immer darauf achten, keine explizite Benutzerwahl zu überschreiben (wie das Auswählen einer Sprache aus einem Dropdown).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Request Content Negotiation_ Response-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Request Content Negotiation_ Response-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) gibt es die maximale Anzahl von Hops an, die die Anfrage ausführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Senden von Cookies vom Server an den User-Agent.

## CORS

Für weitere Informationen lesen Sie die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage freigegeben werden kann, wenn das Anmeldedaten-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource in der Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache gespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage herausgegeben wird, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage herausgegeben wird, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardeinstellung ohne Header) oder wie ein Download behandelt werden sollte und der Browser ein "Speichern unter"-Dialogfeld anzeigen soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("digest", "Digest")}} des Oktettstroms, der in einer HTTP-Nachricht eingerahmt ist (der Nachricht-Inhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("digest", "Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung.
    Im Gegensatz zu {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Äquivalent von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Äquivalent von {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichtenkörper

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in Dezimalzahlen der Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um das Komprimierungsverfahren zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, sodass es einem Benutzer ermöglicht wird, nach den eigenen bevorzugten Sprachen zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Proxyserver

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxyservern, die geändert oder verloren gehen, wenn ein Proxy an dem Anforderungspfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxys, sowohl vorwärts als auch rückwärts, und kann im Anforderungsheader und im Antwortheader erscheinen.

## Range-Anfragen

HTTP-[Range-Anfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Range-Anfragen sind nützlich für Anwendungen wie Media-Player, die Zufallszugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Range-Anfragen unterstützt und, wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Range-Anfrage, die nur erfüllt wird, wenn die angegebene Etag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Körpernachricht eine Teilnachricht hingehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen umzuleiten. Nimmt denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv) an.

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Ports, über die der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur derzeit angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen in dem {{HTTPHeader("Referer")}} Header mit Anfragen einbezogen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Protokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen oder steuern können.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der User-Agent auf einer bestimmten Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, aber nicht erzwingen. Diese Verstöße bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, Berichterstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren, um die Verwendung falsch ausgestellter Zertifikate für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionalitäten in einem eigenen Rahmen einer Website und in {{htmlelement("iframe")}}s, die es einbettet, zu erlauben oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Websitebesitzern ermöglicht, einen oder mehrere Endpunkte zu spezifizieren, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Vorliebe des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass sie erfolgreich mit der {{CSP("upgrade-insecure-requests")}}-Richtlinie umgehen kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert die MIME-Erkennung und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} gegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Berechtigung erteilen, Daten domänenübergreifend zu handhaben, die andernfalls aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients immer noch unerwünschte Anforderungen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es der Anwendung oder ihren Besuchern keinen Nutzen bietet. Entfernen Sie diesen Header, um potenzielle Sicherheitslücken nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Filtern von Cross-Site-Scripting.

### Request-Header für Fetchen von Metadaten

{{Glossary("Fetch_metadata_request_header", "Fetchen von Metadaten-Request-Header")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage zugelassen werden soll, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Zeigt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und ihrem Zielursprung an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Zeigt den Modus der Anfrage an einen Server an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Zeigt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturiertes Header, dessen Wert ein boolescher Wert ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturiertes Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Metadaten-Request-Header für Fetchen", liefern jedoch ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als die unmittelbare Verwendung durch den User-Agent. Der Header hat derzeit einen möglichen Wert, `prefetch`, der darauf hinweist, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorzeitigen Anfrage an [`fetch()`](/de/docs/Web/API/Window/fetch) einer Ressource während des Starts des Service Workers gesendet wird. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wurde, kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource zurückgegeben werden soll als bei einem normalen `fetch()`-Vorgang.

## Ereignisse vom Server gesendet

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, wohin der Browser in einer API Warnungs- und Fehlerberichte senden soll [Reporting API](/de/docs/Web/API/Reporting_API).
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, wohin der Browser in einer API Warnungs- und Fehlerberichte senden soll [Reporting API](/de/docs/Web/API/Reporting_API).

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Codierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transfer-Codierungen an, die der User-Agent zu empfangen bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, zusätzliche Felder am Ende der chunked Nachricht aufzunehmen.

## WebSockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung zu aktualisieren.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server ausgewählte Erweiterung aus den Präferenzen des Clients an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client explizit beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die unterstützten Subprotokolle des Clients in bevorzugter Reihenfolge an.
    In Antworten gibt er das Subprotokoll an, das vom Server aus den Präferenzen des Clients ausgewählt wurde.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die Version des vom Client verwendeten WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Weitere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zur Erreichung dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entitäts-Header-Feld bietet eine Möglichkeit, ein oder mehrere Links in HTTP-Headers zu serialisieren. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten sollte, bevor er eine Folgeanforderung stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Source Map")}}, damit Debugger durch den Original-Quellcode statt durch generierten oder transformierten Code durchgehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits hergestellte Client-/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann ein Client ihn verwenden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0, oder eine HTTP oder HTTPS Verbindung auf einen WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Liefert einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server die Priorität der Anfrage neu priorisiert.

## Experimentelle Header

### Attributionsbericht-Header

Die [Attribute Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen - zum Beispiel, wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann den Kauf des Artikels auf der Seite des Verkäufers fortsetzt - und dann Berichte über diese Konversionen abzurufen. Dies geschieht ohne die Verwendung von Third-Party-Tracking-Cookies, indem stattdessen verschiedene Header verwendet werden, um **Quellen** und **Auslöser** zu registrieren, die übereinstimmen, um eine Konversion anzuzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort, die der aktuellen Anfrage entspricht, für die Teilnahme am Attributionsbericht berechtigt ist, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt, um einen Attributionsauslöser zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das Gelieferte für diese Bedingungen zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, die sie vom Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, diese gewünschten Header bei nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise mit dem `Accept-CH` Header-Feld oder einem gleichwertigen HTML `<meta>` Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgeführt.

#### Benutzeragent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, sowie Benutzereinstellungen, die am Benutzeragenten oder auf der Plattform eingestellt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformation des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Die zugrunde liegende CPU-Architektur-Bitness des Benutzeragenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Die Formfaktoren des Benutzeragentens, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Die vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Die vollständige Version für jede Marke in der Liste der Marken des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder, allgemeiner gesprochen, bevorzugt eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Das Gerätemodell des Benutzeragentens.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Das zugrunde liegende Betriebssystem/Plattform des Benutzeragentens.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Die zugrunde liegende Betriebssystemversion des Benutzeragentens.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzeragenten-Binärprogramm im 32-Bit-Modus auf einem 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers für dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers, weniger Animationen und Layoutverschiebungen von Inhalten zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Der Anforderungsheader gibt an die Vorliebe des Benutzeragenten an, weniger Transparenz zu bevorzugen.

> [!NOTE]
> Benutzeragent-Client-Hinweise sind in [eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie sich auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) stützen, die verwendet werden könnten, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um das Bildgerät zu Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefährer Wert des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Gerätespeicher-API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Gerätepixelverhältnis des Clients bereitstellt (die Anzahl der physischen Gerätepixel für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Layoutansichtbreite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die gewünschte Ressourcenbreite in physikalischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen einem Server die Wahl, welche Informationen basierend auf der Wahl des Benutzers und der Bandbreite und Latenz des Netzwerks gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Client-Verbindung zum Server in Mbps. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzprofil"), das am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Die Round-Trip-Zeit (RTT) auf Anwendungsebene in Millisekunden, die die Server-Verarbeitungszeit einschließt. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der angibt, dass der User-Agent eine geringere Datennutzung bevorzugt.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Trackingpräferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten von Global Privacy Control (GPC), das den Servern mithilfe des {{HTTPHeader("Sec-GPC")}} Headers mitgeteilt wird und auf Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Trackingstatus angibt, der für die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst seine persönlichen Daten an Dritte verkauft oder weitergibt.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, der es Webanwendungen ermöglicht, ihre Ursprünge zu isolieren.

### Vom Server gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichtspolitik zu deklarieren.

### Themen-API

Die Themen-API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie Interessensbasierte Werbung (IBA) zu implementieren.
Sehen Sie die [Themen-API](/de/docs/Web/API/Topics_API) Dokumentation für mehr Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu markieren, die aus der URL einer aufrufenden Website als beobachtet in der Antwort auf eine Anfrage abgeleitet werden, die durch eine [Funktion, die die Themen-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Weitere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzuzeigen, Signaturen zu nutzen und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in frühen TLS-Daten übermittelt wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _ursprungsbezogenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte.
    Diese Isolation ermöglicht es Benutzeragenten, implementierungsspezifische Ressourcen für Agenten-Cluster, wie Prozesse oder Threads, effizienter zu allozieren.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob sich Benutzer im aktuellen Browser beim IdP angemeldet haben oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Anwortheaderfeldern, die in eine Signatur eingeschlossen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelset des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Setzt ein Navigationziel, um die Verwendung verschiedener höherer Risiko-Lademodi zu aktivieren. Zum Beispiel erfordert das Cross-Origin, dass dieselbe Site [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender` hat.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Lastausgleich mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Hostnamen, den ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastausgleich herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Lastausgleich herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, eine Funktion, bei der Browser proaktiv Domain-Namen für Links auflösen, denen der Benutzer möglicherweise folgen könnte, sowie für URLs von Elementen, auf die im Dokument verwiesen wird, einschließlich Bildern, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinenergebnisse indexiert werden soll. Der Header ist effektiv äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der überall entlang der Anfrags-Antwort-Kette verschiedene Auswirkungen haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Mitwirken

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder die bestehenden verbessern.

<!-- Prüfen Sie https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite über die Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
