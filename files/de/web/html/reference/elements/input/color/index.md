---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{HTMLElement("input")}} Elemente des Typs **`color`** bieten ein Benutzeroberflächenelement, das es dem Benutzer ermöglicht, eine Farbe entweder über eine visuelle Farbauswahl oder durch Eingabe der Farbe in einem [CSS-Farbwert](/de/docs/Web/CSS/color_value)-Format anzugeben.

Die Darstellung des Elements kann sich erheblich von einem Browser und/oder einer Plattform zur anderen unterscheiden – es könnte ein einfacher Texteingabebereich sein, der automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder ein plattformstandardmäßiger Farbpicker oder eine Art benutzerdefinierte Farbwählerfenster.

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
> Historisch gesehen waren nur grundlegende Hexadezimalfarben (ohne Alphakanal) erlaubt. Jetzt kann jedes CSS-Farbformat verwendet werden, einschließlich benannter Farben, funktionaler Notationen und Hexadezimalfarben mit einem Alphakanal. Der Standardwert ist `#000000` (schwarz), wenn ein `value` weggelassen oder ungültig ist.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt das `color`-Input auch die folgenden Attribute:

- `alpha` {{experimental_inline}}
  - : Ein {{Glossary("Boolean/HTML", "boolean")}}-Attribut, das, wenn es vorhanden ist, anzeigt, dass die Alpha-Komponente der Farbe vom Endbenutzer bearbeitet werden kann und nicht vollständig undurchsichtig sein muss.

- `colorspace` {{experimental_inline}}
  - : Definiert den {{Glossary("color_space", "Farbraum")}} für die Farbe und gibt Hinweise auf die gewünschte Benutzeroberfläche für das Farbsauswahl-Widget. Mögliche {{Glossary("enumerated", "enumerierte")}} Werte sind:
    - `"limited-srgb"`: Die Farbe befindet sich im {{Glossary("RGB", "sRGB")}}-Farbraum. Dies schließt [`rgb()`](/de/docs/Web/CSS/color_value/rgb), [`hsl()`](/de/docs/Web/CSS/color_value/hsl), [`hwb()`](/de/docs/Web/CSS/color_value/hwb) und {{cssxref("hex-color")}} Werte ein. Der Farbwert ist auf 8-Bit pro `r`, `g` und `b` Komponente begrenzt. Dies ist der Standardwert.
    - `"display-p3"`: Der {{Glossary("Color_space#display-p3", "Display-P3-Farbraum")}}, z.B. `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Verwendung von Farbeingaben

Inputs vom Typ `color` sind einfach aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Bereitstellung einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, so dass die Farbauswahlvorgabe mit der Standardfarbe vorab ausgefüllt ist und auch der Farbwähler (falls vorhanden) auf diese Farbe voreingestellt ist.

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

Wenn Sie keinen Wert angeben oder der Wert ungültig oder sonst nicht vom Browser unterstützt wird, wird der Wert standardmäßig auf `#000000` gesetzt, was einem undurchsichtigen Schwarz entspricht.

### Nachverfolgung von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Events, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Event wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) betrachten.

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

### Auswahl des Wertes

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den derzeit im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert eines Farbeingabefeldes wird als ungültig betrachtet, wenn es dem {{Glossary("user_agent", "User-Agent")}} nicht gelingt, die Benutzereingabe in eine siebenstellige, klein geschriebene Hexadezimalnotation umzuwandeln. In einem solchen Fall wird die Pseudo-Klasse {{cssxref(":invalid")}} auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das mehr mit der Farbeingabe macht, indem wir die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgen, um die neue Farbe zu übernehmen und sie auf jedem {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist recht einfach gestaltet — ein paar Absätze Beschreibungstext mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, die wir verwenden, um die Farbe des Textes der Absätze zu ändern.

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

Folgender Code initialisiert die Farbeingabe:

```js
const defaultColor = "#0000ff";
const colorPicker = document.querySelector("#color-picker");
colorPicker.value = defaultColor;
colorPicker.addEventListener("input", updateFirst);
colorPicker.addEventListener("change", updateAll);
colorPicker.select();
```

Dies erhält eine Referenz auf das Farb-`<input>`-Element in einer Variablen namens `colorPicker` und setzt dann den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis der Farbeingabe eingerichtet, um unsere `updateFirst()`-Funktion aufzurufen, und das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird eingerichtet, um `updateAll()` aufzurufen. Diese sind beide unten zu sehen.

Abschließend rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerung als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbauswahl-Schnittstelle bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir bieten zwei Funktionen, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um den neuen Wert der Farbeingabe widerzuspiegeln. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung an der Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), treten diese mehrfach auf, wenn der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was bedeutet, dass der Wert nicht mehr geändert wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die finale gewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, auf den mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

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
      <td><strong>Events</strong></td>
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
