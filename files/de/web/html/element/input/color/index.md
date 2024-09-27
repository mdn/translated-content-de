---
title: <input type="color">
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten ein Benutzeroberflächenelement, das dem Benutzer ermöglicht, eine Farbe entweder durch eine visuelle Farbauswahloberfläche oder durch Eingabe der Farbe in einem Textfeld im `#rrggbb`-Hexadezimalformat anzugeben.

Nur einfache Farben (ohne Alphakanal) sind erlaubt, obwohl CSS-Farben mehr Formate bieten, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit Alphakanal.

Die Präsentation des Elements kann sich erheblich von einem Browser und/oder einer Plattform zur anderen unterscheiden — es könnte ein einfaches Texteingabefeld sein, das automatisch validiert, um sicherzustellen, dass die Farbinformationen im richtigen Format eingegeben werden, oder ein plattformstandardmäßiger Farbwahlschirm oder eine Art benutzerdefiniertes Farbauswahlfenster.

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

## Wert

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}}-Elements vom Typ `color` ist immer ein String, der einen 7-Zeichen-String enthält, der eine RGB-Farbe im Hexadezimalformat angibt. Während Sie die Farbe in Groß- oder Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert hat niemals ein anderes Format und ist niemals leer.

> [!NOTE]
> Wenn Sie den Wert auf etwas setzen, das keine gültige, vollständig undurchsichtige RGB-Farbe _in hexadezimaler Notation_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie keine standardisierten Farbnamen von CSS oder CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies macht Sinn, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Außerdem werden Farben mit einem Alphakanal nicht unterstützt; das Angeben einer Farbe in einer 9-Zeichen-hexadezimalen Notation (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Bereitstellen einer Standardfarbe

Sie können das einfache Beispiel oben aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorbefüllt ist und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt wird:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standardwert `#000000`, was Schwarz ist. Der Wert muss in einer siebenstelligen hexadezimalen Notation vorliegen, also dem "`#`"-Zeichen gefolgt von jeweils zwei Ziffern, die Rot, Grün und Blau darstellen, so: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Funktionen wie `rgb()` oder `hsl()`), müssen Sie sie in hexadezimale Werte umwandeln, bevor Sie den `value` festlegen.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird auf dem `<input>`-Element jedes Mal ausgelöst, wenn sich die Farbe ändert. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements durch Überprüfen seines [`value`](/de/docs/Web/HTML/Element/input#value) ermitteln.

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

Wenn ein Browser keine Farbauswahloberfläche unterstützt, ist seine Implementation von Farbeingaben ein Textfeld, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im korrekten Format vorliegt. In diesem Fall können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den aktuell im Bearbeitungsfeld stehenden Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig betrachtet, wenn der [user agent](/de/docs/Glossar/user_agent) nicht in der Lage ist, die Benutzerangaben in eine siebenstellige Hexadezimalangabe in Kleinbuchstaben umzuwandeln. Falls dies der Fall ist, wird die {{cssxref(":invalid")}}-Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event)- und [`input`](/de/docs/Web/API/Element/input_event)-Ereignisse verfolgt, um die neue Farbe zu übernehmen und sie auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, die wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

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

Zuerst gibt es einige Vorarbeiten. Hier richten wir einige Variablen ein und richten eine Variable ein, die die Farbe enthält, auf die wir den Farbwähler beim ersten Laden einstellen wollen, und dann einen [`load`](/de/docs/Web/API/Window/load_event)-Handler, um die Haupt-Startarbeit zu erledigen, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Nachdem die Seite geladen ist, wird unser `load`-Ereignishandler, `startup()`, aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dieser holt sich einen Verweis auf das Farb-`<input>`-Element in einer Variablen namens `colorPicker`, dann wird der Wert der Farbeingabe auf den in `defaultColor` enthaltenen Wert gesetzt. Dann wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis der Farbeingabe so eingerichtet, dass unsere `updateFirst()`-Funktion aufgerufen wird, und das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis wird so eingerichtet, dass `updateAll()` aufgerufen wird. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt der Farbeingabe auszuwählen, wenn die Steuerung als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbauswahloberfläche bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir bieten zwei Funktionen, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzes im Dokument, um mit dem neuen Wert der Farbeingabe übereinzustimmen. Da `input`-Ereignisse jedes Mal ausgelöst werden, wenn der Wert angepasst wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden diese wiederholt ausgeführt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was bedeutet, dass sich der Wert nicht wieder ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Element/input#value) verwenden, um die schließlich ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass sein {{cssxref("color")}}-Attribut dem aktuellen Wert der Farbeingabe entspricht, auf die mit [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht so aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein 7-Zeichen String, der eine
        {{cssxref("&lt;color&gt;")}} in hexadezimaler Kleinschreibung angibt
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

## Siehe auch

- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
