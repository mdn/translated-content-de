---
title: "RTCPeerConnection: addstream Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`addstream`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn neue Medien in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Sie sollten stattdessen das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis überwachen, das für jede Medienspur gesendet wird, die zur `RTCPeerConnection` hinzugefügt wird.

Sie können ähnlich Streams beobachten, die von der Verbindung entfernt werden, indem Sie das [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) Ereignis überwachen.

Dieses Ereignis ist nicht abbrechbar und lässt sich nicht nach oben durchreichen (bubbles nicht).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("addstream", (event) => {});

onaddstream = (event) => {};
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent), das ein [`Event`](/de/docs/Web/API/Event) ist, implementiert auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel prüft, ob der Browser des Benutzers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis unterstützt. Falls ja, wird ein `track`-Ereignis-Listener eingerichtet; andernfalls wird ein `addstream`-Ereignis-Listener eingerichtet. `pc` ist eine `RTCPeerConnection`.

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

Dies ruft eine Funktion `doAddStream()` einmal für jeden Stream auf, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

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
