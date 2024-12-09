---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort auszutauschen. Ein HTTP-Header besteht aus seinem nicht groß-/klein-schreibungssensitiven Namen, gefolgt von einem Doppelpunkt (`:`), und anschließend von seinem Wert. {{Glossary("Whitespace", "Leerzeichen")}} vor dem Wert werden ignoriert.

Benutzerdefinierte, proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde im Juni 2012 aufgrund der Unannehmlichkeiten, die entstanden, als nicht-standardisierte Felder zu Standardfeldern wurden, laut [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) eingestellt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header, inklusive [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), die "permanent" (standarddefiniert), "vorläufig" (neu), "veraltet" (Verwendung nicht empfohlen) oder "obsolet" (nicht mehr in Gebrauch) sein können.

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten mehr Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Beinhaltet zusätzliche Informationen über die Antwort, wie z.B. ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Darstellungs-Header")}}
  - : Enthält Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthält darstellungsunabhängige Informationen über Nutzlastdaten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch nach der Art gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie handhaben:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenproxies müssen diese Header unverändert übertragen und Caches sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene-Verbindung von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mithilfe des {{httpheader("Connection")}} Headers festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen zur Authentifizierung eines Benutzeragents mit einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen zur Authentifizierung eines Benutzeragents mit einem Proxy-Server.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Abgleichsverfahren beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, genutzt zum Vergleichen mehrerer Versionen derselben Ressource. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber einfacher zu berechnen in einigen Umgebungen. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette, die die Version der Ressource identifiziert. Bedingte Anfragen unter Verwendung von {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übermittelt wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übermitteln, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übermittelt wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies gewährleistet die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen, oder um ein optimistisches Nebenläufigkeitssteuerungssystem zu implementieren, wenn bestehende Dokumente geändert werden.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprung-Server anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Kontrolliert, ob die Netzwerkverbindung nach Beenden der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Kontrolliert, wie lange eine persistente Verbindung offen bleiben sollte.

## Inhaltsverhandlung

Für weitere Details, konsultieren Sie den [Inhaltsverhandlungsartikel](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Datentypen")}}, die zurückgesandt werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesandte Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht notwendigerweise vollständig unter der Kontrolle des Nutzers: der Server sollte stets darauf achten, eine explizite Nutzerwahl (wie das Auswählen einer Sprache aus einem Dropdown-Menü) nicht zu übersteuern.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhaltsverhandlung_-Antwortheader, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}} Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhaltsverhandlung_-Antwortheader, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}} Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE), gibt die maximale Anzahl von Hops an, die die Anfrage ausführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Für mehr Informationen, beziehen Sie sich auf die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Berechtigungs-Flag aktiviert ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Voranfrage")}} verwendet, um anzuzeigen, welche HTTP-Header beim Erstellen der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Spezifiziert die Methoden, die beim Zugriff auf die Ressource als Antwort auf eine Voranfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Voranfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausgabe einer Voranfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header bei Erstellung der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Voranfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei Erstellung der tatsächlichen Anfrage verwendet werden wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Spezifiziert Herkunftsorte, die die Werte von Attributen sehen dürfen, die durch Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übermittelte Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser einen "Speichern unter"-Dialog anzeigen soll.

## Integritätsprüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt eine {{Glossary("digest", "Prüfsumme")}} des Oktettstroms bereit, der in einer HTTP-Nachricht gerahmt ist (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt eine {{Glossary("digest", "Prüfsumme")}} der ausgewählten Darstellung der Zielressource vor der Übertragung bereit.
    Anders als bei {{HTTPHeader("Content-Digest")}} wird die Prüfsumme nicht unter Berücksichtigung von {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}} gebildet.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Äquivalent zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Äquivalent zu {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die für das Publikum vorgesehene menschliche Sprache(n), sodass sie es einem Benutzer ermöglicht, gemäß der eigenen bevorzugten Sprache zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Fassade von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy an dem Anforderungsweg beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxies, sowohl Vorwärts- als auch Rückwärts-Proxies, und kann in den Anfrage- und den Antwortheadern erscheinen.

## Bereichsabfragen

HTTP [Bereichsabfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsabfragen sind nützlich für Anwendungen wie Mediaplayer, die wahlfreien Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer das Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt, und falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erzeugt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen von inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachrichtenkörpernachricht eine Teilnachricht hingehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Fordert den Browser auf, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Nimmt denselben Wert an wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzer-Agenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers an (für virtuelles Hosting) sowie optional die TCP-Portnummer, auf die der Server hört.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur derzeit angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}} Header gesendet wurden, bei Anfragen einbezogen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die die Anwendung, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Benutzer-Agents identifiziert.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Reihe der von einer Ressource unterstützten HTTP-Anfragemethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert, welche Ressourcen der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, ohne sie durchzusetzen. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP `POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung falsch ausgestellter Zertifikate für diese Seite zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen innerhalb des Rahmens einer Website zu erlauben oder zu verweigern, und in {{htmlelement("iframe")}}s, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Website-Besitzern ermöglicht, einen oder mehrere Endpunkte anzugeben, die zum Empfangen von Fehlern wie CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verletzungen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort zum Ausdruck bringt und dass er den {{CSP("upgrade-insecure-requests")}} Befehl erfolgreich verwalten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den in {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine Cross-Domain-Policy-Datei (`crossdomain.xml`) erlaubt ist. Die Datei kann eine Policy definieren, um Clients wie Adobes Flash Player (mittlerweile obsolet), Adobe Acrobat, Microsoft Silverlight (mittlerweile obsolet) oder Apache Flex zu erlauben, Daten über Domains hinweg zu handhaben, die ansonsten aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Für weitere Informationen siehe die [Cross-domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es keinen Nutzen für die Anwendung oder deren Besucher bietet. Entfernen Sie diesen Header, um potenzielle Sicherheitslücken nicht offen zu legen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Filtern von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage basierend darauf, woher sie kommt und wie die Ressource verwendet wird, erlaubt sein sollte.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsort eines Anforderungsinitiators und dem Zielland an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token ist mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Zeigt den Anfragemodus gegenüber einem Server an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token ist mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde. Es handelt sich um einen strukturierten Header, dessen Wert ein Boolean ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token ist mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt`.

Die folgenden Anforderungsheader sind nicht _streng_ genommen "Fetch-Metadaten-Anforderungsheader", liefern aber ebenso Informationen über den Kontext, wie eine Ressource verwendet werden soll. Ein Server kann sie verwenden, um sein Caching-Verhalten zu ändern oder um zu definieren, welche Informationen zurückgegeben werden:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als der sofortige Gebrauch durch den Benutzeragent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der anzeigt, dass die Ressource vorzeitig für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der bei einer vorzeitigen Anfrage gesendet wird, um eine Ressource während des Bootens eines Service-Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) zu laden. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden soll als bei einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an denen der Browser bei der Nutzung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an denen der Browser bei der Nutzung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlerberichte senden soll.

## Transferkodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzeragent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende der Chunked-Nachricht zusätzliche Felder einzufügen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der angibt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client explizit die Absicht hat, eine `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die unterstützten Unterprotokolle des Clients in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Unterprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und listet die vom Server unterstützten Versionen auf.

## Sonstige

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zur Erreichung dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht originated wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit zur Serialisierung von einem oder mehreren Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service Worker Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Quellkarte")}}, damit Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code schrittweise gehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits hergestellte Client-/Serververbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung in eine WebSocket-Verbindung zu ändern.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server entscheidet, die Anforderung neu zu priorisieren.

## Experimentelle Header

### Attributionsbericht-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — beispielsweise, wenn ein Benutzer auf eine auf einer Website eingebettete Anzeige klickt und dann auf der Website des Anbieters den Artikel kauft — und dann Berichte über diese Konversionen zuzugreifen. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies, sondern indem es sich auf verschiedene Header stützt, um **Quellen** und **Auslöser** zu registrieren, die übereinstimmen, um eine Konversion anzuzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort, die der aktuellen Anfrage entspricht, zur Teilnahme an der Attributionsberichterstattung berechtigt ist, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt, verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthielt, verwendet, um einen Attribution-Auslöser zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzbedingungen bereitstellen und es Servern ermöglichen, das, was für diese Bedingungen bedient wird, zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, an denen sie interessiert sind, vom Client mit {{HTTPHeader("Accept-CH")}} an. Der Client kann dann entscheiden, ob er die angeforderten Header in nachfolgenden Anfragen einbezieht.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise über das `Accept-CH` Header-Feld oder ein entsprechendes HTML `<meta>` Element mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut bekannt geben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}} um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die unterschiedlichen Kategorien von Client-Hinweisen sind unten aufgelistet.

#### Benutzeragent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzeragent, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die im Benutzeragent oder der Plattform festgelegt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformationen des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrundeliegende Plattformarchitektur des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitanzahl der zugrundeliegenden CPU-Architektur (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragents, die beschreiben, wie der Benutzer mit dem Benutzeragent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jede Marke in der Markenliste des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt allgemein eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Das zugrundeliegende Betriebssystem/Plattform des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Versionsnummer des zugrundeliegenden Betriebssystems des Benutzeragents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzeragent im 32-Bit-Modus auf 64-Bit-Windows ausgeführt wird oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Farbthemenpräferenz des Benutzers für hell oder dunkel.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Vorliebe des Benutzers, weniger Animationen und Verschiebungen des Inhaltslayouts zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungsheader, der die Vorliebe des Benutzeragents für reduzierte Transparenz angibt.

> [!NOTE]
> Benutzeragent-Client-Hinweise sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie sich auf die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verlassen, die genutzt werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um das Bildgerät zu Pixelverhältnis (DPR) in Anfragen zu bestätigen, bei denen der Client-Hinweis {{HTTPHeader("DPR")}} verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Pixelverhältnis des Clientgeräts bereitstellt (die Anzahl physischer Gerätepixel für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} bereitstellt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die gewünschte Ressourcenbreite in physischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen einem Server, basierend auf der Benutzerwahl und der Netzwerk-Bandbreite und -Latenz zu entscheiden, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Client-Verbindung zum Server, in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsrundlaufzeit (RTT) in Millisekunden, die auch die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenfolge `on`, die die Präferenz des Benutzeragents für die Reduzierung der Datennutzung angibt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Tracking-Präferenz des Benutzers anzeigt (Do Not Track).
    Er ist zugunsten der Global Privacy Control (GPC) veraltet, die Server über den {{HTTPHeader("Sec-GPC")}} Header informiert und Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich macht.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einem Verkauf oder Teilen seiner persönlichen Informationen mit Dritten durch eine Website oder Dienst zustimmt.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, um Webanwendungen zu ermöglichen, ihre Ursprünge zu isolieren.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der Entwicklern ermöglicht, eine Netzwerkfehlerbericht-Richtlinie zu deklarieren.

### Themen-API

Die Themen-API bietet einen Mechanismus, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) umsetzen können.
Siehe die [Themen-API-Dokumentation](/de/docs/Web/API/Topics_API) für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um vom antwortenden Standort abgeleitete Themen von Interesse als beobachtet im Antwort auf eine von einer [Funktion, die die Themen-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage zu markieren.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen.

### Sonstige

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header senden, um die Absicht zu signalisieren, verfügbare Signaturen zu nutzen und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Frühdaten übertragen wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in ein _ursprungsbasiertes [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es Benutzer-Agents, für Agent-Cluster implementationsspezifische Ressourcen, wie Prozesse oder Threads, effizienter zuzuweisen.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob irgendwelche Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
    Diese Information wird vom Browser gespeichert und vom [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header gibt eine Liste von Signaturen für einen Austausch zusammen mit Informationen darüber an, wie die Autorität dieser Signatur bestimmt und aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Der [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header identifiziert eine geordnete Liste von Antwortheader-Feldern, die in eine Signatur aufgenommen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen mit [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Verwendung von verschiedenen risikoreicheren Lademodi zu ermöglichen. Zum Beispiel, das Cross-Origin, gleiche Standort [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) erfordert einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Kunden, der sich über einen HTTP-Proxy oder einen Lastverteiler mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der von einem Client verwendet wurde, um eine Verbindung zu Ihrem Proxy oder Lastverteiler herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das von einem Client verwendet wurde, um eine Verbindung zu Ihrem Proxy oder Lastverteiler herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert DNS Prefetching, eine Funktion, bei der Browser proaktiv die Domain-Namenauflösung sowohl für Links, die der Benutzer möglicherweise folgt, als auch für URLs durchführen, die durch das Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der `X-Robots-Tag` HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb von öffentlichen Suchmaschinenergebnissen indexiert werden soll. Der Header ist im Wesentlichen äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an verschiedenen Stellen entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0 Caches verwendet, bei denen der `Cache-Control` Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Mitwirkung

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Überprüfen Sie https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
