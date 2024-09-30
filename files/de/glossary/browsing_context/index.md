---
title: Browsing context
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Browsing-Kontext** ist eine Umgebung, in der ein Browser ein [`Document`](/de/docs/Web/API/Document) anzeigt. In modernen Browsern ist dies in der Regel ein _Tab_, kann aber auch ein _Fenster_ oder sogar nur Teile einer Seite wie ein _Frame_ oder ein _iframe_ sein.

Jeder Browsing-Kontext hat einen Ursprung (den des aktiven Dokuments) und eine gereihte Historie der zuvor angezeigten Dokumente.

Die Kommunikation zwischen Browsing-Kontexten ist stark eingeschränkt. Zwischen Browsing-Kontexten desselben Ursprungs kann ein [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel) geöffnet und verwendet werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Origin](/de/docs/Glossary/Origin)
