---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: baa785abec7bc852b909f1c827510731ada5ff4f
---

{{HTMLElement("input")}}-Elemente des Typs **`color`** bieten eine Benutzeroberfläche, die es einem Benutzer ermöglicht, eine Farbe entweder mittels eines visuellen Farbauswahltools anzugeben oder die Farbe in einem Textfeld im [CSS-Farbwert](/de/docs/Web/CSS/color_value) Format einzugeben.

Die Darstellung des Elements kann erheblich von einem Browser und/oder einer Plattform zu einer anderen variieren – es könnte sich um ein grundlegendes Texteingabefeld handeln, das automatisch überprüft, ob die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformstandardmäßigen Farbwähler oder eine Art eigenes Farbauswahlfenster.

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

Ein [CSS-Farbwert](/de/docs/Web/CSS/color_value).

> [!NOTE]
> Historisch waren nur grundlegende hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat verwendet werden, einschließlich benannter Farben, funktionaler Notationen und hexadezimale Farben mit einem Alphakanal. Der Standardwert ist `#000000` (schwarz), falls ein `value` weggelassen wird oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt das `color`-Input auch die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "Boolean")}}-Attribut, das, wenn vorhanden, angibt, dass die Alpha-Komponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und deutet auf die gewünschte Benutzeroberfläche für das Farbauswahl-Widget hin. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}}-Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente beschränkt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwendung von Farbeingaben

Inputs des Typs `color` sind einfach, aufgrund der begrenzten Anzahl unterstützter Attribute.

### Eine Standardfarbe festlegen

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass das Farbauswahlwerkzeug mit der Standardfarbe vorausgefüllt ist und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt ist.

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

Wenn Sie keinen Wert angeben oder wenn der Wert ungültig oder anderweitig vom Browser nicht unterstützt wird, wird der Wert standardmäßig auf `#000000` gesetzt, was undurchsichtigem Schwarz entspricht.

### Farbänderungen verfolgen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie sich dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) anschauen.

Hier ist ein Beispiel, das Änderungen im Laufe der Zeit des Farbwerts beobachtet:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Der Wert auswählen

Wenn ein Browser keine Farbauswahl-Oberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den Text im Bearbeitungsfeld auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen entsprechend reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user_agent", "Benutzeragent")}} nicht in der Lage ist, die Eingabe des Benutzers in die siebzeilige hexadezimale Kleinschreibweise umzuwandeln. In diesem Fall wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das etwas mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach – ein paar Absätze mit beschreibendem Material und ein {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, die wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", updateAll, false);
colorPicker.select();
```

Hier wird eine Referenz auf das `<input>`-Element für die Farbe in der Variable `colorPicker` gespeichert und der Wert der Farbeingabe auf den Wert in `defaultColor` gesetzt. Dann wird das `input`-Ereignis der Farbeingabe eingerichtet, um unsere `updateFirst()`-Funktion aufzurufen, und das `change`-Ereignis wird eingerichtet, um `updateAll()` aufzurufen. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe zu wählen, falls das Steuerelement als Textfeld implementiert ist (dies hat keine Wirkung, wenn eine Farbauswahloberfläche bereitgestellt wird).

#### Auf Farbänderungen reagieren

Wir stellen zwei Funktionen bereit, die auf Farbänderungen reagieren. Die Funktion `updateFirst()` wird als Antwort auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um den neuen Wert der Farbeingabe zu übernehmen. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden sie wiederholt, während das Farbauswahl-Tool verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn das Farbauswahl-Tool geschlossen wird, was bedeutet, dass sich der Wert nicht weiter ändern wird (es sei denn, der Benutzer öffnet das Tool erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dadurch wird die Farbe jedes {{HTMLElement("p")}} Blocks so gesetzt, dass dessen {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Jeder CSS-{{cssxref("&lt;color&gt;")}}-Wert in beliebiger Notation.
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
