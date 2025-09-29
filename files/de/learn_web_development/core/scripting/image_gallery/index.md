---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden Sie eine ziemlich häufig anzutreffende Komponente erstellen, die Sie auf vielen Websites finden werden — eine JavaScript-gestützte Bildergalerie. Auf dem Weg dorthin werden Sie in Ihrem Wissen über Schleifen, Funktionen, Bedingungsabfragen, Ereignisse, DOM-Scripting und Grundlagen von Objekten getestet.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Sie folgen dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität zu vervollständigen.

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

Der anfängliche JavaScript-Code sieht so aus:

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
  border: 0;
  background: rgb(150 150 150 / 0.6);
  border: 1px solid #999;
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

Wir haben das CSS der Galerie aus Gründen der Kürze ausgeblendet, aber Sie können es sehen, wenn Sie die App im MDN Playground betrachten.

## Projektbeschreibung

Ihnen wurden einige HTML-, CSS- und ein paar Zeilen JavaScript-Code zur Verfügung gestellt. Ihre Aufgabe ist es, den folgenden Anweisungen zu folgen und das notwendige JavaScript zu schreiben, um dies in eine funktionierende Bildergalerie zu verwandeln.

Die Galerie wird aus einem großen Bild und einer Reihe von Thumbnails bestehen. Wenn ein Thumbnail angeklickt oder über die Tastatur fokussiert und <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird, sollte dieses Thumbnail als großes Bild angezeigt werden. Das entsprechende `<img>`-Element sollte auch mit dem richtigen `alt`-Text aktualisiert werden.

In der oberen linken Ecke befindet sich ein Button, der beim wiederholten Drücken das große Bild zwischen einem dunkleren und einem helleren Farbton umschaltet. Dies wird erreicht, indem die Transparenz eines `<div>`-Elements geändert wird, das über das große Bild gelegt wurde.

Die Bilder, die Sie in das Beispiel einbetten müssen, und der erforderliche `alt`-Text sind wie folgt:

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): "Nahaufnahme eines menschlichen Auges".
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): "Felsen, der wie eine Welle aussieht".
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): "Lila und weiße Stiefmütterchen".
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): "Abschnitt der Wand eines Pharaonengrabes".
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): "Großer Falter auf einem Blatt".

### Erstellen Sie ein Datenobjekt

Zuerst möchten wir, dass Sie ein Array von Objekten namens `images` deklarieren. Jedes Objekt sollte zwei Eigenschaften enthalten:

- `filename`: Der Name der Bilddatei (nicht die vollständige URL).
- `alt`: Der `alt`-Text des Bildes.

### Fügen Sie die Bilder zur Thumbnail-Leiste hinzu

Als nächstes möchten wir, dass Sie die `images` durchlaufen und mithilfe von DOM-Scripting alle auf der Seite über `<img>`-Elemente einbetten. Sie sollten als Kinder des `<div>`-Elements mit der Klasse `thumb-bar` enthalten sein, das wir bereits in der Konstante `thumbBar` referenziert haben.

1. Erstellen Sie eine Konstante namens `baseURL`, die die Basis-URL jeder Bilddatei enthält (die gesamte URL ohne den Dateinamen).
2. Erstellen Sie eine `for ... of`-Schleife, um durch die `images` zu laufen.
3. Für jedes Bild erstellen Sie ein neues `<img>`-Element.
4. Setzen Sie die `<img>`-Quelle auf die URL des Bildes, die eine Kombination aus `baseURL` und dem `filename` sein sollte, und das `alt`-Attribut auf den `alt`-Text.
5. Fügen Sie dem `<img>` ein weiteres Attribut hinzu, um es über die Tastatur fokussierbar zu machen.
6. Fügen Sie das `<img>` der `thumbBar` hinzu.
7. Fügen Sie einen `click`-Ereignishandler dem `<img>` hinzu, so dass beim Klicken eine Funktion namens `updateDisplayedImage()` ausgeführt wird, die das angeklickte Bild in voller Größe anzeigt. Sie werden diese Funktion später erstellen.
8. Fügen Sie ein weiteres Ereignishandler dem `<img>` hinzu, so dass, wenn es über die Tastatur fokussiert wird, das angeklickte Bild in voller Größe angezeigt werden kann, indem die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste gedrückt wird (und keine andere Taste). Dies ist ein erweitertes Ziel, das ein wenig Recherche erfordert.

### Erstellen Sie die `updateDisplayedImage()` Funktion

Jetzt ist es an der Zeit, die Funktion zu erstellen, um ein aktiviertes Thumbnail in voller Größe anzuzeigen. Wir haben eine Referenz zum großen `<img>`-Element in der Konstante `displayedImage` gespeichert.

1. Definieren Sie die `updateDisplayedImage()` Funktion.
2. Setzen Sie im Funktionskörper die Quelle des `displayedImage` auf die Quelle des `<img>`, das aktiviert wurde.
3. Setzen Sie den `alt`-Text des `displayedImage` auf den `alt`-Text des `<img>`, das aktiviert wurde.

### Verkabeln Sie den Button "Abdunkeln/Aufhellen"

Wir haben eine Referenz zur "Abdunkeln/Aufhellen" `<button>`-Schaltfläche in der Konstante `btn` gespeichert und eine Referenz zum transparenten `<div>`, das wir über das große `<img>` gelegt haben, in der Konstante `overlay`. Wir möchten, dass Sie:

1. Einen `click`-Ereignishandler zur `<button>` mit einer anonymen Funktion als Handler-Funktion hinzufügen.
2. Innerhalb des Funktionskörpers eine bedingte Struktur hinzufügen, die testet, ob die `<button>`-Schaltfläche eine `class` von `dark` hat oder nicht.
3. Wenn die `<button>`-Schaltfläche beim Klicken eine `class` von `dark` hat, ändern Sie ihren Textinhalt zu `Aufhellen` und ändern Sie die Hintergrundfarbe des `overlay`-Elements zu `rgb(0 0 0 / 0.5)`. Entfernen Sie die `dark`-Klasse der `<button>`-Schaltfläche.
4. Wenn die `<button>`-Schaltfläche _keine_ `class` von `dark` hat, ändern Sie ihren Textinhalt zu `Abdunkeln` und ändern Sie die Hintergrundfarbe des `overlay`-Elements zu `rgb(0 0 0 / 0)`. Fügen Sie die `dark`-Klasse der `<button>`-Schaltfläche hinzu.
5. Können Sie sich überlegen, wie man die `dark`-Klasse mit einer einzigen Codezeile nach der bedingten Struktur umschaltet? Dies ist ein weiteres erweitertes Ziel, aber versuchen Sie es.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS nicht ändern.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("gallery-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige JavaScript sollte ungefähr so aussehen:

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
