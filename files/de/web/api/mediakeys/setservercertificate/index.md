---
title: "MediaKeys: setServerCertificate() Methode"
short-title: setServerCertificate()
slug: Web/API/MediaKeys/setServerCertificate
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`setServerCertificate()`** Methode der {{domxref("MediaKeys")}}-Schnittstelle stellt ein Serverzertifikat bereit, das verwendet wird, um Nachrichten an den Lizenzserver zu verschlüsseln.

## Syntax

```js-nolint
setServerCertificate(serverCertificate)
```

### Parameter

- `serverCertificate`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}-Objekt, das das Serverzertifikat enthält.
    Der Inhalt ist spezifisch für das Schlüsselsystem. Es DARF KEIN ausführbarer Code enthalten.

### Rückgabewert

Ein {{jsxref('Promise')}}, das zu einem boolean aufgelöst wird. Wenn die Implementierung des Schlüsselsystems, die durch den Inhalt der Entschlüsselungsmodul-Implementierung dieses Objekts repräsentiert wird, keine Serverzertifikate unterstützt, wird ein Promise zurückgegeben, das mit false aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
