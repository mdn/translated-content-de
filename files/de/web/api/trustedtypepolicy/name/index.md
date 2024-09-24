---
title: "TrustedTypePolicy: Eigenschaft name"
short-title: name
slug: Web/API/TrustedTypePolicy/name
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`name`** schreibgeschützte Eigenschaft der {{domxref("TrustedTypePolicy")}} Schnittstelle gibt den Namen der Richtlinie zurück.

## Wert

Ein String, der den Namen der Richtlinie enthält.

## Beispiele

Im untenstehenden Beispiel wird eine Richtlinie namens `myEscapePolicy` erstellt, indem {{domxref("TrustedTypePolicyFactory.createPolicy()")}} verwendet wird, und wird durch das Objekt `escapeHTMLPolicy` repräsentiert. Das Aufrufen von `name` auf diesem Objekt gibt den String "myEscapePolicy" zurück.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

console.log(escapeHTMLPolicy.name); /* "myEscapePolicy" */
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
