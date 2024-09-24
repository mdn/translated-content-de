---
title: downloads.State
slug: Mozilla/Add-ons/WebExtensions/API/downloads/State
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `State`-Typ der {{WebExtAPIRef("downloads")}} API definiert verschiedene Zustände, in denen ein aktueller Download sein kann.

Die `state`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} enthält einen Zeichenfolgenwert, der aus den in diesem Typ definierten Werten stammt.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `in_progress`
  - : Der Browser empfängt derzeit Download-Daten vom Server.
- `interrupted`
  - : Ein Fehler hat die Verbindung zum Server unterbrochen.
- `complete`
  - : Der Download wurde erfolgreich abgeschlossen.

> [!NOTE]
> Diese Zeichenfolgenkonstanten werden sich nie ändern, aber es können neue Konstanten hinzugefügt werden.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-State) API.
