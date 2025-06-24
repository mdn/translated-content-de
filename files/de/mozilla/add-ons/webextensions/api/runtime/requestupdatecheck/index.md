---
title: runtime.requestUpdateCheck()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/requestUpdateCheck
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Prüft, ob ein Update für die Erweiterung verfügbar ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let requestingCheck = browser.runtime.requestUpdateCheck()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt mit dem Ergebnis der Update-Anfrage erfüllt wird.

- `result`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `status`

      - : {{WebExtAPIRef('runtime.RequestUpdateCheckStatus')}}. Das Ergebnis der Update-Prüfung.

    - `version` {{optional_inline}}
      - : `string`. Die Versionsnummer des Updates, falls `status` auf `update_available` steht.

## Beispiele

Fordern Sie ein Update an und protokollieren Sie die neue Version, falls eine verfügbar ist:

```js
function onRequested(result) {
  console.log(result.status);
  if (result.status === "update_available") {
    console.log(result.version);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let requestingCheck = browser.runtime.requestUpdateCheck();
requestingCheck.then(onRequested, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-requestUpdateCheck). Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
