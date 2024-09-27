---
title: "RemotePlayback: prompt() Methode"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
l10n:
  sourceCommit: 0e3bfabd69f97f65cedc667e1f22be56c9c2eecb
---

{{APIRef("Remote Playback API")}}

Die **`prompt()`**-Methode der Schnittstelle [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) fordert den Benutzer auf, ein verfügbares Remote-Wiedergabegerät auszuwählen und die Erlaubnis zu erteilen, dass das aktuelle Medium über dieses Gerät abgespielt wird.

Wenn der Benutzer die Erlaubnis erteilt, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `connecting` gesetzt und der User-Agent wird sich mit dem Gerät verbinden, um die Wiedergabe zu starten.

Wenn der Benutzer stattdessen beschließt, die Verbindung mit dem Gerät zu trennen, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `disconnected` gesetzt und der User-Agent wird die Verbindung zu diesem Gerät trennen.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, nachdem der Benutzer die Aufforderung akzeptiert oder abgelehnt hat.

### Ausnahmen

Das Versprechen wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement `true` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn bereits ein ungelöstes Versprechen von einem vorherigen Aufruf von `prompt()` für dieses Medienelement oder den Browsing-Kontext besteht.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer kürzlich nicht mit diesem Gerät interagiert hat.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent weiß, dass die Fernwiedergabe dieses bestimmten Mediums nicht möglich ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Fernwiedergabe nicht verfügbar ist.
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
