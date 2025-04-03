---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, um so Monat und Jahr leicht zu erfassen. Der Wert ist ein String im Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, da nur Chrome/Opera und Edge auf dem Desktop – und die meisten modernen mobilen Browserversionen – brauchbare Implementierungen haben. In Browsern, die `month`-Eingaben nicht unterstützen, fällt das Steuerelement auf [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) zurück, obwohl möglicherweise eine automatische Validierung des eingegebenen Texts erfolgt, um sicherzustellen, dass er im erwarteten Format ist.

Für diejenigen unter Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der untenstehende Screenshot, wie es in Chrome und Opera aussieht. Beim Klicken auf den Pfeil nach unten auf der rechten Seite erscheint ein Datumsauswahlfeld, das Ihnen erlaubt, Monat und Jahr auszuwählen.

![Month control on Chrome browser](month-control-chrome.png)

Das Microsoft Edge `month`-Steuerelement sieht so aus:

![Month control on Edge browser](month-control-edge.png)

## Wert

Ein String, der den eingegebenen Monat und das Jahr im Format YYYY-MM darstellt (vier- oder mehrstelliges Jahr, gefolgt von einem Bindestrich (`-`) und dem zweistelligen Monat). Das Format des von diesem Eingabetyp verwendeten Monats-Strings wird in [Monats-Strings](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Festlegen eines Standardwerts

Sie können einen Standardwert für das Eingabesteuerelement festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, zum Beispiel so:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Beachten Sie, dass das angezeigte Datumsformat vom tatsächlichen `value` abweicht; die meisten {{Glossary("user_agent", "User Agents")}} zeigen den Monat und das Jahr in einer für die Region passenden Form an, basierend auf der gesetzten Region des Betriebssystems des Benutzers, während der Datumswert immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert an den Server übermittelt wird, sieht er beispielsweise so aus: `bday-month=1978-06`.

### Festlegen des Werts mit JavaScript

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft erhalten und setzen, zum Beispiel:

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

Neben den gängigen Attributen, die {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer als Vorschlag für diese Eingabe angezeigt werden. Alle in der Liste enthaltenen Werte, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können entweder aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat im oben im Abschnitt [Wert](#wert) beschriebenen String-Format, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element bei der [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String im `yyyy-MM`-Format ist, hat das Element keinen Höchstwert.

Dieser Wert muss ein Jahr-Monat-Paar angeben, das später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Jahr und der früheste akzeptierte Monat im oben beschriebenen `yyyy-MM`-Format. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements niedriger als dieser ist, schlägt das Element bei der [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der kein gültiger Jahr-Monat-String ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss ein Jahr-Monat-Paar sein, das früher oder gleich dem ist, das durch das `max`-Attribut angegeben wird.

### readonly

Ein Boolean-Attribut, welches, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben, bei denen auch das `readonly`-Attribut angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Feinheit spezifiziert, der der Wert entsprechen muss, oder der spezielle Wert `any`, welcher unten beschrieben wird. Nur Werte, die dem Schrittwert ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner von beiden bereitgestellt wird) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt vorgegeben ist und jeder Wert erlaubt ist (mit Ausnahme anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahestehende Optionen gibt.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende numerische Wert ebenfalls in Monaten ist). Der Standardwert von `step` beträgt 1 Monat.

## Verwendung von Monatseingaben

Auf den ersten Blick erscheinen datumsbezogene Eingaben (einschließlich `month`) praktisch; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das gesendete Datenformat unabhängig von der Region des Benutzers. Es gibt jedoch Probleme mit `<input type="month">`, weil die Unterstützung durch viele große Browser derzeit noch fehlt.

Wir werden uns grundlegende und komplexere Anwendungen von `<input type="month">` ansehen und anschließend Ratschläge zur Bewältigung des Browserunterstützungsproblems im Abschnitt [Umgang mit Browserunterstützung](#umgang_mit_browserunterstützung) geben.

### Grundlegende Verwendungen von Monat

Die grundlegendste Verwendung von `<input type="month">` umfasst eine Kombination aus einem grundlegenden {{HTMLElement("input")}}- und einem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um den Datumsbereich einzuschränken, den der Benutzer auswählen kann. Im folgenden Beispiel geben wir einen Mindestmonat von `1900-01` und einen Höchstmonat von `2013-12` an:

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

- Nur Monate zwischen Januar 1900 und Dezember 2013 können ausgewählt werden; Monate außerhalb dieses Bereichs können im Steuerelement nicht durchgescrollt werden.
- Je nachdem, welchen Browser Sie verwenden, stellen Sie möglicherweise fest, dass Monate außerhalb des angegebenen Bereichs im Monatspicker nicht ausgewählt werden können (z. B. Edge) oder ungültig sind (siehe [Validierung](#validierung)), aber dennoch verfügbar (z. B. Chrome).

### Steuerung der Eingabegröße

`<input type="month">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenbedürfnisse zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen im Allgemeinen nicht zu, dass Sie etwas eingeben, das kein Datum ist — was hilfreich ist — aber Sie können dennoch das Formular mit der leeren `month`-Eingabe abschicken oder ein ungültiges Datum (z. B. den 32. April) eingeben.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)) und zusätzlich das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) verwenden, um das Ausfüllen des Datums obligatorisch zu machen. In unterstützenden Browsern wird dann ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Lassen Sie uns ein Beispiel anschauen; hier haben wir minimale und maximale Daten gesetzt und das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular abzuschicken, ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Month required prompt on Chrome browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld platzieren, nicht auf dem Eingabefeld selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv stilisiert oder angezeigt werden kann.

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
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen.
> Ebenso ist es möglich, dass jemand Ihr HTML ganz umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn fehlerhaft formatierte Daten eingereicht werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

## Umgang mit Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben zum Zeitpunkt des Schreibens darin, dass viele große Browser sie noch nicht vollständig implementiert haben; nur Chrome/Opera und Edge unterstützen sie auf dem Desktop, sowie die meisten modernen Browser auf mobilen Endgeräten. Ein Beispiel: Der `month`-Picker in Chrome für Android sieht so aus:

![Month picker on Chrome for Android](month-android.png)

Browser, die sie nicht unterstützen, fallen elegant auf eine Texteingabe zurück, aber das führt zu Problemen sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das gezeigte Steuerelement wird unterschiedlich sein) als auch in der Datenverarbeitung.

Das zweite Problem ist das ernstere der beiden. Wie bereits erwähnt, wird der tatsächliche Wert bei einer `month`-Eingabe immer auf das Format `yyyy-mm` normalisiert. Andererseits hat eine `text`-Eingabe in ihrer Grundeinstellung keine Vorstellung davon, in welchem Format das Datum vorliegen sollte, was ein Problem darstellt, da es eine Vielzahl an verschiedenen Arten gibt, in denen Menschen Daten schreiben. Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (Juli 2022)
- und so weiter…

Eine Möglichkeit, dies zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut auf Ihrer `month`-Eingabe zu setzen. Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser dazu übergeht, es wie eine `text`-Eingabe zu behandeln. Versuchen Sie zum Beispiel, die folgende Demo in einem Browser zu betrachten, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es abzuschicken, wird der Browser nun eine Fehlermeldung anzeigen (und die Eingabe als ungültig hervorheben), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist. Natürlich hält das niemanden davon ab, ungültige Daten (wie `0000-42`) oder falsch formatierte, aber dem Muster folgende Daten einzugeben.

Es gibt auch das Problem, dass der Benutzer nicht zwangsläufig weiß, welches der vielen Datumsformate erwartet wird. Wir haben noch Arbeit vor uns.

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

Die beste Methode, mit der Verarbeitung von Daten in Formularen in einer browserübergreifenden Weise umzugehen (bis alle großen Browser sie für eine Weile unterstützt haben), besteht darin, den Benutzer den Monat und das Jahr in separaten Steuerelementen (beliebt sind {{htmlelement("select")}}-Elemente; siehe unten für eine Implementierung) eingeben zu lassen oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/) Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sets von UI-Elementen, die jeweils darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und Jahres zu ermöglichen. Das erste ist eine native `month`-Eingabe und das andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, den Monat und das Jahr unabhängig auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das den Monat und das Jahr abfragt, sieht so aus:

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

Das {{HTMLElement("div")}}-Element mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr abzufragen, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar `<select>`-Elemente verwendet. Das erste fragt den Monat ab und das zweite das Jahr.

Das `<select>` für die Auswahl des Monats ist fest mit den Namen der Monate kodiert, da sie sich nicht ändern (unter Auslassung der Lokalisierungsfragen). Die Liste der verfügbaren Jahreswerte wird dynamisch je nach aktuellem Jahr generiert (siehe die Codekommentare unten für detaillierte Erklärungen, wie diese Funktionen funktionieren).

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

Der JavaScript-Code, der die Auswahl des zu verwendenden Ansatzes behandelt und die Liste der Jahre für das nicht-native Jahr-`<select>`-Element festlegt, folgt.

Der Teil des Beispiels, der möglicherweise von größtem Interesse ist, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen sein `type` auf `month` zu setzen und prüfen dann sofort, welcher Typ eingestellt ist. Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies die Rückfalloption ist, wenn `month` nicht unterstützt wird. Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-UI.

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
> Sie müssen dies bei der Entwicklung von Produktions-Apps berücksichtigen.

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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation derselben, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Leitfaden zu Datum- und Zeitpicker](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
