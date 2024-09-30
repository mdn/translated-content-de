---
title: HTTP
slug: Web/HTTP
l10n:
  sourceCommit: 5e894978a337d4b81bd28374a4111b5e20b5398b
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** ist ein [Protokoll der Anwendungsschicht](https://en.wikipedia.org/wiki/Application_Layer) zur Übertragung von Hypermediendokumenten wie HTML. Es wurde für die Kommunikation zwischen Webbrowsers und Webservern entwickelt, kann jedoch auch für andere Zwecke verwendet werden. HTTP folgt einem klassischen [Client-Server-Modell](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), wobei ein Client eine Verbindung öffnet, um eine Anfrage zu stellen und dann wartet, bis er eine Antwort erhält. HTTP ist ein [zustandsloses Protokoll](https://en.wikipedia.org/wiki/Stateless_protocol), das bedeutet, dass der Server keine Daten (Zustände) zwischen zwei Anfragen speichert.

## Anleitungen

Erlernen Sie den Umgang mit HTTP mithilfe von Leitfäden und Tutorials.

- [Überblick über HTTP](/de/docs/Web/HTTP/Overview)
  - : Die grundlegenden Funktionen des Client-Server-Protokolls: was es leisten kann und wofür es gedacht ist.
- [HTTP Cache](/de/docs/Web/HTTP/Caching)
  - : Caching ist sehr wichtig für schnelle Webseiten. Dieser Artikel beschreibt verschiedene Caching-Methoden und wie HTTP-Header verwendet werden, um diese zu steuern.
- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
  - : Wie Cookies funktionieren, ist in [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265) definiert. Bei einem HTTP-Anfrage kann ein Server einen `Set-Cookie` HTTP-Header mit der Antwort senden. Der Client gibt dann den Wert des Cookies bei jeder Anfrage an denselben Server als `Cookie`-Anforderungsheader zurück. Das Cookie kann auch so eingestellt werden, dass es an einem bestimmten Datum abläuft oder auf eine bestimmte Domäne und einen bestimmten Pfad beschränkt ist.
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
  - : **Cross-site HTTP-Anfragen** sind HTTP-Anfragen für Ressourcen von einer **anderen Domäne** als der Domäne, die die Anfrage stellt. Zum Beispiel erstellt eine HTML-Seite von Domäne A (`http://domaina.example/`) eine Anfrage für ein Bild auf Domäne B (`http://domainb.foo/image.jpg`) über das `img` Element. Web-Seiten laden heute sehr häufig Cross-Site-Ressourcen, einschließlich CSS-Stylesheets, Bilder, Skripte und andere Ressourcen. CORS ermöglicht es Webentwicklern zu kontrollieren, wie ihre Seite auf Cross-Site-Anfragen reagiert.
- [HTTP Client Hints](/de/docs/Web/HTTP/Client_hints)
  - : **Client Hints** sind eine Reihe von Antwort-Headern, die ein Server verwenden kann, um proaktiv Informationen von einem Client über das Gerät, Netzwerk, nutzer- und user-agent-spezifische Präferenzen anzufordern. Der Server kann dann bestimmen, welche Ressourcen gesendet werden sollen, basierend auf den Informationen, die der Client bereitstellt.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Eine kurze Beschreibung der Änderungen zwischen den frühen Versionen von HTTP, zu modernen HTTP/2, dem aufkommenden HTTP/3 und darüber hinaus.
- [Mozillas Web-Sicherheitsrichtlinien](https://infosec.mozilla.org/guidelines/web_security)
  - : Eine Sammlung von Tipps, die Teams bei der Erstellung sicherer Webanwendungen helfen soll.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : Beschreibt den Typ und die Struktur der verschiedenen Arten von Nachrichten von HTTP/1.x und HTTP/2.
- [Eine typische HTTP-Session](/de/docs/Web/HTTP/Session)
  - : Zeigt und erklärt den Ablauf einer üblichen HTTP-Session.
- [Verbindungsmanagement in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Beschreibt die drei verfügbaren Modelle zur Verbindungsverwaltung in HTTP/1.x, ihre Stärken und Schwächen.

## Referenz

Durchstöbern Sie detaillierte HTTP-Referenzdokumentationen.

- [HTTP Header](/de/docs/Web/HTTP/Headers)
  - : HTTP-Nachrichtenheader werden verwendet, um eine Ressource oder das Verhalten des Servers oder des Clients zu beschreiben. Header-Felder werden in einem [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml) gepflegt, welches [Informationen zu ihrem Status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status) enthält, der "permanent" (standardmäßig definiert), "provisorisch" (neu), "veraltet" (Nutzung nicht empfohlen) oder "obsolet" (nicht mehr in Gebrauch) sein kann.
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
  - : Die verschiedenen Operationen, die mit HTTP durchgeführt werden können: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, und auch weniger gängige Anfragen wie {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}} oder {{HTTPMethod("TRACE")}}.
- [HTTP-Status-Antwortcodes](/de/docs/Web/HTTP/Status)
  - : HTTP-Antwortcodes geben an, ob eine bestimmte HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen eingeteilt: Informationelle Antworten, erfolgreiche Antworten, Umleitungen, Clientfehler und Serverfehler.
- [CSP-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Die {{HTTPHeader("Content-Security-Policy")}} Antwort-Headerfelder erlauben es Website-Administratoren, die Ressourcen zu kontrollieren, die der Benutzeragent für eine gegebene Seite laden darf. Mit wenigen Ausnahmen beinhalten Richtlinien meist die Spezifikation von Ursprüngen von Servern und Endpunkten von Skripten.

## Werkzeuge & Ressourcen

Hilfreiche Werkzeuge und Ressourcen zum Verstehen und Debuggen von HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : Ein Projekt, das Entwicklern, Systemadministratoren und Sicherheitsexperten dabei helfen soll, ihre Seiten sicher zu konfigurieren.
- [RedBot](https://redbot.org/)
  - : Werkzeuge zur Überprüfung Ihrer Cache-bezogenen Header.
- [Wie Browser funktionieren (2011)](https://web.dev/articles/howbrowserswork)
  - : Ein sehr umfassender Artikel über die internen Abläufe von Browsern und den Anforderungsfluss über das HTTP-Protokoll.
