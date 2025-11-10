---
title: downloads.setShelfEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/setShelfEnabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Funktion **`setShelfEnabled()`** der {{WebExtAPIRef("downloads")}} API aktiviert oder deaktiviert das graue Regal am unteren Rand jedes Fensters, das mit dem aktuellen Browserprofil verknüpft ist. Das Regal bleibt deaktiviert, solange mindestens eine Erweiterung es deaktiviert hat.

Wenn Sie versuchen, das Regal zu aktivieren, während es von mindestens einer anderen Erweiterung bereits deaktiviert wurde, schlägt der Aufruf fehl und {{WebExtAPIRef("runtime.lastError")}} wird mit einer entsprechenden Fehlermeldung gesetzt.

> [!NOTE]
> Um diese Funktion in Ihrer Erweiterung zu verwenden, müssen Sie sowohl die Berechtigung `"downloads.shelf"` als auch die Berechtigung `"downloads"` im [Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) anfordern.

## Syntax

```js-nolint
chrome.downloads.setShelfEnabled(enabled);
```

Diese API ist auch als `browser.downloads.setShelfEnabled()` verfügbar.

### Parameter

- `enabled`
  - : Ein `boolean`, der den Zustand darstellt, den Sie für `setShelfEnabled()` festlegen möchten — `true` für aktivieren und `false` für deaktivieren.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-setShelfEnabled) API von Chromium.
