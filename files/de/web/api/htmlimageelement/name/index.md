---
title: "HTMLImageElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLImageElement/name
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`name`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt einen Namen für das Element an. Sie spiegelt das [`name`](/de/docs/Web/HTML/Reference/Elements/img#name)-Inhaltsattribut des `<img>`-Elements wider. Sie wurde durch die [`id`](/de/docs/Web/API/Element/id)-Eigenschaft ersetzt, die auf allen Elementen verfügbar ist und wird nur aus Kompatibilitätsgründen beibehalten.

## Wert

Ein String, der einen Namen bereitstellt, mit dem das Bild referenziert werden kann.

## Beispiele

### Setzen des name-Attributs

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
