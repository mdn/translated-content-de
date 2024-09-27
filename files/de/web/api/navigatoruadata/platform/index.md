---
title: "NavigatorUAData: platform-Eigenschaft"
short-title: platform
slug: Web/API/NavigatorUAData/platform
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`platform`**-Eigenschaft des schreibgeschützten [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces gibt die Plattformmarkeninformationen zurück.

## Wert

Ein String, der die Plattformmarke enthält.
Zum Beispiel, `"Windows"`.

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

- Der {{HTTPHeader("Sec-CH-UA-Platform")}}-Header (ein [low-entropy client hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) enthält dieselben Informationen.
