---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um zu verhindern, dass Websites Benachrichtigungen mithilfe der [`Notifications`](/de/docs/Web/API/Notifications_API) Web API anzeigen.

Die `Notifications` API wird verwendet, um Desktop-Benachrichtigungen für den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _erlauben_, _verweigern_ und _nachfragen_. Benutzer können diese Berechtigung für jede Website festlegen. Falls der Benutzer keine Berechtigung für eine bestimmte Website festgelegt hat, greift der Browser auf eine globale Berechtigung zurück, die standardmäßig auf _nachfragen_ eingestellt ist.

Wenn `browserSettings.webNotificationsDisabled` auf `true` gesetzt wird, wird die globale Berechtigung auf _verweigern_ umgeschaltet.

Beachten Sie, dass dies keine Auswirkungen auf Websites hat, für die der Benutzer eine benutzerspezifische Einstellung vorgenommen hat. Zum Beispiel, wenn der Benutzer <https://example.org> auf _erlauben_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, dürfen Seiten unter [https://example.org](https://example.org) weiterhin Benachrichtigungen anzeigen.

Wenn `browserSettings.webNotificationsDisabled` auf `false` gesetzt wird, wird der globale Standard wieder auf seinen Standardwert zurückgesetzt.

Beachten Sie, dass diese Einstellung keine Auswirkungen auf von Erweiterungen erstellte Benachrichtigungen mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API hat.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die Einstellung umschalten:

```js
async function toggleWebNotifications() {
  let current = await browser.browserSettings.webNotificationsDisabled.get({});
  console.log(`Current value: ${current.value}`);
  browser.browserSettings.webNotificationsDisabled.set({
    value: !current.value,
  });
}

browser.browserAction.onClicked.addListener(() => {
  toggleWebNotifications();
});
```

{{WebExtExamples}}
