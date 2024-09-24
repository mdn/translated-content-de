---
title: windows.WindowState
slug: Mozilla/Add-ons/WebExtensions/API/windows/WindowState
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Zustand dieses Browserfensters.

## Typ

Werte dieses Typs sind `strings`. Mögliche Werte sind:

- `"normal"`
  - : Das Fenster hat die Standardgröße oder eine vom Benutzer gewählte Größe.
- `"minimized"`
  - : Das Fenster ist nur als Symbol in der Taskleiste sichtbar.
- `"maximized"`
  - : Das Fenster füllt den Bildschirm aus, auf dem es angezeigt wird, ausgenommen sind Bildschirmbereiche, die vom Betriebssystem reserviert sind.
- `"fullscreen"`
  - : Das Fenster läuft als Vollbildanwendung oder der Inhalt in einem Tab verwendet die [Fullscreen API](/de/docs/Web/API/Fullscreen_API).
- `"docked"`
  - : Ein angedocktes Fenster nimmt eine feste Position im Verhältnis zu anderen Fenstern derselben Anwendung ein.

macOS Kompatibilität: Ab macOS 10.10 hat sich das standardmäßige Maximierungsverhalten von Fenstern dahingehend geändert, dass Anwendungen als Vollbildanwendungen ausgeführt werden, anstatt „gezoomter“ Fenster. `fullscreen` bezieht sich sowohl auf das Ausführen des Browsers als Vollbildanwendung als auch auf die Verwendung der Fullscreen API in einem Tab.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#type-WindowState) API. Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
