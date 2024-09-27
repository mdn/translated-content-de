---
title: "HTMLFencedFrameElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`width`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}} `width`-Attributs ab und setzt ihn, welches die Breite des Elements angibt.

Die Größe des eingebetteten Inhalts kann durch die internen `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen führt eine Änderung der `width`- oder [`height`](/de/docs/Web/API/HTMLFencedFrameElement/height) des `<fencedframe>` dazu, dass die Größe des eingebetteten Containers auf der Seite verändert wird, aber das Dokument innerhalb des Containers wird visuell an die Größe angepasst. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

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
