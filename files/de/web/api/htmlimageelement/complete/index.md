---
title: "HTMLImageElement: complete Eigenschaft"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Das schreibgeschützte Attribut **`complete`** der
{{domxref("HTMLImageElement")}}-Schnittstelle ist ein Boolean-Wert, der angibt, ob das Bild vollständig geladen ist oder nicht.

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild vollständig geladen ist; andernfalls ist der Wert `false`.

Das Bild gilt als vollständig geladen, wenn eines der folgenden Kriterien erfüllt ist:

- Weder das [`src`](/de/docs/Web/HTML/Element/img#src)- noch das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut ist angegeben.
- Das `srcset`-Attribut fehlt, und das `src`-Attribut, obwohl angegeben, ist der leere String (`""`).
- Die Bildressource wurde vollständig abgerufen und steht zur Darstellung/Komposition bereit.
- Das Bildelement hat zuvor festgestellt, dass das Bild vollständig verfügbar und einsatzbereit ist.
- Das Bild ist "defekt"; das heißt, das Bild konnte aufgrund eines Fehlers oder weil das Laden von Bildern deaktiviert ist, nicht geladen werden.

Es ist wichtig zu beachten, dass sich der Wert von `complete` ändern kann, während Ihr Skript ausgeführt wird, da das Bild möglicherweise asynchron empfangen wird.

## Beispiele

Angenommen, Sie haben eine Fotobibliothek-App, die die Möglichkeit bietet, Bilder in einem Lightbox-Modus zur verbesserten Ansicht sowie zum Bearbeiten des Bildes zu öffnen. Diese Fotos können sehr groß sein, daher möchten Sie nicht auf deren Laden warten, sodass Ihr Code `async`/`await` verwendet, um die Bilder im Hintergrund zu laden.

Stellen Sie sich jedoch vor, Sie haben anderen Code, der nur ausgeführt werden muss, wenn das Bild vollständig geladen ist, wie ein Befehl, der rote Augen aus dem Bild in der Lightbox entfernt. Idealerweise sollte dieser Befehl nicht einmal ausgeführt werden, wenn das Bild noch nicht vollständig geladen ist. Zur Verbesserung der Zuverlässigkeit möchten Sie jedoch sicherstellen, dass dies der Fall ist.

Daher überprüft die Funktion `fixRedEyeCommand()`, die durch den Knopf, der die rote Augeen-Entfernung auslöst, aufgerufen wird, den Wert der `complete`-Eigenschaft des Lightbox-Bildes, bevor sie ihre Aufgabe ausführt. Dies wird im folgenden Code demonstriert.

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
    /* kann erst gestartet werden, wenn das Bild vollständig geladen ist */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
