---
title: action.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/action/getUserSettings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft die vom Benutzer angegebenen Einstellungen für die Browser-Aktion ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.action.getUserSettings();
```

### Parameter

Diese Funktion nimmt keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das folgende Eigenschaften enthält:

- `userSettings`
  - : Ein Objekt, das die vom Benutzer spezifizierten Einstellungen für die Browser-Aktion mit folgenden Eigenschaften enthält:
    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Ob der Benutzer das Aktionssymbol an die Browseroberfläche angeheftet hat. Diese Einstellung zeigt nicht an, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Browseroberfläche ab.

## Beispiele

Dieser Code protokolliert eine Nachricht, die angibt, ob die Aktion angeheftet ist oder nicht:

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("Action is pinned to toolbar.");
  } else {
    console.log("Action is not pinned to toolbar.");
  }
}

let gettingUserSettings = browser.action.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getUserSettings) API.
