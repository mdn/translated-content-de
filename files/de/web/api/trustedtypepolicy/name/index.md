---
title: "TrustedTypePolicy: name-Eigenschaft"
short-title: name
slug: Web/API/TrustedTypePolicy/name
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`name`**-Eigenschaft des [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Interfaces gibt den Namen der Richtlinie zurück.

## Wert

Ein String, der den Namen der Richtlinie enthält.

## Beispiele

Im folgenden Beispiel wird eine Richtlinie mit dem Namen `myEscapePolicy` erstellt, die mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt wird und durch das Objekt `escapeHTMLPolicy` dargestellt wird. Der Aufruf von `name` für dieses Objekt gibt den String "myEscapePolicy" zurück.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

console.log(escapeHTMLPolicy.name); /* "myEscapePolicy" */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
