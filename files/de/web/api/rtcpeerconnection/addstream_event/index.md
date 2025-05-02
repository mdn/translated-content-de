---
title: "RTCPeerConnection: addstream-Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`addstream`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn neue Medien in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Stattdessen sollten Sie auf das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis achten, das für jede Medienspur gesendet wird, die der `RTCPeerConnection` hinzugefügt wird.

Sie können ähnlich beobachten, wie Streams von der Verbindung entfernt werden, indem Sie das [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event)-Ereignis überwachen.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("addstream", (event) => { })

onaddstream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent), da es ein [`Event`](/de/docs/Web/API/Event) ist, implementiert auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der mit dem Ereignis verbunden ist.

## Beispiele

In diesem Beispiel wird ermittelt, ob der Browser des Benutzers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis unterstützt. Falls dies der Fall ist, wird ein `track`-Ereignislistener eingerichtet; andernfalls wird ein `addstream`-Ereignislistener eingerichtet. `pc` ist eine `RTCPeerConnection`.

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

Dies ruft eine Funktion `doAddStream()` für jeden Stream auf, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

Sie können auch die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um einen Ereignislistener einzurichten:

```js
pc.addEventListener("addstream", (ev) => doAddStream(ev.stream), false);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
