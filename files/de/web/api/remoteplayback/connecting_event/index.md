---
title: "RemotePlayback: connecting-Ereignis"
short-title: connecting
slug: Web/API/RemotePlayback/connecting_event
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Das **`connecting`**-Ereignis des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces tritt auf, wenn der Benutzeragent die Fernwiedergabe initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("connecting", (event) => {});

onconnecting = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in die Konsole ausgegeben, wenn der Benutzeragent eine Verbindung initiiert.

```js
RemotePlayback.onconnecting = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
