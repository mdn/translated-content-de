---
title: downloads.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das **`onChanged()`**-Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn sich eine der Eigenschaften eines {{WebExtAPIRef('downloads.DownloadItem')}} ändert (außer `bytesReceived`).

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein gegebener `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion wird mit folgendem Argument aufgerufen:

    - `downloadDelta`
      - : Ein `object`, das das geänderte {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt und den Status aller darin geänderten Eigenschaften repräsentiert. Weitere Details finden Sie im Abschnitt [downloadDelta](#downloaddelta_2).

## Zusätzliche Objekte

### downloadDelta

Das `downloadDelta`-Objekt verfügt über die folgenden verfügbaren Eigenschaften:

- `id`
  - : Ein `integer`, der die `id` des geänderten {{WebExtAPIRef('downloads.DownloadItem')}} repräsentiert.
- `url` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung der `url` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `filename` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `filename` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `danger` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `danger` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `mime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `mime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `startTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `startTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
- `endTime` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.StringDelta')}}-Objekt, das eine Änderung des `endTime` eines {{WebExtAPIRef('downloads.DownloadItem')}} beschreibt.
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
> Diese API basiert auf der API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onChanged) von Chromium.
