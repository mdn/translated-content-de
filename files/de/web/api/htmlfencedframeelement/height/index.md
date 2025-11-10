---
title: "HTMLFencedFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`height`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) erhält und gibt den Wert des entsprechenden {{htmlelement("fencedframe")}} `height`-Attributs an, welches die Höhe des Elements spezifiziert.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>`-Elements festgelegt werden. In solchen Fällen ändert das Ändern der [`width`](/de/docs/Web/API/HTMLFencedFrameElement/width)- oder `height`-Eigenschaft des `<fencedframe>`-Elements die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die berichtete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
