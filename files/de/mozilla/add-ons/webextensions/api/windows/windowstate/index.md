---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der Zustand dieses Browserfensters.

## Typ

Werte dieses Typs sind `strings`. Mögliche Werte sind:

- `"normal"`
  - : Das Fenster hat die Standardgröße oder eine benutzerdefinierte Größe.
- `"minimized"`
  - : Das Fenster ist nur als Symbol in der Taskleiste sichtbar.
- `"maximized"`
  - : Das Fenster füllt den Bildschirm aus, auf dem es angezeigt wird, ohne Bereiche, die vom Betriebssystem reserviert sind.
- `"fullscreen"`
  - : Das Fenster wird als Vollbildanwendung ausgeführt oder Inhalte in einem Tab verwenden die [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- `"docked"`
  - : Ein angedocktes Fenster nimmt eine feste Position relativ zu anderen Fenstern derselben Anwendung ein.

macOS-Kompatibilität: Seit macOS 10.10 hat sich das Standardverhalten beim Maximieren von Fenstern dahingehend geändert, dass Anwendungen als Vollbildanwendungen ausgeführt werden, anstatt als "gezoomte" Fenster. `fullscreen` bezieht sich sowohl auf den Browser, der als Vollbildanwendung läuft, als auch auf den Fall, wenn Inhalte in einem Tab die Fullscreen API verwenden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-WindowState) API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
