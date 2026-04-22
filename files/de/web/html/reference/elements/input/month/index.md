---
title: '`<input type="month">` HTML-Attributwert'
short-title: <input type="month">
slug: Web/HTML/Reference/Elements/input/month
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}} Elemente vom Typ **`month`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, wodurch ein Monat und Jahr einfach eingegeben werden können. Der Wert ist ein String im Format `YYYY-MM`, wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

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

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser; im Moment ist die Unterstützung lückenhaft, mit nur Chrome/Opera und Edge auf Desktop – und den meisten modernen mobilen Browserversionen – die brauchbare Implementierungen haben. In Browsern, die `month`-Eingaben nicht unterstützen, degradieren die Steuerelemente elegant zu [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text), obwohl es möglicherweise eine automatische Validierung des eingegebenen Textes gibt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen von Ihnen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt das untenstehende Screenshot, wie es in Chrome und Opera aussieht. Durch Klicken auf den Abwärtspfeil auf der rechten Seite wird ein Datumsauswähler angezeigt, mit dem Sie den Monat und das Jahr auswählen können.

![Monatssteuerung im Chrome-Browser](month-control-chrome.png)

Die Monatssteuerung von Microsoft Edge sieht so aus:

![Monatssteuerung im Edge-Browser](month-control-edge.png)

## Wert

Ein String, der den Wert des eingegebenen Monats und Jahres repräsentiert, in der Form YYYY-MM (vier- oder mehrstelliges Jahr, dann ein Bindestrich (`-`), gefolgt vom zweistelligen Monat). Das Format des Monats-Strings, das von diesem Eingabetyp verwendet wird, wird in [Monats-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#month_strings) beschrieben.

### Setzen eines Standardwerts

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie einen Monat und ein Jahr im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="bday-month">What month were you born in?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Eine Sache ist zu beachten: Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value`; die meisten {{Glossary("user_agent", "User Agents")}} zeigen den Monat und das Jahr in einer lokaladäquaten Form an, basierend auf der eingestellten Locale des Betriebssystems des Benutzers, während das Datums-`value` immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `bday-month=1978-06`.

### Den Wert mit JavaScript setzen

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft abrufen und festlegen, zum Beispiel:

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

Zusätzlich zu den Attributen, die allgemein für {{HTMLElement("input")}}-Elemente vorgesehen sind, bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument befindet. Die {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Das späteste Jahr und der späteste Monat, im oben im Abschnitt [Wert](#wert) angegebenen String-Format, der akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String im `yyyy-MM`-Format ist, hat das Element keinen Maximalwert.

Dieser Wert muss eine Paarung von Jahr und Monat spezifizieren, die später oder gleich der durch das `min`-Attribut angegebenen ist.

### min

Das früheste Jahr und der früheste Monat, die akzeptiert werden sollen, im gleichen `yyyy-MM`-Format wie oben beschrieben. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements darunter liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der kein gültiger Jahr- und Monatsstring ist, hat der Input keinen Mindestwert.

Dieser Wert muss eine Paarung von Jahr und Monat sein, die früher oder gleich der durch das `max`-Attribut angegebenen ist.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganzzahlige Anzahl von Schritten vom Schritt-Grundwert entfernt sind, sind gültig. Der Schritt-Grund ist [`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (die Unix-Epoche, `1970-01`), falls keiner angegeben ist.

Für `month`-Eingaben wird der Wert von `step` in Monaten angegeben. Der Standardwert von `step` ist 1, was 1 Monat anzeigt.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)). In der Praxis hat es denselben Effekt wie `1` für `month`-Eingaben, da die Auswahloberfläche nur die Auswahl ganzer Monate zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden und Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Monats-Eingaben

Datumsbezogene Eingaben (einschließlich `month`) scheinen auf den ersten Blick praktisch zu sein; sie versprechen eine einfache Benutzeroberfläche für die Datenauswahl und normalisieren das an den Server gesendete Datenformat, unabhängig von der Locale des Benutzers. Es gibt jedoch Probleme mit `<input type="month">`, da viele große Browser es derzeit noch nicht unterstützen.

Wir werden uns die grundlegenden und komplexeren Verwendungen von `<input type="month">` ansehen und dann im Abschnitt [Umgang mit Browserunterstützung](#umgang_mit_browserunterstützung)) Ratschläge zur Minderung des Browser-Support-Problems geben.

### Grundlegende Verwendung von Monat

Die grundlegendste Verwendung von `<input type="month">` beinhaltet eine einfache Kombination aus {{HTMLElement("input")}} und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="bday-month">What month were you born in?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Maximale und minimale Daten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um den Bereich der Daten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel geben wir einen Mindestmonat von `1900-01` und einen Höchstmonat von `2013-12` an:

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
- Je nach dem von Ihnen verwendeten Browser könnten Sie feststellen, dass Monate außerhalb des angegebenen Bereichs möglicherweise nicht im Monatsauswähler auswählbar sind (z. B. Edge) oder ungültig (siehe [Validierung](#validierung)) aber immer noch verfügbar (z.B. Chrome).

### Eingabegröße steuern

`<input type="month">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen für Größenanforderungen auf [CSS](/de/docs/Web/CSS) zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf die eingegebenen Werte an. Die UI-Implementierungen lassen Sie im Allgemeinen nichts eingeben, das kein Datum ist – was hilfreich ist – aber Sie können das Formular immer noch mit der `month`-Eingabe leer oder einem ungültigen Datum (z.B. dem 32. April) einreichen.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten festlegen](#maximale_und_minimale_daten_festlegen)), und zusätzlich das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datumsfeldes verpflichtend zu machen. In unterstützenden Browsern wird dann ein Fehler angezeigt, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld einzugeben.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstdaten festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne die Angabe von Monat und Jahr (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Monat erforderlicher Hinweis im Chrome-Browser](month-required.png)

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir mussten die Icons auf einem {{htmlelement("span")}} neben dem Eingabefeld platzieren, nicht auf dem Eingabefeld selbst, da in Chrome der generierte Inhalt innerhalb des Formularfeldes platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

## Umgang mit Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben derzeit darin, dass viele große Browser diese noch nicht alle implementiert haben; nur Chrome/Opera und Edge unterstützen sie auf dem Desktop und die meisten modernen Browser auf Mobilgeräten. Als Beispiel sieht der `month`-Auswähler in Chrome für Android so aus:

![Monatsauswähler in Chrome für Android](month-android.png)

Nicht unterstützende Browser degradieren zur Texteingabe, aber das schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (die dargestellte Steuerung wird unterschiedlich sein) als auch die Datenverarbeitung.

Letzteres ist das ernstere Problem der beiden. Wie bereits erwähnt, wird mit einer `month`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-mm` normalisiert. Auf der anderen Seite hat eine `text`-Eingabe in ihrer Standardkonfiguration keine Ahnung, welches Format das Datum haben soll, und das ist ein Problem wegen der Vielzahl von verschiedenen Weisen, in denen Menschen Daten schreiben. Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (Juli 2022)
- und so weiter…

Eine Möglichkeit, dies zu umgehen, ist das Hinzufügen eines [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attributs auf Ihre `month`-Eingabe. Auch wenn die `month`-Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser auf die Behandlung als `text`-Eingabe zurückfällt. Versuchen Sie zum Beispiel, das folgende Demo in einem Browser zu betrachten, der `month`-Eingaben nicht unterstützt:

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

Wenn Sie versuchen, es abzusenden, sehen Sie, dass der Browser jetzt eine Fehlermeldung anzeigt (und die Eingabe als ungültig markiert), wenn Ihre Eingabe nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist. Natürlich hindert dies die Leute nicht daran, ungültige Daten (wie `0000-42`) einzugeben oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird. Wir haben noch Arbeit zu tun.

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

Der beste Weg, um mit Daten in Formularen auf browserübergreifende Weise umzugehen (bis alle großen Browser sie eine Weile unterstützt haben), besteht darin, den Benutzer dazu zu bringen, Monat und Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für eine Implementierung) oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/)-Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils darauf ausgelegt sind, den Benutzer einen Monat und ein Jahr auswählen zu lassen. Der erste ist eine native `month`-Eingabe, und der andere ist ein Paar von {{HTMLElement("select")}}-Elementen, die es ermöglichen, Monat und Jahr unabhängig auszuwählen, für Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

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

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month`-Eingabetyp, um den Monat und das Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>`-Elementen verwendet. Das erste fragt den Monat ab, und das zweite das Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate fest kodiert, da sie sich nicht ändern (lokalisierungsbezogene Dinge ausgenommen). Die Liste der verfügbaren Jahreswerte wird je nach aktuellem Jahr dynamisch generiert (siehe die Codekommentare unten für detaillierte Erklärungen, wie diese Funktionen arbeiten).

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

Der JavaScript-Code, der die Auswahl des zu verwendenden Ansatzes übernimmt und die Liste der Jahre für das nicht-native Jahr-`<select>` einrichtet, folgt unten.

Der Teil des Beispiels, der von größtem Interesse sein könnte, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, dessen `type` auf `month` zu setzen, und überprüfen dann sofort, auf welchen Typ es gesetzt ist. Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da das der Fallback ist, wenn `month` nicht unterstützt wird. Wenn `<input type="month">` nicht unterstützt wird, blenden wir den nativen Auswähler aus und zeigen die Fallback-UI an.

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

- Das generische {{HTMLElement("input")}} Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Date and Time picker Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
