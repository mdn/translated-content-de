---
title: MIDIPort
slug: Web/API/MIDIPort
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

Die **`MIDIPort`**-Schnittstelle der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) repräsentiert einen MIDI-Ein- oder -Ausgangsport.

Eine Instanz von `MIDIPort` wird erstellt, wenn ein neues MIDI-Gerät verbunden wird. Daher besitzt sie keinen Konstruktor.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`MIDIPort.id`](/de/docs/Web/API/MIDIPort/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die eindeutige ID des Ports enthält.
- [`MIDIPort.manufacturer`](/de/docs/Web/API/MIDIPort/manufacturer) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Hersteller des Ports enthält.
- [`MIDIPort.name`](/de/docs/Web/API/MIDIPort/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Systemnamen des Ports enthält.
- [`MIDIPort.type`](/de/docs/Web/API/MIDIPort/type) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den Typ des Ports enthält, einer von:

    - `"input"`
      - : Der `MIDIPort` ist ein Eingangsport.
    - `"output"`
      - : Der `MIDIPort` ist ein Ausgangsport.

- [`MIDIPort.version`](/de/docs/Web/API/MIDIPort/version) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Version des Ports enthält.
- [`MIDIPort.state`](/de/docs/Web/API/MIDIPort/state) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den Zustand des Ports enthält, einer von:

    - `"disconnected"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist vom System getrennt.
    - `"connected"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, ist derzeit verbunden.

- [`MIDIPort.connection`](/de/docs/Web/API/MIDIPort/connection) {{ReadOnlyInline}}

  - : Gibt einen String zurück, der den Verbindungszustand des Ports enthält, einer von:

    - `"open"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde geöffnet und ist verfügbar.
    - `"closed"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde nicht geöffnet oder wurde geschlossen.
    - `"pending"`
      - : Das Gerät, das dieser `MIDIPort` repräsentiert, wurde geöffnet, hat sich aber danach getrennt.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`MIDIPort.open()`](/de/docs/Web/API/MIDIPort/open)
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät ausdrücklich verfügbar und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Zugriff auf den Port erfolgreich war.
- [`MIDIPort.close()`](/de/docs/Web/API/MIDIPort/close)
  - : Macht das mit diesem `MIDIPort` verbundene MIDI-Gerät nicht verfügbar und ändert den [`state`](/de/docs/Web/API/MIDIPort/state) von `"open"` auf `"closed"`. Dies gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Port geschlossen wurde.

## Ereignisse

- [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)
  - : Wird aufgerufen, wenn ein bestehender Port seinen Zustand oder seine Verbindung ändert.

## Beispiele

### Ports und deren Informationen auflisten

Das folgende Beispiel listet Eingangs- und Ausgangsports und zeigt Informationen über sie mithilfe der Eigenschaften von `MIDIPort`.

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

Das folgende Beispiel nimmt die Liste der Eingangsports und fügt sie einer Auswahlliste hinzu, damit ein Benutzer das Gerät auswählen kann, das er verwenden möchte.

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
