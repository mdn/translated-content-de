---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft die vom Benutzer festgelegten Einstellungen für die Browser-Action ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### Parameter

Diese Funktion benötigt keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `userSettings`
  - : Ein Objekt, das die vom Benutzer festgelegten Einstellungen für die Browser-Action mit diesen Eigenschaften enthält:
    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Ob der Benutzer das Aktionssymbol an das Browser-UI angeheftet hat. Diese Einstellung zeigt nicht an, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Browser-UI ab.

## Beispiele

Dieser Code protokolliert eine Nachricht, die anzeigt, ob die Browser-Action angeheftet ist oder nicht:

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
