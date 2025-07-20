---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumsauswahl-Benutzeroberfläche variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, jedoch _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

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

Ein String, der das in die Eingabe eingegebene Datum repräsentiert. Das Datum wird gemäß dem [Datumszeichenkettenformat](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, so:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Spracheinstellung des Browsers des Benutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` auf `date` gesetzt ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Er liest diesen Wert dann im String- und Zahlenformat zurück.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Eingabeattributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemein sind, unterstützt die `date`-Eingabe die folgenden Attribute:

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs keine mögliche Datumszeichenkette im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datumsstring **später oder gleich dem** im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) vorher liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs keine mögliche Datumszeichenkette im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datumsstring **früher oder gleich dem** im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert angepasst werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die ein Vielfaches der Schritte vom Schrittbasiswert entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (die Unix-Epoche, `1970-01-01`), wenn keines von beiden angegeben ist.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als Anzahl von Millisekunden betrachtet, die 86.400.000-mal so groß ist wie der `step`-Wert (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 1, was 1 Tag bedeutet.

Ein Stringwert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert zulässig ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). Tatsächlich hat es den gleichen Effekt wie `1` für `date`-Eingaben, da die Auswahl-Benutzeroberfläche nur die Auswahl ganzer Tage zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden und dabei Werte in positiver Richtung bevorzugen, wenn es zwei gleich naheliegende Optionen gibt.

## Verwendung von Dateneingaben

Datumseingaben bieten eine einfache Schnittstelle zur Auswahl von Daten und normalisieren das gesendete Datenformat an den Server, unabhängig von der Ländereinstellung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungsbeispiele von `<input type="date">`.

### Grundlegende Verwendung von Datum

Der grundlegendste Gebrauch von `<input type="date">` beinhaltet eine `<input>`-Eingabe kombiniert mit ihrem {{htmlelement("label")}}, wie unten gezeigt:

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

Dieses HTML reicht das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` ein — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die auswählbaren Daten durch den Benutzer einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30` fest:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monate und Jahre im Textfeld sind nicht bearbeitbar, und Daten außerhalb von April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die jedes Mal gesprungen werden, wenn das Datum erhöht wird (z.B. nur Samstage auswählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie dafür [CSS](/de/docs/Web/CSS).

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über das Format hinaus. Die Schnittstellen lassen Sie in der Regel nichts eingeben, das kein Datum ist — was hilfreich ist.

Wenn Sie die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, sobald Sie versuchen, ein außergrenzwertiges Datum abzusenden.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Datumseingabe obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld abzusenden.

Schauen wir uns ein Beispiel für minimale und maximale Daten an und machen außerdem das Feld erforderlich:

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

Falls Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Wir verwenden die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einen {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da zumindest in Chrome der generierte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ersetzt nicht_ die Validierung auf dem Server. Es ist einfach, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server es versäumt, die empfangenen Daten zu validieren, könnten katastrophale Daten auftauchen, die schlecht formatiert, zu groß oder vom falschen Typ sind, usw.

## Beispiele

In diesem Beispiel erstellen wir einen Date Picker mit dem nativen `<input type="date">` Picker.

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
        Ein String, der ein Datum im Format YYYY-MM-DD repräsentiert, oder leer
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

- Den generischen {{HTMLElement("input")}}-Element und die Schnittstelle zu ihrer Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Uhrzeitauswahl-Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
