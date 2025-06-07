---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`time`** erstellen Eingabefelder, die den Benutzer dazu bringen sollen, auf einfache Weise eine Uhrzeit (Stunden und Minuten, und optional Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Benutzeroberfläche vom Browser und Betriebssystem abhängt, sind die Funktionen dieselben. Der Wert ist immer eine im 24-Stunden-Format angegebene Zeit `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;time&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="appointment">Choose a time for your meeting:</label>

<input
  type="time"
  id="appointment"
  name="appointment"
  min="09:00"
  max="18:00"
  required />

<small>Office hours are 9am to 6pm</small>
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

### Das value-Attribut setzen

Sie können einen Standardwert für die Eingabe setzen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut hinzufügen, wie folgt:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{EmbedLiveSample('Setting_the_value_attribute', 600, 60)}}

### Den Wert mit JavaScript setzen

Sie können den Zeitwert auch in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwerts

Der `value` des `time`-Inputs ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf den Locale-Einstellungen des Benutzers (oder durch den User Agent) ausgewählt wird. Wenn die Zeit Sekunden beinhaltet (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwerts erfahren, der von diesem Eingabetyp verwendet wird, unter [Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich anschließend ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe ein und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

```html
<form>
  <label for="startTime">Start time: </label>
  <input type="time" id="startTime" />
  <p>
    Value of the <code>time</code> input:
    <code>"<span id="value">n/a</span>"</code>.
  </p>
</form>
```

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu warten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies passiert, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener(
  "input",
  () => {
    valueSpan.innerText = startTime.value;
  },
  false,
);
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular mit einer `time`-Eingabe übermittelt wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden inkludiert sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allgemein für {{HTMLElement("input")}}-Elemente geltenden Attributen bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Anders als bei vielen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder von vorne beginnen. Zum Beispiel bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die zulässigen Zeitwerte um 14:00 Uhr beginnen, bis Mitternacht und zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht setzen](#erstellen_von_min_und_max_über_mitternacht_hinweg) dieses Artikels.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein String, der die späteste akzeptierte Zeit angibt, im selben [Zeitwertformat](#format_des_zeitwerts) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit darstellt, wird kein Maximalwert eingestellt.

### min

Ein String, der die früheste akzeptierte Zeit angibt, gegeben im [Zeitwertformat](#format_des_zeitwerts), das zuvor beschrieben wurde. Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert gesetzt.

### readonly

Ein Boolean-Attribut, welches, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert besitzen kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Ausgangspunkt für das Inkrement sind ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein entsprechender Standardwert, wenn keiner dieser Werte angegeben ist) sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Inkrement impliziert ist und jeder Wert erlaubt ist (unter Ausschluss anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht den Inkrementationskonfigurationen entsprechen, kann der {{Glossary("user_agent", "User Agent")}} zum nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrundeliegende Zahlwert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute bzw. 60.000 Millisekunden) angibt.

Wenn `any` als Wert für `step` gesetzt ist, wird der Standardwert von 60 Sekunden verwendet, und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr die gleiche Anzahl an Zeichen haben. Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um Größenanforderungen zu erfüllen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Größe des Zeitsprungs zu variieren, wenn die Zeit erhöht oder verringert wird (zum Beispiel, so dass sich die Zeit bei jedem Klick auf die kleinen Pfeil-Widgets um 10 Minuten pro Schritt bewegt).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie erhöhen möchten; der Standardwert ist 60 Sekunden. Mit dieser Vorgabe zeigt die Benutzeroberfläche der meisten User Agents Stunden und Minuten, aber keine Sekunden. Die Einbeziehung des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attributs mit jedem anderen numerischen Wert als einem Wert, der durch `60` teilbar ist, fügt Sekunden zur Benutzeroberfläche hinzu, wenn nicht bereits der `min`- oder `max`-Wert die Sichtbarkeit der Sekunden verursacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf die eingegebenen Werte an, abgesehen von der Tatsache, dass die Benutzeroberfläche des User Agents Ihnen im Allgemeinen nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Das ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert eine korrekte Zeitzeichenfolge ist, da er eine leere Zeichenfolge (`""`) sein könnte, was zulässig ist.

### Maximale und minimale Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine minimale Zeit von `12:00` und eine maximale Zeit von `18:00` fest:

```html
<form>
  <label for="appointment-time">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Wir verwenden die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben dem Input hinzu.

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

Das Ergebnis hier ist, dass:

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig markiert.

#### Erstellen von min und max über Mitternacht hinweg

Durch Setzen eines [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attributs größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut wird der gültige Zeitbereich über Mitternacht hinweg gruppiert, um einen gültigen Zeitraum zu erstellen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // <input type=time> reversed range supported
} else {
  // <input type=time> reversed range unsupported
}
```

### Zeiten erforderlich machen

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe der Zeit verpflichtend zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und das Feld ebenfalls als erforderlich markiert:

```html
<form>
  <div>
    <label for="appointment-time">
      Choose an appointment time (opening hours 12:00 to 18:00):
    </label>
    <input
      id="appointment-time"
      type="time"
      name="appointment-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Making_times_required', 600, 120)}}

> [!WARNING]
> Die HTML-Formularvalidierung ist _keinesfalls_ ein Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, das HTML so zu ändern, dass die Validierung umgangen oder ganz entfernt wird. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe drohen, wenn falsch formatierte Daten (oder zu große, falsche Daten) übermittelt werden.

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Auswahl der Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wird:

### HTML

```html
<form>
  <label for="appointment-time">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00"
    required />
  <span class="validity"></span>
</form>
```

### CSS

```css
input[type="time"] {
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

### Ergebnis

{{EmbedLiveSample('Examples', 600, 140)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Reference/Elements/input#value">Wert</a></strong></td>
      <td>Ein String, der eine Zeit darstellt, oder leer.</td>
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
        und
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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

- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`<input type="week">`](/de/docs/Web/HTML/Reference/Elements/input/week)
- [`<input type="month">`](/de/docs/Web/HTML/Reference/Elements/input/month)
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Verwendete Datums- und Zeitformate im HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Eingabetypen für Datum und Uhrzeit Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
