---
title: "Document: images-Eigenschaft"
short-title: images
slug: Web/API/Document/images
l10n:
  sourceCommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{APIRef("DOM")}}

Die schreibgeschützte **`images`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine [Sammlung](/de/docs/Web/API/HTMLCollection) der [Bilder](/de/docs/Web/API/HTMLImageElement) im aktuellen HTML-Dokument zurück.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine Live-Liste aller Bilder im aktuellen Dokument bereitstellt.
Jeder Eintrag in der Sammlung ist ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), das ein einzelnes Bildelement darstellt.

## Verwendungshinweise

Sie können entweder die JavaScript-Array-Notation oder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode auf der zurückgegebenen Sammlung verwenden, um auf die Elemente in der Sammlung zuzugreifen.
Die folgenden sind gleichwertig:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Beispiele

Dieses Beispiel durchsucht die Liste von Bildern und findet diejenigen, die den Namen `"banner.gif"` haben.

```js
for (const image of document.images) {
  if (image.src === "banner.gif") {
    console.log("Found the banner");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
