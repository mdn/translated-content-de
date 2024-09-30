---
title: action.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/action/getUserSettings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft die vom Benutzer angegebenen Einstellungen für die Browser-Aktion ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let userSettings = await browser.action.getUserSettings();
```

### Parameter

Diese Funktion erfordert keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, welches folgende Eigenschaften besitzt:

- `userSettings`

  - : Ein Objekt, das die vom Benutzer angegebenen Einstellungen für die Browser-Aktion enthält, mit folgenden Eigenschaften:

    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Gibt an, ob der Benutzer das Symbol der Aktion in der Browser-Benutzeroberfläche angeheftet hat. Diese Einstellung zeigt nicht an, ob das Aktionssymbol sichtbar ist. Die Sichtbarkeit des Symbols hängt von der Größe des Browserfensters und dem Layout der Browser-Benutzeroberfläche ab.

## Beispiele

Dieser Code protokolliert eine Nachricht, die anzeigt, ob die Aktion angeheftet ist oder nicht:

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
> Diese API basiert auf der [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getUserSettings) API von Chromium.
