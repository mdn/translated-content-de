---
title: "RemotePlayback: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/RemotePlayback/disconnect_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Remote Playback API")}}

Das **`disconnect`**-Ereignis der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle wird ausgelöst, wenn der User Agent die Verbindung zum entfernten Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondisconnect = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Im folgenden Beispiel wird der Wert von [`RemotePlayback.state`](/de/docs/Web/API/RemotePlayback/state) in der Konsole ausgegeben, wenn der User Agent die Verbindung zum entfernten Gerät trennt.

```js
RemotePlayback.ondisconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
