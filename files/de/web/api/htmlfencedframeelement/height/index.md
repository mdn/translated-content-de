---
title: "HTMLFencedFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLFencedFrameElement/height
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`height`**-Eigenschaft des {{domxref("HTMLFencedFrameElement")}} ruft den Wert des entsprechenden {{htmlelement("fencedframe")}}-`height`-Attributs ab und setzt ihn, was die Höhe des Elements festlegt.

Die Größe des eingebetteten Inhalts kann durch interne `contentWidth`- und `contentHeight`-Eigenschaften des {{domxref("HTMLFencedFrameElement.config", "config")}}-Objekts des `<fencedframe>` festgelegt werden. In solchen Fällen bewirkt das Ändern der {{domxref("HTMLFencedFrameElement.width", "width")}} oder `height` des `<fencedframe>`, dass sich die Größe des eingebetteten Containers auf der Seite ändert, aber das Dokument im Container wird visuell skaliert, um zu passen. Die berichtete Breite und Höhe des eingebetteten Dokuments (d.h. {{domxref("Window.innerWidth")}} und {{domxref("Window.innerHeight")}}) bleiben unverändert.

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
