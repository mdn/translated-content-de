---
title: MIDIPort
slug: Web/API/MIDIPort
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIPort`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert einen MIDI-Eingangs- oder -Ausgangsport.

Eine `MIDIPort`-Instanz wird erstellt, wenn ein neues MIDI-Gerät angeschlossen wird. Daher hat sie keinen Konstruktor.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`MIDIPort.id`](/de/docs/Web/API/MIDIPort/id) {{ReadOnlyInline}}
  - : Gibt einen String mit der eindeutigen ID des Ports zurück.
- [`MIDIPort.manufacturer`](/de/docs/Web/API/MIDIPort/manufacturer) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Hersteller des Ports zurück.
- [`MIDIPort.name`](/de/docs/Web/API/MIDIPort/name) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Systemnamen des Ports zurück.
- [`MIDIPort.type`](/de/docs/Web/API/MIDIPort/type) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Typ des Ports zurück. Mögliche Werte sind:
    - `"input"`
      - : Der `MIDIPort` ist ein Eingangsport.
    - `"output"`
      - : Der `MIDIPort` ist ein Ausgangsport.

- [`MIDIPort.version`](/de/docs/Web/API/MIDIPort/version) {{ReadOnlyInline}}
  - : Gibt einen String mit der Version des Ports zurück.
- [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Status des Ports zurück. Mögliche Werte sind:
    - `"disconnected"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist vom System getrennt.
    - `"connected"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist derzeit verbunden.

- [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Verbindungsstatus des Ports zurück. Mögliche Werte sind:
    - `"open"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde geöffnet und ist verfügbar.
    - `"closed"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde nicht geöffnet oder wurde geschlossen.
    - `"pending"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde geöffnet, aber anschließend getrennt.

## Instanzmethoden

_Diese Schnittstelle erbt außerdem Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MIDIPort.open()`](/de/docs/Web/API/MIDIPort/open)
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät ausdrücklich verfügbar und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Zugriff auf den Port erfolgreich war.
- [`MIDIPort.close()`](/de/docs/Web/API/MIDIPort/close)
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät nicht verfügbar und ändert den [`state`](/de/docs/Web/API/MIDIPort/state) von `"open"` zu `"closed"`. Die Methode gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald der Port geschlossen wurde.

## Ereignisse

- [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)
  - : Wird ausgelöst, wenn sich der Status oder die Verbindung eines vorhandenen Ports ändert.

## Beispiele

### Ports und ihre Informationen auflisten

Das folgende Beispiel listet Eingangs- und Ausgangsports auf und zeigt mithilfe von Eigenschaften von `MIDIPort` Informationen über sie an.

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

### Verfügbare Ports zu einer Auswahlliste hinzufügen

Das folgende Beispiel übernimmt die Liste der Eingangsports und fügt sie einer Auswahlliste hinzu, damit Benutzer das Gerät auswählen können, das sie verwenden möchten.

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
