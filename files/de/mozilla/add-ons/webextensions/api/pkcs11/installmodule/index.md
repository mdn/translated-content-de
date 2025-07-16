---
title: pkcs11.installModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/installModule
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Installiert das benannte PKCS #11-Modul und macht es in Firefox verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let installing = browser.pkcs11.installModule(
  name,              // string
  flags              // integer
)
```

### Parameter

- `name`
  - : `string`. Name des zu installierenden Moduls. Dies muss mit der `name` Eigenschaft im [PKCS #11 Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) für das Modul übereinstimmen.
- `flags` {{optional_inline}}
  - : `integer`. Flags, die an das Modul übergeben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Modul installiert ist.

Falls das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Installiert ein Modul, listet dann seine Slots auf und zeigt die darin enthaltenen Tokens an:

```js
function onInstalled() {
  return browser.pkcs11.getModuleSlots("my_module");
}

function onGotSlots(slots) {
  for (const slot of slots) {
    console.log(`Slot: ${slot.name}`);
    if (slot.token) {
      console.log(`Contains token: ${slot.token.name}`);
    } else {
      console.log("Is empty");
    }
  }
}

browser.pkcs11.installModule("my_module").then(onInstalled).then(onGotSlots);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
