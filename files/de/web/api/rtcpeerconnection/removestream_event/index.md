---
title: "RTCPeerConnection: removestream-Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`removestream`**-Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um ihr mitzuteilen, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde.
Sie können die `onremovestream`-Eigenschaft der `RTCPeerConnection`-Schnittstelle verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation zugunsten des bestehenden [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisses im entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der entsprechenden Ereignishandler-Eigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) entfernt. Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-API basiert jetzt auf Track-Ebene, daher ist das Vorhandensein von null Tracks im entfernten Stream gleichbedeutend mit dem Entfernen des entfernten Streams, was das `removestream`-Ereignis ausgelöst hat.

Dieses Ereignis kann nicht abgebrochen werden und wabert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("removestream", (event) => { })

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
