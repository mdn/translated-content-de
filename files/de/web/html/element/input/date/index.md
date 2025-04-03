---
title: <input type="date">
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datums-Picker-Eingabeoberfläche variiert je nach Browser und Betriebssystem. Der Wert wird auf das Format `yyyy-mm-dd` normiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, aber _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Uhrzeit- und Datums+Zeit-Eingabe.

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

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird gemäß dem [Format für Datumszeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen, so:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat wird sich vom tatsächlichen `value`-Wert unterscheiden - das angezeigte Datum wird _basierend auf der Lokalisierung des Benutzerbrowsers_ formatiert, aber der geparste `value`-Wert ist immer `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den `value`- und `valueAsNumber`-Eigenschaften von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Der Wert wird dann im String- und Zahlenformat zurückgelesen.

## Zusätzliche Attribute

Die für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attribute gelten auch für `date`-Eingaben, beeinflussen aber möglicherweise nicht deren Darstellung. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) danach liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, dann hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert eine Datumszeichenfolge sein, die **später oder gleich** der im `min`-Attribut ist.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) davor liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, dann hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert eine Datumszeichenfolge sein, die **früher oder gleich** der im `max`-Attribut ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert des Schritts entsprechen ([`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein entsprechender Standardwert, falls keiner von diesen angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die von Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn zwei Optionen gleich nah sind.

Bei `date`-Eingaben wird der `step`-Wert in Tagen angegeben und als Anzahl von Millisekunden behandelt, die das 86,400,000-fache des `step`-Werts ist (der zugrundeliegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag angibt.

> [!NOTE]
> Das Festlegen von `any` als Wert für `step` hat bei `date`-Eingaben denselben Effekt wie `1`.

## Verwendung von Datumeingaben

Datumeingaben bieten eine einfache Oberfläche zur Auswahl von Daten und normieren das an den Server gesendete Datenformat unabhängig von der lokalen Einstellung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungen von `<input type="date">`.

### Grundlegende Verwendungen von Datum

Die grundlegendste Verwendung von `<input type="date">` umfasst ein `<input>`, kombiniert mit seinem {{htmlelement("label")}}, wie unten zu sehen:

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

Dieses HTML übermittelt das eingegebene Datum mit dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die vom Benutzer wählbaren Daten einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30` fest:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monat- und Jahrteile des Textfelds sind nicht bearbeitbar, und Daten außerhalb des April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum erhöht wird (z.B. um nur Samstage wählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formulargröße-Attribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Verwenden Sie vorzugsweise [CSS](/de/docs/Web/CSS) zur Größenbestimmung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen erlauben Ihnen generell nicht, etwas einzugeben, das kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum einzusenden, das außerhalb der Grenzen liegt.

Sie können auch das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfelds obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzusenden.

Sehen wir uns ein Beispiel mit Mindest- und Höchstdaten an, bei dem auch ein Feld erforderlich ist:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das in obigem Beispiel verwendete CSS. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da in Chrome der erzeugte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die Validierung der Eingaben auf der Clientseite _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr Server die empfangenen Daten nicht überprüft, können katastrophale Fehler auftreten mit Daten, die falsch formatiert, zu groß oder vom falschen Typ sind, usw.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahldialog mit dem nativen `<input type="date">`-Picker.

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
        Eine Zeichenfolge, die ein Datum im YYYY-MM-DD-Format
        darstellt, oder leer
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Uhrzeitauswahl-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
