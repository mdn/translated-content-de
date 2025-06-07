---
title: "HTTP: Hypertext Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

**HTTP** ist ein [Application-Layer-Protokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten wie HTML.
Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie z.B. die Kommunikation zwischen Maschinen, den programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält.
HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Hinzufügung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) zu einigen client-serverseitigen Interaktionen Zustand hinzufügt.

## Referenz

Die [HTTP-Referenz](/de/docs/Web/HTTP/Reference)-Dokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichten-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist.
    Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, es gibt aber auch andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes zeigen das Ergebnis einer spezifischen HTTP-Anfrage an.
    Antworten werden in fünf Klassen eingeteilt: informativ, erfolgreich, Weiterleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwort-Header erlaubt Website-Administratoren anzugeben, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf.
    Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}} Antwort-Header bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb eines jeden {{HTMLElement("iframe")}}-Elements im Dokument zu erlauben oder zu verweigern.
    Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer grundlegenden Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell basiert.
Auf diesen Konzepten wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und verbesserte Semantiken hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind in der Reihenfolge von allgemeinen Übersichten zu spezialisierten, anwendungsfallgesteuerten Themen aufgelistet.
Anfänger werden ermutigt, mit den grundlegenden Leitfäden zu beginnen, bevor sie detailliertere Artikel erkunden.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es kann, sein beabsichtigter Einsatz in der Web-Architektur und seine Position im Protokollstapel.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrfach erweitert.
    Dieser Artikel beschreibt seine Geschichte und erläutert HTTP/0.9, HTTP/1.0, HTTP/1.1 bis hin zu HTTP/2 und HTTP/3 sowie Neuerungen, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Aufbau einer Verbindung über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übermittelt werden, haben eine definierte Struktur.
    Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Typen von Nachrichten.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden.
    Dieser Artikel erklärt, wie dies mit dem {{HTTPHeader("Content-Type")}}-Header und dem MIME-Standard erreicht wird.
    Eine kurze Liste von häufig verwendeten Typen durch Webentwickler finden Sie unter [Allgemeine MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Kompression in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die zu übertragende Datenmenge zu reduzieren und so die Übertragungsgeschwindigkeit und die Bandbreitenauslastung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein sehr wichtiges Mechanismus, um schnelle Erlebnisse im Web zu liefern und Ressourcen effizient zu nutzen.
    Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie man HTTP-Header verwendet, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu verifizieren.
    Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden.
    Der Client gibt dann den Wert des Cookies mit jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}}-Anfrage-Headers zurück.
    Dies fügt die Fähigkeit hinzu, eine kleine Menge an Daten zu speichern und auszutauschen, was effektiv Zustand zu einigen client-serverseitigen Interaktionen hinzufügt.
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zu geben.
    HTTP hat eine spezielle Art von Antwort, die für diesen Vorgang als HTTP-Weiterleitung bezeichnet wird.
- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validierers in der Anfrage ab.
    Diese Methode wird stark in [Caching](/de/docs/Web/HTTP/Guides/Caching) und Anwendungsfällen wie der Fortsetzung eines Downloads, der Verhinderung verlorener Updates beim Ändern eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen spezifischen Teil (oder Teile) einer Ressource an einen Client zu senden, anstatt die volle Ressource.
    Bereichsanfragen sind nützlich, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, in denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept), als eine Möglichkeit für einen Browser, das bevorzugte Format, die Sprache oder die Codierung anzugeben.
    Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren und wie er die am besten geeignete Antwort auf eine Anfrage wählt.
- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte.
    Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile von jedem.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits aufgebaute Verbindung mittels des {{HTTPHeader("Upgrade")}}-Headers auf ein anderes Protokoll umzustellen.
    Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 umstellen oder eine HTTP(S)-Verbindung auf einen [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`).
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden.
    Diese Seite skizziert einige Grundlagen zu Proxys und führt ein paar Konfigurationsoptionen ein.
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, Benutzervorlieben und benutzeragentspezifische Präferenzen anzufordern.
    Der Server kann dann basierend auf den Informationen, die der Client bereitzustellen wählt, bestimmen, welche Ressourcen gesendet werden sollen.
- [Protokollierung von Netzwerkfehlern](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Die Protokollierung von Netzwerkfehlern ist ein Mechanismus, der über den `NEL` HTTP-Antwort-Header konfiguriert werden kann.
    Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabfragen von unterstützenden Browsern zu erhalten.
- [Browsererkennung anhand des User-Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist selten eine gute Idee, das User-Agent-Sniffing zur Erkennung eines Browsers zu verwenden, aber es gibt Randfälle, die dies erfordern.
    Dieses Dokument wird Sie dabei leiten, dies so korrekt wie möglich zu tun, wenn es notwendig ist, mit einem Schwerpunkt auf Überlegungen, bevor Sie sich auf diesen Weg begeben.

### Sicherheit und Datenschutz

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Berechtigungsrichtlinien bieten Mechanismen, mit denen Webentwickler explizit angeben können, welche Funktionalität auf einer Website verwendet werden kann und welche nicht.
    Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Site zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domain als der, von der die Anfrage stammt.
    Heutzutage laden Webseiten sehr häufig resources von anderen Sites, zum Beispiel eine Seite 'Domain A' (`http://domaina.example/`) fordert ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element an.
    CORS erlaubt es Webentwicklern zu kontrollieren, wie ihre Site auf Anforderungen von anderen Sites reagiert.
- [Content-Security-Richtlinie (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP erlaubt es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwort-Header zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine gegebene Seite laden darf.
    Der CSP-Leitfaden beschreibt den allgemeinen Inhalt des Security-Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen zu erkennen und zu mildern, einschließlich Cross-Site-Scripting (XSS) und Dateninjektionsangriffe.
- [Cross-Origin-Ressourcenrichtlinie (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich für den Schutz gegen spezifische Anforderungen von anderen Ursprüngen zu entscheiden (wie die, die mit Elementen wie `<script>` und `<img>` ausgestellt werden), um spekulative Seitenkanalangriffe zu mindern.
- [Mozilla-Websicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um operativen Teams bei der Erstellung sicherer Webanwendungen zu helfen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind eine wesentliche Komponente in HTTP-Anfragen.
- [Serverkonfiguration für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Änderungen in der Serverkonfiguration, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellt.
    Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verständnis und Debuggen von HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsfachleuten helfen soll, ihre Seiten sicher und sicher zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer cachebezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, die in C geschrieben wurde, mit Lasttest- und Benchmarking-Tools sowie einem HPACK-Codierer und Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilen-Tool zum Übertragen von Daten, die mit URL-Syntax angegeben sind.
    Unterstützt HTTP, HTTPS, WS, WSS und viele andere Protokolle.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Funktionen von Browsern und den Anfragenfluss durch das HTTP-Protokoll.
