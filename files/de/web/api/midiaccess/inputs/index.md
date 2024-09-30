---
title: "MIDIAccess: inputs-Eigenschaft"
short-title: inputs
slug: Web/API/MIDIAccess/inputs
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`inputs`** schreibgeschützte Eigenschaft des [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Interfaces ermöglicht den Zugriff auf alle verfügbaren MIDI-Eingangsports.

## Wert

Eine Instanz von [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap).

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Das Drucken des Wertes von `inputs` in die Konsole gibt eine [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap) zurück.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.inputs);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
