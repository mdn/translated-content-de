---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{HTMLElement("input")}}-Elemente vom Typ **`color`** stellen ein Benutzeroberflächenelement bereit, das es einem Benutzer ermöglicht, eine Farbe entweder über eine visuelle Farbauswahl-Oberfläche festzulegen oder die Farbe in einer [CSS-Farbwert](/de/docs/Web/CSS/color_value)-Format in ein Textfeld einzugeben.

Die Darstellung des Elements kann erheblich von einem Browser und/oder einer Plattform zur anderen variieren – es kann sich um ein einfaches Texteingabefeld handeln, das automatisch validiert wird, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformstandardisierten Farbselektor oder eine Art von benutzerdefiniertem Farbauswahlfenster.

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
> Historisch gesehen waren nur einfache hexadezimale Farben (ohne Alphakanal) erlaubt. Jetzt können alle CSS-Farbformate, einschließlich benannter Farben, funktionaler Notationen und hexadezimaler Farben mit Alphakanal verwendet werden. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen wird oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Eingabeattributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt die `color`-Eingabe auch die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das, wenn es vorhanden ist, angibt, dass der Alphakanal der Farbe vom Endbenutzer bearbeitet werden kann und nicht vollständig deckend sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt Hinweise auf die gewünschte Benutzeroberfläche für das Farbwähler-Widget. Mögliche {{Glossary("enumerated", "aufzählende")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{glossary("RGB". "sRGB")}}-Farbraum. Dies umfasst [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standard.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display-P3-Farbraum")}}, z. B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, da sie nur eine begrenzte Anzahl von Attributen unterstützen.

### Bereitstellung einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt wird und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe standardisiert.

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

Wenn Sie keinen Wert angeben oder wenn der Wert ungültig oder vom Browser nicht unterstützt ist, wird der Wert standardmäßig auf `#000000` gesetzt, was ein opakes Schwarz ist.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbauswähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) betrachten.

Hier ist ein Beispiel, das die Änderungen des Farbwerts im Zeitverlauf überwacht:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswahl des Werts

Wenn ein Browser keine Farbauswahl-Oberfläche unterstützt, wird die Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den Text auszuwählen, der sich derzeit im Bearbeitungsfeld befindet.

Wenn der Browser stattdessen einen Farbauswähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in jedem Fall angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farb-Eingabewert gilt als ungültig, wenn der {{Glossary("user_agent", "User Agent")}} nicht in der Lage ist, die Benutzereingabe in eine siebenstellige, kleingeschriebene Hexadezimalnotation zu konvertieren. In diesem Fall wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse nachverfolgt, um die neue Farbe zu verwenden und auf jeden {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach – ein paar beschreibende Absätze mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Absatztexts zu ändern.

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

Dies holt eine Referenz zum Farbe-`<input>`-Element in einer Variablen namens `colorPicker` und setzt dann den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das `input`-Ereignis der Farbeingabe so eingerichtet, dass unsere `updateFirst()`-Funktion aufgerufen wird, und das `change`-Ereignis wird so eingerichtet, dass `updateAll()` aufgerufen wird. Beide sind unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, falls die Steuerung als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbauswahloberfläche bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir stellen zwei Funktionen bereit, die sich mit Farbänderungen befassen. Die Funktion `updateFirst()` wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument so, dass sie mit dem neuen Wert der Farbeingabe übereinstimmt. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung des Werts gemacht wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden diese wiederholt auftreten, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was darauf hinweist, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der Funktion `updateAll()`, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die letztendlich ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht so aus:

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
