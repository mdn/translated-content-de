---
title: "HTMLFencedFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`height`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) liest und setzt den Wert des entsprechenden {{htmlelement("fencedframe")}} `height`-Attributes, welches die Höhe des Elements angibt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des `<fencedframe>`'s [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts festgelegt werden. In solchen Fällen ändert sich die Größe des eingebetteten Containers auf der Seite, wenn die [`width`](/de/docs/Web/API/HTMLFencedFrameElement/width) oder `height` des `<fencedframe>` geändert wird, jedoch wird das Dokument im Container visuell skaliert, um zu passen. Die berichtete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleibt unverändert.

## Wert

Ein String, der die Höhe des Elements in CSS-Pixel angibt. Der Standardwert ist `150`.

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
