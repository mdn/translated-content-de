---
title: '<input type="week">'
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{HTMLElement("input")}}-Elemente vom Typ **`week`** erstellen Eingabefelder, die die einfache Eingabe einer Jahreszahl plus der [ISO 8601 Wochenzahl](https://en.wikipedia.org/wiki/ISO_8601#Week_dates) innerhalb dieses Jahres ermöglichen (d.h. Woche 1 bis [52 oder 53](https://en.wikipedia.org/wiki/ISO_8601#Week_dates)).

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

Die Benutzeroberfläche des Steuerelements variiert von Browser zu Browser; die Unterstützung über verschiedene Browser hinweg ist derzeit etwas eingeschränkt, wobei es derzeit nur von Chrome/Opera und Microsoft Edge unterstützt wird. In nicht unterstützten Browsern verschlechtert sich das Steuerelement elegant und funktioniert identisch wie [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text).

![Ein Eingabefeld mit der Aufschrift 'Woche 01, 2017'. Der Hintergrund der 2017 ist gleich dem blauen Fokusrahmen. Es gibt 3 Symbole im Eingabefeld: x bzw. löschen, einen Spinner mit kleinen Pfeilen nach oben und unten und einen größeren Pfeil nach unten. Ein Kalender ist ein Pop-up unterhalb der Eingabe, eingestellt auf Januar 2017. Die erste Spalte des Kalenders zeigt die Wochen: 52, 1, 2, 3, 4, 5. Der vollständige Monatskalender befindet sich rechts davon. Die Zeile mit Woche 1 und 2. bis 8. Januar ist hervorgehoben. In der gleichen Zeile wie der Monat befinden sich Schaltflächen, um für die nächsten und vorherigen Monate nach rechts und links zu navigieren.](week-control-chrome.png)

## Wert

Ein String, der den Wert der in die Eingabe eingegebenen Woche/Jahr darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Week strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#week_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen Wert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut angeben, wie folgt:

```html
<label for="week">What week would you like to start?</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample('Value', 600, 60)}}

Es ist zu beachten, dass das angezeigte Format sich vom eigentlichen `value` unterscheiden kann, welches immer im Format `yyyy-Www` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, können Browser ihn als `Woche 01, 2017` anzeigen, aber der übermittelte Wert wird immer wie folgt aussehen: `week=2017-W01`.

Sie können den Wert auch in JavaScript erhalten und einstellen, indem Sie die [`value`](/de/docs/Web/API/HTMLInputElement/value) Eigenschaft des Input-Elements verwenden, zum Beispiel:

```js
const weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen für {{HTMLElement("input")}}-Elemente bieten Week-Inputs folgende Attribute.

### max

Die späteste (zeitlich gesehen) Jahr- und Wochenzahl, im im [Wert](#wert) Abschnitt oben diskutierten String-Format, die akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) diesen überschreitet, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger Wochenstring ist, hat das Element keinen Maximalwert.

Dieser Wert muss größer oder gleich dem Jahr und der Woche sein, die durch das `min`-Attribut angegeben sind.

### min

Das früheste Jahr und die Woche, die akzeptiert werden. Wenn der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Elements kleiner ist als dieser, schlägt die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn ein Wert für `min` angegeben ist, der kein gültiger Wochenstring ist, hat die Eingabe keinen Minimalwert.

Dieser Wert muss kleiner oder gleich dem Wert des `max`-Attributs sein.

### readonly

Ein boolesches Attribut, das bei Vorhandensein bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch geändert werden, indem JavaScript-Code direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der im Folgenden beschrieben wird. Nur Werte, die eine ganze Zahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder −259.200.000 (der Beginn der Woche `1970-W01`), wenn keiner angegeben ist.

Für `week`-Eingaben wird der Wert von `step` in Wochen angegeben und als Anzahl von Millisekunden behandelt, die dem `step`-Wert mal 604.800.000 entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 1, was 1 Woche bedeutet.

Ein String-Wert von `any` bedeutet, dass keine Schrittweite impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)). In Wirklichkeit hat es bei `week`-Eingaben die gleiche Wirkung wie `1`, weil die Auswahl-UI nur das Auswählen ganzer Wochen erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der [User-Agent](/de/docs/Glossary/User_agent) auf den nächstgelegenen gültigen Wert runden und bevorzugt dabei Zahlen in positiver Richtung, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Week-Inputs

Week-Inputs erscheinen auf den ersten Blick praktisch, da sie eine einfache Benutzeroberfläche zum Auswählen von Wochen bieten und das Datenformat, das an den Server gesendet wird, normalisieren, unabhängig vom Browser oder der Region des Benutzers. Es gibt jedoch Probleme mit `<input type="week">`, da die Browser-Kompatibilität nicht in allen Browsern garantiert ist.

Wir werden uns die grundlegende und komplexere Verwendung von `<input type="week">` ansehen und dann Ratschläge dazu geben, wie das Problem der Browser-Unterstützung später gehandhabt werden kann (siehe [Umgang mit Browser-Unterstützung](#umgang_mit_browser-unterstützung)).

### Grundlegende Verwendung von Week

Die grundlegendste Verwendung von `<input type="week">` beinhaltet eine einfache `<input>` und {{htmlelement("label")}}-Element-Kombination, wie unten zu sehen:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_week', 600, 40)}}

### Steuerung der Eingabengröße

`<input type="week">` unterstützt keine Form-Size-Attribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenbedürfnisse zurückgreifen.

### Verwendung des Step-Attributs

Sie sollten das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden können, um die Anzahl der Wochen zu variieren, die jedes Mal übersprungen wird, wenn sie erhöht oder verringert werden; es scheint jedoch keinen Effekt auf unterstützende Browser zu haben.

## Validierung

Standardmäßig wendet `<input type="week">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen im Allgemeinen keine Eingabe zu, die nicht eine gültige Woche/Jahr ist, was hilfreich ist, aber es ist immer noch möglich, mit einem leeren Feld zu übermitteln, und Sie möchten möglicherweise den Bereich der wählbaren Wochen einschränken.

### Festlegen von maximalen und minimalen Wochen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Wochen einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel legen wir einen minimalen Wert von `Woche 01, 2017` und einen maximalen Wert von `Woche 52, 2017` fest:

```html
<form>
  <label for="week">What week would you like to start?</label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_weeks', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir mussten die Symbole auf ein {{htmlelement("span")}} neben dem Eingabefeld setzen, nicht auf das Eingabefeld selbst, da in Chrome der generierte Inhalt innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestaltet oder angezeigt werden kann.

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

Das Ergebnis hier ist, dass nur Wochen zwischen W01 und W52 im Jahr 2017 in unterstützenden Browsern als gültig angesehen und auswählbar sind.

### Woche-Werte erforderlich machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe der Woche obligatorisch zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein leeres Wochenfeld zu übermitteln.

Lassen Sie uns ein Beispiel betrachten; hier haben wir minimale und maximale Wochen eingestellt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular ohne Wert zu übermitteln, zeigt der Browser einen Fehler an. Experimentieren Sie jetzt mit dem Beispiel:

{{EmbedLiveSample('Making_week_values_required', 600, 120)}}

Hier ist ein Screenshot für diejenigen von Ihnen, die keinen unterstützenden Browser verwenden:

![Das Wochenformular-Steuerelement zeigt zwei Bindestriche, wo die Wochennummer sein sollte. Ein Popup mit einem gelben Warnsymbol und einem 'Bitte füllen Sie dieses Feld aus' geht von den beiden Bindestrichen aus, die in Blau hervorgehoben sind, dem gleichen Blau wie der Fokusrahmen der Eingabe.](week-validation-chrome.png)

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, die HTML anzupassen, um die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich für jemanden, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnte es katastrophal werden, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ etc.).

## Umgang mit Browser-Unterstützung

Wie oben erwähnt, ist das größte Problem bei der Verwendung von Week-Inputs derzeit die Browser-Unterstützung: Safari und Firefox unterstützen es nicht auf dem Desktop, und alte Versionen des IE unterstützen es nicht.

Mobile Plattformen wie Android und iOS nutzen solche Eingabetypen perfekt, bieten spezialisierte UI-Steuerungen, die es wirklich einfach machen, Werte in einer Touchscreen-Umgebung auszuwählen. Zum Beispiel sieht der `week`-Picker auf Chrome für Android so aus:

![Ein modales Popup. Der Header lautet 'Woche einstellen'. Es gibt zwei Spalten: Die linke hat 36 in der Mitte in voller Opazität, mit 35 darüber und 37 darunter halbtransparent. Auf der rechten Seite ist 2017 vollständig deckend. Es gibt keine anderen Optionen. Drei Textlinks oder Schaltflächen unten umfassen 'löschen' auf der 'linken' und 'abbrechen' sowie 'setzen' auf der rechten Seite.](week-chrome-android.png)

Nicht unterstützende Browser degradieren elegant zu einer Texteingabe, dies führt jedoch sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerelement wird anders sein) als auch in Bezug auf die Datenverarbeitung zu Problemen.

Das zweite Problem ist das ernstere. Wie bereits erwähnt, wird der tatsächliche Wert bei einer `week`-Eingabeformat immer auf das Format `yyyy-Www` normalisiert. Wenn der Browser auf eine generische Texteingabe zurückfällt, gibt es nichts, das den Benutzer dazu anleitet, die Eingabe korrekt zu formatieren (und es ist sicherlich nicht intuitiv). Es gibt mehrere Möglichkeiten, wie Menschen Wochenwerte schreiben könnten; zum Beispiel:

- `Woche 1 2017`
- `Jan 2-8 2017`
- `2017-W01`
- usw.

Der beste Weg, um mit Wochen/Jahren in Formularen auf eine browserübergreifende Weise umzugehen, besteht derzeit darin, den Benutzer zu bitten, die Wochennummer und das Jahr in separaten Steuerelementen einzugeben ({{htmlelement("select")}}-Elemente sind beliebt; siehe unten für ein Beispiel) oder JavaScript-Bibliotheken wie den [jQuery Date Picker](https://jqueryui.com/datepicker/) zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen zum Auswählen von Wochen: einen nativen Picker mit `<input type="week">` und einen Satz aus zwei {{htmlelement("select")}}-Elementen zum Auswählen von Wochen/Jahren in älteren Browsern, die den `week`-Eingabetyp nicht unterstützen.

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

Die Wochenwerte werden von dem JavaScript-Code unten dynamisch generiert.

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

Der andere Teil des Codes, der von Interesse sein könnte, ist der Code zur Funktionsdetektion. Um zu erkennen, ob der Browser `<input type="week">` unterstützt, erstellen wir ein neues {{htmlelement("input")}}-Element, versuchen, seinen `type` auf `week` zu setzen, und überprüfen dann sofort, was sein `type` ist. Nicht unterstützende Browser werden `text` zurückgeben, da der `week`-Typ auf den Typ `text` zurückfällt. Wenn `<input type="week">` nicht unterstützt wird, verbergen wir den nativen Picker und zeigen die alternative Picker-UI ({{htmlelement("select")}}s) stattdessen.

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
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Wochen pro Jahr](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))! Dies müssen Sie bei der Entwicklung von Produktionsanwendungen berücksichtigen.

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
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time), und [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
