---
title: downloads.FilenameConflictAction
slug: Mozilla/Add-ons/WebExtensions/API/downloads/FilenameConflictAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Typ `FilenameConflictAction` der {{WebExtAPIRef("downloads")}} API gibt an, was zu tun ist, wenn der Name einer heruntergeladenen Datei mit einer bereits vorhandenen Datei in Konflikt steht.

Dieser Typ definiert die Werte, die für die Eigenschaft `conflictAction` des `options`-Parameters der Funktion {{WebExtAPIRef("downloads.download")}} verwendet werden können.

## Typ

Werte dieses Typs sind Strings. Mögliche Werte sind:

- `"uniquify"`
  - : Der Browser wird den Dateinamen ändern, um ihn einzigartig zu machen.
- `"overwrite"`
  - : Der Browser wird die alte Datei mit der neu heruntergeladenen Datei überschreiben.
- `"prompt"`
  - : Der Browser wird den Benutzer auffordern zu wählen, ob er den Namen einzigartig machen oder überschreiben möchte.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-FilenameConflictAction) API.
