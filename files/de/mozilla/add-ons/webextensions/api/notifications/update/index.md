---
title: notifications.update()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert eine Benachrichtigung anhand ihrer ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let updating = browser.notifications.update(
  id,                            // string
  options                        // NotificationOptions
)
```

### Parameter

- `id`
  - : `string`. Die ID der zu aktualisierenden Benachrichtigung. Dies ist dieselbe ID, die an den Rückruf von {{WebExtAPIRef('notifications.create()')}} übergeben wurde.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Definiert den neuen Inhalt und das Verhalten der Benachrichtigung.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem boolean erfüllt wird: `true`, wenn die Benachrichtigung aktualisiert wurde, oder `false`, wenn dies nicht der Fall war (zum Beispiel, weil die durch `id` referenzierte Benachrichtigung nicht existierte).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel verwendet `update()`, um eine Fortschrittsbenachrichtigung zu aktualisieren. Durch Klicken auf die Browseraktion wird die Benachrichtigung angezeigt und ein {{WebExtAPIRef("alarms", "alarm")}} gestartet, den wir verwenden, um den Fortschrittsanzeiger der Benachrichtigung zu aktualisieren.

Beachten Sie, dass Sie die "alarms" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) benötigen, um Alarme zu erstellen (sowie die "notifications" Berechtigung, um Benachrichtigungen zu erstellen). Beachten Sie auch, dass Firefox das `progress` Attribut nicht unterstützt.

```js
let cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 0.3 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less than
a minute.

*/
let CAKE_PREP_INTERVAL = 0.005;

let progress = 0;

browser.alarms.onAlarm.addListener((alarm) => {
  progress += 10;
  if (progress > 100) {
    browser.notifications.clear(cakeNotification);
    browser.alarms.clear("cake-progress");
  } else {
    browser.notifications.update(cakeNotification, { progress });
  }
});

browser.browserAction.onClicked.addListener(() => {
  browser.notifications.getAll((all) => {
    if (all.length > 0) {
      browser.notifications.clear(cakeNotification);
      return;
    }
    progress = 0;
    browser.notifications.create(cakeNotification, {
      type: "progress",
      iconUrl: browser.extension.getURL("icons/cake-48.png"),
      title: "Your cake is being prepared…",
      message: "Something something cake",
      progress,
    });
    browser.alarms.create("cake-progress", {
      periodInMinutes: CAKE_PREP_INTERVAL,
    });
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API von Chromium.
