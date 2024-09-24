---
title: "RemotePlayback: connect Ereignis"
short-title: connect
slug: Web/API/RemotePlayback/connect_event
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Das **`connect`** Ereignis des {{domxref("RemotePlayback")}} Interfaces wird ausgelöst, wenn der User-Agent eine Verbindung zum entfernten Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Im folgenden Beispiel wird der Wert von {{domxref("RemotePlayback.state")}} in die Konsole ausgegeben, wenn der User-Agent erfolgreich eine Verbindung herstellt.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
