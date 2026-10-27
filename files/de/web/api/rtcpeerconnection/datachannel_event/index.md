---
title: "RTCPeerConnection: datachannel-Ereignis"
short-title: datachannel
slug: Web/API/RTCPeerConnection/datachannel_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`datachannel`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet, wenn der Verbindung ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) hinzugefügt wurde, weil der entfernte Peer [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen hat.

> [!NOTE]
> Dieses Ereignis wird _nicht_ ausgelöst, wenn die lokale Seite der Verbindung den Kanal erstellt.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht im DOM-Baum aus.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("datachannel", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
ondatachannel = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Beispiele

Dieses Beispiel richtet eine Funktion ein, die `datachannel`-Ereignisse verarbeitet. Sie erfasst die Informationen, die für die Kommunikation über den neu hinzugefügten [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) benötigt werden, und fügt Event-Handler für die auf diesem Kanal auftretenden Ereignisse hinzu.

```js
pc.addEventListener("datachannel", (ev) => {
  receiveChannel = ev.channel;
  receiveChannel.onmessage = myHandleMessage;
  receiveChannel.onopen = myHandleOpen;
  receiveChannel.onclose = myHandleClose;
});
```

`receiveChannel` wird auf den Wert der Ereigniseigenschaft [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) gesetzt. Diese gibt das `RTCDataChannel`-Objekt an, das den Datenkanal zwischen dem entfernten und dem lokalen Peer repräsentiert.

Stattdessen kann derselbe Code auch die Event-Handler-Eigenschaft `ondatachannel` der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle verwenden, wie hier gezeigt. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `ondatachannel` hinzugefügte Event-Listener ersetzt werden:

```js
pc.ondatachannel = (ev) => {
  receiveChannel = ev.channel;
  receiveChannel.onmessage = myHandleMessage;
  receiveChannel.onopen = myHandleOpen;
  receiveChannel.onclose = myHandleClose;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [WebRTC-Datenkanäle verwenden](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
