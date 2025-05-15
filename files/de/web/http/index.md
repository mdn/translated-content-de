---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 2d9fd5822658f1943d1749aeb741bf989f7b6a20
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschicht](https://en.wikipedia.org/wiki/Application_Layer)-Protokoll zum Übertragen von Hypermediadokumenten, wie HTML.
Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden, wie zum Beispiel Maschinen-zu-Maschinen-Kommunikation, programmgesteuerten Zugriff auf APIs und mehr.

HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort vom Server erhält.
HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server zwischen zwei Anfragen keine Sitzungsdaten speichert, obwohl die spätere Einführung von [Cookies](/de/docs/Web/HTTP/Guides/Cookies) in einigen Client-Server-Interaktionen einen Zustand hinzufügt.

## Referenz

Die [HTTP-Referenzdokumentation](/de/docs/Web/HTTP/Reference) enthält detaillierte Informationen zu Headern, Anfragemethoden, Statusantworten und listen relevante Spezifikationen und Standarddokumente auf.

- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
  - : Nachrichtenheader werden verwendet, um Metadaten zu einer Ressource oder einer HTTP-Nachricht zu senden und das Verhalten des Clients oder des Servers zu beschreiben.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
  - : Anfragemethoden geben den Zweck der Anfrage an und was erwartet wird, wenn die Anfrage erfolgreich ist.
    Die gebräuchlichsten Methoden sind {{HTTPMethod("GET")}} und {{HTTPMethod("POST")}} zum Abrufen und Senden von Daten an Server; es gibt jedoch auch andere Methoden, die unterschiedliche Zwecke erfüllen.
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
  - : Antwortstatuscodes zeigen das Ergebnis einer bestimmten HTTP-Anfrage an.
    Die Antworten sind in fünf Klassen unterteilt: Informations-; Erfolgs-, Umleitungs-, Client-Fehler- und Server-Fehler.
- [HTTP-Ressourcen und Spezifikationen](/de/docs/Web/HTTP/Reference/Resources_and_specifications)
  - : Diese Seite listet relevante Ressourcen zu HTTP auf, seit es in den frühen 1990er Jahren erstmals spezifiziert wurde.

Die folgenden Unterabschnitte sind ebenfalls bemerkenswert:

- [CSP-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#directives)
  - : Der {{HTTPHeader("Content-Security-Policy")}} (CSP) Antwort-Header ermöglicht es Website-Administratoren, anzugeben, welche Ressourcen der Benutzeragent für eine bestimmte Seite laden darf.
    Dieser Abschnitt listet Direktiven auf, die in einem CSP-Header verwendet werden können, mit einzelnen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.
- [Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives)
  - : Der {{HTTPHeader("Permissions-Policy")}}-Antwort-Header bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder in einem {{HTMLElement("iframe")}}-Element im Dokument zuzulassen oder zu verweigern.
    Dieser Abschnitt listet Direktiven auf, die in einem Permissions-Policy-Header verwendet werden können, mit einzelnen Dokumentationsseiten, die beschreiben, wie die Direktiven funktionieren und wie man sie verwendet.

## Leitfäden

HTTP ist ein erweiterbares Protokoll, das sich auf Konzepte wie Ressourcen und Uniform Resource Identifiers (URIs), eine grundlegende Nachrichtenstruktur und ein Client-Server-Kommunikationsmodell stützt.
Aufgrund dieser Konzepte wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die Funktionalität und aktualisierte Semantik hinzufügen, einschließlich zusätzlicher HTTP-Methoden und -Header.

Die [HTTP-Leitfäden](/de/docs/Web/HTTP/Guides) sind von allgemeinen Übersichten bis zu spezialisierten, anwendungsfallorientierten Themen aufgelistet.
Anfänger werden ermutigt, mit den grundlegenden Leitfäden zu beginnen, bevor sie sich mit gezielteren Artikeln befassen.

- [Überblick über HTTP](/de/docs/Web/HTTP/Guides/Overview)
  - : Die grundlegenden Merkmale von HTTP, was es leisten kann, seine beabsichtigte Nutzung in der Webarchitektur und seine Position im Protokoll-Stack.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren entwickelt und mehrmals erweitert.
    Dieser Artikel erläutert seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 bis hin zu HTTP/2 und HTTP/3 sowie die im Laufe der Jahre eingeführten Neuerungen.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Guides/Session)
  - : Beschreibt den Ablauf einer HTTP-Sitzung, vom Herstellen einer Verbindung über das Senden einer Anfrage bis zum Empfang einer Antwort.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Guides/Messages)
  - : HTTP-Nachrichten, die als Anfragen und Antworten übertragen werden, haben eine definierte Struktur.
    Dieser Artikel beschreibt diese allgemeine Struktur, ihren Zweck und die verschiedenen Arten von Nachrichten.
- [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden.
    Dieser Artikel erklärt, wie dies mithilfe des {{HTTPHeader("Content-Type")}}-Headers und des MIME-Standards erfolgt.
    Eine kurze Liste gängiger Typen, die von Webentwicklern verwendet werden, finden Sie in [Gängige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- [Komprimierung in HTTP](/de/docs/Web/HTTP/Guides/Compression)
  - : Browser und Server komprimieren ihre Nachrichten, bevor sie über das Netzwerk gesendet werden, um die Menge der zu übertragenden Daten zu reduzieren und die Übertragungsgeschwindigkeit und die Bandbreitennutzung zu verbessern.
- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
  - : Caching ist ein sehr wichtiger Mechanismus, um schnelle Erlebnisse im Web zu liefern und Ressourcen effizient zu nutzen.
    Dieser Artikel beschreibt verschiedene Cache-Methoden und wie man HTTP-Header verwendet, um sie zu steuern.
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
  - : Authentifizierung ist eine Möglichkeit, die Identität eines Clients zu überprüfen, wenn Anfragen an einen Server gestellt werden.
    Es stellt sicher, dass nur autorisierte Benutzer oder Systeme auf bestimmte Ressourcen zugreifen können.
- [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
  - : Obwohl HTTP ein zustandsloses Protokoll ist, kann ein Server mit der Antwort einen {{HTTPHeader("Set-Cookie")}}-Header senden.
    Der Client sendet dann den Wert des Cookies bei jeder nachfolgenden Anfrage an den Server in Form eines {{HTTPHeader("Cookie")}}-Anfrage-Headers zurück.
    Dies fügt die Fähigkeit hinzu, eine kleine Menge an Daten zu speichern und auszutauschen, wodurch effektiv ein Zustand zu einigen Client-Server-Interaktionen hinzugefügt wird.
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
  - : URL-Weiterleitung, auch bekannt als URL-Forwarding, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Web-Anwendung mehr als eine URL-Adresse zu geben.
    HTTP hat eine spezielle Art von Antwort, die HTTP-Umleitung, für diese Operation.
- [HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
  - : Bei bedingten Anfragen hängt das Ergebnis einer Anfrage vom Wert eines Validators in der Anfrage ab.
    Diese Methode wird häufig im [Caching](/de/docs/Web/HTTP/Guides/Caching) und in Anwendungsfällen wie dem Fortsetzen eines Downloads, dem Verhindern von verlorenen Aktualisierungen beim Bearbeiten eines Dokuments auf dem Server und mehr verwendet.
- [HTTP-Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests)
  - : Eine Bereichsanfrage fordert den Server auf, einen bestimmten Teil (oder Teile) einer Ressource an einen Client zurückzusenden, anstatt die gesamte Ressource.
    Bereichsanfragen sind nützlich für Fälle, in denen ein Client weiß, dass er nur einen Teil einer großen Datei benötigt, oder für Fälle, in denen eine Anwendung es einem Benutzer ermöglicht, einen Download zu pausieren und fortzusetzen.
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
  - : HTTP definiert eine Reihe von Nachrichten-Headern, beginnend mit [`Accept`](/de/docs/Web/HTTP/Reference/Headers/Accept), als eine Möglichkeit für einen Browser, das gewünschte Format, die Sprache oder die Codierung anzukündigen.
    Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server zu reagieren erwartet wird und wie er die am besten geeignete Antwort auf eine Anfrage auswählt.
- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte.
    Dieser Artikel erklärt beide Konzepte, einschließlich der Vor- und Nachteile von jedem.
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
  - : HTTP/1.1 bietet einen Mechanismus zum Upgrade einer bereits bestehenden Verbindung auf ein anderes Protokoll mithilfe des {{HTTPHeader("Upgrade")}}-Headers.
    Ein Client kann eine Verbindung von HTTP/1.1 zu HTTP/2 oder eine HTTP(S)-Verbindung zu einem [WebSocket](/de/docs/Web/API/WebSocket) (`ws` / `wss`) upgraden.
- [Proxy-Server und Tunneling](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling)
  - : Ein Proxy kann auf dem lokalen Computer des Benutzers oder überall zwischen dem Computer des Benutzers und einem Zielserver im Internet sein.
    Diese Seite gibt einen Überblick über einige Grundlagen zu Proxys und führt einige Konfigurationsoptionen ein.
- [HTTP-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
  - : Client-Hinweise sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, Netzwerk, die Benutzervorlieben und die benutzerspezifische Präferenzen zu erfragen.
    Der Server kann dann basierend auf den Informationen, die der Client zu liefern entscheidet, bestimmen, welche Ressourcen er senden soll.
- [Netzwerk-Fehlerprotokollierung](/de/docs/Web/HTTP/Guides/Network_Error_Logging) {{experimental_inline}}
  - : Netzwerk-Fehlerprotokollierung ist ein Mechanismus, der über den `NEL`-HTTP-Antwort-Header konfiguriert werden kann.
    Dieser experimentelle Header ermöglicht es Websites und Anwendungen, Berichte über fehlgeschlagene (oder sogar erfolgreiche) Netzwerkabrufe von unterstützenden Browsern zu erhalten.
- [Erkennung von Browsern mit Hilfe des User Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
  - : Es ist selten eine gute Idee, Benutzeragentenschnüffeln zu verwenden, um einen Browser zu erkennen, aber es gibt Sonderfälle, die dies erfordern.
    Dieses Dokument wird Ihnen dabei helfen, dies so korrekt wie möglich zu tun, wenn es notwendig ist, und legt besonderen Schwerpunkt auf Überlegungen, die zu machen sind, bevor Sie diesen Weg einschlagen.

### Sicherheit und Datenschutz

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
  - : Permissions-Policy bietet Mechanismen für Webentwickler, um explizit zu erklären, welche Funktionalität auf einer Website verwendet werden kann und welche nicht.
    Sie definieren eine Reihe von "Richtlinien", die einschränken, welche APIs der Code der Website aufrufen oder das Standardverhalten des Browsers für bestimmte Funktionen ändern kann.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
  - : Cross-Site-HTTP-Anfragen sind Anfragen nach Ressourcen von einer anderen Domäne als derjenigen, die die Anfrage stellt.
    Web-Seiten laden heute sehr häufig cross-site Ressourcen, zum Beispiel eine Seite 'Domain A' (`http://domaina.example/`) fordert ein Bild auf 'Domain B' (`http://domainb.foo/image.jpg`) über das `img`-Element an.
    CORS ermöglicht es Webentwicklern, zu steuern, wie ihre Seite auf Cross-Site-Anfragen reagiert.
- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
  - : CSP ermöglicht es Website-Administratoren, den {{HTTPHeader("Content-Security-Policy")}}-Antwort-Header zu verwenden, um zu steuern, welche Ressourcen der Client für eine bestimmte Seite laden darf.
    Der CSP-Leitfaden beschreibt den gesamten Content-Security-Policy-Mechanismus, der hilft, bestimmte Arten von Angriffen zu erkennen und zu entschärfen, einschließlich Cross-Site-Scripting (XSS) und Daten-Injection-Angriffen.
- [Cross-Origin Resource Policy (CORP)](/de/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
  - : CORP ermöglicht es Websites und Anwendungen, sich für den Schutz gegen bestimmte Anfragen aus anderen Ursprüngen zu entscheiden (wie diejenigen, die mit Elementen wie `<script>` und `<img>` ausgegeben werden), um spekulative Nebenkanalangriffe zu mindern.
- [Mozilla-Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, die den Betriebsteams helfen sollen, sichere Web-Anwendungen zu erstellen.

### Verwandte Ressourcen

- [URIs](/de/docs/Web/URI)
  - : Uniform Resource Identifiers (URIs) werden verwendet, um Ressourcen im Web zu beschreiben und zu lokalisieren und sind ein wesentlicher Bestandteil von HTTP-Anfragen.
- [Konfigurieren von Servern für Ogg-Medien](/de/docs/Web/Media/Guides/Formats/Configuring_servers_for_Ogg_media)
  - : Dieser Leitfaden behandelt einige notwendige Serverkonfigurationsänderungen, die für Ihren Webserver erforderlich sein können, um Ogg-Mediendateien korrekt bereitzustellen.
    Diese Informationen können auch nützlich sein, wenn Sie auf andere Medientypen stoßen, die Ihr Server noch nicht zu erkennen konfiguriert ist.

## Tools & Ressourcen

Hilfreiche Tools und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox-Entwicklertools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das entwickelt wurde, um Entwicklern, Systemadministratoren und Sicherheitsexperten zu helfen, ihre Seiten sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Tools zum Überprüfen Ihrer cachebezogenen Header.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : Eine HTTP/2-Client-, Server- und Proxy-Implementierung, die in C geschrieben ist und Lasttest- und Benchmarking-Tools sowie einen HPACK-Codierer und -Decoder enthält.
- [curl](https://github.com/curl/curl)
  - : Ein Kommandozeilen-Tool zum Übertragen von Daten, die mit URL-Syntax angegeben sind.
    Unterstützt HTTP, HTTPS, WS, WSS, neben vielen anderen Protokollen.
- [Wie Browser arbeiten (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Abläufe von Browsern und den Anforderungsablauf über das HTTP-Protokoll.
