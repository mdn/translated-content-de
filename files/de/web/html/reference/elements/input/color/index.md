---
title: '`<input type="color">` HTML-Attributswert'
short-title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten ein Benutzeroberflächenelement, das es einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch Verwendung einer visuellen Farbauswahloberfläche oder durch Eingabe der Farbe in ein Textfeld im [CSS-Farbwertformat](/de/docs/Web/CSS/Reference/Values/color_value).

Die Darstellung des Elements kann von einem Browser und/oder einer Plattform zur anderen erheblich variieren — es kann sich um eine einfache Texteingabe handeln, die automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformüblichen Farbwähler oder eine Art benutzerdefiniertes Farbwählerfenster.

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
> Historisch gesehen waren nur grundlegende hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat, einschließlich benannter Farben, funktionaler Notationen und hexadezimaler Farben mit einem Alphakanal, verwendet werden. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt der `color`-Input auch die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das anzeigt, dass der Alphakanal der Farbe vom Endbenutzer bearbeitet werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt einen Hinweis auf die gewünschte Benutzeroberfläche für das Farbwahl-Widget. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}} und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente beschränkt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Eine Standardfarbe bereitstellen

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt ist und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt ist.

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

Wenn Sie keinen Wert angeben oder wenn der Wert ungültig oder anderweitig vom Browser nicht unterstützt wird, wird der Wert standardmäßig auf `#000000` gesetzt, was undurchsichtiges Schwarz ist.

### Farbänderungen verfolgen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements bestimmen, indem Sie sich seinen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansehen.

Hier ist ein Beispiel, das Änderungen des Farbwerts im Laufe der Zeit überwacht:

```js
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", watchColorPicker);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Den Wert auswählen

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird die Implementierung der Farbeingaben ein Textfeld sein, das die Inhalte automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format ist. In diesem Fall können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den aktuell im Bearbeitungsfeld enthaltenen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, tut `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen entsprechend reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user_agent", "Benutzeragent")}} nicht in der Lage ist, die Eingabe des Benutzers in eine siebenstellige Kleinbuchstaben-Hexadezimalschreibweise umzuwandeln. Wenn dies der Fall ist, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das etwas mehr mit der Farbeingabe macht, indem die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgt werden, um die neue Farbe zu übernehmen und auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absatztext mit einer {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, die wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Dies erhält einen Verweis auf das Farbeingabe-Element im Dokument in einer Variablen namens `colorPicker` und setzt den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis der Farbeingabe eingerichtet, um unsere `updateFirst()`-Funktion aufzurufen, und das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird so festgelegt, dass es `updateAll()` aufruft. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerung als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbauswahloberfläche bereitgestellt wird).

#### Auf Farbänderungen reagieren

Wir bieten zwei Funktionen an, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um mit dem neuen Wert der Farbeingabe übereinzustimmen. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), geschieht dies wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was bedeutet, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass dessen {{cssxref("color")}}-Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die durch [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

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
        <a href="/de/docs/Web/API/HTMLInputElement/list"><code>list</code></a>, und
        <a href="/de/docs/Web/API/HTMLInputElement/value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
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
