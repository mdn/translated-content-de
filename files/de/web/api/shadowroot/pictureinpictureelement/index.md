---
title: "ShadowRoot: pictureInPictureElement-Eigenschaft"
short-title: pictureInPictureElement
slug: Web/API/ShadowRoot/pictureInPictureElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft **`pictureInPictureElement`** der {{domxref("ShadowRoot")}}-Schnittstelle gibt das {{domxref("Element")}} zurück, das derzeit in diesem Shadow-Tree im Bild-in-Bild-Modus dargestellt wird, oder `null`, wenn der Bild-in-Bild-Modus derzeit nicht verwendet wird.

## Wert

Eine Referenz auf das {{domxref("Element")}}-Objekt, das sich derzeit im Bild-in-Bild-Modus befindet, oder, wenn der Bild-in-Bild-Modus vom Shadow-Tree derzeit nicht genutzt wird, der zurückgegebene Wert ist `null`.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pipElem = shadow.pictureInPictureElement;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Document.pictureInPictureElement")}}
