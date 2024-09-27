---
title: Aktualisierung von Plug-ins für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Mehrere Änderungen wurden in Gecko 1.9.2 vorgenommen, die insbesondere Plug-in-Entwickler betreffen könnten. Dieser Artikel bietet eine Liste dieser Änderungen.

## Schnittstellenänderungen

Die Methode `destroy()` von `nsIPluginInstance` wurde entfernt, da sie ohnehin nichts bewirkt hat.

## Spezifische Änderungen für Mac OS X

### CFM-Plug-ins werden nicht mehr unterstützt

Mit Gecko 1.9.2 werden alte CFM- (Code Fragment Manager) Binärdateien für Plug-ins nicht mehr unterstützt. CFM-Plug-ins sind seit August 2008 veraltet.

### main() wird nicht mehr als Einstiegspunkt unterstützt

Im August 2008 wurden Plug-in-Entwickler darüber informiert, dass `main()` nicht mehr als Einstiegspunkt unterstützt wird. Diese Änderung tritt in Gecko 1.9.2 in Kraft. Plug-ins müssen aktualisiert werden, um stattdessen `NPN_GetEntryPoints()` zu verwenden.

## Siehe auch

- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
