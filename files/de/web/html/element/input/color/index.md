---
title: <input type="color">
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`color`** bieten ein Benutzerschnittstellenelement, das einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch die Verwendung einer visuellen Farbauswahl oder durch die Eingabe der Farbe in einem Textfeld im `#rrggbb`-Hexadezimalformat.

Es sind nur grundlegende Hexadezimalfarben (ohne Alphakanal) erlaubt, obwohl CSS-Farben mehr Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Präsentation des Elements kann je nach Browser und/oder Plattform erheblich variieren - es könnte ein einfaches texteingabefeld mit automatischer Validierung sein, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, ein plattformstandardisierter Farbwähler, oder eine Art von benutzerdefiniertem Farbauswahlfenster.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;color&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Choose your monster's colors:</p>

<div>
  <input type="color" id="head" name="head" value="#e66465" />
  <label for="head">Head</label>
</div>

<div>
  <input type="color" id="body" name="body" value="#f6b73c" />
  <label for="body">Body</label>
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

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}} Elements des Typs `color` ist immer ein String, der einen RGB-Farbwert im Hexadezimalformat als 7-Zeichen-String enthält. Während Sie die Farbe sowohl in Groß- als auch in Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt niemals in einer anderen Form vor und ist nie leer.

> [!NOTE]
> Wenn Sie den Wert auf etwas setzen, das kein gültiger, vollständig deckender RGB-Farbwert _im Hexadezimalformat_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie nicht die standardisierten Farbnamen von CSS oder irgendeine CSS-Funktionssyntax verwenden, um den Wert zu setzen. Das ergibt Sinn, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; die Angabe einer Farbe im 9-Zeichen-Hexadezimalformat (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach, aufgrund der begrenzten Anzahl an unterstützten Attributen.

### Vorgabefarbe festlegen

Sie können das obige Beispiel aktualisieren, um einen Standardwert einzustellen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt ist und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standardwert `#000000`, was Schwarz ist. Der Wert muss in siebenstelliger Hexadezimalnotation angegeben werden, das heißt das "#" Zeichen gefolgt von zwei Ziffern für Rot, Grün und Blau, so: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Farb-Funktionen wie `rgb()` oder `hsl()`), müssen Sie diese vor dem Setzen des `value` in Hexadezimal umwandeln.

### Nachverfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}} Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>` Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change` Ereignis wird ausgelöst, wenn der Benutzer die Farbauswahl beendet. In beiden Fällen können Sie den neuen Wert des Elements feststellen, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value) betrachten.

Hier ist ein Beispiel, das Änderungen des Farbwerts über die Zeit verfolgt:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswählen des Werts

Wenn ein Browser keine Farbauswahl-Schnittstelle unterstützt, wird seine Implementierung der Farbeingaben ein Textfeld sein, das die Inhalte automatisch validiert, um sicherzustellen, dass der Wert im korrekten Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select) Methode verwenden, um den aktuell im Bearbeitungsfeld ausgewählten Text zu markieren.

Wenn der Browser stattdessen eine Farbauswahl verwendet, hat `select()` keine Wirkung. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagiert.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user_agent", "Nutzeragent")}} nicht in der Lage ist, die Eingabe des Benutzers in eine siebenstellige Hexadezimalnotation in Kleinbuchstaben zu konvertieren. In diesem Fall wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein bisschen mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu übernehmen und auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze beschreibenden Materials mit einem {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, das wir verwenden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst erfolgt etwas Einrichtung. Hier richten wir einige Variablen ein, indem wir eine Variable definieren, die die Farbe enthält, die wir für die Farbauswahl einstellen, wenn wir sie zum ersten Mal laden, und dann einen [`load`](/de/docs/Web/API/Window/load_event) Handler einstellen, um die grundlegende Startarbeit zu erledigen, sobald die Seite vollständig geladen ist.

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

Dieser erhält eine Referenz zum Farbe `<input>` Element in einer Variablen namens `colorPicker` und setzt dann den Wert des Farbeingabefelds auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis der Farbeingabe so eingerichtet, dass unsere Funktion `updateFirst()` aufgerufen wird, und das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird so eingestellt, dass `updateAll()` aufgerufen wird. Diese beiden werden unten gezeigt.

Am Ende rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt des Farbeingabefelds auszuwählen, wenn das Steuerelement als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Schnittstelle für die Farbauswahl bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir stellen zwei Funktionen bereit, die sich mit Farbänderungen befassen. Die `updateFirst()` Funktion wird als Reaktion auf das `input` Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um dem neuen Wert der Farbeingabe zu entsprechen. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), passieren diese Änderungen wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was bedeutet, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change` Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()` Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Element/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut dem aktuellen Wert der Farbeingabe entspricht, der mit [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein 7-Zeichen-String, der ein
        {{cssxref("&lt;color&gt;")}} in kleingeschriebener Hexadezimalnotation angibt
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
