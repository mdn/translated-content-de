---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erzeugen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild des Datumsauswahlfelds hängt vom Browser und Betriebssystem ab. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, aber _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen die Eingabe von Zeit bzw. Datum und Zeit.

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

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird in Übereinstimmung mit [Datumsstring-Formaten](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, zum Beispiel:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat wird sich vom tatsächlichen `value` unterscheiden — das angezeigte Datum wird _basierend auf dem Gebietsschema des Browsers des Benutzers_ formatiert, aber der analysierte `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumwert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` auf `date` gesetzt ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Anschließend wird dieser Wert als String- und Zahlenformat ausgelesen.

## Zusätzliche Attribute

Die allen {{HTMLElement("input")}}-Elementen gemeinsamen Attribute gelten auch für `date`-Eingaben, könnten jedoch deren Darstellung nicht beeinflussen. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben folgende zusätzliche Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach liegt, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `max`-Attributs kein mögliches Datum im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumwert.

Wenn sowohl `max` als auch `min` gesetzt sind, muss dieser Wert ein Datumsstring sein, der **später oder gleich** dem im `min`-Attribut ist.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) davor liegt, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `min`-Attributs kein mögliches Datum im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumwert.

Wenn sowohl `max` als auch `min` gesetzt sind, muss dieser Wert ein Datumsstring sein, der **früher oder gleich** dem im `max`-Attribut ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Schrittweiten ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls und ein angemessener Standardwert, wenn keiner der anderen vorhanden ist) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass keine Schrittweite impliziert wird und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweiten-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen Zahlen in positiver Richtung bevorzugt werden.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die 86.400.000-mal dem `step`-Wert entspricht (der zugrundeliegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag bedeutet.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat denselben Effekt wie `1` für `date`-Eingaben.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Schnittstelle zum Auswählen von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig vom Gebietsschema des Benutzers.

In diesem Abschnitt betrachten wir die grundlegende und dann komplexere Verwendung von `<input type="date">`.

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

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die Daten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel setzen wir ein Mindestdatum auf `2017-04-01` und ein Höchstdatum auf `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können – die Monats- und Jahresteile des Textfelds sind nicht editierbar, und Daten außerhalb des Aprils 2017 können im Auswahl-Widget nicht gewählt werden.

Sie können das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z. B. um nur Samstage auswählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formvergrößerungsattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS) für die Größenanpassung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über dessen Format hinaus. Die Schnittstellen lassen es in der Regel nicht zu, etwas einzugeben, das kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen zu übermitteln.

Sie können auch das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwenden, um die Eingabe des Datums als obligatorisch zu kennzeichnen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld zu übermitteln.

Sehen wir uns ein Beispiel mit Mindest- und Höchstdaten an und machen auch ein Feld erforderlich:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Wir verwenden die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da zumindest in Chrome der von der Eingabe generierte Inhalt innerhalb der Formularelemente platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte dies mit falsch formatierten, zu großen, vom falschen Typ stammenden Daten katastrophale Folgen haben.

## Beispiele

In diesem Beispiel erstellen wir eine Datumsauswahl mit dem nativen Picker `<input type="date">`.

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
        Ein String, der ein Datum im Format YYYY-MM-DD
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeit-Wähler-Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
