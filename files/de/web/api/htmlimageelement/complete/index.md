---
title: "HTMLImageElement: complete-Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Das schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface hat ein
Boolean-Attribut namens **`complete`**, das angibt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild vollständig geladen ist; andernfalls ist der Wert `false`.

Das Bild gilt als vollständig geladen, wenn eines der folgenden Kriterien zutrifft:

- Weder das [`src`](/de/docs/Web/HTML/Element/img#src)- noch das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut ist angegeben.
- Das `srcset`-Attribut fehlt und das `src`-Attribut ist, obwohl es angegeben wurde, der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und zur Darstellung/Komposition in die Warteschlange gestellt.
- Das Bildelement hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "defekt"; das heißt, das Bild ist aufgrund eines Fehlers oder weil das Laden von Bildern deaktiviert ist, nicht geladen.

Es ist wichtig zu beachten, dass sich der Wert von `complete` ändern kann, während Ihr Skript ausgeführt wird, da das Bild möglicherweise asynchron empfangen wird.

## Beispiele

Stellen Sie sich eine Foto-Bibliotheks-App vor, die die Möglichkeit bietet, Bilder in einem Lightbox-Modus zu öffnen, um so eine verbesserte Anzeige sowie Bearbeitung des Bildes zu ermöglichen. Diese Fotos können sehr groß sein, sodass Sie nicht darauf warten möchten, dass sie geladen werden. Daher verwendet Ihr Code `async`/`await`, um die Bilder im Hintergrund zu laden.

Aber stellen Sie sich vor, Sie haben anderen Code, der nur ausgeführt werden soll, wenn das Bild das Laden abgeschlossen hat, z. B. ein Befehl, der die Entfernung von roten Augen im Bild im Lightbox-Modus durchführt. Auch wenn idealerweise dieser Befehl nicht einmal ausgeführt werden sollte, wenn das Bild nicht vollständig geladen ist, möchten Sie aus Gründen der Zuverlässigkeit sicherstellen, dass dies der Fall ist.

Also überprüft die Funktion `fixRedEyeCommand()`, die vom Knopf aufgerufen wird, der die Entfernung der roten Augen auslöst, den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor sie ihre Arbeit beginnt. Dies wird im folgenden Code gezeigt.

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
