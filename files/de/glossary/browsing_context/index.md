---
title: Browsing-Kontext
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Browsing-Kontext** ist eine Umgebung, in der ein Browser ein [`Document`](/de/docs/Web/API/Document) anzeigt.
In modernen Browsern ist dies in der Regel ein _Tab_, aber es kann auch ein _Fenster_, ein _Popup_, eine [Webanwendung](/de/docs/Web/Progressive_web_apps) oder sogar ein Teil einer Seite wie ein _Frame_ oder ein _iframe_ sein.

Jeder Browsing-Kontext hat einen Ursprung (der des aktiven Dokuments) und eine geordnete Historie von zuvor angezeigten Dokumenten.
Die Kommunikation und Ressourcennutzung zwischen Browsing-Kontexten ist eingeschränkt, insbesondere zwischen Kontexten mit unterschiedlichem Ursprung.
Zum Beispiel kann ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) nur geöffnet und verwendet werden, um zwischen Kontexten mit demselben Ursprung zu kommunizieren.

Ein Browsing-Kontext kann Teil einer **Browsing-Kontext-Gruppe** sein, die eine Menge von **Browsing-Kontexten** ist, die gemeinsame Kontexte wie Verlauf, Cookies, Speichermethoden usw. teilen.
Die Browsing-Kontexte innerhalb einer Gruppe behalten Verweise aufeinander und können daher die globalen Objekte des jeweils anderen inspizieren und sich gegenseitig Nachrichten senden.

Standardmäßig wird ein Dokument, das aus einer Browsing-Kontext-Gruppe geöffnet wird, in derselben Gruppe geöffnet, unabhängig davon, ob es aus demselben oder einem anderen Ursprung stammt.
Der {{httpheader("Cross-Origin-Opener-Policy")}} kann verwendet werden, um zu steuern, ob das Dokument stattdessen in der eigenen neuen Browsing-Kontext-Gruppe geöffnet wird und [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) von anderen Kontexten ist (insbesondere Kontexten mit unterschiedlichem Ursprung).
Dies kann das Risiko von Cross-Origin-Angriffen und von Seitenkanalangriffen, die als [XS-Leaks](https://xsleaks.dev/) bezeichnet werden, mindern.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
