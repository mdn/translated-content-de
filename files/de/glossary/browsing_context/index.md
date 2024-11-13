---
title: Browsing Context
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 070ea0f4ceb3264e21253f63647e12a09bbdfd60
---

{{GlossarySidebar}}

Ein **browsing context** ist eine Umgebung, in der ein Browser ein [`Document`](/de/docs/Web/API/Document) anzeigt. In modernen Browsern ist dies normalerweise ein _Tab_, aber es kann auch ein _Fenster_, ein _Popup_, eine [Webanwendung](/de/docs/Web/Progressive_web_apps) oder sogar ein Teil einer Seite wie ein _Frame_ oder ein _iframe_ sein.

Jeder Browsing-Kontext hat einen Ursprung (den des aktiven Dokuments) und eine geordnete Historie zuvor angezeigter Dokumente. Die Kommunikation und Ressourcenteilung zwischen Browsing-Kontexten ist eingeschränkt, insbesondere zwischen Cross-Origin-Kontexten. Zum Beispiel kann ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) nur geöffnet und verwendet werden, um zwischen Kontexten mit dem gleichen Ursprung zu kommunizieren.

Ein Browsing-Kontext kann Teil einer **Browsing-Kontext-Gruppe** sein, die eine Menge von **Browsing-Kontexten** ist, die gemeinsame Kontexte wie Historie, Cookies, Speichermechanismen und so weiter teilen. Die Browsing-Kontexte innerhalb einer Gruppe behalten Referenzen zueinander und können daher die globalen Objekte des jeweils anderen inspizieren und sich gegenseitig Nachrichten senden.

Standardmäßig wird ein Dokument, das von einer Browserkontextgruppe geöffnet wird, in derselben Gruppe geöffnet, unabhängig davon, ob es zielgleich oder Cross-Origin ist. Der {{httpheader("Cross-Origin-Opener-Policy")}} kann verwendet werden, um zu steuern, ob das Dokument stattdessen in einer eigenen neuen Browsing-Kontext-Gruppe geöffnet und von anderen Kontexten (insbesondere Cross-Origin-Kontexten) [Cross-Origin Isolated](/de/docs/Web/API/Window/crossOriginIsolated) wird. Dies kann das Risiko von Cross-Origin-Angriffen und den Seitenkanalangriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden, mindern.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Ursprung")}}
