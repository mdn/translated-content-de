---
title: Aktualisierung von Plug-ins für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Mehrere Änderungen wurden in Gecko 1.9.2 vorgenommen, die besonders Plug-in-Entwickler betreffen könnten. Dieser Artikel bietet eine Liste dieser Änderungen.

## Schnittstellenänderungen

Die Methode `destroy()` von `nsIPluginInstance` wurde entfernt, da sie ohnehin nichts getan hat.

## Änderungen spezifisch für Mac OS X

### CFM-Plug-ins werden nicht mehr unterstützt

Ab Gecko 1.9.2 werden alte CFM (Code Fragment Manager) Binärdateien für Plug-ins nicht mehr unterstützt. CFM-Plug-ins sind seit August 2008 veraltet.

### main() ist kein unterstützter Einstiegspunkt mehr

Im August 2008 wurden Plug-in-Entwickler darüber informiert, dass `main()` nicht mehr als Einstiegspunkt unterstützt wird. Diese Änderung ist in Gecko 1.9.2 wirksam. Plug-ins müssen aktualisiert werden, um stattdessen `NPN_GetEntryPoints()` zu verwenden.

## Siehe auch

- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
