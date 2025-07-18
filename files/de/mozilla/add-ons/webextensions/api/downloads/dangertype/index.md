---
title: downloads.DangerType
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DangerType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `DangerType`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von möglichen Gründen, warum eine herunterladbare Datei als gefährlich angesehen werden könnte.

Die `danger`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} enthält einen Zeichenfolgenwert, der aus den in diesem Typ definierten Werten stammt.

> [!NOTE]
> Diese Zeichenfolgenkonstanten werden sich niemals ändern, jedoch kann sich die Menge der DangerTypes ändern.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `file`
  - : Der Dateiname des Downloads ist verdächtig.
- `url`
  - : Die URL des Downloads ist als bösartig bekannt.
- `content`
  - : Die heruntergeladene Datei ist als bösartig bekannt.
- `uncommon`
  - : Die URL des Downloads wird nicht häufig heruntergeladen.
- `host`
  - : Der Download stammt von einem Host, der für die Verteilung bösartiger Binärdateien bekannt ist.
- `unwanted`
  - : Der Download ist potenziell unerwünscht oder unsicher.
- `safe`
  - : Der Download stellt keine bekannte Gefahr für den Computer des Benutzers dar.
- `accepted`
  - : Der Benutzer hat den gefährlichen Download akzeptiert.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DangerType) API von Chromium.
