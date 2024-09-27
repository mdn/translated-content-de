---
title: User agent
slug: Glossary/User_agent
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein User Agent ist ein Computerprogramm, das eine Person repräsentiert, zum Beispiel ein [Browser](/de/docs/Glossary/Browser) in einem [Web](/de/docs/Glossary/World_Wide_Web)-Kontext.

Neben einem Browser könnte ein User Agent ein Bot sein, der Webseiten durchsucht, ein Download-Manager oder eine andere App, die auf das Web zugreift. Zusammen mit jeder Anfrage, die sie an den Server stellen, fügen Browser einen selbstidentifizierenden {{HTTPHeader("User-Agent")}} [HTTP](/de/docs/Glossary/HTTP)-Header hinzu, der als User Agent (UA) String bezeichnet wird. Dieser String identifiziert oft den Browser, seine Versionsnummer und sein Host-Betriebssystem.

Spam-Bots, Download-Manager und einige Browser senden oft einen gefälschten UA-String, um sich als anderer Client auszugeben. Dies ist als _User Agent Spoofing_ bekannt.

Der User Agent String kann mit [JavaScript](/de/docs/Glossary/JavaScript) auf der Client-Seite über die [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)-Eigenschaft abgerufen werden.

Ein typischer User Agent String sieht folgendermaßen aus: `"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"`.

## Siehe auch

- [User agent](https://en.wikipedia.org/wiki/User_agent) auf Wikipedia
- [`navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- [Browser-Erkennung mit dem User Agent](/de/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}: Der `User-Agent` Header
- Verwandte Glossareinträge:
  - [Browser](/de/docs/Glossary/Browser)
- HTTP-Header

  - {{HTTPHeader("User-agent")}}
