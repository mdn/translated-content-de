---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr einfach eingegeben werden können.
Der Wert ist ein String im Format `JJJJ-MM`, wobei `JJJJ` das vierstellige Jahr und `MM` die Monatsnummer ist.

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung ungleichmäßig, mit nur Chrome/Opera und Edge auf dem Desktop – und den meisten modernen mobilen Browserversionen – die brauchbare Implementierungen haben.
In Browsern, die `month`-Eingaben nicht unterstützen, wird das Steuerelement zu [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) herabgestuft, obwohl möglicherweise eine automatische Überprüfung erfolgt, um sicherzustellen, dass der eingegebene Text im erwarteten Format vorliegt.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der folgende Screenshot, wie es in Chrome und Opera aussieht.
Ein Klick auf den Pfeil nach unten auf der rechten Seite öffnet einen Datumsauswahler, mit dem Sie Monat und Jahr auswählen können.

![Monatssteuerelement im Chrome-Browser](month-control-chrome.png)

Das Microsoft Edge `month`-Steuerelement sieht so aus:

![Monatssteuerelement im Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Monats und Jahres im Format JJJJ-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat) darstellt.
Das Format des vom Eingabetyp verwendeten Monats-Strings wird in [Monats-Strings](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Festlegen eines Standardwerts

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Ein wichtiger Hinweis ist, dass sich das angezeigte Datumsformat vom tatsächlichen `value` unterscheidet; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer für das Gebietsschema des Benutzers geeigneten Form an, basierend auf dem festgelegten Gebietsschema des Betriebssystems des Benutzers, während der Datumswert stets im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er wie `bday-month=1978-06` aus.

### Festlegen des Werts mit JavaScript

Sie können den Datumswert auch mit JavaScript über die [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft abrufen und festlegen, zum Beispiel:

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

Zusätzlich zu den allgemeinen Attributen für {{HTMLElement("input")}}-Elemente bieten Monateingaben die folgenden Attribute.

### list

Die Werte des list-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet.
Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden.
Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen.
Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat im oben besprochenen String-Format, die akzeptiert werden.
Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen übersteigt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs kein gültiger String im Format `yyyy-MM` ist, hat das Element keinen Maximalwert.

Dieser Wert muss ein Jahr-Monat-Paar angeben, das später oder gleich dem im `min`-Attribut angegebenen Wert ist.

### min

Das früheste Jahr und der früheste Monat, die akzeptiert werden, im selben oben beschriebenen Format `yyyy-MM`.
Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements geringer ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der kein gültiger Jahr- und Monats-String ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem im `max`-Attribut angegebenen Wert ist.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann.
Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem auch angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert erfüllen muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die dem Basiswert der Schritte entsprechen ([`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, falls keiner der beiden bereitgestellt wird), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich naheliegende Optionen gibt.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende Zahlenwert ebenfalls in Monaten ist).
Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumbezogene Eingaben (einschließlich `month`) klingen auf den ersten Blick praktisch; sie versprechen eine einfache Benutzeroberfläche zum Auswählen von Datumsangaben und sie normalisieren das Format der gesendeten Daten an den Server, unabhängig vom Gebietsschema des Benutzers.
Allerdings gibt es Probleme mit `<input type="month">`, da derzeit viele große Browser es noch nicht unterstützen.

Wir werden uns die grundlegenden und komplexeren Verwendungen von `<input type="month">` ansehen und dann Ratschläge zur Bewältigung des Browser-Kompatibilitätsproblems im Abschnitt [Umgang mit Browser-Kompatibilität](#umgang_mit_browser-kompatibilität) geben.

### Grundlegende Verwendungen des Monats

Die grundlegendste Verwendung von `<input type="month">` beinhaltet eine einfache Kombination aus {{HTMLElement("input")}} und {{htmlelement("label")}}, wie unten zu sehen:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um den Bereich der Daten einzuschränken, die der Benutzer auswählen kann.
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

Das Ergebnis hier ist:

- Es können nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden; Monate außerhalb dieses Bereichs können im Steuerelement nicht gescrollt werden.
- Je nach dem von Ihnen verwendeten Browser stellen Sie möglicherweise fest, dass Monate außerhalb des angegebenen Bereichs im Monatspicker nicht ausgewählt werden können (z.B. Edge) oder ungültig (siehe [Validierung](#validierung)) aber immer noch verfügbar (z.B. Chrome) sind.

### Steuerung der Eingabegröße

`<input type="month">` unterstützt keine Formularattributgrößen wie [`size`](/de/docs/Web/HTML/Element/input#size).
Sie müssen auf [CSS](/de/docs/Web/CSS) für die Größenanforderungen zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an.
Die UI-Implementierungen lassen Sie im Allgemeinen nichts eingeben, das kein Datum ist – was hilfreich ist –, aber Sie können das Formular dennoch mit leerem `month`-Eingabefeld übermitteln oder ein ungültiges Datum eingeben (z.B. den 32. April).

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), und zusätzlich das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen.
Dadurch zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld zu übermitteln.

Sehen wir uns ein Beispiel an: Hier haben wir Mindest- und Höchstdaten festgelegt und auch das Feld als erforderlich markiert:

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
Probieren Sie jetzt das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen unter Ihnen, die keinen unterstützenden Browser verwenden:

![Monat erforderlich Eingabeaufforderung im Chrome-Browser](month-required.png)

Hier ist das in dem obigen Beispiel verwendete CSS.
Hier machen wir von den {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften Gebrauch, um das Eingabefeld basierend darauf zu stilisieren, ob der aktuelle Wert gültig ist.
Wir mussten die Icons auf eine {{htmlelement("span")}} neben der Eingabe setzen, nicht auf das Eingabefeld selbst, da in Chrome die generierten Inhalte innerhalb des Formularsteuerelements platziert werden und nicht effektiv gestylt oder angezeigt werden können.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind.
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster passieren, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß, vom falschen Typ sind usw.).

## Umgang mit Browser-Kompatibilität

Wie oben erwähnt, ist das größte Problem bei der Verwendung von Datumseingaben zum Zeitpunkt des Schreibens, dass viele große Browser sie noch nicht alle implementiert haben; nur Chrome/Opera und Edge unterstützen es auf dem Desktop und die meisten modernen Browser auf Mobilgeräten.
Ein Beispiel: Der `month`-Picker auf Chrome für Android sieht so aus:

![Monatspicker auf Chrome für Android](month-android.png)

Browser, die es nicht unterstützen, fallen anmutig auf eine Texteingabe zurück, aber dies schafft sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch beim Datenhandling Probleme.

Das zweite Problem ist das ernsthaftere der beiden.
Wie zuvor erwähnt, wird bei einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert.
Andererseits hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Ahnung, in welchem Format das Datum sein sollte, und das ist ein Problem wegen der Vielzahl unterschiedlicher Arten, wie Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Monat yyyy` (Juli 2022)
- und so weiter…

Ein Weg, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut auf Ihre `month`-Eingabe zu setzen.
Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser dazu übergeht, es als `text`-Eingabe zu behandeln.
Sehen Sie sich das folgende Demo in einem Browser an, der keine `month`-Eingaben unterstützt:

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

Wenn Sie versuchen, es zu übermitteln, werden Sie feststellen, dass der Browser jetzt eine Fehlermeldung anzeigt (und die Eingabe als ungültig markiert), wenn Ihr Eintrag nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich hindert dies die Leute nicht daran, ungültige Daten einzugeben (z. B. `0000-42`), oder falsch formatierte Daten, die dem Muster folgen.

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

Der beste Weg, mit Daten in Formularen plattformübergreifend umzugehen (bis alle großen Browser sie eine Weile lang unterstützt haben), besteht darin, den Benutzer zu bitten, Monat und Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/)-Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von Benutzeroberflächenelementen, die jeweils dazu gedacht sind, dem Benutzer zu ermöglichen, einen Monat und ein Jahr auszuwählen.
Der erste ist eine native `month`-Eingabe, und der andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar `<select>`-Elemente verwendet.
Das erste erfragt den Monat und das zweite das Jahr.

Das `<select>` zum Auswählen des Monats ist mit den Namen der Monate fest codiert, da sie sich nicht ändern (unter Auslassung der Lokalisierung).
Die Liste der verfügbaren Jahreswerte wird je nach aktuellem Jahr dynamisch generiert (siehe die Codekommentare unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der auswählt, welcher Ansatz verwendet werden soll, und die Liste der Jahre für das nicht native Jahr `<select>` einrichtet, folgt.

Der Teil des Beispiels, der möglicherweise von größtem Interesse ist, ist der Code zur Funktionserkennung.
Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `month` zu setzen, und überprüfen dann sofort, auf welchen Typ es gesetzt ist.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies das ist, was month auf fällt, wenn es nicht unterstützt wird.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir die native Auswahl aus und zeigen stattdessen die Fallback-Auswahl-UI an.

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
        Ein String, der einen Monat und ein Jahr repräsentiert, oder
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
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeit-Auswahl Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time) und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
