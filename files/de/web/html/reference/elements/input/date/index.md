---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 08f5d82ca14b4f7b0004040555f9347e156665ac
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumsauswahl-UI variiert je nach Browser und Betriebssystem. Der Wert wird auf das Format `jjjj-mm-tt` normalisiert.

Der resultierende Wert umfasst das Jahr, den Monat und den Tag, jedoch _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen die Eingabe von Uhrzeit und Datum+Uhrzeit.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;date&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Start date:</label>

<input
  type="date"
  id="start"
  name="trip-start"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum ist gemäß [Datumsformatte](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für das Eingabefeld mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat weicht vom tatsächlichen `value` ab — das angezeigte Datum wird _basierend auf der Spracheinstellung des Browsers des Benutzers_ formatiert, während das analysierte `value` stets im Format `jjjj-mm-tt` vorliegt.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Anschließend liest er diesen Wert sowohl in String- als auch in Zahlenformaten zurück.

## Zusätzliche Attribute

Die allgemeinen Attribute, die für alle {{HTMLElement("input")}}-Elemente gelten, finden auch bei `date`-Eingaben Anwendung, können jedoch dessen Darstellung nicht beeinflussen. Zum Beispiel könnten `size` und `placeholder` nicht funktionieren. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später liegt, schlägt die [Einschränkung der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein mögliches Datums-String im Format `jjjj-mm-tt` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die `max`- als auch die `min`-Attribute festgelegt sind, muss dieser Wert ein Datums-String **später oder gleich** dem im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) früher liegt, schlägt die [Einschränkung der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs kein mögliches Datums-String im Format `jjjj-mm-tt` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die `max`- als auch die `min`-Attribute festgelegt sind, muss dieser Wert ein Datums-String **früher oder gleich** dem im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Ausgangspunkt für die Schrittgröße entsprechen ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein geeigneter Standardwert, falls keiner von beiden bereitgestellt wird), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert zulässig ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittgrößenkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen die Zahlen in positiver Richtung bevorzugt werden.

Bei `date`-Eingaben wird der Wert von `step` in Tagen angegeben; und wird als Anzahl von Millisekunden behandelt, die 86.400.000-mal dem `step`-Wert entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag anzeigt.

> [!NOTE]
> Das Festlegen von `any` als Wert für `step` hat denselben Effekt wie `1` für `date`-Eingaben.

## Verwendung von Datumsangaben

Datumseingaben bieten eine einfache Oberfläche zur Auswahl von Daten und normalisieren das gesendete Datenformat an den Server, unabhängig von der Spracheinstellung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Anwendungen von `<input type="date">`.

### Grundlegende Anwendungen von Datumseingaben

Die grundlegendste Verwendung von `<input type="date">` beinhaltet ein `<input>`, das mit seinem {{htmlelement("label")}} kombiniert ist, wie unten zu sehen:

```html
<form action="https://example.com">
  <label>
    Enter your birthday:
    <input type="date" name="bday" />
  </label>

  <p><button>Submit</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

Dieses HTML sendet das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die vom Benutzer auswählbaren Daten einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30` fest:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monat- und Jahrteile des Textfelds sind nicht bearbeitbar, und Daten außerhalb des Aprils 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die jedes Mal gesprungen werden, wenn das Datum erhöht wird (z.B., um nur Samstage auswählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) für die Größe.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen lassen im Allgemeinen nicht zu, dass Sie etwas eingeben, das kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum einzureichen, das außerhalb des zulässigen Bereichs liegt.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Schauen wir uns ein Beispiel an, wie Mindest- und Höchstdaten festgelegt werden und auch ein Feld erforderlich gemacht wird:

```html
<form>
  <label>
    Choose your preferred party date (required, April 1st to 20th):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Submit</button>
  </p>
</form>
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das im obigen Beispiel verwendete CSS. Wir machen Gebrauch von den {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben der Eingabe platzieren und nicht auf der Eingabe selbst, da zumindest in Chrome der generierte Inhalt der Eingabe innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> [!WARNING]
> Die clientseitige Formularvalidierung ist _kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu verändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr Server die empfangenen Daten nicht validiert, kann es zu Problemen mit schlecht formatierten Daten, zu großen Datenmengen, falschen Typen usw. kommen.

## Beispiele

In diesem Beispiel erstellen wir eine Datumsauswahl mit dem nativen `<input type="date">`-Picker.

### HTML

Der HTML-Code sieht so aus:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
</form>
```

### CSS

Der CSS-Code sieht so aus:

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### Ergebnisse

{{EmbedLiveSample('Examples', 600, 100)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD
        Format repräsentiert, oder leer
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/API/HTMLInputElement/value"><code>value</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/valueAsDate"><code>valueAsDate</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/valueAsNumber"><code>valueAsNumber</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown),
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Uhrzeit-Picker-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Uhrzeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
