---
title: notifications.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft alle derzeit aktiven Benachrichtigungen ab, die von der Erweiterung erstellt wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingAll = browser.notifications.getAll()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird. Jede derzeit aktive Benachrichtigung ist eine Eigenschaft dieses Objekts: der Name der Eigenschaft ist die ID der Benachrichtigung und der Wert der Eigenschaft ist ein {{WebExtAPIRef("notifications.NotificationOptions")}}-Objekt, das diese Benachrichtigung beschreibt.

Bitte beachten Sie, dass Sie eine ID für eine Benachrichtigung explizit festlegen können, indem Sie diese in {{WebExtAPIRef("notifications.create()")}} übergeben. Wenn Sie dies nicht tun, wird der Browser eine generieren. Explizit angegebene IDs sind Zeichenfolgen, aber generierte IDs sind Zahlen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel zeigt eine Benachrichtigung, wenn der Benutzer eine Browser-Aktion anklickt, es sei denn, die Benachrichtigung wurde bereits angezeigt, in diesem Fall wird die Benachrichtigung gelöscht. Es verwendet getAll(), um festzustellen, ob die Benachrichtigung angezeigt wird:

```js
const myNotification = "my-notification";

function toggleAlarm(all) {
  const ids = Object.keys(all);
  if (ids.includes(myNotification)) {
    browser.notifications.clear(myNotification);
  } else {
    console.log("showing");

    browser.notifications.create(myNotification, {
      type: "basic",
      title: "Am imposing title",
      message: "Some interesting content",
    });
  }
}

function handleClick() {
  console.log("clicked");
  browser.notifications.getAll().then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

Dieses Beispiel protokolliert den Titel aller aktiven Benachrichtigungen:

```js
function logNotifications(all) {
  for (const id in all) {
    console.log(`Title: ${all[id].title}`);
  }
}

browser.notifications.getAll().then(logNotifications);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.