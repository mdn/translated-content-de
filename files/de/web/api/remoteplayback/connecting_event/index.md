---
title: "RemotePlayback: connecting-Ereignis"
short-title: connecting
slug: Web/API/RemotePlayback/connecting_event
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Das **`connecting`**-Ereignis der {{domxref("RemotePlayback")}}-Schnittstelle wird ausgelöst, wenn der Benutzeragent die Fernwiedergabe initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("connecting", (event) => {});

onconnecting = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Im folgenden Beispiel wird der Wert von {{domxref("RemotePlayback.state")}} in die Konsole ausgegeben, wenn der Benutzeragent eine Verbindung initiiert.

```js
RemotePlayback.onconnecting = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
