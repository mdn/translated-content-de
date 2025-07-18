---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Deinstalliert das benannte PKCS #11 Modul aus Firefox.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let uninstalling = browser.pkcs11.uninstallModule(
  name              // string
)
```

### Parameter

- `name`
  - : `string`. Name des Moduls, das deinstalliert werden soll. Dieser muss mit der `name`-Eigenschaft im [PKCS #11 Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) für das Modul übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird ohne Argumente, sobald das Modul deinstalliert ist.

Falls das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Deinstalliert das Modul mit dem Namen "pkcs11_module":

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
