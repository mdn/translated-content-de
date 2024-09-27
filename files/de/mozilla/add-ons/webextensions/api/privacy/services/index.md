---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die `privacy.services`-Eigenschaft enthält datenschutzbezogene Einstellungen zur Steuerung von Diensten, die vom Browser oder von Drittanbietern angeboten werden. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

## Eigenschaften

- `passwordSavingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein boolescher Wert ist. Wenn `true`, wird der Passwort-Manager des Browsers anbieten, Passwörter zu speichern, wenn der Benutzer sie eingibt. Standardmäßig `true`.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Den Passwort-Manager deaktivieren, wenn möglich.

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
> Diese API basiert auf Chromium's [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy) API.
