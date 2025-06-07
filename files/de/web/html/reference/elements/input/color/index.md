---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`color`** bieten ein Benutzeroberflächenelement, das es dem Benutzer ermöglicht, eine Farbe entweder durch eine visuelle Farbauswahloberfläche auszuwählen oder die Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat einzugeben.

Nur grundlegende Hexadezimalfarben (ohne Alphakanal) sind erlaubt, obwohl CSS-Farben mehr Formate haben, z. B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Darstellung des Elements kann stark von einem Browser und/oder einer Plattform zur anderen variieren – es kann sich um ein einfaches Texteingabefeld handeln, das automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformstandardmäßigen Farbwähler oder eine Art benutzerdefinierte Farbauswahlfenster.

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

Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines {{HTMLElement("input")}} Elements des Typs `color` ist immer eine Zeichenkette, die eine 7-stellige Zeichenkette enthält, die eine RGB-Farbe im Hexadezimalformat angibt. Sie können die Farbe in Groß- oder Kleinbuchstaben eingeben, sie wird jedoch in Kleinbuchstaben gespeichert. Der Wert liegt niemals in einer anderen Form vor und ist niemals leer.

> [!NOTE]
> Wenn Sie den Wert auf etwas setzen, das keine gültige, vollständig deckende RGB-Farbe _in Hexadezimalschreibweise_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie keine standardisierten Farbnamen aus CSS oder eine CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies ist sinnvoll, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; die Angabe einer Farbe in der 9-stelligen Hexadezimalschreibweise (z. B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach, aufgrund der begrenzten Anzahl der unterstützten Attribute.

### Eine Standardfarbe bereitstellen

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorgefüllt ist und der Farbwähler (falls vorhanden) ebenfalls diese Standardfarbe verwendet:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was schwarz ist. Der Wert muss in der siebenstelligen Hexadezimalschreibweise vorliegen, was bedeutet, dass das Zeichen "#" gefolgt von zwei Ziffern steht, die jeweils Rot, Grün und Blau darstellen, so: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie diese vor dem Festlegen des `value` in Hexadezimal umwandeln.

### Farbänderungen verfolgen

Wie bei anderen {{HTMLElement("input")}} Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn die Farbe geändert wird. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie seinen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) betrachten.

Hier ist ein Beispiel, das Änderungen des Farbwerts im Laufe der Zeit verfolgt:

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

Wenn ein Browser keine Farbauswahl-Oberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das die Inhalte automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den derzeit im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, tut `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbinput-Wert wird als ungültig betrachtet, wenn der {{Glossary("user_agent", "User-Agent")}} die Benutzereingabe nicht in siebenstelliges, kleingeschriebenes Hexadezimalformat umwandeln kann. Wenn dies der Fall ist, wird die Pseudo-Klasse {{cssxref(":invalid")}} auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit dem Farbeingabe-Element macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu nehmen und sie auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze beschreibendes Material mit einem {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, die verwendet wird, um die Farbe des Absatztexts zu ändern.

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

Zuerst gibt es einige Vorbereitungen. Hier richten wir einige Variablen ein, setzen eine Variable, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden setzen, und richten dann einen [`load`](/de/docs/Web/API/Window/load_event) Handler ein, um die Hauptarbeiten beim Start durchzuführen, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Sobald die Seite geladen ist, wird unser `load`-Ereignishandler, `startup()`, aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dies bekommt eine Referenz zu dem Farbe `<input>` Element in einer Variablen namens `colorPicker`, dann setzt es den Wert des Farbeingabefelds auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis des Farbeingabefelds eingerichtet, um unsere `updateFirst()` Funktion aufzurufen, und das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis, um `updateAll()` aufzurufen. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt des Farbeingabefelds auszuwählen, falls die Steuerung als Textfeld implementiert ist (dies hat keine Auswirkung, wenn eine Farbwahl-Oberfläche stattdessen bereitgestellt wird).

#### Auf Farbänderungen reagieren

Wir stellen zwei Funktionen bereit, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um mit dem neuen Wert der Farbeingabe übereinzustimmen. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden diese wiederholt ausgelöst, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass der Wert nicht mehr geändert wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir bearbeiten dieses Ereignis mithilfe der `updateAll()` Funktion, wobei wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine 7-stellige Zeichenkette, die ein
        {{cssxref("&lt;color&gt;")}} in kleingeschriebenem Hexadezimalformat angibt
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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
