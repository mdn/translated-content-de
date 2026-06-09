---
title: '`<input type="date">` HTML-Attributwert'
short-title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente vom **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumsauswahl-UI variiert je nach Browser und Betriebssystem. Der Wert wird in das Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, aber _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

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

Ein Zeichenfolgenwert, der das im Eingabefeld eingetragene Datum darstellt. Das Datum wird gemäß [Format für Datumsangaben](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für das Eingabefeld mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Locale des Benutzerbrowsers_ formatiert, aber der analysierte `value` wird immer im Format `yyyy-mm-dd` formatiert.

Sie können den Datumswert in JavaScript mit den Eigenschaften [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` und `valueAsNumber` abrufen und setzen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` auf `date` gesetzt ist, und legt seinen Wert auf `2017-06-01` (1. Juni 2017) fest. Anschließend wird dieser Wert in Zeichenfolgen- und Zahlenformaten zurückgelesen.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Input-Attributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt das `date`-Input die folgenden Attribute:

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ein späteres Datum ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl das `max`- als auch das `min`-Attribut gesetzt sind, muss dieser Wert eine Datumszeichenfolge **später als oder gleich** der im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ein früheres Datum ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl das `max`- als auch das `min`-Attribut gesetzt sind, muss dieser Wert eine Datumszeichenfolge **früher als oder gleich** der im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die ein ganzzahliges Vielfaches der Schrittgröße vom Schrittbasiswert entfernt sind, sind gültig. Der Schrittbasiswert ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (der Unix-Zeitstempel, `1970-01-01`), wenn keiner angegeben ist.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und wie eine Anzahl von Millisekunden behandelt, die 86.400.000-mal dem `step`-Wert entspricht (der zugrundeliegende numerische Wert ist in Millisekunden). Der Standardwert ist 1, was 1 Tag bedeutet.

Ein Zeichenfolgenwert `any` bedeutet, dass kein Schritt impliziert ist, und jeder Wert erlaubt ist (außer andere Einschränkungen, wie [`min`](#min) und [`max`](#max)). In der Praxis hat es die gleiche Wirkung wie `1` für `date`-Eingaben, da die Auswahl-UI nur die Auswahl ganzer Tage erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} den nächstgelegenen gültigen Wert runden, wobei bevorzugt in die positive Richtung gerundet wird, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Datumseingaben

Datenseingaben bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat unabhängig von der Benutzer-Locale.

In diesem Abschnitt betrachten wir zunächst einfache und dann komplexe Verwendungen von `<input type="date">`.

### Grundlegende Verwendungen von Datum

Die einfachste Verwendung von `<input type="date">` besteht aus einem `<input>` in Kombination mit seinem {{htmlelement("label")}}, wie unten gezeigt:

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

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die vom Benutzer auswählbaren Daten einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monat- und Jahrteile der Textbox sind nicht bearbeitbar, und Daten außerhalb des April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B., um nur Samstage auswählbar zu machen).

### Kontrolle der Eingabegröße

`<input type="date">` unterstützt keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) zur Größenanpassung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert über das Format hinaus nicht. Die Benutzeroberflächen lassen im Allgemeinen nichts zu, was kein Datum ist — was hilfreich ist.

Mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die verfügbaren Daten einschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)). Die Formularelemente deaktivieren ungültige Daten und zeigen einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen einzureichen.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums zwingend erforderlich zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Schauen wir uns ein Beispiel für minimale und maximale Daten an und machen auch ein Feld erforderlich:

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

Hier ist das im obigen Beispiel verwendete CSS. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), um ein Icon neben dem Eingabefeld hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Icon auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da in Chrome zumindest der generierte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server es versäumt, die empfangenen Daten zu validieren, könnte eine Katastrophe mit Daten eintreten, die schlecht formatiert, zu groß, vom falschen Typ usw. sind.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahl mit dem nativen `<input type="date">`-Piker.

### HTML

Das HTML sieht so aus:

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

Das CSS sieht so aus:

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
        Eine Zeichenfolge, die ein Datum im YYYY-MM-DD
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
      <td><strong>IDL Attribute</strong></td>
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
- [Anleitung zu Datum- und Zeitauswahlelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
