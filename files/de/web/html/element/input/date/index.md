---
title: <input type="date">
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumswähler-Benutzeroberfläche variiert je nach Browser und Betriebssystem. Der Wert wird in das Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert umfasst das Jahr, den Monat und den Tag, allerdings _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

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

Ein String, der das im Eingabefeld eingegebene Datum repräsentiert. Das Datum wird gemäß dem [Datumsformat für Zeichenketten](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum in dem [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen, so:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Locale des Browsers des Benutzers_ formatiert, aber der analysierte `value` wird immer als `yyyy-mm-dd` formatiert.

Sie können den Datumwert in JavaScript mit den `value`- und `valueAsNumber`-Eigenschaften von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}} Element, dessen `type` `date` ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Dann wird dieser Wert sowohl in Zeichenketten- als auch in Zahlenformaten zurückgelesen.

## Zusätzliche Attribute

Die Attribute, die für alle {{HTMLElement("input")}} Elemente gemeinsam sind, gelten auch für `date`-Eingaben, beeinflussen möglicherweise jedoch deren Darstellung nicht. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs keine mögliche Datumszeichenkette im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumwert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert eine Datumszeichenkette sein, die **später oder gleich** derjenigen im `min`-Attribut ist.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) früher liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs keine mögliche Datumszeichenkette im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumwert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert eine Datumszeichenkette sein, die **früher oder gleich** derjenigen im `max`-Attribut ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, welcher unten beschrieben wird. Nur Werte, die dem Standwert ([`min`](#min) falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein entsprechender Standardwert, falls keines von beiden angegeben ist) entsprechen, sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass keine Einhaltung eines festgelegten Schritts impliziert wird und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht dem Schrittwert entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} zum nächsten gültigen Wert runden, wobei bei zwei gleich nahen Optionen vorzugsweise in positiver Richtung gerundet wird.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die dem `step`-Wert multipliziert mit 86.400.000 (die zugrunde liegende numerische Wert ist in Millisekunden) entspricht. Der Standardwert von `step` beträgt 1 und zeigt einen Tag an.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat bei `date`-Eingaben die gleiche Wirkung wie `1`.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Oberfläche zum Auswählen von Daten und normalisieren das an den Server gesendete Datenformat unabhängig von der Locale des Benutzers.

In diesem Abschnitt betrachten wir einfache und dann komplexere Anwendungen von `<input type="date">`.

### Grundlegende Anwendungen von Datum

Die grundlegendste Verwendung von `<input type="date">` umfasst eine `<input>`, die mit ihrem {{htmlelement("label")}} kombiniert ist, wie unten gezeigt:

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

Dieses HTML übermittelt das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

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

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresfelder des Textfeldes sind nicht bearbeitbar, und Daten außerhalb April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) können Sie verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum erhöht wird (z. B. um nur Samstage wählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) für die Größenanpassung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen lassen Sie im Allgemeinen nichts eingeben, was kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Form-Steuerelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen zu übermitteln.

Sie können auch das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfelds obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld abzusenden.

Betrachten wir ein Beispiel für Mindest- und Höchstdaten und ein verpflichtendes Feld:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzuschicken, zeigt der Browser einen Fehler an. Versuchen Sie nun, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Wir verwenden die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld hinzuzufügen, je nachdem, ob der aktuelle Wert gültig ist oder nicht. Wir mussten das Symbol auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da zumindest in Chrome der generierte Inhalt der Eingabe innerhalb des Form-Steuerelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die Validierung auf der Clientseite _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte es zu Katastrophen mit schlecht formatierten, zu großen oder falschen Datentypen kommen.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahlmechanismus mit dem nativen `<input type="date">` Auswahlfeld.

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
        Eine Zeichenkette, die ein Datum im YYYY-MM-DD
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}} Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Anleitung für Datums- und Zeitwahlfelder](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
