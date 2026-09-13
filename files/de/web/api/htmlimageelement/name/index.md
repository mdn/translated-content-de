---
title: "HTMLImageElement: name Eigenschaft"
short-title: name
slug: Web/API/HTMLImageElement/name
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die _veraltete_ **`name`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces spezifiziert einen Namen für das Element. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/img#name)-Inhaltsattribut des `<img>`-Elements wider. Sie wurde durch die [`id`](/de/docs/Web/API/Element/id)-Eigenschaft ersetzt, die für alle Elemente verfügbar ist, und wird nur aus Kompatibilitätsgründen beibehalten.

## Wert

Ein String, der einen Namen bereitstellt, unter dem das Bild referenziert werden kann.

## Beispiele

### Das name-Attribut setzen

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
img.name = "example-img";
```

Stattdessen sollte die `id`-Eigenschaft gesetzt werden:

```js
img.id = "example-img";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
