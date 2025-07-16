---
title: notifications.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/getAll
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird. Jede derzeit aktive Benachrichtigung ist eine Eigenschaft dieses Objekts: Der Name der Eigenschaft ist die ID der Benachrichtigung, und der Wert der Eigenschaft ist ein {{WebExtAPIRef("notifications.NotificationOptions")}}-Objekt, das diese Benachrichtigung beschreibt.

Beachten Sie, dass Sie eine ID für eine Benachrichtigung explizit definieren können, indem Sie sie in {{WebExtAPIRef("notifications.create()")}} übergeben. Wenn Sie dies nicht tun, generiert der Browser eine. Explizit angegebene IDs sind Zeichenfolgen, aber generierte IDs sind Zahlen.

## Beispiele

Dieses Beispiel zeigt eine Benachrichtigung, wenn der Benutzer auf eine Browser-Aktion klickt, es sei denn, die Benachrichtigung wird bereits angezeigt, in diesem Fall wird die Benachrichtigung gelöscht. Es verwendet getAll(), um herauszufinden, ob die Benachrichtigung angezeigt wird:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications)-API von Chromium.
