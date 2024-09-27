---
title: "RemotePlayback: connect-Ereignis"
short-title: connect
slug: Web/API/RemotePlayback/connect_event
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Das **`connect`**-Ereignis der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle wird ausgelöst, wenn der Benutzeragent eine Verbindung zum entfernten Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in der Konsole ausgegeben, wenn der Benutzeragent erfolgreich eine Verbindung herstellt.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
