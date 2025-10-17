---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung bauen Sie ein Element, das Sie auf vielen Websites sehen — eine JavaScript-gesteuerte Bildergalerie. Währenddessen wird Ihr Wissen über Schleifen, Funktionen, Bedingungen, Ereignisse, DOM-Scripting und Objektgrundlagen getestet.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Taste in einem der Code-Panels unten, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die JavaScript-Funktionalität zu vervollständigen.

Das HTML sieht so aus:

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

Wir haben das Galerie-CSS der Kürze halber versteckt, aber Sie können es sehen, wenn Sie die App im MDN Playground ansehen.

## Projektbeschreibung

Ihnen wurden einige HTML-, CSS- und wenige Zeilen JavaScript-Code bereitgestellt. Ihre Aufgabe ist es, den folgenden Anweisungen zu folgen und das notwendige JavaScript zu schreiben, um dies in eine funktionierende Bildergalerie zu verwandeln.

Die Galerie besteht aus einem großen Bild und einer Reihe von Thumbnails. Wenn ein Thumbnail angeklickt wird oder über die Tabulatortaste fokussiert und <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird, sollte dieses Thumbnail als großes Bild angezeigt werden. Das relevante `<img>`-Element sollte ebenfalls mit dem korrekten `alt`-Text aktualisiert werden.

In der oberen linken Ecke gibt es eine Schaltfläche, die, wenn sie wiederholt gedrückt wird, das große Bild zwischen einem dunkleren und einem helleren Farbton umschaltet, indem die Transparenz eines `<div>`-Elements geändert wird, das über das große Bild gelegt wurde.

Die Bilder, die Sie im Beispiel einfügen müssen, und ihre erforderlichen `alt`-Texte sind wie folgt:

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): "Nahaufnahme eines menschlichen Auges".
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): "Fels, der wie eine Welle aussieht".
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): "Lila und weiße Stiefmütterchen".
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): "Teil einer Wand aus dem Grab eines Pharaos".
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): "Großes Nachtfalter auf einem Blatt".

### Erstellen eines Datenobjekts

Zuerst möchten wir, dass Sie ein Array von Objekten namens `images` deklarieren. Jedes Objekt sollte zwei Eigenschaften enthalten:

- `filename`: Der Name der Bilddatei (nicht die vollständige URL).
- `alt`: Der `alt`-Text des Bildes.

### Fügen Sie die Bilder zur Thumbnail-Leiste hinzu

Als nächstes möchten wir, dass Sie durch die `images` iterieren und einige DOM-Scripting-Methoden verwenden, um alle über `<img>`-Elemente auf der Seite einzubetten. Sie sollten als Kinder des `<div>`-Elements mit der Klasse `thumb-bar` enthalten sein, die wir bereits in der Konstante `thumbBar` referenziert haben.

1. Erstellen Sie eine Konstante namens `baseURL`, die die Basis-URL jeder Bilddatei enthält (alle Teile der URL ohne den Dateinamen).
2. Erstellen Sie eine `for ... of`-Schleife, um durch die `images` zu iterieren.
3. Erstellen Sie für jedes Bild ein neues `<img>`-Element.
4. Setzen Sie die Quelle des `<img>` gleich der URL des Bildes, die eine Kombination aus `baseURL` und `filename` sein sollte, und das `alt`-Attribut gleich dem `alt`-Text.
5. Fügen Sie dem `<img>` ein weiteres Attribut hinzu, um es über die Tastatur fokussierbar zu machen.
6. Fügen Sie das `<img>` zur `thumbBar` hinzu.
7. Fügen Sie ein `click`-Ereignishandler zum `<img>` hinzu, sodass bei einem Klick eine Funktion namens `updateDisplayedImage()` ausgeführt wird, die das geklickte Bild in voller Größe anzeigt. Diese Funktion werden Sie später erstellen.
8. Fügen Sie einen weiteren Ereignishandler zum `<img>` hinzu, sodass das fokussierte Bild bei Tastaturfokus in voller Größe angezeigt werden kann, indem die <kbd>Enter</kbd>/<kbd>Return</kbd>-Taste (und keine andere Taste) gedrückt wird. Dies ist ein erweitertes Ziel, das etwas Recherche benötigt.

### Erstellen der Funktion `updateDisplayedImage()`

Nun ist es Zeit, die Funktion zu erstellen, um ein aktiviertes Thumbnail in voller Größe anzuzeigen. Wir haben eine Referenz zum alltäglichen `<img>`-Element in der Konstante `displayedImage` gespeichert.

1. Definieren Sie die Funktion `updateDisplayedImage()`.
2. Im Funktionskörper setzen Sie die Quelle des `displayedImage` gleich der Quelle des aktivierten `<img>`.
3. Setzen Sie den `alt`-Text des `displayedImage` gleich dem `alt`-Text des aktivierten `<img>`.

### Verkabeln Sie die Dunkel-/Hell-Schaltfläche

Wir haben eine Referenz zur "Dunkel-/Hell"-`<button>`-Schaltfläche in der Konstante `btn` gespeichert und eine Referenz zum durchsichtigen `<div>`, das wir über das Bild in voller Größe gelegt haben, in der Konstante `overlay`. Wir möchten, dass Sie:

1. Fügen Sie einen `click`-Ereignishandler zur `<button>`-Schaltfläche mit einer anonymen Funktion als Handler-Funktion hinzu.
2. Im Funktionskörper fügen Sie eine Bedingungsstruktur hinzu, die testet, ob die `<button>`-Schaltfläche eine `class` von `dark` gesetzt hat oder nicht.
3. Wenn die `<button>`-Schaltfläche beim Klick eine `class` von `dark` hat, ändern Sie ihren Textinhalt zu `Lighten` und die Hintergrundfarbe des `overlay`-Elements zu `rgb(0 0 0 / 0.5)`. Entfernen Sie die `dark`-Klasse des `<button>`-Elements.
4. Wenn die `<button>`-Schaltfläche _keine_ `class` von `dark` hat, ändern Sie ihren Textinhalt zu `Darken` und die Hintergrundfarbe des `overlay`-Elements zu `rgb(0 0 0 / 0)`. Fügen Sie die `dark`-Klasse des `<button>`-Elements hinzu.
5. Können Sie eine Möglichkeit finden, die `dark`-Klasse mit einer einzigen Codezeile zu wechseln, die nach der Bedingungsstruktur ausgeführt wird? Dies ist ein weiteres erweitertes Ziel, aber versuchen Sie es.

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

// Solution: Create a data object

const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];

// Solution: Loop through the images

// Create a baseURL constant containing the baseURL of the images
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Loop through the images using a for...of loop
for (const image of images) {
  // Create a new image element
  const newImage = document.createElement("img");
  // Set the source and alt text for the image
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // Make the image focusable via the keyboard
  newImage.tabIndex = "0";
  // Append the image as a child of the thumbBar
  thumbBar.appendChild(newImage);
  // Update the display to show the image full size when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // Update the display to show the image full size when the "Enter" key
  // is pressed after it has been focused
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// Solution: Create the updateDisplayedImage() function

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// Solution: Wire up the Darken/Lighten button

// Add a click event listener on the button
btn.addEventListener("click", () => {
  // If the button has a "dark" class set,
  // change text to "Lighten" and make the overlay darker
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Else, change text to "Darken" and make
    // the overlay lighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
