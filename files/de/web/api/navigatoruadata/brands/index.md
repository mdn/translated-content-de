---
title: "NavigatorUAData: brands-Eigenschaft"
short-title: brands
slug: Web/API/NavigatorUAData/brands
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`brands`**-Eigenschaft des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt ein Array mit Markeninformationen zurück.

## Wert

Ein Array, das die folgenden Informationen für jede Marke enthält:

- `brand`
  - : Ein String, der die Marke enthält. Zum Beispiel `"Google Chrome"`.
- `version`
  - : Ein String, der die Version enthält. Zum Beispiel `"91"`.

## Beispiele

Das folgende Beispiel gibt den Wert von `brands` in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-UA")}} (ein [client hint mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) enthält dieselben Informationen.
