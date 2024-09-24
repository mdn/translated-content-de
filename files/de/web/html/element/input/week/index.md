---
title: <input type="week">
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`week`** erzeugen Eingabefelder, die eine einfache Eingabe einer Jahreszahl plus der [ISO 8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) in diesem Jahr ermöglichen (d. h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

Die Benutzeroberfläche der Steuerung variiert von Browser zu Browser; die plattformübergreifende Unterstützung ist derzeit etwas eingeschränkt, da nur Chrome/Opera und Microsoft Edge diese unterstützen. In nicht unterstützenden Browsern wird die Steuerung auf eine Funktionalität wie bei [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) herabgestuft.

![Ein Eingabefeld, das 'Woche 01, 2017' liest. Der Hintergrund von 2017 hat das gleiche Blau wie der Fokus-Ring. Es gibt 3 Symbole im Eingabefeld: x oder löschen, einen Spinner mit kleinen Aufwärts- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender ist ein Popup unter dem Eingabefeld, das auf Januar 2017 eingestellt ist. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der komplette Monatskalender ist rechts davon zu sehen. Die Reihe mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um rechts und links für die nächsten und vorherigen Monate zu navigieren.](week-control-chrome.png)

## Wert

Ein String, der den in das Eingabefeld eingegebenen Wert der Woche/Jahr darstellt. Das Format des Datums- und Zeitwerts, der von diesem Eingabetyp verwendet wird, wird in [Week strings](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie einen Wert im [`value`](/de/docs/Web/HTML/Element/input#value) Attribut angeben, wie folgt:

```html
<label for="week">Welche Woche möchten Sie beginnen?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Format von dem tatsächlichen `value` abweichen kann, das immer als `yyyy-Www` formatiert ist. Wenn der obige Wert z.B. an den Server gesendet wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der gesendete Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch mithilfe der {{domxref("HTMLInputElement.value", "value")}}-Eigenschaft des Eingabe-Elements in JavaScript erhalten und festlegen, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den üblichen Attributen von {{HTMLElement("input")}} Elementen bieten Wocheingaben folgende Attribute.

### max

Das späteste (zeitlich gesehen) Jahr und die Wochennummer im oben im Abschnitt [Wert](#wert) besprochenen String-Format, die akzeptiert werden. Überschreitet der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen, schlägt das Element in der [Constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Ist der Wert des `max`-Attributs kein gültiger Wochenstring, hat das Element keinen Höchstwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die im `min`-Attribut angegeben sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Ist der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner, schlägt das Element in der [Constraint validation](/de/docs/Web/HTML/Constraint_validation) fehl. Ist ein Wert für `min` angegeben, der kein gültiger Wochenstring ist, hat das Eingabefeld keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt durch Festlegung der {{domxref("HTMLInputElement")}} `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem auch angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für Schritte (falls angegeben `min`, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value), und ein entsprechender Standardwert, falls keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt angenommen wird, und jeder Wert erlaubt ist (abgesehen von anderen Beschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user agent")}} zur nächsten gültigen Zahl runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 1, was 1 Woche angibt. Die Standard-Schrittbasis ist -259.200.000, was der Anfang der ersten Woche von 1970 (`"1970-W01"`) ist.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `"any"` für `step` bei Verwendung mit `week`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Informationen feststehen._

## Verwendung von Wocheingaben

Wocheingaben erscheinen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bieten und das Datenformat, das an den Server gesendet wird, normalisieren, unabhängig vom Browser oder der Region des Benutzers. Allerdings gibt es Probleme mit `<input type="week">`, da die Browserunterstützung nicht in allen Browsern garantiert ist.

Wir werden grundlegende und komplexere Verwendungen von `<input type="week">` untersuchen und dann Ratschläge zur Bewältigung des Browserunterstützungsproblems geben (siehe [Handling browser support](#umgang_mit_browserunterstützung)).

### Grundlegende Verwendung von Woche

Die einfachste Verwendung von `<input type="week">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="week">Welche Woche möchten Sie beginnen?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="week">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Ihre Größenanforderungen zurückgreifen.

### Verwendung des step-Attributs

Sie sollten das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um die Anzahl der Wochen zu variieren, die immer dann übersprungen werden, wenn sie inkrementiert oder dekrementiert werden, aber es scheint keine Auswirkungen auf unterstützte Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung der eingegebenen Werte an. Die UI-Implementierungen lassen Sie im Allgemeinen nichts angeben, das keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, mit dem leeren Feld zu senden, und Sie könnten den Bereich einschränken wollen, in dem Wochen auswählbar sind.

### Festlegung der maximalen und minimalen Wochen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die gültigen Wochen zu beschränken, die vom Nutzer ausgewählt werden können. Im folgenden Beispiel setzen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017`:

```html
<form>
  <label for="week">Welche Woche möchten Sie beginnen?</label>
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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 in unterstützten Browsern als gültig angesehen und auswählbar sein werden.

### Woche-Werte als erforderlich markieren

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. In der Folge zeigt ein unterstützender Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld zu senden.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Wochen festgelegt und auch das Feld erforderlich gemacht:

```html
<form>
  <div>
    <label for="week">Welche Woche möchten Sie beginnen?</label>
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
    <input type="submit" value="Formular absenden" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie, jetzt mit dem Beispiel zu spielen:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen, die keinen unterstützenden Browser verwenden:

![Das Wochen-Formularsteuerungselement zeigt zwei Striche, wo die Wochennummer stehen sollte. Ein Popup mit einem gelben Warnsymbol und der Nachricht 'Bitte füllen Sie dieses Feld aus' emanieren von den zwei Strichen, die in Blau hervorgehoben sind, das gleiche Blau wie der Eingabefokus-Ring.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Falls Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte bei der Übermittlung falsch formatierter Daten (oder von zu großen Daten, falschen Typs usw.) eine Katastrophe eintreten.

## Umgang mit Browserunterstützung

Wie oben erwähnt, ist das größte Problem bei der Verwendung von Wocheingaben derzeit die Browserunterstützung: Safari und Firefox unterstützen es nicht auf Desktop und ältere Versionen von IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS machen perfekten Gebrauch von solchen Eingabetypen und bieten spezielle UI-Steuerelemente, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker in Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'Woche festlegen'. Es gibt zwei Spalten: Die linke hat 36 in der Mitte in voller Deckkraft, mit 35 darüber und 37 darunter halb undurchsichtig. Auf der rechten Seite ist 2017 voll undurchsichtig. Es gibt keine anderen Optionen. Drei Textlinks oder -schaltflächen am unteren Rand umfassen 'löschen' auf der 'linken' Seite und 'abbrechen' und 'festlegen' auf der rechten.](week-chrome-android.png)

Nicht unterstützende Browser degradieren zu einem Texteingabefeld, aber dies schafft Probleme sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch bei der Datenverarbeitung.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird bei einer `week` Eingabe der tatsächliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf ein generisches Texteingabefeld zurückgreift, gibt es nichts, das den Benutzer dazu veranlasst, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt verschiedene Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, mit Wochen/Jahren in Formularen auf plattformübergreifende Weise umzugehen, besteht derzeit darin, den Benutzer dazu zu bringen, die Wochennummer und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wird, und einen Satz von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week` Eingabetyp nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

Das HTML sieht folgendermaßen aus:

```html
<form>
  <div class="nativeWeekPicker">
    <label for="week">Welche Woche möchten Sie beginnen?</label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2018-W52"
      required />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Welche Woche möchten Sie beginnen?</p>
  <div class="fallbackWeekPicker">
    <div>
      <span>
        <label for="week">Woche:</label>
        <select id="fallbackWeek" name="week"></select>
      </span>
      <span>
        <label for="year">Jahr:</label>
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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Feature-Detection-Code. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen sein `type` auf `week` zu setzen und überprüfen dann sofort, was sein `type` gesetzt ist. Nicht unterstützende Browser geben `text` zurück, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-UI ({{htmlelement("select")}}s) an.

```js
// UI-Elemente abrufen
const nativePicker = document.querySelector(".nativeWeekPicker");
const fallbackPicker = document.querySelector(".fallbackWeekPicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const weekSelect = document.querySelector("#fallbackWeek");

// Fallback initial ausblenden
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Testen, ob eine neue Datumseingabe auf eine Texteingabe zurückfällt oder nicht
const test = document.createElement("input");

try {
  test.type = "week";
} catch (e) {
  console.log(e.description);
}

// Wenn ja, führen Sie den Code innerhalb des if () {} Blocks aus
if (test.type === "text") {
  // Blendet den nativen Picker aus und zeigt den Fallback an
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // Wochen dynamisch ausfüllen
  populateWeeks();
}

function populateWeeks() {
  // Füllen Sie die Wochenauswahl mit 52 Wochen
  for (let i = 1; i <= 52; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    weekSelect.appendChild(option);
  }
}
```

> [!NOTE]
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Sie müssen dies berücksichtigen, wenn Sie Produktanwendungen entwickeln.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die eine Woche und ein Jahr darstellt, oder
        leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        und {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, {{domxref("HTMLInputElement")}}
- [Datum- und Zeitformate in HTML verwendet](/de/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
