---
title: "MediaKeys: Methode setServerCertificate()"
short-title: setServerCertificate()
slug: Web/API/MediaKeys/setServerCertificate
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`setServerCertificate()`**-Methode der [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Schnittstelle stellt ein Serverzertifikat bereit, das zum Verschlüsseln von Nachrichten an den Lizenzserver verwendet wird.

## Syntax

```js-nolint
setServerCertificate(serverCertificate)
```

### Parameter

- `serverCertificate`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das das Serverzertifikat enthält. Der Inhalt ist spezifisch für das Schlüsselsystem und darf KEIN ausführbaren Code enthalten.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem Boolean auflöst. Wenn die Key System-Implementierung, die durch den Implementierungswert dieses Objekts des Inhaltsentschlüsselungsmoduls dargestellt wird, keine Serverzertifikate unterstützt, wird ein Promise zurückgegeben, das mit false aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
