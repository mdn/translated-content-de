---
title: HTTP-Header
short-title: Header
slug: Web/HTTP/Headers
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort zu übermitteln. Ein HTTP-Header besteht aus seinem nicht groß-/kleinschreibungssensitiven Namen gefolgt von einem Doppelpunkt (`:`), dann von seinem Wert. [Leerzeichen](/de/docs/Glossary/Whitespace) vor dem Wert werden ignoriert.

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-` Präfix verwendet, aber diese Konvention wurde im Juni 2012 aufgrund der Unannehmlichkeiten, die sie verursachte, als nicht standardmäßige Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, abgeschafft. Andere sind in der [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgelistet, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), die "permanent" (standardskonform), "provisorisch" (neu), "veraltet" (Nutzung nicht empfohlen) oder "obsolet" (nicht mehr in Gebrauch) sein können.

Header können nach ihren Kontexten gruppiert werden:

- [Anfrage-Header](/de/docs/Glossary/Request_header)
  - : Enthält weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- [Antwort-Header](/de/docs/Glossary/Response_header)
  - : Halten zusätzliche Informationen über die Antwort, wie ihren Standort oder den Server, der sie bereitstellt.
- [Darstellungs-Header](/de/docs/Glossary/Representation_header)
  - : Enthält Informationen über den Inhalt der Ressource, wie den [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder die angewandte Kodierung/Komprimierung.
- [Daten-Header](/de/docs/Glossary/Payload_header)
  - : Enthält darstellungsunabhängige Informationen über Paya-Daten, einschließlich der Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie [Proxies](/de/docs/Glossary/Proxy_server) mit ihnen umgehen:

- End-to-End-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht gesendet werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung sinnvoll und dürfen von Proxies _nicht_ weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mit dem {{httpheader("Connection")}} Header eingestellt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden soll.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzeragenten beim Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden soll.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldeinformationen, um einen Benutzeragenten bei einem Proxyserver zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit, in Sekunden, die das Objekt in einem Proxy-Cache war.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Cache-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z.B. Cookies, Speicher, Cache), die mit der angeforderten Website zusammenhängen.
- {{HTTPHeader("Expires")}}
  - : Das Datum/Zeit, nach dem die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Bedingungssätze

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber einfacher in einigen Umgebungen zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu vermeiden, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache nicht mehr aktuell ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies gewährleistet die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorherigen oder implementiert ein optimistisches Nebenläufigkeitssteuersystem bei der Änderung bestehender Dokumente.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfragen-Header abgeglichen werden, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine dauerhafte Verbindung offen bleiben soll.

## Inhaltsaushandlung

Für mehr Details verweisen wir auf den [Artikel zur Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die [Arten](/de/docs/Glossary/MIME_type) von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Charset")}} {{deprecated_inline}}
  - : Gibt die von einem Client unterstützten [Zeichenkodierungen](/de/docs/Glossary/character_encoding) an.
    Es ist veraltet, weil [UTF-8](/de/docs/Glossary/UTF-8) allgegenwärtig geworden ist und die Verwendung des Headers das Fingerprinting von Clients erleichtert.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die gewünschte menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und nicht unbedingt unter voller Kontrolle des Benutzers: Der Server sollte immer darauf achten, eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einem Dropdown-Menü) nicht zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Request-Content-Negotiation_ Antwort-Header, der angibt, welche [Media-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage versteht.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Request-Content-Negotiation_ Antwort-Header, der angibt, welche [Media-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage versteht.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Wenn [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE) verwendet wird, gibt die maximale Anzahl von Sprüngen an, die die Anfrage machen kann, bevor sie an den Absender zurückgesendet wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzeragenten.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeflag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine [Preflight-Anfrage](/de/docs/Glossary/Preflight_request) verwendet, um anzugeben, welche HTTP-Header bei der eigentlichen Anfrage verwendet werden können.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt als Antwort auf eine Preflight-Anfrage die Methoden an, die beim Zugriff auf die Ressource zulässig sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server darüber zu informieren, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um den Server darüber zu informieren, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die andernfalls aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialog anzeigen soll.

## Integritätsprüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) des Streams von Oktetten, die in einer HTTP-Nachricht (dem Nachrichtentext) umrahmt sind, abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) einer Ressource.
    Siehe {{HTTPHeader("Content-Digest")}} und {{HTTPHeader("Repr-Digest")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet einen [Digest](/de/docs/Glossary/digest) der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}} Header an.
    Es ist das `Content-` Pendant des {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Digest")}} Header an.
    Siehe stattdessen {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}} Header an.
    Es ist das `Repr-` Pendant des {{HTTPHeader("Want-Content-Digest")}}.

## Nachrichtenkörper-Informationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource, in dezimaler Byteanzahl.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschlichen Sprachen, die für das Publikum bestimmt sind, sodass ein Benutzer eine Differenzierung gemäß der eigenen bevorzugten Sprache vornehmen kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgesendeten Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage involviert ist.
- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxies, sowohl Forward- als auch Reverse-Proxies, und kann in den Anfrage-Headern und den Antwort-Headern erscheinen.

## Bereich-Anfragen

HTTP [Bereich-Anfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereich-Anfragen sind nützlich für Anwendungen wie Medien-Player, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die es dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereich-Anfragen unterstützt, und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereich-Anfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatibler Version der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo im vollständigen Nachrichtentext eine Teilnachricht hingehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen zu leiten. Hat denselben Wert wie das `meta` Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragenkontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen Menschen, der den anfordernden Benutzeragenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf dem der Server zuhört.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrer-Informationen in den {{HTTPHeader("Referer")}} Header aufgenommen werden sollten.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die den Peers im Netzwerkprotokoll ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Benutzeragenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der von einer Ressource unterstützten HTTP-Anfragemethoden auf.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungspolitik für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/steuern.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ([CSP](/de/docs/Glossary/CSP))
  - : Steuert Ressourcen, die der Benutzeragent für eine gegebene Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen überwachen, aber nicht durchsetzen. Diese Verletzungsberichte bestehen aus [JSON](/de/docs/Glossary/JSON) Dokumenten, die über eine HTTP `POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung der [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um den Einsatz von falsch ausgestellten Zertifikaten auf der Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus zum Erlauben und Ablehnen der Verwendung von Browserfunktionen im eigenen Frame einer Website und in {{htmlelement("iframe")}}s, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, die es Website-Besitzern ermöglicht, einen oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie Verletzungsberichte zu CSP, {{HTTPHeader("Cross-Origin-Opener-Policy")}} Berichte oder andere allgemeine Verletzungen zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS))
  - : Erzwingt Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt und dass er die {{CSP("upgrade-insecure-requests")}}-Richtlinie erfolgreich verarbeiten kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser erlaubt wird, eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} darzustellen.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine Cross-Domain-Policy-Datei (`crossdomain.xml`) erlaubt ist. Die Datei kann eine Richtlinie definieren, um Clients wie Adobe's Flash Player (jetzt obsolet), Adobe Acrobat, Microsoft Silverlight (jetzt obsolet) oder Apache Flex die Erlaubnis zu erteilen, Daten über Domänen hinweg zu verwalten, die anderenfalls aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt würden. Siehe die [Cross-domain-Policy-Datei-Spezifikation](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf) für weitere Informationen.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, obwohl sie keinen Nutzen für die Anwendung oder ihre Besucher bieten. Entfernen Sie diesen Header, um potenzielle Sicherheitslücken zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Cross-Site Scripting (XSS) Filtering.

### Abrufmetadata-Anfrage-Header

[Abrufmetadata-Anfrage-Header](/de/docs/Glossary/Fetch_metadata_request_header) bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage zugelassen werden sollte, basierend darauf, woher die Anfrage kommt und wie die Ressource genutzt wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt das Verhältnis zwischen dem Ursprung des Anforderungsinitiators und dem Zielursprung an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde. Es ist ein strukturierter Header, dessen Wert ein boolescher Wert ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein strukturierter Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anfrage-Header sind nicht _strikt_ "Abrufmetadata-Anfrage-Header", bieten aber ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die unmittelbare Verwendung durch den Benutzeragenten ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anfrage-Header, der in einer präventiven Anfrage gesendet wird, um eine Ressource während des Service-Worker-Starts zu [`fetch()`](/de/docs/Web/API/Window/fetch). Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einem normalen `fetch()`-Vorgang.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlermeldungen senden sollte, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlermeldungen senden sollte, wenn die [Reporting API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzeragent zu akzeptieren bereit ist.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht es dem Absender, am Ende einer gesponserten Nachricht zusätzliche Felder einzufügen.

## WebSockets

Header, die in der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der angibt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anfrage-Header mit einem Schlüssel, der überprüft, dass der Client ausdrücklich die Absicht hat, einen `WebSocket` zu öffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Sub-Protokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und listet die vom Server unterstützten Versionen auf.

## Weitere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Möglichkeiten zur Erreichung dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den alternativen Dienst zu identifizieren, der verwendet wird.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit zu der die Nachricht erzeugt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entität-Header-Feld bietet eine Möglichkeit zum Serialisieren eines oder mehrerer Verknüpfungen in HTTP-Headern. Es ist semantisch äquivalent zum HTML {{HTMLElement("link")}} Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzeragent warten soll, bevor eine erneute Anfrage gestellt wird.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert ein oder mehrere Metriken und Beschreibungen für den gegebenen Anfrage-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skripts](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verknüpft generierten Code mit einer [Quellkarte](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html).
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits hergestellte Client-/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) zu aktualisieren. Beispielsweise kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 zu aktualisieren, oder um eine HTTP- oder HTTPS-Verbindung in einen WebSocket zu verwandeln.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis über die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Client-Priorität anzugeben, oder in einer Antwort, wenn der Server die Anforderung neu priorisiert.

## Experimentelle Header

### Attribution-Reporting-Header

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konvertierungen zu messen – beispielsweise wenn ein Benutzer auf eine Anzeige klickt, die auf einer Website eingebettet ist, und dann weiter zur Kaufabwicklung beim Anbieter – und dann Berichte über diese Konvertierungen abzurufen. Dies geschieht ohne Rückgriff auf Drittanbieter-Tracking-Cookies, sondern unter Verwendung verschiedener Header, um **Quellen** und **Trigger** zu registrieren, die übereinstimmen, um eine Konvertierung anzugeben.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage berechtigt ist, an der Attribution-Berichterstattung teilzunehmen, indem entweder eine Attribution-Quelle oder ein Trigger registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Enthalten als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthalten hat, wird verwendet, um eine Attribution-Quelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Enthalten als Teil einer Antwort auf eine Anfrage, die einen `Attribution-Reporting-Eligible` Header enthalten hat, wird verwendet, um einen Attribution-Trigger zu registrieren.

### Client-Hinweise

HTTP [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anfrage-Headern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das, was für diese Bedingungen bereitgestellt wird, zu optimieren.

Server fordern proaktiv die Client-Hinweis-Header an, an denen sie aus dem Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann dann wählen, die angeforderten Header in nachfolgenden Anfragen einzuschließen.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise durch das `Accept-CH` Header-Feld oder ein gleichwertiges HTML `<meta>` Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut anzeigen.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hinweisen sind unten aufgelistet.

#### Benutzeragent Client-Hinweise

Die [UA Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anfrage-Header, die Informationen über den Benutzeragenten, die Plattform/Architektur, auf der er läuft, und die auf dem Benutzeragenten oder der Plattform eingestellten Benutzerpräferenzen bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Die Marke und Version des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Die Bitbreite der zugrunde liegenden CPU-Architektur des Benutzeragenten (z.B. "64" bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Formfaktoren des Benutzeragenten, die beschreiben, wie der Benutzer mit dem Benutzeragenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Vollständige Version für jede Marke in der Markenliste des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzeragent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Das Gerätemodell des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Betriebssystemversion des Benutzeragenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzer-Agent-binär in 32-Bit-Modus auf 64-Bit-Windows läuft.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers, weniger Animationen und Layout-Inhaltsverschiebungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anfrage-Header gibt die Präferenz des Benutzeragenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzeragent-Client-Hinweise stehen nicht in [fenced frames](/de/docs/Web/API/Fenced_frame_API) zur Verfügung, da sie von der Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) abhängen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der das Verhältnis von Bild-Gerät zu Pixelbestätigung (DPR) bei Anfragen, bei denen der Bildschirm {{HTTPHeader("DPR")}} Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der das Geräte-Pixel-Verhältnis des Clients bereitstellt (die Anzahl physischer Geräte-Pixel pro [CSS-Pixel](/de/docs/Glossary/CSS_pixel)).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Breite des Layout-Viewports des Clients in [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) bereitstellt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die gewünschte Ressourcenbreite in physischen Pixeln angibt (die intrinsische Größe eines Bildes).

#### Netzwerk Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, basierend auf der Benutzerwahl und der Netzwerkbandbreite und -latenz zu entscheiden, welche Informationen gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähr verfügbare Bandbreite der Verbindung des Clients mit dem Server, in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der [effektive Verbindungstyp](/de/docs/Glossary/effective_connection_type) ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Die Round-Trip-Time (RTT) auf Anwendungsschicht in Millisekunden, die auch die Server-Verarbeitungszeit umfasst. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzeragenten für eine Datenreduktion angibt.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten der Global Privacy Control (GPC), die den Servern mithilfe des {{HTTPHeader("Sec-GPC")}} Headers mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage gilt. Wird in Verbindung mit DNT genutzt.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, seine personenbezogenen Daten an Dritte zu verkaufen oder zu teilen.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, um Webanwendungen zu ermöglichen, ihre Ursprünge zu isolieren.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehlerbericht-Richtlinie zu deklarieren.

### Topics API

Die Topics API bietet Entwicklern einen Mechanismus zur Implementierung von Anwendungsfällen wie interessenbasierter Werbung (IBA).
Siehe die [Topics API](/de/docs/Web/API/Topics_API) Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse, die aus der URL der aufrufenden Website abgeleitet sind, als im Antworten einer Anfrage beobachtet zu markieren, die von einem [Feature, das die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anfrage-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Anzeigenplattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Weitere

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : Ein Client kann die gewünschte Push-Policy für eine Anfrage angeben, indem er ein [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) Header-Feld in der Anfrage sendet.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzugeben, verfügbare Signaturen zu nutzen, und um zu zeigen, welche Arten von Signaturen er unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Vordaten übermittelt wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugehörige [`Document`](/de/docs/Web/API/Document) in einem _origin-keyed [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolierung ermöglicht es Benutzeragenten, implementierungsspezifische Ressourcen für Agenten-Cluster zuzuweisen, wie z.B. Prozesse oder Threads, effizienter.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : Eine [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) definiert das Serververhalten in Bezug auf Push, wenn eine Anfrage bearbeitet wird.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um den Anmeldestatus anzugeben, also ob derzeit Benutzer im IdP im aktuellen Browser angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) genutzt.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur festgestellt und die Signatur aktualisiert werden kann.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Antwort-Headerfeldern, die in eine Signatur einbezogen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Spekulationsregel](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Spekulationsregel-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Nutzung verschiedener höherer Risikomodi zu ermöglichen. Zum Beispiel erfordert cross-origin, same-site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode` Wert von `credentialed-prerender`.

## Nicht-Standard-Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastenausgleichs-Server eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichs-Server zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastenausgleichs-Server zu verbinden.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, eine Funktion, bei der Browser proaktiv eine Domainsnamenauflösung sowohl für Links, die der Benutzer möglicherweise auswählt, als auch für URLs durchführen, die durch das Dokument referenziert werden, einschließlich Bilder, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite in den Suchmaschinenergebnissen indexiert werden soll. Der Header entspricht effektiv einem `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungspezifischer Header, der entlang der Anfrage-Antwort-Kette verschiedene Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, bei denen der `Cache-Control` Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Mitmachen

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder bestehende verbessern.

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## Siehe auch

- [Wikipedia-Seite zu Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Working Group](https://httpwg.org/specs/)
