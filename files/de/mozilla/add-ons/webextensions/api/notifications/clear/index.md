---
title: notifications.clear()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/clear
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht eine Benachrichtigung anhand ihrer ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearing = browser.notifications.clear(
  id                            // string
)
```

### Parameter

- `id`
  - : `string`. Die ID der zu löschenden Benachrichtigung. Dies ist dieselbe ID, die im Callback von {{WebExtAPIRef('notifications.create()')}} übergeben wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem boolean erfüllt wird: `true`, wenn die Benachrichtigung gelöscht wurde, oder `false`, wenn dies nicht der Fall war (zum Beispiel, weil die durch `id` referenzierte Benachrichtigung nicht existierte).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel zeigt eine Benachrichtigung, wenn der Benutzer auf eine Browseraktion klickt, es sei denn, die Benachrichtigung wird bereits angezeigt, in diesem Fall wird die Benachrichtigung gelöscht:

```js
let myNotification = "my-notification";

function toggleAlarm(all) {
  if (myNotification in all) {
    browser.notifications.clear(myNotification);
  } else {
    browser.notifications.create(myNotification, {
      type: "basic",
      iconUrl: browser.runtime.getURL("icons/cake-48.png"),
      title: "Am imposing title",
      message: "Some interesting content",
    });
  }
}

function handleClick() {
  let gettingAll = browser.notifications.getAll();
  gettingAll.then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
