---
title: Ajax
slug: Glossary/AJAX
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{GlossarySidebar}}

Asynchronous JavaScript and XML (**Ajax** oder **AJAX**) ist eine Webentwicklungstechnik, bei der eine Webanwendung Inhalte vom Server abruft, indem sie asynchrone HTTP-Anfragen stellt und die neuen Inhalte nutzt, um die relevanten Teile der Seite zu aktualisieren, ohne einen vollständigen Seitenneuladevorgang zu benötigen. Dies kann die Seite reaktionsfähiger machen, da nur die Teile angefordert werden, die aktualisiert werden müssen.

Ajax kann verwendet werden, um {{Glossary("SPA", "Single-Page-Apps")}} zu erstellen, bei denen die gesamte Webanwendung aus einem einzigen Dokument besteht, das Ajax verwendet, um seine Inhalte nach Bedarf zu aktualisieren.

Ursprünglich wurde Ajax mit der {{domxref("XMLHttpRequest")}}-Schnittstelle implementiert, aber die {{domxref("Window/fetch", "fetch()")}}-API ist für moderne Webanwendungen besser geeignet: Sie ist leistungsfähiger, flexibler und integriert sich besser mit grundlegenden Webanwendungstechnologien wie [Service Workers](/de/docs/Web/API/Service_Worker_API). Moderne Web-Frameworks bieten ebenfalls Abstraktionen für Ajax.

Diese Technik ist in der modernen Webentwicklung so verbreitet, dass der spezifische Begriff "Ajax" selten verwendet wird.

## Siehe auch

- [Daten vom Server abrufen](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [Fetch API](/de/docs/Web/API/Fetch_API)
- Verwandte Glossarbegriffe:
  - {{Glossary("SPA", "Single-Page-Anwendung")}}
- {{DOMxRef("XMLHttpRequest")}}
- [AJAX](https://en.wikipedia.org/wiki/AJAX) auf Wikipedia
