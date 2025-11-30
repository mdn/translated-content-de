---
title: Web MIDI API
slug: Web/API/Web_MIDI_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Web MIDI API")}}{{SecureContext_Header}}

Die Web MIDI API verbindet mit und interagiert mit Musical Instrument Digital Interface (MIDI) Geräten.

Die Schnittstellen befassen sich mit den praktischen Aspekten des Sendens und Empfangens von MIDI-Nachrichten.
Daher kann die API sowohl für musikalische als auch nicht-musikalische Anwendungen mit jedem MIDI-Gerät, das mit Ihrem Computer verbunden ist, verwendet werden.

## Schnittstellen

- [`MIDIInputMap`](/de/docs/Web/API/MIDIInputMap)
  - : Repräsentiert alle verfügbaren MIDI-Eingangsanschlüsse.
- [`MIDIOutputMap`](/de/docs/Web/API/MIDIOutputMap)
  - : Repräsentiert alle verfügbaren MIDI-Ausgangsanschlüsse.
- [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)
  - : Bietet die Methoden, um Eingabe- und Ausgabegeräte aufzulisten und um auf ein einzelnes Gerät zuzugreifen.
- [`MIDIPort`](/de/docs/Web/API/MIDIPort)
  - : Repräsentiert einen einzelnen MIDI-Anschluss.
- [`MIDIInput`](/de/docs/Web/API/MIDIInput)
  - : Bietet eine Methode zum Umgang mit MIDI-Nachrichten von einem Eingangsanschluss.
- [`MIDIOutput`](/de/docs/Web/API/MIDIOutput)
  - : Wartet Nachrichten zur verbundenen MIDI-Schnittstelle. Nachrichten können sofort oder nach einer angegebenen Verzögerung gesendet werden.
- [`MIDIMessageEvent`](/de/docs/Web/API/MIDIMessageEvent)
  - : Das Ereignis, das an das `MIDIInput` [`midimessage`](/de/docs/Web/API/MIDIInput/midimessage_event) Ereignis übergeben wird.
- [`MIDIConnectionEvent`](/de/docs/Web/API/MIDIConnectionEvent)
  - : Das Ereignis, das an die `MIDIAccess` [`statechange`](/de/docs/Web/API/MIDIAccess/statechange_event) und `MIDIPort` [`statechange`](/de/docs/Web/API/MIDIPort/statechange_event) Ereignisse übergeben wird, wenn ein Anschluss verfügbar oder nicht verfügbar wird.

## Sicherheitsanforderungen

Der Zugriff auf die API wird durch Aufrufen der Methode [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) angefordert.

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) eingeschränkt sein.
- Der Benutzer muss explizit die Erlaubnis zur Nutzung der API über einen benutzerspezifischen Mechanismus erteilen oder zuvor die Erlaubnis erteilt haben.
  Beachten Sie, dass, wenn der Zugriff durch eine Permission Policy verweigert wird, dieser nicht durch eine Benutzergenehmigung erteilt werden kann.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `midi`-Berechtigung und der (optional) `sysex`-Eigenschaft übergeben wird:

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

### Zugriff auf den MIDI-Anschluss erlangen

Die Methode [`navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) gibt ein Versprechen zurück, das zu einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt aufgelöst wird, das dann verwendet werden kann, um auf ein MIDI-Gerät zuzugreifen.
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

### Eingaben und Ausgaben auflisten

In diesem Beispiel werden die Listen der Eingabe- und Ausgangsanschlüsse abgerufen und in die Konsole gedruckt.

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

### MIDI-Eingaben handhaben

Dieses Beispiel druckt alle MIDI-Eingabenachrichten in die Konsole.

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
