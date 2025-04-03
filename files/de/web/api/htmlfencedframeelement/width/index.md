---
title: "HTMLFencedFrameElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`width`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) liest und setzt den Wert des entsprechenden `width`-Attributs des {{htmlelement("fencedframe")}}, das die Breite des Elements bestimmt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen führt das Ändern der `width` oder [`height`](/de/docs/Web/API/HTMLFencedFrameElement/height) des `<fencedframe>` dazu, dass sich die Größe des eingebetteten Containers auf der Seite ändert, jedoch wird das Dokument im Container visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

## Wert

Ein String, der die Breite des Elements in CSS-Pixeln repräsentiert. Der Standardwert ist `300`.

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

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
