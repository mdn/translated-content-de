---
title: '`<input type="week">` HTML-Attributwert'
short-title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{HTMLElement("input")}}-Elemente des Typs **`week`** erstellen Eingabefelder, die die einfache Eingabe eines Jahres plus der [ISO-8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)) ermöglichen.

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

Die Benutzeroberfläche der Steuerung variiert von Browser zu Browser; die plattformübergreifende Unterstützung ist derzeit etwas eingeschränkt, wobei nur Chrome/Opera und Microsoft Edge sie derzeit unterstützen. In nicht unterstützten Browsern reduziert sich die Steuerung auf das gleiche Verhalten wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text).

![Eine Eingabe, die 'Woche 01, 2017' liest. Der Hintergrund von 2017 hat das gleiche Blau wie der Fokusrahmen. Es gibt 3 Symbole in der Eingabe: ein x oder Löschen, einen Spinner mit kleinen Auf- und Abwärtspfeilen und einen größeren Abwärtspfeil. Unten der Eingabe ist ein Kalender als Popup mit dem Datum Januar 2017 eingestellt. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen zum Bewegen nach rechts und links für die nächsten und vorherigen Monate.](week-control-chrome.png)

## Wert

Ein String, der den Wert der in die Eingabe eingegebenen Woche/Jahr darstellt. Das Format des Datums- und Zeitwerts, das von diesem Eingabetyp verwendet wird, wird in [Wochendateien](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Eines ist zu beachten: Das angezeigte Format kann sich vom tatsächlichen `value` unterscheiden, welches immer im Format `yyyy-Www` ist. Wenn der obige Wert beispielsweise an den Server gesendet wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der gesendete Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch mit JavaScript abrufen und festlegen, indem Sie die `value`-Eigenschaft des Eingabeelements verwenden, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die gemeinsam für {{HTMLElement("input")}}-Elemente sind, bieten Wochen-Eingaben die folgenden Attribute.

### max

Das späteste Jahr und die Wochennummer, die in dem im Abschnitt [Wert](#wert) beschriebenen String-Format akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen Wert überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine gültige Wochenzeichenfolge ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die im `min`-Attribut angegeben sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements diesen Wert unterschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben wird, der keine gültige Wochenzeichenfolge ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft von JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit auch angegebenem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Stützpunkt des Schritts entfernt sind, sind gültig. Der Stützpunkt des Schritts ist [`min`](#min) falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder −259.200.000 (der Beginn der Woche `1970-W01`), wenn keiner angegeben ist.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben und als eine Anzahl von Millisekunden behandelt, die 604.800.000 mal den `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 1, was 1 Woche bedeutet.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)). In der Realität hat es denselben Effekt wie `1` für `week`-Eingaben, da die Auswahlbenutzeroberfläche nur ganze Wochen auswählen lässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittgröße entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} möglicherweise auf den nächstgelegenen gültigen Wert runden, wobei bei gleichwertig nahen Optionen Zahlen in positiver Richtung bevorzugt werden.

## Verwendung von Woche-Eingaben

Woche-Eingaben erscheinen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bereitstellen und das Datenformat, das an den Server gesendet wird, normalisieren, unabhängig vom Browser oder der Region des Nutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browserunterstützung nicht in allen Browsern gewährleistet ist.

Wir werden uns die grundlegenden und komplexeren Verwendungen von `<input type="week">` ansehen und dann Ratschläge zur Minderung des Problems mit der Browserunterstützung geben (siehe [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung)).

### Grundlegende Verwendungen von Woche

Der grundlegendste Gebrauch von `<input type="week">` beinhaltet eine einfache Kombination aus einem `<input>`- und einem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Eingabengröße steuern

`<input type="week">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des Schritt-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die bei Inkrementierungen oder Dekrementierungen gesprungen werden. Jedoch scheint es keinen Effekt auf unterstützte Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen erlauben generell nicht, dass Sie etwas angeben, das keine gültige Woche/Jahr ist, was hilfreich ist. Es ist jedoch immer noch möglich, das Feld leer abzusenden, und Sie könnten den Bereich der wählbaren Wochen einschränken möchten.

### Einstellung von maximalen und minimalen Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel legen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

Das Ergebnis ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen und in unterstützten Browsern ausgewählt werden können.

### Erforderlich machen von Wochenwerten

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe der Woche obligatorisch zu machen. Infolgedessen wird ein Fehler angezeigt, wenn Sie versuchen, ein leeres Woche-Feld in unterstützten Browsern abzusenden.

Sehen wir uns ein Beispiel an; hier haben wir die Mindest- und Höchstwochen festgelegt und das Feld obligatorisch gemacht:

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

Wenn Sie versuchen, das Formular ohne Wert abzuschicken, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformularsteuerung hat zwei Striche, wo die Wochennummer stehen sollte. Ein Popup mit einem gelben Warnsymbol und einem 'Bitte füllen Sie dieses Feld aus' geht von den zwei Strichen aus, die in Blau hervorgehoben sind, dem gleichen Blau wie der Fokusrahmen der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn nicht richtig formatierte Daten gesendet werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, ist das größte Problem bei der Verwendung von Woche-Eingaben derzeit die Browserunterstützung: Safari und Firefox unterstützen es nicht auf Desktop-Geräten, und alte Versionen des IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt und bieten spezialisierte UI-Steuerungen, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Der Header liest 'Woche einstellen'. Es gibt zwei Spalten: die linke hat 36 in der Mitte in voller Deckkraft dargestellt, mit 35 darüber und 37 darunter halbdurchsichtig. Auf der rechten Seite ist 2017 in voller Deckkraft. Es gibt keine anderen Optionen. Drei Textlinks oder Tasten am unteren Rand umfassen 'löschen' links und 'abbrechen' sowie 'setzen' rechts.](week-chrome-android.png)

Nicht unterstützte Browser fallen zurück auf eine Texteingabe, was jedoch sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (die präsentierte Steuerung wird unterschiedlich sein) als auch auf die Datenverarbeitung Probleme schafft.

Das zweite Problem ist das schwerwiegendere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser bei einer allgemeinen Texteingabe nicht mehr reagiert, gibt es nichts, was den Benutzer dazu führt, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt verschiedene Möglichkeiten, wie Menschen die Wochenwerte schreiben könnten, zum Beispiel:

- `Woche 1 2017`
- `2.-8. Jan 2017`
- `2017-W01`
- etc.

Der beste Weg, um Woche/Jahre in Formularen auf plattformübergreifende Weise derzeit zu behandeln, ist, den Benutzer die Wochennummer und das Jahr in separaten Steuerungen eingeben zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel), oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sets von UI-Elementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und ein Set von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Das HTML sieht so aus:

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

Die Wochenwerte werden vom untenstehenden JavaScript-Code dynamisch generiert.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Funktionsprüfung. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, dessen `type` auf `week` zu setzen, und überprüfen dann sofort, was sein `type` ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verbergen wir den nativen Picker und zeigen stattdessen die alternative Picker-UI ({{htmlelement("select")}}s) an.

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
        Ein String, der Woche und Jahr darstellt, oder
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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
