---
title: <input type="week">
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erstellen Eingabefelder, die es einfach machen, ein Jahr plus die [ISO 8601-Wochennummer](https://de.wikipedia.org/wiki/ISO-Woche#Wochendaten) jenes Jahres einzugeben (d.h. Woche 1 bis [52 oder 53](https://de.wikipedia.org/wiki/ISO-Woche#Wochendaten)).

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerungselements variiert je nach Browser; die plattformübergreifende Unterstützung ist derzeit etwas eingeschränkt, da nur Chrome/Opera und Microsoft Edge es derzeit unterstützen. In nicht unterstützenden Browsern wird das Steuerungselement sanft degradiert, um identisch wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) zu funktionieren.

![Eine Eingabe, die 'Woche 01, 2017' liest. Der Hintergrund von 2017 hat die gleiche blaue Farbe wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder löschen, einen Spinner mit kleinen Auf- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender ist ein Popup unter der Eingabe, das auf Januar 2017 eingestellt ist. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. Auf derselben Zeile wie der Monat gibt es Schaltflächen, um nach rechts und links zu den nächsten und vorherigen Monaten zu wechseln.](week-control-chrome.png)

## Wert

Ein String, der den Wert der eingegebenen Woche/Jahr darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Wochendaten](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einfügen, zum Beispiel:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Etwas zu beachten ist, dass das angezeigte Format vom tatsächlichen `value` abweichen kann, welcher immer im Format `yyyy-Www` formatiert ist. Wenn der obige Wert an den Server gesendet wird, können Browser ihn beispielsweise als `Woche 01, 2017` anzeigen, jedoch wird der übermittelte Wert immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript abrufen und setzen, indem Sie die [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabeelements verwenden, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den bei {{HTMLElement("input")}}-Elementen üblichen Attributen bieten Wocheingaben die folgenden Attribute.

### max

Der späteste (zeitlich gesehen) Jahr- und Wochennummerwert, im oben im Abschnitt [Wert](#wert) beschriebenen String-Format, der akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen Wert überschreitet, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochendaten-String ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und Woche sein, die durch das `min`-Attribut angegeben ist.

### min

Das früheste Jahr und Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist als dieser, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben wird, der kein gültiger Wochendaten-String ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch dennoch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schritt-Basispunkt ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und ein geeigneter Standardwert, falls keiner davon bereitgestellt wird) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert wird, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Einstellungen entsprechen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen eine Präferenz für positive Zahlen besteht.

Bei `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden vorliegt). Der Standardwert von `step` ist 1, was 1 Woche angibt. Die standardmäßige Schrittbasis ist -259.200.000, was das Anfang der ersten Woche des Jahres 1970 (`"1970-W01"`) repräsentiert.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `"any"` für `step` bei der Verwendung mit `week`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Informationen bestimmt sind._

## Verwendung von Wocheingaben

Wocheingaben scheinen auf den ersten Blick praktisch zu sein, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bieten und das Datenformat normalisieren, das an den Server gesendet wird, unabhängig vom Browser oder Gebietsschema des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browserunterstützung nicht für alle Browser garantiert ist.

Wir betrachten zunächst grundlegende und komplexere Verwendungen von `<input type="week">` und geben dann Ratschläge dazu, wie man das Problem der Browserunterstützung später lösen kann (siehe [Umgang mit Browserunterstützung](#umgang_mit_browserunterstützung)).

### Grundlegende Verwendung von Woche

Die einfachste Verwendung von `<input type="week">` umfasst eine einfache Kombination aus einem `<input>` und einem {{htmlelement("label")}}-Element, wie unten zu sehen ist:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Grundlegende Verwendung von Woche', 600, 40)}}

### Steuerung der Eingabengröße

`<input type="week">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größenanforderungen zu erfüllen.

### Verwendung des step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der übersprungenen Wochen zu variieren, wann immer sie inkrementiert oder dekrementiert werden. In unterstützenden Browsern scheint es jedoch keine Auswirkungen zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen Sie im Allgemeinen nichts angeben, was keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, das Feld leer abzusenden, und Sie möchten möglicherweise den Bereich der auswählbaren Wochen einschränken.

### Festlegen maximaler und minimaler Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel setzen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017`:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Festlegen maximaler und minimaler Wochen', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier machen wir Gebrauch von den {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben der Eingabe setzen, nicht auf die Eingabe selbst, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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

### Woche-Werte erforderlich machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Woche verpflichtend zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

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

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Woche-Werte erforderlich machen', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerungselement hat zwei Striche, wo die Wochennummer sein sollte. Ein Popup mit einem gelben Warnsymbol und einem 'Bitte füllen Sie dieses Feld aus' geht von den zwei Strichen aus, die in blau hervorgehoben sind, dem gleichen Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Umgang mit Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Wocheingaben derzeit in der Browserunterstützung: Safari und Firefox unterstützen dies nicht auf dem Desktop, und alte Versionen des IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt aus und bieten spezielle UI-Steuerelemente, die es wirklich einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Beispielsweise sieht der `week`-Auswahl in Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'Woche einstellen'. Es gibt zwei Spalten: links steht 36 in der Mitte in voller Deckkraft, mit 35 darüber und 37 darunter in Halbdurchlässigkeit. Auf der rechten Seite ist 2017 vollständig undurchsichtig. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten enthalten 'Löschen' links und 'Abbrechen' und 'Setzen' rechts.](week-chrome-android.png)

Nicht unterstützende Browser wandeln sich sanft in ein Texteingabefeld zurück, aber dies erzeugt Probleme sowohl hinsichtlich der Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird unterschiedlich sein) als auch der Datenverarbeitung.

Das zweite Problem ist das ernsthaftere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer zumindest im Format `yyyy-Www` normalisiert. Wenn der Browser auf ein generisches Texteingabeelement zurückfällt, gibt es nichts, das den Benutzer dazu anleitet, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, derzeit Wochen/Jahre in Formularen plattformübergreifend zu behandeln, besteht darin, den Benutzer die Wochennummer und das Jahr in separaten Steuerelementen eingeben zu lassen ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel), oder JavaScript-Bibliotheken wie den [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zur Auswahl von Wochen: einen nativen Picker mit `<input type="week">` und ein Set von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Beispiele', 600, 140)}}

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

Die Wochenwerte werden dynamisch vom unten gezeigten JavaScript-Code erzeugt.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Funktionsprüfung. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, welcher `type` eingestellt ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verbergen wir den nativen Picker und zeigen stattdessen das alternative Picker-UI ({{htmlelement("select")}}s).

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://de.wikipedia.org/wiki/ISO-Woche#Wochendaten))! Dies müssen Sie bei der Entwicklung von Produktionsanwendungen berücksichtigen.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
