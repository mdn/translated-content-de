---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet wird, um die höchsten und niedrigsten TLS-Versionen auszulesen, die vom Browser unterstützt werden.

Das Objekt hat die folgenden Eigenschaften:

- `minimum`
  - : Die niedrigste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`, und `unknown`.
- `maximum`
  - : Die höchste TLS-Version, die vom Browser unterstützt wird. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3`, und `unknown`.

Dies ist eine schreibgeschützte Einstellung.

## Browser-Kompatibilität

{{Compat}}

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
