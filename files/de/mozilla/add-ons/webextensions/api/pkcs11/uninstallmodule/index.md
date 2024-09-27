---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Deinstalliert das benannte PKCS #11-Modul aus Firefox.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let uninstalling = browser.pkcs11.uninstallModule(
  name              // string
)
```

### Parameter

- `name`
  - : `string`. Name des zu deinstallierenden Moduls. Dieser muss mit der `name`-Eigenschaft im [PKCS #11 Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) für das Modul übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, sobald das Modul deinstalliert wurde.

Wenn das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deinstalliert das Modul mit dem Namen "pkcs11_module":

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}
