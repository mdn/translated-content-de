---
title: "HTTP: Hypertext Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**HTTP** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten, wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann jedoch auch für andere Zwecke verwendet werden, wie zum Beispiel machine-to-machine Kommunikation, programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), wobei ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Einführung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) Zustand zu einigen Client-Server-Interaktionen hinzufügt.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das sich auf Konzepte wie Ressourcen und Uniform Resource Identifiers (URIs), eine grundlegende Nachrichtenstruktur und ein Client-Server-Kommunikationsmodell stützt. Auf Basis dieser Konzepte wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind von allgemeinen Übersichten zu spezialisierten, anwendungsfallgetriebenen Themen geordnet. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie tiefere Artikel erkunden.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Merkmale von HTTP, was es tun kann, seine beabsichtigte Verwendung in der Web-Architektur und seine Position im Protokoll-Stack.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und wurde mehrmals erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1, sowie HTTP/2 und HTTP/3, und Neuerungen, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Herstellen einer Verbindung, über das Senden einer Anfrage bis hin zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten gesendet werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Nachrichtentypen.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Inhaltsarten übertragen werden. Dieser Artikel erklärt, wie dies mit dem {{HTTPHeader("Content-Type")}}-Header und dem MIME-Standard erreicht wird. Eine kurze Liste der von Webentwicklern häufig verwendeten Typen finden Sie unter [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Kompression in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die zu übertragende Datenmenge zu reduzieren und so die Übertragungsgeschwindigkeit und die Bandbreitennutzung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein äußerst wichtiger Mechanismus, um schnelle Erlebnisse im Web zu bieten und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und deren Steuerung durch HTTP-Header.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu überprüfen. Es stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server mit der Antwort einen {{HTTPHeader("Set-Cookie")}}-Header senden. Der Client sendet dann den Wert des Cookies bei jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}}-Anfrage-Headers zurück. Dies erlaubt das Speichern und Austauschen einer kleinen Datenmenge, die effektiv Zustand zu einigen Client-Server-Interaktionen hinzufügt.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Umleitungen, auch bekannt als URL-Weiterleitungen, sind eine Technik, um einer Seite, einem Formular, einer ganzen Webseite oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP verfügt über eine spezielle Art der Antwort, genannt HTTP-Umleitung, für diesen Vorgang.
- [HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab. Diese Methode wird stark im [Caching](/de/docs/Web/HTTP/Guides/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern verlorener Aktualisierungen bei der Änderung eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen spezifischen Teil (oder Teile) einer Ressource an einen Client zurückzusenden, anstatt die gesamte Ressource. Bereichsanfragen sind nützlich, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, in denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept), als eine Möglichkeit für einen Browser, das bevorzugte Format, die Sprache oder die Kodierung anzukündigen. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren, und wie er die am besten geeignete Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die dauerhafte Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile jedes einzelnen.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits etablierte Verbindung auf ein anderes Protokoll mithilfe des {{HTTPHeader("Upgrade")}}-Headers zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf einen [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) aktualisieren.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet sein. Diese Seite skizziert einige Grundlagen über Proxies und führt einige Konfigurationsmöglichkeiten ein.
- [HTTP Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, die Benutzer- und benutzeragentenspezifischen Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitzustellen wählt, bestimmen, welche Ressourcen gesendet werden sollen.
- [Network Error Logging](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Network Error Logging ist ein Mechanismus, der über den `NEL`-HTTP-Antwort-Header konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browser-Erkennung mithilfe des User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist selten eine gute Idee, User-Agent-Sniffing zur Erkennung eines Browsers zu verwenden, aber es gibt Grenzfälle, die es erfordern. Dieses Dokument wird Ihnen dabei helfen, dies so korrekt wie möglich zu tun, wenn dies erforderlich ist, mit einem Schwerpunkt auf Überlegungen, die vor einer Entscheidung dazu angestellt werden sollten.

### Sicherheit und Datenschutz

- [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Die Berechtigungspolitik bietet Mechanismen für Webentwickler, um explizit anzugeben, welche Funktionalität auf einer Website verwendet werden darf und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen für Ressourcen von einer anderen Domain als derjenigen, die die Anfrage stellt. Heutzutage laden Webseiten sehr häufig Cross-Site-Ressourcen, beispielsweise fordert eine Seite 'Domain A' (`http://domaina.example/`) ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element an. CORS ermöglicht es Webentwicklern zu steuern, wie ihre Website auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}}-Antwort-Header zu verwenden, um zu steuern, welche Ressourcen der Client für eine bestimmte Seite laden darf. Der CSP-Leitfaden beschreibt den allgemeinen Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen, einschließlich Cross-Site Scripting (XSS) und Daten-Injection-Angriffe, zu erkennen und zu mildern.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich für den Schutz gegen bestimmte Anfragen von anderen Ursprüngen zu entscheiden (wie jene, die mit Elementen wie `<script>` und `<img>` ausgeführt werden), um spekulative Seitenkanalangriffe zu mindern.
- [Mozilla-Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um Operationsteams bei der Erstellung sicherer Webanwendungen zu unterstützen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind eine wesentliche Komponente in HTTP-Anfragen.
- [Serverkonfiguration für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Änderungen der Serverkonfiguration, die für Ihren Webserver möglicherweise erforderlich sind, um Ogg-Mediendateien korrekt bereitzustellen. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen, um HTTP zu verstehen und Fehler zu beheben.

- [Firefox-Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das darauf abzielt, Entwicklern, Systemadministratoren und Sicherheitsexperten zu helfen, ihre Websites sicher und zuverlässig zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge, um Ihre cache-bezogenen Header zu überprüfen.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, geschrieben in C mit Belastungstest- und Benchmark-Tools sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilenwerkzeug zum Übertragen von Daten, die mit URL-Syntax angegeben sind. Unterstützt HTTP, HTTPS, WS, WSS, unter vielen anderen Protokollen.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Arbeitsweisen von Browsern und den Anforderungsfluss durch das HTTP-Protokoll.

## Referenz

Die [HTTP-Referenz](/de/docs/Web/HTTP/Reference) Dokumentation enthält detaillierte Informationen zu Headern, Anfragemethoden, Statusantworten und listet relevante Spezifikations- und Standardsdokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichten-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden, und um das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen bzw. Senden von Daten an Server, es gibt jedoch auch andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwort-Statuscodes geben das Ergebnis einer spezifischen HTTP-Anfrage an. Antworten werden in fünf Klassen gruppiert: Informationell, erfolgreich, Umleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP seit seiner ersten Spezifikation in den frühen 1990er Jahren auf.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP)-Antwort-Header erlaubt es Website-Administratoren, anzugeben, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können, mit einzelnen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}}-Antwort-Header bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem Dokument oder innerhalb eines beliebigen {{HTMLElement("iframe")}}-Elements im Dokument zu erlauben oder zu verweigern. Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.
