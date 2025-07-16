---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Das **`onChanged()`**-Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn sich eine der Eigenschaften eines {{WebExtAPIRef('downloads.DownloadItem')}} verändert (außer `bytesReceived`).

Der Listener erhält ein `downloadDelta` als Parameter — ein Objekt, das die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}}-Objekts sowie den Status aller geänderten Eigenschaften enthält.

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
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, `false` andernfalls.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion erhält folgendes Argument:
    - `downloadDelta`
      - : Ein `object`, das das geänderte {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt darstellt und den Status aller darin geänderten Eigenschaften. Weitere Details finden Sie im [downloadDelta](#downloaddelta_2)-Abschnitt.

## Zusätzliche Objekte

### downloadDelta

Das `downloadDelta`-Objekt hat die folgenden Eigenschaften:

- `id`
  - : Ein `integer`, der die `id` des geänderten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.
- `url` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `url` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `filename` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `filename` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `danger` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `danger` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `mime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `mime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `startTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `startTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `endTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `endTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `state` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `state` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `canResume` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `canResume`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `paused` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `paused`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `error` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `error`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `totalBytes` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung der `totalBytes` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `fileSize` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DoubleDelta')}}-Objekt, das eine Änderung der `fileSize` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `exists` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.BooleanDelta')}}-Objekt, das eine Änderung des `exists`-Status eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.

## Beispiele

Protokollieren einer Nachricht, wenn Downloads abgeschlossen sind:

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
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onChanged) API.
