---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente mit dem Attribut **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Die Darstellung der Datumsauswahl-Benutzeroberfläche variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert beinhaltet das Jahr, den Monat und den Tag, aber _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

{{InteractiveExample("HTML-Demo: &lt;input type=&quot;date&quot;&gt;", "tabbed-shorter")}}

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

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird gemäß [Datumsformatierungen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Spracheinstellung des Browsers des Benutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Anschließend liest er diesen Wert sowohl im String- als auch im Zahlenformat aus.

## Zusätzliche Attribute

Die Attribute, die für alle {{HTMLElement("input")}}-Elemente üblich sind, gelten auch für `date`-Eingaben, können jedoch deren Darstellung möglicherweise nicht beeinflussen. Beispielsweise könnten `size` und `placeholder` nicht funktionieren. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach auftritt, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, dann hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datums-String **später oder gleich** dem des `min`-Attributs sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) vorher auftritt, schlägt das Element bei der [Einschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, dann hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datums-String **früher oder gleich** dem des `max`-Attributs sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert zum Inkrementieren ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten und ein geeigneter Standardwert, wenn keiner dieser Werte bereitgestellt wird) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Inkrementieren impliziert ist und jeder Wert zulässig ist (unter Ausschluss anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Inkrementier-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei bei zwei gleich nahen Optionen Zahlen in positiver Richtung bevorzugt werden.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als eine Anzahl von Millisekunden betrachtet, die 86.400.000 mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag angibt.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat den gleichen Effekt wie `1` für `date`-Eingaben.

## Verwendung von Date-Eingaben

Date-Eingabefelder bieten eine einfache Oberfläche zur Auswahl von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Spracheinstellung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Anwendungsbeispiele für `<input type="date">`.

### Grundlegende Verwendung von Date

Die grundlegendste Verwendung von `<input type="date">` beinhaltet ein `<input>` kombiniert mit seinem {{htmlelement("label")}}, wie unten dargestellt:

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

Dieses HTML sendet das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — dies resultiert in einer URL wie `https://example.com/?bday=1955-06-08`.

### Festlegung von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die Daten einzuschränken, die der Benutzer wählen kann. Im folgenden Beispiel setzen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monat- und Jahrteile des Textfeldes werden nicht bearbeitbar sein, und Daten außerhalb des Aprils 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden sollen (z.B. nur Samstage auswählbar zu machen).

### Kontrolle der Eingabegröße

`<input type="date">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS), um es zu dimensionieren.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über dessen Format hinaus. Die Schnittstellen erlauben in der Regel nicht, dass etwas anderes als ein Datum eingegeben wird — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegung von maximalen und minimalen Daten](#festlegung_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der Grenzen liegt.

Sie können auch das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwenden, um die Eingabe des Datums obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Werfen wir einen Blick auf ein Beispiel mit minimalem und maximalem Datum, bei dem auch ein Feld erforderlich gemacht wurde:

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

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Wir verwenden die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da zumindest in Chrome der generierte Inhalt der Eingabe innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ersetzt nicht_ die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML komplett zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnten mit falsch formatierten, zu großen, vom falschen Typ etc. Daten Katastrophen auftreten.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswähler mithilfe des nativen `<input type="date">`-Pickers.

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
        Ein String, der ein Datum im Format YYYY-MM-DD darstellt,
        oder leer
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
      <td><strong>DOM-Interface</strong></td>
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

- Das generische {{HTMLElement("input")}}-Element und das Interface zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Anleitung für Datumsauswahl- und Zeiteingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
