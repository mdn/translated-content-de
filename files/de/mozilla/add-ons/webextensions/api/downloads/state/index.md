---
title: downloads.State
slug: Mozilla/Add-ons/WebExtensions/API/downloads/State
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `State`-Typ der {{WebExtAPIRef("downloads")}} API definiert verschiedene Zustände, in denen sich ein aktueller Download befinden kann.

Die `state`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} enthält einen String, der aus den in diesem Typ definierten Werten stammt.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `in_progress`
  - : Der Browser empfängt derzeit Download-Daten vom Server.
- `interrupted`
  - : Ein Fehler hat die Verbindung zum Server unterbrochen.
- `complete`
  - : Der Download wurde erfolgreich abgeschlossen.

> [!NOTE]
> Diese string-Konstanten werden sich niemals ändern, aber neue Konstanten können hinzugefügt werden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-State) API von Chromium.
