---
title: clear()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/clear
l10n:
  sourceCommit: 51aed03147472b3883200e4538ff0beec8ff948f
---

Verwenden Sie `BrowserSetting.clear()`, um alle Änderungen zu löschen, die die Erweiterung an den Browsereinstellungen vorgenommen hat. Die Browsereinstellungen kehren zu ihrem vorherigen Wert zurück.

Die Erweiterung gibt auch die Kontrolle über die Einstellung auf, sodass eine zuvor installierte Erweiterung mit geringerer Priorität die Einstellung ändern kann. Weitere Informationen zur Steuerung von Einstellungen finden Sie unter [`BrowserSetting.set()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt. Wenn das Löschen des Wertes fehlgeschlagen ist, wird das Promise mit `false` aufgelöst. Wenn das Löschen des Wertes erfolgreich war, wird es mit `true` aufgelöst.

## Syntax

```js-nolint
let clearing = setting.clear(
  details     // object
)
```

### Parameter

- `details`
  - : Ein leeres Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung gelöscht wurde, andernfalls `false`.

## Beispiel

Löschen Sie die Einstellung `webRTCIPHandlingPolicy`:

```js
function onCleared(result) {
  if (result) {
    console.log("Setting was cleared");
  } else {
    console.log("Setting was not cleared");
  }
}

let clearing = browser.privacy.network.webRTCIPHandlingPolicy.clear({});
clearing.then(onCleared);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API von Chromium.
