---
title: runtime.getBrowserInfo()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBrowserInfo
l10n:
  sourceCommit: 824e5d88f3590fd39892d8975a2255c203feae9b
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

Ein {{JSxRef("Promise")}}, das mit einem Objekt erfüllt wird, welches die folgenden Eigenschaften hat:

- `name`
  - : String-Wert, der den Namen des Browsers darstellt, zum Beispiel "Firefox".
- `vendor`
  - : String-Wert, der den Anbieter des Browsers darstellt, zum Beispiel "Mozilla".
- `version`
  - : String, das die Version des Browsers darstellt, zum Beispiel "51.0" oder "51.0a2".
- `buildID`
  - : String, das den spezifischen Build des Browsers darstellt, zum Beispiel "20161018004015".

## Beispiele

Abrufen und Ausgeben des Namens des Browsers:

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

> [!NOTE]
> Die Microsoft Edge-Kompatibilitätsdaten werden von der Microsoft Corporation bereitgestellt und sind hier unter der Creative Commons Attribution 3.0 United States License enthalten.
