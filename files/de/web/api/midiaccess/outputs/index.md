---
title: "MIDIAccess: outputs-Eigenschaft"
short-title: outputs
slug: Web/API/MIDIAccess/outputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`outputs`**-Eigenschaft (nur lesbar) des {{domxref("MIDIAccess")}}-Interfaces ermöglicht den Zugriff auf verfügbare MIDI-Ausgangsports.

## Wert

Eine Instanz der {{domxref("MIDIOutputMap")}}.

## Beispiele

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Versprechen zurück, das zu einem {{domxref("MIDIAccess")}}-Objekt aufgelöst wird. Das Ausgeben des Wertes von `outputs` in der Konsole gibt eine {{domxref("MIDIOutputMap")}} zurück.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.outputs);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
