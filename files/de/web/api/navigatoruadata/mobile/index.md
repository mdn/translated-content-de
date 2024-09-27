---
title: "NavigatorUAData: mobile-Eigenschaft"
short-title: mobile
slug: Web/API/NavigatorUAData/mobile
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`mobile`**-Eigenschaft des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt an, ob es sich bei dem Gerät um ein Mobilgerät handelt.

## Wert

Ein {{jsxref("Boolean")}}, `true`, wenn es sich um ein Mobilgerät handelt.

## Beispiele

Das folgende Beispiel gibt den Wert von `mobile` in der Konsole aus.

```js
console.log(navigator.userAgentData.mobile);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{HTTPHeader("Sec-CH-UA-Mobile")}}-Header (ein [Low-Entropy-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) enthält die gleichen Informationen.
