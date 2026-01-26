---
title: "RemotePlayback: prompt()-Methode"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Remote Playback API")}}

Die **`prompt()`**-Methode des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces fordert den Benutzer auf, ein verfügbares Fernwiedergabegerät auszuwählen und die Erlaubnis zu erteilen, das aktuelle Medium mit diesem Gerät abzuspielen.

Wenn der Benutzer die Erlaubnis erteilt, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `connecting` gesetzt und der User-Agent verbindet sich mit dem Gerät, um die Wiedergabe zu starten.

Wenn der Benutzer stattdessen wählt, die Verbindung zu dem Gerät zu trennen, wird der [`state`](/de/docs/Web/API/RemotePlayback/state) auf `disconnected` gesetzt und der User-Agent trennt die Verbindung zu diesem Gerät.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird, nachdem der Benutzer das Prompt akzeptiert oder abgelehnt hat.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen abgelehnt:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement `true` ist.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es bereits ein nicht abgeschlossenes Promise von einem vorherigen Aufruf von `prompt()` für dieses Medienelement oder diesen Browsing-Kontext gibt.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer kürzlich nicht mit diesem Gerät interagiert hat.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent weiß, dass die Fernwiedergabe dieses speziellen Mediums nicht machbar ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Fernwiedergabe nicht verfügbar ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer die Erlaubnis zur Nutzung des Geräts verweigert.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Im folgenden Beispiel wird der Benutzer aufgefordert, ein Fernwiedergabegerät auszuwählen, um ein Video abzuspielen.

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
