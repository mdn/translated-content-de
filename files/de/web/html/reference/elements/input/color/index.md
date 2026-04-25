---
title: '`<input type="color">` HTML-Attributwert'
short-title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente des Typs **`color`** bieten ein Benutzeroberflächenelement, mit dem ein Benutzer eine Farbe angeben kann, entweder durch Verwenden einer visuellen Farbauswahloberfläche oder durch Eingabe der Farbe in ein Textfeld im [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value)-Format.

Die Darstellung des Elements kann erheblich von einem Browser oder einer Plattform zur anderen variieren — es könnte sich um eine grundlegende Textein- gabe handeln, die automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben wurden, um einen plattformstandardmäßigen Farbwähler oder eine Art benutzerdefiniertes Farbauswahlfenster.

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
> Historisch gesehen waren nur grundlegende hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat, einschließlich benannter Farben, funktionale Notationen und hexadezimale Farben mit einem Alphakanal verwendet werden. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen wird oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt das `color`-Input auch folgende Attribute:

- `alpha` {{experimental_inline}}
  - : Ein [boolean](/de/docs/Glossary/Boolean/HTML)-Attribut, das, wenn vorhanden, anzeigt, dass die Alphakomponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig opak sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt Hinweise auf die gewünschte Benutzeroberfläche für das Farbauswahl-Widget. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt {{cssxref("color_value/rgb", "rgb()")}}, {{cssxref("color_value/hsl", "hsl()")}}, {{cssxref("color_value/hwb", "hwb()")}}, und {{cssxref("hex-color")}}-Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b`-Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwenden von Farbeingaben

Eingaben des Typs `color` sind einfach aufgrund der begrenzten Anzahl unterstützter Attribute.

### Bereitstellen einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, damit der Farbwähler mit der Standardfarbe vorbefüllt ist und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt ist.

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

Wenn Sie keinen Wert angeben oder der Wert ungültig ist oder von dem Browser nicht unterstützt wird, wird der Wert auf `#000000` zurückgesetzt, was opakes Schwarz ist.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn die Farbe geändert wird. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements bestimmen, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) betrachten.

Hier ist ein Beispiel, das Änderungen des Farbwerts im Laufe der Zeit verfolgt:

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

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das die Inhalte automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format ist. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den derzeit im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, hat `select()` keine Wirkung. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbwerteingabewert wird als ungültig angesehen, wenn der {{Glossary("user_agent", "user agent")}} nicht in der Lage ist, die Eingabe des Benutzers in eine siebenstellige, kleingeschriebene Hexadezimalnotation umzuwandeln. Wenn und wann dies der Fall ist, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das ein wenig mehr mit der Farbeingabe macht, indem wir die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgen, um die neue Farbe aufzunehmen und auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach gehalten — ein paar Absätze mit Beschreibungsmaterial und ein {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, das wir verwenden, um die Farbe des Textes in den Absätzen zu ändern.

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

Der folgende Code initialisiert das Farbeingabeelement:

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

Hierbei wird eine Referenz auf das `<input>`-Element für die Farbe in einer Variable namens `colorPicker` gespeichert und anschließend der Wert des Farbeingabefeldes auf den Wert von `defaultColor` gesetzt. Dann wird das `input`-Ereignis des Farbeingabefeldes eingerichtet, um unsere `updateFirst()`-Funktion aufzurufen, und das `change`-Ereignis wird so eingestellt, dass es `updateAll()` aufruft. Diese sind unten zu sehen.

Schließlich wird [`select()`](/de/docs/Web/API/HTMLInputElement/select) aufgerufen, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerelemente als Textfeld implementiert sind (dies hat keine Wirkung, wenn stattdessen eine Farbauswahloberfläche bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir stellen zwei Funktionen zur Verfügung, die sich mit Farbänderungen befassen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Paragrafenelements im Dokument so, dass sie mit dem neuen Wert der Farbeingabe übereinstimmt. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung des Wertes vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), wird dies wiederholt geschehen, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird und damit angezeigt wird, dass der Wert sich nicht weiter ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, wobei wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültige, ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks, so dass ihr {{cssxref("color")}}-Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, der durch [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Jeder CSS {{cssxref("&lt;color&gt;")}}-Wert in beliebiger Notation.
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
      <td><strong>Methoden</strong></td>
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

## Siehe auch

- [`HTMLInputElement.alpha`](/de/docs/Web/API/HTMLInputElement/alpha)
- [`HTMLInputElement.colorspace`](/de/docs/Web/API/HTMLInputElement/colorSpace)
