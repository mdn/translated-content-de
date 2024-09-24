---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) für die Übertragung von Hypermedia-Dokumenten wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke genutzt werden, wie z.B. Maschinen-zu-Maschinen-Kommunikation, programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server zwischen zwei Anfragen keine Sitzungsdaten speichert, obwohl die spätere Ergänzung von [Cookies](/de/docs/Web/HTTP/Cookies) einigen Client-Server-Interaktionen zustandshaltig macht.

## Referenzen

Die HTTP-Referenzdokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : Nachrichtenheader werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, aber es gibt auch andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
  - : Antwortstatuscodes geben das Ergebnis einer bestimmten HTTP-Anfrage an. Die Antworten werden in fünf Klassen gruppiert: informationelle, erfolgreiche, Umleitungen, Clientfehler und Serverfehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren spezifiziert wurde.

## HTTP-Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer einfachen Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell basiert. Auf diesen Konzepten aufbauend wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die nachstehenden Leitfäden sind in der Reihenfolge von allgemeineren Übersichten zu spezialisierten, anwendungsfallgesteuerten Themen angeordnet. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich auf spezialisierte Artikel konzentrieren.

- [Übersicht über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Merkmale von HTTP, was es leisten kann, seine beabsichtigte Nutzung in der Webarchitektur und seine Position im Protokollstapel.
- [Ein typischer HTTP-Dialog](/de/docs/Web/HTTP/Session)
  - : Beschreibt den Ablauf eines HTTP-Dialogs, von der Verbindungserstellung über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übermittelt werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Arten von Nachrichten.
- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [MIME-Typen](/de/docs/Web/HTTP/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mit dem {{HTTPHeader("Content-Type")}}-Header und dem MIME-Standard erreicht wird. Eine kurze Liste gängiger Typen, die von Webentwicklern verwendet werden, findet sich unter [Häufige MIME-Typen](/de/docs/Web/HTTP/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie sie über das Netzwerk senden, um die Menge der zu übertragenden Daten zu reduzieren und so die Übertragungsgeschwindigkeit und Bandbreitenauslastung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
  - : Caching ist ein äußerst wichtiges Mittel, um schnelle Erlebnisse im Web zu liefern und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie man HTTP-Header zur Steuerung verwendet.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu überprüfen. Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden. Der Client gibt dann den Wert des Cookies bei jeder nachfolgenden Anfrage an den Server im {{HTTPHeader("Cookie")}}-Anforderungsheader zurück. Dies ermöglicht das Speichern und Austauschen einer kleinen Datenmenge, die effektiv Zustand zu einigen Client-Server-Interaktionen hinzufügt.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Redirection, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, die als HTTP-Weiterleitung bezeichnet wird, für diesen Vorgang.
- [HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab. Diese Methode wird häufig im [Caching](/de/docs/Web/HTTP/Caching) verwendet sowie in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern von Datenverlusten beim Ändern eines Dokuments auf dem Server und mehr.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zu senden, statt der gesamten Ressource. Bereichsanfragen sind nützlich in Fällen, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, bei denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichtenheadern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Headers/Accept), als einen Weg, wie ein Browser das Format, die Sprache oder die Kodierung, die er bevorzugt, bekannt gibt. Dieser Artikel erklärt, wie diese Bekanntmachung erfolgt, wie der Server reagieren soll und wie er die angemessenste Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile jedes einzelnen.
- [Evolution von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren geschaffen und mehrmals erweitert. Dieser Artikel behandelt die Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 sowie HTTP/2 und HTTP/3, einschließlich der im Laufe der Jahre eingeführten Neuheiten.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus zum Upgraden einer bereits etablierten Verbindung auf ein anderes Protokoll über den {{HTTPHeader("Upgrade")}}-Header. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 upgraden oder eine HTTP(S)-Verbindung auf einen [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`).
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)
  - : Ein Proxy kann auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet sein. Diese Seite skizziert einige Grundlagen zu Proxys und führt einige Konfigurationsoptionen ein.
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, benutzerspezifische und user-agent-spezifische Präferenzen anzufordern. Der Server kann dann bestimmen, welche Ressourcen basierend auf den Informationen, die der Client bereitstellen möchte, gesendet werden sollen.
- [Netzwerkfehlerprotokollierung](/de/docs/Web/HTTP/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerkfehlerprotokollierung ist ein Mechanismus, der über den `NEL` HTTP-Antwortheader konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browser-Erkennung über den User-Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
  - : Es ist nur sehr selten eine gute Idee, das User-Agent-Sniffing zu verwenden, um einen Browser zu erkennen, aber es gibt Ausnahmefälle, die dies erfordern. Dieses Dokument wird Sie führen, dies so korrekt wie möglich zu tun, wenn es notwendig ist, mit einem Schwerpunkt auf Überlegungen, die zu treffen sind, bevor Sie diesen Weg einschlagen.
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Änderungen der Serverkonfiguration, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellt. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht erkennt.

### Sicherheit und Datenschutz

- [Mozilla-Websicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um Betriebsteams bei der Erstellung sicherer Webanwendungen zu unterstützen.
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
  - : Die Berechtigungsrichtlinie bietet Webentwicklern Mechanismen, um explizit zu deklarieren, welche Funktionalitäten auf einer Website verwendet werden dürfen und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Seite zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domain als der, die die Anfrage stellt. Heutzutage laden Webseiten sehr häufig Cross-Site-Ressourcen, zum Beispiel, wenn eine Seite 'Domain A' (`http://domaina.example/`) ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element anfordert. CORS ermöglicht es Webentwicklern zu steuern, wie ihre Seite auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : CSP erlaubt es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}}-Antwortheader zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine bestimmte Seite laden darf. Der CSP-Leitfaden beschreibt den gesamten Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen zu erkennen und zu mindern, einschließlich Cross-Site-Scripting (XSS) und Dateninjektionsangriffen.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich gegen spezifische Anfragen von anderen Ursprüngen (wie solche, die mit Elementen wie `<script>` und `<img>` ausgeführt werden) zu schützen, um spekulative Seitenkanalangriffe zu mindern.

## Tools & Ressourcen

Hilfreiche Tools und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten hilft, ihre Websites sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Tools, um Ihre cache-bezogenen Header zu überprüfen.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, geschrieben in C, mit Lasttest- und Benchmarking-Tools sowie einem HPACK-Codierer und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilenwerkzeug zum Übertragen von Daten, die mit der URL-Syntax angegeben werden. Unterstützt HTTP, HTTPS, WS, WSS und viele andere Protokolle.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die Interna von Browsern und den Anforderungsablauf durch das HTTP-Protokoll.
