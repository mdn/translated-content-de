---
title: "Navigator: requestMIDIAccess() Methode"
short-title: requestMIDIAccess()
slug: Web/API/Navigator/requestMIDIAccess
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("Web MIDI API")}}{{SecureContext_Header}}

Die **`requestMIDIAccess()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces gibt ein {{jsxref('Promise')}} zurück, das eine Anfrage für den Zugriff auf MIDI-Geräte des Systems eines Nutzers darstellt. Diese Methode ist Teil der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API), die eine Möglichkeit bietet, MIDI-Geräte zuzugreifen, aufzulisten und zu manipulieren.

Diese Methode kann den Nutzer um Zugriff auf die MIDI-Geräte seines Systems bitten, oder eine zuvor festgelegte Präferenz nutzen, um Zugang zu gewähren oder zu verweigern. Wenn die Erlaubnis erteilt wird, löst sich das {{jsxref('Promise')}} auf und ein [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt wird zurückgegeben.

## Syntax

```js-nolint
requestMIDIAccess()
requestMIDIAccess(MIDIOptions)
```

### Parameter

- `MIDIOptions` {{optional_inline}}
  - : Ein {{jsxref('Object')}} repräsentierend Optionen, die in die Methode übergeben werden. Diese Optionen sind:
    - `sysex`
      - : Ein {{jsxref('Boolean')}} Wert, der, wenn auf `true` gesetzt, die Fähigkeit erlaubt, System-Exklusiv-Nachrichten (`sysex`) zu senden und zu empfangen. Der Standardwert ist `false`.
    - `software`
      - : Ein {{jsxref('Boolean')}} Wert, der, wenn auf `true` gesetzt, dem System erlaubt, irgendwelche installierten Software-Synthesizer zu nutzen. Der Standardwert ist `false`.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich mit einem [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt auflöst.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument oder die Seite aufgrund von Benutzernavigation geschlossen wird.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugrunde liegende System irgendwelche Fehler hervorruft.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion oder Optionen vom System nicht unterstützt werden.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Nutzer oder das System der Anwendung das Erstellen eines [MIDIAccess](/de/docs/Web/API/MIDIAccess) Objekts mit den angeforderten Optionen verweigert oder wenn das Dokument die Funktion nicht verwenden darf (zum Beispiel, wegen einer [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy), oder weil der Nutzer zuvor eine Erlaubnisanfrage abgelehnt hat).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`midi`](/de/docs/Web/HTTP/Headers/Permissions-Policy/midi) HTTP [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) eingeschränkt sein.
- Der Nutzer muss die Erlaubnis ausdrücklich über einen benutzerspezifischen Mechanismus erteilen oder zuvor die Erlaubnis erteilt haben. Beachten Sie, dass, wenn der Zugriff durch eine Berechtigungspolitik verweigert wird, er nicht durch eine Nutzergenehmigung erteilt werden kann.

Der Berechtigungsstatus kann mittels der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsdeskriptor mit der `midi` Erlaubnis und (optional) der `sysex` Eigenschaft übergeben wird:

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

Im folgenden Beispiel gibt die `Navigator.requestMIDIAccess()` Methode das [`MIDIAccess`](/de/docs/Web/API/MIDIAccess) Objekt zurück, das Zugriff auf Informationen über die Eingabe- und Ausgangs-MIDI-Ports bietet.

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
