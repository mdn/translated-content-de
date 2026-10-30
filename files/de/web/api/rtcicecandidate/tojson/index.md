---
title: "RTCIceCandidate: Methode toJSON()"
short-title: toJSON()
slug: Web/API/RTCIceCandidate/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("WebRTC")}}

Die Methode **`toJSON()`** der Schnittstelle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `RTCIceCandidate`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `RTCIceCandidate`-Objekt vorkommt. Der serialisierte Wert kann anschließend mit dem Konstruktor [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate) innerhalb der Reviver-Funktion von {{jsxref("JSON.parse()")}} deserialisiert werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)
- [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid)
- [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex)
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel erstellt ein `RTCIceCandidate`-Objekt. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const candidate = new RTCIceCandidate({
  candidate: "",
  sdpMid: "0",
  sdpMLineIndex: 0,
});

const json = candidate.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.candidate); // Same value as candidate.candidate
```

### In einen JSON-String serialisieren

Das `RTCIceCandidate`-Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
const jsonString = JSON.stringify(candidate);
console.log(jsonString);
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "candidate": "",
  "sdpMid": "0",
  "sdpMLineIndex": 0,
  "usernameFragment": null
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
