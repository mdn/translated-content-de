---
title: "NDEFReader: Leseereignis"
short-title: Leseereignis
slug: Web/API/NDEFReader/reading_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{SecureContext_Header}}{{SeeCompatTable}}{{APIRef("Web NFC API")}}

Das `reading` Ereignis der {{DOMxRef("NDEFReader")}}-Schnittstelle wird ausgelöst, wann immer eine neue Lesung von kompatiblen NFC-Geräten (z. B. NFC-Tags, die NDEF unterstützen) verfügbar ist, wenn sich diese Geräte im magnetischen Induktionsfeld des Lesegeräts befinden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das folgende Beispiel zeigt, wie Ereignisse sowohl mit den `onreading`- als auch `onreadingerror`-Ereignishandlern verarbeitet werden können.

```js
const ndef = new NDEFReader();
ndef
  .scan()
  .then(() => {
    console.log("Scan erfolgreich gestartet.");
    ndef.onreadingerror = (event) => {
      console.log(
        "Fehler! Daten können nicht vom NFC-Tag gelesen werden. Ein anderes versuchen?",
      );
    };
    ndef.onreading = (event) => {
      console.log("NDEF-Nachricht gelesen.");
    };
  })
  .catch((error) => {
    console.log(`Fehler! Der Scan konnte nicht gestartet werden: ${error}.`);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("NDEFReader.readingerror_event", "readingerror")}} Ereignis
