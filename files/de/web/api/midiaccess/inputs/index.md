---
title: "MIDIAccess: Eingänge-Eigenschaft"
short-title: Eingänge
slug: Web/API/MIDIAccess/inputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`inputs`** der {{domxref("MIDIAccess")}}-Schnittstelle bietet Zugriff auf alle verfügbaren MIDI-Eingangsports.

## Wert

Eine {{domxref("MIDIInputMap")}} Instanz.

## Beispiele

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Promise zurück, das mit einem {{domxref("MIDIAccess")}}-Objekt erfüllt wird. Das Drucken des Wertes von `inputs` auf die Konsole gibt eine {{domxref("MIDIInputMap")}} zurück.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.inputs);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
