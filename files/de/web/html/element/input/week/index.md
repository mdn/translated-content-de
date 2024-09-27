---
title: <input type="week">
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erstellen Eingabefelder, die eine einfache Eingabe eines Jahres plus der [ISO 8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) während dieses Jahres ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

Die Benutzeroberfläche der Steuerung variiert von Browser zu Browser; die plattformübergreifende Unterstützung ist derzeit noch etwas eingeschränkt, da nur Chrome/Opera und Microsoft Edge sie derzeit unterstützen. In nicht unterstützten Browsern wird das Steuerfeld elegant heruntergestuft, um identisch zu funktionieren wie [`<input type="text">`](/de/docs/Web/HTML/Element/input/text).

![Eine Eingabe, die 'Woche 01, 2017' anzeigt. Der Hintergrund von 2017 hat das gleiche Blau wie der Fokusring. Es gibt 3 Symbole in der Eingabe: x oder Löschen, einen Spinnknopf mit kleinen Aufwärts- und Abwärtspfeilen und einen größeren Abwärtspfeil. Ein Kalender ist ein Popup unterhalb der Eingabe für Januar 2017. Die erste Spalte des Kalenders zeigt die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und Januar 2 bis 8 ist hervorgehoben. Auf derselben Linie wie der Monat gibt es Schaltflächen, um den nächsten und vorherigen Monat zu erreichen.](week-control-chrome.png)

## Wert

Ein String, der den Wert der eingegebenen Woche/des Jahres im Eingabefeld darstellt. Das Format des Datums- und Zeitwertes, der von diesem Eingabetyp verwendet wird, wird in [Wochen-Strings](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Format möglicherweise vom tatsächlichen `value` abweicht, das immer im Format `yyyy-Www` formatiert ist. Wenn beispielsweise der obige Wert an den Server übermittelt wird, können die Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript über die [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabeelements abrufen und festlegen, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den für {{HTMLElement("input")}}-Elemente üblichen Attributen bieten Wocheneingaben die folgenden Attribute.

### max

Das neueste (zeitlich gesehen) Jahr und die Wochennummer, im im Abschnitt [Wert](#wert) beschriebenen String-Format, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochenstring ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die durch das `min`-Attribut angegeben sind.

### min

Das früheste akzeptierte Jahr und die Woche. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn ein Wert für `min` angegeben ist, der kein gültiger Wochenstring ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein Boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der `value`-Eigenschaft von JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schrittmaßstab entsprechen ([`min`](#min) falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und einen geeigneten Standardwert, falls keine dieser Optionen bereitgestellt wird), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittmaßstab impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittmaßstab-Konfiguration entsprechen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) möglicherweise auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleichnahe Optionen gibt.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben ist). Der Standardwert von `step` ist 1, was 1 Woche bedeutet. Die Standardbasis für Schritte ist -259.200.000, was der Anfang der ersten Woche von 1970 (`"1970-W01"`) ist.

_Derzeit ist unklar, was ein Wert von `"any"` für `step` bedeutet, wenn er mit `week`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen bestimmt sind._

## Verwendung von Wocheneingaben

Wocheneingaben klingen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche für die Auswahl von Wochen bieten und das Datenformat normalisieren, das an den Server gesendet wird, unabhängig vom Browser oder der Region des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browser-Unterstützung nicht in allen Browsern garantiert ist.

Wir werden uns grundlegende und komplexere Verwendungen von `<input type="week">` ansehen und dann Ratschläge geben, wie man das Browser-Unterstützungsproblem später lösen kann (siehe [Umgang mit Browser-Unterstützung](#umgang_mit_der_browser-unterstützung)).

### Grundlegende Verwendung von Woche

Die einfachste Verwendung von `<input type="week">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuern der Eingabegröße

`<input type="week">` unterstützt keine Formgrößeneigenschaften wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen dazu [CSS](/de/docs/Web/CSS) verwenden.

### Verwendung des step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die jeweils hochgezählt oder heruntergezählt werden, allerdings scheint es in unterstützenden Browsern keine Auswirkungen zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen im Allgemeinen nicht zu, dass Sie etwas angeben, das keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, mit leerem Feld abzusenden, und Sie möchten möglicherweise den Bereich der wählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir einen Mindestwert von `Woche 01, 2017` und einen Höchstwert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben dem Eingabefeld setzen, nicht auf dem Eingabefeld selbst, da in Chrome der generierte Inhalt innerhalb der Formsteuerung platziert ist und nicht effektiv gestylt oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 als gültig angesehen werden und in unterstützenden Browsern ausgewählt werden können.

### Pflichtangabe von Wochenwerten

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. Unterstützende Browser zeigen dann einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

Lassen Sie uns ein Beispiel betrachten; hier haben wir Mindest- und Höchstwochen festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie nun, das Beispiel auszuprobieren:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerelement hat zwei Striche dort, wo die Wochennummer sein sollte. Ein Popup mit einem gelben Warnsymbol und der Aufforderung 'Bitte füllen Sie dieses Feld aus' geht von den beiden Strichen aus, die blau hervorgehoben sind, das gleiche Blau wie der Fokusring der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

## Umgang mit der Browser-Unterstützung

Wie bereits erwähnt, ist das größte Problem bei der Verwendung von Wocheneingaben derzeit die Browser-Unterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop, und alte Versionen von IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt aus und bieten spezialisierte Benutzeroberflächensteuerungen, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker auf Chrome für Android so aus:

![Ein modales Popup. Die Überschrift lautet 'Woche festlegen'. Es gibt zwei Spalten: Links befindet sich 36 in der Mitte bei voller Opazität, mit 35 darüber und 37 darunter, die halbtransparent sind. Auf der rechten Seite ist 2017 vollständig undurchsichtig. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten umfassen 'löschen' auf der 'linken' und 'abbrechen' und 'festlegen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützte Browser degradieren elegant zu einer Texteingabe, aber das führt zu Problemen sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das angezeigte Steuerfeld wird anders sein) als auch das Datenhandling.

Das zweite Problem ist das schwerwiegendere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der tatsächliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, das den Benutzer dazu anleitet, die Eingabe richtig zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, um mit Wochen/Jahren in Formularen in plattformübergreifender Weise umzugehen, besteht derzeit darin, den Benutzer die Wochennummer und das Jahr in separaten Feldern ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) eingeben zu lassen oder JavaScript-Bibliotheken wie den [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von Benutzeroberflächenelementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und ein Set von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

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

Die Wochenwerte werden vom folgenden JavaScript-Code dynamisch generiert.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Feature-Erkennungscode. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und prüfen dann sofort, was sein `type` ist. Nicht unterstützende Browser geben `text` zurück, weil der `week`-Typ auf `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die alternative Picker-Benutzeroberfläche ({{htmlelement("select")}}s) an.

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
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
