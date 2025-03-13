---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu senden.
In HTTP/1.X besteht ein Header aus einem nicht case-sensitiven Namen, gefolgt von einem Doppelpunkt, optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header kleingeschrieben angezeigt, wenn sie in Entwicklertools betrachtet werden (`accept: */*`) und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) versehen (`:status: 200`).
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 wegen der Unannehmlichkeiten, die auftraten, wenn nicht standardmäßige Felder standardisiert wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgeschafft; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert war.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können je nach ihrem Kontext gruppiert werden:

- {{Glossary("Request_header", "Anfrage-Header")}}
  - : Enthalten weitere Informationen über die anzufordernde Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwort-Header")}}
  - : Halten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Darstellungs-Header")}}
  - : Enthalten Informationen über den Hauptteil der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich Inhaltlänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung sinnvoll und _dürfen nicht_ von Proxies weiterübertragen oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mithilfe des {{httpheader("Connection")}}-Headers eingestellt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zur Zugriffsberechtigung auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen User-Agent bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxy-Server verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen User-Agent bei einem Proxy-Server zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache gewesen ist.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z.B. Cookies, Speicher, Cache), die der anfordernden Website zugeordnet sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber einfacher in manchen Umgebungen zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur dann übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies gewährleistet die Kohärenz eines neuen Abschnitts eines spezifischen Bereichs mit vorherigen oder um ein optimistisches Parallelitätskontrollsystem bei der Änderung bestehender Dokumente umzusetzen.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header übereinstimmen sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Kontrolliert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Kontrolliert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Für weitere Informationen siehe den [Artikel zur Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die vom Server zurückgesendet werden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl nicht zu überschreiben (wie die Auswahl einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrage-Inhaltsaushandlung_-Antwortheader, der anzeigt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrage-Inhaltsaushandlung_-Antwortheader, der anzeigt, welche [Medientypen](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Zeigt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage machen kann, bevor sie zum Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn die Anmeldeflagge wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache gespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage erstellt wird, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, von wo eine Übertragung ausgeht.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die andernfalls aufgrund von Beschränkungen bei der Ursprungsübergreifung als null gemeldet werden würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialog anzeigen soll.

## Integritäts-Hashes

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("digest", "Hash")}} des im Http-Nachrichtenrumpf umrahmten Oktettstroms (dem Nachrichteninhalt) abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} bereit.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Stellt einen {{Glossary("digest", "Hash")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung bereit.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Hash ikke {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Analoge zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Analoge zu {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenteilkörper-Informationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl der Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n), die für das Publikum bestimmt sind, so dass es einem Benutzer ermöglicht, je nach der bevorzugten Sprache zu unterscheiden.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite der Proxy-Server, die verändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxies, sowohl Vorwärts- als auch Rückwärts-Proxies, und kann in Anfrage-Headern und Antwort-Headern auftreten.

## Bereichsanfragen

HTTP [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Media Player, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer das Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das gegebene Etag oder Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus einer inkompatiblen Version der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil einer Nachricht gehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder an eine andere weiterzuleiten. Nimmt denselben Wert an wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server hört.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die vom Ursprungsserver verwendete Software, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungspolitik für ein gegebenes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern können.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärerartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Steuert, welche Ressourcen der User-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem die Auswirkungen überwacht, aber nicht erzwungen werden. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Seiten, sich für die Berichterstattung und Durchsetzung von [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von falsch ausgestellten Zertifikaten für diese Seite zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem eigenen Rahmen der Website zuzulassen und zu verweigern, sowie in {{htmlelement("iframe")}}s, die eingebettet sind.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Websitebesitzern erlaubt, einen oder mehrere Endpunkte anzugeben, die verwendet werden sollen, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingen der Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er erfolgreich die {{CSP("upgrade-insecure-requests")}}-Direktive behandeln kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}}-Header angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderem) die Berechtigung erteilen, Daten über Domains hinweg zu verarbeiten, die sonst aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während sie jedoch keinen Nutzen für die Anwendung oder deren Besucher bietet. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Cross-Site-Scripting-Filtering.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden soll, basierend darauf, woher die Anfrage kommt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsort eines Anforderungsinitiators und dem Ursprungsort seines Ziels an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein strukturierter Header, dessen Wert ein boolescher Wert ist, daher sind die möglichen Werte `?0` für falsch und `?1` für wahr.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _strikt_ "Fetch-Metadaten-Anforderungsheader", liefern jedoch ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die unmittelbare Nutzung durch den User-Agent ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der anzeigt, dass die Ressource zur Vorbereitung einer möglichen zukünftigen Navigation vorab abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorzeitigen Anfrage gesendet wird, um [fetch()](/de/docs/Web/API/Window/fetch) eine Ressource während des Dienst-Worker-Boots abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) festgelegt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource zurückgegeben werden soll als in einem normalen `fetch()`-Vorgang.

## Server-sent events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an denen der Browser Warn- und Fehlermeldungen beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an denen der Browser Warn- und Fehlermeldungen beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.

## Übertragungscodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der User-Agent bereit ist anzunehmen.
- {{HTTPHeader("Trailer")}}
  - : Erlaubt es dem Absender, zusätzliche Felder am Ende einer gestückelten Nachricht einzuschließen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client ausdrücklich beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und listet die vom Server unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zur Erreichung dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entität-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten soll, bevor eine Folgeanfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den angegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird bei Abrufen für die Ressource eines Service Workers eingeschlossen.
    Diese Header hilft Administratoren, Anfragen für das Service-Worker-Skript zu protokollieren, um Überwachungszwecke zu erfüllen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) durch das Einschließen dieses Headers [in der Antwort des Service Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) zu entfernen.
- {{HTTPHeader("SourceMap")}}
  - : Verknüpft mit einer {{Glossary("source_map", "Source Map")}}, damit Debugger durch ursprünglich geschriebenen Quellcode anstelle von generiertem oder transformiertem Code gehen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur)-Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über das gleiche Transportprotokoll) zu aktualisieren. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 zu HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung in ein WebSocket.
- {{HTTPHeader("Priority")}}
  - : Liefert einen Hinweis auf die Priorität einer bestimmten Ressourcenanfrage auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen oder in einer Antwort, wenn der Server entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Attributbericht-Header

Die [Attributberichts-API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen — zum Beispiel, wenn ein Benutzer auf eine auf einer Seite eingebettete Anzeige klickt und dann auf der Seite des Anbieters den Artikel kauft — und dann Berichte über diese Konversionen zu erhalten. Dies geschieht ohne den Rückgriff auf Drittanbieter-Tracking-Cookies, sondern indem auf verschiedene Header zurückgegriffen wird, um die **Quellen** und **Auslöser** zu registrieren, die zusammen eine Konvertierung angeben.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an der Attributberichterstattung teilzunehmen, indem entweder eine Attributquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um eine Attributquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um einen Attributauslöser zu registrieren.

### Client-Hints

HTTP [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungs-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das, was für diese Bedingungen serviert wird, zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, die sie vom Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann sich dann entscheiden, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client Hints mithilfe des `Accept-CH`-Headers oder eines äquivalenten HTML-`<meta>`-Elements mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### Benutzeragentur-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) sind Anforderungs-Header, die Informationen über die Benutzeragentur, die Plattform/Architektur, auf der sie läuft, und Benutzereinstellungen, die in der Benutzeragentur oder Plattform gesetzt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsinformationen der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der zugrunde liegenden CPU-Architektur der Benutzeragentur (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren der Benutzeragentur, die beschreiben, wie der Benutzer mit der Benutzeragentur interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenkette der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzeragentur läuft auf einem mobilen Gerät oder bevorzugt allgemein eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/-plattform der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystem-Version der Benutzeragentur.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob die Binärdatei der Benutzeragentur im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers, weniger Animationen und Inhaltslayoutverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungs-Header gibt die Präferenz der Benutzeragentur für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hints stehen in [verschachtelten Rahmen](/de/docs/Web/API/Fenced_frame_API) nicht zur Verfügung, da sie auf [Berechtigungsrichtliniendelegation](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader zur Bestätigung des Bildgeräte-zu-Pixel-Verhältnisses (DPR) in Anfragen, bei denen der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Gerät-Pixel-Verhältnis des Clients angibt (die Anzahl der physischen {{Glossary("device_pixel", "Gerätepixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header bietet die Layout-Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}}.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header gibt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, auszuwählen, welche Informationen basierend auf der Auswahl des Benutzers und der Netzwerk-Bandbreite und Latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), das Latenz und Bandbreite der Verbindung am besten entspricht. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungs-Ebene Round Trip Time (RTT) in Millisekunden, welches auch die Serververarbeitungszeit umfasst. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenfolge `on`, die die Datenverbrauchspräferenz der Benutzeragentur anzeigt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Abgelöst durch Global Privacy Control (GPC), das den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Trackingstatus angibt, der auf die entsprechende Anfrage angewendet wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienst ihre persönlichen Informationen an Dritte verkauft oder teilt.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem ursprungsbezogenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters) platziert werden sollte.
    Diese Isolation ermöglicht es Benutzeragenten, Implementierungsspezifische Ressourcen für Agent-Cluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Server-sent events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der Entwicklern ermöglicht, eine Netzwerk-Fehlerbericht-Richtlinie zu deklarieren.

### Topics API

Die Topics-API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Weitere Informationen finden Sie in der [Topics-API-Dokumentation](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL einer aufrufenden Site abgeleitet werden und als in der Antwort auf eine Anfrage im Rahmen eines [Features, das die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), beobachtet werden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die für den aktuellen Benutzer ausgewählten Themen zusammen mit der zugehörigen Anfrage sendet, die von einer Adtech-Plattform verwendet werden, um eine personalisierte Werbung auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header senden, um die Absicht anzuzeigen, von verfügbaren Signaturen zu profitieren, und um anzugeben, welche Art von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Frühdaten übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus einzurichten, was bedeutet, ob Benutzer im aktuellen Browser beim IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld überträgt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und erneuert wird.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Der [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen mit [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen zeigen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelset des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Vom Navigationstarget gesetzt, um die Verwendung verschiedener riskanterer Lademodi zu bestätigen. Zum Beispiel erfordert co-origins, gleich-Site [prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder Lastenausgleicher mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der von einem Client verwendet wurde, um sich mit Ihrem Proxy oder Lastenausgleicher zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleicher zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching, eine Funktion, durch die Browser proaktiv die Namensauflösung für sowohl Links, die der Benutzer möglicherweise auswählt, als auch URLs für Elemente, die vom Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw., durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinenergebnisse indexiert werden soll. Der Header ist effektiv äquivalent zu `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der überall entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Wird zur Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, wo der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Mitwirken

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Überprüfen Sie https://github.com/mdn/content/issues/1458 auf bekannte fehlende Seiten -->

## Siehe auch

- [Wikipedia-Seite zur Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
