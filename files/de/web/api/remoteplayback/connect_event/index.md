---
title: "RemotePlayback: connect-Ereignis"
short-title: connect
slug: Web/API/RemotePlayback/connect_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Remote Playback API")}}

Das **`connect`**-Ereignis der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle wird ausgelöst, wenn der Benutzeragent eine Verbindung zum Remote-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("connect", (event) => { })

onconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in die Konsole ausgegeben, wenn der Benutzeragent erfolgreich eine Verbindung herstellt.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
