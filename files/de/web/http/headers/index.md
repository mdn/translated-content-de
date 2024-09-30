---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es, dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort zu übermitteln. Ein HTTP-Header besteht aus seinem nicht groß-/kleinschreibungsempfindlichen Namen gefolgt von einem Doppelpunkt (`:`) und dann von seinem Wert. [Leerzeichen](/de/docs/Glossary/Whitespace) vor dem Wert werden ignoriert.

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde im Juni 2012 aufgrund der Unannehmlichkeiten, die entstanden, als nicht standardisierte Felder im [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, als veraltet erklärt; weitere Informationen finden Sie im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml), dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), die "permanent" (durch Standards definiert), "provisional" (neu), "veraltet" (Verwendung wird nicht empfohlen) oder "überholt" (nicht mehr in Gebrauch) sein können.

Header können entsprechend ihren Kontexten gruppiert werden:

- [Anfrageheader](/de/docs/Glossary/Request_header)
  - : Enthalten zusätzliche Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- [Antwortheader](/de/docs/Glossary/Response_header)
  - : Enthalten zusätzliche Informationen über die Antwort, wie deren Standort oder den Server, der sie bereitstellt.
- [Repräsentationsheader](/de/docs/Glossary/Representation_header)
  - : Enthalten Informationen über den Inhalt der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder die angewandte Kodierung/Komprimierung.
- [Payload-Header](/de/docs/Glossary/Payload_header)
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich der Inhaltlänge und der für den Transport verwendeten Kodierung.

Header können auch entsprechend ihrer Handhabung durch [Proxies](/de/docs/Glossary/Proxy_server) gruppiert werden:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weitersenden und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung von Bedeutung und dürfen _nicht_ von Proxies weiterleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{httpheader("Connection")}}-Header gesetzt werden können.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem Proxy-Server zu erhalten.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen User-Agent bei einem Proxy-Server zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt im Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen sowohl in Anfragen als auch in Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z.B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Uhrzeit, nach dem die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt ein Regelwerk an, das definiert, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in manchen Umgebungen einfacher zu berechnen. Bedingte Anfragen unter Nutzung von {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen unter Nutzung von {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der gegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der gegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um zu verhindern, dass eine neue Ressource hochgeladen wird, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übermittelt wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übermitteln, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übermittelt wird, wenn sie nicht nach dem angegebenen Datum geändert wurde. Dies sichert die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit bisherigen oder dient dazu, ein optimistisches Sperrsteuerungssystem bei der Änderung bestehender Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfrageheader abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuerung, ob die Netzwerkverbindung geöffnet bleibt, nachdem die aktuelle Transaktion abgeschlossen ist.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuerung, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsverhandlung

Für weitere Details lesen Sie den [Artikel zur Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die [Typen](/de/docs/Glossary/MIME_type) von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Charset")}} {{deprecated_inline}}
  - : Bewirbt die vom Client unterstützten [Zeichenkodierungen](/de/docs/Glossary/character_encoding).
    Sie ist veraltet, da [UTF-8](/de/docs/Glossary/UTF-8) allgegenwärtig geworden ist und die Verwendung des Headers das Client-Fingerprinting erleichtert.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht notwendigerweise vollständig in der Kontrolle des Benutzers: Der Server sollte stets darauf achten, eine vom Benutzer explizit getroffene Auswahl (wie das Auswählen einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhalt-Verhandlungsantwort-Header_, der bewirbt, welcher [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstanden werden kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhalt-Verhandlungsantwort-Header_, der bewirbt, welcher [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server in einer {{HTTPMethod("POST")}}-Anfrage verstanden werden kann.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu behandeln.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Nutzung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE), gibt die maximale Anzahl der Hops an, die die Anfrage machen kann, bevor sie an den Absender zurückgesendet wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server zum User-Agent.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Berechtigungsflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/Preflight_request) verwendet, um anzugeben, welche HTTP-Header beim Ausführen der tatsächlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage zulässig sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Auslösen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Auslösen einer Preflight-Anfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die sonst aufgrund von herkunftsübergreifenden Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übermittelte Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialog anzeigen sollte.

## Integritäts-Digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) des Stream von Oktetten, die in einer HTTP-Nachricht (dem Nachrichtinhalt) eingerahmt sind, abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) einer Ressource. Siehe {{HTTPHeader("Content-Digest")}} und {{HTTPHeader("Repr-Digest")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) der ausgewählten Darstellung der Zielressource vor der Übertragung. Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest nicht {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Kein Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header. Es ist das `Content-` Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Kein Wunsch nach einem {{HTTPHeader("Digest")}}-Header. Siehe stattdessen {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Kein Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header. Es ist das `Repr-` Analogon zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen über den Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl der Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum vorgesehen sind, sodass ein Benutzer je nach eigener bevorzugter Sprache differenzieren kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite der Proxy-Server, die geändert oder verloren geht, wenn ein Proxy im Pfad der Anfrage involviert ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies hinzugefügt, sowohl Vorwärts- als auch Rückwärtsproxies, und kann sowohl in den Anfrage- als auch in den Antwort-Headern erscheinen.

## Bereichsabfragen

HTTP [Bereichsabfragen](/de/docs/Web/HTTP/Range_requests) erlauben es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsabfragen sind nützlich für Anwendungen wie Medienplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer das Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt, und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu vermeiden.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teilausschnitt gehört. 

## Redirects

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder auf eine andere weiterzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragenkontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden User-Agent steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domänennamen des Servers (für virtuelles Hosting) an und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen, die im {{HTTPHeader("Referer")}}-Header gesendet werden, mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält einen charakteristischen String, der es den Netzwerkprotokollpeers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-User-Agents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die verwendete Software des Ursprungsservers zur Bearbeitung der Anfrage.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Embedding-Richtlinie für ein gegebenes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wurde. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy). 
- {{HTTPHeader("Content-Security-Policy")}} ([CSP](/de/docs/Glossary/CSP))
  - : Kontrolliert Ressourcen, die der User-Agent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Erlaubt Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, aber nicht durchsetzen. Diese Verletzungsberichte bestehen aus über HTTP gesendeten [JSON](/de/docs/Glossary/JSON)-Dokumenten mittels einer `POST`-Anfrage an die angegebene URI.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, Berichterstattung und Durchsetzung der [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) zu aktivieren, um die Verwendung fehlgeschlagener Zertifikate für diese Seite zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionen im eigenen Frame einer Website zu erlauben oder zu verweigern und in {{htmlelement("iframe")}}, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der Website-Inhabern erlaubt, ein oder mehrere Endpunkte zu spezifizieren, die zum Empfang von Fehlern wie CSP-Verletzungsberichten, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichten oder anderen generischen Verletzungen verwendet werden.
- {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS))
  - : Erzwingt die Kommunikation mittels HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass es die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich handhaben kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlauben sollte, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine Cross-Domain-Policy-Datei (`crossdomain.xml`) erlaubt ist. Die Datei kann eine Richtlinie definieren, die Clients wie Adobe's Flash Player (jetzt veraltet), Adobe Acrobat, Microsoft Silverlight (jetzt veraltet) oder Apache Flex die Erlaubnis gibt, Daten über Domains hinweg zu handhaben, die ansonsten aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) beschränkt wären. Siehe die [Cross-domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf) für weitere Informationen.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über sie, während es keine Nützlichkeit für die Anwendung oder ihre Besucher bietet. Deaktivieren Sie diesen Header, um potenzielle Schwachstellen nicht preiszugeben.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Ermöglicht Cross-Site-Scripting-Filterung.

### Fetch-Metadatenanfrageheader

[Fetch-Metadatenanfrageheader](/de/docs/Glossary/Fetch_metadata_request_header) liefern Informationen über den Kontext, aus dem heraus die Anfrage erstellt wurde. Ein Server kann diese verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage basierend auf ihrer Quelle und der geplanten Nutzung der Ressource erlaubt sein sollte.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsinitiator und dem Ziel der Anfrage an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten wie `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten wie `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein Strukturierter Header, dessen Wert ein Boolean ist. Mögliche Werte sind `?0` für falsch und `?1` für wahr.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Strukturierter Header, dessen Wert ein Token mit möglichen Werten wie `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrageheader sind nicht _streng genommen_ "Fetch-Metadaten-Anfrageheader", liefern jedoch ähnlich Informationen darüber, wie eine Ressource verwendet werden soll. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die zurückgegebene Information zu modifizieren:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn dieser etwas anderes ist als die unmittelbare Verwendung durch den User-Agent. Der Header hat derzeit einen möglichen Wert, `prefetch`, was bedeutet, dass die Ressource bereitwillig für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrageheader, der in der präventiven Anfrage gesendet wird, um eine Ressource während des Service-Worker-Starts mit [`fetch()`](/de/docs/Web/API/Window/fetch) abzurufen. Der Wert wird mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt und kann verwendet werden, um einem Server mitzuteilen, dass eine andere Ressource als in einem normalen `fetch()`-Betrieb zurückgegeben werden sollte.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der zum Spezifizieren der Serverendpunkte verwendet wird, bei denen der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der zum Spezifizieren der Serverendpunkte verwendet wird, bei denen der Browser Warnungen und Fehlerberichte senden soll, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transferkodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der User-Agent akzeptieren möchte.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Sender, zusätzliche Felder am Ende einer chunked Nachricht einzufügen.

## WebSockets

Header, die durch die [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfragenheader, der einen Schlüssel enthält, der verifiziert, dass der Client explizit beabsichtigt, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client in bevorzugter Reihenfolge unterstützten Subprotokolle an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege anzugeben, diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entitäts-Header-Feld bietet ein Mittel zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der User-Agent warten sollte, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) aufzuheben, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verknüpft generierten Code mit einer [Source-Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html).
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bestehende Client/Server-Verbindung zu einem anderen Protokoll zu aktualisieren (über dasselbe Transportprotokoll). Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren, oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket zu wandeln.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität eines bestimmten Ressourcenanforderungs auf einer bestimmten Verbindung. Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzuzeigen, oder in einer Antwort, wenn der Server die Anfrage neu priorisieren möchte.

## Experimentelle Header

### Zuschreibung-Berichterstattungsheader

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen – beispielsweise wenn ein Benutzer eine auf einer Website eingebettete Anzeige anklickt und dann den Artikel auf der Seite des Anbieters kauft – und dann Berichte über diese Konversionen zu erstellen. Dies geschieht, ohne dass auf Drittanbieter-Tracking-Cookies zurückgegriffen wird, sondern auf verschiedene Header, um **Quellen** und **Trigger** zu registrieren, die eine Konversion anzeigen.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort, die mit der aktuellen Anfrage korrespondiert, berechtigt ist, an der Berichterstattung teilzunehmen, indem entweder eine Zuschreibungsquelle oder ein Trigger registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort zu einer Anfrage verwendet, die einen `Attribution-Reporting-Eligible`-Header enthielt, um eine Zuschreibungsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort zu einer Anfrage verwendet, die einen `Attribution-Reporting-Eligible`-Header enthielt, um einen Zuschreibungstrigger zu registrieren.

### Client-Hints

HTTP [Client Hints](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anfrageheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, die bieten Inhalte für diese Bedingungen zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, an denen sie interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, ob er die angeforderten Header in nachfolgenden Anfragen einfügt.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hints mithilfe des `Accept-CH`-Header-Felds oder eines gleichwertigen HTML `<meta>`-Elements mit [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### User-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anfrageheader, die Informationen über den User-Agent, die Plattform/Architektur, auf der sie ausgeführt werden, und Benutzereinstellungen auf dem User-Agent oder der Plattform bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Markenzeichen und Version des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Unterliegende Plattformarchitektur des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der unterliegenden CPU-Architektur des User-Agents (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des User-Agents, die beschreiben, wie der Benutzer mit dem User-Agent interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Kompletter Versions-String des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : User-Agent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen ein "mobiles" Benutzererlebnis.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Gerätemodell des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des User-Agents.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Versionsnummer des Betriebssystems des User-Agents.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das User-Agent-Binary im 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Benutzerpräferenz für dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Benutzerpräferenz, weniger Animationen und Inhaltslayoutverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfragenheader zeigt die Benutzerpräferenz für reduzierte Transparenz des User-Agents an.

> [!NOTE]
> User-Agent-Client-Hints sind innerhalb [eingezäunter Rahmen](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) zur Delegation beruhen, die zur Datenlecks verwendet werden könnten.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um das Bildgerät-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei dem der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hint verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfragenheader, der das Clientgerätepixelverhältnis (die Anzahl der physischen Gerätepixel für jedes [CSS-Pixel](/de/docs/Glossary/CSS_pixel)) angibt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfragenheader, der die Breite des Layout-Viewports des Clients in [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) angibt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfragenheader, der die gewünschte Ressourcebreite in physischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server zu wählen, welche Informationen basierend auf der Benutzerwahl und den Netzwerkbandbreiten- und Latenzbedingungen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der [effektive Verbindungstyp](/de/docs/Glossary/effective_connection_type) ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Anwendungs-Layer-Rundlaufzeit (RTT) in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, das die Präferenz des User-Agents für reduzierte Datennutzung angibt.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrageheader, der die Tracking-Präferenz des Benutzers (Nicht verfolgen) angibt.
    Veraltet zugunsten der Global Privacy Control (GPC), die den Servern mithilfe des {{HTTPHeader("Sec-GPC")}}-Headers mitgeteilt wird und für Clients via [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Tracking-Status angibt, der für die entsprechende Anfrage galt. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer der Weitergabe oder dem Verkauf seiner persönlichen Daten an Dritte durch eine Website oder einen Service zustimmt.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, der es Webanwendungen ermöglicht, ihre Ursprünge zu isolieren.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerberichterstattungsrichtlinie zu deklarieren.

### Topics API

Die Topics API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren.
Weitere Informationen finden Sie in der [Topics API](/de/docs/Web/API/Topics_API) Dokumentation.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Themen von Interesse zu markieren, die von der URL der aufrufenden Seite abgeleitet wurden, wie sie in der Antwort auf eine Anfrage beobachtet werden, die durch ein [Feature das die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfragenheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Anzeigenplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : Ein Client kann die gewünschte Push-Politik für eine Anfrage angeben, indem er das [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) -Header-Feld in der Anfrage sendet.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) -Header-Feld senden, um die Absicht anzugeben, die von verfügbaren Signaturen zu profitieren, und anzugeben, welche Arten von Signaturen es unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS Early Data übertragen wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzuzeigen, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in einem _ursprungsbezogenem [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es Benutzer-Agenten, Implementierungs-spezifische Ressourcen für Agent-Cluster wie Prozesse oder Threads effizienter zuzuweisen.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : Eine [`Push-Politik`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) definiert das Serververhalten bezüglich Push beim Verarbeiten einer Anfrage.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus festzulegen, bedeutet ob Benutzer in der aktuellen Browser bei dem IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und durch die [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Header-Feld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie man die Autorität dieser Signatur bestimmen und erneuern kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API)-JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Regelwerk der Spekulation des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget festgelegt, um die Verwendung verschiedener riskanter Ladearten zu ermöglichen. Beispielsweise erfordert die herkunftsübergreifende, gleichseitige [Vorabladen](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-Standard-Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Gibt die ursprünglichen IP-Adressen eines Clients an, der sich über einen HTTP-Proxy oder einen Lastenausgleichsserver mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichsserver zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichsserver zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Kontrolliert DNS-Prefetching, ein Feature, bei dem Browser proaktiv die Domain-Namensauflösung sowohl für Links durchführen, die der Benutzer möglicherweise wählen wird, als auch für URLs von Elementen, auf die im Dokument verwiesen wird, einschließlich Bildern, CSS, JavaScript und so weiter.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinen-Ergebnisse indiziert werden soll. Der Header ist im Wesentlichen gleichwertig mit `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementationsspezifischer Header, der möglicherweise verschiedene Effekte irgendwo entlang der Anforderungs-Antwort-Kette hat. Wird zur Rückwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Hinweise zu möglichen Problemen.

## Beitrag leisten

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## Siehe auch

- [Wikipedia-Seite zur Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
