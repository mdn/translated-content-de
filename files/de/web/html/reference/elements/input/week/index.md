---
title: HTML-Attributwert `<input type="week">`
short-title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erzeugen Eingabefelder, in denen sich ein Jahr und die zugehörige [ISO-8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) (also Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)) einfach eingeben lassen.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;week&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="camp-week">Choose a week in May or June:</label>

<input
  type="week"
  name="week"
  id="camp-week"
  min="2018-W18"
  max="2018-W26"
  required />
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

Die Benutzeroberfläche des Steuerelements unterscheidet sich je nach Browser. Die browserübergreifende Unterstützung ist derzeit etwas eingeschränkt: Aktuell unterstützen es nur Chrome/Opera und Microsoft Edge. In Browsern ohne Unterstützung wird das Steuerelement auf eine Funktion zurückgesetzt, die [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) entspricht.

![Ein Eingabefeld mit der Anzeige „Woche 01, 2017“. Die Jahreszahl 2017 hat denselben blauen Hintergrund wie der Fokusring. Im Eingabefeld befinden sich drei Symbole: ein X zum Löschen, ein Steuerelement mit kleinen Pfeilen nach oben und unten sowie ein größerer Pfeil nach unten. Unter dem Eingabefeld ist ein Kalender für Januar 2017 geöffnet. Die erste Spalte zeigt die Wochen 52, 1, 2, 3, 4 und 5; rechts davon ist der vollständige Monatskalender zu sehen. Die Zeile für Woche 1 mit dem 2. bis 8. Januar ist hervorgehoben. Auf Höhe des Monats befinden sich Schaltflächen zum Wechseln zum nächsten und vorherigen Monat.](week-control-chrome.png)

## Wert

Ein String, der die im Eingabefeld eingegebene Woche und das Jahr darstellt. Das von diesem Eingabetyp verwendete Format ist unter [Wochen-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert festlegen, indem Sie im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) einen Wert angeben:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Beachten Sie, dass das angezeigte Format vom tatsächlichen `value` abweichen kann. Dieser hat immer das Format `yyyy-Www`. Browser zeigen den obigen Wert beispielsweise möglicherweise als `Week 01, 2017` an; an den Server wird jedoch immer ein Wert wie `week=2017-W01` übermittelt.

Sie können den Wert auch in JavaScript über die Eigenschaft [`value`](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements abrufen und festlegen:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Eingabefelder vom Typ `week` die folgenden Attribute.

### max

Das späteste zulässige Jahr mit Wochennummer im String-Format, das oben im Abschnitt [Wert](#wert) beschrieben ist. Überschreitet der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `max` kein gültiger Wochen-String, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem durch das Attribut `min` angegebenen Jahr mit Wochennummer sein.

### min

Das früheste zulässige Jahr mit Wochennummer. Ist der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner als dieser Wert, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der für `min` angegebene Wert kein gültiger Wochen-String, hat das Eingabefeld keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des Attributs `max` sein.

### readonly

Ein boolesches Attribut, das bei Vorhandensein bewirkt, dass Benutzer das Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft `value` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert vorgeschrieben werden kann, hat `required` bei Eingabefeldern mit dem Attribut `readonly` keine Wirkung.

### step

Das Attribut `step` ist eine Zahl, die die erforderliche Schrittweite für den Wert angibt, oder der unten beschriebene besondere Wert `any`. Gültig sind nur Werte, die vom Ausgangswert aus um eine ganzzahlige Anzahl von Schritten abweichen. Der Ausgangswert ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder −259.200.000 (der Beginn der Woche `1970-W01`), wenn keines der beiden Attribute angegeben ist.

Bei Eingabefeldern vom Typ `week` wird `step` in Wochen angegeben und als Millisekundenwert behandelt, der dem `step`-Wert multipliziert mit 604.800.000 entspricht (der zugrunde liegende numerische Wert wird in Millisekunden angegeben). Der Standardwert ist 1, also eine Woche.

Der String-Wert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern andere Einschränkungen wie [`min`](#min) und [`max`](#max) eingehalten werden. Bei Eingabefeldern vom Typ `week` hat dies praktisch dieselbe Wirkung wie `1`, da die Auswahloberfläche nur ganze Wochen zur Auswahl anbietet.

> [!NOTE]
> Wenn die eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden. Sind zwei Werte gleich weit entfernt, werden dabei Werte in positiver Richtung bevorzugt.

## Eingabefelder vom Typ `week` verwenden

Eingabefelder vom Typ `week` wirken auf den ersten Blick praktisch: Sie bieten eine einfache Oberfläche zur Auswahl von Wochen und vereinheitlichen das Format der an den Server gesendeten Daten, unabhängig vom Browser oder der Locale des Benutzers. Bei `<input type="week">` gibt es jedoch Probleme, da nicht alle Browser diesen Eingabetyp unterstützen.

Zunächst betrachten wir einfache und komplexere Einsatzmöglichkeiten von `<input type="week">`. Anschließend zeigen wir, wie Sie mit der eingeschränkten Browser-Unterstützung umgehen können (siehe [Umgang mit der Browser-Unterstützung](#umgang_mit_der_browser-unterstützung)).

### Einfache Verwendung von `week`

Die einfachste Verwendung von `<input type="week">` besteht aus einer Kombination eines `<input>`-Elements mit einem {{htmlelement("label")}}-Element:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" />
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Größe des Eingabefelds festlegen

`<input type="week">` unterstützt keine Attribute zur Größenfestlegung von Formularfeldern wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS).

### Das Attribut `step` verwenden

Mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sollten Sie festlegen können, um wie viele Wochen sich der Wert beim Erhöhen oder Verringern ändert. In unterstützenden Browsern scheint es jedoch keine Wirkung zu haben.

## Validierung

Standardmäßig validiert `<input type="week">` eingegebene Werte nicht. Die Benutzeroberflächen lassen in der Regel nur gültige Kombinationen aus Woche und Jahr zu. Das Feld kann aber weiterhin leer übermittelt werden. Möglicherweise möchten Sie außerdem den Bereich auswählbarer Wochen einschränken.

### Früheste und späteste Woche festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die gültigen Wochen einschränken, die Benutzer auswählen können. Im folgenden Beispiel legen wir `Week 01, 2017` als frühesten und `Week 52, 2017` als spätesten Wert fest:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
<span class="validity"></span>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Das folgende CSS wird im obigen Beispiel verwendet. Mit den CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} gestalten wir das Eingabefeld abhängig davon, ob sein aktueller Wert gültig ist. Die Symbole mussten auf einem {{htmlelement("span")}}-Element neben dem Eingabefeld platziert werden statt auf dem Eingabefeld selbst: In Chrome wird generierter Inhalt innerhalb des Formularsteuerelements platziert und lässt sich dort nicht sinnvoll gestalten oder anzeigen.

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

Dadurch gelten nur die Wochen W01 bis W52 des Jahres 2017 als gültig und sind in unterstützenden Browsern auswählbar.

### Wochenangaben erforderlich machen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie die Angabe einer Woche verpflichtend machen. Unterstützende Browser zeigen dann einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld zu übermitteln.

Im folgenden Beispiel haben wir eine früheste und eine späteste Woche festgelegt und das Feld als erforderlich gekennzeichnet:

```html
<form>
  <div>
    <label for="week">What week would you like to start?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2017-W52"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Wenn Sie versuchen, das Formular ohne Wert zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie es im Beispiel aus:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Für Benutzer eines Browsers ohne Unterstützung ist hier ein Screenshot:

![Im Formularsteuerelement für die Woche stehen zwei Striche anstelle der Wochennummer. Von den blau hervorgehobenen Strichen geht ein Pop-up mit einem gelben Warnsymbol und dem Text „Please fill out this field“ aus. Das Blau entspricht dem Fokusring des Eingabefelds.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ersetzt _keine_ Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben. HTML lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem können Daten unter Umgehung Ihres HTML direkt an Ihren Server gesendet werden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können falsch formatierte Daten – oder Daten, die zu groß sind, den falschen Typ haben usw. – schwerwiegende Folgen haben.

## Umgang mit der Browser-Unterstützung

Wie bereits erwähnt, ist die Browser-Unterstützung derzeit das größte Problem bei der Verwendung von Eingabefeldern vom Typ `week`: Safari und Firefox unterstützen sie auf Desktopgeräten nicht; ältere IE-Versionen unterstützen sie ebenfalls nicht.

Mobile Plattformen wie Android und iOS können solche Eingabetypen gut nutzen. Sie stellen spezielle Steuerelemente bereit, mit denen sich Werte auf Touchscreens einfach auswählen lassen. Die Auswahloberfläche für `week` in Chrome für Android sieht beispielsweise so aus:

![Ein modales Pop-up mit der Überschrift „set week“. Es hat zwei Spalten: Links steht die Zahl 36 vollständig sichtbar in der Mitte, während 35 darüber und 37 darunter halbtransparent dargestellt sind. Rechts ist 2017 vollständig sichtbar. Weitere Optionen gibt es nicht. Unten befinden sich drei Textlinks oder Schaltflächen: „clear“ links sowie „cancel“ und „set“ rechts.](week-chrome-android.png)

Browser ohne Unterstützung greifen auf ein Texteingabefeld zurück. Das führt jedoch sowohl bei der Einheitlichkeit der Benutzeroberfläche – das angezeigte Steuerelement ist anders – als auch bei der Datenverarbeitung zu Problemen.

Das zweite Problem wiegt schwerer. Wie bereits erwähnt, wird der tatsächliche Wert eines Eingabefelds vom Typ `week` immer in das Format `yyyy-Www` umgewandelt. Greift der Browser auf ein allgemeines Texteingabefeld zurück, gibt es für Benutzer keinen Hinweis auf das richtige Eingabeformat, das auch nicht unmittelbar ersichtlich ist. Wochenangaben könnten beispielsweise so eingegeben werden:

- `Week 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Derzeit ist es für eine browserübergreifende Verarbeitung von Wochen und Jahren in Formularen am besten, Wochennummer und Jahr in getrennten Steuerelementen eingeben zu lassen (häufig werden dafür {{htmlelement("select")}}-Elemente verwendet; ein Beispiel finden Sie unten) oder eine JavaScript-Bibliothek wie den [jQuery Datepicker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Gruppen von Steuerelementen zur Auswahl von Wochen: eine native Auswahloberfläche mit `<input type="week">` sowie zwei {{htmlelement("select")}}-Elemente zur Auswahl von Woche und Jahr für ältere Browser, die den Eingabetyp `week` nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Das HTML sieht so aus:

```html
<div class="nativeWeekPicker">
  <label for="week">What week would you like to start?</label>
  <input
    id="week"
    type="week"
    name="week"
    min="2017-W01"
    max="2018-W52"
    required />
  <span class="validity"></span>
</div>
<p class="fallbackLabel">What week would you like to start?</p>
<div class="fallbackWeekPicker">
  <div>
    <span>
      <label for="week">Week:</label>
      <select id="fallbackWeek" name="week"></select>
    </span>
    <span>
      <label for="year">Year:</label>
      <select id="year" name="year">
        <option value="2017" selected>2017</option>
        <option value="2018">2018</option>
      </select>
    </span>
  </div>
</div>
```

Die Wochenwerte werden vom folgenden JavaScript-Code dynamisch erzeugt.

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

Ein weiterer interessanter Teil des Codes ist die Erkennung der Browser-Unterstützung. Um festzustellen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, dessen `type` auf `week` zu setzen, und prüfen anschließend sofort den Wert von `type`. Browser ohne Unterstützung geben `text` zurück, da der Typ `week` auf den Typ `text` zurückfällt. Wird `<input type="week">` nicht unterstützt, blenden wir die native Auswahloberfläche aus und zeigen stattdessen die alternative Oberfläche mit {{htmlelement("select")}}-Elementen an.

```js
// Get UI elements
const nativePicker = document.querySelector(".nativeWeekPicker");
const fallbackPicker = document.querySelector(".fallbackWeekPicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const weekSelect = document.querySelector("#fallbackWeek");

// Hide fallback initially
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Test whether a new date input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "week";
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === "text") {
  // Hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // populate the weeks dynamically
  populateWeeks();
}

function populateWeeks() {
  // Populate the week select with 52 weeks
  for (let i = 1; i <= 52; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    weekSelect.appendChild(option);
  }
}
```

> [!NOTE]
> Denken Sie daran, dass manche Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Berücksichtigen Sie dies bei der Entwicklung von Anwendungen für den produktiven Einsatz.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der eine Woche und ein Jahr darstellt, oder
        leer
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

- Das allgemeine {{HTMLElement("input")}}-Element und die Schnittstelle zu seiner Bearbeitung, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time) und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
