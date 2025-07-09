---
title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}} Elemente vom Typ **`week`** erzeugen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601 Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

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

Die Benutzeroberfläche des Steuerelements variiert von Browser zu Browser; die browserübergreifende Unterstützung ist derzeit etwas eingeschränkt, da nur Chrome/Opera und Microsoft Edge sie derzeit unterstützen. In nicht unterstützten Browsern fällt das Steuerelement elegant zurück und funktioniert identisch mit [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text).

![Eine Eingabe, die 'Woche 01, 2017' anzeigt. Der Hintergrund von 2017 ist das gleiche Blau wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder löschen, einen Spinner mit kleinen Auf- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender erscheint unter der Eingabe und ist auf Januar 2017 eingestellt. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender ist rechts davon. Die Zeile mit Woche 1 und dem 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um für die nächsten und vorherigen Monate nach rechts und links zu gehen.](week-control-chrome.png)

## Wert

Ein String, der den Wert der in das Eingabefeld eingegebenen Woche/Jahr darstellt. Das Format des von diesem Eingabetyp verwendeten Datums- und Zeitwerts wird in [Week strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut angeben, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Format vom tatsächlichen `value` abweichen kann, das immer im Format `yyyy-Www` ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript abrufen und festlegen, indem Sie die `value`-Eigenschaft des Eingabeelements verwenden:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die bei {{HTMLElement("input")}}-Elementen üblich sind, bieten Wochen-Eingaben die folgenden Attribute.

### max

Das späteste (zeitlich gesehen) Jahr und die Wochennummer, im oben beschriebenen String-Format [Value](#wert), die akzeptiert werden. Wenn der im Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt das Element [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine gültige Wochenzeichenkette ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die im `min`-Attribut festgelegt sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Wochenzeichenkette ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch von JavaScript-Code geändert werden, der die Wert-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem Attribut `readonly`.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Grundlagewert zum Schritt (falls angegeben, [`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, und ein geeigneter Standardwert, wenn keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schrittmaß impliziert wird und jeder Wert erlaubt ist (sofern keine anderen Beschränkungen wie [`min`](#min) und [`max`](#max) gelten).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht zur Schrittmaßkonfiguration passen, kann der {{Glossary("user_agent", "user agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden vorliegt). Der Standardwert von `step` ist 1, was 1 Woche anzeigt. Der Standardbasissprungwert ist -259.200.000, was der Anfang der ersten Woche 1970 (`"1970-W01"`) ist.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `"any"` für `step` bedeutet, wenn er mit `week`-Eingaben verwendet wird. Diese Informationen werden aktualisiert, sobald sie ermittelt werden._

## Verwendung von Wochen-Eingaben

Wochen-Eingaben scheinen auf den ersten Blick praktisch zu sein, da sie eine einfache Benutzeroberfläche bieten, um Wochen auszuwählen, und sie das Datenformat normalisieren, das an den Server gesendet wird, unabhängig vom Browser oder der Spracheinstellung des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browserunterstützung nicht in allen Browsern garantiert ist.

Wir schauen uns grundlegende und komplexere Anwendungen von `<input type="week">` an und bieten dann Ratschläge zur Behebung des Browserunterstützungsproblems an (siehe [Handling browser support](#umgang_mit_der_browserunterstützung)).

### Grundlegende Anwendungen von week

Die grundlegendste Verwendung von `<input type="week">` betrifft eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="week">` unterstützt keine Formulargroßenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des step-Attributs

Sie sollten das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um die Anzahl der Wochen zu variieren, die übersprungen werden, sobald sie erhöht oder verringert werden. Es scheint jedoch keine Wirkung in unterstützenden Browsern zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen Sie im Allgemeinen nichts eingeben, was keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, mit leerem Feld zu senden, und Sie möchten möglicherweise den Bereich der wählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die gültigen Wochen, die der Benutzer auswählen kann, einzuschränken. Im folgenden Beispiel setzen wir einen Mindestwert auf `Week 01, 2017` und einen Höchstwert auf `Week 52, 2017`:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, weil in Chrome der generierte Inhalt innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen und in unterstützenden Browsern auswählbar sind.

### Werte für Wochen erforderlich machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. In diesem Fall zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

Lassen Sie uns ein Beispiel betrachten; hier haben wir minimale und maximale Wochen festgelegt und auch das Feld erforderlich gemacht:

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

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerelement hat zwei Striche, wo die Wochennummer angezeigt werden sollte. Ein Popup mit einem gelben Warnsymbol und der Aufforderung 'Bitte füllen Sie dieses Feld aus' kommt von den beiden Strichen, die blau hervorgehoben sind, das gleiche Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, das Hauptproblem bei der Verwendung von Wochen-Eingaben ist derzeit die Browserunterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop und alte Versionen von IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS machen perfekten Einsatz von solchen Eingabetypen, bieten spezialisierte UI-Steuerelemente, die es wirklich einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'Woche festlegen'. Es gibt zwei Spalten: die linke hat 36 in der Mitte in voller Opazität, mit 35 darüber und 37 darunter, die halbtransparent sind. Auf der rechten Seite ist 2017 voll opak. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten umfassen 'löschen' auf der 'linken' Seite und 'abbrechen' und 'setzen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser fallen elegant auf eine Texteingabe zurück, aber das schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch in Bezug auf die Datenverarbeitung.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer in das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, das den Benutzer dazu führt, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Week 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, um Wochen/Jahre momentan auf eine plattformübergreifende Weise in Formularen zu behandeln, besteht darin, den Benutzer getrennte Steuerelemente für die Eingabe der Wochennummer und des Jahres verwenden zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel), oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei UI-Element-Sets zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und einen Satz von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week` Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Der HTML-Code sieht folgendermaßen aus:

```html
<form>
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
</form>
```

Die Wochenwerte werden dynamisch durch den folgenden JavaScript-Code generiert.

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

Der andere Teil des Codes, der interessant sein könnte, ist der Code zur Funktionsdetektion. Um festzustellen ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}} Element, versuchen seinen `type` auf `week` zu setzen, und prüfen dann sofort, welcher `type` gesetzt ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-UI ({{htmlelement("select")}}s).

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
> Denken Sie daran, dass einige Jahre 53 Wochen in sich haben (siehe [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies bei der Entwicklung von Produktionsanwendungen berücksichtigen.

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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown),
        und [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
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
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
