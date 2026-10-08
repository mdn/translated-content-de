---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Listet die Slots eines Moduls auf. Diese Funktion gibt ein Array mit einem Eintrag für jeden Slot zurück. Jeder Eintrag enthält den Namen des Slots und, falls der Slot ein Token enthält, Informationen über das Token.

Sie können diese Funktion nur für ein Modul aufrufen, das in Firefox installiert ist.

Dies ist eine asynchrone Funktion, die eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let getting = browser.pkcs11.getModuleSlots(
  name              // string
)
```

### Parameter

- `name`
  - : `string`. Name des Moduls. Dieser muss mit der `name`-Eigenschaft im [PKCS #11-Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) des Moduls übereinstimmen.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Array von Objekten erfüllt wird – jeweils einem für jeden Slot, auf den das Modul Zugriff bietet. Jedes Objekt hat zwei Eigenschaften:

- `name`: der Name des Slots
- `token`: ein `Token`-Objekt, wenn in diesem Slot ein Token vorhanden ist. Wenn sich kein Token im Slot befindet, ist diese Eigenschaft `null`.

`Token`-Objekte haben die folgenden Eigenschaften:

- `name`
  - : `string`. Name des Tokens.
- `manufacturer`
  - : `string`. Name des Herstellers des Tokens.
- `HWVersion`
  - : `string`. Hardwareversion als PKCS #11-Versionsnummer (zwei durch einen Punkt getrennte 32-Bit-Ganzzahlen, beispielsweise „1.0“).
- `FWVersion`
  - : `string`. Firmwareversion als PKCS #11-Versionsnummer (zwei durch einen Punkt getrennte 32-Bit-Ganzzahlen, beispielsweise „1.0“).
- `serial`
  - : `string`. Seriennummer, deren Format durch die Token-Spezifikation festgelegt ist.
- `isLoggedIn`
  - : `boolean`: `true`, wenn das Token bereits angemeldet ist, andernfalls `false`.

Wenn das Modul nicht gefunden werden kann oder ein anderer Fehler auftritt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Installiert ein Modul, listet anschließend dessen Slots auf und zeigt die darin enthaltenen Tokens an:

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
