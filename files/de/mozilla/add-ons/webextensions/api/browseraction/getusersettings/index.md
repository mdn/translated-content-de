---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
l10n:
  sourceCommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

{{AddonSidebar}}

Ruft die vom Benutzer angegebenen Einstellungen für die Browser-Aktion ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### Parameter

Diese Funktion nimmt keine Parameter entgegen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das folgende Eigenschaften hat:

- `userSettings`

  - : Ein Objekt, das die vom Benutzer angegebenen Einstellungen für die Browser-Aktion enthält mit diesen Eigenschaften:

    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Ob der Benutzer das Symbol der Aktion an die Browser-Oberfläche angeheftet hat. Diese Einstellung gibt nicht an, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Browser-Oberfläche ab.

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
