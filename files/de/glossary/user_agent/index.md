---
title: User Agent
slug: Glossary/User_agent
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein User Agent ist ein Computerprogramm, das eine Person repräsentiert, zum Beispiel ein {{Glossary("Browser", "Browser")}} im Kontext des {{Glossary("World_Wide_Web", "Web")}}.

Neben einem Browser kann ein User Agent ein Bot sein, der Webseiten durchsucht, ein Download-Manager oder eine andere Anwendung, die auf das Web zugreift. Bei jeder Anfrage, die sie an den Server stellen, senden Browser einen selbst identifizierenden {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}} Header, genannt User Agent (UA) String. Dieser String identifiziert oft den Browser, seine Versionsnummer und sein Host-Betriebssystem.

Spam-Bots, Download-Manager und einige Browser senden oft einen gefälschten UA-String, um sich als anderer Client auszugeben. Dies wird als _User Agent Spoofing_ bezeichnet.

Der User Agent String kann clientseitig mit {{Glossary("JavaScript", "JavaScript")}} über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) Eigenschaft abgerufen werden.

Ein typischer User Agent String sieht folgendermaßen aus: `"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"`.

## Siehe auch

- [User Agent](https://en.wikipedia.org/wiki/User_agent) auf Wikipedia
- [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- [Browser-Erkennung mittels User Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: Der `User-Agent` Header
- Verwandte Glossarbegriffe:
  - {{Glossary("Browser", "Browser")}}
- HTTP-Header
  - {{HTTPHeader("User-agent")}}
