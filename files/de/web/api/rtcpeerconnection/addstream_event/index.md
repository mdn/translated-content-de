---
title: "RTCPeerConnection: addstream Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`addstream`** Ereignis wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn neue Medien in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream) Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Stattdessen sollten Sie das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis überwachen, welches für jeden Medientrack gesendet wird, der zur `RTCPeerConnection` hinzugefügt wird.

Sie können ähnlich überwachen, ob Streams von der Verbindung entfernt werden, indem Sie das [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) Ereignis beobachten.

Dieses Ereignis ist nicht abbruchfähig und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("addstream", (event) => { })

onaddstream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Beispiele

Dieses Beispiel prüft, ob der Browser des Benutzers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis unterstützt. Falls ja, wird ein `track` Ereignis-Listener eingerichtet; andernfalls wird ein `addstream` Ereignis-Listener eingerichtet. `pc` ist eine `RTCPeerConnection`.

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

Dies ruft die Funktion `doAddStream()` einmal für jeden Stream auf, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

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
