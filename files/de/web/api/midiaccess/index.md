---
title: MIDIAccess
slug: Web/API/MIDIAccess
l10n:
  sourceCommit: 47c461a1ebc95289543ea2962c6dbc8d57ee76d9
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`MIDIAccess`**-Interface der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) bietet Methoden zum Auflisten von MIDI-Ein- und -Ausgabegeräten sowie zum Erlangen des Zugangs zu diesen Geräten.

`MIDIAccess` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`MIDIAccess.inputs`](/de/docs/Web/API/MIDIAccess/inputs) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap) zurück, die Zugang zu allen verfügbaren MIDI-Eingangsports bietet.
- [`MIDIAccess.outputs`](/de/docs/Web/API/MIDIAccess/outputs) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap) zurück, die Zugang zu allen verfügbaren MIDI-Ausgangsports bietet.
- [`MIDIAccess.sysexEnabled`](/de/docs/Web/API/MIDIAccess/sysexEnabled) {{ReadOnlyInline}}
  - : Ein boolesches Attribut, welches anzeigt, ob die System-Exclusive-Unterstützung bei der aktuellen `MIDIAccess`-Instanz aktiviert ist.

### Events

- [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)
  - : Wird aufgerufen, wenn ein neuer MIDI-Port hinzugefügt wird oder ein bestehender Port seinen Zustand ändert.

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Promise zurück, das mit einem `MIDIAccess`-Objekt aufgelöst wird. Informationen zu den Eingangs- und Ausgangsports werden zurückgegeben.

Wenn sich der Zustand eines Ports ändert, werden Informationen zu diesem Port in die Konsole ausgegeben.

```js
navigator.requestMIDIAccess().then((access) => {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();

  access.onstatechange = (event) => {
    // Print information about the (dis)connected MIDI controller
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
