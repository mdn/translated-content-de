---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{HTMLElement("input")}} Elemente vom Typ **`color`** bieten ein Benutzeroberflächenelement, das es einem Benutzer ermöglicht, eine Farbe entweder über ein visuelles Farbwahlwerkzeug auszuwählen oder die Farbe in einem [CSS-Farbwert](/de/docs/Web/CSS/color_value) Format in ein Textfeld einzugeben.

Die Darstellung des Elements kann je nach Browser und/oder Plattform erheblich variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch validiert, dass die Farbinformation im richtigen Format eingegeben wird, ein plattformstandardmäßiger Farbwähler oder ein benutzerdefiniertes Farbwählfenster.

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
> Historisch waren nur einfache hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat, einschließlich benannter Farben, funktionaler Notationen und hexadezimale Farben mit Alphakanal, verwendet werden. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen wird oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Eingabeattributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}} Elementen gemeinsam sind, unterstützt der `color` Input auch die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolean")}} Attribut, das, wenn es vorhanden ist, anzeigt, dass die Alpha-Komponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} der Farbe und gibt einen Hinweis auf die gewünschte Benutzeroberfläche für das Farbwahlelement. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{glossary("RGB". "sRGB")}} Farbraum. Dazu gehören [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb), und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwendung von Farbeingaben

Inputs vom Typ `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Einen Standardwert bereitstellen

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt ist und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt wird.

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

Wenn Sie keinen Wert angeben oder wenn der Wert ungültig oder anderweitig nicht vom Browser unterstützt wird, wird der Wert standardmäßig als `#000000` festgelegt, was undurchsichtiges Schwarz ist.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}} Typen, gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>` Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change` Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) überprüfen.

Hier ist ein Beispiel, das die Änderungen des Farbwerts im Laufe der Zeit überwacht:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Den Wert auswählen

Wenn ein Browser eine Farbauswahloberfläche nicht unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select) Methode verwenden, um den Text auszuwählen, der sich derzeit im Bearbeitungsfeld befindet.

Wenn der Browser stattdessen einen Farbwähler verwendet, macht `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user_agent", "Benutzeragent")}} nicht in der Lage ist, die Eingabe des Benutzers in die siebenstellige, kleingeschriebene Hexadezimalnotation zu konvertieren. In diesem Fall wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das etwas mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu nehmen und auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich unkompliziert — ein paar Absätze von beschreibendem Material mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es einige Einrichtung. Hier legen wir einige Variablen fest, setzen eine Variable, die die Farbe enthält, die wir beim ersten Laden des Farbwahlwerkzeugs festlegen, und richten dann einen [`load`](/de/docs/Web/API/Window/load_event) Handler ein, um die Hauptstartarbeit zu erledigen, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Sobald die Seite geladen ist, wird unser `load` Ereignishandler, `startup()`, aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dies erhält eine Referenz auf das Farbeingabefeld in einer Variablen namens `colorPicker`, dann wird der Wert der Farbeingabe auf den Wert in `defaultColor` gesetzt. Dann wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis der Farbeingabe eingerichtet, um unsere Funktion `updateFirst()` aufzurufen, und das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird so eingestellt, dass es `updateAll()` aufruft. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn das Steuerelement als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbwähleroberfläche bereitgestellt wird).

#### Auf Farbänderungen reagieren

Wir stellen zwei Funktionen bereit, die sich mit Farbänderungen befassen. Die `updateFirst()` Funktion wird als Reaktion auf das `input` Ereignis aufgerufen. Es ändert die Farbe des ersten Absatz-Elements im Dokument, um den neuen Wert der Farbeingabe anzupassen. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (z.B., wenn die Helligkeit der Farbe erhöht wird), geschehen diese wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change` Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der Funktion `updateAll()`, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

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
      <td><strong>Methode</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
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
