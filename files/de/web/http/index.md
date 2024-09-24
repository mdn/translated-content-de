---
title: Hypertext-Übertragungsprotokoll (HTTP)
slug: Web/HTTP
l10n:
  sourceCommit: 5e894978a337d4b81bd28374a4111b5e20b5398b
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Anwendungsschicht](https://en.wikipedia.org/wiki/Application_Layer)-Protokoll zur Übertragung von Hypermedia-Dokumenten, wie HTML. Es wurde für die Kommunikation zwischen Webbrowsern und Webservern entworfen, kann jedoch auch für andere Zwecke verwendet werden. HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), bei dem ein Client eine Verbindung öffnet, um eine Anfrage zu stellen und dann wartet, bis er eine Antwort erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), was bedeutet, dass der Server keine Daten (Zustand) zwischen zwei Anfragen speichert.

## Tutorials

Erlernen Sie die Nutzung von HTTP mit Anleitungen und Tutorials.

- [Überblick über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Merkmale des Client-Server-Protokolls: was es kann und seine vorgesehenen Anwendungen.
- [HTTP-Cache](/de/docs/Web/HTTP/Caching)
  - : Caching ist sehr wichtig für schnelle Websites. Dieser Artikel beschreibt verschiedene Methoden des Cachings und wie HTTP-Header zur Steuerung eingesetzt werden können.
- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Wie Cookies funktionieren, wird in [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) definiert. Bei der Bearbeitung einer HTTP-Anfrage kann ein Server einen `Set-Cookie`-HTTP-Header mit der Antwort senden. Der Client sendet dann den Wert des Cookies mit jeder Anfrage an denselben Server in Form eines `Cookie`-Anforderungsheaders zurück. Das Cookie kann auch so eingestellt werden, dass es an einem bestimmten Datum abläuft oder auf eine bestimmte Domain und einen bestimmten Pfad beschränkt wird.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : **Cross-Site-HTTP-Anfragen** sind HTTP-Anfragen für Ressourcen von einer **anderen Domain** als der Domain der anfordernden Ressource. Beispielsweise stellt eine HTML-Seite von Domain A (`http://domaina.example/`) eine Anfrage für ein Bild auf Domain B (`http://domainb.foo/image.jpg`) über das `img`-Element. Web-Seiten laden heute sehr häufig ressourcenübergreifende Inhalte, einschließlich CSS-Stilblätter, Bilder, Skripte und andere Ressourcen. CORS ermöglicht Webentwicklern zu steuern, wie ihre Site auf ressourcenübergreifende Anfragen reagiert.
- [HTTP-Client-Hints](/de/docs/Web/HTTP/Client_hints)
  - : **Client Hints** sind eine Reihe von Antwort-Headern, die ein Server nutzen kann, um proaktiv Informationen vom Client über das Gerät, das Netzwerk, die Benutzerspezifischen und nutzerspezifische Präferenzen anzufordern. Der Server kann dann basierend auf den Informationen, die der Client bereitstellt, entscheiden, welche Ressourcen gesendet werden sollen.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Eine kurze Beschreibung der Änderungen von den frühen HTTP-Versionen zu dem modernen HTTP/2, dem aufkommenden HTTP/3 und darüber hinaus.
- [Mozilla-Websicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps zur Unterstützung von Betriebsteams bei der Erstellung sicherer Webanwendungen.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : Beschreibt den Typ und die Struktur der verschiedenen Arten von Nachrichten in HTTP/1.x und HTTP/2.
- [Ein typischer HTTP-Sitzungsablauf](/de/docs/Web/HTTP/Session)
  - : Zeigt und erläutert den Verlauf einer üblichen HTTP-Sitzung.
- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Beschreibt die drei Modelle der Verbindungsverwaltung, die in HTTP/1.x verfügbar sind, sowie ihre Stärken und Schwächen.

## Referenz

Stöbern Sie durch die detaillierte HTTP-Referenzdokumentation.

- [HTTP-Header](/de/docs/Web/HTTP/Headers)
  - : HTTP-Nachrichten-Header werden verwendet, um eine Ressource oder das Verhalten des Servers oder Clients zu beschreiben. Header-Felder werden in einem [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) verwaltet, das [Informationen über ihren Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status) enthält, die "permanent" (standarddefiniert), "provisorisch" (neu), "veraltet" (Nutzung nicht empfohlen) oder "obsolet" (nicht mehr in Verwendung) sein können.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Die verschiedenen Operationen, die mit HTTP durchgeführt werden können: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, sowie weniger gebräuchliche Anfragen wie {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}} oder {{HTTPMethod("TRACE")}}.
- [HTTP-Statusantwortcodes](/de/docs/Web/HTTP/Status)
  - : HTTP-Antwortcodes zeigen an, ob eine spezifische HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten sind in fünf Klassen gruppiert: Informationsantworten, erfolgreiche Antworten, Weiterleitungen, Clientfehler und Serverfehler.
- [CSP-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Die {{HTTPHeader("Content-Security-Policy")}}-Antwort-Header-Felder erlauben es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzer-Agent für eine bestimmte Seite laden darf. Mit wenigen Ausnahmen umfassen Richtlinien hauptsächlich das Festlegen von Serverursprüngen und Skriptendpunkten.

## Tools & Ressourcen

Nützliche Tools und Ressourcen zum Verständnis und Debugging von HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten hilft, ihre Websites sicher und geschützt zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Tools zur Überprüfung Ihrer cachebezogenen Header.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die Interna von Browsern und den Anforderungsfluss durch das HTTP-Protokoll.
