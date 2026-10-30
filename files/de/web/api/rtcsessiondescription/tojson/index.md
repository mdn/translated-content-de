---
title: "RTCSessionDescription: Methode toJSON()"
short-title: toJSON()
slug: Web/API/RTCSessionDescription/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** der Schnittstelle [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `RTCSessionDescription`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `RTCSessionDescription`-Objekt angetroffen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`type`](/de/docs/Web/API/RTCSessionDescription/type)
- [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel erstellt ein `RTCSessionDescription`-Objekt. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const description = new RTCSessionDescription({ type: "rollback", sdp: "" });

const json = description.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.type); // Same value as description.type
```

### In einen JSON-String serialisieren

Das `RTCSessionDescription`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(description));
```

Dies würde einen JSON-String wie den folgenden ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "type": "rollback",
  "sdp": ""
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
