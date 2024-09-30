---
title: "RTCPeerConnection: removestream Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`removestream`** Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um zu informieren, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde.
Sie können die `onremovestream`-Eigenschaft der `RTCPeerConnection`-Schnittstelle verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt zugunsten des bestehenden [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisses auf dem entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der zugehörigen Event-Handler-Eigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream). Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) API basiert jetzt auf einzelnen Tracks, sodass das Vorhandensein von null Tracks im entfernten Stream gleichbedeutend damit ist, dass der entfernte Stream entfernt wurde, was ein `removestream` Ereignis verursachte.

Dieses Ereignis ist nicht stornierbar und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("removestream", (event) => {});

onremovestream = (event) => {};
```

## Ereignistyp

Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent) als ein [`Event`](/de/docs/Web/API/Event), implementiert dieses Ereignis auch diese Eigenschaften_.

- [`MediaStreamEvent.stream`](/de/docs/Web/API/MediaStreamEvent/stream) {{ReadOnlyInline}}
  - : Enthält den [`MediaStream`](/de/docs/Web/API/MediaStream) mit dem Stream, der mit dem Ereignis verbunden ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
