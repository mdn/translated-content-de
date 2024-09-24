---
title: "RemotePlayback: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
l10n:
  sourceCommit: 65d75da6fe94a513f581f4a4f532637c59ea64ac
---

{{APIRef("Remote Playback API")}}

Das **`disconnect`**-Ereignis des {{domxref("RemotePlayback")}}-Interfaces wird ausgelöst, wenn der Benutzeragent die Verbindung zum Remote-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Im folgenden Beispiel wird der Wert von {{domxref("RemotePlayback.state")}} in die Konsole ausgegeben, wenn der Benutzeragent die Verbindung zum Remote-Gerät trennt.

```js
RemotePlayback.ondisconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
