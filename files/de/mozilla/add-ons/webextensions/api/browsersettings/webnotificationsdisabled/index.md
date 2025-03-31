---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um zu verhindern, dass Websites Benachrichtigungen über die [`Notifications`](/de/docs/Web/API/Notifications_API) Web-API anzeigen.

Die `Notifications`-API wird verwendet, um Desktop-Benachrichtigungen an den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _allow_, _deny_ und _prompt_. Benutzer können diese Berechtigung für jede Website festlegen. Wenn der Benutzer für eine bestimmte Website keine Berechtigung festgelegt hat, greift der Browser auf eine globale Berechtigung zurück, die standardmäßig auf _prompt_ eingestellt ist.

Wenn `browserSettings.webNotificationsDisabled` auf `true` gesetzt wird, wechselt die globale Berechtigung zu _deny_.

Beachten Sie, dass dies keine Auswirkungen auf Websites hat, für die der Benutzer eine standortspezifische Präferenz festgelegt hat. Wenn der Benutzer beispielsweise <https://example.org> auf _allow_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, dann sind Seiten unter [https://example.org](https://example.org/) weiterhin berechtigt, Benachrichtigungen anzuzeigen.

Wenn `browserSettings.webNotificationsDisabled` auf `false` gesetzt wird, wechselt der globale Standard wieder zu seinem Standardwert zurück.

Beachten Sie, dass diese Einstellung keine Auswirkungen auf Benachrichtigungen hat, die von Erweiterungen mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API erstellt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einstellung umschalten:

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
