---
title: "Herausforderung: Bildergalerie"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

In dieser Herausforderung werden wir Sie dazu bringen, ein ziemlich häufiges Element zu erstellen, das Sie auf vielen Websites sehen werden — eine durch JavaScript gesteuerte Bildergalerie. Auf dem Weg dorthin werden Sie in Ihrem Wissen über Schleifen, Funktionen, Bedingungen, Ereignisse, DOM-Scripting und Objektgrundlagen geprüft.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektauftrag](#projektauftrag), um die JavaScript-Funktionalität zu vervollständigen.

Das HTML sieht wie folgt aus:

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

Wir haben das CSS der Galerie zur Kürze ausgeblendet, aber Sie können es sehen, wenn Sie die App im MDN Playground anschauen.

## Projektauftrag

Ihnen wurden einige HTML-, CSS- und wenige Zeilen JavaScript-Code bereitgestellt. Ihre Aufgabe ist es, den untenstehenden Anweisungen zu folgen und das notwendige JavaScript zu schreiben, um daraus eine funktionierende Bildergalerie zu machen.

Die Galerie wird aus einem großen Bild und einer Reihe von Miniaturansichten bestehen. Wenn eine Miniaturansicht angeklickt oder fokussiert und anschließend <kbd>Enter</kbd>/<kbd>Return</kbd> gedrückt wird, soll dieses Miniaturbild als großes Bild angezeigt werden. Das entsprechende `<img>`-Element sollte außerdem mit dem korrekten `alt`-Text aktualisiert werden.

In der oberen linken Ecke gibt es eine Schaltfläche, die bei wiederholtem Drücken das große Bild zwischen einem dunkleren und helleren Farbton umschaltet, indem die Transparenz eines überlagerten `<div>`-Elements geändert wird.

Die Bilder, die Sie in das Beispiel einbetten müssen, und ihr erforderlicher `alt`-Text sind wie folgt:

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): „Nahaufnahme eines menschlichen Auges“.
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): „Felsen, der wie eine Welle aussieht“.
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): „Lila und weiße Stiefmütterchen“.
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): „Abschnitt einer Wand aus dem Grab eines Pharaos“.
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): „Großer Falter auf einem Blatt“.

### Erstellen Sie ein Datenobjekt

Zuerst möchten wir, dass Sie ein Array von Objekten namens `images` deklarieren. Jedes Objekt sollte zwei Eigenschaften enthalten:

- `filename`: Der Name der Bilddatei (nicht die vollständige URL).
- `alt`: Der `alt`-Text des Bildes.

### Fügen Sie die Bilder zur Miniaturleiste hinzu

Als nächstes möchten wir, dass Sie die `images` durchlaufen und mit DOM-Scripting alle Bilder auf der Seite über `<img>`-Elemente einbetten. Sie sollten als Kinder des `<div>`-Elements mit der Klasse `thumb-bar` hinzugefügt werden, auf das wir bereits in der Konstante `thumbBar` verwiesen haben.

1. Erstellen Sie eine Konstante namens `baseURL`, die die Basis-URL jeder Bilddatei enthält (alles von der URL ohne den Dateinamen).
2. Erstellen Sie eine `for ... of` Schleife, um die `images` zu durchlaufen.
3. Erstellen Sie für jedes Bild ein neues `<img>`-Element.
4. Setzen Sie die Quelle des `<img>` auf die URL des Bildes, die eine Kombination aus `baseURL` und `filename` sein sollte, und das `alt` Attribut auf den `alt`-Text.
5. Fügen Sie dem `<img>` ein weiteres Attribut hinzu, damit es über die Tastatur fokussierbar ist.
6. Fügen Sie das `<img>` zur `thumbBar` hinzu.
7. Fügen Sie einen `click`-Ereignishandler zum `<img>` hinzu, sodass bei einem Klick eine Funktion namens `updateDisplayedImage()` ausgeführt wird, die das angeklickte Bild in voller Größe anzeigt. Diese Funktion erstellen Sie später.
8. Fügen Sie einen weiteren Ereignishandler zum `<img>` hinzu, sodass beim Fokussieren über die Tastatur und Drücken der <kbd>Enter</kbd>/<kbd>Return</kbd> Taste (und keiner anderen Taste) das angeklickte Bild in voller Größe angezeigt werden kann. Dies ist ein Stretch-Goal, das etwas Forschung erfordern wird.

### Erstellen Sie die `updateDisplayedImage()` Funktion

Jetzt ist es an der Zeit, die Funktion zu erstellen, die ein aktiviertes Thumbnail in voller Größe anzeigt. Wir haben eine Referenz auf das `<img>`-Element in voller Größe in der Konstanten `displayedImage` gespeichert.

1. Definieren Sie die `updateDisplayedImage()`-Funktion.
2. Setzen Sie innerhalb des Funktionskörpers die Quelle von `displayedImage` auf die Quelle des aktivierten `<img>`.
3. Setzen Sie den `alt`-Text von `displayedImage` auf den `alt`-Text des aktivierten `<img>`.

### Verkabeln Sie die Dunkel/Hell-Schaltfläche

Wir haben eine Referenz auf die "Dunkel/Hell"-Schaltfläche in der Konstante `btn` und eine Referenz auf das transparente `<div>`, das wir über das `<img>` in voller Größe gelegt haben, in der Konstante `overlay` gespeichert. Wir möchten, dass Sie:

1. Einen `click`-Ereignishandler zur Schaltfläche `<button>` mit einer anonymen Funktion als Handler hinzufügen.
2. Innerhalb des Funktionskörpers eine bedingte Struktur hinzufügen, die prüft, ob die Schaltfläche `<button>` eine `class` von `dark` hat oder nicht.
3. Wenn die Schaltfläche `<button>` beim Klicken die Klasse `dark` hat, ändern Sie ihren Textinhalt in `Lighten` und ändern Sie die Hintergrundfarbe des `overlay`-Elements in `rgb(0 0 0 / 0.5)`. Entfernen Sie die Klasse `dark` von der Schaltfläche `<button>`.
4. Wenn die Schaltfläche `<button>` _keine_ `class` von `dark` beim Klicken hat, ändern Sie ihren Textinhalt in `Darken` und ändern Sie die Hintergrundfarbe des `overlay`-Elements in `rgb(0 0 0 / 0)`. Fügen Sie die Klasse `dark` zur Schaltfläche `<button>` hinzu.
5. Können Sie sich eine Möglichkeit überlegen, die Klasse `dark` mit einer einzigen Codezeile zu toggeln, die nach der bedingten Struktur ausgeführt wird? Dies ist ein weiteres Stretch-Goal, aber versuchen Sie es.

## Hinweise und Tipps

- Sie müssen das HTML oder CSS nicht ändern.

## Beispiel

Ihre fertige App sollte wie das folgende Live-Beispiel funktionieren:

{{EmbedLiveSample("gallery-finish", "100%", 700)}}

<details>
<summary>Klicken Sie hier, um die Lösung zu sehen</summary>

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
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
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
  // 2g. Update the display to show the image full size when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // 2h. Update the display to show the image full size when the "Enter" key
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
