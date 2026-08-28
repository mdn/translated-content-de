---
title: "RemotePlayback: prompt() Methode"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{APIRef("Remote Playback API")}}

Die **`prompt()`** Methode der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle fordert den Nutzer auf, ein verfügbares Remote-Playback-Gerät auszuwählen und die Erlaubnis zu erteilen, dass die aktuelle Medienwiedergabe über dieses Gerät erfolgt.

Wenn der Nutzer die Erlaubnis erteilt, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `connecting` gesetzt und der User Agent wird sich mit dem Gerät verbinden, um die Wiedergabe zu starten.

Wenn der Nutzer stattdessen entscheidet, die Verbindung zum Gerät zu trennen, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `disconnected` gesetzt und der User Agent wird die Verbindung zu diesem Gerät trennen.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, nachdem der Nutzer das Eingabefenster angenommen oder abgelehnt hat.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medien-Element auf `true` gesetzt ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits ein ungelöstes Promise von einem vorherigen Aufruf von `prompt()` für dieses Medien-Element oder diesen Browsing-Kontext existiert.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Nutzer kürzlich nicht mit diesem Gerät interagiert hat.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User Agent weiß, dass die Remote-Wiedergabe dieser speziellen Medien nicht möglich ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Remote-Wiedergabe nicht verfügbar ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Nutzer die Erlaubnis zur Nutzung des Geräts verweigert.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Nutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion genutzt werden kann.

## Beispiele

Im folgenden Beispiel wird der Nutzer aufgefordert, ein Remote-Playback-Gerät auszuwählen, um ein Video abzuspielen.

```js
devicesBtn.onclick = () => {
  // Request the user to select a remote playback device.
  videoElem.remote
    .prompt()
    // Update the UI and monitor the connected state.
    .then(updateRemotePlaybackState);
  // Otherwise, the user canceled the selection UI or no screens were found.
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
