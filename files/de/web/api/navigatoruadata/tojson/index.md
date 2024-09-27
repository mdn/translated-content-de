---
title: "NavigatorUAData: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/NavigatorUAData/toJSON
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der Schnittstelle [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) ist ein _Serializer_, der eine JSON-Darstellung der _low entropy_-Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

> [!NOTE]
> Die Begriffe _high entropy_ und _low entropy_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben. Die low entropy-Werte, die von dieser Methode zurückgegeben werden, sind diejenigen, die keine Informationen offenbaren, die einen Benutzer identifizieren können. High entropy-Werte können nur durch die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) zurückgegeben werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt.

## Beispiele

Das folgende Beispiel gibt das JSON-Objekt in der Konsole aus.

```js
console.log(navigator.userAgentData.toJSON());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
