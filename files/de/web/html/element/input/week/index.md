---
title: '`<input type="week">`'
slug: Web/HTML/Element/input/week
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`week`** erstellen Eingabefelder, die die einfache Eingabe eines Jahres zusammen mit der [ISO 8601-Wochennummer](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) (d. h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)) ermöglichen.

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert je nach Browser; die Unterstützung durch verschiedene Browser ist derzeit etwas begrenzt, wobei es nur von Chrome/Opera und Microsoft Edge unterstützt wird. In nicht unterstützenden Browsern wird das Steuerelement in einer Weise reduziert, die identisch zu [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) funktioniert.

![Eine Eingabe liest 'Woche 01, 2017'. Der Hintergrund der Zahl 2017 hat die gleiche blaue Farbe wie der Fokusrahmen. Es gibt drei Symbole in der Eingabe: x oder löschen, ein Spinner mit kleinen Auf- und Abwärtspfeilen und ein größerer Abwärtspfeil. Ein Kalender ist ein Popup unter der Eingabe, das auf Januar 2017 eingestellt ist. Die erste Spalte des Kalenders ist die Woche: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts daneben. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. In derselben Zeile wie der Monat gibt es Schaltflächen, um zum nächsten und vorherigen Monat zu wechseln.](week-control-chrome.png)

## Wert

Ein String, der den in die Eingabe eingegebenen Wert der Woche des Jahres repräsentiert. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Wocheneinträgen](/de/docs/Web/HTML/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einfügen, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Eine Sache, die beachtet werden muss, ist, dass das angezeigte Format von dem tatsächlichen `value` abweichen kann, welches immer im Format `yyyy-Www` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie `week=2017-W01` aussehen.

Sie können den Wert auch in JavaScript über die [`value`](/de/docs/Web/API/HTMLInputElement/value)-Eigenschaft des Eingabeelements abrufen und festlegen, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen von {{HTMLElement("input")}}-Elementen bieten Wochen-Eingaben die folgenden Attribute.

### max

Das späteste (zeitlich gesehen) Jahr und die Wochennummer im oben im Abschnitt [Wert](#wert) beschriebenen String-Format, das akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) diesen überschreitet, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger Wocheneintrag ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die durch das `min`-Attribut festgelegt werden.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements kleiner als dieser ist, schlägt das Element in der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn für `min` ein Wert angegeben wird, der kein gültiger Wocheneintrag ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Grundlage für das Springen sind ([`min`](#min), wenn angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein entsprechender Standardwert, wenn keiner dieser Angaben gemacht ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Springen impliziert ist und jeder Wert (außer andere Einschränkungen wie [`min`](#min) und [`max`](#max)) erlaubt ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Konfiguration des Schritts entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei er Zahlen in positiver Richtung bevorzugt, wenn es zwei gleich nah liegende Optionen gibt.

Für `week`-Eingaben wird der wert des `step` in Wochen angegeben, mit einem Skalierungsfaktor von 604.800.000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 1, was 1 Woche angibt. Die standardmäßige Schrittgrundlage ist -259.200.000, was der Anfang der ersten Woche von 1970 (`"1970-W01"`) ist.

_Verständlicherweise ist derzeit unklar, was ein Wert von `"any"` für `step` bedeutet, wenn er mit `week`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen bestimmt sind._

## Verwendung von Woche-Eingaben

Woche-Eingaben scheinen auf den ersten Blick bequem zu sein, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bereitstellen und das Datenformat normalisieren, das an den Server gesendet wird, unabhängig vom Browser oder der Lokalisierung des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Unterstützung durch Browser nicht für alle Browser gewährleistet ist.

Wir werden uns einfache und komplexere Anwendungen von `<input type="week">` ansehen und dann Ratschläge geben, wie das Problem der Browserunterstützung später angegangen werden kann (siehe [Umgang mit der Browserunterstützung](#umgang_mit_der_browserunterstützung)).

### Grundlegende Verwendung von Woche

Die grundlegendste Verwendung von `<input type="week">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}, wie unten zu sehen:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="week">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um Größenanforderungen zu erfüllen.

### Verwendung des Step-Attributs

Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Wochen zu variieren, die jedes Mal gesprungen werden, wenn sie erhöht oder reduziert werden, es scheint jedoch keinen Einfluss auf unterstützende Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen in der Regel nicht zu, dass Sie etwas eingeben, das keine gültige Woche/Jahr ist, was hilfreich ist, aber es ist trotzdem möglich, mit dem Feld leer zu übermitteln, und Sie könnten den Bereich der auswählbaren Wochen einschränken wollen.

### Festlegung maximaler und minimaler Wochen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die gültigen Wochen, die vom Benutzer gewählt werden können, einzuschränken. Im folgenden Beispiel setzen wir einen minimalen Wert von `Woche 01, 2017` und einen maximalen Wert von `Woche 52, 2017`:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier machen wir Gebrauch von den {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, weil in Chrome der generierte Inhalt in das Formularsteuerelement eingefügt wird und nicht effektiv gestaltet oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 in unterstützenden Browsern als gültig angesehen werden und ausgewählt werden können.

### Erforderlich machen von Wochenwerten

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um das Ausfüllen der Woche obligatorisch zu machen. Infolgedessen werden unterstützende Browser einen Fehler anzeigen, wenn Sie versuchen, ein leeres Wochenfeld abzusenden.

Lassen Sie uns ein Beispiel ansehen; hier haben wir minimale und maximale Wochen festgelegt und auch das Feld als erforderlich definiert:

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

Wenn Sie versuchen, das Formular ohne Wert abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie nun, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen unter Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerelement hat zwei Striche, wo die Wochennummer sein sollte. Ein Popup mit einem gelben Warnsymbol und 'Please fill out this field' kommt von den zwei Strichen, die in Blau hervorgehoben sind, die gleiche blau wie der Fokusrahmen der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einer Katastrophe kommen, wenn falsch formatierte Daten gesendet werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Umgang mit der Browserunterstützung

Wie oben erwähnt, besteht das Hauptproblem bei der Verwendung von Woche-Eingaben derzeit in der Browserunterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop, und alte Versionen des IE unterstützen es ebenfalls nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt aus und bieten spezialisierte UI-Steuerelemente, die es sehr einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker auf Chrome für Android so aus:

![Ein modales Popup. Der Header liest 'Set Week'. Es gibt zwei Spalten: die linke zeigt 36 in der Mitte in voller Opazität, mit 35 darüber und 37 darunter in halbtransparenter Opazität. Auf der rechten Seite ist 2017 vollständig opak. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen am unteren Rand umfassen 'Clear' auf der linken Seite und 'Cancel' und 'Set' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser werden in eine Texteingabe herabgestuft, was jedoch sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerungselement wird unterschiedlich sein) als auch auf die Datenverarbeitung Probleme verursacht.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird bei einer `week`-Eingabe der eigentliche Wert immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückgreift, gibt es nichts, das den Benutzer dazu bringt, die Eingabe richtig zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, in denen Personen Wochenwerte schreiben könnten, zum Beispiel:

- `Woche 1 2017`
- `2-8. Januar 2017`
- `2017-W01`
- usw.

Die beste Möglichkeit, derzeit mit Wochen/Jahren in Formularen browserübergreifend umzugehen, besteht darin, den Benutzer dazu zu bringen, die Wochennummer und das Jahr in separaten Steuerelementen ({{htmlelement("select")}}-Elementen sind beliebt; siehe unten für ein Beispiel) einzugeben oder JavaScript-Bibliotheken wie [jQuery date picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zur Auswahl von Wochen: einen nativen Picker, der mit `<input type="week">` erstellt wurde, und eine Reihe von zwei {{htmlelement("select")}}-Elementen zur Auswahl von Wochen/Jahren in älteren Browsern, die den `week` Eingabetyp nicht unterstützen.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Funktionsdetektion. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, was sein `type` ist. Nicht unterstützende Browser geben `text` zurück, da der `week` Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, blenden wir den nativen Picker aus und zeigen stattdessen die Fallback-Picker-UI ({{htmlelement("select")}}s) an.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time) und [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
