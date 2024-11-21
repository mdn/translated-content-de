---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr einfach eingegeben werden können.
Der Wert ist eine Zeichenkette, deren Wert im Format `YYYY-MM` vorliegt, wobei `YYYY` das vierstellige Jahr und `MM` die Monatszahl ist.

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, da nur Chrome/Opera und Edge auf dem Desktop – und die meisten modernen mobilen Browserversionen – brauchbare Implementierungen haben.
In Browsern, die `month`-Eingaben nicht unterstützen, fällt das Steuerelement elegant auf [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) zurück, obwohl es möglicherweise eine automatische Überprüfung des eingegebenen Textes gibt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der Screenshot unten, wie es in Chrome und Opera aussieht.
Das Klicken auf den Abwärtspfeil auf der rechten Seite öffnet einen Datumswähler, mit dem Sie den Monat und das Jahr auswählen können.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Eine Zeichenkette, die den eingetragenen Monat und das Jahr im Formular YYYY-MM (vierstelliges oder mehrstelliges Jahr, dann ein Bindestrich (`-`) gefolgt vom zweistelligen Monat) darstellt.
Das Format der Monatszeichenkette, die von diesem Eingabetyp verwendet wird, wird in [Monatszeichenketten](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Einen Standardwert festlegen

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Es ist zu beachten, dass sich das angezeigte Datumsformat vom tatsächlichen `value` unterscheidet; die meisten {{Glossary("user_agent", "User Agents")}} zeigen Monat und Jahr in einer lokal-geeigneten Form an, basierend auf der eingestellten Lokalisierung des Betriebssystems des Benutzers, während das Datum `value` immer als `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `bday-month=1978-06`.

### Den Wert mit JavaScript setzen

Sie können auch den Datumswert in JavaScript mithilfe der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft abrufen und festlegen, zum Beispiel:

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

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet.
Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden.
Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen.
Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat, die im oben besprochenen Zeichenkettenformat akzeptiert werden.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element bei der [Constraint-Überprüfung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs keine gültige Zeichenkette im `yyyy-MM`-Format ist, hat das Element keinen maximalen Wert.

Dieser Wert muss ein Jahr-Monat-Paar angeben, das später oder gleich dem durch das `min`-Attribut angegebenen liegt.

### min

Das früheste Jahr und der früheste Monat, die im oben beschriebenen `yyyy-MM`-Format akzeptiert werden.
Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt das Element bei der [Constraint-Überprüfung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben ist, der keine gültige Jahr-und-Monat-Zeichenfolge ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem durch das `max`-Attribut angegebenen liegt.

### readonly

Ein Wahrheitswert-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann.
Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die dem Ausgangspunkt des Schritts ([`min`](#min) wenn angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und einem geeigneten Standardwert, wenn keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass kein Tritt impliziert ist und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und positive Zahlen bevorzugen, wenn es zwei gleich nahe Optionen gibt.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende numerische Wert ebenfalls in Monaten angegeben wird).
Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumsspezifische Eingaben (einschließlich `month`) klingen auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Region des Benutzers.
Es gibt jedoch Probleme mit `<input type="month">`, da derzeit viele große Browser ihn noch nicht unterstützen.

Wir werden uns grundlegende und komplexere Anwendungen von `<input type="month">` anschauen und dann im Abschnitt [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung) Ratschläge geben, wie das Problem der Browserunterstützung gemildert werden kann.

### Grundlegende Verwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` beinhaltet eine einfache {{HTMLElement("input")}} und {{htmlelement("label")}}-Elementkombination, wie unten zu sehen:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Festlegen von maximalen und minimalen Daten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die Anzahl der Daten einzuschränken, die der Benutzer auswählen kann.
Im folgenden Beispiel geben wir einen minimalen Monat von `1900-01` und einen maximalen Monat von `2013-12` an:

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

- Es können nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden; Monate außerhalb dieses Bereichs können im Steuerungselement nicht gescrollt werden.
- Je nachdem, welchen Browser Sie verwenden, stellen Sie möglicherweise fest, dass Monate außerhalb des angegebenen Bereichs im Monatspicker (z.B. Edge) nicht ausgewählt werden können oder ungültig, aber dennoch verfügbar sind (siehe [Validierung](#validierung)).

### Steuerung der Eingabegröße

`<input type="month">` unterstützt keine Form-Sizing-Attribute wie [`size`](/de/docs/Web/HTML/Element/input#size).
Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an.
Die Implementierungen der Benutzeroberfläche lassen Sie im Allgemeinen nichts anderes als ein Datum eingeben – was hilfreich ist –, aber Sie können das Formular trotzdem mit der `month`-Eingabe leer übermitteln oder ein ungültiges Datum eingeben (z.B. den 32. April).

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten festlegen](#festlegen_von_maximalen_und_minimalen_daten)), und zusätzlich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen.
In unterstützten Browsern wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Betrachten wir ein Beispiel; hier haben wir Mindest- und Höchstdaten festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular zu übermitteln, ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Anforderung des Monats im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wurde.
Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld platzieren, nicht auf dem Eingabefeld selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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
> Die HTML-Formularvalidierung ist _nicht_ ein Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen.
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster drohen, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben zum Zeitpunkt des Schreibens darin, dass viele große Browser sie noch nicht alle implementiert haben; nur Chrome/Opera und Edge unterstützen es auf dem Desktop, und die meisten modernen Browser auf dem Handy.
Ein Beispiel: Der `month`-Picker auf Chrome für Android sieht so aus:

![Monatspicker in Chrome für Android](month-android.png)

Browser, die keine Unterstützung bieten, degradieren elegant zu einer Texteingabe, aber dies führt sowohl im Hinblick auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerungselement wird unterschiedlich sein) als auch im Hinblick auf die Datenverarbeitung zu Problemen.

Das zweite Problem ist das ernstere von beiden.
Wie bereits erwähnt, wird bei einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert.
Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Vorstellung davon, in welchem Format das Datum vorliegen sollte, und dies ist ein Problem wegen der zahlreichen Möglichkeiten, in denen Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Monat yyyy` (Juli 2022)
- und so weiter…

Eine Möglichkeit, dieses Problem zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut auf Ihre `month`-Eingabe zu setzen.
Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser darauf zurückgreift, es wie eine `text`-Eingabe zu behandeln.
Beispielsweise probieren Sie die folgende Demo in einem Browser aus, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es einzureichen, werden Sie feststellen, dass der Browser nun eine Fehlermeldung anzeigt (und die Eingabe als ungültig hervorhebt), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich hindert dies die Leute nicht daran, ungültige Daten (wie `0000-42`) oder falsch formatierte Daten, die dem Muster folgen, einzugeben.

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

Der beste Weg, um mit Daten in Formularen in einer plattformübergreifenden Weise umzugehen (bis alle großen Browser sie eine Weile lang unterstützt haben), besteht darin, den Benutzer zu bitten, den Monat und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung), oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/) Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die beide darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und Jahres zu ermöglichen.
Der erste ist eine native `month`-Eingabe, und der andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es erlauben, einen Monat und ein Jahr unabhängig zu wählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

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

Die {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um nach dem Monat und Jahr zu fragen, während die `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet.
Das erste fragt nach dem Monat, und das zweite nach dem Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate hartcodiert, da sie sich nicht ändern (wenn man die Lokalisierung außen vor lässt).
Die Liste der verfügbaren Jahreswerte wird dynamisch erstellt, abhängig vom aktuellen Jahr (siehe die Kommentierung im Code unten für detaillierte Erklärungen zu diesen Funktionen).

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

Der JavaScript-Code, der die Auswahl der zu verwendenden Methode handhabt und die Liste der Jahre im nicht-nativen Jahr-`<select>` einrichtet, folgt.

Der Teil des Beispiels, der von größtem Interesse sein könnte, ist der Code zur Funktionsprüfung.
Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `month` zu setzen, und prüfen dann sofort, auf welchen `type` es gesetzt ist.
Browser, die `month` nicht unterstützen, geben `text` zurück, da `month` zu `text` zurückfällt, wenn nicht unterstützt.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die UI des Fallback-Pickers an.

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
> Das müssen Sie beim Entwickeln von Produktions-Apps berücksichtigen.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation davon, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeitwähler-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
