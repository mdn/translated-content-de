---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die höchste und niedrigste Version von TLS zu lesen, die vom Browser unterstützt wird.

Das Objekt hat folgende Eigenschaften:

- `minimum`
  - : Die niedrigste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.
- `maximum`
  - : Die höchste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.

Dies ist eine schreibgeschützte Einstellung.

## Beispiele

Ermitteln Sie die höchste TLS-Version, die vom Browser unterstützt wird:

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
