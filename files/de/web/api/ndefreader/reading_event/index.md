---
title: "NDEFReader: reading Ereignis"
short-title: reading
slug: Web/API/NDEFReader/reading_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das `reading`-Ereignis der [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Schnittstelle wird immer dann ausgelöst, wenn eine neue Lesung von kompatiblen NFC-Geräten (z.B. NFC-Tags, die NDEF unterstützen) verfügbar ist, wenn sich diese Geräte innerhalb des magnetischen Induktionsfelds des Lesers befinden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("reading", (event) => { })

onreading = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie Ereignisse mithilfe der Ereignis-Handler `onreading` und `onreadingerror` verarbeitet werden.

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

## Siehe auch

- [`readingerror`](/de/docs/Web/API/NDEFReader/readingerror_event) Ereignis
