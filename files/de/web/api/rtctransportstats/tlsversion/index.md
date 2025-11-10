---
title: "RTCTransportStats: tlsVersion-Eigenschaft"
short-title: tlsVersion
slug: Web/API/RTCTransportStats/tlsVersion
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`tlsVersion`** des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs gibt die ausgehandelte TLS-Version eines zugrunde liegenden DTLS-Transports an.

Sie ist nur für DTLS-Transporte vorhanden und existiert nur, nachdem DTLS ausgehandelt wurde.

Der Wert stammt aus dem DTLS-Handshake `ServerHello.version` und wird als vier großbuchstabige Hexadezimalziffern dargestellt, wobei die Ziffern die zwei Bytes der Version repräsentieren. Beachten Sie jedoch, dass die Bytes möglicherweise nicht direkt mit Versionsnummern übereinstimmen. Zum Beispiel stellt DTLS die Version 1.2 als `'FEFD'` dar, was numerisch `{254, 253}` ist.

## Wert

Ein String, der den ausgehandelten DTS-Transport angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
