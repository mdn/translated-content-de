---
title: "RTCPeerConnection: datachannel-Ereignis"
short-title: datachannel
slug: Web/API/RTCPeerConnection/datachannel_event
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Ein **`datachannel`**-Ereignis wird an eine Instanz von {{domxref("RTCPeerConnection")}} gesendet, wenn ein {{domxref("RTCDataChannel")}} zur Verbindung hinzugefügt wurde, als Ergebnis des Aufrufs von {{domxref("RTCPeerConnection.createDataChannel()")}} durch den entfernten Peer.

> [!NOTE]
> Dieses Ereignis wird _nicht_ ausgelöst, wenn die lokale Seite der Verbindung den Kanal erstellt.

Dieses Ereignis kann nicht abgebrochen werden und verbreitet sich nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("datachannel", (event) => {});

ondatachannel = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCDataChannelEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von {{DOMxRef("Event")}}._

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : Gibt den mit dem Ereignis verbundenen {{domxref("RTCDataChannel")}} zurück.

## Beispiele

Dieses Beispiel richtet eine Funktion ein, die `datachannel`-Ereignisse behandelt, indem sie die Informationen sammelt, die benötigt werden, um mit dem neu hinzugefügten {{domxref("RTCDataChannel")}} zu kommunizieren, und Ereignishandler für die auf diesem Kanal auftretenden Ereignisse hinzufügt.

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

`receiveChannel` wird auf den Wert der {{domxref("RTCDataChannelEvent.channel", "channel")}}-Eigenschaft des Ereignisses gesetzt, der das `RTCDataChannel`-Objekt angibt, das den Datenkanal verknüpft, der den entfernten Peer mit dem lokalen verbindet.

Der gleiche Code kann auch stattdessen die `ondatachannel`-Ereignishandler-Eigenschaft der {{domxref("RTCPeerConnection")}}-Schnittstelle verwenden, wie folgt:

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
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
