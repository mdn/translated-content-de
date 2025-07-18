---
title: notifications.clear()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/clear
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : `string`. Die ID der zu löschenden Benachrichtigung. Diese entspricht der ID, die im Rückruf von {{WebExtAPIRef('notifications.create()')}} übergeben wurde.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem booleschen Wert erfüllt wird: `true`, wenn die Benachrichtigung gelöscht wurde, oder `false`, wenn sie nicht gelöscht wurde (zum Beispiel, weil die Benachrichtigung, auf die durch `id` verwiesen wird, nicht existierte).

## Beispiele

Dieses Beispiel zeigt eine Benachrichtigung, wenn der Benutzer eine Browser-Aktion anklickt, es sei denn, die Benachrichtigung wurde bereits angezeigt. In diesem Fall wird die Benachrichtigung gelöscht:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
