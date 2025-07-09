---
title: <input type="color">
slug: Web/HTML/Reference/Elements/input/color
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten ein Benutzeroberflächenelement, das es einem Benutzer ermöglicht, eine Farbe anzugeben, entweder durch die Verwendung einer visuellen Farbauswahloberfläche oder durch das Eingeben der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat.

Nur grundlegende Hexadezimalfarben (ohne Alphakanal) sind erlaubt, obwohl CSS-Farben mehr Formate haben, z. B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit Alphakanal.

Die Darstellung des Elements kann stark von einem Browser und/oder einer Plattform zur anderen variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder ein plattformstandardisiertes Farbauswahlwerkzeug oder eine Art benutzerdefiniertes Farbauswahlfenster.

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

Der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eines {{HTMLElement("input")}}-Elements vom Typ `color` ist immer ein String, der einen RGB-Farbcode im Hexadezimalformat als 7-Zeichen-String angibt. Während Sie die Farbe entweder in Groß- oder Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt nie in einem anderen Format vor und ist nie leer.

> [!NOTE]
> Wenn der Wert auf etwas gesetzt wird, das keine gültige, vollständig undurchsichtige RGB-Farbe _in hexadezimaler Notation_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie weder die standardisierten Farbnamen von CSS noch eine CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies ist sinnvoll, wenn man bedenkt, dass HTML und CSS separate Sprachen und Spezifikationen sind. Außerdem werden Farben mit einem Alphakanal nicht unterstützt; das Angeben einer Farbe in 9-Zeichen-Hexadezimalnotation (z. B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, da sie nur eine begrenzte Anzahl an Attributen unterstützen.

### Vorgabefarbe bereitstellen

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass das Farbauswahlwerkzeug mit der Vorgabefarbe vorausgefüllt wird und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt wird:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist die Vorgabe `#000000`, was Schwarz ist. Der Wert muss in siebenstelliger Hexadezimalnotation vorliegen, was das Zeichen "#" gefolgt von jeweils zwei Ziffern für Rot, Grün und Blau bedeutet, etwa so: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie z. B. CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie diese in Hexadezimal umwandeln, bevor Sie den `value`-Wert festlegen.

### Nachverfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements bestimmen, indem Sie seinen [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Wert betrachten.

Hier ist ein Beispiel, das die Änderungen des Farbwerts im Laufe der Zeit verfolgt:

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

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den aktuell im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen eine Farbauswahl verwendet, macht `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Ein Farbeingabewert gilt als ungültig, wenn der {{Glossary("user_agent", "user agent")}} nicht in der Lage ist, die Benutzereingabe in eine siebenstellige, kleingeschriebene Hexadezimalnotation umzuwandeln. Ist dies der Fall, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgt, um die neue Farbe zu nehmen und auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich unkompliziert – ein paar Absätze mit beschreibendem Material und ein {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, die wir verwenden werden, um die Textfarbe der Absätze zu ändern.

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

Zuerst gibt es etwas Einrichtung. Hier legen wir einige Variablen fest, indem wir eine Variable einrichten, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden einstellen werden, und dann eine [`load`](/de/docs/Web/API/Window/load_event)-Handler einrichten, der die Hauptinitialisierung durchführt, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

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

Dies ruft eine Referenz auf das `<input>`-Element in einer Variablen namens `colorPicker` ab und setzt dann den `value`-Wert der Farbeingabe auf den Wert in `defaultColor`. Dann wird das `input`-Ereignis der Farbeingabe so konfiguriert, dass unsere `updateFirst()`-Funktion aufgerufen wird, und das `change`-Ereignis so, dass `updateAll()` aufgerufen wird. Diese werden jeweils unten gezeigt.

Zum Schluss rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, falls die Steuerung als Textfeld implementiert ist (dies hat keine Auswirkung, wenn stattdessen eine Farbwähleroberfläche bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir stellen zwei Funktionen bereit, die sich mit Farbänderungen befassen. Die `updateFirst()`-Funktion wird in Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, sodass es dem neuen Wert der Farbeingabe entspricht. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung des Wertes vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), erfolgen diese Änderungen wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass der Wert sich nicht mehr ändert (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion und verwenden [`Event.target.value`](/de/docs/Web/HTML/Reference/Elements/input#value), um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, der mit [`event.target`](/de/docs/Web/API/Event/target) referenziert wird.

### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein 7-Zeichen-String, der einen
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
