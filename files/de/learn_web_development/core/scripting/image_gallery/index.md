---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie aufgefordert, ein recht häufiges Element zu erstellen, das Sie auf vielen Websites sehen werden – eine JavaScript-gesteuerte Bildergalerie. Dabei wird Ihr Wissen über Schleifen, Funktionen, Bedingungen, Ereignisse, DOM-Scripting und Objektgrundlagen getestet.

## Ausgangspunkt

Klicken Sie zunächst auf die **Play**-Schaltfläche in einem der Code-Felder unten, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Sie folgen dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität abzuschließen.

Das HTML sieht folgendermaßen aus:

```html live-sample___gallery-start live-sample___gallery-finish
<h1>Image gallery example</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg"
    alt="Closeup of a human eye" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

Das anfängliche JavaScript sieht so aus:

```js live-sample___gallery-start
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Declare an array of objects containing image file names & alt text

// 2. Loop through the images

// 3. Create the updateDisplayedImage() function

// 4. Wire up the Darken/Lighten button
```

{{EmbedLiveSample("gallery-start", "100%", 700)}}

```css hidden live-sample___gallery-start live-sample___gallery-finish
body {
  font-family: sans-serif;
  width: 640px;
  margin: 0 auto;
  background-color: lightgray;
}

h1 {
  text-align: center;
}

.full-img {
  position: relative;
  display: block;
  width: 640px;
  height: 480px;
  margin-bottom: 2px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 640px;
  height: 480px;
}

button {
  background: rgb(150 150 150 / 0.6);
  border: 1px solid #999999;
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 2px;
}

button:hover,
button:focus {
  color: rgb(150 150 150 / 1);
  background-color: black;
}

.thumb-bar {
  display: flex;
  gap: 2px;
  cursor: pointer;
}

.thumb-bar img {
  display: block;
  width: 100px;
  flex: 1;
}

.thumb-bar img:hover,
.thumb-bar img:focus {
  outline: 2px solid blue;
}
```

Wir haben das Galerie-CSS aus Gründen der Kürze versteckt, aber Sie können es sehen, wenn Sie die App im MDN Playground ansehen.

## Projektbeschreibung

Ihnen wurden einige HTML-, CSS- und ein paar Zeilen JavaScript-Code bereitgestellt. Ihre Aufgabe ist es, die folgenden Anweisungen zu befolgen und das erforderliche JavaScript zu schreiben, um daraus eine funktionierende Bildergalerie zu machen.

Die Galerie wird aus einem großen Bild und einer Reihe von Thumbnails bestehen. Wenn auf ein Thumbnail geklickt oder mit der Tabulatortaste darauf fokussiert und <kbd>Enter</kbd>/<kbd>Return</kbd> dann gedrückt wird, sollte dieses Thumbnail als großes Bild angezeigt werden. Auch das relevante `<img>`-Element sollte mit dem korrekten `alt`-Text aktualisiert werden.

In der oberen linken Ecke befindet sich eine Schaltfläche, die bei wiederholtem Drücken das große Bild zwischen einer dunkleren und einer helleren Tönung umschaltet, indem die Transparenz eines `<div>`-Elements geändert wird, das über das große Bild gelegt wurde.

Die Bilder, die Sie im Beispiel einbetten müssen, und deren erforderlicher `alt`-Text lauten wie folgt:

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): "Nahaufnahme eines menschlichen Auges".
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): "Fels, der wie eine Welle aussieht".
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): "Lila und weiße Stiefmütterchen".
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): "Ausschnitt aus einer Wand im Grab eines Pharaos".
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): "Große Motte auf einem Blatt".

### Erstellen Sie ein Datenobjekt

Zuallererst möchten wir, dass Sie ein Array von Objekten mit dem Namen `images` deklarieren. Jedes Objekt sollte zwei Eigenschaften enthalten:

- `filename`: Der Name der Bilddatei (nicht die vollständige URL).
- `alt`: Der `alt`-Text des Bildes.

### Fügen Sie die Bilder zur Thumbnail-Leiste hinzu

Als Nächstes möchten wir, dass Sie durch die `images` iterieren und einige DOM-Scripts verwenden, um sie alle über `<img>`-Elemente auf der Seite einzubinden. Sie sollten als Kinder des `<div>`-Elements mit der Klasse `thumb-bar` enthalten sein, das wir bereits in der Konstante `thumbBar` referenziert haben.

1. Erstellen Sie eine Konstante namens `baseURL`, die die Basis-URL jeder Bilddatei enthält (die gesamte URL ohne den Dateinamen).
2. Erstellen Sie eine `for ... of` Schleife, um durch die `images` zu iterieren.
3. Erstellen Sie für jedes Bild ein neues `<img>`-Element.
4. Legen Sie die `<img>`-Quelle so fest, dass sie der URL des Bildes entspricht, die eine Kombination aus `baseURL` und dem `filename` sein sollte, und das `alt`-Attribut dem `alt`-Text entspricht.
5. Fügen Sie dem `<img>` ein weiteres Attribut hinzu, um es über die Tastatur fokussierbar zu machen.
6. Fügen Sie das `<img>` an die `thumbBar` an.
7. Fügen Sie einen `click`-Ereignishandler zum `<img>` hinzu, sodass beim Klicken eine Funktion namens `updateDisplayedImage()` ausgeführt wird, die das geklickte Bild in voller Größe anzeigt. Diese Funktion werden Sie später erstellen.
8. Fügen Sie einen weiteren Ereignishandler zum `<img>` hinzu, sodass, sobald es über die Tastatur fokussiert ist, das geklickte Bild durch Drücken der <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste (und keiner anderen Taste) in voller Größe angezeigt werden kann. Dies ist ein erweitertes Ziel, das einige Recherchen erfordert.

### Erstellen Sie die Funktion `updateDisplayedImage()`

Nun ist es Zeit, die Funktion zu erstellen, die ein aktiviertes Thumbnail in voller Größe anzeigt. Wir haben einen Verweis auf das `<img>`-Element in voller Größe in der Konstante `displayedImage` gespeichert.

1. Definieren Sie die Funktion `updateDisplayedImage()`.
2. Setzen Sie im Funktionskörper den `displayedImage`-Quellcode so, dass er dem Quellcode des aktivierten `<img>`-Elements entspricht.
3. Setzen Sie den `displayedImage`-Alt-Text so, dass er dem Alt-Text des aktivierten `<img>`-Elements entspricht.

### Verdrahten Sie die Schaltfläche „Abdunkeln/Aufhellen“

Wir haben einen Verweis auf den `<button>` "Abdunkeln/Aufhellen" in der Konstanten `btn` gespeichert und einen Verweis auf das durchsichtige `<div>`, das wir über das `<img>`-Element in voller Größe gelegt haben, in der Konstanten `overlay`. Wir möchten, dass Sie:

1. Einen `click`-Ereignishandler zum `<button>` mit einer anonymen Funktion als Handlerfunktion hinzufügen.
2. Im Funktionskörper eine Bedingungsstruktur hinzufügen, die testet, ob das `<button>` eine `class` von `dark` hat oder nicht.
3. Wenn das `<button>` eine `class` von `dark` hat, wenn geklickt wird, ändern Sie den Textinhalt in `Aufhellen` und ändern die Hintergrundfarbe des `overlay`-Elements auf `rgb(0 0 0 / 0.5)`. Entfernen Sie die `dark`-Klasse des `<button>`-Elements.
4. Wenn das `<button>` _keine_ `class` von `dark` hat, wenn geklickt wird, ändern Sie den Textinhalt auf `Abdunkeln` und ändern die Hintergrundfarbe des `overlay`-Elements auf `rgb(0 0 0 / 0)`. Fügen Sie die `dark`-Klasse des `<button>`-Elements hinzu.
5. Können Sie sich eine Möglichkeit vorstellen, die `dark`-Klasse mit einer einzigen Codezeile umschaltbar zu machen, die nach der Bedingungsstruktur ausgeführt wird? Dies ist ein weiteres erweitertes Ziel, aber versuchen Sie es.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS nicht ändern.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("gallery-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte in etwa so aussehen:

```js live-sample___gallery-finish
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 1. Declare an array of objects containing image file names & alt text

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// 2. Loop through the images

// 2a. Create a baseURL constant containing the baseURL of the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// 2b. Loop through the images using a for...of loop
for (const image of images) {
  // 2c. Create a new image element
  const newImage = document.createElement("img");
  // 2d. Set the source and alt text for the image
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // 2e. Make the image focusable via the keyboard
  newImage.tabIndex = "0";
  // 2f. Append the image as a child of the thumbBar
  thumbBar.appendChild(newImage);
  // 2g. Update the display to show the image fullsize when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // 2h. Update the display to show the image fullsize when the "Enter" key
  // is pressed after it has been focused
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// 3. Create the updateDisplayedImage() function

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// 4. Wire up the Darken/Lighten button

// 4a. Add a click event listener on the button
btn.addEventListener("click", () => {
  // 4b. If the button has a "dark" class set,
  // change text to "Lighten" and make the overlay darker
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // 4b. Else, change text to "Darken" and make
    // the overlay lighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // 4c. Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
