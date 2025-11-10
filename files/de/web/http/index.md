---
title: "HTTP: Hypertext Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie zum Beispiel für die Kommunikation zwischen Maschinen, den programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Hinzufügung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) einigen Client-Server-Interaktionen Zustand hinzufügt.

## Referenz

Die [HTTP-Referenz](/de/docs/Web/HTTP/Reference) Dokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichtenheader werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage und das erwartete Ergebnis an, wenn die Anfrage erfolgreich ist. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, aber es gibt auch andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes geben das Ergebnis einer bestimmten HTTP-Anfrage an. Antworten werden in fünf Klassen gruppiert: informativ, erfolgreich, Umleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwortheader erlaubt es Website-Administratoren, festzulegen, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf. Dieser Abschnitt listet die Direktiven auf, die in einem CSP-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}} Antwortheader bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb eines {{HTMLElement("iframe")}}-Elements im Dokument zu erlauben oder zu verweigern. Dieser Abschnitt listet die Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit individuellen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie sie zu verwenden sind.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das sich auf Konzepte wie Ressourcen und Uniform Resource Identifiers (URIs), eine grundlegende Nachrichtenstruktur und das Client-Server-Kommunikationsmodell stützt. Auf der Grundlage dieser Konzepte wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, darunter zusätzliche HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind nach ihrer Eignung von allgemeinen Übersichten bis zu spezialisierten, anwendungsfallorientierten Themen geordnet. Anfänger sollten mit den grundlegenden Leitfäden beginnen, bevor sie sich mit fokussierteren Artikeln beschäftigen.

- [Übersicht über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es leisten kann, sein vorgesehenes Einsatzgebiet in der Web-Architektur und seine Position im Protokollstapel.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und wurde mehrfach erweitert. Dieser Artikel beschreibt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 bis hin zu HTTP/2 und HTTP/3 sowie Neuerungen, die im Laufe der Jahre eingeführt wurden.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Aufbau einer Verbindung, dem Senden einer Anfrage bis zum Erhalten einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Arten von Nachrichten.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mithilfe des {{HTTPHeader("Content-Type")}} Headers und des MIME-Standards durchgeführt wird. Eine kurze Liste gängiger Typen, die von Webentwicklern verwendet werden, finden Sie in [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Kompression in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die Datenmenge zu reduzieren, die übertragen werden muss, was die Übertragungsgeschwindigkeit und die Bandbreitennutzung verbessert.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein äußerst wichtiges Mechanismus, um im Web schnelle Erlebnisse zu liefern und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie HTTP-Header verwendet werden, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu überprüfen. Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden. Der Client gibt dann den Cookie-Wert mit jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}} Anforderungsheaders zurück. Dies ermöglicht es, eine kleine Menge an Daten zu speichern und auszutauschen, was effektiv Zustand zu einigen Client-Server-Interaktionen hinzufügt.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Umleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, die als HTTP-Umleitung bezeichnet wird, für diesen Vorgang.
- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab. Diese Methode wird häufig beim [Caching](/de/docs/Web/HTTP/Guides/Caching) und bei Anwendungsfällen wie der Fortsetzung eines Downloads, dem Verhindern verlorener Aktualisierungen beim Ändern eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Teilanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Teilanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zu senden, anstatt die vollständige Ressource. Teilanfragen sind nützlich, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder wenn eine Anwendung es dem Benutzer ermöglicht, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichtenheadern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) als eine Möglichkeit für einen Browser, das Format, die Sprache oder die Kodierung anzugeben, das bzw. die er bevorzugt. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren und wie er die am besten geeignete Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile jedes einzelnen.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits aufgebaute Verbindung mithilfe des {{HTTPHeader("Upgrade")}} Headers auf ein anderes Protokoll zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf ein [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) upgraden.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Nutzers befinden oder irgendwo zwischen dem Computer des Nutzers und einem Zielserver im Internet. Diese Seite erläutert einige Grundlagen zu Proxys und stellt einige Konfigurationsoptionen vor.
- [HTTP-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client Hints sind ein Satz von Antwortheadern, die ein Server verwenden kann, um proaktiv Informationen vom Client über das Gerät, das Netzwerk, spezifische Benutzer- und Benutzeragenten-Präferenzen anzufordern. Der Server kann dann bestimmen, welche Ressourcen basierend auf den Informationen, die der Client bereitzustellen wählt, gesendet werden sollen.
- [Netzwerk-Fehlerprotokollierung](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerk-Fehlerprotokollierung ist ein Mechanismus, der über den `NEL`-HTTP-Antwortheader konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browser-Erkennung mittels Benutzeragent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, Benutzeragent-Sniffing zur Erkennung eines Browsers zu verwenden, aber es gibt Randfälle, die es erfordern. Dieses Dokument wird Sie dabei anleiten, dies so korrekt wie möglich zu tun, wenn dies erforderlich ist, mit einem Schwerpunkt auf Überlegungen, die vor dem Einschlagen dieses Weges zu treffen sind.

### Sicherheit und Datenschutz

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Die Berechtigungsrichtlinie bietet Mechanismen für Webentwickler, um ausdrücklich festzulegen, welche Funktionalitäten auf einer Website genutzt werden können und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domäne als der, von der die Anfrage ausgeht. Heutzutage laden Webseiten sehr häufig plattformübergreifende Ressourcen, zum Beispiel, eine Seite 'Domain A' (`http://domaina.example/`) fordert ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img` Element an. CORS ermöglicht es Webentwicklern, zu steuern, wie ihre Seite auf plattformübergreifende Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, mit dem {{HTTPHeader("Content-Security-Policy")}} Antwortheader zu kontrollieren, welche Ressourcen der Client für eine gegebene Seite laden darf. Der CSP-Leitfaden beschreibt den Gesamten Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen zu erkennen und zu mildern, einschließlich Cross-Site Scripting (XSS) und Dateninjektionsangriffe.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich vor bestimmten Anfragen von anderen Ursprüngen (wie z.B. die, die mit Elementen wie `<script>` und `<img>` gesendet werden) zu schützen, um spekulative Seitenkanalangriffe zu mindern.
- [Mozilla-Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um betrieblichen Teams bei der Erstellung sicherer Webanwendungen zu helfen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren, und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Änderungen an der Serverkonfiguration, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bedienen kann. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Werkzeuge & Ressourcen

Nützliche Werkzeuge und Ressourcen zum Verständnis und zur Fehlersuche bei HTTP.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Sites sicher zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge, um Ihre cache-bezogenen Header zu überprüfen.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung in C mit Load-Test- und Benchmarking-Tools sowie einem HPACK-Coder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilen-Tool zum Übertragen von Daten mit der URL-Syntax. Unterstützt HTTP, HTTPS, WS, WSS und viele andere Protokolle.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die inneren Abläufe von Browsern und den Anforderungsfluss durch das HTTP-Protokoll.
