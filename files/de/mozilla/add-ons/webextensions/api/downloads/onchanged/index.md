---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das **`onChanged()`**-Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn sich eine der Eigenschaften eines {{WebExtAPIRef('downloads.DownloadItem')}} ändert (außer `bytesReceived`).

Dem Listener wird ein `downloadDelta` als Parameter übergeben — ein Objekt, das die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}}-Objekts enthält, sowie den Status aller Eigenschaften, die sich geändert haben.

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
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein gegebener `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion wird folgendes Argument übergeben:
    - `downloadDelta`
      - : Ein `object`, das das geänderte {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt und den Status aller darin geänderten Eigenschaften darstellt. Siehe den Abschnitt [downloadDelta](#downloaddelta_2) für weitere Details.

## Zusätzliche Objekte

### downloadDelta

Das `downloadDelta`-Objekt hat die folgenden verfügbaren Eigenschaften:

- `id`
  - : Ein `integer`, der die `id` des geänderten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.
- `url` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung in der `url` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `filename` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung im `filename` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `danger` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung in der `danger` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `mime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung im `mime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `startTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung in der `startTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `endTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung in der `endTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung im `state` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `canResume` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung im `canResume`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `paused` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung im `paused`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `error` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung im `error`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `totalBytes` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung in den `totalBytes` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `fileSize` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung in der `fileSize` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `exists` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung im `exists`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onChanged)-API von Chromium.
