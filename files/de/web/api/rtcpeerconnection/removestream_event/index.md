---
title: "RTCPeerConnection: removestream-Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`removestream`**-Ereignis wurde an eine {{domxref("RTCPeerConnection")}} gesendet, um sie darüber zu informieren, dass ein {{domxref("MediaStream")}} aus der Verbindung entfernt wurde. Sie können die `onremovestream`-Eigenschaft der Schnittstelle `RTCPeerConnection` verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum {{domxref("RTCPeerConnection.addstream_event", "addstream")}}-Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt zugunsten des vorhandenen {{DOMxRef("MediaStream/removetrack_event", "removetrack")}}-Ereignisses im entfernten {{domxref("MediaStream")}} und der entsprechenden Ereignishandler-Eigenschaft des entfernten {{domxref("MediaStream")}}. Die {{domxref("RTCPeerConnection")}}-API ist jetzt track-basiert, sodass das Vorhandensein von null Tracks im entfernten Stream gleichbedeutend damit ist, dass der entfernte Stream entfernt wurde, was ein `removestream`-Ereignis auslöste.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("removestream", (event) => {});

onremovestream = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaStreamEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein {{domxref("MediaStreamEvent")}} als ein {{domxref("Event")}} implementiert auch diese Eigenschaften_.

- {{domxref("MediaStreamEvent.stream")}} {{ReadOnlyInline}}
  - : Enthält den {{domxref("MediaStream")}}, welcher den mit dem Ereignis verbundenen Stream enthält.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.removeStream()")}}
- {{domxref("MediaStream.removetrack_event", "removetrack")}}
