---
title: "RTCTransportStats: srtpCipher-Eigenschaft"
short-title: srtpCipher
slug: Web/API/RTCTransportStats/srtpCipher
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die **`srtpCipher`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs gibt den beschreibenden Namen des Schutzprofils an, das für den Transport über das {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}} verwendet wird.

## Wert

Ein String, der den beschreibenden Namen des SRTP-Schutzprofils angibt.

Die Werte sind in der Spalte „Profile“ der [IANA-Registrierung für DTLS-SRTP-Schutzprofile](https://www.iana.org/assignments/srtp-protection#srtp-protection-1) und in {{rfc("5764","", "4.1.2")}} definiert.

## Beispiele

### SRTP_AES128_CM_HMAC_SHA1_80

`"SRTP_AES128_CM_HMAC_SHA1_80"` ist der beschreibende Name des folgenden Profils, wobei `maximum_lifetime` die maximale Anzahl von Paketen ist, die durch einen einzelnen Schlüsselsatz geschützt werden können.

```plain
SRTP_AES128_CM_HMAC_SHA1_80
cipher: AES_128_CM
cipher_key_length: 128
cipher_salt_length: 112
maximum_lifetime: 2^31
auth_function: HMAC-SHA1
auth_key_length: 160
auth_tag_length: 80
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
