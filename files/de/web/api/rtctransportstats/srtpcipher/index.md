---
title: "RTCTransportStats: srtpCipher Eigenschaft"
short-title: srtpCipher
slug: Web/API/RTCTransportStats/srtpCipher
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`srtpCipher`** Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Wörterbuchs gibt den beschreibenden Namen des Schutzprofils an, das für das {{Glossary("RTP", "Secure Real-time Transport Protocol (SRTP)")}} Transport verwendet wird.

## Wert

Ein String, der den beschreibenden Namen des SRTP-Schutzprofils angibt.

Die Werte sind in der "Profile"-Spalte des [IANA DTLS-SRTP Schutzprofil-Registers](https://www.iana.org/assignments/srtp-protection/srtp-protection.xhtml#srtp-protection-1) und {{rfc("5764","", "4.1.2")}} definiert.

## Beispiele

### SRTP_AES128_CM_HMAC_SHA1_80

`"SRTP_AES128_CM_HMAC_SHA1_80"` ist der beschreibende Name des folgenden Profils, wobei `maximum_lifetime` die maximale Anzahl von Paketen ist, die durch einen einzelnen Satz von Schlüsseln geschützt werden können.

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
