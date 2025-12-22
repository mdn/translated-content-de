---
title: "HTTP: Hypertext Transfer Protocol"
short-title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: d1f3f179175c80c18b1b78ba0df0ea7d15ca32cc
---

**HTTP** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie z. B. die Kommunikation zwischen Maschinen, den programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung eröffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Einführung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) in einigen Client-Server-Interaktionen Zustand hinzufügt.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und einheitlichen Ressourcenkennungen (Uniform Resource Identifiers, URIs), einer grundlegenden Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell beruht. Auf diesen Konzepten basierend wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionen und aktualisierte Semantiken hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind von allgemeinen Übersichten bis hin zu spezialisierten, anwendungsfallgesteuerten Themen aufgelistet. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich auf fokussiertere Artikel einlassen.

- [Übersicht über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die Grundfunktionen von HTTP, was es leisten kann, seine beabsichtigte Nutzung in der Webarchitektur und seine Position im Protokoll-Stack.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrmals erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1, sowie HTTP/2 und HTTP/3 und die im Laufe der Jahre eingeführten Neuerungen.
- [Ein typischer HTTP-Dialog](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, von der Verbindungserstellung und dem Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Nachrichtentypen.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mithilfe des {{HTTPHeader("Content-Type")}} Headers und dem MIME-Standard erreicht wird. Eine kurze Liste der von Webentwicklern häufig verwendeten Typen finden Sie unter [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die Datenmenge zu reduzieren, die übertragen werden muss, und so Transfergeschwindigkeit und Bandbreitennutzung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein äußerst wichtiger Mechanismus, um schnelle Erfahrungen im Web zu liefern und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Caching-Methoden und wie HTTP-Header verwendet werden können, um diese zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist ein Mittel zur Überprüfung der Identität eines Clients bei Anfragen an einen Server. Sie gewährleistet, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden. Der Client gibt dann den Wert des Cookies bei jeder nachfolgenden Anfrage in Form eines {{HTTPHeader("Cookie")}} Anforderungsheaders an den Server zurück. Dies ermöglicht es, eine kleine Menge an Daten zu speichern und auszutauschen, wodurch effektiv in einigen Client-Server-Interaktionen Zustand hinzugefügt wird.
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, mehr als einer URL-Adresse für eine Seite, ein Formular, eine ganze Website oder eine Webanwendung zu geben. HTTP hat einen speziellen Antworttyp, genannt HTTP-Redirect, für diesen Vorgang.
- [HTTP bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab. Diese Methode wird intensiv im [Caching](/de/docs/Web/HTTP/Guides/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern verlorener Aktualisierungen beim Ändern eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zurückzusenden, anstatt die gesamte Ressource. Bereichsanfragen sind nützlich in Fällen, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, in denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichtenheadern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept) als eine Möglichkeit für einen Browser, das Format, die Sprache oder Kodierung, die er bevorzugt, anzukündigen. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren und wie er die angemessenste Antwort auf eine Anfrage auswählt.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die dauerhafte Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte einschließlich der Vor- und Nachteile.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits hergestellte Verbindung auf ein anderes Protokoll mithilfe des {{HTTPHeader("Upgrade")}} Headers zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf einen [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) upgraden.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden. Diese Seite beschreibt einige Grundlagen zu Proxys und stellt einige Konfigurationsoptionen vor.
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, Netzwerk, benutzerspezifische Präferenzen sowie agentenspezifische Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitstellt, bestimmen, welche Ressourcen gesendet werden sollen.
- [Netzwerk-Fehlerprotokollierung](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerk-Fehlerprotokollierung ist ein Mechanismus, der über den `NEL` HTTP-Antwortheader konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browsererkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden, um einen Browser zu erkennen, aber es gibt Randfälle, die dies erfordern. Dieses Dokument wird Sie anleiten, dies so korrekt wie möglich zu tun, wenn es notwendig ist, wobei besonderes Augenmerk auf Überlegungen gelegt wird, die vor dem Einschlagen dieses Weges getroffen werden sollten.

### Sicherheit und Datenschutz

- [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Berechtigungsrichtlinien bieten Mechanismen für Webentwickler, um ausdrücklich zu erklären, welche Funktionalität auf einer Website verwendet werden darf und nicht verwendet werden kann. Sie definieren eine Reihe von "Richtlinien", die den Zugriff auf APIs des Codes der Website einschränken oder das Standardverhalten des Browsers für bestimmte Funktionen ändern.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domäne als der Domäne der Ressource, die die Anfrage stellt. Webseiten laden heute sehr häufig Cross-Site-Ressourcen, z. B. eine Seite "Domain A" (`http://domaina.example/`), die ein Bild auf "Domain B" (`http://domainb.foo/image.jpg`) über das `img`-Element anfordert. CORS ermöglicht es Webentwicklern, zu kontrollieren, wie ihre Website auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwortheader zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine gegebene Seite laden darf. Der CSP-Leitfaden beschreibt den gesamten Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen, einschließlich Cross-Site-Scripting (XSS) und Dateninjektionsangriffe, zu erkennen und zu mindern.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP lässt Websites und Anwendungen Schutz gegen spezifische Anfragen von anderen Ursprüngen (wie die mit Elementen wie `<script>` und `<img>` gestellten) zu aktivem Schutz vor spekulativen Seitenkanalangriffen zu.
- [Mozilla Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, die Betriebsteams bei der Erstellung sicherer Webanwendungen helfen sollen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Einheitliche Ressourcenkennungen (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren, und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Serverkonfigurationen für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden deckt einige Server-Konfigurationsänderungen ab, die möglicherweise notwendig sind, damit Ihr Webserver Ogg-Mediendateien korrekt dient. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server nicht bereits erkennt.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verständnis und Debuggen von HTTP.

- [Firefox Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Websites sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer cachingbezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine in C geschriebene HTTP/2-Client-, Server- und Proxy-Implementierung mit Lasttest- und Benchmarking-Tools sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Befehlszeilenwerkzeug zum Übertragen von Daten, die mit der URL-Syntax angegeben werden. Unterstützt HTTP, HTTPS, WS, WSS, unter vielen anderen Protokollen.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über Browserinterna und Anfragenfluss durch das HTTP-Protokoll.

## Referenz

Die [HTTP-Referenz](/de/docs/Web/HTTP/Reference) Dokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Normendokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichtenheader werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage und das zu erwartende Ergebnis im Erfolgsfall an. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, es gibt jedoch auch andere Methoden, die unterschiedlichen Zwecken dienen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Statuscodes der Antwort zeigen das Ergebnis einer speziellen HTTP-Anfrage an. Antworten sind in fünf Klassen gruppiert: informativ, erfolgreich, Weiterleitungen, Clientfehler und Serverfehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwortheader erlaubt es Website-Administratoren, zu spezifizieren, welche Ressourcen der Benutzeragent für eine gegebene Seite laden darf. Dieser Abschnitt listet Direktiven, die in einem CSP-Header verwendet werden können, mit einzelnen Dokumentationsseiten auf, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.
- [Permissions Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}} Antwortheader bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder innerhalb eines {{HTMLElement("iframe")}} Elements im Dokument zuzulassen oder zu verweigern. Dieser Abschnitt listet Direktiven, die in einem Permissions Policy-Header verwendet werden können, mit einzelnen Dokumentationsseiten auf, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.
