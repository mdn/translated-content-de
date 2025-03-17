---
title: <input type="week">
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`week`** erstellen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601-Kalenderwoche](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)) ermöglichen.

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

Die Benutzeroberfläche des Steuerelements variiert je nach Browser; die Unterstützung in verschiedenen Browsern ist momentan etwas eingeschränkt, da es bisher nur von Chrome/Opera und Microsoft Edge unterstützt wird. In nicht unterstützenden Browsern degradiert das Steuerelement automatisch zu einer Funktionalität, die identisch mit der von [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) ist.

![Eine Eingabe, die 'Woche 01, 2017' liest. Der Hintergrund des Jahres 2017 hat dieselbe blaue Farbe wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder löschen, einen Spinner mit kleinen Pfeilen nach oben und unten und einen größeren Pfeil nach unten. Ein Kalender ist ein Popup unter der Eingabe, der auf Januar 2017 eingestellt ist. Die erste Spalte des Kalenders sind die Wochen: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und vom 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um zu den nächsten und vorherigen Monaten zu wechseln.](week-control-chrome.png)

## Wert

Ein Zeichenfolgenwert, der den Wert der in die Eingabe eingegebenen Woche/Jahr darstellt. Das Format des Datums- und Zeitwertes, der von diesem Eingabetyp verwendet wird, wird in [Week strings](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Beachten Sie, dass das angezeigte Format möglicherweise von dem tatsächlichen `value` abweichen kann, das immer als `yyyy-Www` formatiert wird. Wenn der obige Wert beispielsweise an den Server übermittelt wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert sieht immer wie `week=2017-W01` aus.

Sie können den Wert auch in JavaScript mit der [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabeelements abrufen und festlegen, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen für {{HTMLElement("input")}}-Elemente bieten Woche-Eingaben die folgenden Attribute.

### max

Das neueste (zeitlich gesehen) Jahr und die Wochenzahl, im oben im Abschnitt [Wert](#wert) beschriebenen Zeichenfolgenformat, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt die Elementprüfung [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine gültige Wochenzeichenfolge ist, dann hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die durch das `min`-Attribut angegeben sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt die Elementprüfung [constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Wochenzeichenfolge ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Grundlage für das Stufen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner dieser Werte angegeben ist) sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Stufen angedeutet werden, und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stufenkonfiguration entsprechen, kann der {{Glossary("user_agent", "user agent")}} auf den nächsten gültigen Wert runden und bei zwei gleich nahen Optionen Zahlen in der positiven Richtung bevorzugen.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 1, was 1 Woche bedeutet. Die Standardstufenbasis ist -259.200.000, was der Beginn der ersten Woche von 1970 (`"1970-W01"`) ist.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `"any"` für `step` bedeutet, wenn er mit `week`-Eingaben verwendet wird. Diese Information wird aktualisiert, sobald sie bestimmt ist._

## Verwendung von Woche-Eingaben

Woche-Eingaben erscheinen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bereitstellen und das Datenformat normalisieren, das an den Server gesendet wird, unabhängig vom Browser oder der Spracheinstellung des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browser-Unterstützung nicht in allen Browsern gewährleistet ist.

Wir werden uns grundlegende und komplexere Anwendungen von `<input type="week">` ansehen und dann Ratschläge geben, wie das Problem der Browser-Unterstützung gemildert werden kann (siehe [Umgang mit der Unterstützung von Browsern](#umgang_mit_der_unterstützung_von_browsern)).

### Grundlegende Verwendungen von Woche

Die grundlegendste Verwendung von `<input type="week">` beinhaltet eine einfache Kombination von `<input>` und {{htmlelement("label")}}, wie unten dargestellt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="week">` unterstützt keine Formulierungsgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen sich auf [CSS](/de/docs/Web/CSS) für Größenbedürfnisse verlassen.

### Verwendung des step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die jeweils inkrementiert oder dekrementiert werden. Es scheint jedoch keinen Effekt auf unterstützende Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen Sie in der Regel nichts angeben, was keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist dennoch möglich, ohne Wertnahmen zu übermitteln, und Sie möchten möglicherweise den Bereich der auswählbaren Wochen einschränken.

### Festlegung von maximalen und minimalen Wochen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Wochen einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir einen Minimalwert von `Woche 01, 2017` und einen Maximalwert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

### Erforderlich machen von Wochenwerten

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld zu übermitteln.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Wochen festgelegt und das Feld auch als erforderlich deklariert:

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

Wenn Sie versuchen, das Formular ohne einen Wert zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-/Steuerelement hat zwei Striche, wo die Wochenzahl stehen sollte. Ein Popup mit einem gelben Warnsymbol und einem 'Bitte füllen Sie dieses Feld aus' emaniert von den zwei Strichen, die in Blau hervorgehoben sind, das gleiche Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formular-Validierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, das HTML so anzupassen, dass er die Validierung umgehen oder vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte das bei Einreichung von fehlerhaft formatierten Daten (oder Daten, die zu groß, vom falschen Typ sind, usw.) zu einem Desaster führen.

## Umgang mit der Unterstützung von Browsern

Wie oben erwähnt, ist das Hauptproblem bei der Verwendung von Wocheneingaben derzeit die Unterstützung durch Browser: Safari und Firefox unterstützen dies nicht auf dem Desktop, und alte IE-Versionen unterstützen es nicht.

Mobile Plattformen wie Android und iOS machen perfekten Gebrauch von solchen Eingabetypen und bieten spezielle UI-Steuerelemente, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Die Kopfzeile lautet 'Woche einstellen'. Es gibt zwei Spalten: Links steht 36 in der Mitte mit voller Deckkraft, mit 35 darüber und 37 darunter, die halbtransparent sind. Auf der rechten Seite ist 2017 vollständig deckend. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten enthalten 'löschen' links und 'abbrechen' und 'einstellen' rechts.](week-chrome-android.png)

Nicht unterstützende Browser degradieren elegant zu einer Texteingabe, was jedoch Probleme sowohl hinsichtlich der Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch der Datenverarbeitung verursacht.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer in das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, was den Benutzer zur korrekten Formatierung der Eingabe führt (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten, zum Beispiel:

- `Woche 1 2017`
- `2.-8. Jan 2017`
- `2017-W01`
- usw.

Der beste Weg, um mit Wochen/Jahren in Formularen auf eine plattformübergreifende Weise umzugehen, besteht derzeit darin, den Benutzer dazu zu bringen, die Wochennummer und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel), oder verwenden Sie JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/).

## Beispiele

In diesem Beispiel erstellen wir zwei Sets von UI-Elementen zum Auswählen von Wochen: einen nativen Picker, erstellt mit `<input type="week">`, und ein Set aus zwei {{htmlelement("select")}}-Elementen zum Auswählen von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Das HTML sieht folgendermaßen aus:

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

Die Wochenwerte werden von untenstehendem JavaScript-Code dynamisch erzeugt.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, welcher `type` gesetzt ist. Nicht unterstützende Browser geben `text` zurück, weil der `week`-Typ auf Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verstecken wir den nativen Picker und zeigen stattdessen die Ersatz-Picker-UI ({{htmlelement("select")}}s).

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies berücksichtigen, wenn Sie Produktionsanwendungen entwickeln.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die eine Woche und ein Jahr darstellt, oder
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
        und [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time) und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
