---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: f35733893f8c17dcbf8e9d5cf2551f6fb1cbecd5
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht auf Groß- und Kleinschreibung reagierender Name, gefolgt von einem Doppelpunkt, dann optionalen Leerzeichen, die ignoriert werden, und schließlich seinem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und darüber hinaus werden die Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklertools betrachtet werden (`accept: */*`), und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die sie verursachte, als nicht standardgemäße Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgelöst; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgelistet, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header auf, einschließlich [Informationen über deren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Anforderungs-Header")}}
  - : Enthalten weitere Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Halten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentations-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/MIME_types) oder angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzlast-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzlastdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch nach der Art und Weise gruppiert werden, wie {{Glossary("Proxy_server", "Proxy-Server")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenliegende Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung sinnvoll und _dürfen nicht_ von Proxys weitergeleitet oder im Cache gespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{httpheader("Connection")}}-Header eingestellt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents bei einem Server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten zur Authentifizierung eines Benutzer-Agents bei einem Proxy-Server.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Zwischenspeichermechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach dem die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln diktieren, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Cache-Einträge des Browsers gespeichert werden sollte.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber leichter zu berechnen in manchen Umgebungen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette zur Identifizierung der Version der Ressource. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource einem der angegebenen ETags entspricht.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource keinem der angegebenen ETags entspricht. Dies wird verwendet, um Caches (für sichere Anfragen) zu aktualisieren oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht verändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorangegangenen sicher oder ermöglicht ein optimistisches Sperrsteuerungssystem bei der Änderung bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header aufeinander abgestimmt werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver zu verlangen.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion beendet ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsverhandlung

Weitere Details finden Sie im [Artikel zur Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht notwendigerweise vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, keine explizite Benutzerwahl zu überschreiben (wie durch das Auswählen einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrage-Inhaltsverhandlungs_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrage-Inhaltsverhandlungs_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerelemente

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei der Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage machen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server zum Benutzer-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort zur Anfrage offengelegt werden kann, wenn das Anmeldekennzeichen wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt an, welche Methoden beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache bleiben können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von wo ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die ansonsten aufgrund von Cross-Origin-Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden sollte (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser das Dialogfeld "Speichern unter" präsentieren soll.

## Integritätsprüfungen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("digest", "Digest")}} des im HTTP-Nachricht gerahmten Oktettstroms (des Nachrichteninhalts), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("digest", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} betrachtet der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Gegenstück zum {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Gegenstück zum {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörper-Informationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum vorgesehen sind, damit ein Benutzer entsprechend der eigenen bevorzugten Sprache differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy im Anforderungspfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxys, sowohl vorwärts als auch rückwärts, hinzugefügt und kann in den Anforderungs- und den Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Media-Player, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass nur ein Teil einer großen Datei benötigt wird, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu unterbrechen und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der Remote-Ressource übereinstimmt. Verhindert das Herunterladen von zwei Bereichen von inkompatiblen Versionen der Ressource.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachrichten eine partielle Nachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder an eine andere weiterzuleiten. Nimmt denselben Wert an wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfragenden Benutzer-Agenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers (für virtuelles Hosting) an und (optional) die TCP-Portnummer, auf der der Server horcht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link auf die derzeit angeforderte Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen in dem {{HTTPHeader("Referer")}} Header mit Anfragen einbezogen werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfragenden Software-Benutzer-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anfrage-Methoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Embedder-Richtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem sie die Auswirkungen ihrer Anwendungsfälle überwachen, aber nicht erzwingen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Erlaubt es Websites, sich für die Berichterstattung und Durchsetzung der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von falsch ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der den Website-Eigentümern ermöglicht, ein oder mehrere Endpunkte anzugeben, die zum Empfangen von Fehlern wie CSP-Verstoßberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen allgemeinen Verstößen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Bevorzugung eines verschlüsselten und authentifizierten Antworts angibt und dass es erfolgreich die {{CSP("upgrade-insecure-requests")}}-Richtlinie handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlaubt ist, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients, wie Adobe Acrobat oder Apache Flex (unter anderem), die Berechtigung erteilen, Daten über Domains hinweg zu behandeln, die sonst aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) gesperrt würden.
    Das `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Policy-Dateien, damit Clients unerwünschte Anfragen weiterhin blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Host-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es keinen Nutzen für die Anwendung oder ihre Besucher bietet. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht preiszugeben.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungs-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungs-Header")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden sollte, basierend darauf, woher die Anfrage stammt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Ziel-Ursprung an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anforderung an einen Server an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein Strukturierter Header, dessen Wert ein boolescher Wert ist, deshalb sind mögliche Werte `?0` für false und `?1` für true.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anforderung an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungs-Header sind nicht _streng gesehen_ "Fetch-Metadaten-Anforderungs-Header", liefern aber ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie für die Änderung seines Cache-Verhaltens oder der zurückgegebenen Information verwenden:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anforderung an, wenn der Zweck etwas anderes als die sofortige Verwendung durch den Benutzer-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungs-Header, der in einer präventiven Anfrage gesendet wird, um eine Ressource während des Starts des Service Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource als bei einer normalen `fetch()`-Operation zurückgegeben werden sollte.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Server-Endpunkte anzugeben, an die der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transfer Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungskodierungen an, die der Benutzer-Agent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, zusätzliche Felder am Ende einer segmentierten Nachricht einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der angibt, dass der Server bereit ist, auf eine WebSocket-Verbindung zu aktualisieren.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungs-Header, der einen Schlüssel enthält, der bestätigt, dass der Client explizit die Absicht hat, ein `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Sub-Protokolle in bevorzugter Reihenfolge an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete WebSocket-Protokollversion an.
    In Antworten wird es nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten anzugeben, diesen Service zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Service zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten soll, bevor eine Folgebitte erstellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufen für die Skriptressource eines Service Workers einbezogen. Dieser Header hilft Administratoren beim Protokollieren von Service Worker-Skriptanforderungen zu Überwachungszwecken.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in der Antwort des Service Worker's Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten wird.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Quellkarte")}}, sodass Debugger durch Originalquellcode anstelle von generiertem oder transformiertem Code schrittweise vorgehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1- (nur) Header kann verwendet werden, um eine bereits bestehende Client/Server-Verbindung auf ein anderes Protokoll zu aktualisieren (über dasselbe Transportprotokoll). Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanfrage über eine bestimmte Verbindung. Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Zuordnungsbericht-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen – zum Beispiel, wenn ein Benutzer auf eine in einer Website eingebettete Werbung klickt und dann den Artikel auf der Website des Anbieters kauft – und dann Berichte über diese Konversionen zu erhalten. Dies geschieht ohne die Verwendung von Drittanbieter-Tracking-Cookies, indem verschiedene Header verwendet werden, um **Quellen** und **Trigger** zu registrieren, die auf eine Konversion hinweisen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort zur aktuellen Anfrage berechtigt ist, an der Zuordnungsberichterstattung teilzunehmen, indem entweder eine Zuordnungsquelle oder ein Trigger registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt, und wird verwendet, um eine Zuordnungsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage verwendet, die einen `Attribution-Reporting-Eligible` Header enthielt, und wird verwendet, um einen Zuordnungstrigger zu registrieren.

### Client-Hints

HTTP [Client-Hints](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungs-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen liefern und Servern ermöglichen, das, was unter diesen Bedingungen bereitgestellt wird, zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, an denen sie interessiert sind, vom Client mit {{HTTPHeader("Accept-CH")}} an. Der Client kann dann entscheiden, ob er die angeforderten Header in nachfolgenden Anfragen einschließen möchte.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hints mit dem `Accept-CH` Header-Feld oder einem äquivalenten HTML-`<meta>`-Element mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzuzeigen, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### Benutzer-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungs-Header, die Informationen über den Benutzer-Agenten, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen auf dem Benutzer-Agenten oder der Plattform bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformationen des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitness der zugrunde liegenden CPU-Architektur des Benutzer-Agenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des Benutzer-Agenten, die beschreiben, wie der Benutzer mit dem Benutzer-Agenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenkette des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzer-Agent läuft auf einem mobilen Gerät oder bevorzugt eher allgemein eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzer-Agenten-Binary im 32-Bit-Modus unter 64-Bit Windows ausgeführt wird oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers, weniger Animationen und Inhaltslayout-Änderungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungs-Header gibt die Präferenz des Benutzer-Agenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hints sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie von der Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) abhängen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Geräte-zu-Pixel-Verhältnis (DPR) für Bilder in Anfragen, bei denen der Bildschirm{{HTTPHeader("DPR")}}-Client-Hint verwendet wurde, zu wählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefährer Betrag des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Gerätespeicher API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der das Geräte-Pixel-Verhältnis des Clients angibt (die Anzahl der physischen {{Glossary("device_pixel", "Geräte-Pixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} angibt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die gewünschte Ressourcenbreite in physischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, basierend auf der Benutzerwahl und der Netzwerkbandbreite und Latenz zu entscheiden, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbit/s. Dies ist Teil der [Netzwerkinformationen API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten die Latenz und Bandbreite der Verbindung beschreibt. Dies ist Teil der [Netzwerkinformationen API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungsschicht-Round Trip Time (RTT) in Millisekunden, die auch die Server-Verarbeitungszeit umfasst. Dies ist Teil der [Netzwerkinformationen API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzer-Agenten für eine reduzierte Datennutzung angibt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Benutzerspräferenz beim Tracking (Do Not Track) angibt. Veraltet zugunsten der Global Privacy Control (GPC), die an Server mit dem {{HTTPHeader("Sec-GPC")}}-Header kommuniziert wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugängig ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der auf die entsprechende Anfrage angewendet wurde. Wird zusammen mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einem Verkauf oder einer Weitergabe seiner persönlichen Informationen an Dritte zustimmt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-keyed [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte. Diese Isolation ermöglicht es Benutzer-Agenten, implementierungs-spezifische Ressourcen für Agent-Cluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der Entwicklern ermöglicht, eine Richtlinie für die Berichterstattung über Netzwerke zu deklarieren.

### Themen-API

Die Themen-API bietet einen Mechanismus für Entwickler, Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren. Weitere Informationen finden Sie in der [Themen-API-Dokumentation](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse zu markieren, die aus der URL der aufrufenden Website in der Antwort auf eine Anfrage erkannt werden, die durch ein [Feature, das die Themen-API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Werbetechnologieplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header senden, um die Absicht anzuzeigen, vorhandene Signaturen nutzen zu wollen und die Arten von Signaturen anzugeben, die er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-vorläUFgingen Daten übertragen wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um dessen Anmeldestatus festzulegen, was bedeutet, ob Benutzer auf dem aktuellen Browser in den IdP eingeloggt sind oder nicht. Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header gibt eine Liste von Signaturen für einen Austausch an, von denen jede von Informationen begleitet wird, wie die Autorität bestimmt und die Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Der [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header identifiziert eine geordnete Liste von Antwort-Headerfeldern, die in eine Signatur aufgenommen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel-API](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Von einem Navigationsziel festgelegt, um die Verwendung verschiedener riskanterer Lademodi zu ermöglichen. Beispielsweise erfordert das Cross-Origin, gleichstellen [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering), dass ein `Supports-Loading-Mode`-Wert von `credentialed-prerender` festgelegt wird.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Lastenausgleich mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host-Anfrage, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleich zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleich zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv die Domänennamensauflösung sowohl für Links durchführen, die der Benutzer möglicherweise folgen wird, als auch für URLs für Elemente, die vom Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript und so weiter.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinenergebnisse indexiert werden soll. Der Header ist effektiv gleichbedeutend mit `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der an verschiedenen Stellen entlang der Anforderungs-Antwort-Kette unterschiedliche Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Mitwirken

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder die vorhandenen verbessern.

<!-- Prüfen Sie https://github.com/mdn/content/issues/1458 für bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite über Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
