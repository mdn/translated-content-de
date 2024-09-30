---
title: "RTCPeerConnection: datachannel-Ereignis"
short-title: datachannel
slug: Web/API/RTCPeerConnection/datachannel_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Ein **`datachannel`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet, wenn ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzugefügt wurde, als Ergebnis des Aufrufs von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) durch den entfernten Peer.

> [!NOTE]
> Dieses Ereignis wird _nicht_ ausgelöst, wenn das lokale Ende der Verbindung den Kanal erstellt.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("datachannel", (event) => {});

ondatachannel = (event) => {};
```

## Ereignistyp

Ein [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von [`Event`](/de/docs/Web/API/Event)._

- [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel) {{ReadOnlyInline}}
  - : Gibt den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zurück, der mit dem Ereignis verknüpft ist.

## Beispiele

Dieses Beispiel richtet eine Funktion ein, die `datachannel`-Ereignisse verarbeitet, indem sie die benötigten Informationen sammelt, um mit dem neu hinzugefügten [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu kommunizieren, und fügt Ereignisbehandler für die Ereignisse hinzu, die auf diesem Kanal auftreten.

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

`receiveChannel` wird auf den Wert der [`channel`](/de/docs/Web/API/RTCDataChannelEvent/channel)-Eigenschaft des Ereignisses gesetzt, die das `RTCDataChannel`-Objekt spezifiziert, das den Datenkanal darstellt, der den entfernten Peer mit dem lokalen verbindet.

Dieser gleiche Code kann auch stattdessen die `ondatachannel`-Ereignisbehandlungseigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle verwenden, wie folgt:

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
