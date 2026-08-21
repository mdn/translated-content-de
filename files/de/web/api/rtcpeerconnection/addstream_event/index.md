---
title: "RTCPeerConnection: addstream-Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Das veraltete **`addstream`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn neue Medien in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Stattdessen sollten Sie das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis beobachten, das für jede Medienspur gesendet wird, die zur `RTCPeerConnection` hinzugefügt wird.

Sie können ähnlich beobachten, wann Streams aus der Verbindung entfernt werden, indem Sie das [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event)-Ereignis überwachen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("addstream", (event) => { })

onaddstream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Beispiele

Dieses Beispiel prüft, ob der Browser des Benutzers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis unterstützt. Falls ja, wird ein `track`-Ereignis-Listener eingerichtet; andernfalls ein `addstream`-Ereignis-Listener. `pc` ist eine `RTCPeerConnection`.

```js
if (pc.addTrack !== undefined) {
  pc.ontrack = (ev) => {
    ev.streams.forEach((stream) => doAddStream(stream));
  };
} else {
  pc.onaddstream = (ev) => {
    doAddStream(ev.stream);
  };
}
```

Diese Funktion ruft einmal für jeden Stream, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird, die Funktion `doAddStream()` auf, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

Sie können auch die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um einen Ereignis-Listener einzurichten:

```js
pc.addEventListener("addstream", (ev) => doAddStream(ev.stream), false);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
