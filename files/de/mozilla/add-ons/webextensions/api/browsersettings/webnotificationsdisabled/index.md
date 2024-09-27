---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um zu verhindern, dass Websites Benachrichtigungen mit der [`Notifications`](/de/docs/Web/API/Notifications_API) Web API anzeigen.

Die `Notifications` API wird verwendet, um Desktop-Benachrichtigungen für den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _erlauben_, _verweigern_ und _nachfragen_. Benutzer können diese Berechtigung für jede Website festlegen. Wenn der Benutzer keine Berechtigung für eine bestimmte Website festgelegt hat, wird der Browser auf eine globale Berechtigung zurückgreifen, die standardmäßig auf _nachfragen_ gesetzt ist.

Das Setzen von `browserSettings.webNotificationsDisabled` auf `true` schaltet die globale Berechtigung auf _verweigern_ um.

Beachten Sie, dass dies keine Auswirkungen auf Seiten hat, für die der Benutzer eine spezifische Präferenz festgelegt hat. Wenn der Benutzer beispielsweise <https://example.org> auf _erlauben_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, können Seiten unter [https://example.org](https://example.org) weiterhin Benachrichtigungen anzeigen.

Das Setzen von `browserSettings.webNotificationsDisabled` auf `false` schaltet den globalen Standardwert zurück auf den Standardwert.

Beachten Sie, dass diese Einstellung keine Auswirkungen auf Benachrichtigungen hat, die von Erweiterungen mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API erstellt werden.

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
