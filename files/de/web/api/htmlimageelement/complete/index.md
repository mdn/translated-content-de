---
title: "HTMLImageElement: complete Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Das schreibgeschützte Attribut **`complete`** der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ist ein Boolescher Wert, der angibt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Bild vollständig geladen ist; andernfalls ist der Wert `false`.

Das Bild gilt als vollständig geladen, wenn eine der folgenden Bedingungen zutrifft:

- Weder das Attribut [`src`](/de/docs/Web/HTML/Element/img#src) noch [`srcset`](/de/docs/Web/HTML/Element/img#srcset) ist angegeben.
- Das Attribut `srcset` fehlt, und das Attribut `src`, obwohl angegeben, ist der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und zur Darstellung/Komposition bereitgestellt.
- Das Bildelement hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "defekt"; das heißt, das Laden des Bildes ist aufgrund eines Fehlers fehlgeschlagen oder weil das Laden von Bildern deaktiviert ist.

Es ist erwähnenswert, dass sich der Wert von `complete` ändern kann, während Ihr Skript ausgeführt wird, da das Bild möglicherweise asynchron empfangen wird.

## Beispiele

Betrachten Sie eine Fotobibliotheks-App, die die Möglichkeit bietet, Bilder in einem Lightbox-Modus zu öffnen, um die Betrachtung sowie die Bearbeitung des Bildes zu verbessern. Diese Fotos können sehr groß sein, daher möchten Sie nicht darauf warten, dass sie geladen werden. Ihr Code verwendet also `async`/`await`, um die Bilder im Hintergrund zu laden.

Stellen Sie sich jedoch vor, dass Sie anderen Code haben, der nur ausgeführt werden soll, wenn das Bild vollständig geladen ist, wie zum Beispiel ein Befehl, der die Entfernung des Rote-Augen-Effekts auf das Bild im Lightbox-Modus durchführt. Während dieser Befehl idealerweise nicht ausgeführt würde, wenn das Bild nicht vollständig geladen ist, möchten Sie für verbesserte Zuverlässigkeit sicherstellen, dass dies der Fall ist.

Die Funktion `fixRedEyeCommand()`, die durch die Schaltfläche für die Entfernung des Rote-Augen-Effekts aufgerufen wird, überprüft den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor sie versucht, ihre Arbeit zu verrichten. Dies wird im folgenden Code demonstriert.

```js
let lightboxElem = document.querySelector("#lightbox");
let lightboxImgElem = lightboxElem.querySelector("img");
let lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://somesite.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}

// …

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* can't start doing this until the image is fully loaded */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
