---
title: "RTCDataChannel: id-Eigenschaft"
short-title: id
slug: Web/API/RTCDataChannel/id
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`id`** gibt eine ID-Nummer (zwischen 0 und 65.534) zurück, die den [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) eindeutig identifiziert. Diese ID wird zum Zeitpunkt der Erstellung des Datenkanals festgelegt, entweder durch den User Agent (wenn [`RTCDataChannel.negotiated`](/de/docs/Web/API/RTCDataChannel/negotiated) `false` ist) oder durch das Skript der Seite oder Anwendung (wenn `negotiated` `true` ist).

Jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann daher theoretisch bis zu maximal 65.534 Datenkanäle haben, obwohl das tatsächliche Maximum von Browser zu Browser variieren kann.

## Wert

Ein `unsigned short`-Wert (d.h. eine ganze Zahl zwischen 0 und 65.535), die den Datenkanal eindeutig identifiziert.

Während die [`label`](/de/docs/Web/API/RTCDataChannel/label)-Eigenschaft nicht eindeutig sein muss, ist diese ID-Nummer garantiert unter allen Datenkanälen eindeutig. Darüber hinaus verwenden bekannte Implementierungen von WebRTC dieselbe ID auf beiden Peers. Eine eindeutige ID erleichtert es Ihrem Code, sein eigenes Out-of-Band-Datenkanal-bezogenes Signaling durchzuführen.

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
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
