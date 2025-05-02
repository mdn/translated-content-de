---
title: "RTCPeerConnection: removestream-Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`removestream`**-Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um ihr mitzuteilen, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) von der Verbindung entfernt wurde. Sie können die `onremovestream`-Eigenschaft der `RTCPeerConnection`-Schnittstelle verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde von der WebRTC-Spezifikation zugunsten des vorhandenen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisses des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der entsprechenden Ereignis-Handler-Eigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt. Die API von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) basiert jetzt auf Tracks, sodass das Vorhandensein von null Tracks im entfernten Stream gleichbedeutend mit dem Entfernen des entfernten Streams ist, was ein `removestream`-Ereignis ausgelöst hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("removestream", (event) => { })

onremovestream = (event) => { }
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent) ist ein [`Event`](/de/docs/Web/API/Event) und implementiert daher auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream), der den mit dem Ereignis verbundenen Stream enthält.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
