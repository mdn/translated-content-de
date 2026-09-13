---
title: "HTMLFencedFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`height`**-Eigenschaft des [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement) ruft den Wert des entsprechenden {{htmlelement("fencedframe")}}-`height`-Attributs ab und setzt diesen, welches die Höhe des Elements angibt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des [`config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen ändert das Ändern der [`width`](/de/docs/Web/API/HTMLFencedFrameElement/width) oder `height` des `<fencedframe>` die Größe des eingebetteten Containers auf der Seite, aber das Dokument innerhalb des Containers wird visuell skaliert, um zu passen. Die berichtete Breite und Höhe des eingebetteten Dokuments (d.h. [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)) bleiben unverändert.

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
