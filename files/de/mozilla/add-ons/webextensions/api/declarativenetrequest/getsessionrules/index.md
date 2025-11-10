---
title: declarativeNetRequest.getSessionRules
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/getSessionRules
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt die aktive Menge von sitzungsbezogenen Regeln für die Erweiterung zurück.

## Syntax

```js-nolint
let sessionRules = await browser.declarativeNetRequest.getSessionRules();
```

### Parameter

- `filter` {{optional_inline}}
  - : Ein Objekt, um die Liste der zurückgegebenen Regeln zu filtern.
    - `ruleIds` {{optional_inline}}
      - : Ein Array von `integer`. Die IDs der Regeln, die zurückgegeben werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("declarativeNetRequest.Rule")}} Objekten erfüllt wird. Wenn keine Regeln aktiv sind, ist das Objekt leer. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
