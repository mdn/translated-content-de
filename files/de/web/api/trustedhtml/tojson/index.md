---
title: "TrustedHTML: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/TrustedHTML/toJSON
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Schnittstelle gibt eine JSON-Darstellung der gespeicherten Daten zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der eine JSON-Darstellung der gespeicherten Daten enthält.

## Beispiele

Die Konstante `escaped` ist ein Objekt, das über die Trusted Types Richtlinie `escapeHTMLPolicy` erstellt wurde. Die `toString()`-Methode gibt einen String zurück, der sicher in ein Dokument eingefügt werden kann.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
