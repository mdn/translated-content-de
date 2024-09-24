---
title: "TrustedHTML: toString()-Methode"
short-title: toString()
slug: Web/API/TrustedHTML/toString
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der {{domxref("TrustedHTML")}}-Schnittstelle gibt einen String zurück, der sicher in eine Einfügestelle für potenzielle Injektionen eingefügt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das bereinigte HTML enthält.

## Beispiele

Die Konstante `escaped` ist ein Objekt, das über die Trusted Types-Richtlinie escapeHTMLPolicy erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher in ein Dokument eingefügt werden kann.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
