---
title: "VTTRegion: id-Eigenschaft"
short-title: id
slug: Web/API/VTTRegion/id
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`id`**-Eigenschaft des [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Interfaces ist ein String, der die Region identifiziert.

## Wert

Ein String, der die Region identifiziert. Wird beim ersten Erstellen des `VTTRegion`-Objekts auf einen leeren String initialisiert.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert der `id`-Eigenschaft auf `"region1"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.id = "region1";
console.log(region.id);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
