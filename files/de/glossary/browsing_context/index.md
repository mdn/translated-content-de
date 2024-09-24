---
title: Browsing-Kontext
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Browsing-Kontext** ist eine Umgebung, in der ein Browser ein {{domxref("Document")}} anzeigt. In modernen Browsern ist es normalerweise ein _Tab_, kann aber auch ein _Fenster_ oder sogar nur Teile einer Seite sein, wie ein _Frame_ oder ein _iframe_.

Jeder Browsing-Kontext hat einen Ursprung (den des aktiven Dokuments) und eine geordnete Historie der zuvor angezeigten Dokumente.

Die Kommunikation zwischen Browsing-Kontexten ist stark eingeschränkt. Zwischen Browsing-Kontexten desselben Ursprungs kann ein {{domxref("BroadcastChannel")}} geöffnet und genutzt werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Origin")}}
