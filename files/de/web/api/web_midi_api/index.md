---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

Die Web MIDI API verbindet sich mit und interagiert mit Musical Instrument Digital Interface (MIDI)-Geräten.

Die Schnittstellen befassen sich mit den praktischen Aspekten des Sendens und Empfangens von MIDI-Nachrichten.
Daher kann die API sowohl für musikalische als auch nicht-musikalische Zwecke verwendet werden, mit jedem MIDI-Gerät, das mit Ihrem Computer verbunden ist.

## Schnittstellen

- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
  - : Repräsentiert alle verfügbaren MIDI-Eingangsanschlüsse.
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)
  - : Repräsentiert alle verfügbaren MIDI-Ausgangsanschlüsse.
- [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)
  - : Bietet die Methoden zum Auflisten von Eingabe- und Ausgabegeräten und zum Zugreifen auf ein einzelnes Gerät.
- [`MIDIPort`](/de/docs/Web/API/MIDIPort)
  - : Repräsentiert einen einzelnen MIDI-Port.
- [`MIDIInput`](/de/docs/Web/API/MIDIInput)
  - : Bietet eine Methode zum Umgang mit MIDI-Nachrichten von einem Eingangsport.
- [`MIDIOutput`](/de/docs/Web/API/MIDIOutput)
  - : Warteschlangen-Nachrichten an den verbundenen MIDI-Port. Nachrichten können sofort oder nach einer festgelegten Verzögerung gesendet werden.
- [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)
  - : Das Ereignis, das an das `MIDIInput` [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event)-Ereignis übergeben wird.
- [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)
  - : Das Ereignis, das an die `MIDIAccess` [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event) und `MIDIPort` [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event)-Ereignisse übergeben wird, wenn ein Port verfügbar oder nicht verfügbar wird.

## Sicherheitsanforderungen

Der Zugriff auf die API wird mithilfe der [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess)-Methode angefordert.

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) begrenzt sein.
- Der Benutzer muss ausdrücklich die Erlaubnis erteilen, die API zu verwenden, über einen benutzerspezifischen Mechanismus oder hat zuvor die Erlaubnis erteilt.
  Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungsrichtlinie verweigert wird, er nicht durch eine Benutzerberechtigung gewährt werden kann.

Der Berechtigungsstatus kann mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `midi` Berechtigung und der (optionalen) `sysex` Eigenschaft übergeben wird:

```js
navigator.permissions.query({ name: "midi", sysex: true }).then((result) => {
  if (result.state === "granted") {
    // Access granted.
  } else if (result.state === "prompt") {
    // Using API will prompt for permission
  }
  // Permission was denied by user prompt or permission policy
});
```

## Beispiele

### Zugriff auf den MIDI-Port erhalten

Die [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) Methode gibt ein Versprechen zurück, das auf ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt aufgelöst wird, das dann verwendet werden kann, um auf ein MIDI-Gerät zuzugreifen.
Die Methode muss in einem sicheren Kontext aufgerufen werden.

```js
let midi = null; // global MIDIAccess object
function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
```

### Auflisten von Eingaben und Ausgaben

In diesem Beispiel werden die Listen der Eingabe- und Ausgangsports abgerufen und in die Konsole gedruckt.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
    );
  }
}
```

### Verarbeitung von MIDI-Eingaben

Dieses Beispiel druckt alle MIDI-Eingangsnachrichten in die Konsole.

```js
function onMIDIMessage(event) {
  let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
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
