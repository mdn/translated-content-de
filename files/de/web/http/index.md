---
title: "HTTP: Hypertext Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: bd5271a96d814ed6876e974186c465f1b3959e07
---

**HTTP** ist ein Protokoll der [Anwendungsschicht](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten wie HTML.
Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, etwa für die Kommunikation zwischen Maschinen oder den programmatischen Zugriff auf APIs.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model): Ein Client baut eine Verbindung auf, um eine Anfrage zu stellen, und wartet dann auf die Antwort des Servers.
HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol). Das bedeutet, dass der Server zwischen zwei Anfragen keine Sitzungsdaten speichert. Die später eingeführten [Cookies](/de/docs/Web/HTTP/Guides/Cookies) ermöglichen jedoch bei manchen Client-Server-Interaktionen die Speicherung von Zustandsinformationen.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer grundlegenden Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell beruht.
Auf dieser Grundlage wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionen und aktualisierte Semantik hinzufügen, darunter weitere HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind von allgemeinen Übersichten bis hin zu spezialisierten, anwendungsbezogenen Themen geordnet.
Einsteigern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich mit spezielleren Artikeln befassen.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Eigenschaften von HTTP, seine Möglichkeiten, seine vorgesehene Verwendung in der Webarchitektur und seine Position im Protokollstapel.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde Anfang der 1990er-Jahre entwickelt und seitdem mehrfach erweitert.
    Dieser Artikel zeichnet seine Geschichte nach und beschreibt HTTP/0.9, HTTP/1.0 und HTTP/1.1 bis hin zu HTTP/2 und HTTP/3 sowie Neuerungen, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung – vom Aufbau einer Verbindung über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine festgelegte Struktur.
    Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Nachrichtentypen.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden.
    Dieser Artikel erklärt, wie dies mithilfe des Headers {{HTTPHeader("Content-Type")}} und des MIME-Standards funktioniert.
    Eine kurze Liste gängiger Typen, die Webentwickler verwenden, finden Sie unter [Gängige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie sie über das Netzwerk senden. Dadurch müssen weniger Daten übertragen werden, was die Übertragungsgeschwindigkeit und die Ausnutzung der Bandbreite verbessert.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein wichtiger Mechanismus, um schnelle Nutzungserlebnisse im Web zu ermöglichen und Ressourcen effizient einzusetzen.
    Dieser Artikel beschreibt verschiedene Caching-Methoden und wie sie sich mithilfe von HTTP-Headern steuern lassen.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Mithilfe der Authentifizierung lässt sich die Identität eines Clients überprüfen, wenn er Anfragen an einen Server stellt.
    Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [HTTP-Cookies verwenden](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server mit seiner Antwort einen {{HTTPHeader("Set-Cookie")}}-Header senden.
    Der Client sendet den Wert des Cookies anschließend bei jeder weiteren Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}}-Anfrage-Headers zurück.
    So können kleine Datenmengen gespeichert und ausgetauscht werden, wodurch manche Client-Server-Interaktionen Zustandsinformationen erhalten.
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : Eine URL-Weiterleitung ist eine Technik, mit der eine Seite, ein Formular, eine ganze Website oder eine Webanwendung unter mehreren URL-Adressen erreichbar gemacht wird.
    HTTP stellt für diesen Vorgang eine besondere Art von Antwort bereit, die HTTP-Weiterleitung.
- [Bedingte HTTP-Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab.
    Diese Methode wird häufig beim [Caching](/de/docs/Web/HTTP/Guides/Caching) sowie für Anwendungsfälle wie das Fortsetzen eines Downloads oder das Verhindern verlorener Änderungen bei der Bearbeitung eines Dokuments auf dem Server eingesetzt.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Bei einer Bereichsanfrage wird der Server aufgefordert, statt der vollständigen Ressource einen bestimmten Teil oder mehrere Teile davon an einen Client zurückzusenden.
    Bereichsanfragen sind nützlich, wenn ein Client nur einen Teil einer großen Datei benötigt oder wenn eine Anwendung Benutzern ermöglicht, einen Download anzuhalten und fortzusetzen.
- [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept), über die ein Browser sein bevorzugtes Format, seine bevorzugte Sprache oder Codierung mitteilen kann.
    Dieser Artikel erklärt, wie diese Mitteilung erfolgt, wie der Server darauf reagieren soll und wie er die am besten geeignete Antwort auf eine Anfrage auswählt.
- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste HTTP-Version, die persistente Verbindungen und Pipelining unterstützte.
    Dieser Artikel erläutert beide Konzepte sowie ihre jeweiligen Vor- und Nachteile.
- [Mechanismus für Protokoll-Upgrades](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits bestehende Verbindung mithilfe des Headers {{HTTPHeader("Upgrade")}} auf ein anderes Protokoll umzustellen.
    Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) umstellen.
- [Proxyserver und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer eines Benutzers oder an einer beliebigen Stelle zwischen diesem Computer und einem Zielserver im Internet befinden.
    Diese Seite erläutert einige Grundlagen zu Proxys und stellt einige Konfigurationsmöglichkeiten vor.
- [HTTP Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client Hints sind eine Reihe von Antwort-Headern, mit denen ein Server proaktiv Informationen über das Gerät, das Netzwerk, den Benutzer und User-Agent-spezifische Präferenzen von einem Client anfordern kann.
    Anhand der Informationen, die der Client bereitstellt, kann der Server entscheiden, welche Ressourcen er sendet.
- [Protokollierung von Netzwerkfehlern](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Network Error Logging ist ein Mechanismus, der über den HTTP-Antwort-Header `NEL` konfiguriert werden kann.
    Mit diesem experimentellen Header können Websites und Anwendungen festlegen, dass sie von unterstützenden Browsern Berichte über fehlgeschlagene – oder sogar erfolgreiche – Netzwerkabrufe erhalten möchten.
- [Browsererkennung anhand des User Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Die Erkennung eines Browsers anhand seines User Agents ist nur sehr selten eine gute Idee, kann aber in Ausnahmefällen erforderlich sein.
    Dieses Dokument zeigt Ihnen, wie Sie dabei gegebenenfalls möglichst korrekt vorgehen, und legt besonderen Wert auf Überlegungen, die Sie vor dieser Entscheidung anstellen sollten.

### Sicherheit und Datenschutz

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Permissions Policy bietet Webentwicklern Mechanismen, mit denen sie ausdrücklich festlegen können, welche Funktionen auf einer Website verwendet werden dürfen und welche nicht.
    Dazu definieren Sie „Policies“, die einschränken, auf welche APIs der Code der Website zugreifen kann, oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Siteübergreifende HTTP-Anfragen fordern Ressourcen von einer anderen Domain als der Domain der anfragenden Ressource an.
    Webseiten laden heute häufig siteübergreifende Ressourcen. Beispielsweise fordert eine Seite auf „Domain A“ (`http://domaina.example/`) über das Element `img` ein Bild auf „Domain B“ (`http://domainb.foo/image.jpg`) an.
    Mit CORS können Webentwickler steuern, wie ihre Website auf siteübergreifende Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : Mit dem Antwort-Header {{HTTPHeader("Content-Security-Policy")}} können Website-Administratoren festlegen, welche Ressourcen der Client für eine bestimmte Seite laden darf.
    Der CSP-Leitfaden beschreibt den allgemeinen Mechanismus von Content Security Policy, der dabei hilft, bestimmte Arten von Angriffen zu erkennen und abzuwehren, darunter Cross-Site Scripting (XSS) und Data-Injection-Angriffe.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/Security/Practical_implementation_guides/CORP)
  - : Mit CORP können Websites und Anwendungen Schutz vor bestimmten Anfragen von anderen Origins aktivieren, etwa vor Anfragen, die durch Elemente wie `<script>` und `<img>` ausgelöst werden. So lassen sich spekulative Seitenkanalangriffe abschwächen.
- [Mozilla-Richtlinien zur Websicherheit](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, die Betriebsteams bei der Erstellung sicherer Webanwendungen unterstützt.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren. Sie sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Server für Ogg-Medien konfigurieren](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Änderungen an der Serverkonfiguration, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellt.
    Die Informationen können auch hilfreich sein, wenn Sie auf andere Medientypen stoßen, für deren Erkennung Ihr Server noch nicht konfiguriert ist.

## Werkzeuge und Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verständnis und zur Fehlersuche bei HTTP.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkanalyse](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten hilft, ihre Websites sicher zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer Caching-Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine in C geschriebene HTTP/2-Implementierung für Clients, Server und Proxys mit Werkzeugen für Lasttests und Benchmarks sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilenwerkzeug zum Übertragen von Daten, die mit URL-Syntax angegeben werden.
    Es unterstützt neben vielen anderen Protokollen HTTP, HTTPS, WS und WSS.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Abläufe von Browsern und den Ablauf von Anfragen über das HTTP-Protokoll.

## Referenz

Die [HTTP-Referenz](/de/docs/Web/HTTP/Reference) enthält detaillierte Informationen zu Headern, Anfragemethoden und Antwortstatuscodes sowie Listen relevanter Spezifikationen und Standarddokumente.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichten-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck einer Anfrage an und bestimmen, was bei einer erfolgreichen Anfrage erwartet wird.
    Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} zum Abrufen und {{HTTPMethod("POST")}} zum Senden von Daten an Server. Daneben gibt es weitere Methoden für andere Zwecke.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes geben das Ergebnis einer bestimmten HTTP-Anfrage an.
    Antworten werden in fünf Klassen eingeteilt: informierende Antworten, erfolgreiche Antworten, Weiterleitungen, Clientfehler und Serverfehler.
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen zu HTTP seit seiner ersten Spezifikation Anfang der 1990er-Jahre auf.

Auch die folgenden Unterabschnitte sind erwähnenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Mit dem Antwort-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) können Website-Administratoren festlegen, welche Ressourcen der User Agent für eine bestimmte Seite laden darf.
    Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können. Eigene Dokumentationsseiten beschreiben jeweils, wie die Direktiven funktionieren und wie sie verwendet werden.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der Antwort-Header {{HTTPHeader("Permissions-Policy")}} bietet einen Mechanismus, um die Verwendung von Browserfunktionen in einem Dokument oder innerhalb eines {{HTMLElement("iframe")}}-Elements im Dokument zu erlauben oder zu verweigern.
    Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können. Eigene Dokumentationsseiten beschreiben jeweils, wie die Direktiven funktionieren und wie sie verwendet werden.
