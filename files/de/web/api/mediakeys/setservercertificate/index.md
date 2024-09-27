---
title: "MediaKeys: setServerCertificate()-Methode"
short-title: setServerCertificate()
slug: Web/API/MediaKeys/setServerCertificate
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`setServerCertificate()`**-Methode der Schnittstelle [`MediaKeys`](/de/docs/Web/API/MediaKeys) stellt ein Serverzertifikat bereit, das zum Verschlüsseln von Nachrichten an den Lizenzserver verwendet wird.

## Syntax

```js-nolint
setServerCertificate(serverCertificate)
```

### Parameter

- `serverCertificate`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das das Serverzertifikat enthält.
    Der Inhalt ist Key System-spezifisch. Es DARF KEIN ausführbarer Code enthalten sein.

### Rückgabewert

Ein {{jsxref('Promise')}} das sich mit einem booleschen Wert auflöst. Wenn das Key System, das durch den Implementierungswert dieses Inhaltsentschlüsselungsmoduls dargestellt wird, keine Serverzertifikate unterstützt, wird ein Promise zurückgegeben, das sich mit false auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
