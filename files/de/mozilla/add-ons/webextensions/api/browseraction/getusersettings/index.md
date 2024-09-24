---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
l10n:
  sourceCommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

{{AddonSidebar}}

Ermittelt die vom Benutzer festgelegten Einstellungen für die Browser-Aktion.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### Parameter

Diese Funktion benötigt keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, welches diese Eigenschaften enthält:

- `userSettings`

  - : Ein Objekt, das die vom Benutzer angegebenen Einstellungen für die Browser-Aktion mit diesen Eigenschaften enthält:

    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Ob der Benutzer das Aktionssymbol an die Benutzeroberfläche des Browsers angeheftet hat. Diese Einstellung zeigt nicht, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Benutzeroberfläche des Browsers ab.

## Beispiele

Dieser Code protokolliert eine Nachricht, die angibt, ob die Browser-Aktion angeheftet ist oder nicht:

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("Browser-Aktion ist an die Symbolleiste angeheftet.");
  } else {
    console.log("Browser-Aktion ist nicht an die Symbolleiste angeheftet.");
  }
}

let gettingUserSettings = browser.browserAction.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
