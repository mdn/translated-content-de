---
title: pkcs11.isModuleInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/isModuleInstalled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Überprüft, ob das benannte PKCS #11-Modul derzeit in Firefox installiert ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let checking = browser.pkcs11.isModuleInstalled(
  name              // string
)
```

### Parameter

- `name`
  - : `string`. Name des Moduls, das überprüft werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn das Modul installiert ist, andernfalls `false`.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Überprüft, ob das Modul mit dem Namen "pkcs11_module" installiert ist:

```js
function logIsInstalled(isInstalled) {
  console.log(`Module is installed: ${isInstalled}`);
}

browser.pkcs11.isModuleInstalled("pkcs11_module").then(logIsInstalled);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
