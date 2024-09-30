---
title: Aktualisierung von Plug-ins für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

In Gecko 1.9.2 wurden mehrere Änderungen vorgenommen, die insbesondere Plug-in-Entwickler betreffen könnten. Dieser Artikel listet diese Änderungen auf.

## Schnittstellenänderungen

Die Methode `destroy()` von `nsIPluginInstance` wurde entfernt, da sie ohnehin nichts bewirkte.

## Spezifische Änderungen für Mac OS X

### CFM-Plug-ins werden nicht mehr unterstützt

Ab Gecko 1.9.2 werden alte CFM- (Code Fragment Manager) Binärdateien für Plug-ins nicht mehr unterstützt. CFM-Plug-ins sind seit August 2008 veraltet.

### main() ist kein unterstützter Einstiegspunkt mehr

Im August 2008 wurden Plug-in-Entwickler darüber informiert, dass `main()` nicht mehr als Einstiegspunkt unterstützt wird. Diese Änderung ist nun in Gecko 1.9.2 wirksam. Plug-ins müssen aktualisiert werden, um stattdessen `NPN_GetEntryPoints()` zu verwenden.

## Siehe auch

- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
