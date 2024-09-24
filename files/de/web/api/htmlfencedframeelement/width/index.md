---
title: "HTMLFencedFrameElement: Breite-Eigenschaft"
short-title: Breite
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`width`**-Eigenschaft des {{domxref("HTMLFencedFrameElement")}} holt und setzt den Wert des entsprechenden `width`-Attributs des {{htmlelement("fencedframe")}}, das die Breite des Elements festlegt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des `<fencedframe>`-{{domxref("HTMLFencedFrameElement.config", "config")}}-Objekts festgelegt werden. In solchen Fällen ändert das Ändern der `width`- oder {{domxref("HTMLFencedFrameElement.height", "height")}} des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument im Container wird visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. {{domxref("Window.innerWidth")}} und {{domxref("Window.innerHeight")}}) bleiben unverändert.

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

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
