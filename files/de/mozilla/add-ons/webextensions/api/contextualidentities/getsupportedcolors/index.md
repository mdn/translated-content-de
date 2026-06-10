---
title: contextualIdentities.getSupportedColors()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/getSupportedColors
l10n:
  sourceCommit: 6203b96117ae35099df06d08f6a037bf2dff1d80
---

Gibt die vom Browser für kontextuelle Identitäten unterstützten Farben zurück.

## Syntax

```js-nolint
let colors = browser.contextualIdentities.getSupportedColors()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jede unterstützte Farbe. Jedes Objekt hat folgende Eigenschaften:

- `color`
  - : `string`. Der Name der Farbe (zum Beispiel, `"blue"`). Dies ist der Wert, der in der `color`-Eigenschaft von {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} verwendet wird.
- `colorCode`
  - : `string`. Ein Hex-Code für die Farbe (zum Beispiel, `"#37adff"`).

Wenn das Feature für kontextuelle Identitäten nicht aktiviert ist, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Rufen Sie alle unterstützten Farben ab und protokollieren Sie deren Namen und Hex-Codes:

```js
function onGot(colors) {
  for (const { color, colorCode } of colors) {
    console.log(`${color}: ${colorCode}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.contextualIdentities.getSupportedColors().then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
