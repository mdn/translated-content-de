---
title: "RTCPeerConnection: datachannel-Ereignis"
short-title: datachannel
slug: Web/API/RTCPeerConnection/datachannel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`datachannel`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet, wenn ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzugefügt wurde, weil der entfernte Peers die Methode [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen hat.

> [!NOTE]
> Dieses Ereignis wird _nicht_ ausgelöst, wenn das lokale Ende der Verbindung den Kanal erstellt.

Dieses Ereignis ist nicht abbruchfähig und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("datachannel", (event) => { })

ondatachannel = (event) => { }
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt zudem Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, der mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel richtet eine Funktion ein, die `datachannel`-Ereignisse behandelt, indem sie die Informationen sammelt, die benötigt werden, um mit dem neu hinzugefügten [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu kommunizieren, und indem sie Event-Handler für die Ereignisse hinzufügt, die auf diesem Kanal auftreten.

```js
pc.addEventListener(
  "datachannel",
  (ev) => {
    receiveChannel = ev.channel;
    receiveChannel.onmessage = myHandleMessage;
    receiveChannel.onopen = myHandleOpen;
    receiveChannel.onclose = myHandleClose;
  },
  false,
);
```

`receiveChannel` wird auf den Wert der [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel)-Eigenschaft des Ereignisses gesetzt, die das `RTCDataChannel`-Objekt angibt, das den Datenkanal darstellt, der den entfernten Peer mit dem lokalen verbindet.

Dieser gleiche Code kann auch stattdessen die `ondatachannel`-Event-Handler-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle verwenden, wie folgt:

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
