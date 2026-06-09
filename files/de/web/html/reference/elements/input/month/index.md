---
title: '`<input type="month">` HTML-Attributwert'
short-title: '`<input type="month">`'
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}} Elemente des Typs **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr leicht eingegeben werden können. Der Wert ist ein String, dessen Wert im Format `YYYY-MM` vorliegt, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, mit nur Chrome/Opera und Edge auf Desktops - und den meisten modernen mobilen Browser-Versionen -, die benutzbare Implementierungen haben. In Browsern, die `month`-Eingaben nicht unterstützen, fällt das Steuerelement auf [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zurück, obwohl es möglicherweise eine automatische Validierung des eingegebenen Textes gibt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der Screenshot unten, wie es in Chrome und Opera aussieht. Das Klicken auf den Abwärtspfeil auf der rechten Seite bringt einen Datumswähler hervor, der es Ihnen erlaubt, den Monat und das Jahr auszuwählen.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des eingegebenen Monats und Jahres im Format YYYY-MM repräsentiert (vier oder mehrstellige Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat). Das Format des Monatsstrings, der von diesem Eingabetyp verwendet wird, ist in [Monatsstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Einem Standardwert setzen

Sie können einen Standardwert für das Eingabesteuerelement setzen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attributs angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Eines ist zu beachten: Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value`; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer für die Region passenden Form an, basierend auf der eingestellten Region des Betriebssystems des Benutzers, während der Datumswert immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert zum Beispiel an den Server gesendet wird, sieht er aus wie `bday-month=1978-06`.

### Den Wert mit JavaScript setzen

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft abrufen und setzen, zum Beispiel:

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

Zusätzlich zu den gemeinsamen Attributen von {{HTMLElement("input")}} Elementen bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Das neueste Jahr und der Monat, im oben im Abschnitt [Wert](#wert) besprochenen Stringformat, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String im Format `yyyy-MM` ist, dann hat das Element keinen Maximalwert.

Dieser Wert muss ein Jahr-Monat-Paarung spezifizieren, die später oder gleich der im `min`-Attribut angegebenen ist.

### min

Das früheste Jahr und der Monat, die akzeptiert werden, im selben oben beschriebenen Format `yyyy-MM`. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements weniger ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der kein gültiger Jahr- und Monatsstring ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss ein Jahr-Monat-Paarung sein, die früher oder gleich der im `max`-Attribut angegebenen ist.

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls spezifiziert ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist `min` (#min) wenn angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, oder `0` (der Unix-Epoch, `1970-01`) wenn keines bereitgestellt wird.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben. Der Standardwert von `step` ist 1, was 1 Monat bedeutet.

Ein Stringwert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (außer andere Einschränkungen wie [`min`](#min) und [`max`](#max)). In der Praxis hat es jedoch den gleichen Effekt wie `1` bei `month`-Eingaben, weil die Auswahloberfläche der Benutzeroberfläche nur ganze Monate auswählt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und Präferenz für Zahlen in positiver Richtung haben, wenn zwei gleichnahe Optionen existieren.

## Verwendung von Monatseingaben

Datumsbezogene Eingaben (einschließlich `month`) klingen auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Region des Benutzers. Es gibt jedoch Probleme mit `<input type="month">`, da viele große Browser es derzeit nicht unterstützen.

Wir schauen uns grundlegende und komplexere Anwendungsfälle von `<input type="month">` an und bieten dann im Abschnitt [Umgang mit Browserunterstützung](#umgang_mit_browserunterstützung) Ratschläge zur Minderung des Browserunterstützungsproblems an.

### Grundlegende Verwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` beinhaltet eine Kombination aus einem einfachen {{HTMLElement("input")}} und {{htmlelement("label")}} Element, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Einstellen maximaler und minimaler Daten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um den Bereich der wählbaren Daten zu beschränken. Im folgenden Beispiel geben wir einen Minimalmonat von `1900-01` und einen Maximalmonat von `2013-12` an:

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
- Abhängig davon, welchen Browser Sie verwenden, werden Sie feststellen, dass Monate außerhalb des festgelegten Bereichs möglicherweise nicht im Monatspicker wählbar sind (z.B. Edge), oder ungültig (siehe [Validierung](#validierung)), aber dennoch verfügbar sind (z.B. Chrome).

### Steuerung der Eingabegröße

`<input type="month">` unterstützt keine Größenattribute für Formulare wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Für Größenanforderungen müssen Sie auf [CSS](/de/docs/Web/CSS) zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen Sie im Allgemeinen zwar nichts eingeben, was kein Datum ist - was hilfreich ist - aber Sie können das Formular dennoch mit leerer `month`-Eingabe einreichen oder ein ungültiges Datum (z.B. den 32. April) eingeben.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Einstellen maximaler und minimaler Daten](#einstellen_maximaler_und_minimaler_daten)), und zusätzlich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen. Unterstützende Browser zeigen dann einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld einzureichen.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstdaten festgelegt und außerdem das Feld als erforderlich angegeben:

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

Wenn Sie versuchen, das Formular zu senden, ohne den Monat und das Jahr angegeben zu haben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen unter Ihnen, die einen nicht unterstützenden Browser verwenden:

![Monatsanforderung im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihnen ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn unrichtig formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ, usw.) eingereicht werden.

## Umgang mit Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben derzeit darin, dass viele große Browser sie noch nicht implementiert haben; nur Chrome/Opera und Edge unterstützen sie auf Desktop, und die meisten modernen Browser auf mobilen Geräten. Als Beispiel sieht der `month`-Picker auf Chrome für Android so aus:

![Monatsauswahl auf Chrome für Android](month-android.png)

Nicht unterstützende Browser fallen zurück auf eine Texteingabe, was Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird unterschiedlich sein) als auch in Bezug auf die Datenverarbeitung schafft.

Das zweite Problem ist das ernstere der beiden. Wie bereits erwähnt, wird bei einer `month`-Eingabe der tatsächliche Wert immer im Format `yyyy-mm` normalisiert. Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Vorstellung davon, in welchem Format das Datum vorliegen sollte, und dies ist ein Problem aufgrund der Vielzahl verschiedener Arten, wie Menschen Daten schreiben. Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- und so weiter…

Eine Möglichkeit, dies zu umgehen, besteht darin, ein `pattern`-Attribut auf Ihrer `month`-Eingabe zu platzieren. Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser sie als `text`-Eingabe behandelt. Zum Beispiel versuchen Sie, die folgende Demo in einem Browser zu betrachten, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es einzureichen, werden Sie feststellen, dass der Browser nun eine Fehlermeldung anzeigt (und die Eingabe als ungültig hervorhebt), wenn Ihr Eintrag nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist. Natürlich hindert dies die Leute nicht daran, ungültige Daten (wie `0000-42`) oder falsch formatierte Daten, die dem Muster folgen, einzugeben.

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

Der beste Weg, um mit Daten in Formularen auf plattformübergreifende Weise umzugehen (bis alle großen Browser sie für eine Weile unterstützt haben), besteht darin, den Benutzer zu bitten, den Monat und das Jahr in separaten Steuerelementen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) einzugeben oder JavaScript-Bibliotheken wie das [jQuery-Datumsauswahl-Plugin](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils entworfen sind, um dem Benutzer die Auswahl eines Monats und eines Jahres zu ermöglichen. Der erste ist eine native `month`-Eingabe und der andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig zu wählen, für Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das den Monat und das Jahr anfordert, sieht folgendermaßen aus:

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet. Das erste erfragt den Monat und das zweite das Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate vordefiniert, da sie sich nicht ändern (außerhalb der Berücksichtigung von Lokalisierung). Die Liste der verfügbaren Jahrwerte wird dynamisch je nach aktuellem Jahr generiert (siehe die Codekommentare unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der die Auswahl der zu verwendenden Methode und die Einrichtung der Liste der Jahre für die nicht-native Jahr-`<select>` behandelt, folgt.

Der Teil des Beispiels, der möglicherweise von größtem Interesse ist, ist der Code zur Feature-Erkennung. Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen Typ auf `month` zu setzen, und überprüfen dann sofort, auf welchen Typ es gesetzt ist. Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da das passiert, wenn `month` nicht unterstützt wird. Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Rückfall-Picker-Benutzeroberfläche an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Dies müssen Sie bei der Entwicklung von Produktionsanwendungen berücksichtigen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der einen Monat und Jahr repräsentiert, oder
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Verwendete Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zum Datum- und Zeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
