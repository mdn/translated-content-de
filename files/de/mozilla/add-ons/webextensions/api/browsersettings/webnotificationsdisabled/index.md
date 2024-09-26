---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um zu verhindern, dass Websites Benachrichtigungen über die [`Notifications`](/de/docs/Web/API/Notifications_API) Web-API anzeigen.

Die `Notifications`-API wird verwendet, um Desktop-Benachrichtigungen für den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _allow_, _deny_ und _prompt_. Benutzer können diese Berechtigung für jede Website festlegen. Wenn der Benutzer keine Berechtigung für eine bestimmte Website festgelegt hat, verwendet der Browser eine globale Berechtigung, die standardmäßig auf _prompt_ gesetzt ist.

Das Setzen von `browserSettings.webNotificationsDisabled` auf `true` ändert die globale Berechtigung auf _deny_.

Beachten Sie, dass dies keine Auswirkungen auf Websites hat, für die der Benutzer eine spezielle Einstellung getroffen hat. Zum Beispiel, wenn der Benutzer <https://example.org> auf _allow_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, dürfen Seiten unter [https://example.org](https://example.org) weiterhin Benachrichtigungen anzeigen.

Das Setzen von `browserSettings.webNotificationsDisabled` auf `false` setzt die globale Standardberechtigung auf ihren Standardwert zurück.

Beachten Sie, dass diese Einstellung keinen Einfluss auf Benachrichtigungen hat, die von Erweiterungen mit der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications)-API erstellt wurden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Schalten Sie die Einstellung um:

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