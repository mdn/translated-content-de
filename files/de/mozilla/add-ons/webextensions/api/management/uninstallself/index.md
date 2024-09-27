---
title: management.uninstallSelf()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstallSelf
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Deinstalliert das aufrufende Add-on.

Diese API _erfordert nicht_ die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let uninstallingSelf = browser.management.uninstallSelf(
  options              // object
)
```

### Parameter

- `options` {{optional_inline}}

  - : `object`. Objekt, das zwei Eigenschaften haben kann, beide optional:

    - `showConfirmDialog` {{optional_inline}}
      - : Boolean. Wenn `showConfirmDialog` `true` ist, zeigt der Browser ein Dialogfeld an, in dem der Benutzer gefragt wird, ob das Add-on deinstalliert werden soll. Standardmäßig ist `false`.
    - `dialogMessage` {{optional_inline}}
      - : String. Eine zusätzliche Nachricht, die im Bestätigungsdialog angezeigt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Fehlermeldung abgelehnt wird, wenn der Benutzer die Deinstallation abbricht.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deinstallieren Sie das Add-on und bitten Sie den Benutzer um Bestätigung. Überprüfen Sie im Rückruf, ob der Benutzer die Deinstallation abgebrochen hat.

Beachten Sie, dass wir keinen Erfolgs-Handler übergeben haben, da das Add-on bei erfolgreicher Deinstallation nicht mehr verfügbar ist, um es zu verarbeiten.

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
});

uninstalling.then(null, onCanceled);
```

Dasselbe, jedoch mit einer benutzerdefinierten Nachricht im Dialog:

```js
function onCanceled(error) {
  console.log(`Canceled: ${error}`);
}

let uninstalling = browser.management.uninstallSelf({
  showConfirmDialog: true,
  dialogMessage: "Testing self-uninstall",
});

uninstalling.then(null, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#method-uninstallSelf) API von Chromium. Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
