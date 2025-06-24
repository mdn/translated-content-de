---
title: User Agent
slug: Glossary/User_agent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GlossarySidebar}}

Ein User Agent ist ein Computerprogramm, das eine Person repräsentiert, zum Beispiel ein {{Glossary("Browser", "Browser")}} im Kontext des {{Glossary("World_Wide_Web", "Webs")}}.

Neben einem Browser kann ein User Agent auch ein Bot sein, der Webseiten durchsucht, ein Download-Manager oder eine andere App, die auf das Web zugreift. Zusammen mit jeder Anfrage, die sie an den Server senden, fügen Browser einen selbstidentifizierenden {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header namens User Agent (UA)-String hinzu. Dieser String identifiziert häufig den Browser, seine Versionsnummer und das Host-Betriebssystem.

Spam-Bots, Download-Manager und einige Browser senden oft einen gefälschten UA-String, um sich als ein anderer Client auszugeben. Dies wird als _User Agent Spoofing_ bezeichnet.

Der User Agent-String kann auf der Client-Seite mit {{Glossary("JavaScript", "JavaScript")}} über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft abgerufen werden.

Ein typischer User Agent-String sieht so aus: `"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"`.

## Siehe auch

- [User Agent](https://en.wikipedia.org/wiki/User_agent) auf Wikipedia
- [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- [Browser-Erkennung mit dem User Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: Der `User-Agent`-Header
- Verwandte Glossarbegriffe:
  - {{Glossary("Browser", "Browser")}}
- HTTP-Header
  - {{HTTPHeader("User-agent")}}
