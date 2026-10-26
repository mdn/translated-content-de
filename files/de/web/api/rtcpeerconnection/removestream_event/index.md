---
title: "RTCPeerConnection: removestream-Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Das veraltete **`removestream`**-Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um darüber zu informieren, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde.
Sie können mit der `onremovestream`-Eigenschaft des `RTCPeerConnection`-Interfaces einen Handler für dieses Ereignis festlegen.

Das Gegenstück dazu ist das ebenfalls veraltete [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis.

> [!WARNING]
> Dieses Ereignis wurde zugunsten des bereits vorhandenen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisses auf dem entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der entsprechenden Event-Handler-Eigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) aus der WebRTC-Spezifikation entfernt. Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-API basiert inzwischen auf Tracks. Wenn der entfernte Stream keine Tracks mehr enthält, entspricht dies daher dem Entfernen des Streams, das zuvor ein `removestream`-Ereignis auslöste.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("removestream", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onremovestream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
