---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ **`omnibox.OnInputEnteredDisposition`** beschreibt, wie die Erweiterung eine Benutzerauswahl aus den Vorschlägen in der Dropdown-Liste der Adressleiste behandeln sollte.

Dieser wird zusammen mit der Auswahl selbst an den {{WebExtAPIRef("omnibox.onInputEntered")}} Ereignis-Listener übergeben.

## Typ

Werte dieses Typs sind Zeichenketten. Sie können einen der folgenden Werte annehmen:

- "currentTab"
  - : Öffnet die Auswahl im aktuellen Tab.
- "newForegroundTab"
  - : Öffnet die Auswahl in einem neuen Tab und bringt diesen neuen Tab in den Vordergrund.
- "newBackgroundTab"
  - : Öffnet die Auswahl in einem neuen Hintergrund-Tab, wobei der aktuelle Tab im Vordergrund bleibt.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
