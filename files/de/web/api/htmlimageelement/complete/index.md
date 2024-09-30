---
title: "HTMLImageElement: complete-Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Das schreibgeschützte Attribut **`complete`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein Boolescher Wert, der angibt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Bild vollständig geladen ist; andernfalls hat der Wert den Wert `false`.

Das Bild wird als vollständig geladen betrachtet, wenn eines der folgenden Kriterien zutrifft:

- Weder das [`src`](/de/docs/Web/HTML/Element/img#src) noch das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut ist angegeben.
- Das `srcset`-Attribut fehlt und das `src`-Attribut, obwohl angegeben, ist der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und ist für das Rendering/Compositing vorbereitet.
- Das Bildelement hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "kaputt"; das heißt, das Bild konnte aufgrund eines Fehlers oder weil das Laden von Bildern deaktiviert ist, nicht geladen werden.

Es ist erwähnenswert, dass aufgrund des möglicherweise asynchronen Empfangs des Bildes sich der Wert von `complete` ändern kann, während Ihr Skript läuft.

## Beispiele

Betrachten Sie eine Fotobibliotheks-App, die die Möglichkeit bietet, Bilder in einem Lightbox-Modus für eine verbesserte Ansicht sowie zum Bearbeiten des Bildes zu öffnen. Diese Fotos können sehr groß sein, daher möchten Sie nicht darauf warten, dass sie geladen werden. Ihr Code verwendet `async`/`await`, um die Bilder im Hintergrund zu laden.

Aber stellen Sie sich vor, Sie haben einen anderen Code, der nur ausgeführt werden soll, wenn das Bild vollständig geladen ist, wie z.B. ein Befehl, der die Entfernung von roten Augen im Bild in der Lightbox durchführt. Idealerweise würde dieser Befehl nicht einmal ausgeführt werden, wenn das Bild nicht vollständig geladen ist. Zur Verbesserung der Zuverlässigkeit möchten Sie jedoch sicherstellen, dass dies der Fall ist.

Daher überprüft die `fixRedEyeCommand()`-Funktion, die durch die Schaltfläche ausgelöst wird, die die Entfernung von roten Augen startet, den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor versucht wird, ihre Arbeit auszuführen. Dies wird im untenstehenden Code demonstriert.

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
