---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschichtprotokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermedia-Dokumenten wie HTML.
Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie die Kommunikation zwischen Maschinen, der programmatische Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anforderung zu stellen, und dann wartet, bis er eine Antwort vom Server erhält.
HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Sitzungsdaten zwischen zwei Anfragen speichert, obwohl die spätere Einführung von [Cookies](/de/docs/Web/HTTP/Cookies) Zustand zu einigen Client-Server-Interaktionen hinzufügt.

## Referenzen

Die HTTP-Referenzdokumentation enthält detaillierte Informationen über Header, Anfragemethoden, Statusantworten und listet relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : Nachricht-Header werden verwendet, um Metadaten über eine Ressource oder eine HTTP-Nachricht zu senden und um das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Anfragemethoden zeigen den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist.
    Die häufigsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server, es gibt jedoch weitere Methoden, die andere Zwecke erfüllen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
  - : Antwortstatuscodes zeigen das Ergebnis einer bestimmten HTTP-Anforderung an.
    Antworten werden in fünf Klassen gruppiert: informativ, erfolgreich, Umleitungen, Client-Fehler und Server-Fehler.
- [HTTP-Ressourcen und -Spezifikationen](/de/docs/Web/HTTP/Resources_and_specifications)
  - : Diese Seite führt relevante Ressourcen zu HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

## HTTP-Leitfäden

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einer einfachen Nachrichtenstruktur und einem Client-Server-Kommunikationsmodell beruht.
Auf diesen Konzepten basierend wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die unten aufgeführten Leitfäden sind in der Reihenfolge von allgemeinen Übersichtsthemen zu spezialisierten, anwendungsfallgetriebenen Themen geordnet.
Anfänger werden ermutigt, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich eingehend mit spezifischeren Artikeln beschäftigen.

- [Überblick über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Funktionen von HTTP, was es leisten kann, sein beabsichtigter Einsatz in der Webarchitektur und seine Position im Protokollstapel.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Herstellen einer Verbindung über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur.
    Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Nachrichtentypen.
- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil in HTTP-Anforderungen.
- [MIME-Typen](/de/docs/Web/HTTP/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden.
    Dieser Artikel erklärt, wie dies mithilfe des {{HTTPHeader("Content-Type")}} Headers und des MIME-Standards erreicht wird.
    Eine kurze Liste der gängigen Typen, die von Webentwicklern verwendet werden, finden Sie unter [Häufige MIME-Typen](/de/docs/Web/HTTP/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Compression)
  - : Browser und Server komprimieren ihre Nachrichten vor dem Senden über das Netzwerk, um die Datenmenge zu reduzieren, die übertragen werden muss, was die Übertragungsgeschwindigkeit und die Bandbreitennutzung verbessert.
- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
  - : Caching ist ein äußerst wichtiges Mechanismus zur Bereitstellung schneller Erlebnisse im Web und zur effizienten Ressourcennutzung.
    Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie man HTTP-Header verwendet, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients bei Anfragen an einen Server zu überprüfen.
    Es stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server einen {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden.
    Der Client gibt dann den Wert des Cookies mit jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}} Anfrages-Headers zurück.
    Dies ermöglicht es, eine kleine Menge an Daten zu speichern und auszutauschen, was effektiv Zustand zu einigen Client-Server-Interaktionen hinzufügt.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Weiterleitung, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zu geben.
    HTTP hat eine spezielle Art von Antwort, genannt HTTP-Umleitung, für diese Operation.
- [HTTP-Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validierers in der Anfrage ab.
    Diese Methode wird häufig im [Caching](/de/docs/Web/HTTP/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern verlorener Aktualisierungen beim Ändern eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zu senden, anstatt die gesamte Ressource.
    Bereichsanfragen sind nützlich in Fällen, in denen ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder in Fällen, in denen eine Anwendung dem Benutzer erlaubt, einen Download zu pausieren und fortzusetzen.
- [Inhaltsverhandlungen](/de/docs/Web/HTTP/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachricht-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Headers/Accept) als eine Möglichkeit für einen Browser, das Format, die Sprache oder die Kodierung zu annoncieren, die es bevorzugt.
    Dieser Artikel erklärt, wie diese Werbung stattfindet, wie der Server darauf reagieren soll und wie er die am besten geeignete Antwort auf eine Anforderung auswählt.
- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte.
    Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile jedes einzelnen.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren erstellt und mehrmals erweitert.
    Dieser Artikel geht durch seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1, bis hin zu HTTP/2 und HTTP/3, sowie die im Laufe der Jahre eingeführten Neuerungen.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus, um eine bereits hergestellte Verbindung mithilfe des {{HTTPHeader("Upgrade")}} Headers auf ein anderes Protokoll zu aktualisieren.
    Ein Client kann eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung in einen [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) aktualisieren.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Proxy_servers_and_tunneling)
  - : Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder überall zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden.
    Diese Seite skizziert einige Grundlagen zu Proxies und führt einige Konfigurationsmöglichkeiten ein.
- [HTTP Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, das Netzwerk, Benutzervorlieben und spezifische Präferenzen des Benutzeragenten anzufordern.
    Der Server kann dann basierend auf den Informationen, die der Client bereitzustellen entscheidet, bestimmen, welche Ressourcen gesendet werden sollen.
- [Netzwerkfehlerprotokollierung](/de/docs/Web/HTTP/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerkfehlerprotokollierung ist ein Mechanismus, der über den `NEL` HTTP-Antwortheader konfiguriert werden kann.
    Dieser experimentelle Header ermöglicht es Websites und Anwendungen, sich anzumelden, um Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkanfragen von unterstützenden Browsern zu erhalten.
- [Browser-Erkennung mithilfe des Benutzeragents](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
  - : Es ist sehr selten eine gute Idee, Benutzeragent-Sniffing zu verwenden, um einen Browser zu erkennen, aber es gibt Randfälle, die es erfordern.
    Dieses Dokument wird Sie dabei anleiten, dies so korrekt wie möglich zu tun, wenn dies notwendig ist, mit einem Schwerpunkt auf Überlegungen, bevor Sie diesen Weg beschreiten.
- [Serverkonfiguration für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige Serverkonfigurationsänderungen, die möglicherweise erforderlich sind, damit Ihr Webserver Ogg-Mediendateien korrekt bereitstellen kann.
    Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

### Sicherheit und Datenschutz

- [Mozilla-Websicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um Betriebsteams bei der Erstellung sicherer Webanwendungen zu helfen.
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
  - : Die Berechtigungsrichtlinie bietet Mechanismen für Webentwickler, um explizit zu erklären, welche Funktionalitäten auf einer Website verwendet werden dürfen und welche nicht.
    Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern können.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domain als der der Ressource, die die Anfrage stellt.
    Webseiten laden heute sehr häufig Cross-Site-Ressourcen, zum Beispiel fordert eine Seite 'Domain A' (`http://domaina.example/`) ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element an.
    CORS ermöglicht Webentwicklern die Kontrolle darüber, wie ihre Seite auf plattformübergreifende Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
  - : CSP erlaubt es Webseitenadministratoren, den {{HTTPHeader("Content-Security-Policy")}} Antwortheader zu verwenden, um zu kontrollieren, welche Ressourcen der Client für eine gegebene Seite laden darf.
    Der CSP-Leitfaden beschreibt den gesamten Content Security Policy Mechanismus, der hilft, bestimmte Arten von Angriffen wie Cross-Site Scripting (XSS) und Dateninjektionsangriffe zu erkennen und zu mildern.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich für Schutz gegen spezifische Anfragen von anderen Ursprüngen (wie jene, die mit Elementen wie `<script>` und `<img>` ausgeführt werden) zu entscheiden, um spekulative Seitenkanalangriffe zu mildern.

## Tools & Ressourcen

Hilfreiche Tools und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten helfen soll, ihre Seiten sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Tools zur Überprüfung Ihrer cachebezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, geschrieben in C mit Lasttest- und Benchmarking-Tools sowie einem HPACK-Encoder und -Decoder.
- [curl](https://github.com/curl/curl)
  - : Ein Befehlszeilenwerkzeug zum Übertragen von Daten, die mit URL-Syntax angegeben sind.
    Unterstützt HTTP, HTTPS, WS, WSS, unter vielen anderen Protokollen.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Abläufe von Browsern und den Anforderungsfluss durch das HTTP-Protokoll.
