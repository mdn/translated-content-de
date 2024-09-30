---
title: "NDEFReader: readingerror Ereignis"
short-title: readingerror
slug: Web/API/NDEFReader/readingerror_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das `readingerror` Ereignis der [`NDEFReader`](/de/docs/Web/API/NDEFReader) Schnittstelle wird ausgelöst, wenn ein Fehler beim Lesen von NFC-Tags auftritt, z.B. wenn die Tags das Magnetfeld des Lesegeräts verlassen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("readingerror", (event) => {});

onreadingerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie Ereignisse sowohl mit den `onreading` als auch den `onreadingerror` Ereignishandlern verarbeitet werden.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Error! Cannot read data from the NFC tag. Try a different one?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF message read.");
    };
  })
  .catch((error) => {
    console.log(`Error! Scan failed to start: ${error}.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
