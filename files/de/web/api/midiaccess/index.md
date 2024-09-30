---
title: MIDIAccess
slug: Web/API/MIDIAccess
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIAccess`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) bietet Methoden zum Auflisten von MIDI-Eingabe- und -Ausgabegeräten sowie zum Zugreifen auf diese Geräte.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`MIDIAccess.inputs`](/de/docs/Web/API/MIDIAccess/inputs) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap) zurück, die Zugriff auf alle verfügbaren MIDI-Eingangsanschlüsse bietet.
- [`MIDIAccess.outputs`](/de/docs/Web/API/MIDIAccess/outputs) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap) zurück, die Zugriff auf alle verfügbaren MIDI-Ausgangsanschlüsse bietet.
- [`MIDIAccess.sysexEnabled`](/de/docs/Web/API/MIDIAccess/sysexEnabled) {{ReadOnlyInline}}
  - : Ein boolesches Attribut, das anzeigt, ob die Unterstützung für System-Exklusiv-Nachrichten auf der aktuellen `MIDIAccess`-Instanz aktiviert ist.

### Ereignisse

- [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event)
  - : Wird aufgerufen, wenn ein neuer MIDI-Port hinzugefügt wird oder ein bestehender Port seinen Status ändert.

## Beispiele

Die Methode [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Versprechen zurück, das mit einem `MIDIAccess`-Objekt erfüllt wird. Informationen über die Ein- und Ausgabegeräte werden zurückgegeben.

Wenn sich der Status eines Ports ändert, werden Informationen über diesen Port in der Konsole ausgegeben.

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
