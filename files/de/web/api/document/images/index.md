---
title: "Document: images-Eigenschaft"
short-title: images
slug: Web/API/Document/images
l10n:
  sourceCommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{APIRef("DOM")}}

Die **`images`** schreibgeschützte Eigenschaft des {{domxref("Document")}} Interfaces gibt eine [Kollektion](/de/docs/Web/API/HTMLCollection) der [Bilder](/de/docs/Web/API/HTMLImageElement) im aktuellen HTML-Dokument zurück.

## Wert

Eine {{domxref("HTMLCollection")}}, die eine Live-Liste aller im aktuellen Dokument enthaltenen Bilder bereitstellt.
Jeder Eintrag in der Kollektion ist ein {{domxref("HTMLImageElement")}}, das ein einzelnes Bild-Element darstellt.

## Verwendungshinweise

Sie können entweder die JavaScript-Array-Notation oder die {{domxref("HTMLCollection.item", "item()")}}-Methode auf der zurückgegebenen Kollektion verwenden, um auf die Elemente in der Kollektion zuzugreifen.
Die folgenden Beispiele sind gleichwertig:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Beispiele

Dieses Beispiel durchsucht die Liste der Bilder und findet diejenigen mit dem Namen `"banner.gif"`.

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
