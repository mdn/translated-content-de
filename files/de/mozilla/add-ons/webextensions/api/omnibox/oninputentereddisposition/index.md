---
title: omnibox.OnInputEnteredDisposition
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/OnInputEnteredDisposition
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der **`omnibox.OnInputEnteredDisposition`** Typ beschreibt, wie die Erweiterung mit einer Benutzerauswahl aus den Vorschlägen in der Drop-down-Liste der Adressleiste umgehen soll.

Dieser Typ wird zusammen mit der Auswahl selbst in den {{WebExtAPIRef("omnibox.onInputEntered")}} Event-Listener übergeben.

## Typ

Werte dieses Typs sind Zeichenfolgen. Sie können einen der folgenden Werte annehmen:

- "currentTab"
  - : Öffnen Sie die Auswahl im aktuellen Tab.
- "newForegroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Tab und bringen Sie diesen neuen Tab in den Vordergrund.
- "newBackgroundTab"
  - : Öffnen Sie die Auswahl in einem neuen Hintergrund-Tab und belassen Sie den aktuellen Tab im Vordergrund.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
