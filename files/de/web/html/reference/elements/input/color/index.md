---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten ein Benutzerschnittstellenelement, das es einem Benutzer ermöglicht, eine Farbe entweder über eine visuelle Farbauswahl-Schnittstelle anzugeben oder die Farbe in ein Textfeld im [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value)-Format einzugeben.

Die Darstellung des Elements kann je nach Browser und/oder Plattform stark variieren – es könnte sich um eine einfache Texteingabe handeln, die automatisch validiert wird, um sicherzustellen, dass die Farbinformation im richtigen Format eingegeben wurde, oder um einen plattformspezifischen Farbwähler oder eine Art benutzerdefiniertes Farbwählerfenster.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Choose your colors:</p>

<div>
  <input type="color" id="foreground" name="foreground" value="#e66465" />
  <label for="foreground">Foreground color</label>
</div>

<div>
  <input
    type="color"
    id="background"
    name="background"
    value="oklab(50% 0.1 0.1 / 0.5)"
    colorspace="display-p3"
    alpha />
  <label for="background">Background color</label>
</div>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

## Wert

Ein [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value).

> [!NOTE]
> Historisch gesehen waren nur grundlegende hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat verwendet werden, einschließlich benannter Farben, funktionaler Notationen und hexadezimaler Farben mit Alphakanal. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den für alle {{HTMLElement("input")}}-Elemente gemeinsamen [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), unterstützt das `color` Input auch folgende Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut. Wenn vorhanden, zeigt es an, dass die Alphakomponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt Hinweise auf die gewünschte Benutzeroberfläche für das Farbwahl-Widget. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies umfasst {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}}-Werte. Der Farbwert ist auf 8 Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwenden von Farbeingaben

Eingaben vom Typ `color` sind einfach aufgrund der begrenzten Anzahl an unterstützten Attributen.

### Standardfarbe angeben

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt ist und der Farbwähler (sofern vorhanden) ebenfalls auf diese Farbe voreingestellt wird.

```html
<input type="color" value="#ff0000" />
<input
  type="color"
  id="body"
  name="body"
  value="oklab(50% 0.1 0.1 / 0.5)"
  colorspace="display-p3"
  alpha />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben oder der Wert ungültig oder vom Browser nicht unterstützt ist, wird der Wert standardmäßig auf `#000000` gesetzt, was einem undurchsichtigen Schwarz entspricht.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie seinen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansehen.

Hier ist ein Beispiel, das Änderungen des Farbwerts im Laufe der Zeit beobachtet:

```js
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswählen des Wertes

Wenn ein Browser keine Farbwähler-Schnittstelle unterstützt, ist seine Implementierung von Farbeingaben ein Textfeld, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den aktuell im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbwert einer Eingabe wird als ungültig betrachtet, wenn der {{Glossary("user_agent", "Benutzer-Agent")}} die Benutzereingabe nicht in eine siebenstellige Kleinschrift-Hexadezimal-Notation umwandeln kann. Falls dies der Fall ist, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das etwas mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu nehmen und sie auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach – ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, den wir verwenden werden, um die Farbe des Absatztexts zu ändern.

```html
<p>
  An example demonstrating the use of the
  <code>&lt;input type="color"&gt;</code> control.
</p>

<label for="color-picker">Color:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Watch the paragraph colors change when you adjust the color picker. As you
  make changes in the color picker, the first paragraph's color changes, as a
  preview (this uses the <code>input</code> event). When you close the color
  picker, the <code>change</code> event fires, and we detect that to change
  every paragraph to the selected color.
</p>
```

### JavaScript

#### Initialisierung

Der folgende Code initialisiert die Farbeingabe:

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

Dies erfasst eine Referenz zum Farbeingabeelement in einer Variablen namens `colorPicker` und setzt den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis der Farbeingabe so eingerichtet, dass unsere Funktion `updateFirst()` aufgerufen wird, und das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird so eingerichtet, dass `updateAll()` aufgerufen wird. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, falls das Steuerelement als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbauswahl-Schnittstelle bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir stellen zwei Funktionen bereit, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument so, dass sie mit dem neuen Wert der Farbeingabe übereinstimmt. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), geschieht dies wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was darauf hinweist, dass der Wert nicht mehr geändert wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir bearbeiten dieses Ereignis mit der Funktion `updateAll()`, wobei wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass das {{cssxref("color")}}-Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das endgültige Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Jeder CSS {{cssxref("&lt;color&gt;")}} Wert in beliebiger Notation.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/API/HTMLInputElement/alpha"><code>alpha</a></code>,
        <a href="/de/docs/Web/API/HTMLInputElement/colorSpace"><code>colorSpace</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/list"><code>list</code></a> und
        <a href="/de/docs/Web/API/HTMLInputElement/value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.alpha`](/de/docs/Web/API/HTMLInputElement/alpha)
- [`HTMLInputElement.colorspace`](/de/docs/Web/API/HTMLInputElement/colorSpace)
