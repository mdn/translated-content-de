---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Das **`onChanged()`** Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn sich eine der Eigenschaften eines {{WebExtAPIRef('downloads.DownloadItem')}} ändert (außer `bytesReceived`).

Dem Listener wird ein `downloadDelta` als Parameter übergeben — ein Objekt, das die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}}-Objekts sowie den Status aller geänderten Eigenschaften enthält.

## Syntax

```js-nolint
browser.downloads.onChanged.addListener(listener)
browser.downloads.onChanged.removeListener(listener)
browser.downloads.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion erhält die folgenden Argumente:
    - `downloadDelta`
      - : Ein `object`, das das geänderte {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt und den Status aller darin geänderten Eigenschaften darstellt. Siehe den Abschnitt [downloadDelta](#downloaddelta_2) für weitere Details.

## Zusätzliche Objekte

### downloadDelta

Das `downloadDelta` Objekt hat die folgenden verfügbaren Eigenschaften:

- `id`
  - : Ein `integer`, der die `id` des geänderten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.
- `url` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung der `url` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `filename` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung des `filename` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `danger` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung des `danger` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `mime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung des `mime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `startTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung der `startTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `endTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung der `endTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung des `state` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `canResume` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}} Objekt, das eine Änderung des `canResume` Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `paused` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}} Objekt, das eine Änderung des `paused` Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `error` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}} Objekt, das eine Änderung des `error` Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `totalBytes` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}} Objekt, das eine Änderung der `totalBytes` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `fileSize` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}} Objekt, das eine Änderung der `fileSize` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `exists` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}} Objekt, das eine Änderung des `exists` Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie eine Nachricht, wenn Downloads abgeschlossen sind:

```js
function handleChanged(delta) {
  if (delta.state && delta.state.current === "complete") {
    console.log(`Download ${delta.id} has completed.`);
  }
}

browser.downloads.onChanged.addListener(handleChanged);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onChanged) API von Chromium.
