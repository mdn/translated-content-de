---
title: Browsing-Kontext
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 8b67ae9ed4fb1b14e4d596c6bbcb4e08a9af2964
---

Ein **Browsing-Kontext** ist eine Umgebung, in der ein Browser ein [`Dokument`](/de/docs/Web/API/Document) anzeigt.
In modernen Browsern ist dies normalerweise ein _Tab_, kann aber auch ein _Fenster_, ein _Popup_, eine [Webanwendung](/de/docs/Web/Progressive_web_apps) oder sogar ein Teil einer Seite wie ein _Frame_ oder ein _iframe_ sein.

Jeder Browsing-Kontext hat einen Ursprung (der des aktiven Dokuments) und eine geordnete Historie zuvor angezeigter Dokumente.
Die Kommunikation und Ressourcenteilung zwischen Browsing-Kontexten ist eingeschränkt, insbesondere zwischen kontextübergreifenden Ursprüngen.
Zum Beispiel kann ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) nur geöffnet und zur Kommunikation zwischen kontextgleichen Ursprüngen verwendet werden.

Ein Browsing-Kontext kann Teil einer **Browsing-Kontext-Gruppe** sein, welche eine Gruppe von **Browsing-Kontexten** ist, die gemeinsame Kontexte wie Historie, Cookies, Speichermechanismen usw. teilen.
Die Browsing-Kontexte innerhalb einer Gruppe behalten Verweise zueinander und können daher die globalen Objekte der anderen inspizieren und Nachrichten miteinander austauschen.

Standardmäßig wird ein in einer Browser-Kontextgruppe geöffnetes Dokument in derselben Gruppe geöffnet, unabhängig davon, ob es kontextübergreifend oder kontextgleich ist.
Der {{httpheader("Cross-Origin-Opener-Policy")}} kann verwendet werden, um zu steuern, ob das Dokument stattdessen in seiner eigenen neuen Browsing-Kontext-Gruppe geöffnet und von anderen Kontexten [kontextübergreifend isoliert](/de/docs/Web/API/Window/crossOriginIsolated) wird (insbesondere kontextübergreifende Kontexte).
Dies kann das Risiko von kontextübergreifenden Angriffen und den Seitenkanalangriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden, mindern.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
