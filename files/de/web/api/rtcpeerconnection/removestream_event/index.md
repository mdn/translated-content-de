---
title: "RTCPeerConnection: removestream-Ereignis"
short-title: removestream
slug: Web/API/RTCPeerConnection/removestream_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}{{Non-standard_Header}}

Das veraltete **`removestream`**-Ereignis wurde an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um darüber zu informieren, dass ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde. Sie können die `onremovestream`-Eigenschaft der `RTCPeerConnection`-Schnittstelle verwenden, um einen Handler für dieses Ereignis festzulegen.

Dies ist das Gegenstück zum [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis, das ebenfalls veraltet ist.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt zugunsten des vorhandenen [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisses auf dem entfernten [`MediaStream`](/de/docs/Web/API/MediaStream) und der entsprechenden Ereignishandlereigenschaft des entfernten [`MediaStream`](/de/docs/Web/API/MediaStream). Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-API basiert jetzt auf Tracks, sodass das Vorhandensein von null Tracks im entfernten Stream dem Entfernungsereignis des Streams gleichkommt, was ein `removestream`-Ereignis verursacht.

Dieses Ereignis ist nicht abbruchbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream)
- [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
