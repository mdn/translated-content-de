---
title: downloads.FilenameConflictAction
slug: Mozilla/Add-ons/WebExtensions/API/downloads/FilenameConflictAction
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `FilenameConflictAction`-Typ der {{WebExtAPIRef("downloads")}} API legt fest, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer vorhandenen Datei in Konflikt steht.

Dieser Typ definiert die Werte, die für die Eigenschaft `conflictAction` des `options`-Parameters der Funktion {{WebExtAPIRef("downloads.download")}} verwendet werden können.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `"uniquify"`
  - : Der Browser wird den Dateinamen ändern, um ihn eindeutig zu machen.
- `"overwrite"`
  - : Der Browser wird die alte Datei mit der neu heruntergeladenen Datei überschreiben.
- `"prompt"`
  - : Der Browser wird den Benutzer dazu auffordern, zu wählen, ob der Dateiname eindeutig gemacht oder überschrieben werden soll.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-FilenameConflictAction) API.
