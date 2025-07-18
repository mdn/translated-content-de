---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um zu verhindern, dass Websites Benachrichtigungen mit der [`Notifications`](/de/docs/Web/API/Notifications_API) Web-API anzeigen.

Die `Notifications`-API wird verwendet, um Desktop-Benachrichtigungen an den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _allow_, _deny_ und _prompt_. Benutzer können diese Berechtigung für jede Website festlegen. Wenn der Benutzer keine Berechtigung für eine bestimmte Website festgelegt hat, fällt der Browser auf eine globale Berechtigung zurück, die standardmäßig auf _prompt_ steht.

Wenn `browserSettings.webNotificationsDisabled` auf `true` gesetzt wird, wird die globale Berechtigung auf _deny_ umgeschaltet.

Beachten Sie, dass dies keine Auswirkungen auf Websites hat, für die der Benutzer eine Website-spezifische Präferenz festgelegt hat. Wenn der Benutzer beispielsweise <https://example.org> auf _allow_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, dürfen Seiten unter [https://example.org](https://example.org/) weiterhin Benachrichtigungen anzeigen.

Wenn `browserSettings.webNotificationsDisabled` auf `false` gesetzt wird, wird der globale Standard wieder auf seinen Standardwert zurückgesetzt.

Beachten Sie, dass diese Einstellung keine Auswirkungen auf Benachrichtigungen hat, die von Erweiterungen mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API erstellt werden.

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

## Browser-Kompatibilität

{{Compat}}
