---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`omnibox.OnInputEnteredDisposition`**-Typ beschreibt, wie die Erweiterung eine Benutzerauswahl aus den Vorschlägen in der Dropdown-Liste der Adressleiste behandeln soll.

Er wird zusammen mit der Auswahl selbst an den {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignislistener übergeben.

## Typ

Werte dieses Typs sind Zeichenketten. Sie können einen der folgenden Werte annehmen:

- "currentTab"
  - : Öffnen Sie die Auswahl im aktuellen Tab.
- "newForegroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Tab und bringen Sie diesen neuen Tab in den Vordergrund.
- "newBackgroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Hintergrund-Tab und halten Sie den aktuellen Tab im Vordergrund.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
