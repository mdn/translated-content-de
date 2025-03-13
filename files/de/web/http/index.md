---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungs-Layer](https://en.wikipedia.org/wiki/Application_Layer) Protokoll zur Übertragung von Hypermedia-Dokumenten, wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann jedoch auch für andere Zwecke verwendet werden, wie z. B. Maschine-zu-Maschine-Kommunikation, programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Einführung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) dem Client-Server-Interaktionen Zustand hinzufügen kann.

## Referenzdokumentation

Die HTTP-Referenzdokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standards auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichten-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage und die erwarteten Ergebnisse im Falle eines erfolgreichen Antrags an. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, es gibt jedoch auch andere Methoden, die unterschiedliche Zwecke erfüllen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes geben das Ergebnis einer bestimmten HTTP-Anfrage an. Die Antworten sind in fünf Klassen eingeteilt: informativ, erfolgreich, Umleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er-Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls erwähnenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwort-Header ermöglicht es Website-Administratoren, festzulegen, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können, mit einzelnen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie verwendet werden können.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}} Antwort-Header bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb eines {{HTMLElement("iframe")}} Elements im Dokument zu erlauben oder zu verweigern. Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit einzelnen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie verwendet werden können.

## HTTP-Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer einfachen Nachrichtenstruktur und dem Client-Server-Kommunikationsmodell basiert. Auf Grundlage dieser Konzepte wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, einschließlich zusätzlicher HTTP-Methoden und Header.

Die unten aufgeführten Leitfäden sind in der Reihenfolge von allgemeinen Übersichten bis hin zu spezialisierten, anwendungsfallorientierten Themen gelistet. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich auf spezialisiertere Artikel konzentrieren.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es leisten kann, seine beabsichtigte Verwendung in der Web-Architektur und seine Position im Protokollstapel.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrmals erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 bis hin zu HTTP/2 und HTTP/3, sowie Neuheiten, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Verbindungsaufbau und Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Nachrichtentypen.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Inhaltstypen übertragen werden. Dieser Artikel erklärt, wie dies mit dem {{HTTPHeader("Content-Type")}} Header und dem MIME-Standard erreicht wird. Eine kurze Liste der gängigen von Webentwicklern verwendeten Typen finden Sie unter [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die zu übertragende Datenmenge zu reduzieren, was die Übertragungsgeschwindigkeit und die Bandbreitenauslastung verbessert.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein sehr wichtiges Mechanismus, um schnelle Erlebnisse im Web zu bieten und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie man HTTP-Header verwendet, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist ein Weg zur Überprüfung der Identität eines Clients bei der Abgabe von Anfragen an einen Server. Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden. Der Client sendet dann den Wert des Cookies bei jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}} Anforderungs-Headers zurück. Dies ermöglicht die Speicherung und den Austausch einer kleinen Datenmenge, die effektiv Zustand zu einigen Client-Server-Interaktionen hinzufügt.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Umleitung, auch als URL-Weiterleitung bekannt, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, die als HTTP-Redirect bezeichnet wird, für diese Operation.
- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : In bedingten Anfragen hängt das Ergebnis einer Anfrage von dem Wert eines Validierers in der Anfrage ab. Diese Methode wird stark im [Caching](/de/docs/Web/HTTP/Guides/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern von verlorenen Updates beim Ändern eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zurückzusenden, anstatt die gesamte Ressource. Bereichsanfragen sind nützlich in Fällen, in denen ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, in denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) als Mittel, für einen Browser das Format, die Sprache oder die Kodierung zu verkünden, die er bevorzugt. Dieser Artikel erklärt, wie diese Bekanntgabe stattfindet, wie der Server erwartet wird zu reagieren und wie er die geeignetste Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile von jedem.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits etablierte Verbindung zu einem anderen Protokoll mittels des {{HTTPHeader("Upgrade")}} Header zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung zu einer [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) aktualisieren.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden. Diese Seite skizziert einige Grundlagen zu Proxies und stellt einige Konfigurationsoptionen vor.
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, benutzerspezifische und benutzeragentenspezifische Präferenzen anzufordern. Der Server kann dann bestimmen, welche Ressourcen darauf basierend, sendet, welche Informationen der Client bereit ist zur Verfügung zu stellen.
- [Netzwerkprotokollfehlerprotokollierung](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerkfehlerprotokollierung ist ein Mechanismus, der über den `NEL` HTTP-Antwort-Header konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browser-Erkennung mithilfe des User-Agents](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, User-Agent-Sniffing zur Erkennung eines Browsers zu verwenden, aber es gibt Ausnahmefälle, die es erfordern. Dieses Dokument wird Ihnen dabei helfen, dies so korrekt wie möglich zu tun, wenn es notwendig ist, mit einem Schwerpunkt auf Überlegungen, die getroffen werden sollten, bevor man diesen Weg einschlägt.

### Sicherheit und Datenschutz

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Berechtigungsrichtlinie bietet Mechanismen für Webentwickler, um explizit zu deklarieren, welche Funktionalität auf einer Website genutzt werden kann und welche nicht. Sie definieren einen Satz von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domain als derjenigen, die die Anfrage selbst initiiert. Webseiten laden heute sehr häufig Cross-Site-Ressourcen, zum Beispiel eine Seite 'Domain A' (`http://domaina.example/`) fordert ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img` Element an. CORS ermöglicht es Webentwicklern zu kontrollieren, wie ihre Website auf Cross-Site-Anfragen reagiert.
- [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwort-Header zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine bestimmte Seite laden darf. Der CSP-Leitfaden beschreibt den gesamten Content Security Policy Mechanismus, der hilft, bestimmte Arten von Angriffen zu erkennen und zu mildern, einschließlich Cross-Site-Scripting (XSS) und Dateninjektionsangriffen.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, Schutz gegen spezifische Anfragen von anderen Ursprüngen (wie diejenigen, die mit Elementen wie `<script>` und `<img>` ausgeführt werden), um spekulative Seitenkanalangriffe zu mildern.
- [Mozilla-Richtlinien zur Websicherheit](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, die betrieblichen Teams dabei helfen, sichere Webanwendungen zu erstellen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Internet zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden umfasst einige Änderungen an der Serverkonfiguration, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bedienen kann. Diese Informationen könnten auch nützlich sein, wenn Sie mit anderen Medientypen konfrontiert werden, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Werkzeuge & Ressourcen

Nützliche Werkzeuge und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP-Observatorium](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Seiten sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer cachebezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, die in C geschrieben ist, mit Lasttest- und Benchmarking-Werkzeugen sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilenwerkzeug zum Übertragen von Daten gemäß der URL-Syntax. Unterstützt HTTP, HTTPS, WS, WSS, neben vielen anderen Protokollen.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel zu Browser-Interna und Anfragenfluss durch das HTTP-Protokoll.
