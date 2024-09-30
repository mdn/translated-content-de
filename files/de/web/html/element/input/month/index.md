---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben. Dadurch lässt sich ein Monat und Jahr einfach eingeben.
Der Wert ist eine Zeichenkette, deren Wert im Format `YYYY-MM` vorliegt, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, wobei nur Chrome/Opera und Edge auf dem Desktop - und die meisten modernen mobilen Browserversionen - nutzbare Implementierungen bieten.
In Browsern, die `month`-Eingaben nicht unterstützen, wird das Steuerelement zu einem einfachen [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) herabgestuft, obwohl es möglicherweise eine automatische Validierung des eingegebenen Textes gibt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt das folgende Screenshot, wie es in Chrome und Opera aussieht.
Ein Klick auf den Abwärtspfeil auf der rechten Seite öffnet einen Datumsauswahl-Dialog, mit dem Sie den Monat und das Jahr auswählen können.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Eine Zeichenkette, die den Monat und das Jahr darstellt, die in das Eingabefeld eingegeben wurden, im Format YYYY-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat).
Das Format der Monatszeichenkette, die von diesem Eingabetyp verwendet wird, wird in [Monatszeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Festlegen eines Standardwerts

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Datumsformat vom tatsächlichen `value` abweicht; die meisten [Benutzeragenten](/de/docs/Glossary/user_agent) zeigen den Monat und das Jahr in einer lokal angepassten Form an, basierend auf dem eingestellten Gebietsschema des Betriebssystems des Benutzers, während der Datumswert immer `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `bday-month=1978-06`.

### Den Wert mit JavaScript setzen

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft abrufen und setzen, zum Beispiel:

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

Zusätzlich zu den allgemeinen Attributen, die zu {{HTMLElement("input")}}-Elementen gehören, bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet.
Das {{HTMLElement("datalist")}} liefert eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden.
Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt.
Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Das späteste Jahr und der späteste Monat, die in dem oben im Abschnitt [Wert](#wert) beschriebenen Zeichenfolgenformat akzeptiert werden.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs keine gültige Zeichenfolge im `yyyy-MM`-Format ist, hat das Element keinen Höchstwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das später oder gleich dem ist, das durch das `min`-Attribut angegeben wird.

### min

Das früheste Jahr und der früheste Monat, der im gleichen `yyyy-MM`-Format wie oben beschrieben akzeptiert wird.
Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser Wert, schlägt das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der keine gültige Jahr- und Monatszeichenfolge ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem ist, das durch das `max`-Attribut angegeben wird.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann.
Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die der Grundlage für das Schrittintervall ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein entsprechender Standardwert, wenn keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein Wert von `any` bedeutet, dass kein Schrittintervall impliziert ist und jeder Wert erlaubt ist (unter Vorbehalt anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittintervall-Konfiguration übereinstimmen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahestehende Optionen gibt.

Für `month`-Eingaben wird der Wert des `step`-Attributs in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrundeliegende numerische Wert ebenfalls in Monaten ist).
Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumsbezogene Eingaben (einschließlich `month`) klingen auf den ersten Blick praktisch; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig vom Gebietsschema des Benutzers.
Es gibt jedoch Probleme mit `<input type="month">`, da zu diesem Zeitpunkt viele große Browser es noch nicht unterstützen.

Wir werden uns die grundlegenden und komplexeren Verwendungen von `<input type="month">` ansehen und dann im Abschnitt [Umgang mit Browserunterstützung](#umgang_mit_browserunterstützung) Ratschläge zur Minderung des Browserunterstützungsproblems geben.

### Grundlegende Verwendungen von Monat

Die einfachste Verwendung von `<input type="month">` besteht darin, eine Kombination aus einem grundlegenden {{HTMLElement("input")}} und einem {{htmlelement("label")}}-Element zu haben, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Maximum- und Mindestdaten festlegen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um den Bereich der auswählbaren Daten zu beschränken.
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

Das Ergebnis ist hier, dass:

- Nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden können; Monate außerhalb dieses Bereichs können im Steuerelement nicht gescrollt werden.
- Je nachdem, welchen Browser Sie verwenden, könnte es sein, dass Monate außerhalb des angegebenen Bereichs im Monatspicker nicht auswählbar sind (z. B. Edge) oder ungültig (siehe [Validierung](#validierung)), aber dennoch verfügbar (z. B. Chrome).

### Kontrolle der Eingabegröße

`<input type="month">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size).
Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um Größenanforderungen zu erfüllen.

## Validierung

Standardmäßig wird bei `<input type="month">` keine Validierung der eingegebenen Werte angewendet.
Die Implementierungen der Benutzeroberfläche lassen in der Regel nicht zu, dass Sie etwas eingeben, das kein Datum ist - was hilfreich ist -, aber Sie können das Formular weiterhin mit der `month`-Eingabe leer übermitteln oder ein ungültiges Datum (z. B. den 32. April) eingeben.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Setting maximum and minimum dates](#maximum-_und_mindestdaten_festlegen)), und zusätzlich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen.
Als Ergebnis zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum zu übermitteln, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Lassen Sie uns ein Beispiel ansehen; hier haben wir Mindest- und Höchstdaten festgelegt und das Feld auch erforderlich gemacht:

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

Wenn Sie versuchen, das Formular einzureichen, ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Monat erforderlich Eingabeaufforderung im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird.
Hier nutzen wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da im Chrome der generierte Inhalt innerhalb des Formularsteuerungselements platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe passieren, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ, usw.).

## Umgang mit Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben zum Zeitpunkt des Schreibens darin, dass viele große Browser sie noch nicht vollständig implementieren; nur Chrome/Opera und Edge unterstützen sie auf dem Desktop und die meisten modernen Browser auf Mobilgeräten sind kompatibel.
Ein Beispiel hierfür ist der `month`-Picker in Chrome für Android, der so aussieht:

![Monatspicker im Chrome für Android](month-android.png)

Nicht unterstützende Browser degradieren auf ein Texteingabefeld, was sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement ist unterschiedlich) als auch auf die Datenverwaltung Probleme verursacht.

Das zweite Problem ist das bekanntere der beiden.
Wie bereits erwähnt, wird bei einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert.
Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Vorstellung davon, in welchem Format das Datum vorliegen sollte, was ein Problem ist angesichts der Vielzahl von Möglichkeiten, wie Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (Juli 2022)
- usw...

Ein Weg, dies zu umgehen, ist das Hinzufügen eines [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attributs zu Ihrer `month`-Eingabe.
Auch wenn die `month`-Eingabe es nicht nutzt, wird das Muster verwendet, wenn der Browser dazu zurückfällt, es wie eine `text`-Eingabe zu behandeln.
Beispielsweise können Sie versuchen, die folgende Demo in einem Browser anzusehen, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es zu übermitteln, wird der Browser jetzt eine Fehlermeldung anzeigen (und die Eingabe als ungültig markieren), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich verhindert dies nicht, dass Leute ungültige Daten eingeben (wie `0000-42`), oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird.
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

Der beste Weg, um mit Daten in Formularen auf eine plattformübergreifende Weise umzugehen (bis alle großen Browser sie eine Weile lang unterstützt haben), besteht darin, den Benutzer dazu zu bringen, den Monat und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery-Datumsauswahl](https://jqueryui.com/datepicker/)-Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils dazu bestimmt sind, den Benutzer einen Monat und ein Jahr auswählen zu lassen.
Das erste ist eine native `month`-Eingabe, und das andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das Monat und Jahr anfordert, sieht so aus:

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um Monat und Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet.
Das erste erfragt den Monat, das zweite das Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate hartcodiert, da diese sich nicht ändern (wenn die Lokalisierung außen vor bleibt).
Die Liste der verfügbaren Jahrwerte wird abhängig vom aktuellen Jahr dynamisch generiert (siehe die Kommentare im Code für ausführliche Erklärungen, wie diese Funktionen arbeiten).

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

Der JavaScript-Code, der auswählt, welchen Ansatz man verwenden soll und die Liste der Jahre für das nicht native Jahr `<select>` einrichtet, folgt.

Der Teil des Beispiels, der möglicherweise von größtem Interesse ist, ist der Code zur Feature-Erkennung.
Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `month` zu setzen, und prüfen dann sofort, was sein Typ ist.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da `month` darauf zurückfällt, wenn es nicht unterstützt wird.
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
> Sie müssen dies berücksichtigen, wenn Sie Produktions-Apps entwickeln.

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
      <td><strong>Methode</strong></td>
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Anleitung für Datum- und Zeitauswahl-Dialoge](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [Kompatibilitätstabelle für CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
