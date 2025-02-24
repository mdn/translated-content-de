---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit dem Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr einfach eingegeben werden können. Der Wert ist ein String, dessen Wert im Format `YYYY-MM` vorliegt, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, mit brauchbaren Implementierungen nur in Chrome/Opera und Edge auf Desktop — und den meisten modernen mobilen Browserversionen. In Browsern, die `month`-Eingaben nicht unterstützen, weicht das Steuerelement elegant auf [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) aus, auch wenn möglicherweise eine automatische Validierung des eingegebenen Textes erfolgt, um sicherzustellen, dass er im erwarteten Format vorliegt.

Für diejenigen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der untenstehende Screenshot, wie es in Chrome und Opera aussieht. Durch Klicken auf den Pfeil nach unten auf der rechten Seite wird ein Datumsauswahlfenster angezeigt, in dem Sie den Monat und das Jahr auswählen können.

![Month control auf dem Chrome-Browser](month-control-chrome.png)

Der Microsoft Edge `month`-Steuerung sieht so aus:

![Month control auf dem Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Monats und Jahres darstellt, in der Form YYYY-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat). Das Format des vom Eingabefeld genutzten Monatsstrings wird in [Month strings](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Einstellen eines Standardwerts

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Ein Punkt, den Sie berücksichtigen sollten, ist, dass das angezeigte Datumsformat vom tatsächlichen `value` abweicht; die meisten {{Glossary("user_agent", "User Agents")}} zeigen den Monat und das Jahr in einer für die Umgebung geeigneten Form an, basierend auf der eingestellten Umgebung des Betriebssystems des Benutzers, während das Datums-`value` immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert zum Beispiel an den Server gesendet wird, sieht er so aus: `bday-month=1978-06`.

### Festlegen des Wertes mit JavaScript

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft abrufen und festlegen, zum Beispiel:

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

Zusätzlich zu den gängigen Attributen der {{HTMLElement("input")}}-Elemente bieten Monats-Eingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im gleichen Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat, im oben unter [Wert](#wert) diskutierten String-Format, das akzeptiert wird. Überschreitet der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert, schlägt die [Zwangsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Ist der Wert des `max`-Attributs kein gültiger String im `yyyy-MM`-Format, hat das Element keinen Maximalwert.

Dieser Wert muss eine Jahr-Monat-Paarung angeben, die später oder gleich der durch das `min`-Attribut festgelegten ist.

### min

Das früheste Jahr und der früheste Monat, das akzeptiert wird, im selben oben beschriebenen `yyyy-MM`-Format. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser Wert, schlägt die [Zwangsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der kein gültiger Jahr- und Monatsstring ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss eine Jahr-Monat-Paarung sein, die früher oder gleich der durch das `max`-Attribut festgelegten ist.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schrittgrund [(`min`](#min) sofern angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und einem entsprechenden Standardwert, wenn keiner von diesen angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden, wobei er Zahlen in positiver Richtung bevorzugt, wenn zwei gleich nahe Optionen vorhanden sind.

Für `month`-Eingaben wird der Wert `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende Zahlenwert ebenfalls in Monaten angegeben wird). Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumbezogene Eingaben (einschließlich `month`) wirken auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Region des Benutzers. Es gibt jedoch Probleme mit `<input type="month">`, weil viele große Browser es derzeit noch nicht unterstützen.

Wir werden uns grundlegende und komplexere Anwendungen von `<input type="month">` ansehen und dann Ratschläge zur Lösung des Problems mit der Browserunterstützung im Abschnitt [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung) geben.

### Grundlegende Anwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` beinhaltet eine grundlegende Kombination aus {{HTMLElement("input")}} und {{htmlelement("label")}}-Elementen, wie unten zu sehen:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Einstellung maximaler und minimaler Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um den Datumsbereich einzuschränken, den der Benutzer auswählen kann. Im folgenden Beispiel geben wir einen Mindestmonat `1900-01` und einen Höchstmonat `2013-12` an:

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

Das Ergebnis hier ist, dass:

- Nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden können; Monate außerhalb dieses Bereichs können im Steuerelement nicht gescrollt werden.
- Abhängig von Ihrem verwendeten Browser, könnten Sie feststellen, dass Monate außerhalb des angegebenen Bereichs im Monatspicker nicht auswählbar sind (z.B. Edge) oder ungültig, aber dennoch verfügbar (z.B. Chrome).

### Steuerung der Eingabengröße

`<input type="month">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen für Größenbedürfnisse auf [CSS](/de/docs/Web/CSS) zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen im Allgemeinen nicht zu, dass etwas anderes als ein Datum eingegeben wird — was hilfreich ist — aber Sie können das Formular immer noch mit leerem `month`-Eingabefeld oder einem ungültigen Datum (z.B. dem 32. April) übermitteln.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Einstellung maximaler und minimaler Daten](#einstellung_maximaler_und_minimaler_daten)), und zusätzlich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe des Datums verpflichtend zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld einzureichen.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Daten festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular einzureichen, ohne dass sowohl der Monat als auch das Jahr angegeben sind (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an. Versuchen Sie es jetzt mit dem Beispiel:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Monat erforderlich Eingabeaufforderung im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, weil in Chrome der generierte Inhalt im Formularsteuerung platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die HTML-Formularvalidierung ist kein Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen.
> Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie ganz zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten (oder zu große Daten, vom falschen Typ usw.) übermittelt werden.

## Umgang mit der Browserunterstützung

Wie oben erwähnt, liegt das größte Problem bei der Verwendung von Datumseingaben derzeit darin, dass viele größere Browser sie noch nicht alle implementieren; nur Chrome/Opera und Edge unterstützen es auf dem Desktop, und die meisten modernen Browser auf mobilen Geräten. Ein Beispiel dafür, wie der `month`-Picker auf Chrome für Android aussieht, ist hier:

![Monatspicker auf Chrome für Android](month-android.png)

Nicht unterstützende Browser weichen elegant auf eine Texteingabe aus, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird unterschiedlich sein) als auch auf die Datenverarbeitung.

Das zweite Problem ist ernster von beiden. Wie bereits erwähnt, ist bei einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert. Andererseits hat eine `text`-Eingabe ohne weitere Konfiguration keine Ahnung, in welchem Format das Datum vorliegen sollte, und das ist ein Problem aufgrund der verschiedenen Möglichkeiten, wie Menschen Daten schreiben. Beispielsweise:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- und so weiter...

Eine Möglichkeit, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut auf Ihrer `month`-Eingabe zu setzen. Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser dazu übergeht, es wie eine `text`-Eingabe zu behandeln. Beispielsweise können Sie das folgende Demo in einem Browser ansehen, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es einzureichen, werden Sie sehen, dass der Browser jetzt eine Fehlermeldung anzeigt (und die Eingabe als ungültig markiert), wenn Ihr Eintrag nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl zwischen 0 und 9 ist. Natürlich hindert dies die Leute nicht daran, ungültige Daten einzugeben (z.B. `0000-42`) oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird. Es bleibt noch Arbeit zu tun.

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

Der beste Weg, um mit Daten in Formularen auf eine browserübergreifende Weise umzugehen (bis alle großen Browser sie unterstützt haben), besteht darin, den Benutzer zu bitten, den Monat und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung), oder JavaScript-Bibliotheken wie das [jQuery-Datepicker-Plugin](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sets von Benutzeroberflächenelementen, die jeweils darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und Jahres zu ermöglichen. Das erste ist eine native `month`-Eingabe und das andere ein Paar von {{HTMLElement("select")}}-Elementen, mit denen Monat und Jahr unabhängig voneinander ausgewählt werden können, zur Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das den Monat und das Jahr anfordert, sieht so aus:

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar `<select>`-Elemente verwendet. Das erste fordert den Monat und das zweite das Jahr an.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate fest kodiert, da sie sich nicht ändern (Abgesehen von der Lokalisierung). Die Liste der verfügbaren Jahreswerte wird je nach aktuellem Jahr dynamisch generiert (siehe die Codekommentare unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der die Auswahl der zu verwendenden Methode verwaltet und die Liste der Jahre für das nicht-native Jahres-`<select>` einrichtet, folgt.

Der Teil des Beispiels, der vielleicht von größtem Interesse ist, ist der Code für die Funktionsüberprüfung. Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `month` zu setzen, und überprüfen dann sofort, welcher Typ gesetzt ist. Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da das Month daran zurückfällt, wenn es nicht unterstützt wird. Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-Benutzeroberfläche an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen enthalten (siehe [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))!
> Sie müssen dies bei der Entwicklung von Produktionsanwendungen berücksichtigen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der einen Monat und ein Jahr darstellt oder
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
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
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datums- und Uhrzeitpicker-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
