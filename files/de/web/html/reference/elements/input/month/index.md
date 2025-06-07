---
title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, sodass ein Monat und ein Jahr einfach eingegeben werden können.
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

Das UI des Steuerelements variiert in der Regel von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, wobei nur Chrome/Opera und Edge auf dem Desktop – und die meisten modernen mobilen Browserversionen – eine brauchbare Implementierung bieten.
In Browsern, die `month`-Eingaben nicht unterstützen, degradiert das Steuerelement problemlos zu [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), obwohl es möglicherweise eine automatische Validierung des eingegebenen Textes gibt, um sicherzustellen, dass er so formatiert ist, wie erwartet.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der untenstehende Screenshot, wie es in Chrome und Opera aussieht.
Das Klicken auf den Pfeil nach unten auf der rechten Seite öffnet einen Datumsauswahlkalender, der es Ihnen ermöglicht, den Monat und das Jahr auszuwählen.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month`-Steuerung sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Eine Zeichenkette, die den Wert des in die Eingabe eingegebenen Monats und Jahres darstellt, in der Form YYYY-MM (vierstellige oder mehrjährige Zahl, gefolgt von einem Bindestrich (`-`), gefolgt von dem zweistelligen Monat).
Das Format der Monatszeichenfolge, die durch diesen Eingabetyp verwendet wird, wird in [Month strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Einen Standardwert festlegen

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie folgt:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Ein Punkt, den Sie beachten sollten, ist, dass sich das angezeigte Datumsformat von dem tatsächlichen `value` unterscheidet; die meisten {{Glossary("user_agent", "Benutzeragenten")}} zeigen den Monat und das Jahr in einer lokalisierten Form an, basierend auf der eingestellten Lokal des Betriebssystems des Benutzers, während das Datum `value` immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server gesendet wird, sieht er so aus: `bday-month=1978-06`.

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

Zusätzlich zu den allgemeinen Attributen, die für {{HTMLElement("input")}}-Elemente gelten, bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet.
Das {{HTMLElement("datalist")}}-Element bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden.
Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen.
Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste akzeptierte Jahr und Monat im oben im Abschnitt [Wert](#wert) beschriebenen Zeichenkettenformat.
Wenn das in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) dies überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn der Wert des `max`-Attributs keine gültige Zeichenkette im `yyyy-MM`-Format ist, hat das Element keinen Maximalwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das später oder gleich dem im `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Jahr und Monat, im selben `yyyy-MM`-Format wie oben beschrieben.
Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements geringer ist als dieser, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der keine gültige Jahr- und Monatszeichenkette ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem im `max`-Attribut angegebenen ist.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann.
Sein `value` kann jedoch weiterhin aus JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem `readonly`-Attribut ebenfalls angegeben.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird.
Nur Werte, die dem Basiswert ([`min`](#min) falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein geeigneter Standardwert, wenn keiner dieser Werte angegeben wird) entsprechen, sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass keine Abstufung impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich naheliegende Optionen gibt.

Für `month`-Eingaben wird der `step`-Wert in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende numerische Wert ebenfalls in Monaten angegeben wird).
Der Standardwert von `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumbezogene Eingaben (einschließlich `month`) erscheinen auf den ersten Blick bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und standardisieren das an den Server gesendete Datenformat, unabhängig von der Benutzerlokalität.
Es gibt jedoch Probleme mit `<input type="month">`, da viele große Browser diesen Eingabetyp derzeit noch nicht unterstützen.

Wir werden uns die grundlegende und komplexere Nutzung von `<input type="month">` ansehen und dann im Abschnitt [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung) Ratschläge zur Bewältigung des Browserunterstützungsproblems geben.

### Grundlegende Verwendungen von Month

Die grundlegendste Nutzung von `<input type="month">` umfasst eine grundlegende Kombination aus {{HTMLElement("input")}} und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Maximal- und Mindestdaten festlegen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um den Bereich der Daten zu beschränken, die der Benutzer auswählen kann.
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

- Nur Monate zwischen Januar 1900 und Dezember 2013 können ausgewählt werden; Monate außerhalb dieses Bereichs können im Steuerelement nicht gescrollt werden.
- Abhängig davon, welchen Browser Sie verwenden, werden Sie möglicherweise feststellen, dass Monate außerhalb des angegebenen Bereichs im Monatspicker möglicherweise nicht ausgewählt werden können (z.B. Edge) oder ungültig (siehe [Validierung](#validierung)) sind, aber dennoch verfügbar (z.B. Chrome).

### Eingabegröße steuern

`<input type="month">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size).
Sie müssen dafür auf [CSS](/de/docs/Web/CSS) zurückgreifen.

## Validierung

Standardmäßig nimmt `<input type="month">` keine Validierung der eingegebenen Werte vor.
Die UI-Implementierungen erlauben in der Regel nicht, dass Sie etwas eingeben, das kein Datum ist – was hilfreich ist – aber Sie können dennoch das Formular mit der `month`-Eingabe leer einreichen oder ein ungültiges Datum eingeben (z.B. den 32. April).

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximal- und Mindestdaten festlegen](#maximal-und-mindestens-daten-festlegen)), und zusätzlich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums als verpflichtend zu kennzeichnen.
Folglich wird unterstützende Browser einen Fehler anzeigen, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld einzureichen.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstdaten festgelegt und auch das Feld als erforderlich gekennzeichnet:

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

Wenn Sie versuchen, das Formular einzureichen, ohne sowohl Monat als auch Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Versuchen Sie, jetzt mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Monat erforderlich Eingabeaufforderung im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird.
Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben dem Eingang setzen, nicht auf dem Eingang selbst, da im Chrome das erzeugte Inhalt innerhalb der Formularsteuerung platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben.
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet.
> Wenn Ihr Serverseitencode die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn unsachgemäß formatierte Daten eingereicht werden (oder Daten, die zu groß, vom falschen Typ und so weiter sind).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumsangaben zum Zeitpunkt des Schreibens darin, dass viele große Browser sie noch nicht alle implementieren; nur Chrome/Opera und Edge unterstützen sie auf dem Desktop, und die meisten modernen Browser auf Mobilgeräten.
Als Beispiel sieht der `month`-Picker auf Chrome für Android so aus:

![Monatspicker auf Chrome für Android](month-android.png)

Nicht unterstützende Browser degradieren problemlos zu einem Texteingabefeld, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (die präsentierte Steuerung wird unterschiedlich sein) als auch bei der Datenverarbeitung.

Das zweite Problem ist das ernstere von beiden.
Wie bereits erwähnt, ist der tatsächliche Wert bei einer `month`-Eingabe immer auf das Format `yyyy-mm` normalisiert.
Andererseits hat ein `text`-Eingabefeld in seiner Standardkonfiguration keine Ahnung, in welchem Format das Datum vorliegen sollte, und das ist ein Problem aufgrund der Vielzahl unterschiedlicher Möglichkeiten, in denen Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Monat yyyy` (Juli 2022)
- und so weiter…

Eine Möglichkeit, dies zu umgehen, besteht darin, dem `month`-Eingabefeld ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut hinzuzufügen.
Obwohl die `month`-Eingabe dies nicht verwendet, wird das Muster verwendet, wenn der Browser darauf zurückfällt, es als `text`-Eingabe zu behandeln.
Probieren Sie zum Beispiel die folgende Demo in einem Browser aus, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es abzuschicken, werden Sie feststellen, dass der Browser jetzt eine Fehlermeldung anzeigt (und das Eingabefeld als ungültig hervorhebt), wenn Ihr Eintrag nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich hindert dies die Leute nicht daran, ungültige Daten (wie `0000-42`) oder falsch formatierte Daten, die dem Muster entsprechen, einzugeben.

Es besteht auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird.
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

Der beste Weg, um mit Daten in Formularen im Browser-übergreifenden Sinne umzugehen (bis alle großen Browser sie eine Weile lang unterstützt haben), besteht darin, den Benutzer den Monat und das Jahr in separaten Steuerungen eingeben zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery-Datumswähler](https://jqueryui.com/datepicker/)-Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils darauf ausgelegt sind, es dem Benutzer zu ermöglichen, einen Monat und ein Jahr auszuwählen.
Der erste ist eine native `month`-Eingabe, und der andere ist ein Paar {{HTMLElement("select")}}-Elemente, die das unabhängige Auswählen eines Monats und Jahres ermöglichen, für Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das nach dem Monat und dem Jahr fragt, sieht so aus:

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

Der {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den Eingabetyp `month`, um nach Monat und Jahr zu fragen, während der `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar `<select>`-Elemente verwendet.
Das erste fragt nach dem Monat, und das zweite nach dem Jahr.

Das `<select>`-Element für die Auswahl des Monats ist mit den Namen der Monate hartcodiert, da sie sich nicht ändern (wenn man die Lokalisierung unberücksichtigt lässt).
Die Liste der verfügbaren Jahreswerte wird dynamisch je nach aktuellem Jahr generiert (siehe die Kommentare im Code unten für eine detaillierte Erklärung, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der die Auswahl der Methode zur Verwendung regelt und die Liste der Jahre für das nicht-natives Jahr `<select>`-Element festlegt.

Der Teil des Beispiels, der von größtem Interesse sein kann, ist der Funktionsnachweisteil.
Um festzustellen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type`-Wert auf `month` zu setzen, und überprüfen dann, welchen Typ es tatsächlich hat.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies der Fallback für nicht unterstützte Monatseingaben ist.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Ausweich-UI an.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Uhrzeit-Picker-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
