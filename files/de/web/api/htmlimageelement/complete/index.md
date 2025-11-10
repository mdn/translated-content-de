---
title: "HTMLImageElement: complete-Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`complete`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein boolescher Wert, der angibt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein boolescher Wert, der `true` ist, wenn das Bild vollständig geladen ist; andernfalls ist der Wert `false`.

Das Bild gilt als vollständig geladen, wenn eine der folgenden Bedingungen zutrifft:

- Weder das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)- noch das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut ist angegeben.
- Das `srcset`-Attribut fehlt, und das `src`-Attribut, obwohl spezifiziert, ist der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und wurde zur Anzeige/Komposition eingereiht.
- Das Bildelement hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "defekt"; das heißt, das Bild konnte aufgrund eines Fehlers nicht geladen werden oder das Laden von Bildern ist deaktiviert.

Es ist wichtig zu beachten, dass sich der Wert von `complete` ändern kann, während Ihr Skript läuft, da das Bild möglicherweise asynchron empfangen wird.

## Beispiele

### Funktionen nur bei geladenen Bildern ausführen

Stellen Sie sich eine Fotobibliotheks-App vor, die die Möglichkeit bietet, Bilder im Lightbox-Modus für eine verbesserte Ansicht sowie zur Bearbeitung des Bildes zu öffnen. Diese Fotos können sehr groß sein, sodass Sie nicht darauf warten möchten, dass sie geladen werden. Ihr Code verwendet `async`/`await`, um die Bilder im Hintergrund zu laden.

Aber stellen Sie sich vor, Sie haben anderen Code, der nur ausgeführt werden muss, wenn das Bild vollständig geladen ist, wie ein Befehl, der eine Rote-Augen-Korrektur auf das Bild im Lightbox-Modus anwendet. Idealerweise würde dieser Befehl nicht einmal ausgeführt werden, wenn das Bild nicht vollständig geladen ist. Zur Verbesserung der Zuverlässigkeit möchten Sie sicherstellen, dass dies der Fall ist.

Also überprüft die Funktion `fixRedEyeCommand()`, die durch den Knopf ausgelöst wird, der die Rote-Augen-Korrektur anstößt, den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor sie ihre Arbeit verrichtet. Dies wird im unten stehenden Code demonstriert.

```js
const lightboxElem = document.querySelector("#lightbox");
const lightboxImgElem = lightboxElem.querySelector("img");
const lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://some-site.net/huge-image.jpg", lightboxImgElem);
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
