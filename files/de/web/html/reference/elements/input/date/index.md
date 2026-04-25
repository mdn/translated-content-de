---
title: '`<input type="date">` HTML-Attributwert'
short-title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erzeugen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Die Darstellung der Datumsauswahloberfläche variiert je nach Browser und Betriebssystem. Der Wert ist standardmäßig im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, jedoch _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen die Eingabe von Zeit und Datum+Zeit.

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

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum ist formatiert nach [Datumsformatierung](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings).

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat wird von dem tatsächlichen `value` abweichen — das angezeigte Datum wird _basierend auf der Lokalisierung des Browsers des Benutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumwert in JavaScript mit den Eigenschaften [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` und `valueAsNumber` abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code sucht das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Danach wird dieser Wert im String- und Zahlformat zurückgelesen.

## Zusätzliche Attribute

Zusätzlich zu [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den für alle {{HTMLElement("input")}}-Elemente gemeinsamen [Eingabe-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), unterstützt die Datumseingabe die folgenden Attribute:

### max

Das späteste zu akzeptierende Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs keine gültige Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl `max`- als auch `min`-Attribute gesetzt sind, muss dieser Wert eine Datumszeichenfolge **später oder gleich** dem im `min`-Attribut sein.

### min

Das früheste zu akzeptierende Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) früher liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs keine gültige Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl `max`- als auch `min`-Attribute gesetzt sind, muss dieser Wert eine Datumszeichenfolge **früher oder gleich** dem im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganzzahlige Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](#min) falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01-01`), falls keiner angegeben ist.

Für `date`-Eingaben wird der Wert des `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die 86.400.000-fach dem `step`-Wert entspricht (der zugrunde liegende Zahlenwert ist in Millisekunden). Der Standardwert ist 1, was 1 Tag angibt.

Ein String-Wert von `any` bedeutet, dass kein Schrittanzug impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). In der Realität hat es die gleiche Wirkung wie `1` für `date`-Eingaben, da die Auswahloberfläche nur die Auswahl ganzer Tage erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich naheliegende Optionen gibt.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Schnittstelle zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Lokalisierung des Benutzers.

In diesem Abschnitt betrachten wir die grundlegenden und dann komplexeren Anwendungen von `<input type="date">`.

### Grundlegende Anwendungen von Datum

Die grundlegendste Verwendung von `<input type="date">` umfasst ein `<input>` in Kombination mit seinem {{htmlelement("label")}}, wie unten gezeigt:

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

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die vom Benutzer wählbaren Daten einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monate- und Jahrteile des Textfeldes sind nicht editierbar, und Daten außerhalb des April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. um nur Samstage auswählbar zu machen).

### Steuerung der Eingabebreite

`<input type="date">` unterstützt keine Formulargroßenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie lieber [CSS](/de/docs/Web/CSS), um es zu dimensionieren.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen lassen normalerweise nicht zu, dass etwas anderes als ein Datum eingegeben wird — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb dieser Grenzen einzureichen.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfelds obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Schauen wir uns ein Beispiel für Mindest- und Höchstdaten an und machen zusätzlich ein Feld erforderlich:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Spielen Sie jetzt mit dem Beispiel herum:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das in dem obigen Beispiel verwendete CSS. Wir verwenden die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), um ein Icon neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Icon auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, weil in Chrome mindestens der generierte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Client-seitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server es versäumt, die empfangenen Daten zu validieren, könnte es zu einem Desaster mit schlecht formatierten, zu großen, falschen Datentypen usw. kommen.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahldialog mit dem nativen `<input type="date">`-Picker.

### HTML

Das HTML sieht wie folgt aus:

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

Das CSS sieht wie folgt aus:

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
        Format oder leer darstellt
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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeitauswahl-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
