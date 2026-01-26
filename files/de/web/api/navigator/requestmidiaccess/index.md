---
title: "Navigator: requestMIDIAccess() Methode"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

Die **`requestMIDIAccess()`**-Methode des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte im System eines Benutzers darstellt.
Diese Methode ist Teil der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API), die eine Möglichkeit bietet, auf MIDI-Geräte zuzugreifen, sie aufzulisten und zu manipulieren.

Diese Methode kann den Benutzer um Zugriff auf die im System verfügbaren MIDI-Geräte bitten oder eine zuvor festgelegte Präferenz verwenden, um den Zugriff zu gewähren oder zu verweigern.
Wenn die Berechtigung erteilt wird, löst das {{jsxref('Promise')}} auf und ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt wird zurückgegeben.

## Syntax

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameter

- `MIDIOptions` {{optional_inline}}
  - : Ein {{jsxref('Object')}}, das Optionen darstellt, die in die Methode übergeben werden. Diese Optionen sind:
    - `sysex`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn er auf `true` gesetzt ist, die Möglichkeit bietet, System-Exklusivnachrichten (sysex) zu senden und zu empfangen. Der Standardwert ist `false`.
    - `software`
      - : Ein {{jsxref('Boolean')}}-Wert, der, wenn er auf `true` gesetzt ist, dem System die Nutzung installierter Software-Synthesizer ermöglicht. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt auflöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument oder die Seite aufgrund einer Benutzernavigation geschlossen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugrunde liegende System Fehler meldet.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Feature oder die Optionen vom System nicht unterstützt werden.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer oder das System der Anwendung das Erstellen eines [MIDIAccess](/de/docs/Web/API/MIDIAccess)-Objekts mit den angeforderten Optionen verweigert, oder wenn das Dokument nicht berechtigt ist, das Feature zu verwenden (beispielsweise wegen einer [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), oder weil der Benutzer zuvor eine Berechtigungsanfrage abgelehnt hat).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/midi) HTTP-[Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.
- Der Benutzer muss ausdrücklich die Erlaubnis zur Nutzung der API durch einen benutzerspezifischen Mechanismus gewähren oder zuvor die Erlaubnis erteilt haben.
  Beachten Sie, dass, wenn der Zugriff durch eine Permission Policy verweigert wird, er nicht durch eine Benutzererlaubnis gewährt werden kann.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsbeschreiber mit der `midi`-Berechtigung und optionaler `sysex`-Eigenschaft übergeben wird:

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

### MIDI-Zugriff anfordern

Im folgenden Beispiel gibt die `Navigator.requestMIDIAccess()`-Methode das [`MIDIAccess`](/de/docs/Web/API/MIDIAccess)-Objekt zurück, das Zugriff auf Informationen über die Eingangs- und Ausgangs-MIDI-Ports gewährt.

```js
navigator.requestMIDIAccess().then((access) => {
  // Get lists of available MIDI controllers
  const inputs = access.inputs.values();
  const outputs = access.outputs.values();
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web MIDI API](/de/docs/Web/API/Web_MIDI_API)
- [Einführung in Web MIDI](https://code.tutsplus.com/introduction-to-web-midi--cms-25220t)
