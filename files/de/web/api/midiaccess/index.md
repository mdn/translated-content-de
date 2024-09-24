---
title: MIDIAccess
slug: Web/API/MIDIAccess
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIAccess`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) bietet Methoden zum Auflisten von MIDI-Eingabe- und -Ausgabegeräten sowie zum Zugriff auf diese Geräte.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("MIDIAccess.inputs")}} {{ReadOnlyInline}}
  - : Gibt eine Instanz von {{domxref("MIDIInputMap")}} zurück, die Zugriff auf alle verfügbaren MIDI-Eingangsports bietet.
- {{domxref("MIDIAccess.outputs")}} {{ReadOnlyInline}}
  - : Gibt eine Instanz von {{domxref("MIDIOutputMap")}} zurück, die Zugriff auf alle verfügbaren MIDI-Ausgangsports bietet.
- {{domxref("MIDIAccess.sysexEnabled")}} {{ReadOnlyInline}}
  - : Ein boolesches Attribut, das angibt, ob die Unterstützung für System-Exklusiv-Daten auf der aktuellen MIDIAccess-Instanz aktiviert ist.

### Ereignisse

- {{domxref("MIDIAccess.statechange_event", "statechange")}}
  - : Wird aufgerufen, wenn ein neuer MIDI-Port hinzugefügt wird oder ein vorhandener Port seinen Status ändert.

## Beispiele

Die Methode {{domxref("Navigator.requestMIDIAccess()")}} gibt ein Promise zurück, das mit einem `MIDIAccess`-Objekt aufgelöst wird. Informationen über die Eingabe- und Ausgabeverbindungen werden zurückgegeben.

Wenn sich der Status eines Ports ändert, werden Informationen zu diesem Port in der Konsole ausgegeben.

```js
navigator.requestMIDIAccess().then((access) => {
  // Listen der verfügbaren MIDI-Controller abrufen
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();

  access.onstatechange = (event) => {
    // Informationen über den (dis) verbundenen MIDI-Controller ausgeben
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
