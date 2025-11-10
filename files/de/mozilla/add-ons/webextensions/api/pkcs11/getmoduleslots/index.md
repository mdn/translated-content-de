---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermittelt die Steckplätze eines Moduls. Diese Funktion gibt ein Array zurück, das einen Eintrag für jeden Steckplatz enthält. Jeder Eintrag enthält den Namen des Steckplatzes und, wenn der Steckplatz ein Token enthält, Informationen über das Token.

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
  - : `string`. Name des Moduls. Dies muss mit der `name`-Eigenschaft im [PKCS #11-Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_manifests) des Moduls übereinstimmen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, eines für jeden Steckplatz, auf den das Modul Zugriff gewährt. Jedes Objekt hat zwei Eigenschaften:

- `name`: der Name des Steckplatzes
- `token`: falls ein Token in diesem Steckplatz vorhanden ist, ein `Token`-Objekt. Falls kein Token im Steckplatz vorhanden ist, ist diese Eigenschaft `null`.

`Token`-Objekte haben die folgenden Eigenschaften:

- `name`
  - : `string`. Name des Tokens.
- `manufacturer`
  - : `string`. Name des Herstellers des Tokens.
- `HWVersion`
  - : `string`. Hardwareversion als PKCS #11-Versionsnummer (zwei 32-Bit-Ganzzahlen, getrennt durch einen Punkt, wie "1.0").
- `FWVersion`
  - : `string`. Firmwareversion als PKCS #11-Versionsnummer (zwei 32-Bit-Ganzzahlen, getrennt durch einen Punkt, wie "1.0").
- `serial`
  - : `string`. Seriennummer, deren Format durch die Tokenspezifikation definiert ist.
- `isLoggedIn`
  - : `boolean`: `true`, wenn das Token bereits angemeldet ist, `false` sonst.

Falls das Modul nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Installiert ein Modul, listet dann seine Steckplätze auf und listet die enthaltenen Tokens auf:

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
