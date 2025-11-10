---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt Informationen über den Browser zurück, in dem die Erweiterung installiert ist.

Dies ist eine asynchrone Funktion, die ein {{JSxRef("Promise")}} zurückgibt.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getBrowserInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften besitzt:

- `name`
  - : String-Wert, der den Namen des Browsers darstellt, zum Beispiel "Firefox".
- `vendor`
  - : String-Wert, der den Anbieter des Browsers darstellt, zum Beispiel "Mozilla".
- `version`
  - : String, das die Version des Browsers darstellt, zum Beispiel "51.0" oder "51.0a2".
- `buildID`
  - : String, das den spezifischen Build des Browsers darstellt, zum Beispiel "20161018004015".

## Beispiele

Abrufen und Protokollieren des Browsernamens:

```js
function gotBrowserInfo(info) {
  console.log(info.name);
}

let gettingInfo = browser.runtime.getBrowserInfo();
gettingInfo.then(gotBrowserInfo);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
