---
title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und Jahr einfach eingegeben werden können.
Der Wert ist eine Zeichenkette im Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, da nur Chrome/Opera und Edge auf dem Desktop – und die meisten modernen mobilen Browserversionen – brauchbare Implementierungen haben.
In Browsern, die `month`-Eingaben nicht unterstützen, wird das Steuerelement sanft zu [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) herabgestuft, obwohl es möglicherweise eine automatische Validierung des eingegebenen Texts gibt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der Screenshot unten, wie es in Chrome und Opera aussieht.
Ein Klick auf den Pfeil nach unten auf der rechten Seite öffnet ein Datumsauswahlfeld, mit dem Sie den Monat und das Jahr auswählen können.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Eine Zeichenkette, die den Wert des in das Eingabefeld eingegebenen Monats und Jahres im Format YYYY-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat) darstellt.
Das Format der von diesem Eingabetyp verwendeten Monatszeichenkette wird in [Monatszeichenketten](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Festlegen eines Standardwertes

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie einen Monat und ein Jahr im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Ein Punkt, den es zu beachten gilt, ist, dass das angezeigte Datumsformat vom tatsächlichen `value` abweicht; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer lokalen Form gemäß der eingestellten Sprache des Betriebssystems des Benutzers an, während das Datum `value` immer als `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er folgendermaßen aus: `bday-month=1978-06`.

### Festlegen des Wertes mit JavaScript

Sie können den Datumswert auch mit JavaScript abrufen und festlegen, indem Sie die [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft verwenden, zum Beispiel:

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

Zusätzlich zu den gemeinsamen Attributen von {{HTMLElement("input")}}-Elementen bieten Monatseingaben die folgenden Attribute.

### list

Die Werte des list-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements.
Das {{HTMLElement("datalist")}} bietet eine Liste vorgegebener Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden.
Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt.
Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat, die akzeptiert werden, im oben im Abschnitt [Wert](#wert) beschriebenen Zeichenkettenformat.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs keine gültige Zeichenkette im `yyyy-MM`-Format ist, hat das Element keinen Höchstwert.

Dieser Wert muss eine Jahr-Monat-Kombination später oder gleich dem durch das `min`-Attribut angegebenen Wert angeben.

### min

Das früheste Jahr und der früheste Monat, die akzeptiert werden, im oben beschriebenen Format `yyyy-MM`.
Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der keine gültige Jahr- und Monatszeichenkette ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss eine Jahr-Monat-Kombination sein, die früher oder gleich dem durch das `max`-Attribut angegebenen Wert ist.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann.
Sein `value` kann jedoch weiterhin mit JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit auch angegebenem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die dem Grundlage für das Schrittmaß ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls und ein geeigneter Standardwert, falls keiner dieser Werte angegeben ist) gleich sind, sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass kein Schrittmaß impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Konfigurationen entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende Zahlenwert ebenfalls in Monaten angegeben ist).
Der Standardwert von `step` beträgt 1 Monat.

## Verwendung von Monatseingaben

Datumbezogene Eingaben (einschließlich `month`) klingen auf den ersten Blick praktisch; sie versprechen eine einfache Benutzeroberfläche zum Auswählen von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Ortsangabe des Benutzers.
Es gibt jedoch Probleme mit `<input type="month">`, da viele große Browser es zu diesem Zeitpunkt noch nicht unterstützen.

Wir betrachten grundlegende und komplexere Anwendungen von `<input type="month">` und bieten dann Ratschläge zur Minderung des Browserunterstützungsproblems im Abschnitt [Handhabung der Browserunterstützung](#handhabung_der_browserunterstützung).

### Grundlegende Verwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` umfasst eine Basis-Kombination von {{HTMLElement("input")}}- und {{htmlelement("label")}}-Elementen, wie unten zu sehen:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Einstellen von maximalen und minimalen Daten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um den Bereich der Daten einzuschränken, die der Benutzer auswählen kann.
Im folgenden Beispiel geben wir einen Mindestmonat von `1900-01` und einen Höchstmonat von `2013-12` an:

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
- Je nachdem, welchen Browser Sie verwenden, werden Sie feststellen, dass Monate außerhalb des angegebenen Bereichs möglicherweise nicht im Monatspicker ausgewählt werden können (z. B. Edge) oder ungültig (siehe [Validierung](#validierung)), aber dennoch verfügbar sind (z. B. Chrome).

### Steuerung der Eingabegeröße

`<input type="month">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size).
Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an.
Die UI-Implementierungen lassen Sie im Allgemeinen nichts eingeben, was kein Datum ist – was hilfreich ist – aber Sie können das Formular dennoch mit der leeren `month`-Eingabe einreichen oder ein ungültiges Datum eingeben (z. B. den 32. April).

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten zu beschränken (siehe [Einstellen von maximalen und minimalen Daten](#einstellen_von_maximalen_und_minimalen_daten)), und darüber hinaus das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen.
Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld einzureichen.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Maximaldaten festgelegt und das Feld auch erforderlich gemacht:

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

Wenn Sie versuchen, das Formular ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Validation', 600, 120)}}

Hier ist ein Screenshot für diejenigen unter Ihnen, die keinen unterstützenden Browser verwenden:

![Monatsanforderungsaufforderung im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird.
Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingaben basierend darauf zu stylen, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben dem Eingabeelement platzieren, nicht auf dem Eingabefeld selbst, da der generierte Inhalt in Chrome innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen.
> Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht überprüft, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

## Handhabung der Browserunterstützung

Wie bereits erwähnt, besteht das Hauptproblem bei der Verwendung von Datumsangaben zu diesem Zeitpunkt darin, dass viele große Browser sie noch nicht alle implementiert haben; nur Chrome/Opera und Edge unterstützen es auf dem Desktop, und die meisten modernen Browser auf Mobilgeräten.
Als Beispiel sieht der `month`-Picker in Chrome für Android so aus:

![Monatsauswahl in Chrome für Android](month-android.png)

Browser ohne Unterstützung gehen elegant zu einer Texteingabe über, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (die dargestellte Steuerung wird unterschiedlich sein) als auch in Bezug auf die Datenverarbeitung.

Das zweite Problem ist das schwerwiegendere der beiden.
Wie bereits erwähnt, ist der tatsächliche Wert einer `month`-Eingabe immer auf das Format `yyyy-mm` normalisiert.
Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Vorstellung davon, in welchem Format das Datum sein sollte, und dies ist ein Problem aufgrund der unterschiedlichen Arten, wie Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (Juli 2022)
- und so weiter...

Eine Möglichkeit, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut auf Ihrer `month`-Eingabe festzulegen.
Selbst wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser sie als `text`-Eingabe behandelt.
Versuchen Sie beispielsweise, das folgende Demo in einem Browser anzuzeigen, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es abzusenden, sehen Sie, dass der Browser jetzt eine Fehlermeldung anzeigt (und die Eingabe als ungültig hervorhebt), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich hindert das die Leute nicht daran, ungültige Daten einzugeben (wie `0000-42`) oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Dateiformate erwartet wird.
Wir haben noch Arbeit vor uns.

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

Der beste Weg, um mit Daten in Formularen auf eine plattformübergreifende Weise umzugehen (bis alle großen Browser sie eine Weile unterstützt haben), besteht darin, den Benutzer dazu zu bringen, den Monat und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery Date Picker](https://jqueryui.com/datepicker/) Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sets von UI-Elementen, die jeweils darauf ausgelegt sind, dass der Benutzer einen Monat und ein Jahr auswählt.
Das erste ist eine native `month`-Eingabe, und das andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig voneinander auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr abzufragen, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet.
Das erste fragt den Monat ab, und das zweite das Jahr.

Das `<select>`-Element zur Auswahl des Monats ist mit den Namen der Monate hartcodiert, da diese sich nicht ändern (unter Berücksichtigung der Lokalisierung).
Die Liste der verfügbaren Jahreswerte wird dynamisch je nach aktuellem Jahr generiert (siehe die Code-Kommentare unten für detaillierte Erklärungen darüber, wie diese Funktionen arbeiten).

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

Der JavaScript-Code, der die Auswahl steuert, welche Methode verwendet wird, und die Liste der Jahre für das nicht-native Jahres-`<select>` festlegt, folgt.

Der Teil des Beispiels, der am meisten interessiert sein könnte, ist der Code zur Funktionsüberprüfung.
Um zu überprüfen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen dessen `type` auf `month` zu setzen und prüfen dann sofort, auf welchen Typ er gesetzt ist.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies bei nicht unterstützter Eingabe der Fallback-Typ ist.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-Benutzeroberfläche an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))!
> Sie müssen dies bei der Entwicklung von Produktionsanwendungen berücksichtigen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die einen Monat und ein Jahr darstellt, oder
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown),
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum und Zeit wählen Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
