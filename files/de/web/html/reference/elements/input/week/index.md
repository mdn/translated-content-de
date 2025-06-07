---
title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erzeugen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) in diesem Jahr ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

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

Die Benutzeroberfläche des Steuerelements variiert von Browser zu Browser; die plattformübergreifende Unterstützung ist derzeit etwas eingeschränkt, da es nur von Chrome/Opera und Microsoft Edge unterstützt wird. In nicht unterstützten Browsern wird das Steuerelement herabgestuft und funktioniert identisch wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text).

![Eine Eingabe zeigt 'week 01, 2017'. Der Hintergrund des Jahres 2017 ist das gleiche Blau wie der Fokusrahmen. Es gibt 3 Symbole in der Eingabe: x oder löschen, einen Spinner mit kleinen Auf- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender erscheint als Popup unter der Eingabe, eingestellt auf Januar 2017. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der volle Monatskalender ist rechts davon. Die Zeile mit Woche 1 und dem Zeitraum 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen zum Navigieren zu den nächsten und vorherigen Monaten.](week-control-chrome.png)

## Wert

Ein String, der den Wert der in die Eingabe eingegebenen Woche/Jahr darstellt. Das Format des Datums- und Zeitwerts, das von diesem Eingabetyp verwendet wird, wird in [Wochen-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des Attributs [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) angeben, zum Beispiel:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Es ist zu beachten, dass das dargestellte Format vom eigentlichen `value` abweichen kann, das immer im Format `yyyy-Www` formatiert ist. Wenn der obige Wert zum Beispiel an den Server übermittelt wird, können Browser ihn als `Week 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript über die `value`-Eigenschaft des Eingabeelements erhalten und festlegen, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen für {{HTMLElement("input")}}-Elemente bieten Wocheneingaben die folgenden Attribute.

### max

Das zeitlich späteste Jahr und die Wochennummer, im im Abschnitt [Wert](#wert) oben erläuterten Format, die akzeptiert werden sollen. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert übersteigt, schlägt das Element bei der [Einschränkungsgültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochen-String ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die durch das `min`-Attribut angegeben sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden sollen. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist, schlägt das Element bei der [Einschränkungsgültigkeitsprüfung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der kein gültiger Wochen-String ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit gleichzeitig spezifiziertem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schritt-Basiswert ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein entsprechender Standardwert, falls keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein String-Wert `any` bedeutet, dass kein Schritt vorgegeben ist und jeder Wert erlaubt ist (sofern andere Einschränkungen, wie [`min`](#min) und [`max`](#max), es zulassen).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 1, was 1 Woche anzeigt. Die standardmäßige Schritt-Basis ist -259.200.000, was dem Beginn der ersten Woche von 1970 entspricht (`"1970-W01"`).

_Zu diesem Zeitpunkt ist nicht klar, was ein Wert von `"any"` für `step` bei Verwendung mit `week`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Information ermittelt wird._

## Verwendung von Wocheneingaben

Wocheneingaben klingen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bieten und das Datenformat, das an den Server gesendet wird, unabhängig vom Browser oder der Region des Benutzers normalisieren. Es gibt jedoch Probleme mit `<input type="week">`, da die Unterstützung durch Browser nicht über alle Browser hinweg gewährleistet ist.

Wir werden grundlegende und komplexere Verwendungen von `<input type="week">` betrachten und anschließend Ratschläge zur Minderung des Browserunterstützungsproblems geben (siehe [Umgang mit Browser-Unterstützung](#umgang_mit_browser-unterstützung)).

### Grundlegende Verwendungen von Week

Die grundlegendste Verwendung von `<input type="week">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="week">` unterstützt keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des Step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die bei jedem Inkrement oder Dekrement übersprungen werden. Jedoch scheint es in unterstützenden Browsern keine Wirkung zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung der eingegebenen Werte an. Die UI-Implementierungen lassen in der Regel nicht zu, dass Sie etwas angeben, das keine gültige Woche/kein gültiges Jahr ist, was hilfreich ist, aber es ist immer noch möglich, ohne Eingabe abzusenden, und Sie möchten vielleicht den Bereich der wählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel legen wir einen Mindestwert von `Week 01, 2017` und einen Höchstwert von `Week 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend auf der Gültigkeit des aktuellen Wertes zu gestalten. Wir mussten die Symbole in ein {{htmlelement("span")}} neben der Eingabe setzen, nicht in die Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Form-Steuerelements platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig erkannt und in unterstützenden Browsern ausgewählt werden können.

### Wochendaten zwingend machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe der Woche obligatorisch zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Wochen festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochen-Formular-Steuerelement hat zwei Striche, wo die Wochennummer sein sollte. Ein Popup mit einem gelben Warnsymbol und dem Text 'Bitte füllen Sie dieses Feld aus' erscheint von den zwei Strichen, die blau markiert sind, das gleiche Blau wie der Fokusrahmen der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formular-Validierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte dies katastrophale Folgen haben, wenn falsch formatierte Daten (oder zu große, falsche Datentypen usw.) übermittelt werden.

## Umgang mit Browser-Unterstützung

Wie oben erwähnt, ist das Hauptproblem bei der Verwendung von Wocheneingaben derzeit die Browserunterstützung: Safari und Firefox unterstützen dies auf Desktops nicht, und alte IE-Versionen auch nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt aus, indem sie spezielle UI-Steuerelemente bereitstellen, die die Auswahl von Werten in einer Touchscreen-Umgebung wirklich einfach machen. Zum Beispiel sieht der `week`-Picker auf Chrome für Android so aus:

![Ein modales Popup. Die Kopfzeile lautet 'Wochen einstellen'. Es gibt zwei Spalten: die linke zeigt 36 in der Mitte mit voller Deckkraft, mit 35 darüber und 37 darunter in halbtransparenter Form. Auf der rechten Seite ist 2017 vollständig deckend. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten umfassen 'löschen' auf der 'linken' Seite und 'abbrechen' und 'einstellen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser degradieren elegant zu einer Texteingabe, aber das schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird unterschiedlich sein), als auch bei der Datenverarbeitung.

Das zweite Problem ist das gravierendere. Wie bereits erwähnt, ist bei einer `week`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, was den Benutzer dazu bringt, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt verschiedene Möglichkeiten, wie Menschen Wochenwerte schreiben könnten, zum Beispiel:

- `Week 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, um Wochen/Jahre derzeit plattformübergreifend in Formularen zu handhaben, besteht darin, den Benutzer zu bitten, die Wochennummer und das Jahr in separaten Steuerelementen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) einzugeben oder JavaScript-Bibliotheken wie [jQuery-Datumswähler](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze UI-Elemente zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wird, und ein Set von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

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

Die Wochenwerte werden durch den folgenden JavaScript-Code dynamisch generiert.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Feature-Erkennung. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, welcher `type` tatsächlich gesetzt ist. Nicht unterstützende Browser geben `text` zurück, weil der `week`-Typ zu `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verbergen wir den nativen Picker und zeigen stattdessen die Fallback-Picker-Benutzeroberfläche ({{htmlelement("select")}}s) an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies bei der Entwicklung von Produktionsanwendungen berücksichtigen.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der eine Woche und ein Jahr repräsentiert, oder
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
