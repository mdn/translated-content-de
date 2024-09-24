---
title: EcKeyGenParams
slug: Web/API/EcKeyGenParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an {{domxref("SubtleCrypto.generateKey()")}} übergeben werden sollte, wenn ein elliptisches Kurven-basiertes Schlüsselpaar generiert wird: also, wenn der Algorithmus entweder als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` oder `ECDH` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `namedCurve`

  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve repräsentiert. Dies kann einer der folgenden Namen für von [NIST](https://www.nist.gov/)-genehmigte Kurven sein:

    - `P-256`
    - `P-384`
    - `P-521`

## Beispiele

Sehen Sie sich die Beispiele für {{domxref("SubtleCrypto.generateKey()")}} an.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

Browser, die die "ECDH"- oder "ECDSA"-Algorithmen für die {{domxref("SubtleCrypto.generateKey()")}}-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.generateKey()")}}.
