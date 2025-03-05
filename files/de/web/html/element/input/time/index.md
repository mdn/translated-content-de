---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die dem Benutzer ermöglichen, einfach eine Zeit (Stunden und Minuten und optional Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements vom Browser und Betriebssystem abhängt, sind die Funktionen dieselben. Der Wert ist immer eine im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Zeit, mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

### Den Wert-Attribut einstellen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitpunkt im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Den Wert mit JavaScript einstellen

Sie können den Zeitwert auch in JavaScript mithilfe der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und einstellen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwertes

Der `value` des `time`-Inputs ist immer im 24-Stunden-Format, das führende Nullen enthält: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Benutzersprache (oder vom User-Agent) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwertes erfahren, der von diesem Eingabetyp verwendet wird, in [Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie durch Eingabe einer Uhrzeit den Wert der Zeiteingabe sehen und beobachten, wie er sich danach ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe hinzu und fügen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}} hinzu, um den Wert der `time`-Eingabe anzuzeigen:

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu überwachen, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit `time`-Eingaben gesendet wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder von vorne beginnen. Beispielsweise bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die zulässigen Zeitwerte um 14:00 Uhr beginnen, bis Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [Min und Max über Mitternacht hinweg festlegen](#min_und_max_über_mitternacht_hinweg_festlegen) dieses Artikels.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen angezeigt. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein String, der die späteste zu akzeptierende Zeit angibt, im gleichen [Zeitwert-Format](#format_des_zeitwertes), wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die früheste zu akzeptierende Zeit angibt, im [Zeitwert-Format](#format_des_zeitwertes), wie zuvor beschrieben. Wenn der angegebene Wert kein gültiger Zeitstring ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch nach wie vor durch JavaScript direkt über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Es sind nur solche Werte gültig, die gleich dem Ausgangswert für das Schrittmaß ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und einem geeigneten Standardwert, wenn keiner von beiden bereitgestellt wird) sind.

Ein String-Wert `any` bedeutet, dass kein Schrittmaß impliziert ist und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute bzw. 60.000 Millisekunden) bedeutet.

Wenn `any` als Wert für `step` festgelegt ist, wird der Standardwert von 60 Sekunden verwendet, und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formulargrößen-Attribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr gleich viele Zeichen lang sind. Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanpassungen zurückgreifen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Menge der Zeit zu variieren, die jedes Mal beim Erhöhen oder Verringern der Zeit übersprungen wird (zum Beispiel, sodass die Zeit um 10 Minuten auf einmal verschoben wird, wenn Sie die kleinen Pfeil-Widgets anklicken).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie erhöhen möchten; der Standardwert ist 60 Sekunden. Mit diesem als Standard verwenden die meisten User-Agent-Zeit-Benutzeroberflächen Stunden und Minuten, aber keine Sekunden. Das Einfügen des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem numerischen Wert, der nicht durch `60` teilbar ist, fügt der Benutzeroberfläche Sekunden hinzu, sofern der `min`- oder `max`-Wert nicht bereits verursacht hat, dass die Sekunden sichtbar sind.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, spezifizieren Sie die Anzahl der Minuten oder Stunden in Sekunden, z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingetragene Werte an, außer dass die Benutzeroberfläche des User-Agent im Allgemeinen nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Das ist hilfreich, aber Sie können sich nicht darauf verlassen, dass der Wert ein ordnungsgemäßer Zeit-String ist, da es ein leerer String (`""`) sein könnte, was erlaubt ist.

### Festlegen von maximalen und minimalen Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

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

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist oder nicht. Wir fügen ein Symbol als generiertes Inhalts-Symbol auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig gekennzeichnet.

#### Min und Max über Mitternacht hinweg festlegen

Indem Sie ein [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut einstellen, wird der gültige Zeitbereich um Mitternacht herum verlaufen, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe der Zeit zwingend erforderlich zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit, die außerhalb der gesetzten Grenzen liegt, oder ein leeres Zeitfeld zu übermitteln.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und das Feld auch erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte dies zu Problemen führen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß oder vom falschen Typ sind usw.).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Auswahl der Zeit mithilfe des nativen Pickers, der mit `<input type="time">` erstellt wurde:

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

{{ EmbedLiveSample('Examples', 600, 140) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Element/input#value">Wert</a></strong></td>
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
        und
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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

- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zu seiner Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Anleitung zum Wählen von Datum und Zeit](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
