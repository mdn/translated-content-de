---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`omnibox.OnInputEnteredDisposition`** Typ beschreibt, wie die Erweiterung eine Benutzerauswahl aus den Vorschlägen in der Dropdown-Liste der Adressleiste handhaben soll.

Er wird an den {{WebExtAPIRef("omnibox.onInputEntered")}} Ereignis-Listener übergeben, zusammen mit der Auswahl selbst.

## Typ

Werte dieses Typs sind Zeichenfolgen. Sie können einen der folgenden Werte annehmen:

- "currentTab"
  - : Öffnen Sie die Auswahl im aktuellen Tab.
- "newForegroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Tab und bringen Sie diesen neuen Tab in den Vordergrund.
- "newBackgroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Hintergrund-Tab, wobei der aktuelle Tab im Vordergrund bleibt.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
