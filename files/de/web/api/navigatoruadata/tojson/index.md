---
title: "NavigatorUAData: Methode toJSON()"
short-title: toJSON()
slug: Web/API/NavigatorUAData/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `NavigatorUAData`-Objekt repräsentiert. Es enthält nur Werte mit niedriger Entropie. Um Werte mit hoher Entropie zu erhalten, verwenden Sie [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues).

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `NavigatorUAData`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`brands`](/de/docs/Web/API/NavigatorUAData/brands): Das Array und seine Objekte mit den Eigenschaften `brand` und `version` werden in ein neues Array und neue Objekte kopiert.
- [`mobile`](/de/docs/Web/API/NavigatorUAData/mobile)
- [`platform`](/de/docs/Web/API/NavigatorUAData/platform)

Sofern nicht anders angegeben, wird der Wert jeder Eigenschaft unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Wenn `toJSON()` direkt auf `navigator.userAgentData` aufgerufen wird, gibt die Methode ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = navigator.userAgentData.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.mobile); // Same value as navigator.userAgentData.mobile
```

### In eine JSON-Zeichenfolge serialisieren

Das `NavigatorUAData`-Objekt wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(navigator.userAgentData));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "brands": [
    {
      "brand": "Chromium",
      "version": "126"
    },
    {
      "brand": "Not/A)Brand",
      "version": "8"
    }
  ],
  "mobile": false,
  "platform": "Windows"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
