---
title: "TrustedHTML: toString()-Methode"
short-title: toString()
slug: Web/API/TrustedHTML/toString
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toString()`**-Methode der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Schnittstelle gibt einen String zurück, der sicher in ein Einfügeziel eingesetzt werden kann.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das bereinigte HTML enthält.

## Beispiele

Die Konstante `escaped` ist ein Objekt, das über die Trusted Types-Richtlinie escapeHTMLPolicy erstellt wird. Die Methode `toString()` gibt einen String zurück, der sicher in ein Dokument eingefügt werden kann.

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
