---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die höchsten und niedrigsten TLS-Versionen zu lesen, die vom Browser unterstützt werden.

Das Objekt hat die folgenden Eigenschaften:

- `minimum`
  - : Die niedrigste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.
- `maximum`
  - : Die höchste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.

Dies ist eine schreibgeschützte Einstellung.

## Beispiele

Abrufen der höchsten TLS-Version, die vom Browser unterstützt wird:

```js
browser.browserSettings.tlsVersionRestrictionConfig.maximum
  .get({})
  .then((result) => {
    console.log(`Highest TLS version supported: ${result}`);
  });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
