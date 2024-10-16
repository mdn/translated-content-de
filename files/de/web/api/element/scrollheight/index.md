---
title: "Element: scrollHeight-Eigenschaft"
short-title: scrollHeight
slug: Web/API/Element/scrollHeight
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

Die **`Element.scrollHeight`** schreibgeschützte Eigenschaft ist eine Messung der Höhe des Inhalts eines Elements, einschließlich des Inhalts, der aufgrund von Überlauf nicht auf dem Bildschirm sichtbar ist.

![Das Viewport des Nutzers ist ein Element mit vier Bereichen, die als padding-top, border-top, border-bottom und padding-bottom gekennzeichnet sind. Die Scrollhöhe erstreckt sich von der oberen Polsterung des Containers bis zum Ende der unteren Polsterung, weit über das obere und untere Ende des Viewports hinaus.](scrollheight.png)

Der `scrollHeight`-Wert entspricht der minimalen Höhe, die das Element benötigen würde, um den gesamten Inhalt ohne Verwendung einer vertikalen Scrollleiste im Viewport unterzubringen. Die Höhe wird auf die gleiche Weise gemessen wie [`clientHeight`](/de/docs/Web/API/Element/clientHeight): Sie schließt die Polsterung des Elements ein, nicht jedoch seinen Rand, Abstand oder eine horizontale Scrollleiste (falls vorhanden). Sie kann auch die Höhe von Pseudo-Elementen wie {{cssxref("::before")}} oder {{cssxref("::after")}} umfassen. Wenn der Inhalt des Elements ohne Bedarf für eine vertikale Scrollleiste passt, ist `scrollHeight` gleich [`clientHeight`](/de/docs/Web/API/Element/clientHeight)

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen gebrochenen Wert benötigen, verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect).

## Wert

Ein ganzzahliger Wert, der dem `scrollHeight`-Pixelwert des Elements entspricht.

## Probleme und Lösungen

### Bestimmen, ob ein Element vollständig gescrollt wurde

`scrollTop` ist eine nicht gerundete Zahl, während `scrollHeight` und `clientHeight` gerundet werden – daher ist der einzige Weg festzustellen, ob der Scrollbereich bis zum Ende gescrollt wurde, zu prüfen, ob der Scrollbetrag einem Schwellenwert nahe genug kommt (in diesem Beispiel `1`):

```js
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= 1;
```

Das Folgende wird _nicht_ immer funktionieren, da `scrollTop` Dezimalzahlen enthalten kann:

```js
element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight;
```

### Bestimmen, ob der Inhalt eines Elements überläuft

Diese Funktion gibt einen booleschen Wert zurück, der angibt, ob der Inhalt eines Elements seine Grenzen überschreitet:

```js
function isOverflowing(element) {
  return element.scrollHeight > element.clientHeight;
}
```

Dann möchten Sie möglicherweise prüfen, ob es in diesem Fall scrollbar ist:

```js
function isScrollable(element) {
  return (
    isOverflowing(element) &&
    ["scroll", "auto"].includes(window.getComputedStyle(element).overflowY)
  );
}
```

## Beispiele

### Überprüfen, dass der Nutzer einen Text gelesen hat

In Verbindung mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis kann diese Gleichwertigkeit nützlich sein, um festzustellen, ob ein Nutzer einen Text gelesen hat oder nicht (siehe auch die [`element.scrollTop`](/de/docs/Web/API/Element/scrollTop)- und [`element.clientHeight`](/de/docs/Web/API/Element/clientHeight)-Eigenschaften).

Das Kontrollkästchen im folgenden Demo ist deaktiviert und kann daher nicht aktiviert werden, um Zustimmung zu zeigen, bis der Inhalt des Absatzes durchgescrollt wurde. Sobald es aktiviert ist, kann die Schaltfläche "Weiter" geklickt werden, um fortzufahren.

#### HTML

```html
<form id="form" name="registration">
  <p id="info">Read all text to agree</p>
  <div id="very-important-read">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus
      vestibulum mattis. Id consectetur purus ut faucibus pulvinar elementum
      integer enim neque. Metus vulputate eu scelerisque felis imperdiet. Massa
      massa ultricies mi quis hendrerit dolor magna eget est. Rhoncus aenean vel
      elit scelerisque mauris pellentesque. Volutpat est velit egestas dui id
      ornare arcu. Id cursus metus aliquam eleifend mi in. Condimentum lacinia
      quis vel eros donec ac. Feugiat pretium nibh ipsum consequat nisl vel
      pretium lectus.
    </p>
    <p>
      Sit amet volutpat consequat mauris nunc congue nisi vitae. Viverra
      accumsan in nisl nisi scelerisque. Enim ut tellus elementum sagittis
      vitae. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nisi
      scelerisque eu ultrices vitae. Sem fringilla ut morbi tincidunt augue
      interdum velit. Senectus et netus et malesuada fames ac turpis egestas.
      Nunc non blandit massa enim nec. At augue eget arcu dictum varius duis at.
      Dictumst quisque sagittis purus sit amet. Ut eu sem integer vitae justo.
      Mollis aliquam ut porttitor leo a diam sollicitudin. Mollis nunc sed id
      semper risus in. Eu volutpat odio facilisis mauris sit. Augue interdum
      velit euismod in pellentesque massa placerat duis. Aliquam faucibus purus
      in massa tempor nec feugiat. Nisl rhoncus mattis rhoncus urna neque
      viverra justo. Leo duis ut diam quam nulla. Ultrices dui sapien eget mi
      proin sed libero enim.
    </p>
    <p>
      Cras adipiscing enim eu turpis egestas. Est ultricies integer quis auctor
      elit. Tempor id eu nisl nunc mi ipsum. Non nisi est sit amet facilisis.
      Nisl suscipit adipiscing bibendum est ultricies integer quis. Habitant
      morbi tristique senectus et netus et malesuada. Etiam erat velit
      scelerisque in dictum non consectetur a erat. Diam sollicitudin tempor id
      eu nisl. Aenean vel elit scelerisque mauris pellentesque pulvinar
      pellentesque habitant. A pellentesque sit amet porttitor. Viverra aliquet
      eget sit amet tellus cras. Eu ultrices vitae auctor eu.
    </p>
    <p>
      Fames ac turpis egestas sed tempus. Id donec ultrices tincidunt arcu non
      sodales. Congue mauris rhoncus aenean vel elit scelerisque mauris
      pellentesque. Velit scelerisque in dictum non consectetur a erat nam.
      Auctor elit sed vulputate mi sit amet mauris commodo. Mauris ultrices eros
      in cursus turpis massa tincidunt. Dui sapien eget mi proin sed libero enim
      sed faucibus. Ipsum dolor sit amet consectetur adipiscing elit
      pellentesque habitant. Amet massa vitae tortor condimentum. Feugiat nisl
      pretium fusce id velit. Malesuada proin libero nunc consequat interdum
      varius sit. Quam nulla porttitor massa id neque aliquam vestibulum morbi
      blandit. Gravida arcu ac tortor dignissim convallis aenean et tortor at.
      Dapibus ultrices in iaculis nunc sed. Fermentum et sollicitudin ac orci
      phasellus egestas tellus. Proin libero nunc consequat interdum varius sit
      amet mattis. Sed viverra ipsum nunc aliquet bibendum.
    </p>
  </div>
  <p>
    <input type="checkbox" id="agree" name="accept" disabled />
    <label for="agree">I agree</label>
    <input type="submit" id="next-step" value="Next" disabled />
  </p>
</form>
```

#### CSS

```css
#info {
  margin: 5px;
  display: inline-block;
  font-style: italic;
}

#very-important-read {
  height: 130px;
  padding: 5px;
  border: 2px solid #00b4c5;
  border-radius: 5px;
  overflow: scroll;
}
```

#### JavaScript

```js
const info = document.getElementById("info");
const toAgree = document.getElementById("agree");
const toNextStep = document.getElementById("next-step");
const veryImportantRead = document.getElementById("very-important-read");

// Check if user has scrolled the element to the bottom
function isRead(element) {
  return (
    element.scrollHeight - Math.round(element.scrollTop) <= element.clientHeight
  );
}

function checkScrollToBottom(element) {
  if (isRead(element)) {
    info.innerText = "You have read all text. Agree to continue.";
    toAgree.disabled = false;
  }
}

toAgree.addEventListener("change", (e) => {
  toNextStep.disabled = !e.target.checked;
});

veryImportantRead.addEventListener("scroll", () => {
  checkScrollToBottom(veryImportantRead);
});

toNextStep.addEventListener("click", () => {
  if (toAgree.checked) {
    toNextStep.value = "Done!";
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Checking_that_the_user_has_read_a_text', 640, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
