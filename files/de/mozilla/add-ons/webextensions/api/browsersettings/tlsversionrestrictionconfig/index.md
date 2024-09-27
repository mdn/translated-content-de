---
title: browserSettings.tlsVersionRestrictionConfig
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/tlsVersionRestrictionConfig
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die höchste und niedrigste von dem Browser unterstützte TLS-Version zu lesen.

Das Objekt hat folgende Eigenschaften:

- `minimum`
  - : Die niedrigste von dem Browser unterstützte TLS-Version. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.
- `maximum`
  - : Die höchste von dem Browser unterstützte TLS-Version. Gültige Werte sind `TLSv1`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` und `unknown`.

Dies ist eine schreibgeschützte Einstellung.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erhalten Sie die höchste von dem Browser unterstützte TLS-Version:

```js
browser.browserSettings.tlsVersionRestrictionConfig.maximum
  .get({})
  .then((result) => {
    console.log(`Highest TLS version supported: ${result}`);
  });
```

{{WebExtExamples}}
