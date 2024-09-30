---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Eigenschaft `privacy.services` enthält datenschutzbezogene Einstellungen zur Steuerung von vom Browser oder von Drittanbietern angebotenen Diensten. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt.

## Eigenschaften

- `passwordSavingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, bietet der Passwortmanager des Browsers an, Passwörter zu speichern, wenn der Benutzer diese eingibt. Standardmäßig auf `true` gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deaktivieren Sie den Passwortmanager, wenn möglich.

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

let getting = browser.privacy.services.passwordSavingEnabled.get({});
getting.then((got) => {
  console.log(got.value);
  if (
    got.levelOfControl === "controlled_by_this_extension" ||
    got.levelOfControl === "controllable_by_this_extension"
  ) {
    let setting = browser.privacy.services.passwordSavingEnabled.set({
      value: false,
    });
    setting.then(onSet);
  } else {
    console.log("Not able to set passwordSavingEnabled");
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API von Chromium.
