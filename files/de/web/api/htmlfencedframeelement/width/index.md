---
title: "HTMLFencedFrameElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`width`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}}-`width`-Attributs ab und legt ihn fest. Dieses Attribut gibt die Breite des Elements an.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des `<fencedframe>`-`config`-Objekts festgelegt werden. In solchen Fällen bewirkt das Ändern der `width`- oder [`height`](/de/docs/Web/API/HTMLFencedFrameElement/height)-Eigenschaft des `<fencedframe>`, dass sich die Größe des eingebetteten Containers auf der Seite ändert, jedoch wird das Dokument innerhalb des Containers optisch skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Wert

Ein String, der die Breite des Elements in CSS-Pixeln darstellt. Der Standardwert ist `300`.

## Beispiele

```js
const frame = document.createElement("fencedframe");
frame.width = "480";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
