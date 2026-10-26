---
title: "NDEFReader: reading-Ereignis"
short-title: reading
slug: Web/API/NDEFReader/reading_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das `reading`-Ereignis der [`NDEFReader`](/de/docs/Web/API/NDEFReader)-Schnittstelle wird ausgelöst, sobald ein neuer Lesevorgang von einem kompatiblen NFC-Gerät (z. B. einem NFC-Tag, das NDEF unterstützt) verfügbar ist und sich dieses Gerät im magnetischen Induktionsfeld des Lesegeräts befindet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("reading", (event) => { })
```

Alternativ können Sie den [Event-Handler-Eigenschaften](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onreading = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Beispiel zeigt, wie Ereignisse mit den Event-Handlern `onreading` und `onreadingerror` verarbeitet werden.

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

- [`readingerror`](/de/docs/Web/API/NDEFReader/readingerror_event)-Ereignis
