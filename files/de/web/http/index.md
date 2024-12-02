---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Application-Layer](https://en.wikipedia.org/wiki/Application_Layer)-Protokoll zur Übertragung von Hypermedia-Dokumenten, wie HTML. Es wurde für die Kommunikation zwischen Web-Browsern und Web-Servern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie zum Beispiel Maschinen-zu-Maschinen-Kommunikation, programmgesteuerten Zugang zu APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), wobei ein Client eine Verbindung öffnet, um eine Anfrage zu stellen und dann wartet, bis er eine Antwort vom Server erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl durch die spätere Hinzufügung von [Cookies](/de/docs/Web/HTTP/Cookies) in manchen Client-Server-Interaktionen ein Zustand hinzugefügt wird.

## Referenzen

Die HTTP-Referenzdokumentation enthält detaillierte Informationen zu Headern, Anfrage-Methoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : Nachrichten-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und um das Verhalten des Clients oder Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist. Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, aber es gibt auch andere Methoden, die verschiedene Zwecke erfüllen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
  - : Antwortstatuscodes zeigen das Ergebnis einer bestimmten HTTP-Anfrage an. Antworten werden in fünf Klassen gruppiert: informativ, erfolgreich, Weiterleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen über HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

## HTTP-Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer einfachen Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell beruht. Auf Basis dieser Konzepte wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionen und aktualisierte Semantiken hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die folgenden Leitfäden sind in der Reihenfolge von allgemeinen Übersichten zu spezialisierten, anwendungsbezogenen Themen aufgelistet. Anfängern wird empfohlen, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich spezialisierteren Artikeln zuwenden.

- [Übersicht über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es tun kann, seine beabsichtigte Verwendung in der Webarchitektur und seine Position im Protokollstack.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Aufbau einer Verbindung, über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur. Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Arten von Nachrichten.
- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [MIME-Typen](/de/docs/Web/HTTP/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mit dem {{HTTPHeader("Content-Type")}} Header und dem MIME-Standard erreicht wird. Eine kurze Liste gängiger Typen, die Webentwickler verwenden, finden Sie in [Gängige MIME-Typen](/de/docs/Web/HTTP/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Compression)
  - : Browser und Server komprimieren ihre Nachrichten vor dem Versenden über das Netzwerk, um die Menge der zu übertragenden Daten zu reduzieren, wodurch die Übertragungsgeschwindigkeit und die Bandbreitennutzung verbessert werden.
- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
  - : Caching ist ein äußerst wichtiger Mechanismus, um schnelle Erlebnisse im Internet zu bieten und Ressourcen effizient zu nutzen. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie man HTTP-Header verwendet, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu überprüfen. Sie stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden. Der Client gibt dann den Cookie-Wert bei jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}} Anforderungs-Headers zurück. Dies ermöglicht es, eine kleine Menge an Daten zu speichern und auszutauschen, was tatsächlich zu client-server Interaktionen einen Zustand hinzufügt.
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, einen HTTP-Redirect, für diese Operation.
- [HTTP-bedingsanfragen](/de/docs/Web/HTTP/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validierers in der Anfrage ab. Diese Methode wird stark im [Caching](/de/docs/Web/HTTP/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, der Verhinderung verlorener Updates bei der Bearbeitung eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
  - : Eine Bereichsanfrage bittet den Server, einen spezifischen Teil (oder Teile) einer Ressource an einen Client zurückzusenden, anstatt die gesamte Ressource. Bereichsanfragen sind nützlich, wenn ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder für Fälle, in denen eine Anwendung es dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Headers/Accept) als Möglichkeit für einen Browser, das bevorzugte Format, die Sprache oder die Kodierung anzugeben. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server reagieren soll und wie er die passendste Antwort auf eine Anfrage auswählt.
- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die beständige Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte einschließlich der Vor- und Nachteile jedes einzelnen.
- [Evolution von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrmals erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1, über HTTP/2 und HTTP/3, sowie Neuheiten, die im Laufe der Jahre eingeführt wurden.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits bestehende Verbindung über den {{HTTPHeader("Upgrade")}} Header auf ein anderes Protokoll zu aktualisieren. Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf ein [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) aktualisieren.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Benutzers befinden oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet. Diese Seite gibt einen Überblick über einige Grundlagen von Proxys und stellt einige Konfigurationsoptionen vor.
- [HTTP Client Hints](/de/docs/Web/HTTP/Client_hints)
  - : Client Hints sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, die Benutzer- und Benutzeragent-spezifischen Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitstellt, bestimmen, welche Ressourcen gesendet werden sollen.
- [Network Error Logging](/de/docs/Web/HTTP/Network_Error_Logging) {{experimental_inline}}
  - : Network Error Logging ist ein Mechanismus, der über den `NEL` HTTP-Antwortheader konfiguriert werden kann. Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Browsererkennung mithilfe des User-Agents](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, User-Agent-Sniffing zu verwenden, um einen Browser zu erkennen, aber es gibt Sonderfälle, die es erfordern. Dieses Dokument wird Ihnen helfen, dies so korrekt wie möglich zu tun, wenn dies notwendig ist, mit besonderem Schwerpunkt auf Überlegungen, die zu treffen sind, bevor Sie diesen Weg beschreiten.
- [Konfiguration von Servern für Ogg-Medien](/de/docs/Web/Media/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Serverkonfigurationsänderungen, die für Ihren Webserver möglicherweise erforderlich sind, um Ogg-Mediendateien korrekt bereitzustellen. Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht erkennt.

### Sicherheit und Datenschutz

- [Mozilla-Websicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um operative Teams bei der Erstellung sicherer Webanwendungen zu unterstützen.
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
  - : Permissions Policy bietet Mechanismen für Webentwickler, um explizit zu deklarieren, welche Funktionen auf einer Website verwendet werden können und welche nicht. Sie definieren eine Reihe von "Policies", die steuern, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen modifizieren.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen für Ressourcen von einer anderen Domain als der Ressource, die die Anfrage stellt. Heutzutage laden Webseiten sehr häufig Cross-Site-Ressourcen, zum Beispiel fordert eine Seite 'Domain A' (`http://domaina.example/`) ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element an. CORS ermöglicht es Webentwicklern, zu kontrollieren, wie ihre Seite auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwortheader zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine bestimmte Seite laden darf. Der CSP-Leitfaden beschreibt den gesamten Content Security Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen, einschließlich Cross-Site-Scripting (XSS) und Dateninjektionsangriffe, zu erkennen und abzuschwächen.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, den Schutz gegen bestimmte Anfragen von anderen Ursprüngen (wie solche, die mit Elementen wie `<script>` und `<img>` ausgegeben werden) zu aktivieren, um spekulative Seitenkanalangriffe zu mildern.

## Tools & Ressourcen

Hilfreiche Tools und Ressourcen zum Verständnis und Debuggen von HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Seiten sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Tools, um Ihre Cache-bezogenen Header zu überprüfen.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, geschrieben in C, mit Lasttest- und Benchmark-Tools sowie einem HPACK-Codierer und -Dekodierer.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilen-Tool zum Übertragen von Daten, die in URL-Syntax spezifiziert sind. Unterstützt HTTP, HTTPS, WS, WSS, unter vielen anderen Protokollen.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über Browser-Interna und den Anforderungsfluss durch das HTTP-Protokoll.
