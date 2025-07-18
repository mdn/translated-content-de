---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft die vom Benutzer festgelegten Einstellungen für die Browser-Aktion ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### Parameter

Diese Funktion nimmt keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ein Objekt mit folgenden Eigenschaften erfüllt:

- `userSettings`
  - : Ein Objekt, das die vom Benutzer festgelegten Einstellungen für die Browser-Aktion mit diesen Eigenschaften enthält:
    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Ob der Benutzer das Symbol der Aktion an die Benutzeroberfläche des Browsers angeheftet hat. Diese Einstellung gibt nicht an, ob das Symbol der Aktion sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Benutzeroberfläche des Browsers ab.

## Beispiele

Dieser Code protokolliert eine Nachricht, die angibt, ob die Browser-Aktion angeheftet ist oder nicht:

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("Browser action is pinned to toolbar.");
  } else {
    console.log("Browser action is not pinned to toolbar.");
  }
}

let gettingUserSettings = browser.browserAction.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
