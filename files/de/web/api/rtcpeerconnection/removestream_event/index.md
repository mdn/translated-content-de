---
title: "RTCPeerConnection: removestream Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`removestream`** Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um darüber zu informieren, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde. Sie können die `onremovestream` Eigenschaft der `RTCPeerConnection`-Schnittstelle verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation zugunsten des bestehenden [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisses auf dem entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der entsprechenden Ereignishandler-Eigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt. Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) API ist jetzt track-basiert, sodass das Vorhandensein von null Spuren im entfernten Stream dem Entfernen des entfernten Streams entspricht, was ein `removestream` Ereignis verursachte.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbled.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("removestream", (event) => {});

onremovestream = (event) => {};
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent), der ein [`Event`](/de/docs/Web/API/Event) ist, implementiert auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der den mit dem Ereignis assoziierten Stream enthält.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
