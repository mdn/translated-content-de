---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) zum Übertragen von Hypermedia-Dokumenten, wie z.B. HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke genutzt werden, wie z.B. für Maschine-zu-Maschine-Kommunikation, programmatischen Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server zwischen zwei Anfragen keine Sitzungsdaten speichert, obwohl die spätere Hinzufügung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) zu einigen Client-Server-Interaktionen Zustände hinzufügt.

## Referenzdokumentation

Die HTTP-Referenzdokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichtenheader werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist. Die gängigsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}}, jeweils zum Abrufen und Senden von Daten an Server, aber es gibt andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes geben das Ergebnis einer spezifischen HTTP-Anfrage an. Antworten werden in fünf Klassen gruppiert: informativ, erfolgreich, Umleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwortheader ermöglicht es Website-Administratoren, anzugeben, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}} Antwortheader stellt einen Mechanismus zur Verfügung, um die Nutzung von Browserfunktionen in einem Dokument oder innerhalb eines {{HTMLElement("iframe")}} Elements im Dokument zu erlauben oder zu verweigern. Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.

## HTTP-Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer grundlegenden Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell basiert. Auf diesen Konzepten basierend wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalitäten und aktualisierte Semantiken hinzufügen, einschließlich zusätzlicher HTTP-Methoden und Header.

Die unten aufgeführten Leitfäden sind in der Reihenfolge von allgemeinen Übersichten zu speziellen, anwendungsfallgesteuerten Themen aufgeführt. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich auf spezialisiertere Artikel einlassen.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es kann, seine beabsichtigte Verwendung in der Webarchitektur und seine Position im Protokoll-Stack.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrfach erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 bis hin zu HTTP/2 und HTTP/3 sowie Neuerungen, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, von der Herstellung einer Verbindung, über das Senden einer Anfrage bis hin zum Empfangen einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Arten von Nachrichten.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mithilfe des {{HTTPHeader("Content-Type")}} Headers und des MIME-Standards erreicht wird. Eine kurze Liste gängiger Typen, die von Webentwicklern verwendet werden, finden Sie unter [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Kompression in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die zu übertragende Datenmenge zu reduzieren und die Übertragungsgeschwindigkeit sowie die Bandbreitennutzung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein äußerst wichtiger Mechanismus, um schnelle Erlebnisse im Web zu liefern und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie HTTP-Header zur Steuerung genutzt werden können.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist eine Möglichkeit, um die Identität eines Clients zu überprüfen, wenn Anfragen an einen Server gestellt werden. Dadurch wird sichergestellt, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server mit der Antwort einen {{HTTPHeader("Set-Cookie")}} Header senden. Der Client sendet dann den Wert des Cookies mit jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}} Anfrage-Headers zurück. Dies fügt die Fähigkeit hinzu, eine kleine Menge an Daten zu speichern und auszutauschen, die effektiv Zustände zu einigen Client-Server-Interaktionen hinzufügt.
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP hat eine spezielle Art von Antwort, genannt HTTP-Weiterleitung, für diese Operation.
- [Konditionale HTTP-Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei konditionalen Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab. Diese Methode wird häufig im [Caching](/de/docs/Web/HTTP/Guides/Caching) und in Anwendungsfällen wie der Fortsetzung eines Downloads, der Verhinderung verlorener Aktualisierungen bei der Bearbeitung eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage bittet den Server, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zu senden, anstatt die gesamte Ressource. Bereichsanfragen sind nützlich für Fälle, in denen ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder für Fälle, in denen eine Anwendung dem Benutzer ermöglicht, einen Download zu pausieren und fortzusetzen.
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept), als eine Möglichkeit für einen Browser anzugeben, welches Format, welche Sprache oder welche Codierung er bevorzugt. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren und wie er die am besten geeignete Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die permanente Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile jedes einzelnen.
- [Protokoll-Upgrademechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits hergestellte Verbindung auf ein anderes Protokoll mit dem {{HTTPHeader("Upgrade")}} Header zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 zu HTTP/2 aufrüsten oder eine HTTP(S)-Verbindung zu einem [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`).
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet liegen. Diese Seite umfasst einige Grundlagen zu Proxys und stellt ein paar Konfigurationsoptionen vor.
- [HTTP-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hints sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen vom Client über das Gerät, das Netzwerk, Benutzer- und Benutzeragent-spezifische Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitzustellen wählt, entscheiden, welche Ressourcen gesendet werden.
- [Netzwerkfehlerprotokollierung](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Die Netzwerkfehlerprotokollierung ist ein Mechanismus, der über den `NEL` HTTP-Antwortheader konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browsererkennung mithilfe des User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden, um einen Browser zu erkennen, aber es gibt Sonderfälle, die dies erfordern. Dieses Dokument wird Sie dabei anleiten, dies so korrekt wie möglich zu tun, wenn es notwendig ist, mit einem Schwerpunkt auf Überlegungen, die vor Beginn dieses Vorgangs getroffen werden sollten.

### Sicherheit und Datenschutz

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Permissions Policy bietet Mechanismen für Webentwickler, um ausdrücklich zu deklarieren, welche Funktionalität auf einer Website verwendet werden kann und welche nicht. Sie definieren einen Satz von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann, oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domain als der, von der die Anfrage gestellt wird. Web-Seiten laden heute sehr häufig Cross-Site-Ressourcen, zum Beispiel fordert eine Seite 'Domain A' (`http://domaina.example/`) ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img` Element an. CORS ermöglicht es Webentwicklern, zu kontrollieren, wie ihre Website auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwortheader zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine bestimmte Seite laden darf. Der CSP-Leitfaden beschreibt den allgemeinen Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen wie Cross-Site-Scripting (XSS) und Dateneinspritzungsangriffe zu erkennen und zu mindern.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich für den Schutz gegen spezifische Anfragen anderer Ursprünge zu entscheiden (wie diejenigen, die mit Elementen wie `<script>` und `<img>` ausgeführt werden), um spekulative Seitenkanalangriffe zu mindern.
- [Mozilla Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um operativen Teams bei der Erstellung sicherer Webanwendungen zu helfen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Serverkonfigurationsänderungen, die möglicherweise für Ihren Webserver erforderlich sind, um Ogg-Mediendateien korrekt zu bedienen. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verständnis und Debuggen von HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Websites sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer Cache-bezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, geschrieben in C mit Lasttest- und Benchmarking-Tools sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilen-Tool zum Übertragen von Daten, die mit URL-Syntax angegeben sind. Unterstützt HTTP, HTTPS, WS, WSS, unter vielen anderen Protokollen.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Abläufe von Browsern und den Anforderungsfluss durch das HTTP-Protokoll.
