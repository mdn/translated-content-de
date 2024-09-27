---
title: "MIDIAccess: sysexEnabled-Eigenschaft"
short-title: sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
l10n:
  sourceCommit: a6a3ef3a15ca614e4edbfc950ce49a275f2ec4ad
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`sysexEnabled`** des [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Interfaces gibt an, ob die Unterstützung für systemexklusive Nachrichten (system exclusive) in der aktuellen MIDIAccess-Instanz aktiviert ist.

## Wert

Ein boolescher Wert.

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt erfüllt wird. Das Ausdrucken des Werts von `sysexEnabled` in der Konsole gibt einen booleschen Wert zurück, der `true` ist, wenn die Unterstützung für systemexklusive Nachrichten aktiviert ist.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.sysexEnabled);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
