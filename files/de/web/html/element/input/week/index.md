---
title: <input type="week">
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erstellen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601 Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)) ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert von Browser zu Browser; die plattformübergreifende Unterstützung ist derzeit etwas eingeschränkt, da es nur von Chrome/Opera und Microsoft Edge unterstützt wird. In nicht unterstützten Browsern fällt das Steuerelement anmutig auf dieselbe Funktionalität wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) zurück.

![Ein Eingabefeld mit der Aufschrift 'week 01, 2017'. Der Hintergrund von 2017 hat denselben Blauton wie der Fokusrahmen. Im Eingabefeld befinden sich 3 Symbole: ein x oder Löschen, ein Spinner mit kleinen Auf- und Abwärtspfeilen und ein größerer Abwärtspfeil. Ein Kalender wird als Pop-up unter dem Eingabefeld angezeigt, der auf Januar 2017 gesetzt ist. Die erste Spalte des Kalenders zeigt die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monat ist rechts davon dargestellt. Die Zeile mit Woche 1 und den Daten 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat befinden sich Schaltflächen, um zum nächsten und vorherigen Monat zu navigieren.](week-control-chrome.png)

## Wert

Ein String, der den Wert der in das Eingabefeld eingegebenen Woche/Jahr darstellt. Das Format des für diesen Eingabetyp verwendeten Datums- und Zeitwerts wird in [Week strings](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributes einschließen, wie zum Beispiel:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Ein zu beachtender Punkt ist, dass das angezeigte Format von dem tatsächlichen `value` abweichen kann, das immer im Format `yyyy-Www` ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, können ihn Browser als `Week 01, 2017` anzeigen, aber der übermittelte Wert wird immer als `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript mit der [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabeelements abrufen und festlegen:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Neben den allgemeinen Attributen für {{HTMLElement("input")}}-Elemente bieten Wochen-Eingaben die folgenden Attribute.

### max

Das zeitlich späteste Jahr und die Wochennummer im oben im Abschnitt [Wert](#wert) besprochenen String-Format, das akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochen-String ist, hat das Element keinen maximalen Wert.

Dieser Wert muss größer als oder gleich dem vom `min`-Attribut angegebenen Jahr und Woche sein.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein für `min` angegebener Wert kein gültiger Wochen-String ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner als oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert eingehalten werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schrittablauf (falls angegeben [`min`](#min), andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, falls keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittablauf impliziert wird und jeder Wert zulässig ist (außer anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn zwei gleich nah beieinander liegende Optionen vorhanden sind.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben ist). Der Standardwert von `step` ist 1, was 1 Woche bedeutet. Der Standard-Schrittbasiswert ist -259.200.000, was dem Beginn der ersten Woche von 1970 (`"1970-W01"`) entspricht.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `"any"` für `step` bedeutet, wenn er mit `week`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen feststehen._

## Verwendung von Wochen-Eingaben

Wochen-Eingaben klingen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zur Auswahl von Wochen bieten und das an den Server gesendete Datenformat unabhängig vom Browser oder der Region des Benutzers normalisieren. Es gibt jedoch Probleme mit `<input type="week">`, da die Unterstützung durch den Browser nicht in allen Browsern gewährleistet ist.

Wir werden uns die grundlegende und komplexere Verwendung von `<input type="week">` ansehen und dann Ratschläge zur Bewältigung des Browser-Unterstützungsproblems geben (siehe [Umgang mit der Browser-Unterstützung](#umgang_mit_der_browser-unterstützung)).

### Grundlegende Verwendung von `week`

Die grundlegendste Verwendung von `<input type="week">` umfasst eine einfache Kombination aus `<input>`- und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuern der Eingabengröße

`<input type="week">` unterstützt keine Größenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des `step`-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die bei jedem Inkrement oder Dekrement übersprungen werden. Dies scheint jedoch keine Auswirkungen auf unterstützende Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung für eingegebene Werte an. Die UI-Implementierungen lassen in der Regel keine Eingaben zu, die keine gültige Woche/Jahr sind, was hilfreich ist, aber es ist immer noch möglich, den Wert mit dem leeren Feld abzugeben, und Sie möchten vielleicht den Bereich der auswählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die gültigen Wochen einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist der CSS-Code, der im obigen Beispiel verwendet wird. Hier verwenden wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

Das Ergebnis ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen und in unterstützenden Browsern auswählbar sind.

### Erforderlich machen von Wochenwerten

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe der Woche obligatorisch zu machen. Unterstützende Browser zeigen infolgedessen einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld abzugeben.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstwochen festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne einen Wert abzugeben, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Das Wochenformularsteuerfeld zeigt zwei Striche an, wo die Wochennummer stehen sollte. Eine Popup-Meldung mit gelbem Warnsymbol und 'Bitte füllen Sie dieses Feld aus' stammt von den zwei Strichen, die in blau hervorgehoben sind, dem gleichen Blau wie der Fokusrahmen des Eingabefelds.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es einer Person ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Außerdem ist es möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Problemen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß, vom falschen Typ usw. sind) übermittelt werden.

## Umgang mit der Browser-Unterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Wochen-Eingaben derzeit in der Browser-Unterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop, und ältere Versionen von IE unterstützen es ebenfalls nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt und bieten spezialisierte UI-Steuerelemente, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'set week'. Es gibt zwei Spalten: links ist 36 in der Mitte in voll sichtbarer Opazität, 35 darüber und 37 darunter sind halbtransparent. Auf der rechten Seite ist 2017 voll sichtbar. Es gibt keine anderen Optionen. Unten befinden sich drei Textlinks oder Schaltflächen: 'clear' links und 'cancel' und 'set' rechts.](week-chrome-android.png)

Nicht unterstützende Browser fallen anmutig auf eine Texteingabe zurück, aber dies führt sowohl zu Konsistenzproblemen bei der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch zu Problemen bei der Datenverarbeitung.

Das zweite Problem ist das gravierendere. Wie bereits erwähnt, wird mit einer `week`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückgreift, gibt es nichts, das den Benutzer anleitet, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Weisen, auf die Personen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, derzeit Wochen/Jahre browserübergreifend in Formularen zu behandeln, ist, den Benutzer die Wochennummer und das Jahr in separaten Steuerelementen eingeben zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel), oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zum Auswählen von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und einen Satz von zwei {{htmlelement("select")}}-Elementen zum Auswählen von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

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

Die Wochenwerte werden dynamisch durch den untenstehenden JavaScript-Code generiert.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Erkennung von Funktionen. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und prüfen dann sofort, auf welchen `type` er gesetzt ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verbergen wir den nativen Picker und zeigen stattdessen die Rückfall-Picker-UI ({{htmlelement("select")}}s) an.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie sollten dies berücksichtigen, wenn Sie Produktionsanwendungen entwickeln.

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
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
