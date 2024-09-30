---
title: notifications.create()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt und zeigt eine Benachrichtigung an.

Übergeben Sie eine {{WebExtAPIRef("notifications.NotificationOptions")}}, um den Inhalt und das Verhalten der Benachrichtigung zu definieren.

Sie können optional eine ID für die Benachrichtigung angeben. Wenn Sie die ID weglassen, wird eine ID generiert. Sie können die ID verwenden, um die Benachrichtigung zu {{WebExtAPIRef("notifications.update()", "update")}} oder zu {{WebExtAPIRef("notifications.clear()", "clear")}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!WARNING]
> Wenn Sie `notifications.create()` mehrmals in schneller Folge aufrufen, kann es sein, dass Firefox überhaupt keine Benachrichtigung anzeigt.

## Syntax

```js-nolint
let creating = browser.notifications.create(
  id,                   // optional string
  options               // NotificationOptions
)
```

### Parameter

- `id` {{optional_inline}}
  - : `string`. Diese wird verwendet, um auf diese Benachrichtigung in {{WebExtAPIRef("notifications.update()")}}, {{WebExtAPIRef("notifications.clear()")}} und in Ereignis-Listenern zu verweisen. Wenn Sie dieses Argument weglassen oder einen leeren String übergeben, wird eine neue ID für diese Benachrichtigung generiert. Wenn die von Ihnen angegebene ID mit der ID einer vorhandenen Benachrichtigung dieser Erweiterung übereinstimmt, wird die andere Benachrichtigung gelöscht.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Definiert den Inhalt und das Verhalten der Benachrichtigung.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, wenn die Benachrichtigung erstellt und der Anzeigeprozess gestartet wurde, was vor der tatsächlichen Anzeige der Benachrichtigung für den Benutzer erfolgt. Es wird mit einem String erfüllt, der die ID der Benachrichtigung darstellt.

## Beispiele

Dieses Beispiel zeigt regelmäßig eine Benachrichtigung an, indem es {{WebExtAPIRef("alarms", "alarm")}} verwendet. Das Klicken auf die Browseraktion verwirft die Benachrichtigung. Sie benötigen die "alarms"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions), um Alarme zu erstellen (sowie die "notifications"-Berechtigung, um Benachrichtigungen zu erstellen).

```js
let cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
let CAKE_INTERVAL = 0.1;

browser.alarms.create("", { periodInMinutes: CAKE_INTERVAL });

browser.alarms.onAlarm.addListener((alarm) => {
  browser.notifications.create(cakeNotification, {
    type: "basic",
    iconUrl: browser.runtime.getURL("icons/cake-96.png"),
    title: "Time for cake!",
    message: "Something something cake",
  });
});

browser.browserAction.onClicked.addListener(() => {
  const clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications#method-create)-API von Chromium.
