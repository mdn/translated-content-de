---
title: MIDIPort
slug: Web/API/MIDIPort
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`MIDIPort`**-Interface der {{domxref('Web MIDI API','','',' ')}} repräsentiert einen MIDI-Eingangs- oder Ausgangsanschluss.

Eine `MIDIPort`-Instanz wird erstellt, wenn ein neues MIDI-Gerät angeschlossen wird. Daher hat es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("MIDIPort.id")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die eindeutige ID des Anschlusses enthält.
- {{domxref("MIDIPort.manufacturer")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Hersteller des Anschlusses enthält.
- {{domxref("MIDIPort.name")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Systemnamen des Anschlusses enthält.
- {{domxref("MIDIPort.type")}} {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Typ des Anschlusses enthält, einer von:

    - `"input"`
      - : Das `MIDIPort` ist ein Eingangsanschluss.
    - `"output"`
      - : Das `MIDIPort` ist ein Ausgangsanschluss.

- {{domxref("MIDIPort.version")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Version des Anschlusses enthält.
- {{domxref("MIDIPort.state")}} {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Zustand des Anschlusses enthält, einer von:

    - `"disconnected"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, ist vom System getrennt.
    - `"connected"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, ist derzeit verbunden.

- {{domxref("MIDIPort.connection")}} {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Verbindungszustand des Anschlusses enthält, einer von:

    - `"open"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde geöffnet und ist verfügbar.
    - `"closed"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde nicht geöffnet oder wurde geschlossen.
    - `"pending"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde geöffnet, aber anschließend getrennt.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von {{domxref("EventTarget")}}._

- {{domxref("MIDIPort.open()")}}
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät ausdrücklich verfügbar und gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, sobald der Zugriff auf den Anschluss erfolgreich war.
- {{domxref("MIDIPort.close()")}}
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät nicht mehr verfügbar, indem der {{domxref("MIDIPort.state","Zustand")}} von `"open"` in `"closed"` geändert wird. Dies gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, sobald der Anschluss geschlossen wurde.

## Ereignisse

- {{domxref("MIDIPort.statechange_event", "statechange")}}
  - : Wird aufgerufen, wenn sich ein bestehender Anschluss in seinem Zustand oder seiner Verbindung ändert.

## Beispiele

### Anschlüsse und deren Informationen auflisten

Das folgende Beispiel listet Eingangs- und Ausgangsanschlüsse auf und zeigt Informationen über sie mithilfe von Eigenschaften von `MIDIPort` an.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}'] id:'${input.id}' manufacturer: '${input.manufacturer}' name: '${input.name}' version: '${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id: '${output.id}' manufacturer: '${output.manufacturer}' name: '${output.name}' version: '${output.version}'`,
    );
  }
}
```

### Verfügbare Anschlüsse zu einer Auswahl-Liste hinzufügen

Das folgende Beispiel nimmt die Liste der Eingangsanschlüsse und fügt sie einer Auswahl-Liste hinzu, damit ein Nutzer das gewünschte Gerät auswählen kann.

```js
inputs.forEach((port, key) => {
  const opt = document.createElement("option");
  opt.text = port.name;
  document.getElementById("inputportselector").add(opt);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
