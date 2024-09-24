---
title: Aktualisierung von Plug-ins für Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_plug-ins
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

In Gecko 1.9.2 wurden mehrere Änderungen vorgenommen, die insbesondere Plug-in-Entwickler betreffen können. Dieser Artikel bietet eine Liste dieser Änderungen.

## Schnittstellenänderungen

Die Methode `destroy()` von `nsIPluginInstance` wurde entfernt, da sie ohnehin nichts bewirkte.

## Mac OS X-spezifische Änderungen

### CFM-Plug-ins werden nicht mehr unterstützt

Ab Gecko 1.9.2 werden alte CFM-Binärdateien (Code Fragment Manager) für Plug-ins nicht mehr unterstützt. CFM-Plug-ins sind seit August 2008 veraltet.

### main() wird als Einstiegspunkt nicht mehr unterstützt

Im August 2008 wurden Plug-in-Entwickler darüber informiert, dass `main()` als Einstiegspunkt nicht mehr unterstützt wird. Diese Änderung ist in Gecko 1.9.2 wirksam geworden. Plug-ins müssen so aktualisiert werden, dass sie stattdessen `NPN_GetEntryPoints()` verwenden.

## Siehe auch

- [Firefox 3.6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3.6)
