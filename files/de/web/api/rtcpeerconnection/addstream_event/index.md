---
title: "RTCPeerConnection: addstream Ereignis"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das veraltete **`addstream`** Ereignis wird an eine {{domxref("RTCPeerConnection")}} gesendet, wenn neue Medien in Form eines {{domxref("MediaStream")}}-Objekts hinzugefügt wurden.

> [!WARNING]
> Dieses Ereignis wurde aus der WebRTC-Spezifikation entfernt. Sie sollten stattdessen das {{domxref("RTCPeerConnection.track_event", "track")}} Ereignis beobachten, das für jede Medienspur, die zur `RTCPeerConnection` hinzugefügt wird, gesendet wird.

Sie können ähnlich auch beobachten, wann Streams von der Verbindung entfernt werden, indem Sie das {{domxref("RTCPeerConnection.removestream_event", "removestream")}} Ereignis überwachen.

Dieses Ereignis kann nicht abgebrochen werden und es blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("addstream", (event) => {});

onaddstream = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaStreamEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamEvent")}}

## Ereigniseigenschaften

_Ein {{domxref("MediaStreamEvent")}}, das ein {{domxref("Event")}} ist, implementiert auch diese Eigenschaften_.

- {{domxref("MediaStreamEvent.stream")}} {{ReadOnlyInline}}
  - : Beinhaltet den {{domxref("MediaStream")}}, der mit dem Ereignis verbunden ist.

## Beispiele

Dieses Beispiel prüft, ob der Browser des Nutzers das {{domxref("RTCPeerConnection.track_event", "track")}} Ereignis unterstützt. Falls ja, wird ein `track`-Ereignislistener eingerichtet; andernfalls wird ein `addstream`-Ereignislistener eingerichtet. `pc` ist eine `RTCPeerConnection`.

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

Dies ruft eine Funktion `doAddStream()` einmal für jeden Stream auf, der zur {{domxref("RTCPeerConnection")}} hinzugefügt wird, unabhängig davon, ob der Browser `addstream` oder `track` sendet.

Sie können auch die {{domxref("EventTarget.addEventListener", "addEventListener()")}} Methode verwenden, um einen Ereignislistener festzulegen:

```js
pc.addEventListener("addstream", (ev) => doAddStream(ev.stream), false);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addStream()")}}
- {{domxref("MediaStreamEvent")}}
