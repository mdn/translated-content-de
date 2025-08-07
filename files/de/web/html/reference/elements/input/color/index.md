---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{HTMLElement("input")}} Elemente vom Typ **`color`** bieten ein Benutzerschnittstellenelement, das es einem Benutzer ermöglicht, eine Farbe entweder durch eine visuelle Farbauswahloberfläche oder durch Eingabe der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat anzugeben.

Nur grundlegende Hexadezimalfarben (ohne Alphakanal) sind erlaubt, obwohl CSS-Farben mehr Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Darstellung des Elements kann in verschiedenen Browsern und/oder Plattformen erheblich variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder ein plattformstandardmäßiger Farbwähler, oder eine Art benutzerdefiniertes Farbwählerfenster.

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

Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines {{HTMLElement("input")}} Elements vom Typ `color` ist immer ein String, der eine 7-Zeichenfolge im Hexadezimalformat angibt. Während Sie die Farbe entweder in Groß- oder Kleinschreibung eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt nie in einer anderen Form vor und ist niemals leer.

> [!NOTE]
> Wenn der Wert auf etwas gesetzt wird, das keine gültige, voll-opaque RGB-Farbe _in Hexadezimalnotation_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie keine standardisierten Farbnamen von CSS oder eine CSS-Funktionssyntax verwenden, um den Wert zu setzen. Das ist sinnvoll, wenn man bedenkt, dass HTML und CSS separate Sprachen und Spezifikationen sind. Außerdem werden Farben mit einem Alphakanal nicht unterstützt; eine Farbe in 9-stelliger Hexadezimalnotation anzugeben (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, aufgrund der begrenzten Anzahl unterstützter Attribute.

### Bereitstellung einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgefüllt wird und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt wird:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was schwarz ist. Der Wert muss in siebenstelliger Hexadezimalnotation sein, was bedeutet, dass das "#" Zeichen von zwei Ziffern gefolgt wird, die jeweils Rot, Grün und Blau darstellen, wie folgt: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie diese in Hexadezimal umwandeln, bevor Sie den `value` festlegen.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}} Typen gibt es auch hier zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird beim `<input>` Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change` Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements durch Betrachten seines [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) bestimmen.

Hier ist ein Beispiel, das im Laufe der Zeit Änderungen am Farbwert überwacht:

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

Wenn ein Browser keine Schnittstelle zum Farbwählen unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im korrekten Format ist. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select) Methode verwenden, um den Text im Bearbeitungsfeld auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, tut `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code entsprechend reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbinput-Wert gilt als ungültig, wenn der {{Glossary("user_agent", "User Agent")}} nicht in der Lage ist, die Benutzereingabe in siebenstellige, klein geschriebene Hexadezimalnotation umzuwandeln. Wenn dies der Fall ist, wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es ein bisschen Vorarbeit. Hier legen wir einige Variablen fest, indem wir eine Variable definieren, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden setzen werden, und dann einen [`load`](/de/docs/Web/API/Window/load_event) Handler einrichten, um die Hauptarbeit zu erledigen, sobald die Seite vollständig geladen ist.

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

Dieser erhält eine Referenz zum Farbe `<input>` Element in einer Variablen namens `colorPicker`, dann wird der Farbinput-Wert auf den Wert in `defaultColor` gesetzt. Dann wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis des Farbinputs so eingerichtet, dass unsere `updateFirst()` Funktion aufgerufen wird, und das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis so, dass `updateAll()` aufgerufen wird. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt des Farbeingabefeldes auszuwählen, falls die Steuerung als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbwähler-Schnittstelle bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir stellen zwei Funktionen bereit, die mit Farbänderungen umgehen. Die `updateFirst()` Funktion wird als Reaktion auf das `input` Ereignis aufgerufen. Sie ändert die Farbe des ersten Abschnitts im Dokument, um den neuen Wert des Farbeingabefeldes widerzuspiegeln. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), passieren diese Änderungen wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird dem Element ein `change` Ereignis gesendet. Wir behandeln dieses Ereignis mit der `updateAll()` Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut dem aktuellen Wert der Farbeingabe entspricht, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine 7-Zeichenfolge, die ein
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
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
      <td><strong>Implizite ARIA Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
