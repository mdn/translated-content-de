---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Enumeriert die Slots eines Moduls. Diese Funktion gibt ein Array zurück, das einen Eintrag für jeden Slot enthält. Jeder Eintrag enthält den Namen des Slots und, falls der Slot ein Token enthält, Informationen über das Token.

Sie können dies nur für ein Modul aufrufen, das in Firefox installiert ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.pkcs11.getModuleSlots(
  name              // string
)
```

### Parameter

- `name`
  - : `string`. Name des Moduls. Dies muss mit der `name`-Eigenschaft im [PKCS #11 Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) für das Modul übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Slot, auf den das Modul Zugriff gewährt. Jedes Objekt hat zwei Eigenschaften:

- `name`: der Name des Slots
- `token`: wenn ein Token in diesem Slot vorhanden ist, ein `Token`-Objekt. Wenn kein Token im Slot vorhanden ist, ist diese Eigenschaft `null`.

`Token`-Objekte haben die folgenden Eigenschaften:

- `name`
  - : `string`. Name des Tokens.
- `manufacturer`
  - : `string`. Name des Herstellers des Tokens.
- `HWVersion`
  - : `string`. Hardware-Version, als eine PKCS #11 Versionsnummer (zwei 32-Bit Integer, getrennt durch einen Punkt, zum Beispiel "1.0").
- `FWVersion`
  - : `string`. Firmware-Version, als eine PKCS #11 Versionsnummer (zwei 32-Bit Integer, getrennt durch einen Punkt, zum Beispiel "1.0").
- `serial`
  - : `string`. Seriennummer, deren Format durch die Token-Spezifikation definiert ist.
- `isLoggedIn`
  - : `boolean`: `true`, wenn das Token bereits angemeldet ist, `false` sonst.

Wenn das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Installiert ein Modul, listet dann seine Slots auf und die Tokens, die sie enthalten:

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
