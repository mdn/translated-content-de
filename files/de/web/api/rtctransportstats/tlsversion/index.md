---
title: "RTCTransportStats: tlsVersion-Eigenschaft"
short-title: tlsVersion
slug: Web/API/RTCTransportStats/tlsVersion
l10n:
  sourceCommit: f1d3159662342176fb3fc648bb376f5220748129
---

{{APIRef("WebRTC")}}

Die **`tlsVersion`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs gibt die ausgehandelte TLS-Version eines zugrunde liegenden DTLS-Transports an.

Sie ist nur für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS ausgehandelt wurde.

Der Wert stammt aus dem DTLS-Handshake `ServerHello.version` und wird als vierstellige, großgeschriebene Hexadezimalziffern dargestellt, wobei die Ziffern die zwei Bytes der Version darstellen.
Beachten Sie jedoch, dass die Bytes möglicherweise nicht direkt auf Versionsnummern abbilden.
Zum Beispiel stellt DTLS die Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

## Wert

Ein String, der den ausgehandelten DTLS-Transport angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
