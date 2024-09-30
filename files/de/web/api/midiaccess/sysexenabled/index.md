---
title: "MIDIAccess: sysexEnabled-Eigenschaft"
short-title: sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
l10n:
  sourceCommit: a6a3ef3a15ca614e4edbfc950ce49a275f2ec4ad
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte Eigenschaft **`sysexEnabled`** des [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Interfaces gibt an, ob die System-Exklusiv-Unterstützung für die aktuelle MIDIAccess-Instanz aktiviert ist.

## Wert

Ein boolescher Wert.

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Versprechen zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Das Drucken des Wertes von `sysexEnabled` in die Konsole gibt einen booleschen Wert zurück, der `true` ist, wenn die System-Exklusiv-Unterstützung aktiviert ist.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.sysexEnabled);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
