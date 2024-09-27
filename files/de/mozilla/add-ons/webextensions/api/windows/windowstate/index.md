---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Zustand dieses Browser-Fensters.

## Typ

Werte dieses Typs sind `strings`. Mögliche Werte sind:

- `"normal"`
  - : Das Fenster hat die Standardgröße oder eine vom Benutzer festgelegte Größe.
- `"minimized"`
  - : Das Fenster ist nur als Symbol in der Taskleiste sichtbar.
- `"maximized"`
  - : Das Fenster füllt den Bildschirm aus, auf dem es dargestellt wird, ausgenommen jegliche Bildschirmbereiche, die vom Betriebssystem reserviert sind.
- `"fullscreen"`
  - : Das Fenster wird als Vollbildanwendung ausgeführt oder der Inhalt in einem Tab verwendet die [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- `"docked"`
  - : Ein angedocktes Fenster nimmt eine feste Position relativ zu anderen Fenstern ein, die von derselben Anwendung verwaltet werden.

macOS-Kompatibilität: Ab macOS 10.10 änderte sich das standardmäßige Maximierungsverhalten für Fenster, um Anwendungen als Vollbildanwendungen auszuführen, anstatt als "gezoomte" Fenster. `fullscreen` bezieht sich sowohl auf den Browser, der als Vollbildanwendung ausgeführt wird, als auch darauf, wenn Inhalte in einem Tab die Fullscreen API verwenden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-WindowState) API. Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
