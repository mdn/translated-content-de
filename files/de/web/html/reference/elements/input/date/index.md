---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 298f802c808a0851874b1b2f3a306c9a3b646e9f
---

{{HTMLElement("input")}} Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumsauswahl-Eingabeoberfläche variiert je nach Browser und Betriebssystem. Der Wert wird im Format `jjjj-mm-tt` normalisiert.

Der resultierende Wert umfasst das Jahr, den Monat und den Tag, aber _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen die Eingabe von Uhrzeit und Datum+Uhrzeit.

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

Ein String, der das in die Eingabe eingegebene Datum repräsentiert. Das Datum wird gemäß [Datums-String-Format](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum ist _basierend auf der Lokale des Benutzerbrowsers_ formatiert, aber der analysierte `value` ist immer im Format `jjjj-mm-tt`.

Sie können den Datumswert in JavaScript mit den [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` und `valueAsNumber` Eigenschaften abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}} Element, dessen `type` `date` ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Es liest dann diesen Wert in String- und Zahlenformaten zurück.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt das `date`-Eingabefeld folgende Attribute:

### max

Das spätestmögliche Datum, das akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach liegt, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein mögliches Datums-String im Format `jjjj-mm-tt` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl `max` als auch `min` festgelegt sind, muss dieser Wert ein Datums-String sein, der **später oder gleich** dem Wert im `min`-Attribut ist.

### min

Das frühestmögliche Datum, das akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) vorher liegt, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs kein mögliches Datums-String im Format `jjjj-mm-tt` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl `max` als auch `min` festgelegt sind, muss dieser Wert ein Datums-String sein, der **früher oder gleich** dem Wert im `max`-Attribut ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, nach der sich der Wert richten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Stepping ([`min`](#min) falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein geeigneter Standardwert, wenn keiner dieser Werte bereitgestellt wird) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Stepping impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie etwa [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stepping-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und dabei bevorzugt Zahlen in positiver Richtung verwenden, wenn es zwei gleich nahe Optionen gibt.

Bei `date`-Eingaben wird der Wert des `step` in Tagen angegeben; und wird als eine Anzahl von Millisekunden behandelt, die 86.400.000 mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag angibt.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat bei `date`-Eingabefeldern den gleichen Effekt wie `1`.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat unabhängig von der Lokale des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungen von `<input type="date">`.

### Grundlegende Verwendungen von Datum

Die grundlegendste Verwendung von `<input type="date">` umfasst ein `<input>` kombiniert mit seinem {{htmlelement("label")}}, wie unten gezeigt:

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

Dieses HTML überträgt das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die vom Benutzer wählbaren Daten einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30` fest:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresteile der Textbox sind nicht bearbeitbar, und Daten außerhalb des April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die jedes Mal gesprungen werden, wenn das Datum erhöht wird (z. B. nur Samstage auswählbar machen).

### Steuern der Eingabegröße

`<input type="date">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS), um es zu dimensionieren.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen lassen in der Regel nicht zu, dass Sie etwas eingeben, das kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularsteuerungselement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen einzureichen.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfeldes obligatorisch zu machen — es wird ein Fehler angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Lassen Sie uns ein Beispiel für Mindest- und Höchstdaten betrachten und auch ein Feld erforderlich machen:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld hinzuzufügen, je nachdem, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben dem Eingabefeld platzieren, nicht auf dem Eingabefeld selbst, da in Chrome zumindest der generierte Inhalt des Eingabefelds in die Formularsteuerung eingefügt wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die Validierung auf der Client-Seite _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte eine Katastrophe mit Daten auftreten, die schlecht formatiert, zu groß oder vom falschen Typ sind usw.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahlmechanismus mit dem nativen `<input type="date">`-Picker.

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

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD
        Format oder leer repräsentiert
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
- [Leitfaden zur Datum- und Uhrzeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
