---
title: "RTCPeerConnectionStats: dataChannelsClosed Eigenschaft"
short-title: dataChannelsClosed
slug: Web/API/RTCPeerConnectionStats/dataChannelsClosed
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`dataChannelsClosed`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Wörterbuchs zeigt die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte an, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand verlassen haben.

Ein Kanal verlässt den `open`-Zustand, wenn entweder das Ende der Verbindung oder das zugrunde liegende Transportmittel geschlossen wird.
Beachten Sie, dass Kanäle, die in den [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing)- oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed)-Zustand wechseln, ohne jemals `open` gewesen zu sein, in dieser Zahl nicht berücksichtigt werden.

## Wert

Eine positive ganze Zahl, die die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
