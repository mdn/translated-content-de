---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln. In HTTP/1.X ist ein Header ein nicht auf Groß- oder Kleinschreibung achtender Name, gefolgt von einem Doppelpunkt, dann optionalem Leerraum, der ignoriert wird, und schließlich von seinem Wert (zum Beispiel: `Allow: POST`). In HTTP/2 und höher werden Header, wenn sie in den Entwickler-Tools angezeigt werden, in Kleinbuchstaben dargestellt (`accept: */*`) und für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) mit einem Doppelpunkt am Anfang versehen (`:status: 200`). Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-`-Präfix verwendet, aber diese Konvention wurde 2012 wegen der Unannehmlichkeiten, die sie verursachte, als nicht standardisierte Felder zu Standardfeldern wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) als veraltet erklärt; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde. Das IANA-Register listet Header inklusive [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status) auf.

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Beinhaltet zusätzliche Informationen über die Antwort, wie etwa ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Darstellungs-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxys")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht weitergeleitet werden: den Server bei einer Anfrage oder den Client bei einer Antwort. Zwischenzeitliche Proxys müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene-Verbindung von Bedeutung und _dürfen nicht_ von Proxys weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mit dem {{HTTPHeader("Connection")}}-Header festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden sollte.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten mit einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden sollte.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzeragenten bei einem Proxyserver zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserverlaufsdaten (z.B. Cookies, Speicher, Cache) der anfragenden Website.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach der die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt einen Satz von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

## Bedingungen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet zum Vergleich mehrerer Versionen derselben Ressource. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies gewährleistet die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen, oder um ein optimistisches Steuerungssystem für die gleichzeitige Modifikation beim Ändern bestehender Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader verglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine frische vom Ursprungsserver anzufordern.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben sollte.

## Inhaltsverhandlung

Für weitere Details siehe den Artikel zur [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und möglicherweise nicht vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, keine explizite Benutzerwahl zu überschreiben (wie das Auswählen einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhalt-Verhandlungsantwort_-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhalt-Verhandlungsantwort_-Header, der angibt, welchen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die der Server erfüllen muss, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei der Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) gibt sie die maximale Anzahl von Hops an, die die Anfrage durchführen kann, bevor sie an den Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzugeben, welche HTTP-Header beim tatsächlichen Anfordern verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource in Reaktion auf eine Preflight-Anfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache bleiben können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche HTTP-Header beim tatsächlichen Anfordern verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird bei der Ausgabe einer Preflight-Anfrage verwendet, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) beim tatsächlichen Anfordern verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Fetch stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die es erlauben, Werte von Attributen zu sehen, die über Funktionen der [Ressourcen-Zeitmessungs-API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die andernfalls aufgrund von Herkunftsbeschränkungen als Null gemeldet werden würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden sollte (Standardverhalten ohne den Header), oder ob sie wie ein Download behandelt werden und der Browser ein "Speichern unter"-Dialog anzeigen sollte.

## Integritätsprüfungen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} des Stroms von Oktetten, der in einer HTTP-Nachricht (dem Nachrichteninhalt) eingerahmt ist, abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen {{Glossary("hash_function", "Digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung. Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an. Es ist das `Content-`-Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an. Es ist das `Repr-`-Analogon zu {{HTTPHeader("Want-Content-Digest")}}.

## Integritätspolitik

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle vom Benutzeragenten geladenen Ressourcen (eines bestimmten Typs) [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien haben.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Berichtet über Ressourcen, die vom Benutzeragenten geladen werden und die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien verletzen würden, wenn die Integritätspolitik durchgesetzt würde (unter Verwendung des `Integrity-Policy`-Headers).

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum bestimmt sind, so dass ein Benutzer differenzieren kann, entsprechend der eigenen bevorzugten Sprache des Benutzers.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzugeben. Die Serverantwort kann angeben, ob eine Präferenz angewandt wurde, in Fällen, in denen es ansonsten für den Client unklar wäre. Browser haben keine native Handhabung zum Senden von Präferenzen über diese Header; sie werden in speziellen, implementierungsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für spezifisches Serververhalten während der Anfragenverarbeitung an. Beispielsweise kann es einen minimalen Antwortinhalt (`return=minimal`) oder eine asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client, welche Präferenzen, die im `Prefer`-Header angegeben sind, vom Server angewendet wurden. Es ist ein nur-Response-Header, der Transparenz über die Präferenzverarbeitung bietet.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-Seite der Proxy-Server, die verändert oder verloren gehen, wenn ein Proxy im Anforderungspfad involviert ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxys, sowohl Vorwärts- als auch Rückwärtsproxys, und kann in den Anforderungs- und Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die es den Benutzern ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt, und wenn ja, in welcher Einheit die Bereiche angegeben werden können.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erzeugt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene Etag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil der Nachricht hingehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen weiterzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) an.

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzeragenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollten.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenkette, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-Benutzeragenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anforderungsmethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Embedder-Richtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen oder kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzeragent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Effekte überwachen, aber nicht erzwingen. Diese Verletzungsberichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichtserstattung und Durchsetzung von [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um eine Verwendung von fehlgeleiteten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die es einbettet, zu erlauben und zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der es Websitebesitzern ermöglicht, einen oder mehrere Endpunkte anzugeben, an die Fehlerberichte gesendet werden sollen, wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS statt HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das den Kundenwunsch nach einer verschlüsselten und authentifizierten Antwort ausdrückt, und dass er die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Cross-Domain-Policy-Datei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderen) die Berechtigung erteilen, Daten über Domänen hinweg zu behandeln, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wären. Der `X-Permitted-Cross-Domain-Policies`-Header hebt solche Policy-Dateien auf, so dass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, ohne dass sie der Anwendung oder ihren Besuchern von Nutzen sind. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie nutzen, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt wird, basierend darauf, woher die Anfrage kommt und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anfrageninitiators und dem Ziel seiner Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch eine Benutzeraktion ausgelöst wurde oder nicht. Es handelt sich um einen strukturierten Header, dessen Wert ein boolescher Wert ist, sodass die möglichen Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", liefern aber ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie nutzen, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck ein anderer ist als die sofortige Verwendung durch den Benutzeragenten. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präemptiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in präemptiven Anfragen gesendet wird, um eine Ressource während des Service-Worker-Bootprozesses zu `fetch()`. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server zu informieren, dass eine andere Ressource zurückgegeben werden soll als bei einer normalen `fetch()`-Operation.

## Servergesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser bei der Verwendung der [Reporting-API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte zu spezifizieren, an die der Browser bei der Verwendung der [Reporting-API](/de/docs/Web/API/Reporting_API) Warn- und Fehlerberichte senden soll.

## Übertragungscodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der Benutzeragent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, zusätzliche Felder am Ende einer gestückelten Nachricht hinzuzufügen.

## WebSockets

Header, die von der [WebSockets-API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen an. In Antworten zeigt er die vom Server aus den Vorlieben des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der überprüft, dass der Client explizit beabsichtigt, eine `WebSocket`-Verbindung zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten Subprotokolle an. In Antworten zeigt er das vom Server aus den Vorlieben des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an. In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die unterstützten Versionen auf.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten anzugeben, um diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht entstanden ist.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit, einen oder mehrere Links in HTTP-Headern zu serialisieren. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten sollte, bevor eine Folgeanfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfragen-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Fetch-Anfragen für das Skriptressource eines Service Workers enthalten. Dieser Header hilft Administratoren beim Protokollieren von Service-Worker-Skriptanfragen zu Überwachungszwecken.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt auf eine {{Glossary("source_map", "Source Map")}}, sodass Debugger durch den ursprünglichen Quellcode anstelle von generiertem oder transformiertem Code schritten können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung zu einem anderen Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Er kann beispielsweise von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket.
- {{HTTPHeader("Priority")}}
  - : Gibt einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung. Der Wert kann in einer Anforderung gesendet werden, um die Priorität des Clients anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anforderung neu zu priorisieren.

## Experimentelle Header

### Aufzeichnungsheader

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen - zum Beispiel, wenn ein Nutzer auf eine eingebettete Anzeige einer Seite klickt und dann auf der Anbieterseite den Artikel kauft - und dann auf Berichte über diese Konversionen zuzugreifen. Dies geschieht ohne die Verwendung von Drittanbieter-Cookies, sondern stützt sich auf verschiedene Header, um **Quellen** und **Trigger** zu registrieren, die zu einer Konversion führen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort, die der aktuellen Anfrage entspricht, berechtigt ist, um an der Attributionsberichterstattung teilzunehmen, indem entweder eine Attribution-Quelle oder ein -Trigger registriert wird.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthält, verwendet, um eine Attribution-Quelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible`-Header enthält, verwendet, um einen Attribution-Trigger zu registrieren.

### Client-Hints

HTTP-[Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Sammlung von Anforderungs-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das Gelieferte für diese Bedingungen zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, an denen sie interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann entscheiden, ob die angeforderten Header in nachfolgenden Anfragen enthalten werden sollen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung von Client-Hints über das `Accept-CH`-Header-Feld oder ein gleichwertiges HTML-`<meta>`-Element mit [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### User-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungs-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und Benutzerpräferenzen, die auf dem Benutzeragenten oder der Plattform eingestellt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Benutzeragenten-Marke und Version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : CPU-Architektur-Bitness des Benutzeragenten (zum Beispiel "64" bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenkette des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt generell eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Gibt an, ob das Benutzeragentenprogramm im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Präferenz des Benutzers für weniger Animationen und Inhaltslayoutverschiebungen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Der Anforderungs-Header gibt die Präferenz des Benutzeragenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzeragenten-Client-Hints sind in [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie sich auf die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation stützen, die zum Datenleck genutzt werden könnte.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antworten-Header, der verwendet wird, um das Bildgerät-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hint verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der das Geräte-Pixelverhältnis des Clients angibt (die Anzahl physischer {{Glossary("device_pixel", "Gerätepixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Layout-Sichtfensterbreite des Clients in {{Glossary("CSS_pixel", "CSS-Pixeln")}} angibt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die gewünschte Ressourcenbreite in physischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, zu entscheiden, welche Informationen basierend auf der Benutzerwahl und Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Client-Verbindung zum Server, in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Round-Trip-Zeit (RTT) auf Anwendungsebene in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzeragenten für eine reduzierte Datennutzung anzeigt.

### Kompressionswörterbuch-Transport

[Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsam genutztes Kompressionswörterbuch zu verwenden, um die Übertragungsgröße von HTTP-Antworten zu reduzieren, anstatt das standardmäßige statische Wörterbuch in der {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungs-Header verwenden, um das beste Wörterbuch anzugeben, das er für die Kompression durch den Server verfügbar hat.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource verfügbar hat und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitgestellt hat. Anfragen nach Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte Wörterbuch-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Übereinstimmungskriterien auf, für die das Wörterbuch in zukünftigen Anfragen verwendet werden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track). Veraltet zugunsten der Global Privacy Control (GPC), die den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage gilt. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzuzeigen, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-gebundenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden sollte. Diese Isolierung ermöglicht es Benutzeragenten, implementierungsspezifische Ressourcen für Agent-Cluster, wie Prozesse oder Threads, effizienter zuzuweisen.

### Servergesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichtspolitik zu deklarieren.

### Topics API

Die Topics API stellt einen Mechanismus bereit, mit dem Entwickler Anwendungsfälle wie interessenbasierte Werbung (IBA) implementieren können. Weitere Informationen finden Sie in der [Topics API](/de/docs/Web/API/Topics_API)-Dokumentation.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse zu kennzeichnen, die aus der URL einer aufrufenden Seite abgeleitet wurden, wie sie in der Antwort auf eine Anfrage beobachtet wurden, die durch ein [Feature, das die Topics API aktiviert](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api).
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Header-Feld senden, um die Absicht anzuzeigen, von verfügbaren Signaturen zu profitieren und anzugeben, welche Arten von Signaturen es unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anforderung in TLS-Frühdaten übermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header wird von einem föderierten Identitätsanbieter (IdP) gesendet, um seinen Anmeldestatus festzulegen, also zu klären, ob Benutzer beim IdP im aktuellen Browser angemeldet sind oder nicht. Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld überträgt eine Liste von Signaturen für einen Austausch, wobei jede von Informationen begleitet wird, wie die Autorität dieser Signatur bestimmt und aufgefrischt werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur einzuschließen sind.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Liefert eine Liste von URLs, die auf Textressourcen zeigen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregelsatz des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte der Spekulationsregeln, die zu der Spekulation führten, sodass ein Server identifizieren kann, welche Regel(n) eine Spekulation verursachte(n) und sie möglicherweise blockieren könnte(n).
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Verwendung verschiedener risikoreicher Lademodi zu aktivieren. Zum Beispiel erfordert das Prerendering [aus Drittländern](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-standardisierte Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Load Balancer mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Load Balancer herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um eine Verbindung zu Ihrem Proxy oder Load Balancer herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, ein Feature, bei dem Browser proaktiv die Namensauflösung für Domänen sowohl von Links ausführen, die der Benutzer möglicherweise wählt, als auch URLs für Elemente, die vom Dokument referenziert werden, einschließlich Bildern, CSS, JavaScript und so weiter.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb der öffentlichen Suchmaschinenergebnisse indexiert werden soll. Der Header ist äquivalent zu [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der in der gesamten Anfragen-Antwort-Kette verschiedene Effekte haben kann. Wird für die Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, wo der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Working Group](https://httpwg.org/specs/)
