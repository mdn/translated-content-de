---
title: "VTTRegion: scroll-Eigenschaft"
short-title: scroll
slug: Web/API/VTTRegion/scroll
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`scroll`**-Eigenschaft des [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Interfaces ist ein enumerierter Wert, der angibt, wie bestehende Cues in der Region verschoben werden, wenn ein neuer Cue hinzugefügt wird.

## Wert

Ein String. Mögliche Werte sind:

- `""` (der leere String)
  - : Bestehende Cues in der Region scrollen nicht; stattdessen werden sie gleichzeitig mit neuen Cues angezeigt. Dies ist der Standardwert.
- `"up"`
  - : Neue Cues werden am unteren Rand der Region hinzugefügt und bestehende Cues scrollen nach oben, um Platz für sie zu schaffen.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `scroll` auf `"up"` gesetzt. Der Wert wird dann im Konsolenfenster ausgegeben.

```js
const region = new VTTRegion();
region.scroll = "up";
console.log(region.scroll);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
