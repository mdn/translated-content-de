---
title: HTTP headers
short-title: Headers
slug: Web/HTTP/Headers
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

**HTTP headers** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer HTTP-Anfrage oder -Antwort zu übermitteln. Ein HTTP-Header besteht aus seinem nicht-beachtungssensitiven Namen, gefolgt von einem Doppelpunkt (`:`), und dann seinem Wert. {{Glossary("Whitespace")}} vor dem Wert wird ignoriert.

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-`-Präfix verwendet, aber diese Konvention wurde im Juni 2012 aufgrund der Unannehmlichkeiten, die sie verursachte, als nicht standardmäßige Felder zu Standardfeldern wurden, in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) abgeschafft; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, deren ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), der "permanent" (standardsdefiniert), "provisorisch" (neu), "veraltet" (Verwendung nicht empfohlen) oder "obsolet" (nicht mehr in Gebrauch) sein kann.

Header können nach ihrem Kontext gruppiert werden:

- {{Glossary("Request header", "Request headers")}}
  - : Enthalten mehr Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response header", "Response headers")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie etwa deren Standort oder über den Server, der diese bereitstellt.
- {{Glossary("Representation header", "Representation headers")}}
  - : Enthalten Informationen über den Inhalt der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) oder verwendete Kodierung/Kompression.
- {{Glossary("Payload header","Payload headers")}}
  - : Enthalten darstellungsunabhängige Informationen über die Nutzdaten, einschließlich Inhaltslänge und verwendeter Kodierung für den Transport.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} sie behandeln:

- End-to-end-Header
  - : Diese Header _müssen_ an den endgültigen Empfänger der Nachricht übermittelt werden: den Server bei einer Anfrage oder den Client bei einer Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-hop-Header
  - : Diese Header sind nur für eine einzelne Transportverbindung von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Beachten Sie, dass nur Hop-by-hop-Header mithilfe des {{httpheader("Connection")}}-Headers festgelegt werden dürfen.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource verwendet werden sollte.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen User-Agent bei einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die zum Zugriff auf eine Ressource hinter einem Proxyserver verwendet werden sollte.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen User-Agent bei einem Proxyserver zu authentifizieren.

## Zwischenspeicherung

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Zwischenspeicherungsmechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browserdaten (z.B. Cookies, Speicher, Cache), die mit der anfragenden Website verknüpft sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach dem die Antwort als veraltet betrachtet wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln diktieren, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browsercache gespeichert werden sollte.

## Bedingte Anfragen

- {{HTTPHeader("Last-Modified")}}
  - : Das letzte Änderungsdatum der Ressource, das verwendet wird, um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber leichter in einigen Umgebungen zu berechnen. Bedingte Anfragen, die {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenfolge, die die Version der Ressource identifiziert. Bedingte Anfragen, die {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden, nutzen diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (bei sicheren Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine existiert.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem gegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem gegebenen Datum nicht geändert wurde. Dies sorgt für die Kohärenz eines neuen Fragments eines spezifischen Bereichs mit vorherigen, oder um ein optimistisches Nebenläufigkeitskontrollsystem beim Ändern bestehender Dokumente zu implementieren.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anfrage-Header abgeglichen werden sollen, um zu entscheiden, ob eine im Cache gespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver anzufordern.

## Verbindungsmanagement

- {{HTTPHeader("Connection")}}
  - : Kontrolliert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Kontrolliert, wie lange eine persistente Verbindung offen bleiben sollte.

## Inhaltsverhandlung

Für weitere Informationen, siehe den Artikel über [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Teilt dem Server die {{Glossary("MIME_type", "Typen")}} mit, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Charset")}} {{deprecated_inline}}
  - : Gibt die vom Client unterstützten {{glossary("character encoding", "Zeichencodierungen")}} an. Es ist veraltet, weil {{Glossary("UTF-8")}} allgegenwärtig geworden ist und die Verwendung des Headers das Fingerprinting des Clients erleichtert.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Teilt dem Server die menschliche Sprache mit, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht notwendigerweise vollständig unter der Kontrolle des Benutzers: der Server sollte immer darauf achten, nicht eine explizite Benutzerwahl (wie die Auswahl einer Sprache aus einer Dropdown-Liste) zu überschreiben.
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Anfrageinhaltsverhandlung_ Antwortheader, der angibt, welcher [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server in einer {{HTTPMethod("PATCH")}} Anfrage verstanden wird.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Anfrageinhaltsverhandlung_ Antwortheader, der angibt, welcher [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) vom Server in einer {{HTTPMethod("POST")}} Anfrage verstanden wird.

## Steuerungen

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage ordnungsgemäß zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Bei Verwendung von [`TRACE`](/de/docs/Web/HTTP/Methods/TRACE), gibt die maximale Anzahl von Hops an, die die Anfrage tun kann, bevor sie an den Absender reflektiert wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den User-Agent.

## CORS

Weitere Informationen finden Sie in der [CORS-Dokumentation](/de/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage beim gesetzten Anmeldeinformationen-Flag offengelegt werden kann.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Voranfrage")}} verwendet, um anzugeben, welche HTTP-Header verwendet werden können, wenn die tatsächliche Anfrage gestellt wird.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Spezifiziert die Methoden, die beim Zugriff auf die Ressource als Antwort auf eine Voranfrage erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort geteilt werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Voranfrage zwischengespeichert werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird beim Stellen einer Voranfrage verwendet, um dem Server mitzuteilen, welche HTTP-Header bei der tatsächlichen Anfrage verwendet werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird beim Stellen einer Voranfrage verwendet, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Methods) bei der tatsächlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt Ursprünge an, denen es erlaubt ist, Werte von Attributen abzurufen, die über Funktionen der [Ressourcen-Timing-API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die sonst aufgrund von Ursprungs-Beschränkungen als Null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden soll und der Browser ein "Speichern unter"-Dialogfeld anzeigen soll.

## Integritätsprüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("Digest")}} des Streams von Oktetten, die in einer HTTP-Nachricht umrahmt sind (der Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Bietet eine {{Glossary("Digest")}} der Ressource. Siehe {{HTTPHeader("Content-Digest")}} und {{HTTPHeader("Repr-Digest")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("Digest")}} der ausgewählten Repräsentation der Zielressource vor der Übertragung. Anders als bei {{HTTPHeader("Content-Digest")}}, berücksichtigt der Digest weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch an, einen {{HTTPHeader("Content-Digest")}}-Header zu erhalten. Es ist das `Content-`-Analogon zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Digest")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Wunsch an, einen {{HTTPHeader("Digest")}}-Header zu erhalten. Siehe stattdessen {{HTTPHeader("Want-Content-Digest")}} und {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch an, einen {{HTTPHeader("Repr-Digest")}}-Header zu erhalten. Es ist das `Repr-`-Analogon zu {{HTTPHeader("Want-Content-Digest")}}.

## Informationen zum Nachrichteninhalt

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in Dezimalzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Wird verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die für die Zielgruppe vorgesehene menschliche Sprache(n), sodass sie es einem Benutzer ermöglicht, je nach den eigenen bevorzugten Sprachen zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Standort für die zurückgegebenen Daten an.

## Proxys

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite der Proxyserver, die verändert oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies hinzugefügt, sowohl vorwärts- als auch rückwärts-Proxy-Verbindungen, und kann sowohl in den Anfrageheadern als auch in den Antwortheadern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die random Zugriff unterstützen, Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Nutzer das Pausieren und Fortsetzen eines Downloads ermöglichen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Gibt an, ob der Server Bereichsanfragen unterstützt und, falls ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn das angegebene ETag oder Datum mit der entfernten Ressource übereinstimmt. Verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teilnachricht gehört.

## Weiterleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite weitergeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Leitet den Browser an, die Seite neu zu laden oder umzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#http-equiv).

## Anfragekontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen Benutzer, der das anfordernde Benutzer-Agents steuert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für virtuelles Hosting) und (optional) die TCP-Portnummer, auf der der Server zuhört.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite verfolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Bestimmt, welche Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Peers des Netzwerkprotokolls ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwarehersteller oder die Softwareversion des anfordernden Software-Benutzeragents zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge von HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu bearbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht es einem Server, eine Einbettungsrichtlinie für ein bestimmtes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch den [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzeragent für eine bestimmte Seite laden darf.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht es Webentwicklern, mit Richtlinien zu experimentieren, indem sie ihre Auswirkungen überwachen, jedoch nicht durchsetzen. Diese Verstöße sind Berichte, die aus {{Glossary("JSON")}}-Dokumenten bestehen, die über eine HTTP-`POST`-Anforderung an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, sich für die Berichterstattung und Durchsetzung von [Zertifikat-Transparenz](/de/docs/Web/Security/Certificate_Transparency) zu entscheiden, um den Einsatz fehlgeleiteter Zertifikate für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus zum Erlauben und Verweigern der Nutzung von Browserfunktionen im eigenen Rahmen einer Website und in {{htmlelement("iframe")}}, die sie einbettet.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwortheader, der es Website-Eigentümern ermöglicht, ein oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere allgemeine Verstöße zu empfangen.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Erzwingt Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, das das Verlangen des Clients nach einer verschlüsselten und authentifizierten Antwort ausdrückt und dass er in der Lage ist, die {{CSP("upgrade-insecure-requests")}}-Direktive erfolgreich zu behandeln.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}} angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Gibt an, ob eine Cross-Domain-Richtliniendatei (`crossdomain.xml`) erlaubt ist. Die Datei kann eine Richtlinie definieren, um Clients, wie Adobes Flash Player (jetzt veraltet), Adobe Acrobat, Microsoft Silverlight (jetzt veraltet) oder Apache Flex, zu erlauben, Daten über Domänen hinweg zu verarbeiten, was sonst aufgrund der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) eingeschränkt wäre. Siehe die [Cross-domain Policy File Specification](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf) für weitere Informationen.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen darüber, während es keinen Nutzen für die Anwendung oder ihre Besucher bietet. Entfernen Sie diesen Header, um potenzielle Sicherheitslücken zu vermeiden.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert die Filterung von Cross-Site-Scripting.

### Fetch-Metadaten-Anforderungsheader

{{Glossary("Fetch metadata request header", "Fetch-Metadaten-Anforderungsheader")}} bieten Informationen über den Kontext, aus dem die Anfrage stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden soll, basierend darauf, woher sie kam und wie die Ressource genutzt wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt die Beziehung zwischen dem Ursprungsinitiator der Anfrage und dem Zielursprung an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anfrage an einen Server. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde. Es handelt sich um einen strukturierten Header, dessen Wert ein boolescher Wert ist, sodass die möglichen Werte `?0` für false und `?1` für true sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es handelt sich um einen strukturierten Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", bieten jedoch ähnliche Informationen über den Kontext, wie eine Ressource genutzt wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes ist als der sofortige Gebrauch durch den Benutzeragent. Der Header hat derzeit einen möglichen Wert, `prefetch`, der angibt, dass die Ressource präventiv für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungsheader, der bei präventiver Anfrage an {{domxref("Window/fetch", "fetch()")}} einer Ressource während des Boots eines Service-Workers gesendet wird. Der Wert, der mit {{domxref("NavigationPreloadManager.setHeaderValue()")}} gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als in einem normalen `fetch()`-Vorgang.
