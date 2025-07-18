---
title: declarativeNetRequest.getDisabledRuleIds
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getDisabledRuleIds
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt die IDs der deaktivierten Regeln in einem statischen Regelwerk zurück. Die Anzahl der deaktivierten Regeln in einem Regelwerk ist auf den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} begrenzt.

## Syntax

```js-nolint
let ruleIds = await browser.declarativeNetRequest.getDisabledRuleIds(
    options                // object
);
```

### Parameter

- `options`
  - : Ein Objekt, das Details des Regelwerks enthält, für das die deaktivierten Regeln zurückgegeben werden sollen.
    - `rulesetId`
      - : `string` Die ID des statischen Regelwerks, das abgefragt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von statischen [Rules IDs](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/Rule#id) oder einem leeren Array erfüllt wird, wenn keine deaktivierten Regeln vorhanden sind. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
