---
title: "RTCStatsReport: has() Methode"
short-title: has()
slug: Web/API/RTCStatsReport/has
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`has()`**-Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob ein Bericht ein Statistik-Wörterbuch mit der angegebenen ID enthält.

Die Methode funktioniert ansonsten genauso wie {{jsxref("Map.prototype.has()")}}.

## Syntax

```js-nolint
has(id)
```

### Parameter

- `id`
  - : Ein String, der die ID eines Statistikobjekts enthält, das in diesem `RTCStatsReport` vorhanden sein könnte.

### Rückgabewert

`true`, wenn ein Element mit der angegebenen `id` im `RTCStatsReport`-Objekt existiert; andernfalls `false`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
