---
title: "RTCDataChannel: label-Eigenschaft"
short-title: label
slug: Web/API/RTCDataChannel/label
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`label`**
gibt einen String zurück, der einen Namen enthält, der den Datenkanal beschreibt. Diese
Bezeichnungen müssen nicht einzigartig sein.

Sie können das Label nach Belieben verwenden; Sie könnten es verwenden, um alle Kanäle zu identifizieren, die
für denselben Zweck verwendet werden, indem Sie ihnen allen denselben Namen geben. Oder Sie könnten jedem Kanal ein einzigartiges Label zur Nachverfolgung geben. Es liegt ganz bei den Designentscheidungen, die beim Erstellen Ihrer Website oder App getroffen wurden.

Eine eindeutige ID kann in der [`id`](/de/docs/Web/API/RTCDataChannel/id)-Eigenschaft gefunden werden.

> [!NOTE]
> Das Label eines Datenkanals wird gesetzt, wenn der Kanal durch Aufruf von
> [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wird. Es kann danach nicht mehr geändert werden.

## Wert

Ein String-Identifikator, der von der Website oder App zugewiesen wurde, als der Datenkanal erstellt wurde, wie angegeben, als [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen wurde, um den Kanal zu erstellen.

## Beispiel

Dieses Beispiel erstellt einen Datenkanal auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) und setzt dann nach einiger Zeit den Inhalt eines UI-Elements, um den Namen des Kanals anzuzeigen.

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

// …

document.getElementById("channel-name").appendChild(
  Object.assign(document.createElement("span"), {
    className: "channelName",
    textContent: dc.label,
  }),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.id`](/de/docs/Web/API/RTCDataChannel/id)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
