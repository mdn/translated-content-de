---
title: "NavigatorUAData: toJSON() Methode"
short-title: toJSON()
slug: Web/API/NavigatorUAData/toJSON
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Schnittstelle ist ein _Serializer_, der eine JSON-Darstellung der _Low Entropy_-Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

> [!NOTE]
> Die Begriffe _High Entropy_ und _Low Entropy_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben. Die von dieser Methode zurückgegebenen Low Entropy-Werte sind diejenigen, die keine Informationen offenbaren, die zur Identifizierung eines Benutzers fähig sind. High Entropy-Werte können nur durch die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) zurückgegeben werden.

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
