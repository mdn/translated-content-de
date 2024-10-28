---
title: MIDIPort
slug: Web/API/MIDIPort
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Das **`MIDIPort`** Interface der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert einen MIDI-Eingangs- oder Ausgangsport.

Eine `MIDIPort`-Instanz wird erstellt, wenn ein neues MIDI-Gerät angeschlossen wird. Daher gibt es keinen Konstruktor.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`MIDIPort.id`](/de/docs/Web/API/MIDIPort/id) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die eindeutige ID des Ports enthält.
- [`MIDIPort.manufacturer`](/de/docs/Web/API/MIDIPort/manufacturer) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Hersteller des Ports enthält.
- [`MIDIPort.name`](/de/docs/Web/API/MIDIPort/name) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Systemnamen des Ports enthält.
- [`MIDIPort.type`](/de/docs/Web/API/MIDIPort/type) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Typ des Ports enthält, eine von:

    - `"input"`
      - : Das `MIDIPort` ist ein Eingangsport.
    - `"output"`
      - : Das `MIDIPort` ist ein Ausgangsport.

- [`MIDIPort.version`](/de/docs/Web/API/MIDIPort/version) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die die Version des Ports enthält.
- [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Status des Ports enthält, einer von:

    - `"disconnected"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, ist vom System getrennt.
    - `"connected"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, ist derzeit verbunden.

- [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection) {{ReadOnlyInline}}

  - : Gibt eine Zeichenkette zurück, die den Verbindungsstatus des Ports enthält, einer von:

    - `"open"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde geöffnet und ist verfügbar.
    - `"closed"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde nicht geöffnet oder wurde geschlossen.
    - `"pending"`
      - : Das Gerät, das dieses `MIDIPort` repräsentiert, wurde geöffnet, aber anschließend getrennt.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MIDIPort.open()`](/de/docs/Web/API/MIDIPort/open)
  - : Macht das MIDI-Gerät, das mit diesem `MIDIPort` verbunden ist, explizit verfügbar und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Zugriff auf den Port erfolgreich war.
- [`MIDIPort.close()`](/de/docs/Web/API/MIDIPort/close)
  - : Macht das MIDI-Gerät, das mit diesem `MIDIPort` verbunden ist, nicht verfügbar und ändert den [`state`](/de/docs/Web/API/MIDIPort/state) von `"open"` zu `"closed"`. Dies gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Port geschlossen wurde.

## Ereignisse

- [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)
  - : Wird aufgerufen, wenn ein bestehender Port seinen Status oder seine Verbindung ändert.

## Beispiele

### Ports und ihre Informationen auflisten

Das folgende Beispiel listet Eingangs- und Ausgangsports auf und zeigt Informationen über sie mit Hilfe von `MIDIPort`-Eigenschaften an.

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

### Verfügbare Ports zu einer Auswahl-Liste hinzufügen

Das folgende Beispiel nimmt die Liste der Eingangsports und fügt sie einer Auswahlliste hinzu, damit der Benutzer das gewünschte Gerät auswählen kann.

```js
inputs.forEach((port, key) => {
  const opt = document.createElement("option");
  opt.text = port.name;
  document.getElementById("port-selector").add(opt);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
