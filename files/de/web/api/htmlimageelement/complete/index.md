---
title: "HTMLImageElement: complete-Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das schreibgeschützte Attribut **`complete`** der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ist ein Boolean-Wert, der anzeigt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild vollständig geladen wurde; andernfalls ist der Wert `false`.

Ein Bild gilt als vollständig geladen, wenn eine der folgenden Bedingungen zutrifft:

- Weder das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) noch das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut ist angegeben.
- Das `srcset`-Attribut fehlt und das `src`-Attribut, obwohl angegeben, ist der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und ist zur Darstellung/Kompositierung eingereiht.
- Das Bild-Element hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "defekt", das heißt, das Bild konnte aufgrund eines Fehlers oder weil das Laden von Bildern deaktiviert ist, nicht geladen werden.

Es ist erwähnenswert, dass sich der Wert von `complete` ändern kann, während Ihr Skript ausgeführt wird, da das Bild möglicherweise asynchron empfangen wird.

## Beispiele

Betrachten Sie eine Fotobibliotheks-App, die die Möglichkeit bietet, Bilder in einem Lightbox-Modus für eine verbesserte Ansicht sowie zur Bearbeitung des Bildes zu öffnen. Diese Fotos können sehr groß sein, sodass Sie nicht warten möchten, bis sie geladen sind. Daher verwendet Ihr Code `async`/`await`, um die Bilder im Hintergrund zu laden.

Aber stellen Sie sich vor, Sie haben anderen Code, der nur ausgeführt werden muss, wenn das Bild vollständig geladen ist, wie ein Befehl, der eine Rote-Augen-Entfernung auf dem Bild in der Lightbox durchführt. Idealerweise sollte dieser Befehl nicht einmal ausgeführt werden, wenn das Bild nicht vollständig geladen ist. Für eine verbesserte Zuverlässigkeit möchten Sie jedoch sicherstellen, dass dies der Fall ist.

Die Funktion `fixRedEyeCommand()`, die durch die Schaltfläche aufgerufen wird, die die Rote-Augen-Entfernung auslöst, überprüft den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor sie ihre Arbeit ausführt. Dies wird im untenstehenden Code demonstriert.

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
