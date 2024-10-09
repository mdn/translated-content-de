---
title: "FontFaceSet: status-Eigenschaft"
short-title: status
slug: Web/API/FontFaceSet/status
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`status`**-Eigenschaft der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle gibt den Ladezustand der Schriftarten im Set zurück.

## Wert

Einer der folgenden:

- `"loading"`
- `"loaded"`

## Beispiele

Im folgenden Beispiel wird der `status` des `FontFaceSet` in die Konsole ausgegeben.

```js
console.log(document.fonts.status);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
