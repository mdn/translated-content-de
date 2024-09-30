---
title: "MIDIConnectionEvent: port-Eigenschaft"
short-title: port
slug: Web/API/MIDIConnectionEvent/port
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`port`**-Eigenschaft des [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)-Interfaces gibt den Port zurück, der getrennt oder verbunden wurde.

## Wert

Ein [`MIDIPort`](/de/docs/Web/API/MIDIPort)-Objekt.

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Versprechen zurück, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird. Wenn sich der Zustand eines Ports ändert, wird ein `MIDIConnectionEvent` an das [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)-Ereignis übergeben. Informationen über den Port können dann in der Konsole ausgegeben werden.

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
