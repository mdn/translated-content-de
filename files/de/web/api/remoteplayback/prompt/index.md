---
title: "RemotePlayback: prompt()-Methode"
short-title: prompt()
slug: Web/API/RemotePlayback/prompt
l10n:
  sourceCommit: 0e3bfabd69f97f65cedc667e1f22be56c9c2eecb
---

{{APIRef("Remote Playback API")}}

Die **`prompt()`**-Methode der {{domxref("RemotePlayback")}}-Schnittstelle fordert den Benutzer auf, ein verfügbares Remote-Wiedergabegerät auszuwählen und die Erlaubnis zu erteilen, dass das aktuelle Medium über dieses Gerät abgespielt wird.

Wenn der Benutzer die Erlaubnis erteilt, wird der {{domxref("RemotePlayback.state","state")}} auf `connecting` gesetzt, und der Benutzeragent wird eine Verbindung zum Gerät herstellen, um die Wiedergabe zu starten.

Wenn der Benutzer stattdessen beschließt, die Verbindung vom Gerät zu trennen, wird der {{domxref("RemotePlayback.state","state")}} auf `disconnected` gesetzt, und der Benutzeragent wird die Verbindung zu diesem Gerät trennen.

## Syntax

```js-nolint
prompt()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, nachdem der Benutzer die Aufforderung akzeptiert oder abgelehnt hat.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen zurückgewiesen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} für das Medienelement `true` ist.
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn bereits ein ungelöstes Promise von einem vorherigen Aufruf von `prompt()` für dieses Medienelement oder den aktuellen Browsing-Kontext existiert.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer kürzlich nicht mit diesem Gerät interagiert hat.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzeragent weiß, dass die Fernwiedergabe dieses bestimmten Mediums nicht möglich ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Fernwiedergabe nicht verfügbar ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer die Erlaubnis zur Nutzung des Geräts verweigert.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Im folgenden Beispiel wird der Benutzer aufgefordert, ein Remote-Wiedergabegerät auszuwählen, um ein Video abzuspielen.

```js
devicesBtn.onclick = () => {
  // Den Benutzer auffordern, ein Remote-Wiedergabegerät auszuwählen.
  videoElem.remote
    .prompt()
    // Die Benutzeroberfläche aktualisieren und den verbundenen Status überwachen.
    .then(updateRemotePlaybackState);
  // Andernfalls hat der Benutzer die Auswahl-Benutzeroberfläche abgebrochen oder es wurden keine Bildschirme gefunden.
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
