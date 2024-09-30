---
title: "MIDIAccess: outputs Eigenschaft"
short-title: outputs
slug: Web/API/MIDIAccess/outputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`outputs`** schreibgeschützte Eigenschaft des [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Interfaces bietet Zugriff auf verfügbare MIDI-Ausgabeports.

## Wert

Eine Instanz von [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap).

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Das Ausgeben des Werts von `outputs` in die Konsole gibt eine [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap) zurück.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.outputs);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
