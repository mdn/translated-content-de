---
title: HTTP-Header
short-title: Header
slug: Web/HTTP/Headers
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort zu übertragen. Ein HTTP-Header besteht aus seinem nicht groß- und kleinschreibungssensitiven Namen, gefolgt von einem Doppelpunkt (`:`), und dann von seinem Wert. {{Glossary("Whitespace")}} vor dem Wert wird ignoriert.

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-`-Präfix verwendet, aber diese Konvention wurde im Juni 2012 depreziert, wegen der Unannehmlichkeiten, die entstanden, als nicht standardmäßige Felder standardmäßig wurden, wie in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) beschrieben; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert war. Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), die "permanent" (standards-definiert), "provisional" (neu), "deprecated" (Verwendung nicht empfohlen) oder "obsolete" (nicht mehr in Gebrauch) sein können.

Header können entsprechend ihrer Kontexte gruppiert werden:

- {{Glossary("Request header", "Anforderungsheader")}}
  - : Enthalten weitere Informationen über die Ressource, die abgerufen werden soll, oder über den Client, der die Ressource anfordert.
- {{Glossary("Response header", "Antwortheader")}}
  - : Halten zusätzliche Informationen über die Antwort, wie ihren Standort oder den Server, der sie bereitstellt.
- {{Glossary("Representation header", "Repräsentationsheader")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder die angewandte Kodierung/Kompression.
- {{Glossary("Payload header","Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie sie von {{Glossary("Proxy_server", "Proxies")}} gehandhabt werden:

- End-to-End-Header
  - : Diese Header _müssen_ an den Endempfänger der Nachricht übertragen werden: der Server für eine Anfrage oder der Client für eine Antwort. Zwischenliegende Proxies müssen diese Header unverändert weiterleiten und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportebene Verbindung aussagekräftig und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-Hop-Header mithilfe des {{httpheader("Connection")}}-Headers festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzer-Agent beim Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden soll, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzer-Agent bei einem Proxy-Server zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Anweisungen für die Zwischenspeicherungsmechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z. B. Cookies, Speicher, Cache), die mit der anfordernden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Zeit, nach der die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber leichter in einigen Umgebungen zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Ein eindeutiger String, der die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der gegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum modifiziert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nicht nach dem angegebenen Datum modifiziert wurde. Dies garantiert die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit vorherigen oder um ein optimistisches Gleichzeitigkeitssystem zu implementieren, wenn bestehende Dokumente modifiziert werden.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungsheader zum Entscheiden abgeglichen werden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Steuert, wie lange eine persistente Verbindung offen bleiben soll.

## Inhaltsverhandlung

Für weitere Details siehe den Artikel zur [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} der Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Charset")}} {{deprecated_inline}}
  - : Teilt die vom Client unterstützten {{glossary("character encoding", "Zeichenkodierungen")}} mit. Es ist veraltet, da {{Glossary("UTF-8")}} allgegenwärtig geworden ist und die Verwendung des Headers das Fingerprinting des Clients erleichtert.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, üblicherweise ein [Kompressionsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewandt werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte immer darauf achten, keine explizite Benutzerwahl zu überschreiben (wie die Auswahl einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrage-Inhaltsverhandlungs_-Antwortheader, der die [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) angibt, die der Server in einer {{HTTPMethod("PATCH")}}-Anfrage versteht.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrage-Inhaltsverhandlungs_-Antwortheader, der die [Medientypen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) angibt, die der Server in einer {{HTTPMethod("POST")}}-Anfrage versteht.

## Steuerungselemente

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE), gibt die maximale Anzahl von Hops an, die die Anfrage machen kann, bevor sie an den Absender zurückgesandt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agenten.

## CORS

Für weitere Informationen siehe die [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offengelegt werden kann, wenn das Anmeldeinformations-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die Methoden an, die bei einer Preflight-Anfrage für den Zugriff auf die Ressource erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem sie ihre Namen auflisten.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Bei einer Preflight-Anfrage wird damit dem Server mitgeteilt, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Bei einer Preflight-Anfrage wird damit dem Server mitgeteilt, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, die Werte von Attributen sehen dürfen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen werden, die sonst aufgrund von Cross-Origin-Beschränkungen null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialog präsentieren soll.

## Integritäts-Prüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("digest")}} des Datenstroms von Oktetten, der in eine HTTP-Nachricht (den Nachrichtentext) eingebettet ist, abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Bietet eine {{Glossary("digest")}} einer Ressource.
    Siehe {{HTTPHeader("Content-Digest")}} und {{HTTPHeader("Repr-Digest")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("digest")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zum {{HTTPHeader("Content-Digest")}} berücksichtigt der Digest weder die {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Äußert den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header.
    Es ist das `Content-` Gegenstück zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Äußert den Wunsch nach einem {{HTTPHeader("Digest")}}-Header.
    Siehe stattdessen {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Äußert den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header.
    Es ist das `Repr-` Gegenstück zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahlen von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Kompressionsalgorithmus zu spezifizieren.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche Sprache(n) für das betreffende Publikum, sodass ein Benutzer nach seinen eigenen bevorzugten Sprachpräferenzen unterscheiden kann.
- {{HTTPHeader("Content-Location")}}
  - : Gibt eine alternative Adresse für die zurückgegebenen Daten an.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy in den Anfragepfad involviert ist.
- {{HTTPHeader("Via")}}
  - : Von Proxies hinzugefügt, sowohl Weiterleitungs- als auch Umkehr-Proxies, und kann in den Anfrageheadern und den Antwortheadern erscheinen.

## Bereichs-Anfragen

HTTP-[Bereichs-Anfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern. Bereichs-Anfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer ermöglichen, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichs-Anfragen unterstützt und, wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurücksenden soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichs-Anfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Verwendet, um das Herunterladen von zwei Bereichen aus einer inkompatiblen Version der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil einer Nachricht eingefügt werden soll.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Fordert den Browser auf, die Seite neu zu laden oder zu einer anderen zu wechseln. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv) an.

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfragenden Benutzer-Agenten steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers (für Virtual Hosting) und (optional) die TCP-Portnummer an, auf der der Server horcht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen in dem {{HTTPHeader("Referer")}}-Header mit den Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzprotokoll-Peers erlaubt, den Anwendungstyp, das Betriebssystem, den Softwarehersteller oder die Softwareversion des anfragenden Software-Benutzers-Agenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver zur Bearbeitung der Anfrage verwendet wird.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine eingebettete Richtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domains ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domains die Antwort auf die Ressourcen lesen, auf die dieser Header angewandt wird. Siehe auch den Artikel [CORP Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Kontrolliert, welche Ressourcen der Benutzer-Agent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie deren Auswirkungen beobachten, aber nicht durchsetzen. Diese Verstoßberichte bestehen aus {{Glossary("JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung der [Zertifikat-Transparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um die Verwendung von falsch ausgestellten Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Nutzung von Browserfunktionen auf der eigenen Website und in {{htmlelement("iframe")}}s, die eingebettet werden, zuzulassen oder zu verweigern.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Website-Eigentümern ermöglicht, einen oder mehrere Endpunkte zu spezifizieren, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das die Präferenz des Clients für eine verschlüsselte und authentifizierte Antwort ausdrückt, und dass er erfolgreich mit der {{CSP("upgrade-insecure-requests")}}-Richtlinie umgehen kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert das MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}}-Header angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine Cross-Domain-Policy-Datei (`crossdomain.xml`) erlaubt ist. Die Datei kann eine Richtlinie definieren, um Clients wie Adobes Flash Player (jetzt veraltet), Adobe Acrobat, Microsoft Silverlight (jetzt veraltet) oder Apache Flex die Erlaubnis zu erteilen, Daten über Domains hinweg zu handhaben, was sonst aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wäre. Weitere Informationen finden Sie in der [Cross-Domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf).
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über diese, während es keinen Nutzen für die Anwendung oder ihre Besucher bietet. Entfernen Sie diesen Header, um potenzielle Schwachstellen nicht offenzulegen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch metadata request header", "Fetch-Metadaten-Anforderungsheader")}} liefern Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt sein sollte, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprung eines Anforderungsinitiators und dem Ziel seines Ziels an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es handelt sich um einen strukturierten Header, dessen Wert ein Boolean ist, sodass mögliche Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadaten-Anforderungsheader", liefern jedoch ähnlich Informationen über den Kontext, in dem eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als die unmittelbare Verwendung durch den Benutzer-Agenten ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, was darauf hinweist, dass die Ressource vorausschauend für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der in einer vorauseilenden Anfrage an {{domxref("Window/fetch", "fetch()")}} gesendet wird, um eine Ressource während der Service-Worker-Initialisierung abzurufen. Der Wert, der mit {{domxref("NavigationPreloadManager.setHeaderValue()")}} festgelegt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource als in einem normalen `fetch()`-Vorgang zurückgegeben werden sollte.

## Server-gesendete Ereignisse

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlermeldungen senden soll, wenn die [Reporting-API](/de/docs/Web/API/Reporting_API) verwendet wird.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um Serverendpunkte anzugeben, an die der Browser Warnungen und Fehlermeldungen senden soll, wenn die [Reporting-API](/de/docs/Web/API/Reporting_API) verwendet wird.

## Übertragungscodierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Codierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Übertragungscodierungen an, die der Benutzer-Agent bereit ist zu akzeptieren.
- {{HTTPHeader("Trailer")}}
  - : Erlaubt dem Absender, zusätzliche Felder am Ende einer gestückelten Nachricht zu inkludieren.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwortheader, der anzeigt, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten zeigt es die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungsheader, der einen Schlüssel enthält, der bestätigt, dass der Client explizit die Absicht hat, eine `WebSocket`-Verbindung zu eröffnen.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen zeigt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen zeigt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Sonstiges

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege zur Erreichung dieses Dienstes aufzulisten.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den aktuell verwendeten alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält Datum und Uhrzeit, zu der die Nachricht erzeugt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entity-Header-Feld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zum HTML-{{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Kommuniziert eine oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-Antwort-Zyklus.
- `Service-Worker-Allowed`
  - : Wird verwendet, um die [Pfadeinschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skriptes](https://w3c.github.io/ServiceWorker/#service-worker-script-response) inkludiert wird.
- {{HTTPHeader("SourceMap")}}
  - : Verknüpft generierten Code mit einer [Source Map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html).
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1 (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Zum Beispiel kann er von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 aufzurüsten oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket.
- {{HTTPHeader("Priority")}}
  - : Gibt einen Hinweis auf die Priorität einer bestimmten Anforderungsressource auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Clientpriorität anzugeben, oder in einer Antwort, wenn der Server sich entscheidet, die Anforderung anders zu priorisieren.

## Experimentelle Header

### Headers zur Attributions-Berichterstattung

Die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht es Entwicklern, Konversionen zu messen - zum Beispiel, wenn ein Benutzer auf eine in eine Website eingebettete Anzeige klickt und dann auf der Website des Anbieters den Artikel kauft - und dann Berichte über diese Konversionen zu erhalten. Es tut dies ohne die Verwendung von Drittanbieter-Tracking-Cookies und verwendet stattdessen verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die darauf hindeuten, dass eine Konversion stattgefunden hat.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzuzeigen, dass die Antwort auf die aktuelle Anfrage für die Attributions-Berichterstattung geeignet ist, indem entweder eine Attributionsquelle oder ein Auslöser registriert wird.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage inkludiert, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um eine Attributionsquelle zu registrieren.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage inkludiert, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um einen Attributionsauslöser zu registrieren.

### Client-Hints

HTTP-[Client-Hints](/de/docs/Web/HTTP/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über das Client wie den Gerätetyp und Netzwerkbedingungen bieten und es Servern ermöglichen, das, was unter diesen Bedingungen bereitgestellt wird, zu optimieren.

Server fordern proaktiv die Client-Hint-Header an, an denen sie vom Client interessiert sind, indem sie {{HTTPHeader("Accept-CH")}} verwenden. Der Client kann sich dann entscheiden, die angeforderten Header bei nachfolgenden Anfragen zu inkludieren.

- {{HTTPHeader("Accept-CH")}}
  - : Server können Unterstützung für Client-Hints über das `Accept-CH`-Headerfeld oder ein äquivalentes HTML-`<meta>`-Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HttpHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Die verschiedenen Kategorien von Client-Hints sind unten aufgeführt.

#### Benutzer-Agent-Client-Hints

Die [UA-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzer-Agenten, die Plattform/Architektur, auf der er läuft, und Benutzereinstellungen, die auf dem Benutzer-Agenten oder der Plattform gesetzt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Branding und Version des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Die zugrunde liegende Plattformarchitektur des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Die Bittigkeit der zugrunde liegenden CPU-Architektur des Benutzer-Agenten (zum Beispiel "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : Die Formfaktoren des Benutzer-Agenten, die beschreiben, wie der Benutzer mit dem Benutzer-Agenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Die vollständige Versionszeichenfolge des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Volle Version für jede Marke in der Markenliste des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Der Benutzer-Agent läuft auf einem mobilen Gerät oder bevorzugt im Allgemeinen eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Das Gerätemodell des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Das zugrunde liegende Betriebssystem/Plattform des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Die zugrunde liegende Betriebssystemversion des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob der Benutzer-Agent in 32-Bit-Modus unter 64-Bit-Windows läuft oder nicht.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Die Präferenz des Benutzers, weniger Animationen und Inhaltslayout-Änderungen zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungsheader zeigt die Präferenz des Benutzer-Agenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hints sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie sich auf die [Zugriffsrechtspolitik](/de/docs/Web/HTTP/Permissions_Policy) stützen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader wird verwendet, um das Bild-Geräte-zu-Pixel-Verhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm-{{HTTPHeader("DPR")}}-Client-Hint verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefährer Betrag des verfügbaren RAM-Speichers des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der das Pixelverhältnis des Client-Geräts (die Anzahl der physischen Gerät-Pixel für jeden {{Glossary("CSS pixel")}}) bereitstellt.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die Layoutansichtsfensterbreite des Clients in {{Glossary("CSS pixel","CSS pixel")}} an.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader gibt die gewünschte Ressourcenbreite in physischen Pixeln an (die intrinsische Größe eines Bildes).

#### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, auszuwählen, welche Informationen basierend auf der Benutzerwahl sowie der Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbit/s. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective connection type")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Rundlaufzeit (RTT) der Anwendungsschicht in Millisekunden, die die Serverbearbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Eine Zeichenfolge `on`, die die Präferenz des Benutzer-Agenten für reduzierten Datenverbrauch angibt.

### Privatsphäre

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die Nachverfolgungspräferenz des Benutzers angibt (Do Not Track).
    Stattdessen wird die globale Datenschutzkontrolle (GPC) bevorzugt, die Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über {{domxref("navigator.globalPrivacyControl")}} zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwortheader, der den Nachverfolgungsstatus angibt, der auf die entsprechende Anfrage angewandt wurde. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer zustimmt, dass eine Website oder ein Dienstleister ihre persönlichen Informationen an Dritte verkauft oder weitergibt.

### Sicherheit

- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Bietet einen Mechanismus, mit dem Webanwendungen ihre Ursprünge isolieren können.

### Server-gesendete Ereignisse

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Netzwerkfehler-Bericht-Richtlinie zu deklarieren.

### Topics-API

Die Topics-API bietet einen Mechanismus für Entwickler, um Anwendungsfälle wie interessenbasierte Werbung (IBA) zu implementieren. Details zur [Topics API](/de/docs/Web/API/Topics_API) finden Sie in der Dokumentation.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwortheader, der verwendet wird, um die beobachteten Interessenthemen zu markieren, die aus der URL der aufrufenden Site abgeleitet wurden, so wie sie in der Antwort auf eine durch eine [Funktion, die die Topics-API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generierte Anfrage beobachtet wurden.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungsheader, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform zur Auswahl einer personalisierten Anzeige verwendet werden, die angezeigt werden soll.

### Sonstiges

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : Ein Client kann die gewünschte Push-Politik für eine Anfrage angeben, indem er ein [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1)-Headerfeld in der Anfrage sendet.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header)-Headerfeld senden, um die Absicht anzuzeigen, von bereitstehenden Signaturen zu profitieren, und um anzugeben, welche Arten von Signaturen es unterstützt.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS-Erstdaten übertragen wurde.
- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwortheader, der verwendet wird, um anzugeben, dass das zugehörige {{domxref("Document")}} in eine _herkunftsschlüsselnde [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es Benutzer-Agenten, für Agenten-Cluster implementierungsspezifische Ressourcen wie Prozesse oder Threads effizienter zuzuweisen.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : Eine [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) definiert das Verhalten des Servers bezüglich des Pushs beim Verarbeiten einer Anfrage.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwortheader, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um seinen Anmeldestatus anzugeben, also ob irgendwelche Benutzer bei dem IdP im aktuellen Browser angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM-API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Das [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header)-Headerfeld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität dieser Signatur bestimmt und aktualisiert wird.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header)-Headerfeld identifiziert eine geordnete Liste von Antwortheadern, die in eine Signatur eingeschlossen werden sollen.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen mit JSON-Spekulationsregel-Definitionen verweisen. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln dem Spekulationsregel-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Festgelegt von einem Navigationsziel, um die Verwendung verschiedener höherer Risiko-Lademodi zu ermöglichen. Beispielsweise erfordert das Cross-Origin, gleiche Site [Prerendering](/de/docs/Web/API/Speculation_Rules_API#using_prerendering) einen `Supports-Loading-Mode`-Wert von `credentialed-prerender`.

## Nicht-Standard-Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die Ursprungs-IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer mit einem Webserver verbunden ist.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der vom Client verwendet wurde, um eine Verbindung mit Ihrem Proxy oder Load Balancer herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das vom Client verwendet wurde, um eine Verbindung mit Ihrem Proxy oder Load Balancer herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Prefetching, eine Funktion, bei der Browser proaktiv eine Namensauflösung für Domänen sowohl für Links durchführen, denen der Benutzer möglicherweise folgt, als auch für URLs für im Dokument referenzierte Elemente, einschließlich Bilder, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)-HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinenergebnisse indexiert werden soll. Der Header ist im Wesentlichen gleichwertig mit `<meta name="robots" content="…">`.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der überall entlang der Anforderungs-Antwort-Kette verschiedene Effekte haben kann. Wird für die Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, wenn der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Beteiligung

Sie können helfen, indem Sie [neue Einträge schreiben](/de/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) oder die bestehenden verbessern.

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## Siehe auch

- [Wikipedia-Seite über die Liste der HTTP-Header](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
