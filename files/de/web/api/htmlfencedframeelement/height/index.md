---
title: "HTMLFencedFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`height`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) gibt den Wert des entsprechenden {{htmlelement("fencedframe")}}-`height`-Attributs an und setzt diesen, welcher die Höhe des Elements festlegt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth` und `contentHeight` Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen wird durch Ändern der [`width`](/de/docs/Web/API/HTMLFencedFrameElement/width) oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite geändert, jedoch wird das Dokument innerhalb des Containers visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Wert

Ein String, der die Höhe des Elements in CSS-Pixeln darstellt. Der Standardwert ist `150`.

## Beispiele

```js
const frame = document.createElement("fencedframe");
frame.height = "320";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
