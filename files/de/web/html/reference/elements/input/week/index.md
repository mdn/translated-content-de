---
title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`week`** erstellen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601 Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

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

Die Benutzeroberfläche des Steuerelements variiert von Browser zu Browser; die Unterstützung über verschiedene Browser hinweg ist derzeit etwas eingeschränkt, da nur Chrome/Opera und Microsoft Edge es derzeit unterstützen. In nicht unterstützenden Browsern wird das Steuerelement so heruntergestuft, dass es identisch mit [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) funktioniert.

![Eine Eingabe mit der Anzeige 'Woche 01, 2017'. Der Hintergrund von 2017 ist derselbe Blauton wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder löschen, einen Spinner mit kleinen Pfeilen nach oben und unten und einen größeren Pfeil nach unten. Ein Kalender wird als Pop-up unter der Eingabe mit dem Datum Januar 2017 angezeigt. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um rechts und links für die nächsten und vorherigen Monate zu navigieren.](week-control-chrome.png)

## Wert

Ein String, der den in die Eingabe eingegebenen Wert der Woche/Jahr darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Wochen-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe setzen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs einschließen, zum Beispiel:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Eine wichtige Anmerkung ist, dass das angezeigte Format vom tatsächlichen `value` abweichen kann, das immer im Format `yyyy-Www` ist. Wenn der obige Wert zum Beispiel an den Server übermittelt wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer als `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript abrufen und setzen, indem Sie die [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabe-Elements verwenden, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für {{HTMLElement("input")}}-Elemente üblich sind, bieten Wocheingaben die folgenden Attribute:

### max

Das späteste (zeitlich gesehen) Jahr und die Wochennummer, im oben im [Wert](#wert)-Abschnitt beschriebenen String-Format, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochen-String ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die vom `min`-Attribut angegeben werden.

### min

Das früheste Jahr und die früheste Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements geringer ist als dieser, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein für `min` festgelegter Wert kein gültiger Wochen-String ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen auch das Attribut `readonly` angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schritt-Basis ([`min`](#min) falls definiert, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls und einem entsprechenden Standardwert, falls keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt angenommen wird und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden, wobei Vorzugszahlen in positiver Richtung angewendet werden, wenn zwei gleichermaßen nahe Optionen vorhanden sind.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 1, was 1 Woche anzeigt. Die Standard-Schritt-Basis ist -259.200.000, was der Beginn der ersten Woche von 1970 (`"1970-W01"`) ist.

_Obwohl es derzeit unklar ist, was ein Wert von `"any"` für `step` bei der Verwendung mit `week`-Eingaben bedeutet, wird diese Information aktualisiert, sobald sie festgestellt wird._

## Verwendung von Wocheingaben

Wocheingaben klingen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche für die Auswahl von Wochen bieten und das Datenformat normalisieren, das an den Server gesendet wird, unabhängig von Browser oder Gebietsschema des Benutzers. Allerdings gibt es Probleme mit `<input type="week">`, da die Unterstützung in allen Browsern nicht garantiert ist.

Wir betrachten einfache und komplexere Anwendungen von `<input type="week">` und geben anschließend Ratschläge zur Abmilderung des Problems der Browser-Unterstützung (siehe [Umgang mit Browser-Unterstützung](#umgang_mit_browser-unterstützung)).

### Grundlegende Verwendungen von Woche

Die grundlegendste Verwendung von `<input type="week">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Elementen, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Input-Größe

`<input type="week">` unterstützt keine Formulargröße-Attribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der übersprungenen Wochen zu variieren, wann immer diese erhöht oder verringert werden, allerdings scheint es in unterstützenden Browsern keine Wirkung zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen einen zwar in der Regel nichts angeben, was keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, mit einem leeren Feld zu übermitteln und Sie möchten möglicherweise den Bereich der auswählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Wochen zu beschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel setzen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017`:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier machen wir Gebrauch von den {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole in einem {{htmlelement("span")}} neben der Eingabe und nicht in der Eingabe selbst platzieren, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

Das Ergebnis ist hier, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen und in unterstützenden Browsern ausgewählt werden.

### Woche-Werte erforderlich machen

Darüber hinaus können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen der Woche zwingend zu machen. Dadurch zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Woche-Feld zu übermitteln.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Wochen festgelegt und auch das Feld als erforderlich gemacht:

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

Wenn Sie versuchen, das Formular ohne Wert zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie jetzt mit dem Beispiel herum:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformularelement hat zwei Striche, wo die Wochennummer sein sollte. Ein Pop-up mit einem gelben Warnsymbol und der Aufschrift 'Bitte füllen Sie dieses Feld aus' geht von den zwei Strichen aus, die in Blau hervorgehoben sind, dem gleichen Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist außerdem möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnten schwerwiegende Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ und so weiter).

## Umgang mit Browser-Unterstützung

Wie oben erwähnt, ist das größte Problem bei der Verwendung von Wocheingaben derzeit die Unterstützung von Browsern: Safari und Firefox unterstützen es nicht auf dem Desktop, und alte Versionen des IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS machen perfekten Gebrauch von solchen Eingabetypen, indem sie spezialisierte UI-Steuerelemente bereitstellen, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker auf Chrome für Android so aus:

![Ein modales Pop-up. Die Kopfzeile lautet 'Woche setzen'. Es gibt zwei Spalten: Die linke hat die 36 in der Mitte mit voller Deckkraft, mit 35 darüber und 37 darunter, die halbtransparent sind. Auf der rechten Seite ist 2017 voll deckend. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten enthalten 'löschen' auf der 'linken' und 'abbrechen' und 'setzen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser fallen sanft in eine Texteingabe zurück, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch auf die Datenverarbeitung.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer im Format `yyyy-Www` normalisiert. Wenn der Browser in eine generische Texteingabe zurückfällt, gibt es nichts, was den Benutzer zu einem korrekt formatierten Eingang führt (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `2.-8. Jan 2017`
- `2017-W01`
- usw.

Der beste Weg, um mit Woche/Jahr in Formularen derzeit auf browserübergreifende Weise umzugehen, besteht darin, den Benutzer zu bitten, die Wochennummer und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und einen Satz von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

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

Die Wochenwerte werden dynamisch durch den unten stehenden JavaScript-Code erzeugt.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen sofort, was sein `type` ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verstecken wir den nativen Picker und zeigen die fallback Picker UI ({{htmlelement("select")}}s) stattdessen.

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
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
