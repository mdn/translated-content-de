---
title: "NavigatorUAData: brands-Eigenschaft"
short-title: brands
slug: Web/API/NavigatorUAData/brands
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`brands`** schreibgeschützte Eigenschaft des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt ein Array von Markeninformationen zurück.

## Wert

Ein Array, das die folgenden Informationen für jede Marke enthält:

- `brand`
  - : Ein String, der die Marke enthält. Zum Beispiel, `"Google Chrome"`.
- `version`
  - : Ein String, der die Version enthält. Zum Beispiel, `"91"`.

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

- {{HTTPHeader("Sec-CH-UA")}} (ein [niedrig-entropischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) enthält die gleichen Informationen.
