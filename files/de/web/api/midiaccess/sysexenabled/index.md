---
title: "MIDIAccess: sysexEnabled-Eigenschaft"
short-title: sysexEnabled
slug: Web/API/MIDIAccess/sysexEnabled
l10n:
  sourceCommit: a6a3ef3a15ca614e4edbfc950ce49a275f2ec4ad
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die schreibgeschützte **`sysexEnabled`**-Eigenschaft des {{domxref("MIDIAccess")}}-Interfaces gibt an, ob die Unterstützung für System-Exklusiv-Nachrichten auf der aktuellen MIDIAccess-Instanz aktiviert ist.

## Wert

Ein boolescher Wert.

## Beispiele

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Versprechen zurück, das mit einem {{domxref("MIDIAccess")}}-Objekt aufgelöst wird. Das Ausdrucken des Wertes von `sysexEnabled` in die Konsole gibt einen booleschen Wert zurück, der `true` ist, wenn die Unterstützung für System-Exklusiv-Nachrichten aktiviert ist.

```js
navigator.requestMIDIAccess().then((access) => {
  console.log(access.sysexEnabled);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
