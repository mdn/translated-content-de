---
title: action.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/action/getUserSettings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft die vom Benutzer spezifizierten Einstellungen für die Browser-Aktion ab.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, welches folgende Eigenschaften hat:

- `userSettings`
  - : Ein Objekt, das die vom Benutzer angegebenen Einstellungen für die Browser-Aktion enthält mit folgenden Eigenschaften:
    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Benutzer das Symbol der Aktion an die Browser-Oberfläche angeheftet hat. Diese Einstellung zeigt nicht an, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Browser-Oberfläche ab.

## Beispiele

Dieser Code gibt eine Meldung aus, die anzeigt, ob die Aktion angeheftet ist oder nicht:

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
