---
title: HTML-Attributwert für `<input type="month">`
short-title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erzeugen Eingabefelder, in die Benutzer einen Monat und ein Jahr eingeben können.
Der Wert ist eine Zeichenfolge im Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatszahl ist.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;month&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Start month:</label>

<input type="month" id="start" name="start" min="2018-03" value="2018-05" />
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

Eine Zeichenfolge, die den in das Eingabefeld eingegebenen Monat und das Jahr im Format YYYY-MM darstellt: ein Jahr mit vier oder mehr Ziffern, ein Bindestrich (`-`) und ein zweistelliger Monat.
Das Format der Monatszeichenfolge für diesen Eingabetyp wird unter [Monatszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Einen Standardwert festlegen

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) einen Monat und ein Jahr angeben:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Beachten Sie, dass sich das angezeigte Datumsformat vom tatsächlichen `value` unterscheidet: Die meisten {{Glossary("user_agent", "User-Agents")}} zeigen Monat und Jahr entsprechend der eingestellten Sprache und Region des Betriebssystems an. Der Datumswert in `value` hat dagegen immer das Format `yyyy-MM`.

Wenn der obige Wert an den Server gesendet wird, sieht er beispielsweise so aus: `bday-month=1978-06`.

### Den Wert mit JavaScript festlegen

Sie können den Datumswert auch mit JavaScript über die Eigenschaft [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) auslesen und festlegen:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" />
```

```js
const monthControl = document.querySelector('input[type="month"]');
monthControl.value = "2001-06";
```

{{EmbedLiveSample("Setting_the_value_using_JavaScript", 600, 60)}}

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, stehen für `month`-Eingabefelder die folgenden Attribute zur Verfügung.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument.
Das {{HTMLElement("datalist")}}-Element stellt eine Liste vordefinierter Werte bereit, die Benutzern für dieses Eingabefeld vorgeschlagen werden.
Werte in der Liste, die nicht mit [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht als Optionen vorgeschlagen.
Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen Wert eingeben.

### max

Der späteste zulässige Monat mit Jahr im Zeichenfolgenformat, das oben im Abschnitt [Wert](#wert) beschrieben wurde.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Element fehl.
Wenn der Wert des Attributs `max` keine gültige Zeichenfolge im Format `yyyy-MM` ist, hat das Element keinen Höchstwert.

Dieser Wert muss eine Kombination aus Jahr und Monat angeben, die nach oder gleich der durch das Attribut `min` festgelegten Kombination liegt.

### min

Der früheste zulässige Monat mit Jahr im oben beschriebenen Format `yyyy-MM`.
Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements darunter liegt, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) für das Element fehl.
Wenn für `min` keine gültige Zeichenfolge aus Jahr und Monat angegeben wird, hat das Eingabefeld keinen Mindestwert.

Dieser Wert muss eine Kombination aus Jahr und Monat sein, die vor oder gleich der durch das Attribut `max` festgelegten Kombination liegt.

### readonly

Ein boolesches Attribut, das festlegt, dass Benutzer dieses Feld nicht bearbeiten können.
Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen erforderlichen Wert haben kann, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### step

Das Attribut `step` ist eine Zahl, die die Schrittweite angibt, an die sich der Wert halten muss, oder der unten beschriebene spezielle Wert `any`. Gültig sind nur Werte, die um eine ganzzahlige Anzahl von Schritten von der Schrittbasis entfernt sind. Die Schrittbasis ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01`), wenn keines von beiden angegeben ist.

Bei `month`-Eingabefeldern wird der Wert von `step` in Monaten angegeben. Der Standardwert von `step` ist 1, also ein Monat.

Der Zeichenfolgenwert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern keine anderen Einschränkungen wie [`min`](#min) und [`max`](#max) gelten. Tatsächlich hat er bei `month`-Eingabefeldern dieselbe Wirkung wie `1`, da die Auswahloberfläche nur ganze Monate zulässt.

> [!NOTE]
> Wenn die von Benutzern eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgelegenen gültigen Wert runden. Bei zwei gleich nahen Möglichkeiten werden dabei Werte in positiver Richtung bevorzugt.

## `month`-Eingabefelder verwenden

Datumsbezogene Eingabefelder (einschließlich `month`) erscheinen auf den ersten Blick praktisch: Sie versprechen eine einfache Benutzeroberfläche zur Datumsauswahl und vereinheitlichen das Format der an den Server gesendeten Daten unabhängig von den Spracheinstellungen der Benutzer.
Bei `<input type="month">` gibt es jedoch Probleme, da es derzeit von vielen wichtigen Browsern noch nicht unterstützt wird.

Wir betrachten zunächst einfache und komplexere Einsatzmöglichkeiten von `<input type="month">` und geben anschließend im Abschnitt [Umgang mit der Browser-Unterstützung](#umgang_mit_der_browser-unterstützung) Hinweise dazu, wie sich die eingeschränkte Browser-Unterstützung abfedern lässt.

### Grundlegende Verwendung von `month`

Die einfachste Verwendung von `<input type="month">` besteht aus einer Kombination von {{HTMLElement("input")}}- und {{htmlelement("label")}}-Elementen, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Höchst- und Mindestdatum festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie den Datumsbereich einschränken, aus dem Benutzer wählen können.
Im folgenden Beispiel legen wir `1900-01` als frühesten und `2013-12` als spätesten Monat fest:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input
    id="bday-month"
    type="month"
    name="bday-month"
    min="1900-01"
    max="2013-12" />
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das hat folgende Auswirkungen:

- Es können nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden; Monate außerhalb dieses Bereichs lassen sich im Steuerelement nicht durch Scrollen erreichen.
- Je nach Browser sind Monate außerhalb des festgelegten Bereichs in der Monatsauswahl möglicherweise nicht auswählbar (z. B. in Edge) oder zwar ungültig (siehe [Validierung](#validierung)), aber weiterhin verfügbar (z. B. in Chrome).

### Die Größe des Eingabefelds steuern

`<input type="month">` unterstützt keine Attribute zur Größenfestlegung für Formularelemente wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size).
Um die Größe festzulegen, müssen Sie [CSS](/de/docs/Web/CSS) verwenden.

## Validierung

Standardmäßig validiert `<input type="month">` eingegebene Werte nicht.
Die Benutzeroberflächen lassen in der Regel keine Eingaben zu, die kein Datum sind – was hilfreich ist. Dennoch kann ein Formular mit leerem `month`-Eingabefeld abgesendet oder ein ungültiges Datum (z. B. der 32. April) eingegeben werden.

Um dies zu vermeiden, können Sie mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) die verfügbaren Datumsangaben einschränken (siehe [Höchst- und Mindestdatum festlegen](#höchst-_und_mindestdatum_festlegen)). Zusätzlich können Sie mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) eine Datumseingabe verpflichtend machen.
Browser, die dies unterstützen, zeigen dann einen Fehler an, wenn versucht wird, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld abzusenden.

Sehen wir uns ein Beispiel an: Hier haben wir Mindest- und Höchstwerte festgelegt und das Feld außerdem als erforderlich markiert:

```html
<form>
  <div>
    <label for="month">
      What month would you like to visit (June to Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular abzusenden, ohne Monat und Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Probieren Sie das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS aus dem obigen Beispiel.
Wir verwenden die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um das Eingabefeld abhängig davon zu gestalten, ob der aktuelle Wert gültig ist.
Die Symbole mussten wir auf einem {{htmlelement("span")}}-Element neben dem Eingabefeld platzieren, statt auf dem Eingabefeld selbst: In Chrome wird generierter Inhalt innerhalb des Formularsteuerelements platziert und kann dort nicht sinnvoll gestaltet oder angezeigt werden.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben.
> HTML lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird.
> Es ist auch möglich, das HTML vollständig zu umgehen und Daten direkt an Ihren Server zu senden.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können falsch formatierte Daten (oder zu große Daten, Daten des falschen Typs usw.) schwerwiegende Probleme verursachen.

## Umgang mit der Browser-Unterstützung

Die Benutzeroberfläche des Steuerelements unterscheidet sich generell von Browser zu Browser. Derzeit ist die Unterstützung lückenhaft: Nur Chromium-Browser auf Desktopgeräten und mobile Browser bieten brauchbare Implementierungen. Das Steuerelement wird meist als kalenderähnliches Raster oder als zwei Auswahlräder dargestellt.

In Browsern, die `month`-Eingabefelder nicht unterstützen, wird stattdessen [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) verwendet. Dabei kann der eingegebene Text möglicherweise automatisch daraufhin validiert werden, ob er das erwartete Format hat. Dennoch entstehen Probleme sowohl für die Einheitlichkeit der Benutzeroberfläche (da ein anderes Steuerelement angezeigt wird) als auch für die Verarbeitung der Daten.

Das zweite Problem ist das schwerwiegendere.
Wie bereits erwähnt, wird der tatsächliche Wert eines `month`-Eingabefelds immer auf das Format `yyyy-mm` normalisiert.
Ein `text`-Eingabefeld weiß in seiner Standardkonfiguration dagegen nicht, welches Datumsformat erwartet wird. Das ist problematisch, weil Datumsangaben auf viele verschiedene Arten geschrieben werden.
Beispiele:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- und so weiter …

Eine Möglichkeit, dies zu umgehen, besteht darin, dem `month`-Eingabefeld ein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) hinzuzufügen.
Das `month`-Eingabefeld selbst verwendet es zwar nicht. Wenn der Browser jedoch auf ein `text`-Eingabefeld zurückgreift, wird das Muster verwendet.
Öffnen Sie beispielsweise die folgende Demo in einem Browser, der `month`-Eingabefelder nicht unterstützt:

```html
<form>
  <div>
    <label for="month">
      What month would you like to visit (June to Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required
      pattern="[0-9]{4}-[0-9]{2}" />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

Wenn Sie versuchen, das Formular abzusenden, sehen Sie, dass der Browser nun eine Fehlermeldung anzeigt (und das Eingabefeld als ungültig kennzeichnet), falls Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Ziffer von 0 bis 9 ist.
Natürlich hindert das niemanden daran, ungültige Datumsangaben (wie `0000-42`) oder Datumsangaben einzugeben, die zwar dem Muster entsprechen, aber falsch formatiert sind.

Hinzu kommt, dass Benutzer nicht unbedingt wissen, welches der vielen Datumsformate erwartet wird.
Hier ist also noch weitere Arbeit nötig.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Die beste browserübergreifende Lösung für Datumsangaben in Formularen besteht darin, Monat und Jahr in getrennten Steuerelementen eingeben zu lassen (häufig werden dafür {{htmlelement("select")}}-Elemente verwendet; eine Implementierung finden Sie unten) oder JavaScript-Bibliotheken wie das Plugin [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden – zumindest so lange, bis alle wichtigen Browser diese Eingabefelder seit einiger Zeit unterstützen.

## Beispiele

In diesem Beispiel erstellen wir zwei Gruppen von Benutzeroberflächenelementen, mit denen Benutzer jeweils einen Monat und ein Jahr auswählen können.
Die erste verwendet ein natives `month`-Eingabefeld. Die zweite besteht aus zwei {{HTMLElement("select")}}-Elementen, mit denen Monat und Jahr unabhängig voneinander ausgewählt werden können. Sie dient der Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular zur Abfrage von Monat und Jahr sieht so aus:

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">What month would you like to visit us?</label>
    <input type="month" id="month-visit" name="month-visit" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">What month would you like to visit us?</p>
  <div class="fallbackDatePicker">
    <div>
      <span>
        <label for="month">Month:</label>
        <select id="month" name="month">
          <option selected>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </span>
      <span>
        <label for="year">Year:</label>
        <select id="year" name="year"></select>
      </span>
    </div>
  </div>
</form>
```

Das {{HTMLElement("div")}}-Element mit der ID `nativeDatePicker` verwendet den Eingabetyp `month`, um Monat und Jahr abzufragen. Das `<div>`-Element mit der ID `fallbackDatePicker` verwendet stattdessen zwei `<select>`-Elemente.
Mit dem ersten wird der Monat, mit dem zweiten das Jahr ausgewählt.

Das `<select>`-Element zur Monatsauswahl enthält fest eingetragene Monatsnamen, da sich diese nicht ändern (die Lokalisierung bleibt dabei unberücksichtigt).
Die Liste der verfügbaren Jahreszahlen wird abhängig vom aktuellen Jahr dynamisch erzeugt. In den Codekommentaren unten wird genauer erklärt, wie diese Funktionen arbeiten.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

### JavaScript

Es folgt der JavaScript-Code, der auswählt, welcher Ansatz verwendet wird, und die Liste der Jahre für das nicht native `<select>`-Element erstellt.

Besonders interessant ist möglicherweise der Code zur Erkennung der Browser-Unterstützung.
Um festzustellen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, dessen `type` auf `month` zu setzen, und prüfen unmittelbar danach, welchen Typ es hat.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies der Ersatztyp für nicht unterstützte `month`-Eingabefelder ist.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir die native Auswahl aus und zeigen stattdessen die alternative Benutzeroberfläche an.

```js
// Get UI elements
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");

// Hide fallback initially
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Test whether a new date input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "month";
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === "text") {
  // Hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // Populate the years dynamically
  // (the months are always the same, therefore hardcoded)
  populateYears();
}

function populateYears() {
  // Get the current year as a number
  const date = new Date();
  const year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}
```

> [!NOTE]
> Denken Sie daran, dass manche Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))!
> Berücksichtigen Sie dies bei der Entwicklung produktiver Anwendungen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die einen Monat und ein Jahr darstellt, oder
        leer.
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
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
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

- Das allgemeine {{HTMLElement("input")}}-Element und die Schnittstelle zu dessen Bearbeitung, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zur Datums- und Zeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
