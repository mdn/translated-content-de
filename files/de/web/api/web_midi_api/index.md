---
title: Web-MIDI-API
slug: Web/API/Web_MIDI_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

Die Web-MIDI-API verbindet und interagiert mit Musical Instrument Digital Interface (MIDI)-Geräten.

Die Schnittstellen befassen sich mit den praktischen Aspekten des Sendens und Empfangens von MIDI-Nachrichten. Daher kann die API sowohl für musikalische als auch nicht-musikalische Zwecke genutzt werden, mit jedem MIDI-Gerät, das an Ihren Computer angeschlossen ist.

## Schnittstellen

- {{domxref("MIDIInputMap")}}
  - : Stellt alle verfügbaren MIDI-Eingangsports dar.
- {{domxref("MIDIOutputMap")}}
  - : Stellt alle verfügbaren MIDI-Ausgangsports dar.
- {{domxref("MIDIAccess")}}
  - : Bietet die Methoden, um Eingabe- und Ausgabegeräte aufzulisten und auf ein einzelnes Gerät zuzugreifen.
- {{domxref("MIDIPort")}}
  - : Stellt einen einzelnen MIDI-Port dar.
- {{domxref("MIDIInput")}}
  - : Bietet eine Methode zur Bearbeitung von MIDI-Nachrichten von einem Eingangsport.
- {{domxref("MIDIOutput")}}
  - : Stellt Nachrichten in die Warteschlange für den verbundenen MIDI-Port. Nachrichten können sofort oder nach einer angegebenen Verzögerung gesendet werden.
- {{domxref("MIDIMessageEvent")}}
  - : Das Ereignis, das an das `MIDIInput` {{domxref("MIDIInput.midimessage_event", "midimessage")}}-Ereignis übergeben wird.
- {{domxref("MIDIConnectionEvent")}}
  - : Das Ereignis, das an die `MIDIAccess` {{domxref("MIDIAccess.statechange_event", "statechange")}}- und `MIDIPort` {{domxref("MIDIPort.statechange_event", "statechange")}}-Ereignisse übergeben wird, wenn ein Port verfügbar oder nicht verfügbar wird.

## Sicherheitsanforderungen

Auf die API wird mit der Methode {{domxref("navigator.requestMIDIAccess()")}} zugegriffen.

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) eingeschränkt werden.
- Der Benutzer muss die Erlaubnis zur Nutzung der API ausdrücklich über einen benutzerspezifischen Mechanismus erteilen oder zuvor erteilt haben. Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungsrichtlinie verweigert wird, er nicht durch eine Benutzererlaubnis gewährt werden kann.

Der Berechtigungsstatus kann mit der [Berechtigungs-API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `midi`-Berechtigung und optional der `sysex`-Eigenschaft übergeben wird:

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Zugriff gewährt.
  } else if (result.state === "prompt") {
    // Die Verwendung der API wird eine Berechtigungsabfrage auslösen.
  }
  // Berechtigung wurde durch Benutzerabfrage oder Berechtigungsrichtlinie verweigert
});
```

## Beispiele

### Zugang zum MIDI-Port erlangen

Die {{domxref("navigator.requestMIDIAccess()")}}-Methode gibt ein Promise zurück, das in ein {{domxref("MIDIAccess")}}-Objekt aufgelöst wird, das dann verwendet werden kann, um auf ein MIDI-Gerät zuzugreifen. Die Methode muss in einem sicheren Kontext aufgerufen werden.

```js
let midi = null; // globales MIDIAccess-Objekt
function onMIDISuccess(midiAccess) {
  console.log("MIDI bereit!");
  midi = midiAccess; // in der globalen Variable speichern (in tatsächlicher Nutzung würde es wahrscheinlich in einer Objektinstanz gehalten)
}

function onMIDIFailure(msg) {
  console.error(`Fehler beim Erhalt des MIDI-Zugriffs - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
```

### Auflisten von Eingängen und Ausgängen

In diesem Beispiel werden die Listen der Eingangs- und Ausgangsports abgerufen und in die Konsole ausgegeben.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Eingangsport [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` hersteller:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Ausgangsport [type:'${output.type}'] id:'${output.id}' hersteller:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}
```

### Handhabung von MIDI-Eingaben

Dieses Beispiel gibt alle MIDI-Eingabenachrichten in die Konsole aus.

```js
function onMIDIMessage(event) {
  let str = `MIDI-Nachricht empfangen bei Zeitstempel ${event.timeStamp}[${event.data.length} bytes]: `;
  for (const character of event.data) {
    str += `0x${character.toString(16)} `;
  }
  console.log(str);
}

function startLoggingMIDIInput(midiAccess) {
  midiAccess.inputs.forEach((entry) => {
    entry.onmidimessage = onMIDIMessage;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Web MIDI](https://code.tutsplus.com/introduction-to-web-midi--cms-25220t)
- [Musik im Browser machen](https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/)
