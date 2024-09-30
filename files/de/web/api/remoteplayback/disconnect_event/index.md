---
title: "RemotePlayback: disconnect Ereignis"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
l10n:
  sourceCommit: 65d75da6fe94a513f581f4a4f532637c59ea64ac
---

{{APIRef("Remote Playback API")}}

Das **`disconnect`**-Ereignis der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle wird ausgelöst, wenn der Benutzeragent die Verbindung zum Remote-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in die Konsole gedruckt, wenn der Benutzeragent die Verbindung zum Remote-Gerät trennt.

```js
RemotePlayback.ondisconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
