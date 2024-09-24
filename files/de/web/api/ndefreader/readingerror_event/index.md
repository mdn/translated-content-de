---
title: "NDEFReader: readingerror-Ereignis"
short-title: readingerror
slug: Web/API/NDEFReader/readingerror_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das `readingerror`-Ereignis der {{DOMxRef("NDEFReader")}}-Schnittstelle wird ausgelöst, wenn ein Fehler beim Lesen von NFC-Tags auftritt, z.B. wenn Tags das magnetische Induktionsfeld des Lesers verlassen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("readingerror", (event) => {});

onreadingerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das folgende Beispiel zeigt, wie Ereignisse sowohl mit den `onreading`- als auch `onreadingerror`-Ereignishandlern verarbeitet werden.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan erfolgreich gestartet.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Fehler! Kann die Daten vom NFC-Tag nicht lesen. Versuchen Sie einen anderen?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF-Nachricht gelesen.");
    };
  })
  .catch((error) => {
    console.log(`Fehler! Scan konnte nicht gestartet werden: ${error}.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
