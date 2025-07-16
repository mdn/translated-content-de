---
title: browserSettings.webNotificationsDisabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/webNotificationsDisabled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um zu verhindern, dass Webseiten Benachrichtigungen mithilfe der [`Notifications`](/de/docs/Web/API/Notifications_API) Web-API anzeigen.

Die `Notifications` API wird verwendet, um Desktop-Benachrichtigungen für den Benutzer anzuzeigen. Es gibt drei Berechtigungsstufen für Benachrichtigungen: _allow_, _deny_ und _prompt_. Benutzer können diese Berechtigung für jede Webseite festlegen. Wenn der Benutzer keine Berechtigung für eine bestimmte Seite festgelegt hat, greift der Browser auf eine globale Berechtigung zurück, die standardmäßig auf _prompt_ gesetzt ist.

Wenn `browserSettings.webNotificationsDisabled` auf `true` gesetzt wird, wechselt die globale Berechtigung zu _deny_.

Beachten Sie, dass dies keine Auswirkungen auf Seiten hat, für die der Benutzer eine bereichsspezifische Präferenz festgelegt hat. Wenn der Benutzer beispielsweise <https://example.org> auf _allow_ setzt und eine Erweiterung dann `browserSettings.webNotificationsDisabled` auf `true` setzt, können Seiten unter [https://example.org](https://example.org/) dennoch Benachrichtigungen anzeigen.

Wenn `browserSettings.webNotificationsDisabled` auf `false` gesetzt wird, wird die globale Standardeinstellung auf ihren Standardwert zurückgesetzt.

Beachten Sie, dass diese Einstellung keine Auswirkungen auf Benachrichtigungen hat, die durch Erweiterungen mithilfe der [`notifications`](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API erstellt werden.

## Beispiele

Das Einstellungs-Toggle:

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
