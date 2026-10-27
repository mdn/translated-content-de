---
title: "RTCPeerConnection: addstream-Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Das veraltete **`addstream`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ihr neue Medien in Form eines [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Achten Sie stattdessen auf das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis, das für jeden zur `RTCPeerConnection` hinzugefügten Medientrack gesendet wird.

Ebenso können Sie erkennen, wenn Streams aus der Verbindung entfernt werden, indem Sie das [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event)-Ereignis überwachen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("addstream", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onaddstream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Beispiele

Dieses Beispiel prüft, ob der Browser des Benutzers das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis unterstützt. Falls ja, wird ein Event-Listener für `track` eingerichtet; andernfalls wird ein Event-Listener für `addstream` eingerichtet. `pc` ist eine `RTCPeerConnection`. Dieses Beispiel verwendet die Event-Handler-Eigenschaften `ontrack` und `onaddstream` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ontrack` und `onaddstream` hinzugefügte Event-Listener ersetzt werden).

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

Dadurch wird die Funktion `doAddStream()` für jeden zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügten Stream einmal aufgerufen, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

Sie können auch die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um einen Event-Listener einzurichten:

```js
pc.addEventListener("addstream", (ev) => doAddStream(ev.stream), false);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
