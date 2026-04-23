---
title: '`<input type="week">` HTML-Attributwert'
short-title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("input")}}-Elemente des Typs **`week`** erstellen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) in diesem Jahr ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

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

Die Benutzeroberfläche der Steuerelemente variiert je nach Browser. Die Unterstützung über Browser hinweg ist derzeit etwas begrenzt, da momentan nur Chrome/Opera und Microsoft Edge dies unterstützen. In nicht unterstützten Browsern wird das Steuerelement elegant heruntergestuft, um identisch mit [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zu funktionieren.

![Eine Eingabe mit der Anzeige 'Woche 01, 2017'. Der Hintergrund der 2017 ist der gleiche Blauton wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder Löschen, einen Spinner mit kleinen Aufwärts- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender ist ein Pop-up unterhalb der Eingabe, das auf Januar 2017 eingestellt ist. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatkalender befindet sich rechts davon. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um nach rechts und links zum nächsten und vorherigen Monat zu wechseln.](week-control-chrome.png)

## Wert

Ein String, der den in die Eingabe eingegebenen Wert von Woche/Jahr darstellt. Das Format des Datums- und Zeitwerts, der von diesem Eingabetyp verwendet wird, wird in [Woche-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attributs eingeben, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Ein wichtiger Punkt ist, dass das angezeigte Format sich vom tatsächlichen `value` unterscheiden kann, das immer im Format `yyyy-Www` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, könnten Browser diesen als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript mittels der [`value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft des Input-Elements abrufen und setzen, beispielsweise:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den für {{HTMLElement("input")}} Elemente üblichen Attributen bieten Woche-Eingaben die folgenden Attribute.

### max

Das späteste (zeitlich gesehen) Jahr und die Wochennummer, im im [Wert](#wert)-Abschnitt oben beschriebenen Stringformat akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen übersteigt, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn der Wert des `max`-Attributes kein gültiger Wochenstring ist, hat das Element keinen maximalen Wert.

Dieser Wert muss größer als oder gleich dem Jahr und der Woche sein, die vom `min`-Attribut angegeben sind.

### min

Das früheste Jahr und Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, scheitert das Element an der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation). Wenn ein Wert für `min` angegeben wird, der kein gültiger Wochenstring ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der direkt die `value` Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem auch angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder -259.200.000 (der Beginn der Woche `1970-W01`), wenn kein solcher Wert angegeben ist.

Für `week` Eingaben wird der Wert von `step` in Wochen angegeben und als Anzahl von Millisekunden behandelt, die 604.800.000 mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 1, was 1 Woche anzeigt.

Ein Stringwert von `any` bedeutet, dass kein festgelegter Schritt angewendet wird, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). In der Realität hat es die gleiche Wirkung wie `1` für `week` Eingaben, da die AuswahluI nur erlaubt ganze Wochen auszuwählen.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in Richtung der positiven Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Woche-Eingaben

Woche-Eingaben klingen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bieten und das Datenformat, das an den Server gesendet wird, normalisieren, unabhängig vom Browser oder der Lokalisierung des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browser-Unterstützung nicht in allen Browsern gewährleistet ist.

Wir werden uns grundlegende und komplexere Anwendungen von `<input type="week">` ansehen und dann Ratschläge geben, wie man das Browser-Unterstützungsproblem später (siehe [Umgang mit Browser-Unterstützung](#umgang_mit_der_browser-unterstützung)) mildern kann.

### Grundlegende Verwendungen von Woche

Die grundlegendste Nutzung von `<input type="week">` beinhaltet eine einfache Kombination aus einem `<input>` und einem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Eingabegröße steuern

`<input type="week">` unterstützt keine Form Sizing-Attribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenbedürfnisse zurückgreifen.

### Verwenden des Step-Attributes

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Wochen, die übersprungen werden, zu variieren, wann immer sie erhöht oder verringert werden. Es scheint jedoch in unterstützenden Browsern keine Wirkung zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen Sie in der Regel nichts eingeben, das keine gültige Woche/Jahr ist, was hilfreich ist. Es ist jedoch immer noch möglich, mit einem leeren Feld zu übermitteln, und Sie möchten möglicherweise den Bereich der auswählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel legen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, weil in Chrome der generierte Inhalt innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen und in unterstützenden Browsern auswählbar sein werden.

### Wochenwerte erforderlich machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. Als Ergebnis werden unterstützende Browser einen Fehler anzeigen, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

Lassen Sie uns ein Beispiel betrachten. Hier haben wir minimale und maximale Wochen eingestellt und auch das Feld als erforderlich gemacht:

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

Wenn Sie versuchen, das Formular ohne Wert zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerelement hat zwei Striche, wo die Wochennummer stehen sollte. Ein Popup mit einem gelben Warnsymbol und 'Bitte füllen Sie dieses Feld aus' kommt von den beiden Strichen, die in Blau hervorgehoben sind, dem gleichen Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code nicht die Daten validiert, die er erhält, könnte eine Katastrophe eintreten, wenn unsachgemäß formatierte Daten eingereicht werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Umgang mit der Browser-Unterstützung

Wie oben erwähnt, ist das Hauptproblem bei der Verwendung von Woche-Eingaben derzeit die Browser-Unterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop, und alte Versionen von IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS nutzen diese Eingabetypen perfekt, indem sie spezialisierte UI-Steuerelemente bereitstellen, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'Woche setzen'. Es gibt zwei Spalten: links befindet sich 36 in der Mitte mit voller Deckkraft, 35 darüber und 37 darunter sind halbdeckend. Auf der rechten Seite ist 2017 vollständig deckend. Es gibt keine anderen Optionen. Drei Textlinks oder -schaltflächen unten umfassen 'löschen' auf der linken Seite und 'abbrechen' und 'setzen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser wechseln eleganterweise zu einer Texteingabe, aber dies führt sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch die Datenverarbeitung zu Problemen.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird der tatsächliche Wert bei einer `week` Eingabe immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, das den Benutzer dahin führt, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Leute Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `2.-8. Jan 2017`
- `2017-W01`
- usw.

Der beste Weg, um mit Woche/Jahr in Formularen auf eine browserübergreifende Art und Weise umzugehen, besteht derzeit darin, den Benutzer dazu zu bringen, die Wochennummer und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) oder JavaScript-Bibliotheken wie den [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wird, und einen Satz von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week` Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Das HTML sieht wie folgt aus:

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

Die Wochenwerte werden dynamisch durch den folgenden JavaScript-Code erzeugt.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, welcher `type` gesetzt ist. Nicht unterstützende Browser geben `text` zurück, weil der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verstecken wir den nativen Picker und zeigen stattdessen die Fallback-Picker-UI ({{htmlelement("select")}}-s) an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies berücksichtigen, wenn Sie Produktions-Apps entwickeln.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
