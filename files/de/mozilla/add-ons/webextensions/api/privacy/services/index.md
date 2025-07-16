---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die Eigenschaft `privacy.services` enthält Datenschutz-Einstellungen zur Steuerung von Diensten, die entweder vom Browser oder von Drittanbietern angeboten werden. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

## Eigenschaften

- `passwordSavingEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist. Wenn `true`, wird der Passwort-Manager des Browsers anbieten, Passwörter zu speichern, wenn der Benutzer sie eingibt. Standardmäßig `true`.

## Beispiele

Deaktivieren Sie den Passwort-Manager, wenn möglich.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium.
