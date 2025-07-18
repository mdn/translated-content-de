---
title: getState
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal/getState
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt den Portalstatus als einen der folgenden Werte zurück: `unknown`, `not_captive`, `unlocked_portal` oder `locked_portal`.

## Syntax

```js-nolint
let state = browser.captivePortal.getState()
```

### Rückgabewert

Ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der einen der folgenden Werte enthält: `unknown`, `not_captive`, `unlocked_portal` oder `locked_portal`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
