---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht fallunterscheidender Name, gefolgt von einem Doppelpunkt, optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklerwerkzeugen betrachtet werden (`accept: */*`), und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) mit einem Doppelpunkt vorangestellt (`:status: 200`). Sie finden weitere Informationen zur Syntax in jeder Protokollversion auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-`-Präfix verwendet, aber diese Konvention wurde 2012 wegen der Unannehmlichkeiten, die sie verursachte, wenn nicht standardisierte Felder standardisiert wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgeschafft; andere sind im [IANA HTTP Feldnamenregister](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können entsprechend ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten zusätzliche Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder Informationen über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Darstellungs-Header")}}
  - : Enthalten Informationen über den Hauptteil der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder die angewandte Kodierung/Komprimierung.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch entsprechend ihrer Behandlung durch {{Glossary("Proxy_server", "Proxies")}} gruppiert werden:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server bei einer Anfrage oder den Client bei einer Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und in Caches speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung von Bedeutung und dürfen _nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mithilfe des {{httpheader("Connection")}}-Headers gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen zur Authentifizierung eines User-Agent bei einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die für den Zugriff auf eine Ressource hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen zur Authentifizierung eines User-Agent bei einem Proxy-Server.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache gespeichert ist.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Cache-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit nach dem die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt einen Satz von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit keinem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen sicher oder dient dazu, ein optimistisches Nebenläufigkeitssteuerungssystem bei der Änderung bestehender Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom ursprünglichen Server anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung geöffnet bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsaushandlung

Weitere Details finden Sie im Artikel [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein Antwort-Header zur _Inhaltsaushandlung_ einer Anfrage, der angibt, welche [Medientype](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein Antwort-Header zur _Inhaltsaushandlung_ einer Anfrage, der angibt, welche [Medientype](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Kontrollen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Wenn [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) verwendet wird, gibt an, wie viele Übergabe die Anfrage durchführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage angezeigt werden kann, wenn das Anmeldeinformationsflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der Erstellung der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort gemeinsam genutzt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort angezeigt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der Erstellung der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Senden einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der Erstellung der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die Berechtigung haben, Werte von Attributen einzusehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, welche aufgrund von Cross-Origin-Beschränkungen sonst als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder wie ein Download behandelt werden soll, und ob der Browser einen "Speichern unter"-Dialog anzeigen soll.

## Integritätsprüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt eine {{Glossary("digest", "Prüfsumme")}} des Streams von Oktett-Rahmen in einer HTTP-Nachricht (des Nachrichteninhalts) abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} bereit.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("digest", "Prüfsumme")}} der ausgewählten Darstellung der Zielressource vor der Übertragung. Im Gegensatz zur {{HTTPHeader("Content-Digest")}} berücksichtigt die Prüfsumme nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an. Es ist das `Content-`-Äquivalent von {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an. Es ist das `Repr-`-Äquivalent von {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichtenkörper

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in Dezimalzahl der Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die zur Zielgruppe passenden menschlichen Sprache(n), sodass es einem Benutzer ermöglicht wird, nach seinen eigenen bevorzugten Spracheinstellungen zu unterscheiden.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy am Anforderungspfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies, sowohl Vor- als auch Rückwärtsproxies, hinzugefügt und kann in den Anforderungs- und Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Medienplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Verhindert das Herunterladen von zwei Bereichen einer inkompatiblen Version der Ressource.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, zu welcher Position in einer vollständigen Nachricht eine Teilnachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Veranlasst den Browser, die Seite neu zu laden oder zu einer anderen Seite weiterzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der die anfragende User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers (für das virtuelle Hosting) und optional die TCP-Portnummer an, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokollpartnern ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwarehersteller oder die Softwareversion der anfragenden Software zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument festzulegen.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Artikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert, welche Ressourcen der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, aber nicht durchsetzen lassen. Diese Verstöße bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich in die Berichterstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) einzuklinken, um den Einsatz von falsch ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem eigenen Frame einer Website sowie in darin eingebetteten {{htmlelement("iframe")}}s zu erlauben und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der Website-Besitzern erlaubt, ein oder mehrere Endpunkte festzulegen, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Vorliebe des Clients für eine verschlüsselte und authentifizierte Antwort und seine Fähigkeit zur erfolgreichen Handhabung der {{CSP("upgrade-insecure-requests")}}-Direktive ausdrückt.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}}-Header angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderen), die Erlaubnis geben, Daten über Domains hinweg zu verarbeiten, die sonst aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients trotzdem unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es für die Anwendung oder deren Besucher keinen Nutzen bietet. Deaktivieren Sie diesen Header, um potenzielle Sicherheitslücken nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting-Angriffen.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt sein sollte, basierend darauf, woher sie kam und wie die Ressource verwendet werden wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein boolescher Wert ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadaten-Anforderungsheader", liefern jedoch ähnliche Informationen über den Kontext der Verwendung einer Ressource. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die bereitgestellten Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die sofortige Verwendung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorausgreifenden Anfrage gesendet wird, um mit [`fetch()`](/de/docs/Web/API/Window/fetch) eine Ressource während des Service-Worker-Boots abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource als in einer normalen `fetch()`-Operation zurückgegeben werden soll.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser Warn- und Fehlermeldungen senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser Warn- und Fehlermeldungen senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der User-Agent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, zusätzliche Felder am Ende einer chunked-Nachricht einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, eine WebSocket-Verbindung herzustellen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header an, welche WebSocket-Erweiterungen vom Client in bevorzugter Reihenfolge unterstützt werden. In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungs-Header, der einen Schlüssel enthält, der überprüft, dass der Client explizit beabsichtigt, eine `WebSocket` zu eröffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die in bevorzugter Reihenfolge unterstützten Sub-Protokolle des Clients an. In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client genutzte WebSocket-Protokollversion an. In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege aufzulisten, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Diese Entität-Header-Feld bietet eine Möglichkeit zum Serialisieren von einem oder mehreren Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abfragen für den Skript-Ressource eines Service-Workers aufgenommen. Dieser Header hilft Administratoren dabei, Anfragen von Service-Worker-Skripten zu protokollieren.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Quellenkarte")}}, damit Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code gehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Zum Beispiel kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in eine WebSocket-Verbindung aufzurüsten.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung bei einer bestimmten Verbindung. Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage zu repriorisieren.

## Experimentelle Header

### Kopfzeilen zur Attributionsberichterstattung

Die [Attributionsberichterstattungs-API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen - zum Beispiel, wenn ein Nutzer auf eine Anzeige klickt, die auf einer Seite eingebettet ist, und dann auf der Seite des Anbieters das Produkt kauft - und Berichte über diese Konversionen abzurufen. Dies geschieht ohne Verwendung von Drittanbieter-Tracking-Cookies, sondern durch die Verwendung verschiedener Header, um **Quellen** und **Trigger** zu registrieren, die zur Angabe einer Konversion zugeordnet sind.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an der Attributionsberichterstattung teilzunehmen, indem entweder eine Attributionsquelle oder ein Trigger registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um einen Attributionstrigger zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzbedingungen bereitstellen und es den Servern ermöglichen, das, was unter diesen Bedingungen serviert wird, zu optimieren.

Server fordern die Client-Hinweise, an denen sie interessiert sind, proaktiv vom Client an, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hinweise über das Feld `Accept-CH` im Header oder ein entsprechendes HTML-`<meta>`-Element mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgelistet.

#### User-Agent-Client-Hinweise

Die [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungsheader, die Informationen über den User-Agent, die Plattform/Architektur, auf der er läuft, und die vom User-Agent oder der Plattform festgelegten Benutzereinstellungen bieten:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsangaben des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : CPU-Architekturbissigkeit des User-Agent (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des User-Agent, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenkette des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollversion für jede Marke in der Markenliste des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der User-Agent läuft auf einem Mobilgerät oder bevorzugt generell ein "mobiles" Nutzererlebnis.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des User-Agent.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des User-Agent.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das User-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Nutzerpräferenz für dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Nutzerpräferenz, weniger Animationen und Inhaltebewegungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungsheader, der die Präferenz des User-Agent für reduzierte Transparenz angibt.

> [!NOTE]
> User-Agent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy)-Delegation beruhen, die verwendet werden könnten, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, mit dem das Bildgerät-zu-Pixel-Verhältnis (DPR) in Anfragen bestätigt wird, bei denen der Bildschirm {{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Gerätespeicher-API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Pixelverhältnis des Client-Geräts (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}) bereitstellt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader bietet die Breite des Layout-Viewports des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}}.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, auszuwählen, welche Informationen gesendet werden, basierend auf der Benutzerwahl und der Bandbreite und Latenz des Netzwerks.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbps. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsschicht-Round-Trip-Zeit (RTT) in Millisekunden, einschließlich der Serververarbeitungszeit. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des User-Agent für eine reduzierte Datennutzung angibt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Nachverfolgungspräferenz des Nutzers (Do Not Track) angibt. Veraltet zugunsten der Global Privacy Control (GPC), die als {{HTTPHeader("Sec-GPC")}}-Header an Server übermittelt wird und auf die über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) von Clients zugegriffen werden kann.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewandt wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Nutzer damit einverstanden ist, dass eine Website oder ein Dienst seine persönlichen Informationen mit Dritten verkauft oder teilt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der angibt, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in ein _Ursprung-zugeordnetes [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte. Diese Isolation ermöglicht es Benutzeragenten, agentenspezifische Ressourcen, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichtungsrichtlinie zu deklarieren.

### Themen-API

Die Themen-API bietet Entwicklern einen Mechanismus, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren. Siehe die [Themen-API](/de/docs/Web/API/Topics_API)-Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu markieren, die aus der URL der anrufenden Seite abgeleitet werden, wie sie in der Antwort auf eine Anfrage eines [Features, das die Themen-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) beobachtet wurden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Nutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige zu wählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header-Feld senden, um die Absicht anzuzeigen, verfügbare Signaturen zu nutzen und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early-Data übertragen wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, was bedeutet, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht. Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld enthält eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und diese erfrischt werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwortheaderfeldern zur Aufnahme in eine Signatur.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs zu Textressourcen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um eine Opt-in-Erlaubnis für die Verwendung verschiedener höher-riskanter Lade-Modi zu geben. Zum Beispiel erfordert grenzübergreifendes, ähnliches [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprungstechnischen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Load-Balancer mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglich angeforderten Host, den ein Client zum Verbinden mit Ihrem Proxy oder Load-Balancer verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Vorabrufen, eine Funktion, durch die Browser proaktiv die Domänennamenauflösung für beide Links durchführen, die der Benutzer möglicherweise verfolgt, sowie für URLs von Elementen, die im Dokument referenziert sind, einschließlich Bildern, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in den Ergebnissen öffentlicher Suchmaschinen indiziert werden soll. Der Header ist im Wesentlichen äquivalent zum `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der überall entlang der Anfrage-Antwort-Kette verschiedene Effekte haben kann. Wird für die Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Beteiligung

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder die bestehenden verbessern.

<!-- Prüfen Sie https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Arbeitsgruppe](https://httpwg.org/specs/)
