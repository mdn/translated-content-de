---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
l10n:
  sourceCommit: 873e38320b7f7dbe0492f96a02e7e6503ac8c3b3
---

{{AddonSidebar}}

Gibt Informationen über den Browser zurück, in dem die Erweiterung installiert ist.

Dies ist eine asynchrone Funktion, die ein {{JSxRef("Promise")}} zurückgibt.

## Syntax

```js-nolint
let gettingInfo = browser.runtime.getBrowserInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Objekt erfüllt wird, das folgende Eigenschaften hat:

- `name`
  - : Zeichenfolgenwert, der den Namen des Browsers darstellt, zum Beispiel "Firefox".
- `vendor`
  - : Zeichenfolgenwert, der den Anbieter des Browsers darstellt, zum Beispiel "Mozilla".
- `version`
  - : Zeichenfolge, die die Version des Browsers darstellt, zum Beispiel "51.0" oder "51.0a2".
- `buildID`
  - : Zeichenfolge, die den spezifischen Build des Browsers darstellt, zum Beispiel "20161018004015".

## Beispiele

Holen und protokollieren Sie den Namen des Browsers:

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
