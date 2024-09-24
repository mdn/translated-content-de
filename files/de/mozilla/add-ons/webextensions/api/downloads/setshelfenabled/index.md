---
title: downloads.setShelfEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/setShelfEnabled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`setShelfEnabled()`** Funktion der {{WebExtAPIRef("downloads")}} API aktiviert oder deaktiviert das graue Ablagefach am unteren Rand jedes Fensters, das mit dem aktuellen Browserprofil verbunden ist. Das Ablagefach bleibt deaktiviert, solange mindestens eine Erweiterung es deaktiviert hat.

Wenn Sie versuchen, das Ablagefach zu aktivieren, während mindestens eine andere Erweiterung es bereits deaktiviert hat, wird der Aufruf fehlschlagen und {{WebExtAPIRef("runtime.lastError")}} wird mit einer entsprechenden Fehlermeldung gesetzt.

> [!NOTE]
> Um diese Funktion in Ihrer Erweiterung zu verwenden, müssen Sie die Berechtigung `"downloads.shelf"` im [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die Berechtigung `"downloads"` anfordern.

## Syntax

```js-nolint
chrome.downloads.setShelfEnabled(enabled);
```

Diese API ist auch als `browser.downloads.setShelfEnabled()` verfügbar.

### Parameter

- `enabled`
  - : Ein `boolean`, der den Zustand darstellt, den Sie für `setShelfEnabled()` setzen möchten — `true` für aktivieren und `false` für deaktivieren.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-setShelfEnabled) API.
