---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

{{HTMLElement("input")}} Elemente des Typs **`color`** bieten ein Benutzerschnittstellenelement, das es einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch die Verwendung einer visuellen Farbauswahl-Oberfläche oder durch Eingabe der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat.

Es sind nur grundlegende Hexadezimalfarben (ohne Alphakanal) erlaubt, obwohl CSS-Farben mehr Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit einem Alphakanal.

Die Darstellung des Elements kann erheblich von einem Browser und/oder einer Plattform zur anderen variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch validiert wird, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, ein standardmäßiger Plattformfarbwähler oder eine Art benutzerdefiniertes Farbauswahlfenster.

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

Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines {{HTMLElement("input")}} Elements vom Typ `color` ist immer eine Zeichenfolge, die eine 7-stellige Zeichenfolge enthält, die eine RGB-Farbe im Hexadezimalformat angibt. Während Sie die Farbe in Groß- oder Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt niemals in einer anderen Form vor und ist niemals leer.

> [!NOTE]
> Das Setzen des Wertes auf etwas, das keine gültige, vollständig deckende RGB-Farbe _in hexadezimaler Schreibweise_ ist, führt dazu, dass der Wert auf `#000000` gesetzt wird. Insbesondere können Sie die standardisierten Farbnamen von CSS oder irgendeine CSS-Funktionssyntax nicht verwenden, um den Wert zu setzen. Dies ergibt Sinn, wenn man bedenkt, dass HTML und CSS separate Sprachen und Spezifikationen sind. Außerdem werden Farben mit einem Alphakanal nicht unterstützt; die Angabe einer Farbe in 9-stelliger hexadezimaler Notation (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach, da sie nur eine begrenzte Anzahl von Attributen unterstützen.

### Angabe einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass die Farbauswahl mit der Standardfarbe vorausgefüllt wird und die Farbauswahl (sofern vorhanden) auch auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was Schwarz ist. Der Wert muss in einer siebenstelligen hexadezimalen Notation vorliegen, das heißt, das Zeichen "#" gefolgt von jeweils zwei Ziffern, die Rot, Grün und Blau darstellen, wie folgt: `#rrggbb`. Wenn Sie Farben haben, die in einem anderen Format vorliegen (wie CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie diese in Hexadezimalzahlen umwandeln, bevor Sie den `value` setzen.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer die Farbauswahl schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie auf dessen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) schauen.

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

### Auswahl des Wertes

Wenn ein Browser keine Farbauswahl-Oberfläche unterstützt, wird die Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im korrekten Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select) Methode verwenden, um den derzeit im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user_agent", "User Agent")}} die Benutzereingabe nicht in siebenstellige, kleinbuchstabige hexadezimale Notation umwandeln kann. Wenn dies der Fall ist, wird der {{cssxref(":invalid")}} Pseudo-Klasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu übernehmen und auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist recht einfach — ein paar Absätze mit beschreibendem Material und ein {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, den wir verwenden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es einige Vorbereitungen. Hier richten wir einige Variablen ein, wobei wir eine Variable festlegen, die die Farbe enthält, die wir beim ersten Laden des Farbwählers verwenden werden, und anschließend einen [`load`](/de/docs/Web/API/Window/load_event) Handler einrichten, um die Hauptarbeit beim Start zu erledigen, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "blue";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Sobald die Seite geladen ist, wird unser `load`-Ereignishandler `startup()` aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dies erhält eine Referenz zum Farbe-`<input>`-Element in einer Variablen namens `colorPicker` und setzt dann den Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das `input`-Ereignis der Farbeingabe so eingerichtet, dass unsere `updateFirst()`-Funktion aufgerufen wird, und das `change`-Ereignis so eingerichtet, dass `updateAll()` aufgerufen wird. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerung als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbauswahl-Schnittstelle bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir stellen zwei Funktionen bereit, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzes im Dokument, um mit dem neuen Wert der Farbeingabe übereinzustimmen. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), wird dies wiederholt geschehen, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn die Farbauswahl geschlossen wird, was darauf hinweist, dass sich der Wert nicht weiter ändern wird (es sei denn, der Benutzer öffnet die Farbauswahl erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion unter Verwendung von [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value), um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass das {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, die über [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

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
        {{cssxref("&lt;color&gt;")}} in kleiner hexadezimaler Notation angibt.
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
