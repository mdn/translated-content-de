---
title: "RemotePlayback: prompt() Methode"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
l10n:
  sourceCommit: 0e3bfabd69f97f65cedc667e1f22be56c9c2eecb
---

{{APIRef("Remote Playback API")}}

Die **`prompt()`**-Methode der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle fordert den Benutzer auf, ein verfügbares Remote-Wiedergabegerät auszuwählen und die Erlaubnis zu erteilen, dass das aktuelle Medium über dieses Gerät abgespielt wird.

Wenn der Benutzer die Erlaubnis erteilt, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `connecting` gesetzt und der User-Agent wird sich mit dem Gerät verbinden, um die Wiedergabe zu starten.

Wenn der Benutzer stattdessen wählt, die Verbindung zum Gerät zu trennen, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `disconnected` gesetzt und der User-Agent trennt die Verbindung zu diesem Gerät.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, nachdem der Benutzer die Eingabeaufforderung angenommen oder abgelehnt hat.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement `true` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits ein offenes Promise von einem vorherigen Aufruf von `prompt()` für dieses Medienelement oder den Browsing-Kontext existiert.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer kürzlich nicht mit diesem Gerät interagiert hat.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dem User-Agent bekannt ist, dass eine Fernwiedergabe dieses speziellen Mediums nicht durchführbar ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Fernwiedergabe nicht verfügbar ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Erlaubnis zur Nutzung des Geräts verweigert.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Im folgenden Beispiel wird der Benutzer aufgefordert, ein Remote-Wiedergabegerät auszuwählen, um ein Video abzuspielen.

```js
devicesBtn.onclick = () => {
  // Request the user to select a remote playback device.
  videoElem.remote
    .prompt()
    // Update the UI and monitor the connected state.
    .then(updateRemotePlaybackState);
  // Otherwise, the user cancelled the selection UI or no screens were found.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
