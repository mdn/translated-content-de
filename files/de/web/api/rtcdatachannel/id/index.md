---
title: "RTCDataChannel: id-Eigenschaft"
short-title: id
slug: Web/API/RTCDataChannel/id
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`id`** gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die das {{domxref("RTCDataChannel")}} eindeutig identifiziert. Diese ID wird zu dem Zeitpunkt festgelegt, zu dem der Datenkanal erstellt wird, entweder durch den User-Agent (wenn {{domxref("RTCDataChannel.negotiated")}} `false` ist) oder durch das Skript der Website oder App (wenn `negotiated` `true` ist).

Jede {{domxref("RTCPeerConnection")}} kann daher bis zu einem theoretischen Maximum von 65.534 Datenkanälen besitzen, obwohl das tatsächliche Maximum von Browser zu Browser variieren kann.

## Wert

Ein `unsigned short` Wert (das heißt, ein Ganzzahlwert zwischen 0 und 65.535), der den Datenkanal eindeutig identifiziert.

Während die {{domxref("RTCDataChannel.label", "Label")}}-Eigenschaft nicht unbedingt eindeutig sein muss, wird garantiert, dass diese ID-Nummer unter allen Datenkanälen eindeutig ist. Darüber hinaus verwenden bekannte Implementierungen von WebRTC dieselbe ID bei beiden Peers. Eine eindeutige ID erleichtert es Ihrem Code, seine eigene außerhalb des regulären Ablaufs liegende Datenkanal-bezogene Signalisierung durchzuführen.

Dies kann auch für Protokollierungs- und Debugging-Zwecke nützlich sein.

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

console.log(`Channel id: ${dc.id}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}
