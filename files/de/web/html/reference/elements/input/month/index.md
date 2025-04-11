---
title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, wodurch es einfach wird, einen Monat und ein Jahr auszuwählen.
Der Wert ist ein String mit dem Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatszahl ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, mit nur Chrome/Opera und Edge auf Desktops - und den meisten modernen mobilen Browser-Versionen - die brauchbare Implementierungen bieten.
In Browsern, die `month`-Eingaben nicht unterstützen, fällt das Steuerelement elegant auf [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zurück, obwohl es möglicherweise eine automatische Validierung des eingegebenen Textes gibt, um sicherzustellen, dass er korrekt formatiert ist.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der Screenshot unten, wie es in Chrome und Opera aussieht.
Ein Klick auf den Abwärtspfeil auf der rechten Seite öffnet einen Datumsauswahldialog, der es Ihnen ermöglicht, den Monat und das Jahr auszuwählen.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Das `month`-Steuerelement in Microsoft Edge sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Monats und Jahres repräsentiert, in der Form YYYY-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat).
Das Format des von diesem Eingabefeldtyp verwendeten Monatsstrings wird in [Monatsstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Einen Standardwert festlegen

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie einen Monat und ein Jahr im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut angeben, etwa so:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Es ist wichtig zu beachten, dass das angezeigte Datumsformat sich vom tatsächlichen `value` unterscheidet; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer für die Region des Benutzers geeigneten Form an, basierend auf der eingestellten Region des Betriebssystems des Benutzers, während das Datum `value` immer im Format `yyyy-MM` formatiert ist.

Wenn der oben genannte Wert beispielsweise an den Server gesendet wird, sieht er so aus: `bday-month=1978-06`.

### Den Wert mit JavaScript festlegen

Sie können auch den Datumswert in JavaScript mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft abrufen und festlegen, zum Beispiel:

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

Zusätzlich zu den allgemeinen Attributen von {{HTMLElement("input")}}-Elementen bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet.
Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden können.
Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen.
Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat, im oben im Abschnitt [Wert](#wert) besprochenen String-Format, das akzeptiert wird.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs kein gültiger String im `yyyy-MM`-Format ist, hat das Element keinen Maximalwert.

Dieser Wert muss ein Jahr-Monat-Paar angeben, das später oder gleich dem durch das `min`-Attribut angegebenen Paar ist.

### min

Das früheste Jahr und der früheste Monat, der akzeptiert wird, im gleichen `yyyy-MM`-Format wie oben beschrieben.
Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der kein gültiger Jahr-Monat-String ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem durch das `max`-Attribut angegebenen Paar ist.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann.
Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft direkt festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die gleich dem Basiswert für das Inkrementieren sind ([`min`](#min) falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), und ein geeigneter Standardwert, falls keiner von beiden angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Inkrementieren impliziert ist und jeder Wert erlaubt ist (außer anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Inkrementkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} zum nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende Zahlenwert ebenfalls in Monaten angegeben wird).
Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumsbezogene Eingaben (einschließlich `month`) klingen auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Region des Benutzers.
Es gibt jedoch Probleme mit `<input type="month">`, da viele große Browser es derzeit noch nicht unterstützen.

Wir werden uns grundlegende und komplexere Verwendungen von `<input type="month">` ansehen und dann Ratschläge zur Bewältigung des Browserunterstützungsproblems im Abschnitt [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung) geben.

### Grundlegende Verwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` umfasst eine grundlegende Kombination aus {{HTMLElement("input")}} und {{htmlelement("label")}} Elementen, wie unten dargestellt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Maximale und minimale Daten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um den Bereich der Daten einzuschränken, die der Benutzer auswählen kann.
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
- Je nachdem, welchen Browser Sie verwenden, werden Sie feststellen, dass Monate außerhalb des angegebenen Bereichs möglicherweise im Monatspicker nicht ausgewählt werden können (z. B. Edge) oder ungültig (siehe [Validierung](#validierung)), aber weiterhin verfügbar (z. B. Chrome).

### Eingabegröße steuern

`<input type="month">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size).
Sie müssen [CSS](/de/docs/Web/CSS) für Größenanforderungen verwenden.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an.
Die Implementierungen der Benutzeroberfläche lassen Sie im Allgemeinen nichts eingeben, was kein Datum ist - was hilfreich ist -, aber Sie können das Formular dennoch mit leerem `month`-Eingabefeld einreichen oder ein ungültiges Datum (z. B. den 32. April) eingeben.

Um dies zu vermeiden, können Sie die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten festlegen](#maximale_und_minimale_daten_festlegen)) und zusätzlich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um das Ausfüllen des Datumsfelds zwingend zu machen.
In unterstützenden Browsern wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder das Datumsfeld leer zu lassen.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Daten festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular zu senden, ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen unter Ihnen, die keinen unterstützenden Browser verwenden:

![Monat erforderlich Eingabeaufforderung im Chrome-Browser](month-required.png)

Hier ist das verwendete CSS im obigen Beispiel.
Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, denn in Chrome wird der generierte Inhalt innerhalb des Formularsteuerelements platziert und kann nicht effektiv gestaltet oder angezeigt werden.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind.
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ und so weiter).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, besteht das große Problem bei der Verwendung von Datumseingaben zur Zeit darin, dass viele große Browser sie alle noch nicht implementiert haben; nur Chrome/Opera und Edge unterstützen es auf dem Desktop, und die meisten modernen Browser auf dem Handy.
Als Beispiel sieht der `month` Picker in Chrome für Android folgendermaßen aus:

![Monatspicker in Chrome für Android](month-android.png)

Nicht unterstützende Browser degradieren elegant zu einer Texteingabe, aber dies führt zu Problemen sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird unterschiedlich sein) als auch in Bezug auf die Datenverwaltung.

Das zweite Problem ist das ernstere von beiden.
Wie bereits erwähnt, wird bei einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert.
Andererseits kann eine `text`-Eingabe in ihrer Standardkonfiguration nicht wissen, in welchem Format das Datum sein sollte, und dies ist aufgrund der Vielzahl an verschiedenen Möglichkeiten, wie Menschen Daten schreiben, ein Problem.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- und so weiter...

Eine Möglichkeit, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut auf Ihre `month` Eingabe zu setzen.
Obwohl die `month` Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser darauf zurückgreift, es wie eine `text` Eingabe zu behandeln.
Zum Beispiel, versuchen Sie die folgende Demo in einem Browser zu betrachten, der `month` Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es abzusenden, sehen Sie, dass der Browser nun eine Fehlermeldung anzeigt (und die Eingabe als ungültig markiert), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich verhindert dies nicht, dass Personen ungültige Daten eingeben (wie `0000-42`) oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird.
Wir haben noch Arbeit zu erledigen.

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

Der beste Weg zur Behandlung von Daten in Formularen auf eine plattformübergreifende Weise (bis alle großen Browser sie für eine Weile unterstützt haben) besteht darin, den Benutzer den Monat und das Jahr in separaten Steuerelementen eingeben zu lassen ({{htmlelement("select")}} Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/) Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und Jahres zu ermöglichen.
Der erste ist eine native `month` Eingabe, und der andere ist ein Paar von {{HTMLElement("select")}} Elementen, die es ermöglichen, Monat und Jahr unabhängig auszuwählen, für Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das nach dem Monat und Jahr fragt, sieht so aus:

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month` Eingabetyp, um den Monat und das Jahr abzufragen, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>` Elementen verwendet.
Das erste fragt nach dem Monat, und das zweite nach dem Jahr.

Das `<select>` für die Auswahl des Monats ist mit den Namen der Monate fest codiert, da sie sich nicht ändern (wenn man die Lokalisierung außer Acht lässt).
Die Liste der verfügbaren Jahreswerte wird je nach aktuellem Jahr dynamisch generiert (siehe die Kommentare im Code unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der auswählt, welchen Ansatz verwendet werden soll, und die Liste der Jahre für das nicht-native Jahr-`<select>` erstellt, folgt unten.

Der Teil des Beispiels, der am interessantesten sein könnte, ist der Code zur Merkmalserkennung.
Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}} Element, versuchen, seinen `type` auf `month` zu setzen, und überprüfen dann sofort, auf welchen Typ er gesetzt ist.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da das, worauf month zurückfällt, wenn es nicht unterstützt wird.
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
> Sie müssen dies in Betracht ziehen, wenn Sie Produktionsanwendungen entwickeln.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#wert">Wert</a></strong></td>
      <td>
        Ein String, der einen Monat und ein Jahr repräsentiert, oder
        leer.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}} Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zum Datum- und Uhrzeitbereich](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
