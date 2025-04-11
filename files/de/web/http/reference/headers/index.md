---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln.
In HTTP/1.X ist ein Header ein nicht fallunterscheidender Name, gefolgt von einem Doppelpunkt, dann optionaler Leerraum, der ignoriert wird, und schließlich sein Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und höher werden Header in Kleinbuchstaben dargestellt, wenn sie in Entwicklertools angezeigt werden (`accept: */*`), und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt versehen (`:status: 200`).
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die entstanden, als nicht standardmäßige Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, abgeschafft; andere sind im [IANA HTTP Feldnamen-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Der IANA-Registry listet Header, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können je nach Kontext gruppiert werden:

- {{Glossary("Request_header", "Anforderungsheader")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Antwortheader")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie z. B. ihren Standort oder den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Repräsentationsheader")}}
  - : Enthalten Informationen über den Inhalt der Ressource, wie z. B. ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewandte Kodierung/Kompression.
- {{Glossary("Payload_header", "Nutzdaten-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie behandeln:

- End-to-End-Header
  - : Diese Header _müssen_ an den Endempfänger der Nachricht übermittelt werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene-Verbindung von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{HTTPHeader("Connection")}}-Header gesetzt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten beim Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten bei einem Proxy-Server zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Zwischenspeichermechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach dem/dem die Antwort als veraltet gilt.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL die Cache-Zuordnung beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet zum Vergleich mehrerer Versionen derselben Ressource. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen leichter zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette zur Identifizierung der Version der Ressource. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit vorherigen sicher oder um ein optimistisches Konkurrenzkontrollsystem beim Ändern vorhandener Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine dauerhafte Verbindung offen bleiben soll.

## Inhaltsverhandlung

Weitere Informationen finden Sie im Artikel zur [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Das Kodierungsverfahren, in der Regel ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), das auf der zurückgesendeten Ressource verwendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die Menschensprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt unter der vollständigen Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anforderungs-Inhaltsverhandlungs_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anforderungs-Inhaltsverhandlungs_-Antwort-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) wird angegeben, wie viele Hops die Anfrage durchführen kann, bevor sie an den Absender reflektiert wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeinformationen-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die bei Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage zulässig sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offen gelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Ausführen einer Preflight-Anfrage verwendet, um den Server wissen zu lassen, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Ausführen einer Preflight-Anfrage verwendet, um den Server wissen zu lassen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher eine Abrufanforderung stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die sonst aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser einen "Speichern unter"-Dialog präsentieren soll.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("hash_function", "Digest")}} des Oktettstroms, der in einer HTTP-Nachricht gerahmt ist (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Liefert einen {{Glossary("hash_function", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an.
    Es ist das `Content-` Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.
    Es ist das `Repr-` Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, als Dezimalanzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die Menschensprache(n), die für das Publikum bestimmt sind, sodass ein Benutzer unterscheiden kann, je nach den eigenen bevorzugten Sprachen der Benutzer.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Ort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wurde, in Fällen, in denen dies für den Client ansonsten mehrdeutig wäre.
Browser haben keine native Unterstützung für das Senden von Präferenzen über diese Header; sie werden in benutzerdefinierten, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifische Serververhalten während der Anfragenverarbeitung an. Beispielsweise kann es minimalen Antwortinhalt (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client, welche Präferenzen im Header `Prefer` vom Server angewendet wurden. Es ist ein Antwort-Only-Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies hinzugefügt, sowohl Forward- als auch Reverse-Proxies, und kann in den Anforderungs- und Antwortheadern erscheinen.

## Bereichsanforderungen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene Etag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um zu verhindern, dass zwei Bereiche von inkompatiblen Versionen der Ressource heruntergeladen werden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teilabschnitt einer Nachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Leitet den Browser an, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Nimmt denselben Wert an wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv).

## Anforderungs-Kontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzeragenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers an (für virtuelles Hosting), und (optional) die TCP-Portnummer, an die sich der Server als hörend angibt.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referenzinformationen, die im {{HTTPHeader("Referer")}}-Header gesendet wurden, in Anfragen enthalten sein sollten.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenkette, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-Benutzeragenten zu identifizieren.

## Antwort-Kontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den Artikel zur [CORP-Erklärung](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert die Ressourcen, die der Benutzeragent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, aber nicht durchsetzen. Diese Verstoßberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP `POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für Berichterstattung und Durchsetzung der [Zertifikattransparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um den Einsatz von falsch ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionen in der eigenen Frame einer Website zu erlauben und zu verbieten, und in {{htmlelement("iframe")}}s, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Websitebesitzern ermöglicht, einen oder mehrere Endpunkte zu spezifizieren, die verwendet werden, um Fehler wie CSP-Verstoßberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}}-Directive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}}-Header angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern sollte.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine domänenübergreifende Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderen) die Erlaubnis erteilen, Daten domänenübergreifend zu handhaben, was ansonsten aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wäre.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über sie, während es der Anwendung oder ihren Besuchern keinen Nutzen bietet. Löschen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung gegen Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden sollte, basierend darauf, woher die Anfrage kommt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt das Verhältnis zwischen dem Ursprung des Anfrageinitiators und dem Zielursprung an. Es ist ein Strukturierter Header, dessen Wert ein Zeichen mit den möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein Strukturierter Header, dessen Wert ein Zeichen mit den möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein Strukturierter Header, dessen Wert ein boolescher Wert ist, sodass mögliche Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Strukturierter Header, dessen Wert ein Zeichen mit den möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", liefern aber ähnliche Informationen darüber, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die zurückgegebene Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als der sofortige Gebrauch durch den Benutzeragenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource vorab für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorzeitigen Anfrage gesendet wird, um eine Ressource während des Bootvorgangs des Service Workers mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einer normalen `fetch()`-Operation.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser bei Verwendung der [Reporting API](/de/docs/Web/API/Reporting_API) Warnungen und Fehlerberichte senden soll.

## Transferkodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzeragent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende einer chunked Nachricht zusätzliche Felder einzuschließen.

## Websockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung aufzurüsten.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Client-Präferenzen ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client ausdrücklich die Eröffnung eines `WebSocket` beabsichtigt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Sub-Protokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Client-Präferenzen ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird dieser nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten aufzulisten, um diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entität-Header-Feld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch gleichwertig mit dem HTML {{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten sollte, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufen für das Skript-Ressource eines Service Workers eingeschlossen.
    Dieser Header hilft Administratoren, Service Worker-Skriptanfragen zu protokollieren, um sie zu überwachen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) aufgenommen wird.
- {{HTTPHeader("SourceMap")}}
  - : Verweist auf eine {{Glossary("source_map", "Quellekarte")}}, damit Debugger durch den ursprünglichen Quellcode anstelle des generierten oder transformierten Codes schrittweise durchführen können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll zu aktualisieren (über dasselbe Transportprotokoll). Beispielsweise kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung in ein WebSocket.
- {{HTTPHeader("Priority")}}
  - : Liefert einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Zuordnungs-Berichtsheader

Die [Zuordnungs-Berichts-API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht Entwicklern, Konversionen zu messen — beispielsweise, wenn ein Benutzer auf eine auf einer Seite eingebettete Anzeige klickt und dann auf der Website des Anbieters das Produkt kauft — und dann Berichte über diese Konversionen zuzugreifen. Dies erfolgt ohne die Verwendung von Drittanbieter-Tracking-Cookies, sondern durch die Verwendung verschiedener Header, um **Quellen** und **Trigger** zu registrieren, die auf eine Konversion hinweisen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an der Zuordnungsberichterstattung teilzunehmen, indem entweder eine Zuordnungsquelle oder ein Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um eine Zuordnungsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthielt, verwendet, um einen Zuordnungstrigger zu registrieren.

### Client-Hints

HTTP-[Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie den Gerätetyp und die Netzwerkbedingungen liefern und es Servern ermöglichen, das, was für diese Bedingungen bereitgestellt wird, zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, die sie vom Client interessieren, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, ob er die angeforderten Header in nachfolgenden Anfragen einschließt.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client Hints durch das `Accept-CH`-Headerfeld oder ein entsprechendes HTML-`<meta>`-Element mit [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut angeben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### Benutzeragenten-Client-Hints

Die [Benutzeragenten-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die auf dem Benutzeragenten oder der Plattform festgelegt sind, liefern:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Markierung und Version des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Die zugrunde liegende CPU-Architektur-Bitness des Benutzeragenten (z. B. "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Das zugrunde liegende Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Die Version des zugrunde liegenden Betriebssystems des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Benutzeragenten-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers, weniger Animationen und Inhaltslayoutänderungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungsheader, der die Präferenz des Benutzeragenten für weniger Transparenz angibt.

> [!NOTE]
> Benutzeragenten-Client-Hints sind nicht innerhalb von [Eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf die Delegation von [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy) angewiesen sind, die zum Leaken von Daten verwendet werden könnten.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Geräte-zu-Pixel-Verhältnis (DPR) bei Anfragen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hint verwendet wurde, um eine Bildressource zu wählen, zu bestätigen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähr die Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Gerätespeicher-API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der das Pixelverhältnis des Clientgeräts (die Anzahl der physischen {{Glossary("device_pixel", "Gerätepixel")}} pro {{Glossary("CSS_pixel", "CSS-Pixel")}}) angibt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header gibt die Viewport-Breite des Clients in {{Glossary("CSS_pixel", "CSS-Pixel")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header weist auf die gewünschte Ressourcengröße in physischen Pixeln hin (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server zu wählen, welche Informationen basierend auf der Benutzerwahl und der Netzwerkbandbreite sowie der Latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähr die Bandbreite der Client-Verbindung zum Server, in Mbps. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten die Latenz und Bandbreite der Verbindung beschreibt. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Rundenlaufzeit (RTT) in Millisekunden auf Anwendungsebene, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Netzwerkinformations-API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzeragenten für eine reduzierte Datennutzung angibt.

### Komprimierungswörterbuch-Transport

[Komprimierungswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsames Komprimierungswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das standardmäßige statische Wörterbuch in {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungsheader verwenden, um anzugeben, welches Wörterbuch er hat, das der Server zur Komprimierung verwenden kann.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource hat und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitgestellt hat.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte `id` des Wörterbuchs im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Übereinstimmungskriterien auf, bei denen das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Benutzereinstellung für das Tracking (Do Not Track) angibt.
    Abgelöst zu Gunsten der Globalen Privatsphärenkontrolle (GPC), die den Servern mit dem {{HTTPHeader("Sec-GPC")}} Header mitgeteilt wird und für die Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage galt. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, ihre persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-keyed [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolierung ermöglicht es Benutzeragenten, implementationsspezifische Ressourcen für Agenten-Cluster, wie Prozesse oder Threads, effizienter zuzuordnen.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Richtlinie zur Netzwerkausfallberichterstattung zu deklarieren.

### Topics API

Die Topics API bietet Entwicklern die Möglichkeit, Anwendungsfälle wie interest-basiertes Advertising (IBA) zu implementieren.
Weitere Informationen finden Sie in der [Topics API-Dokumentation](/de/docs/Web/API/Topics_API).

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der zum Markieren von Interessenthemen verwendet wird, die aus der URL einer aufgerufenen Seite abgeleitet wurden und als beobachtet in der Antwort auf eine von einer [Funktion, die die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api), generierte Anfrage.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Werbetechnologieplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt wird.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann den [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header senden, um die Absicht anzugeben, von allen verfügbaren Signaturen zu profitieren und anzugeben, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Frühdaten übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus zu setzen, ob derzeit Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Headerfeld übermittelt eine Liste von Signaturen für einen Austausch, die jeweils von Informationen begleitet werden, wie die Autorität der Signatur und deren Erneuerung bestimmt werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Headerfeld identifiziert eine geordnete Liste von Antwortheaderfeldern, die in einer Signatur enthalten sind.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregelset des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationsziel gesetzt, um die Verwendung verschiedener, risikoreicherer Ladeformen zu erlauben. Beispielsweise erfordert die gleiche Site [Vorladen](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) eine `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder Lastverteiler eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den originalen Host, den ein Client zur Verbindung mit ihrem Proxy oder Lastverteiler verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client zur Verbindung mit ihrem Proxy oder Lastverteiler verwendet hat.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert das DNS-Vorausladen, eine Funktion, bei der Browser proaktiv die Namensauflösung für sowohl Verknüpfungen, denen der Benutzer möglicherweise folgt, als auch URLs für von dem Dokument referenzierte Elemente wie Bilder, CSS, JavaScript usw. durchführen.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb der öffentlichen Suchmaschinenergebnisse indexiert werden soll. Der Header ist effektiv gleichwertig mit `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der möglicherweise überall entlang der Anforderungs-Antwort-Kette verschiedene Effekte hat. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der Header `Cache-Control` noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite über Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
