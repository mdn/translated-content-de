---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: f06142077fabbb1e0fe791d74b856ae4f8d058b4
---

{{HTMLElement("input")}} Elemente vom Typ **`color`** bieten ein Benutzerschnittstellenelement, das es einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch die Verwendung einer visuellen Farbauswahloberfläche oder durch Eingabe der Farbe in einem [CSS-Farbwert](/de/docs/Web/CSS/color_value)-Format in ein Textfeld.

Die Darstellung des Elements kann sich je nach Browser und/oder Plattform erheblich unterscheiden – es könnte ein einfaches Texteingabefeld sein, das automatisch überprüft, ob die Farbinformationen im richtigen Format eingegeben wurden, oder eine plattformstandardmäßige Farbwahl, oder eine Art benutzerdefiniertes Farbwahlfenster.

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
> Historisch gesehen waren nur grundlegende hexadezimale Farben (ohne Alphakanal) zugelassen. Jetzt können alle CSS-Farbformate, einschließlich benannter Farben, funktionaler Notationen und hexadezimaler Farben mit einem Alphakanal, verwendet werden. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die für alle {{HTMLElement("input")}} Elemente üblich sind, unterstützt der `color` Input die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolesches")}} Attribut, das, falls vorhanden, anzeigt, dass die Alpha-Komponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt Hinweise auf die gewünschte Benutzeroberfläche für das Farbwahl-Widget. Mögliche {{Glossary("enumerated", "aufgezählte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{glossary("RGB". "sRGB")}} Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist die Standardeinstellung.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3 Farbraum")}}, z.B., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Festlegen einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorab ausgefüllt ist und der Farbwähler (falls vorhanden) auch auf diese Farbe standardmäßig eingestellt ist.

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

Wenn Sie keinen Wert angeben oder der Wert ungültig oder anderweitig nicht vom Browser unterstützt wird, ist der Standardwert `#000000`, was undurchsichtigem Schwarz entspricht.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}} Typen gibt es zwei Ereignisse, mit denen Änderungen des Farbwerts erkannt werden können: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>` Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change` Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) betrachten.

Hier ist ein Beispiel, das Änderungen im Laufe der Zeit am Farbwert überwacht:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswahl des Wertes

Wenn ein Browser keine Farbwähler-Schnittstelle unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das die Inhalte automatisch überprüft, um sicherzustellen, dass der Wert im korrekten Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select) Methode verwenden, um den aktuell im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen entsprechend reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbinput-Wert wird als ungültig angesehen, wenn der {{Glossary("user_agent", "Benutzeragent")}} nicht in der Lage ist, die Eingabe des Benutzers in eine siebenstellige, kleingeschriebene, hexadezimale Notation zu konvertieren. Falls dies der Fall ist, wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit dem Farbeingabeelement macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu nehmen und sie auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach – ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es etwas Setup. Hier etablieren wir einige Variablen, richten eine Variable ein, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden einstellen werden, und richten dann einen [`load`](/de/docs/Web/API/Window/load_event) Handler ein, um die Haupt-Startup-Arbeit zu erledigen, sobald die Seite vollständig geladen ist.

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

Dies erhält eine Referenz zum `<input>` Element für Farbe in einer Variable namens `colorPicker` und setzt dann den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das `input` Ereignis des Farbeingabe-Elements eingestellt, um unsere `updateFirst()` Funktion aufzurufen, und das `change` Ereignis wird eingestellt, um `updateAll()` aufzurufen. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerung als Textfeld implementiert ist (dies hat keine Auswirkung, wenn stattdessen eine Schnittstelle für eine Farbauswahl vorhanden ist).

#### Reaktion auf Farbänderungen

Wir bieten zwei Funktionen an, die sich mit Farbänderungen befassen. Die Funktion `updateFirst()` wird als Reaktion auf das `input` Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzes im Dokument, um den neuen Wert der Farbeingabe zu übernehmen. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (beispielsweise wenn die Helligkeit der Farbe erhöht wird), geschieht dies wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass sich der Wert nicht mehr ändert (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change` Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()` Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die schließlich ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, der mit [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Jeder CSS {{cssxref("&lt;color&gt;")}} Wert in jeder Notation.
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
      <td><strong>IDL Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/API/HTMLInputElement/alpha"><code>alpha</a></code>,
        <a href="/de/docs/Web/API/HTMLInputElement/colorSpace"><code>colorSpace</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/list"><code>list</code></a>, und
        <a href="/de/docs/Web/API/HTMLInputElement/value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
