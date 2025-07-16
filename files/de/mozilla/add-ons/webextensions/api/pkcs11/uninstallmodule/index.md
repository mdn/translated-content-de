---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
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
  - : `string`. Name des zu deinstallierenden Moduls. Dieser muss mit der Eigenschaft `name` im [PKCS #11-Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) für das Modul übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Modul deinstalliert ist.

Wenn das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Deinstalliert das Modul mit dem Namen "pkcs11_module":

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
