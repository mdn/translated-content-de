---
title: "NavigatorUAData: mobile-Eigenschaft"
short-title: mobile
slug: Web/API/NavigatorUAData/mobile
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`mobile`** schreibgeschützte Eigenschaft des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt einen Wert zurück, der anzeigt, ob das Gerät ein mobiles Gerät ist.

## Wert

Ein {{jsxref("Boolean")}}, `true`, wenn es sich um ein mobiles Gerät handelt.

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

- Der {{HTTPHeader("Sec-CH-UA-Mobile")}}-Header (ein [niedrig-Entropie-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) enthält die gleiche Information.
