---
title: "NavigatorUAData: platform-Eigenschaft"
short-title: platform
slug: Web/API/NavigatorUAData/platform
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`platform`** schreibgeschützte Eigenschaft des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt die Plattformmarkeninformationen zurück.

## Wert

Ein String, der die Plattformmarke enthält.
Zum Beispiel `"Windows"`.

## Beispiele

Das folgende Beispiel gibt den Wert von `platform` in der Konsole aus.

```js
console.log(navigator.userAgentData.platform);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der {{HTTPHeader("Sec-CH-UA-Platform")}}-Header (ein [Client-Hint mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) enthält die gleichen Informationen.
