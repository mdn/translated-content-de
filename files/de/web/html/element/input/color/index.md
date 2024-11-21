---
title: <input type="color">
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`color`** bieten eine Benutzeroberfläche, die es einem Benutzer ermöglicht, eine Farbe entweder über eine visuelle Farbauswahloberfläche anzugeben oder die Farbe in ein Textfeld im hexadezimalen `#rrggbb`-Format einzugeben.

Es sind jedoch nur grundlegende hexadezimale Farben (ohne Alphakanal) erlaubt, obwohl CSS-Farben mehr Formate bieten, z.B. Farbnamen, funktionale Notationen und ein hexadezimales Format mit einem Alphakanal.

Die Darstellung des Elements kann sich erheblich von einem Browser und/oder einer Plattform zur anderen unterscheiden – es könnte sich um ein einfaches Texteingabefeld handeln, das automatisch validiert, ob die Farbinformationen im richtigen Format eingegeben werden, oder um einen plattformstandardmäßigen Farbwähler oder eine Art benutzerdefinierte Farbwähler-Fenster.

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

## Wert

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}}-Elements vom Typ `color` ist immer ein String, der einen RGB-Farbwert im hexadezimalen Format enthält. Auch wenn Sie die Farbe in Groß- oder Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert ist niemals in einer anderen Form und ist niemals leer.

> [!NOTE]
> Wenn der Wert auf etwas gesetzt wird, das keine gültige, vollständig deckende RGB-Farbe _in hexadezimaler Schreibweise_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie keine standardisierten Farbnamen von CSS oder irgendeine CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies ist sinnvoll, wenn man bedenkt, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; das Angeben einer Farbe in neunstelligem hexadezimalen Notationsformat (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben vom Typ `color` sind einfach, da sie nur eine begrenzte Anzahl von Attributen unterstützen.

### Bereitstellung einer Standardfarbe

Sie können das obige Beispiel aktualisieren, um einen Standardwert festzulegen, sodass der Farbpicker mit der Standardfarbe vorab ausgefüllt wird und der Farbwähler (falls vorhanden) ebenfalls auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standardwert `#000000`, was schwarz ist. Der Wert muss in der siebenstelligen hexadezimalen Notation angegeben werden, das bedeutet das "#" Zeichen gefolgt von je zwei Ziffern für Rot, Grün und Blau, wie folgt: `#rrggbb`. Wenn Sie Farben in einem anderen Format (wie CSS-Farbnamen oder CSS-Farbfunktionsätze wie `rgb()` oder `hsl()`) haben, müssen Sie diese in das hexadezimale Format umwandeln, bevor Sie den `value` festlegen.

### Verfolgen von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen am Farbwert zu erkennen: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird bei jedem Farbwechsel auf dem `<input>`-Element ausgelöst. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie sich dessen [`value`](/de/docs/Web/HTML/Element/input#value) ansehen.

Hier ist ein Beispiel, das Änderungen im Laufe der Zeit am Farbwert überwacht:

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

Wenn ein Browser keine Farbwähler-Oberfläche unterstützt, wird die Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format vorliegt. In diesem Fall können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den aktuell im Bearbeitungsfeld vorhandenen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, bewirkt `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig betrachtet, wenn der {{Glossary("user_agent", "User Agent")}} nicht in der Lage ist, die Eingaben des Benutzers in eine siebenstellige hexadezimale Notation in Kleinbuchstaben umzuwandeln. Falls und wenn dies der Fall ist, wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Erstellen wir ein Beispiel, das etwas mehr mit der Farbeingabe macht, indem wir die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse überwachen, um die neue Farbe zu übernehmen und auf jedes {{HTMLElement("p")}} Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach — ein paar Absätze mit beschreibendem Material und ein {{HTMLElement("input")}} vom Typ `color` mit der ID `color-picker`, die wir verwenden, um die Farbe des Absatztexts zu ändern.

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

Zunächst gibt es einige Vorbereitungen. Hier legen wir einige Variablen fest, richten eine Variable ein, die die Farbe enthält, die wir beim ersten Laden des Farbwählers einstellen, und richten einen [`load`](/de/docs/Web/API/Window/load_event) Handler ein, der die Hauptstartprozedur ausführt, sobald die Seite vollständig geladen ist.

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

Dies erhält eine Referenz auf das `color` `<input>` Element in einer Variable namens `colorPicker` und setzt dann den Wert des Farbeingabe-Elements auf den Wert in `defaultColor`. Dann wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis des Farbeingabe-Elements so eingestellt, dass es unsere `updateFirst()` Funktion aufruft, und das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis wird so eingestellt, dass es `updateAll()` aufruft. Diese sind beide unten zu sehen.

Schließlich rufen wir [`select()`](/de/docs/Web/API/HTMLInputElement/select) auf, um den Textinhalt des Farbeingabe-Elements auszuwählen, wenn das Steuerelement als Textfeld implementiert ist (dies hat keine Wirkung, wenn stattdessen eine Farbwähler-Oberfläche bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir bieten zwei Funktionen an, die mit Farbänderungen umgehen. Die `updateFirst()` Funktion wird als Reaktion auf das `input` Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatzelements im Dokument so, dass sie mit dem neuen Wert der Farbeingabe übereinstimmt. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), werden diese Vorgänge wiederholt auftreten, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was darauf hinweist, dass sich der Wert nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change` Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()` Funktion unter Verwendung von [`Event.target.value`](/de/docs/Web/HTML/Element/input#value), um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks so, dass sein {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf die durch [`event.target`](/de/docs/Web/API/Event/target) Bezug genommen wird.

### Ergebnis

Das endgültige Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein 7-stelliger String, der eine
        {{cssxref("&lt;color&gt;")}} in kleingeschriebener hexadezimaler Notation angibt
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
