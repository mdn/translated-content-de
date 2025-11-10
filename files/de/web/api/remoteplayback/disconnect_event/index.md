---
title: "RemotePlayback: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Remote Playback API")}}

Das **`disconnect`**-Ereignis der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle wird ausgelöst, wenn der User-Agent die Verbindung zum Remote-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("disconnect", (event) => { })

ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in die Konsole ausgegeben, wenn der User-Agent die Verbindung zum Remote-Gerät trennt.

```js
RemotePlayback.ondisconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
