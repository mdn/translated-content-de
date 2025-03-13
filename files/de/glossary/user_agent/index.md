---
title: User Agent
slug: Glossary/User_agent
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein User Agent ist ein Computerprogramm, das eine Person repräsentiert, zum Beispiel ein {{Glossary("Browser", "Browser")}} in einem {{Glossary("World_Wide_Web", "Web")}}-Kontext.

Neben einem Browser könnte ein User Agent ein Bot sein, der Webseiten durchsucht, ein Download-Manager oder eine andere Anwendung, die auf das Web zugreift. Zusammen mit jeder Anfrage, die sie an den Server stellen, fügen Browser einen selbstidentifizierenden {{HTTPHeader("User-Agent")}} {{Glossary("HTTP", "HTTP")}}-Header hinzu, der als User Agent (UA)-String bezeichnet wird. Dieser String identifiziert häufig den Browser, dessen Versionsnummer und das Host-Betriebssystem.

Spam-Bots, Download-Manager und einige Browser senden oft einen gefälschten UA-String, um sich als ein anderer Client auszugeben. Dies wird als _User Agent Spoofing_ bezeichnet.

Der User Agent-String kann auf der Clientseite mit {{Glossary("JavaScript", "JavaScript")}} über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft abgerufen werden.

Ein typischer User Agent-String sieht so aus: `"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"`.

## Siehe auch

- [User Agent](https://en.wikipedia.org/wiki/User_agent) auf Wikipedia
- [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- [Browser-Erkennung über den User Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: Der `User-Agent`-Header
- Verwandte Glossarbegriffe:
  - {{Glossary("Browser", "Browser")}}
- HTTP-Header

  - {{HTTPHeader("User-agent")}}
