---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`color`** bieten ein Benutzungselement, das es einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch die Verwendung einer visuellen Farbauswahl oder durch Eingabe der Farbe in einem Textfeld im `#rrggbb`-Hexadezimalformat.

Nur grundlegende Hexadezimalfarben (ohne Alphakanal) sind erlaubt, obwohl CSS-Farben mehr Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Darstellung des Elements kann je nach Browser und/oder Plattform erheblich variieren – es könnte sich um eine einfache Texteingabe handeln, die automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformstandardmäßigen Farbwähler, oder eine Art benutzerdefiniertes Farbwählerfenster.

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

Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines {{HTMLElement("input")}}-Elements des Typs `color` ist immer ein String, der einen 7-Zeichen-String enthält, der eine RGB-Farbe im Hexadezimalformat angibt. Während man die Farbe sowohl in Groß- als auch in Kleinbuchstaben eingeben kann, wird sie in Kleinbuchstabenform gespeichert. Der Wert ist immer in keiner anderen Form und niemals leer.

> [!NOTE]
> Das Einstellen des Wertes auf etwas, das keine gültige, vollständig undurchsichtige RGB-Farbe _in hexadezimaler Notation_ ist, führt dazu, dass der Wert auf `#000000` gesetzt wird. Insbesondere können Sie die standardisierten Farbnamen von CSS oder eine CSS-Funktionssyntax nicht verwenden, um den Wert festzulegen. Dies ergibt Sinn, wenn man bedenkt, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; das Angeben einer Farbe in 9-Zeichen-Hexadezimalnotation (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Bereitstellung einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, so dass der Farbwähler mit der Standardfarbe vorausgefüllt ist und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was Schwarz ist. Der Wert muss in einer siebenstelligen Hexadezimalnotation angegeben werden, d.h. das "#" Zeichen gefolgt von zwei Ziffern, die jeweils Rot, Grün und Blau darstellen, so wie hier: `#rrggbb`. Wenn Sie Farben haben, die in einem anderen Format vorliegen (wie z.B. CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie diese vor dem Festlegen des `value` in Hexadezimalformat konvertieren.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `Input` wird auf dem `<input>`-Element jedes Mal gefeuert, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie seinen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) anschauen.

Hier ist ein Beispiel, das Änderungen im Verlauf des Farbwertes verfolgt:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswählen des Wertes

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den Text im Bearbeitungsfeld auszuwählen.

Wenn der Browser stattdessen eine Farbauswahl verwendet, tut `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbwert wird als ungültig betrachtet, wenn der {{Glossary("user_agent", "User-Agent")}} den Benutzereingabe nicht in eine siebenstellige, kleingeschriebene Hexadezimalnotation umwandeln kann. Sollte dies der Fall sein, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Wir erstellen ein Beispiel, das etwas mehr mit der Farbeingabe macht, indem es die Ereignisse [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) verfolgt, um die neue Farbe auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze mit beschreibendem Material und einem {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, den wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es ein bisschen Vorbereitung. Hier definieren wir einige Variablen, richten eine Variable ein, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden einstellen, und richten dann einen [`load`](/de/docs/Web/API/Window/load_event)-Handler ein, der die Hauptstartsarbeit erledigt, sobald die Seite vollständig geladen ist.

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

Dies bekommt eine Referenz zum Farb-`<input>`-Element in einer Variablen namens `colorPicker`, dann wird der Wert der Farbeingabe auf den Wert in `defaultColor` gesetzt. Dann wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis der Farbeingabe aufgerufen, um unsere `updateFirst()`-Funktion zu rufen, und das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird gesetzt, um `updateAll()` zu rufen. Diese werden beide unten gezeigt.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, falls die Steuerung als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbauswahloberfläche bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir bieten zwei Funktionen, die sich mit Farbänderungen befassen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzes im Dokument, um den neuen Wert der Farbeingabe widerzuspiegeln. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), wird dies wiederholt geschehen, während der Farbwähler benutzt wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass der Wert sich nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, auf die mithilfe von [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das endgültige Ergebnis sieht folgendermaßen aus:

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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
