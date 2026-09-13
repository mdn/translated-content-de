---
title: "HTMLFencedFrameElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLFencedFrameElement/width
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`width`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) erhält und setzt den Wert des entsprechenden {{htmlelement("fencedframe")}}-`width`-Attributs, welches die Breite des Elements angibt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des `<fencedframe>`-[`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts festgelegt werden. In solchen Fällen führt das Ändern der `width`- oder [`height`](/de/docs/Web/API/HTMLFencedFrameElement/height)-Eigenschaften des `<fencedframe>` dazu, dass die Größe des eingebetteten Containers auf der Seite geändert wird, jedoch wird das Dokument innerhalb des Containers visuell skaliert, um zu passen. Die gemeldete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

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
