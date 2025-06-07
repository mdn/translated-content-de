---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Die Darstellung des Datums-Picker-Benutzerinterfaces variiert je nach Browser und Betriebssystem. Der Wert wird auf das Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, jedoch _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Uhrzeit-Eingaben.

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

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird entsprechend dem [Format von Datums-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat wird sich vom tatsächlichen `value` unterscheiden — das angezeigte Datum wird _basierend auf der Lokalisation des Browsers des Benutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}} Element, dessen `type` `date` ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Anschließend wird dieser Wert sowohl im String- als auch im Zahlenformat zurückgelesen.

## Zusätzliche Attribute

Die allgemeinen Attribute, die für alle {{HTMLElement("input")}} Elemente gelten, sind auch für `date`-Eingaben anwendbar, könnten jedoch deren Darstellung nicht beeinflussen. Zum Beispiel könnten `size` und `placeholder` nicht funktionieren. `date` Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierbare Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach erfolgt, schlägt das Element beim [Einschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max` Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, dann hat das Element keinen maximalen Datumswert.

Wenn sowohl `max` als auch `min` Attribute festgelegt sind, muss dieser Wert ein Datums-String sein, der **später oder gleich** dem im `min` Attribut ist.

### min

Das früheste akzeptierbare Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) vorher passiert, schlägt das Element beim [Einschränkungsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min` Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, dann hat das Element keinen minimalen Datumswert.

Wenn sowohl `max` als auch `min` Attribute festgelegt sind, muss dieser Wert ein Datums-String sein, der **früher oder gleich** dem im `max` Attribut ist.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Basisschritt ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten, und ein angemessener Standardwert, wenn keiner von beiden angegeben ist) sind, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (außer anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} den nächsten gültigen Wert runden und bevorzugt Zahlen in positiver Richtung, wenn es zwei gleich nahe Optionen gibt.

Für `date` Eingaben wird der Wert von `step` in Tagen angegeben und als eine Anzahl von Millisekunden behandelt, die 86.400.000 mal dem `step` Wert entspricht (der zugrundeliegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag anzeigt.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat den gleichen Effekt wie `1` für `date` Eingaben.

## Verwendung von Dateneingaben

Dateneingaben bieten eine einfache Oberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat unabhängig von der Lokalisierung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungen von `<input type="date">`.

### Grundlegende Verwendung von Datum

Die einfachste Verwendung von `<input type="date">` beinhaltet ein `<input>` zusammen mit seinem {{htmlelement("label")}}, wie unten zu sehen ist:

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

Dieses HTML übermittelt das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was in einer URL wie `https://example.com/?bday=1955-06-08` resultiert.

### Festlegung von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die vom Benutzer auswählbaren Daten einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30` fest:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresabschnitte des Textfeldes werden nicht bearbeitbar sein, und Daten außerhalb des Aprils 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum inkrementiert wird (z. B. um nur Samstage auswählbar zu machen).

### Kontrolle der Eingabegröße

`<input type="date">` unterstützt keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) für die Größenanpassung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über dessen Format hinaus. Die Schnittstellen lassen in der Regel nichts eingeben, was kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um verfügbare Daten einzuschränken (siehe [Einstellung von maximalen und minimalen Daten](#festlegung_von_maximalen_und_minimalen_daten)), deaktiviert das Form-Element ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen zu übermitteln.

Sie können auch das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwenden, um das Ausfüllen des Datumsfeldes verpflichtend zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld zu übermitteln.

Sehen wir uns ein Beispiel für minimale und maximale Daten an, und machen wir auch ein Feld erforderlich:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das im obigen Beispiel verwendete CSS. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist oder nicht. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da zumindest in Chrome der erzeugte Inhalt des Eingabefeldes innerhalb des Form-Elements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Client-seitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte dies zu einem Desaster führen mit Daten, die schlecht formatiert, zu groß, von falschem Typ usw. sind.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswähler mit dem nativen `<input type="date">` Picker.

### HTML

Das HTML sieht folgendermaßen aus:

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

Das CSS sieht folgendermaßen aus:

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD
        Format darstellt, oder leer
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}} Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Uhrzeit-Picker Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Im HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
