---
title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{HTMLElement("input")}}-Elemente des Typs **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr einfach eingegeben werden können. Der Wert ist ein String im Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; im Moment ist die Unterstützung lückenhaft, da nur Chrome/Opera und Edge auf dem Desktop – und die meisten modernen mobilen Browserversionen – brauchbare Implementierungen haben. In Browsern, die `month`-Eingaben nicht unterstützen, wechselt das Steuerelement elegant zu [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), obwohl möglicherweise eine automatische Validierung des eingegebenen Textes erfolgt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der untenstehende Screenshot, wie es in Chrome und Opera aussieht. Ein Klick auf den Pfeil nach unten auf der rechten Seite öffnet einen Datumsauswähler, der es Ihnen ermöglicht, Monat und Jahr auszuwählen.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des eingegebenen Monats und Jahres im Format YYYY-MM darstellt (mehrstellige Jahreszahl, gefolgt von einem Bindestrich (`-`), gefolgt von dem zweistelligen Monat). Das Format des von diesem Eingabetyp verwendeten Monatsstrings wird in [Monatsstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Einen Standardwert setzen

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Datumsformat vom tatsächlichen `value` abweicht; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer für das Gebietsschema geeigneten Form an, basierend auf dem eingestellten Gebietsschema des Betriebssystems des Benutzers, während das Datums`value` immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er aus wie `bday-month=1978-06`.

### Den Wert mit JavaScript setzen

Sie können den Datumswert auch in JavaScript über die [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft abrufen und setzen, zum Beispiel:

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

Zusätzlich zu den für {{HTMLElement("input")}}-Elemente üblichen Attributen bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributes ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vorher festgelegter Werte, die dem Benutzer als Vorschläge für diese Eingabe gemacht werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden in den Vorschlagsoptionen nicht aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser voreingestellten Liste auswählen oder einen anderen Wert eingeben.

### max

Das späteste Jahr und Monat, im oben im [Wert](#wert)-Abschnitt besprochenen String-Format, das akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element [Beschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributes kein gültiger String im `yyyy-MM`-Format ist, hat das Element keinen Höchstwert.

Dieser Wert muss eine Jahr-Monat-Paarung später oder gleich der im `min`-Attribute angegebenen Paarung spezifizieren.

### min

Das früheste Jahr und Monat, das im oben beschriebenen `yyyy-MM`-Format akzeptiert wird. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements geringer als dieser Wert ist, schlägt das Element die [Beschränkungsüberprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein nicht gültiger Jahr- und Monatsstring für `min` angegeben ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss eine Jahr-Monat-Paarung sein, die früher oder gleich der im `max`-Attribute angegebenen Paarung ist.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem zusätzlich spezifizierten `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Zahl von Schritten vom Basiswert entfernt sind, sind gültig. Der Basiswert ist [`min`](#min), wenn angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01`), wenn keiner angegeben ist.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben. Der Standardwert von `step` ist 1, was 1 Monat bedeutet.

Ein String-Wert von `any` bedeutet, dass kein Schritt erforderlich ist und jeder Wert erlaubt ist (außer es bestehen andere Beschränkungen, wie [`min`](#min) und [`max`](#max)). Tatsächlich hat es die gleiche Wirkung wie `1` für `month`-Eingaben, weil die Auswahl-UI nur das Auswählen ganzer Monate zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei gleich nahen Optionen Zahlen in positiver Richtung bevorzugt werden.

## Verwendung von Monatsangaben

Datumsbezogene Eingaben (einschließlich `month`) erscheinen auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche für die Auswahl von Datumsangaben und normalisieren das an den Server gesendete Datenformat, unabhängig vom Gebietsschema des Benutzers. Es gibt jedoch Probleme mit `<input type="month">`, da es derzeit viele wichtige Browser gibt, die es noch nicht unterstützen.

Wir werden uns grundlegende und komplexere Verwendungen von `<input type="month">` ansehen und dann im Abschnitt [Umgang mit Browser-Unterstützung](#umgang_mit_browser-unterstützung) Ratschläge zur Minderung des Browser-Support-Problems geben.

### Grundlegende Verwendungen des Monats

Die grundlegendste Verwendung von `<input type="month">` umfasst eine Kombination aus einem einfachen {{HTMLElement("input")}} und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Maximal- und Minimaldaten festlegen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um den Bereich der vom Benutzer auswählbaren Daten einzuschränken. Im folgenden Beispiel geben wir ein minimales Datum von `1900-01` und ein maximales Datum von `2013-12` an:

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

Das Ergebnis hier ist:

- Es können nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden; Monate außerhalb dieses Bereichs können in der Steuerung nicht gescrollt werden.
- Je nachdem, welchen Browser Sie verwenden, können Sie feststellen, dass Monate außerhalb des angegebenen Bereichs im Monatspicker möglicherweise nicht auswählbar sind (z. B. Edge) oder ungültig (siehe [Validierung](#validierung)), aber immer noch verfügbar (z. B. Chrome) sind.

### Eingabegröße steuern

`<input type="month">` unterstützt keine Größenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanpassungen zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen Sie im Allgemeinen nichts eingeben, was kein Datum ist – was hilfreich ist – aber Sie können das Formular dennoch mit leerer Monatsheingabe oder einem ungültigen Datum (z. B. dem 32. April) einreichen.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximal- und Minimaldaten festlegen](#maximal-_und_minimaldaten_festlegen)) und zusätzlich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfelds erforderlich zu machen. Als Ergebnis werden unterstützende Browser einen Fehler anzeigen, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der gesetzten Grenzen liegt oder ein leeres Datumsfeld ist.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Daten festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne sowohl spezifischen Monat als auch Jahr einzureichen (oder mit einem Datum außerhalb der gesetzten Grenzen), zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Validation', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Monatserforderlichkeitsaufforderung im Chrome-Browser](month-required.png)

Hier ist das im obigen Beispiel verwendete CSS. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Icons auf einen {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, weil in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder gezeigt werden kann.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML ganz umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ usw.) eingereicht werden.

## Umgang mit Browser-Unterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben zum Zeitpunkt des Schreibens darin, dass viele bedeutende Browser sie noch nicht alle implementiert haben; nur Chrome/Opera und Edge unterstützen sie auf dem Desktop, und die meisten modernen Browser auf Mobilgeräten. Das `month`-Feld auf Chrome für Android sieht beispielsweise so aus:

![Monatspicker auf Chrome für Android](month-android.png)

Nicht unterstützende Browser wechseln elegant zu einer Texteingabe, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement ist unterschiedlich) als auch bei der Datenverarbeitung.

Das zweite Problem ist das ernsthaftere der beiden. Wie bereits erwähnt, wird der tatsächliche Wert bei einer `month`-Eingabe immer auf das Format `yyyy-mm` normalisiert. Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Ahnung, in welchem Format das Datum sein soll, und das ist ein Problem wegen der Vielzahl an verschiedenen Möglichkeiten, wie Menschen Datum schreiben. Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (Juli 2022)
- und so weiter...

Ein Weg, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut auf Ihrer `month`-Eingabe zu setzen. Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser es behandelt, als wäre es eine `text`-Eingabe. Versuchen Sie zum Beispiel, das folgende Beispiel in einem Browser zu betrachten, der `month`-Eingaben nicht unterstützt:

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

{{EmbedLiveSample('Handling_browser_support', 600, 100)}}

Wenn Sie versuchen, es zu übermitteln, wird der Browser jetzt eine Fehlermeldung anzeigen (und die Eingabe als ungültig markieren), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist. Natürlich hindert dies die Leute nicht daran, ungültige Daten einzugeben (wie `0000-42`) oder falsch formatierte Daten, die dem Muster entsprechen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird. Wir haben noch Arbeit vor uns.

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

Der beste Weg, um mit Daten in Formularen auf eine browserübergreifende Weise umzugehen (bis alle großen Browser sie eine Weile unterstützt haben), besteht darin, den Benutzer den Monat und das Jahr in separaten Steuerelementen eingeben zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery-Datumsauswahler](https://jqueryui.com/datepicker/)-Plug-in zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von Benutzeroberflächenelementen, die jeweils darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und eines Jahres zu ermöglichen. Das erste ist eine native `month`-Eingabe, und das andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig voneinander auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das den Monat und das Jahr anfragt, sieht folgendermaßen aus:

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um Monat und Jahr zu erfragen, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet. Das erste fragt nach dem Monat, und das zweite nach dem Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate fest kodiert, da diese sich nicht ändern (unter Ignorierung der Lokalisierung). Die Liste der verfügbaren Jahreswerte wird abhängig vom aktuellen Jahr dynamisch generiert (siehe die Kommentare im Code unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der das Auswählen welcher Ansatz verwendet wird und das Einrichten der Liste der Jahre für das nicht-native Jahr-`<select>` behandelt, folgt.

Der Teil des Beispiels, der vielleicht am meisten Interesse weckt, ist der Code zur Feature-Erkennung. Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `month` zu setzen und prüfen dann sofort, welcher Typ eingestellt ist. Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da `month` auf `text` zurückfällt, wenn nicht unterstützt. Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-Benutzeroberfläche an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies bei der Entwicklung von Produktionsanwendungen berücksichtigen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der einen Monat und ein Jahr darstellt, oder
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown),
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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
- [Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datums- und Zeitauswahler-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
