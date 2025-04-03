---
title: <input type="color">
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten ein Benutzeroberflächenelement, mit dem ein Benutzer eine Farbe angeben kann, entweder durch die Verwendung eines visuellen Farbwähler-Interfaces oder durch Eingabe der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat.

Es sind nur grundlegende Hexadezimalfarben (ohne Alphakanal) erlaubt, obwohl CSS-Farben mehr Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Darstellung des Elements kann je nach Browser und/oder Plattform erheblich variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch überprüft, ob die Farbinformationen im richtigen Format eingegeben wurden, oder ein plattformstandardmäßiger Farbwähler oder eine Art benutzerdefiniertes Farbwählerfenster.

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

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}}-Elements vom Typ `color` ist immer ein Zeichenfolge, die eine 7-stellige Zeichenfolge enthält, die eine RGB-Farbe im Hexadezimalformat angibt. Während Sie die Farbe sowohl in Groß- als auch in Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt nie in einer anderen Form vor und ist niemals leer.

> [!NOTE]
> Wenn der Wert auf etwas gesetzt wird, das keine gültige, vollständig opake RGB-Farbe _in hexadezimaler Notation_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie die standardisierten Farbnamen von CSS oder eine CSS-Funktionssyntax nicht verwenden, um den Wert festzulegen. Dies ist sinnvoll, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; die Angabe einer Farbe in 9-stelliger hexadezimaler Notation (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Festlegen einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorausgewählt wird und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was schwarz ist. Der Wert muss in der siebenstelligen hexadezimalen Notation angegeben werden, d.h. das "#" Zeichen, gefolgt von je zwei Ziffern für Rot, Grün und Blau, wie folgt: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie sie in Hexadezimal umwandeln, bevor Sie den `value` setzen.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements durch Überprüfung seines [`value`](/de/docs/Web/HTML/Element/input#value) ermitteln.

Hier ist ein Beispiel, das Änderungen des Farbwerts im Laufe der Zeit überwacht:

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

Wenn ein Browser keine Farbwählerschnittstelle unterstützt, besteht seine Implementierung von Farbeingaben aus einem Textfeld, das den Inhalt automatisch überprüft, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den derzeit im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen entsprechend reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe gilt als ungültig, wenn der {{Glossary("user_agent", "User-Agent")}} die Eingabe des Benutzers nicht in eine siebenstellige, kleingeschriebene hexadezimale Notation umwandeln kann. Sollte dies der Fall sein, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das etwas mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgt, um die neue Farbe zu übernehmen und jedem {{HTMLElement("p")}}-Element im Dokument zuzuweisen.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}}-Element vom Typ `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es einige Vorbereitungen. Hier richten wir einige Variablen ein, wobei wir eine Variable aufstellen, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden setzen, und anschließend einen [`load`](/de/docs/Web/API/Window/load_event)-Handler festlegen, um die hauptsächliche Startarbeit zu erledigen, sobald die Seite vollständig geladen ist.

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

Dies erhält eine Referenz zum Farbe `<input>`-Element in einer Variablen namens `colorPicker`, setzt dann den Wert der Farbeingabe auf den Wert von `defaultColor`. Dann wird das `input`-Ereignis der Farbeingabe so eingerichtet, dass es unsere `updateFirst()`-Funktion aufruft, und das `change`-Ereignis wird so eingerichtet, dass es `updateAll()` aufruft. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn das Steuerungselement als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbwähler-Schnittstelle bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir bieten zwei Funktionen an, die mit Farbänderungen umgehen. Die Funktion `updateFirst()` wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzelements im Dokument, um den neuen Wert der Farbeingabe widerzuspiegeln. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden diese wiederholt ausgeführt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was darauf hinweist, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der Funktion `updateAll()`, wobei wir [`Event.target.value`](/de/docs/Web/HTML/Element/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, der über [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine 7-stellige Zeichenfolge, die ein
        {{cssxref("&lt;color&gt;")}} in kleingeschriebener hexadecimaler Notation angibt
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL Attribute</strong></td>
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
