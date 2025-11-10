---
title: "NavigatorUAData: mobile-Eigenschaft"
short-title: mobile
slug: Web/API/NavigatorUAData/mobile
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`mobile`**-Eigenschaft der [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Schnittstelle gibt einen Wert zurück, der angibt, ob das Gerät ein mobiles Gerät ist.

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

- Der {{HTTPHeader("Sec-CH-UA-Mobile")}} Header (ein [niedrig-Entropie Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) enthält die gleichen Informationen.
