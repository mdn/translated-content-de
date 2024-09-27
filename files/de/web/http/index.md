---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 5e894978a337d4b81bd28374a4111b5e20b5398b
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschicht-Protokoll](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermediendokumenten wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entwickelt, kann aber auch für andere Zwecke verwendet werden. HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen, und dann wartet, bis er eine Antwort erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Daten (Zustand) zwischen zwei Anfragen speichert.

## Anleitungen

Lernen Sie, wie Sie HTTP mit Leitfäden und Tutorials verwenden.

- [Überblick über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Merkmale des Client-Server-Protokolls: was es tun kann und wofür es gedacht ist.
- [HTTP-Cache](/de/docs/Web/HTTP/Caching)
  - : Caching ist sehr wichtig für schnelle Webseiten. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie HTTP-Header verwendet werden, um sie zu steuern.
- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Wie Cookies funktionieren, ist in [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) definiert. Beim Bedienen einer HTTP-Anfrage kann ein Server einen `Set-Cookie` HTTP-Header mit der Antwort senden. Der Client gibt dann den Wert des Cookies bei jeder Anfrage an denselben Server in Form eines `Cookie`-Anfrage-Headers zurück. Das Cookie kann auch so eingestellt werden, dass es an einem bestimmten Datum abläuft oder auf eine bestimmte Domain und einen bestimmten Pfad beschränkt wird.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : **Cross-Site-HTTP-Anfragen** sind HTTP-Anfragen für Ressourcen von einer **anderen Domain** als der Domain der Ressource, die die Anfrage stellt. Zum Beispiel macht eine HTML-Seite von Domain A (`http://domaina.example/`) eine Anfrage für ein Bild auf Domain B (`http://domainb.foo/image.jpg`) mittels des `img`-Elements. Heutige Webseiten laden sehr häufig Cross-Site-Ressourcen wie CSS-Stylesheets, Bilder, Skripte und andere Ressourcen. CORS ermöglicht es Webentwicklern zu kontrollieren, wie ihre Seite auf Cross-Site-Anfragen reagiert.
- [HTTP Client Hints](/de/docs/Web/HTTP/Client_hints)
  - : **Client Hints** sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen vom Client über das Gerät, das Netzwerk, benutzer- und agentenspezifische Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitzustellen bereit ist, entscheiden, welche Ressourcen gesendet werden.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Eine kurze Beschreibung der Veränderungen zwischen den frühen Versionen von HTTP bis zum modernen HTTP/2, dem aufkommenden HTTP/3 und darüber hinaus.
- [Mozilla-Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, um Betriebsteams bei der Erstellung sicherer Webanwendungen zu unterstützen.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : Beschreibt den Typ und die Struktur der verschiedenen Arten von Nachrichten in HTTP/1.x und HTTP/2.
- [Eine typische HTTP-Sitzung](/de/docs/Web/HTTP/Session)
  - : Zeigt und erklärt den Ablauf einer üblichen HTTP-Sitzung.
- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Beschreibt die drei Verbindungsmanagement-Modelle, die in HTTP/1.x verfügbar sind, sowie ihre Stärken und Schwächen.

## Referenz

Durchsuchen Sie detaillierte HTTP-Referenzdokumentation.

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : HTTP-Nachrichtenheader werden verwendet, um eine Ressource oder das Verhalten des Servers oder Clients zu beschreiben. Headerfelder werden in einem [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) verwaltet, der [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status) enthält, die "permanent" (standardmäßig definiert), "provisional" (neu), "deprecated" (Nutzung nicht empfohlen) oder "obsolete" (nicht mehr in Gebrauch) sein können.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Die verschiedenen Operationen, die mit HTTP durchgeführt werden können: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, und auch weniger verbreitete Anfragen wie {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}} oder {{HTTPMethod("TRACE")}}.
- [HTTP-Statusantwortcodes](/de/docs/Web/HTTP/Status)
  - : HTTP-Antwortcodes geben an, ob eine bestimmte HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert: Informationsantworten, erfolgreiche Antworten, Weiterleitungen, Client-Fehler und Server-Fehler.
- [CSP-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Die {{HTTPHeader("Content-Security-Policy")}} Antwort-Headerfelder ermöglichen es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien hauptsächlich die Angabe von Serverursprüngen und Skript-Endpunkten.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox-Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsfachleuten helfen soll, ihre Seiten sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zum Überprüfen Ihrer Cache-bezogenen Header.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über Browser-Interna und den Ablauf von Anfragen über das HTTP-Protokoll.
