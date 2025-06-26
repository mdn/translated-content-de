---
title: HTTP-Header
short-title: Headers
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{HTTPSidebar}}

**HTTP-Header** ermöglichen es dem Client und dem Server, zusätzliche Informationen mit einer Nachricht in einer Anfrage oder Antwort zu übermitteln.
In HTTP/1.X ist ein Header ein nicht auf Groß- und Kleinschreibung beachtender Name, gefolgt von einem Doppelpunkt, dann optionalem Leerraum, der ignoriert wird, und schließlich seinem Wert (zum Beispiel: `Allow: POST`).
In HTTP/2 und darüber hinaus werden Header in Kleinbuchstaben angezeigt, wenn sie in Entwicklerwerkzeugen betrachtet werden (`accept: */*`), und mit einem Doppelpunkt für eine spezielle Gruppe von [Pseudo-Headern](/de/docs/Web/HTTP/Guides/Messages#pseudo-headers) versehen (`:status: 200`).
Weitere Informationen zur Syntax in jeder Protokollversion finden Sie auf der Seite [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages).

Benutzerdefinierte proprietäre Header wurden historisch mit einem `X-`-Präfix verwendet, aber diese Konvention wurde 2012 aufgrund der Unannehmlichkeiten, die es verursachte, als nicht standardmäßige Felder in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) standardisiert wurden, aufgegeben; andere sind im [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) aufgeführt, dessen ursprünglicher Inhalt in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) definiert wurde.
Das IANA-Register listet Header auf, einschließlich [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Header können nach ihren Kontexten gruppiert werden:

- {{Glossary("Request_header", "Request-Header")}}
  - : Enthalten weitere Informationen über die abzurufende Ressource oder über den Client, der die Ressource anfordert.
- {{Glossary("Response_header", "Response-Header")}}
  - : Enthalten zusätzliche Informationen über die Antwort, wie ihren Standort oder über den Server, der sie bereitstellt.
- {{Glossary("Representation_header", "Representation-Header")}}
  - : Enthalten Informationen über den Körper der Ressource, wie ihren [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) oder die angewendete Kodierung/Kompression.
- {{Glossary("Payload_header", "Payload-Header")}}
  - : Enthalten darstellungsunabhängige Informationen über Nutzdaten, einschließlich Inhaltslänge und der für den Transport verwendeten Kodierung.

Header können auch danach gruppiert werden, wie {{Glossary("Proxy_server", "Proxies")}} mit ihnen umgehen:

- End-to-End-Header
  - : Diese Header _müssen_ an den Endempfänger der Nachricht übermittelt werden: den Server für eine Anfrage oder den Client für eine Antwort. Zwischenproxies müssen diese Header unverändert weiterleiten, und Caches müssen sie speichern.
- Hop-by-Hop-Header
  - : Diese Header sind nur für eine einzelne Transportschichtverbindung von Bedeutung und _dürfen nicht_ von Proxies weitergeleitet oder zwischengespeichert werden. Hinweis: Nur Hop-by-Hop-Header können mit dem {{HTTPHeader("Connection")}}-Header festgelegt werden.

## Authentifizierung

- {{HTTPHeader("WWW-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource zuzugreifen.
- {{HTTPHeader("Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzer-Agenten gegenüber einem Server zu authentifizieren.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Definiert die Authentifizierungsmethode, die verwendet werden sollte, um auf eine Ressource hinter einem Proxy-Server zuzugreifen.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Enthält die Anmeldedaten, um einen Benutzer-Agenten gegenüber einem Proxy-Server zu authentifizieren.

## Caching

- {{HTTPHeader("Age")}}
  - : Die Zeit in Sekunden, die das Objekt in einem Proxy-Cache verbracht hat.
- {{HTTPHeader("Cache-Control")}}
  - : Direktiven für Caching-Mechanismen in sowohl Anfragen als auch Antworten.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Löscht Browsing-Daten (z. B. Cookies, Speicher, Cache), die mit der anfragenden Website verbunden sind.
- {{HTTPHeader("Expires")}}
  - : Das Datum/die Uhrzeit, nach der die Antwort als veraltet angesehen wird.
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Gibt eine Reihe von Regeln an, die definieren, wie sich die Abfrageparameter einer URL auf die Cache-Abstimmung auswirken werden. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

## Konditionale Header

- {{HTTPHeader("Last-Modified")}}
  - : Das Datum der letzten Änderung der Ressource, verwendet um mehrere Versionen derselben Ressource zu vergleichen. Es ist weniger genau als {{HTTPHeader("ETag")}}, aber in einigen Umgebungen einfacher zu berechnen. Bedingte Anfragen mit {{HTTPHeader("If-Modified-Since")}} und {{HTTPHeader("If-Unmodified-Since")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("ETag")}}
  - : Eine eindeutige Zeichenkette, die die Version der Ressource identifiziert. Bedingte Anfragen mit {{HTTPHeader("If-Match")}} und {{HTTPHeader("If-None-Match")}} verwenden diesen Wert, um das Verhalten der Anfrage zu ändern.
- {{HTTPHeader("If-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource mit einem der angegebenen ETags übereinstimmt.
- {{HTTPHeader("If-None-Match")}}
  - : Macht die Anfrage bedingt und wendet die Methode nur an, wenn die gespeicherte Ressource _nicht_ mit einem der angegebenen ETags übereinstimmt. Dies wird verwendet, um Caches zu aktualisieren (für sichere Anfragen) oder um das Hochladen einer neuen Ressource zu verhindern, wenn bereits eine vorhanden ist.
- {{HTTPHeader("If-Modified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum geändert wurde. Dies wird verwendet, um Daten nur dann zu übertragen, wenn der Cache veraltet ist.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Macht die Anfrage bedingt und erwartet, dass die Ressource nur übertragen wird, wenn sie nach dem angegebenen Datum nicht geändert wurde. Dies stellt die Kohärenz eines neuen Fragments eines bestimmten Bereichs mit vorhergehenden sicher oder implementiert ein optimistisches Synchronisationskontrollsystem, wenn bestehende Dokumente geändert werden.
- {{HTTPHeader("Vary")}}
  - : Bestimmt, wie Anforderungs-Header abgeglichen werden sollen, um zu entscheiden, ob eine zwischengespeicherte Antwort verwendet werden kann, anstatt eine neue vom Ursprungsserver zu erfragen.

## Verbindungsverwaltung

- {{HTTPHeader("Connection")}}
  - : Kontrolliert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt.
- {{HTTPHeader("Keep-Alive")}}
  - : Kontrolliert, wie lange eine persistente Verbindung geöffnet bleiben soll.

## Inhaltsaushandlung

Für weitere Details lesen Sie den Artikel zur [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informiert den Server über die {{Glossary("MIME_type", "Typen")}} von Daten, die zurückgesendet werden können.
- {{HTTPHeader("Accept-Encoding")}}
  - : Der Kodierungsalgorithmus, normalerweise ein [Komprimierungsalgorithmus](/de/docs/Web/HTTP/Guides/Compression), der auf die zurückgesendete Ressource angewendet werden kann.
- {{HTTPHeader("Accept-Language")}}
  - : Informiert den Server über die menschliche Sprache, die der Server zurücksenden soll. Dies ist ein Hinweis und liegt nicht unbedingt vollständig unter der Kontrolle des Benutzers: Der Server sollte darauf achten, eine explizite Benutzerwahl nicht zu überschreiben (wie das Auswählen einer Sprache aus einem Dropdown-Menü).
- {{HTTPHeader("Accept-Patch")}}
  - : Ein _Request Content Negotiation_-Antwort-Header, der angibt, welcher [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("PATCH")}}-Anfrage verstehen kann.
- {{HTTPHeader("Accept-Post")}}
  - : Ein _Request Content Negotiation_-Antwort-Header, der angibt, welcher [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Server in einer {{HTTPMethod("POST")}}-Anfrage verstehen kann.

## Steuerung

- {{HTTPHeader("Expect")}}
  - : Gibt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage richtig zu bearbeiten.
- {{HTTPHeader("Max-Forwards")}}
  - : Gibt bei der Verwendung von [`TRACE`](/de/docs/Web/HTTP/Reference/Methods/TRACE) die maximale Anzahl von Hops an, die die Anfrage durchlaufen darf, bevor sie zum Absender zurückgespiegelt wird.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Enthält gespeicherte [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies), die zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}}-Header gesendet wurden.
- {{HTTPHeader("Set-Cookie")}}
  - : Sendet Cookies vom Server an den Benutzer-Agenten.

## CORS

Für weitere Informationen lesen Sie die [CORS-Dokumentation](/de/docs/Web/HTTP/Guides/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Antwort auf die Anfrage offen gelegt werden kann, wenn das Anmeldeinformationen-Flag wahr ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Wird als Antwort auf eine {{Glossary("Preflight_request", "Preflight-Anfrage")}} verwendet, um anzuzeigen, welche HTTP-Header bei der eigentlichen Anforderung verwendet werden dürfen.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt die erlaubten Methoden beim Zugriff auf die Ressource als Antwort auf eine Preflight-Anfrage an.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Antwort freigegeben werden kann.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche Header als Teil der Antwort offengelegt werden können, indem ihre Namen aufgelistet werden.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Ergebnisse einer Preflight-Anfrage im Cache gehalten werden können.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche HTTP-Header verwendet werden, wenn die eigentliche Anforderung gestellt wird.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Wird verwendet, wenn eine Preflight-Anfrage gestellt wird, um dem Server mitzuteilen, welche [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) bei der eigentlichen Anfrage verwendet wird.
- {{HTTPHeader("Origin")}}
  - : Gibt an, woher ein Abruf stammt.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Gibt die Ursprünge an, die berechtigt sind, Werte von Attributen zu sehen, die über Funktionen der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) abgerufen wurden, die sonst aufgrund von Cross-Origin-Beschränkungen als null gemeldet würden.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Gibt an, ob die übertragene Ressource inline angezeigt werden soll (Standardverhalten ohne den Header) oder ob sie wie ein Download behandelt werden sollte und der Browser einen "speichern unter" Dialog präsentieren soll.

## Integritätsprüfsummen

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("hash_function", "Prüfsumme")}} des Stroms von Oktetten, die in einer HTTP-Nachricht eingerahmt sind (den Nachrichteninhalt), abhängig von {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Bietet eine {{Glossary("hash_function", "Prüfsumme")}} der ausgewählten Darstellung der Zielressource vor der Übertragung.
    Im Gegensatz zu {{HTTPHeader("Content-Digest")}} berücksichtigt die Prüfsumme weder {{HTTPHeader("Content-Encoding")}} noch {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Content-Digest")}}-Header an.
    Es ist das `Content-` Analoge zu {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : Gibt den Wunsch nach einem {{HTTPHeader("Repr-Digest")}}-Header an.
    Es ist das `Repr-` Analoge zu {{HTTPHeader("Want-Content-Digest")}}.

## Integritätspolitik

- {{HTTPHeader("Integrity-Policy")}}
  - : Stellt sicher, dass alle Ressourcen, die vom Benutzer-Agenten geladen werden (einer bestimmten Art), [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien erfüllen.
- {{HTTPHeader("Integrity-Policy-Report-Only")}}
  - : Berichtet über Ressourcen, die der Benutzer-Agent lädt, die [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity)-Garantien verletzen würden, wenn die Integritätspolitik durchgesetzt würde (mit dem `Integrity-Policy`-Header).

## Nachrichtenkörperinformationen

- {{HTTPHeader("Content-Length")}}
  - : Die Größe der Ressource in dezimaler Anzahl von Bytes.
- {{HTTPHeader("Content-Type")}}
  - : Gibt den Medientyp der Ressource an.
- {{HTTPHeader("Content-Encoding")}}
  - : Verwendet, um den Komprimierungsalgorithmus anzugeben.
- {{HTTPHeader("Content-Language")}}
  - : Beschreibt die menschliche(n) Sprache(n), die für das Publikum bestimmt sind, sodass es einem Benutzer erlaubt, nach den eigenen bevorzugten Sprachen zu differenzieren.
- {{HTTPHeader("Content-Location")}}
  - : Gibt einen alternativen Speicherort für die zurückgegebenen Daten an.

## Präferenzen

Präferenzen können von Clients in Anfragen gesendet werden, um optionale Verhaltensweisen für Anfragen und Antworten anzuzeigen.
Die Serverantwort kann angeben, ob eine Präferenz angewendet wird, in Fällen, in denen es ansonsten für den Client zweideutig wäre.
Browser verfügen über keine native Unterstützung, um Präferenzen über diese Header zu senden; sie werden in benutzerdefinierten, implementationsspezifischen Clients verwendet.

- {{HTTPHeader("Prefer")}}
  - : Gibt Präferenzen für bestimmte Serververhalten während der Anfrageverarbeitung an. Beispielsweise kann es minimale Antwortinhalte (`return=minimal`) oder asynchrone Verarbeitung (`respond-async`) anfordern. Der Server verarbeitet die Anfrage normal, wenn der Header nicht unterstützt wird.
- {{HTTPHeader("Preference-Applied")}}
  - : Informiert den Client darüber, welche Präferenzen, die im `Prefer`-Header angegeben wurden, vom Server angewendet wurden. Es ist ein reiner Antwort-Header, der Transparenz über die Präferenzbehandlung bietet.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy im Anforderungspfad beteiligt ist.
- {{HTTPHeader("Via")}}
  - : Wird von Proxies hinzugefügt, sowohl von Forward- als auch von Reverse-Proxies, und kann sowohl in den Anfrage-Headern als auch in den Antwort-Headern erscheinen.

## Bereichsanfragen

HTTP-[Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) ermöglichen es dem Client, einen Teil einer Ressource vom Server anzufordern.
Bereichsanfragen sind nützlich für Anwendungen wie Mediaplayer, die zufälligen Zugriff unterstützen, Datentools, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Downloadmanager, die dem Benutzer erlauben, einen Download zu pausieren und fortzusetzen.

- {{HTTPHeader("Accept-Ranges")}}
  - : Zeigt an, ob der Server Bereichsanfragen unterstützt, und wenn ja, in welcher Einheit der Bereich ausgedrückt werden kann.
- {{HTTPHeader("Range")}}
  - : Gibt den Teil eines Dokuments an, den der Server zurückgeben soll.
- {{HTTPHeader("If-Range")}}
  - : Erstellt eine bedingte Bereichsanfrage, die nur erfüllt wird, wenn der angegebene ETag oder das Datum mit der entfernten Ressource übereinstimmt. Wird verwendet, um das Herunterladen von zwei Bereichen aus inkompatiblen Versionen der Ressource zu verhindern.
- {{HTTPHeader("Content-Range")}}
  - : Gibt an, wo in einer vollständigen Nachricht ein Teil der Nachricht gehört.

## Umleitungen

- {{HTTPHeader("Location")}}
  - : Gibt die URL an, zu der eine Seite umgeleitet werden soll.
- {{HTTPHeader("Refresh")}}
  - : Weist den Browser an, die Seite neu zu laden oder zu einer anderen umzuleiten. Nimmt denselben Wert wie das `meta`-Element mit [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv).

## Anforderungskontext

- {{HTTPHeader("From")}}
  - : Enthält eine Internet-E-Mail-Adresse für einen menschlichen Benutzer, der den anfordernden Benutzer-Agenten kontrolliert.
- {{HTTPHeader("Host")}}
  - : Gibt den Domainnamen des Servers an (für Virtual Hosting) und (optional) die TCP-Portnummer, auf der der Server lauscht.
- {{HTTPHeader("Referer")}}
  - : Die Adresse der vorherigen Webseite, von der aus ein Link zur derzeit angeforderten Seite gefolgt wurde.
- {{HTTPHeader("Referrer-Policy")}}
  - : Regelt, welche Referrerinformationen im {{HTTPHeader("Referer")}}-Header mit Anfragen gesendet werden sollen.
- {{HTTPHeader("User-Agent")}}
  - : Enthält eine charakteristische Zeichenfolge, die es den Netzwerkprotokoll-Peers ermöglicht, den Anwendungstyp, das Betriebssystem, den Softwareanbieter oder die Softwareversion des anfordernden Software-Agenten zu identifizieren.

## Antwortkontext

- {{HTTPHeader("Allow")}}
  - : Listet die Menge der HTTP-Anfragemethoden auf, die von einer Ressource unterstützt werden.
- {{HTTPHeader("Server")}}
  - : Enthält Informationen über die Software, die vom Ursprungsserver verwendet wird, um die Anfrage zu verarbeiten.

## Sicherheit

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Ermöglicht einem Server, eine Einbettungsrichtlinie für ein gegebenes Dokument zu deklarieren.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Verhindert, dass andere Domänen ein Fenster öffnen/kontrollieren.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Verhindert, dass andere Domänen die Antwort der Ressourcen lesen, auf die dieser Header angewendet wird. Siehe auch [CORP-Erklärungsartikel](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP", "CSP")}})
  - : Kontrolliert Ressourcen, die der Benutzer-Agent laden darf, für eine gegebene Seite.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Ermöglicht Webentwicklern, Richtlinien zu testen, indem ihre Auswirkungen überwacht, aber nicht durchgesetzt werden. Diese Verstöße-Berichte bestehen aus {{Glossary("JSON", "JSON")}}-Dokumenten, die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Ermöglicht es Websites, bei der Berichterstattung und Durchsetzung von [Zertifikatstransparenz](/de/docs/Web/Security/Certificate_Transparency) opt-in zu wählen, um die Verwendung von fehlerhaften Zertifikaten für diese Website zu erkennen.
- {{HTTPHeader("Permissions-Policy")}}
  - : Bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem eigenen Rahmen einer Website und in {{htmlelement("iframe")}}s, die sie einbettet, zu erlauben oder zu verbieten.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Antwort-Header, der es Website-Besitzern ermöglicht, einen oder mehrere Endpunkte anzugeben, die verwendet werden, um Fehler wie CSP-Verletzungsberichte, {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Berichte oder andere generische Verstöße zu erhalten.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})
  - : Erzwingt die Kommunikation über HTTPS anstelle von HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sendet ein Signal an den Server, dass der Client eine präferenzierte, verschlüsselte und authentifizierte Antwort wünscht und dass er erfolgreich die {{CSP("upgrade-insecure-requests")}}-Direktive behandeln kann.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Deaktiviert MIME-Sniffing und zwingt den Browser, den im {{HTTPHeader("Content-Type")}}-Header angegebenen Typ zu verwenden.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Gibt an, ob ein Browser eine Seite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern darf.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Eine Crosse-Domain-Richtliniendatei kann Clients wie Adobe Acrobat oder Apache Flex (unter anderem) die Berechtigung erteilen, Daten über Domänen hinweg zu verarbeiten, die aufgrund der [Same-Origin Policy](/de/docs/Web/Security/Same-origin_policy) ansonsten eingeschränkt wären.
    Der `X-Permitted-Cross-Domain-Policies`-Header überschreibt solche Richtliniendateien, sodass Clients weiterhin unerwünschte Anfragen blockieren.
- {{HTTPHeader("X-Powered-By")}}
  - : Kann von Hosting-Umgebungen oder anderen Frameworks gesetzt werden und enthält Informationen über sie, ohne dass dies für die Anwendung oder ihre Besucher von Nutzen ist. Entfernen Sie diesen Header, um potenzielle Schwachstellen zu verbergen.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Aktiviert das Filtern von Cross-Site-Scripting.

### Fetch-Metadatenanforderungs-Header

{{Glossary("Fetch_metadata_request_header", "Fetch-Metadatenanforderungs-Header")}} bieten Informationen über den Kontext, aus dem die Anforderung stammt. Ein Server kann sie verwenden, um Entscheidungen darüber zu treffen, ob eine Anfrage erlaubt werden sollte, basierend darauf, woher die Anfrage kam und wie die Ressource verwendet wird.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Gibt das Verhältnis zwischen dem Ursprung eines Anforderungsinitiators und dem Zielursprung an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `cross-site`, `same-origin`, `same-site` und `none` ist.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Gibt den Modus der Anforderung an einen Server an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `cors`, `navigate`, `no-cors`, `same-origin` und `websocket` ist.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Gibt an, ob eine Navigationsanfrage durch Benutzeraktivierung ausgelöst wurde oder nicht. Es ist ein Structured Header, dessen Wert ein Boolescher Wert ist, sodass mögliche Werte `?0` für falsch und `?1` für wahr sind.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Gibt das Ziel der Anfrage an. Es ist ein Structured Header, dessen Wert ein Token mit möglichen Werten `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker` und `xslt` ist.

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadatenanforderungs-Header", bieten aber ähnliche Informationen über den Kontext der Nutzung einer Ressource. Ein Server könnte sie verwenden, um sein Cache-Verhalten zu ändern oder die zurückgegebenen Informationen zu modifizieren:

- {{HTTPHeader("Sec-Purpose")}}
  - : Gibt den Zweck der Anfrage an, wenn der Zweck etwas anderes als der unmittelbare Nutzen durch den Benutzer-Agenten ist. Der Header hat derzeit einen möglichen Wert, `prefetch`, was anzeigt, dass die Ressource vorab für eine mögliche zukünftige Navigation abgerufen wird.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : Ein Anforderungs-Header, der in einer vorzeitigen Anforderung zum [`fetch()`](/de/docs/Web/API/Window/fetch) einer Ressource während des Service-Worker-Starts gesendet wird. Der Wert, der mit [`NavigationPreloadManager.setHeaderValue()`](/de/docs/Web/API/NavigationPreloadManager/setHeaderValue) gesetzt wird, kann verwendet werden, um einen Server darüber zu informieren, dass eine andere Ressource zurückgegeben werden sollte als bei einem normalen `fetch()`-Vorgang.

## Server-sent Events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, wohin der Browser Warn- und Fehlerberichte beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Serverendpunkte anzugeben, wohin der Browser Warn- und Fehlerberichte beim Verwenden der [Reporting API](/de/docs/Web/API/Reporting_API) senden soll.

## Transfer-Codierung

- {{HTTPHeader("Transfer-Encoding")}}
  - : Gibt die Form der Kodierung an, die verwendet wird, um die Ressource sicher an den Benutzer zu übertragen.
- {{HTTPHeader("TE")}}
  - : Gibt die Transferkodierungen an, die der Benutzer-Agent akzeptieren kann.
- {{HTTPHeader("Trailer")}}
  - : Ermöglicht dem Absender, am Ende einer chunked-Nachricht zusätzliche Felder aufzunehmen.

## WebSockets

Header, die von der [WebSockets API](/de/docs/Web/API/WebSockets_API) im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet werden:

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Antwort-Header, der anzeigt, dass der Server bereit ist, eine WebSocket-Verbindung heraufzustufen.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge an.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Anforderungs-Header, der einen Schlüssel enthält, der bestätigt, dass der Client explizit die Eröffnung eines `WebSocket` beabsichtigt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In Anfragen gibt dieser Header die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge an.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In Anfragen gibt dieser Header die vom Client verwendete Version des WebSocket-Protokolls an.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die Versionen auf, die der Server unterstützt.

## Andere

- {{HTTPHeader("Alt-Svc")}}
  - : Wird verwendet, um alternative Wege aufzulisten, um diesen Dienst zu erreichen.
- {{HTTPHeader("Alt-Used")}}
  - : Wird verwendet, um den im Einsatz befindlichen alternativen Dienst zu identifizieren.
- {{HTTPHeader("Date")}}
  - : Enthält das Datum und die Uhrzeit, zu der die Nachricht erstellt wurde.
- {{HTTPHeader("Link")}}
  - : Dieses Entität-Header-Feld bietet eine Möglichkeit zur Serialisierung eines oder mehrerer Links in HTTP-Headern. Es ist semantisch äquivalent zu dem HTML {{HTMLElement("link")}}-Element.
- {{HTTPHeader("Retry-After")}}
  - : Gibt an, wie lange der Benutzer-Agent warten soll, bevor er eine Folgeanfrage stellt.
- {{HTTPHeader("Server-Timing")}}
  - : Übermittelt ein oder mehrere Metriken und Beschreibungen für den gegebenen Anforderungs-Antwort-Zyklus.
- {{HTTPHeader("Service-Worker")}}
  - : Wird in Abrufen für das Skriptressourcen eines Service-Workers eingeschlossen.
    Dieser Header hilft Administratoren, Anfragen nach Service-Worker-Skripten zu protokollieren, um Überwachungszwecke zu erfüllen.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Wird verwendet, um die [Pfadbeschränkung](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) zu entfernen, indem dieser Header [in der Antwort des Service-Worker-Skriptes](https://w3c.github.io/ServiceWorker/#service-worker-script-response) enthalten ist.
- {{HTTPHeader("SourceMap")}}
  - : Verlinkt zu einer {{Glossary("source_map", "Source Map")}}, damit Debugger durch den ursprünglichen Quellcode statt durch generierten oder transformierten Code treten können.
- {{HTTPHeader("Upgrade")}}
  - : Dieser HTTP/1.1- (nur) Header kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Beispielsweise kann es von einem Client verwendet werden, um eine Verbindung von HTTP 1.1 auf HTTP 2.0 oder eine HTTP- oder HTTPS-Verbindung in einen WebSocket zu aktualisieren.
- {{HTTPHeader("Priority")}}
  - : Bietet einen Hinweis auf die Priorität einer bestimmten Ressourcenanforderung auf einer bestimmten Verbindung.
    Der Wert kann in einer Anfrage gesendet werden, um die Clientpriorität anzuzeigen oder in einer Antwort, wenn der Server sich entscheidet, die Anfrage neu zu priorisieren.

## Experimentelle Header

### Zurechnungsberichte-Header

Das [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) ermöglicht Entwicklern das Messen von Conversions – z. B. wenn ein Benutzer auf eine eingebettete Anzeige auf einer Website klickt und dann das Produkt auf der Website des Verkäufers kauft – und anschließend auf Berichte zu diesen Conversions zuzugreifen. Dies geschieht ohne den Einsatz von Drittanbieter-Cookies, sondern verlässt sich auf verschiedene Header, um **Quellen** und **Auslöser** zu registrieren, die übereinstimmen, um eine Conversion anzuzeigen.

- {{HTTPHeader("Attribution-Reporting-Eligible")}}
  - : Wird verwendet, um anzugeben, dass die Antwort auf die aktuelle Anfrage für die Aufnahme in Zurechnungsberichte durch die Registrierung entweder einer Zurechnungsquelle oder eines Auslösers geeignet ist.
- {{HTTPHeader("Attribution-Reporting-Register-Source")}}
  - : Wird als Teil einer Antwort auf eine Anfrage enthalten, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um eine Zurechnungsquelle zu registrieren.
- {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}
  - : Wird als Teil einer Antwort auf eine Anfrage enthalten, die einen `Attribution-Reporting-Eligible`-Header enthielt, und wird verwendet, um einen Zurechnungsauslöser zu registrieren.

### Client-Hinweise

HTTP-[Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) sind eine Reihe von Anforderungsheadern, die nützliche Informationen über den Client wie Gerätetyp und Netzwerkbedingungen bereitstellen und es Servern ermöglichen, das, was unter diesen Bedingungen bedient wird, zu optimieren.

Server bitten den Client proaktiv um die Client-Hinweise-Header, an denen sie interessiert sind, über {{HTTPHeader("Accept-CH")}}. Der Client kann dann entscheiden, ob er die angeforderten Header in nachfolgenden Anfragen enthalten möchte.

- {{HTTPHeader("Accept-CH")}}
  - : Server können die Unterstützung für Client-Hinweise über das Feld `Accept-CH` im Header oder ein entsprechendes HTML `<meta>`-Element mit dem Attribut [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) bewerben.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Server verwenden `Critical-CH` zusammen mit {{HTTPHeader("Accept-CH")}}, um anzugeben, dass akzeptierte Client-Hinweise auch als [kritische Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) gelten.

Die verschiedenen Arten von Client-Hinweisen sind unten aufgelistet.

#### Benutzer-Agent-Client-Hinweise

Die [UA-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind Anforderungsheader, die Informationen über den Benutzer-Agenten, die Plattform/Architektur, auf der er läuft, und Benutzerpräferenzen, die auf dem Benutzer-Agenten oder der Plattform festgelegt sind, bereitstellen:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : Marken- und Versionsangaben zum Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : Architektur der zugrunde liegenden Plattform des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : Bitbreite der zentralen Verarbeitungseinheit (CPU) Architektur des Benutzer-Agenten (z.B. "64" Bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : Formfaktoren des Benutzer-Agenten, die beschreiben, wie der Benutzer mit dem Benutzer-Agenten interagiert.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : Vollständige Versionszeichenfolge des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Volle Version für jede Marke in der Liste der Marken des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : Benutzer-Agent läuft auf einem mobilen Gerät oder bevorzugt allgemein eine "mobile" Benutzererfahrung.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : Modell des Geräts des Benutzer-Agenten.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : Betriebssystem/Plattform, auf dem der Benutzer-Agent basiert.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : Versionsangabe des Betriebssystems/der Plattform, auf dem/der der Benutzer-Agent basiert.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Ob das Binärprogramm des Benutzer-Agenten im 32-Bit-Modus auf einem 64-Bit-Windows betrieben wird.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers für ein dunkles oder helles Farbschema.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : Bevorzugung des Benutzers, weniger Animationen und Layoutverschiebungen von Inhalten zu sehen.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Anforderungs-Header zeigt die Präferenz des Benutzer-Agenten für reduzierte Transparenz an.

> [!NOTE]
> Benutzer-Agent-Client-Hinweise sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die verwendet werden könnte, um Daten zu leaken.

#### Geräte-Client-Hinweise

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um das Bildgerät zum Pixelverhältnis (DPR) in Anfragen zu bestätigen, bei denen der Bildschirm {{HTTPHeader("DPR")}}-Client-Hinweis verwendet wurde, um eine Bildressource auszuwählen.
- {{HTTPHeader("Device-Memory")}}
  - : Ungefähre Menge an verfügbarem RAM-Speicher des Clients. Dies ist Teil der [Device Memory API](/de/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der das Geräte-Pixel-Verhältnis des Clients bereitstellt (die Anzahl physischer {{Glossary("device_pixel", "Geräte-Pixel")}} für jedes {{Glossary("CSS_pixel", "CSS-Pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Layout-Breite des Clientviewport im {{Glossary("CSS_pixel", "CSS-Pixel")}} bereitstellt.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die gewünschte Ressourcenbreite in physischen Pixeln (die intrinsische Größe eines Bildes) angibt.

#### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen einem Server auszuwählen, welche Informationen basierend auf der Benutzerwahl und der Netzwerkbandbreite und -latenz gesendet werden.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Ungefähre Bandbreite der Verbindung des Clients zum Server, in Mbps. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : Der {{Glossary("effective_connection_type", "effektive Verbindungstyp")}} ("Netzwerkprofil"), der am besten zur Latenz und Bandbreite der Verbindung passt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Round-Trip-Zeit (RTT) auf Anwendungsebene in Millisekunden, die die Serververarbeitungszeit einschließt. Dies ist Teil der [Network Information API](/de/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : Ein String `on`, der die Präferenz des Benutzer-Agenten für eine reduzierte Datennutzung anzeigt.

### Komprimierungs-Wörterbuchtransport

[Komprimierungs-Wörterbuchtransport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) ist eine Möglichkeit, ein gemeinsames Komprimierungswörterbuch zu verwenden, um die Transportgröße von HTTP-Antworten zu reduzieren, anstatt das standardmäßige statische Wörterbuch bei {{Glossary("Brotli_compression", "Brotli-Komprimierung")}} oder {{Glossary("Zstandard_compression", "Zstandard-Komprimierung")}} zu verwenden.

- {{HTTPHeader("Available-Dictionary")}} {{experimental_inline}}
  - : Ein Browser kann diesen Anforderungs-Header verwenden, um das beste Wörterbuch, das er für die Komprimierung verwenden kann, anzugeben.
- {{HTTPHeader("Dictionary-ID")}} {{experimental_inline}}
  - : Wird verwendet, wenn ein Browser bereits ein Wörterbuch für eine Ressource hat und der Server eine `id` für das Wörterbuch im `Use-As-Dictionary`-Header bereitgestellt hat.
    Anfragen für Ressourcen, die das Wörterbuch verwenden können, haben einen `Available-Dictionary`-Header und die vom Server bereitgestellte Wörterbuch-`id` im `Dictionary-ID`-Header.
- {{HTTPHeader("Use-As-Dictionary")}} {{experimental_inline}}
  - : Listet die Übereinstimmungskriterien auf, die das Wörterbuch für zukünftige Anfragen verwenden kann.

### Datenschutz

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die Tracking-Präferenz des Benutzers angibt (Do Not Track).
    Veraltet zugunsten des Global Privacy Control (GPC), das den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) für Clients zugänglich ist.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Antwort-Header, der den Tracking-Status angibt, der für die entsprechende Anfrage galt. Wird in Verbindung mit DNT verwendet.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Gibt an, ob der Benutzer einer Website oder einem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder weiterzugeben.

### Sicherheit

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Antwort-Header, der verwendet wird, um anzugeben, dass das zugehörige [`Dokument`](/de/docs/Web/API/Document) in einem _ursprungsbezogenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ platziert werden soll.
    Diese Isolation ermöglicht es Benutzer-Agenten, Implementierungsspezifische Ressourcen für Agenten-Cluster wie Prozesse oder Threads effizienter zuzuweisen.

### Server-sent Events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Definiert einen Mechanismus, der es Entwicklern ermöglicht, eine Berichterstattungspolitik für Netzwerkfehler zu deklarieren.

### Topics API

Die Topics API bietet eine Möglichkeit, Entwicklern die Implementierung von Anwendungsfällen wie interessenbasierte Werbung (IBA) zu ermöglichen.
Siehe die [Topics API](/de/docs/Web/API/Topics_API) Dokumentation für weitere Informationen.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Antwort-Header, der verwendet wird, um Themen von Interesse, die aus der URL der aufrufenden Website ermittelt wurden, als beobachtet in der Antwort auf eine Anfrage zu markieren, die durch eine [Funktion, die die Topics API ermöglicht](/de/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api) generiert wurde.
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Anforderungs-Header, der die ausgewählten Themen für den aktuellen Benutzer zusammen mit der zugehörigen Anfrage sendet, die von einer Ad-Tech-Plattform verwendet werden, um eine personalisierte Anzeige auszuwählen, die angezeigt werden soll.

### Andere

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : Ein Client kann das [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) Header-Feld senden, um die Absicht anzugeben, die Vorteile verfügbarer Signaturen zu nutzen und die unterstützten Signaturarten anzugeben.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Gibt an, dass die Anfrage in TLS frühe Daten vermittelt wurde.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Antwort-Header, der von einem föderierten Identitätsanbieter (IdP) gesendet wird, um dessen Anmeldestatus festzulegen, was bedeutet, ob auf dem aktuellen Browser Benutzer im IdP angemeldet sind oder nicht.
    Dies wird vom Browser gespeichert und von der [FedCM API](/de/docs/Web/API/FedCM_API) verwendet.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : Der [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) Header-Feld übermittelt eine Liste von Signaturen für einen Austausch, jede begleitet von Informationen darüber, wie die Autorität und Erneuerung dieser Signatur zu bestimmen ist.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : Das [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) Header-Feld identifiziert eine geordnete Liste von Antwort-Header-Feldern, die in einer Signatur enthalten sind.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Bietet eine Liste von URLs, die auf Textressourcen verweisen, die [Speculation-Rule](/de/docs/Web/API/Speculation_Rules_API) JSON-Definitionen enthalten. Wenn die Antwort ein HTML-Dokument ist, werden diese Regeln zum Speculation-Rule-Set des Dokuments hinzugefügt.
- {{HTTPHeader("Sec-Speculation-Tags")}} {{experimental_inline}}
  - : Enthält einen oder mehrere Tag-Werte aus den Spekulationsregeln, die die Spekulation verursacht haben, sodass ein Server identifizieren kann, welche Regel(n) eine Spekulation verursacht haben und möglicherweise blockiert werden können.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Wird von einem Navigationstarget gesetzt, um die Nutzung verschiedener, risikoreicher Lademodi zu unterstützen. Beispielsweise erfordert die Prerendering-Nutzung über Domänen hinweg, dass `Supports-Loading-Mode` den Wert `credentialed-prerender` hat.

## Nicht standardmäßige Header

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastausgleichsserver eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der von einem Client verwendet wurde, um eine Verbindung zu Ihrem Proxy- oder Lastausgleichsserver herzustellen.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das von einem Client verwendet wurde, um eine Verbindung zu Ihrem Proxy- oder Lastausgleichsserver herzustellen.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Steuert das DNS-Vorabrufen, ein Feature, bei dem Browser proaktiv die Domain-Name-Auflösung sowohl für Links durchführen, denen der Benutzer folgen könnte, als auch für URLs, die vom Dokument referenziert werden, einschließlich Images, CSS, JavaScript usw.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : Der [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP-Header wird verwendet, um anzugeben, wie eine Webseite innerhalb öffentlicher Suchmaschinenergebnisse indiziert werden soll. Der Header ist gleichwertig zu [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots)-Elementen.

## Veraltete Header

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementierungsspezifischer Header, der irgendwo in der Anforderungs-Antwort-Kette verschiedene Auswirkungen haben kann. Wird zur Abwärtskompatibilität mit HTTP/1.0-Caches verwendet, wo der `Cache-Control`-Header noch nicht vorhanden ist.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : Allgemeine Warninformationen über mögliche Probleme.

## Siehe auch

- [Wikipedia-Seite über Liste von HTTP-Headern](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA-Register](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP-Arbeitsgruppe](https://httpwg.org/specs/)
