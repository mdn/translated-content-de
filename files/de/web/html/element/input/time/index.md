---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 04e376029830863d3516737cd58238954a78b03f
---

{{HTMLSidebar}}

{{htmlelement("input")}} Elemente vom Typ **`time`** erstellen Eingabefelder, die dazu gedacht sind, dem Benutzer das einfache Eingeben einer Uhrzeit (Stunden und Minuten, optional Sekunden) zu ermöglichen.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerungselements vom Browser und Betriebssystem abhängt, sind die Funktionen gleich. Der Wert ist immer eine 24-Stunden `HH:mm` oder `HH:mm:ss` formatierte Uhrzeit mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;time&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="appt">Choose a time for your meeting:</label>

<input type="time" id="appt" name="appt" min="09:00" max="18:00" required />

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

### Das value-Attribut einstellen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein gültiges Zeitformat im [`value`](/de/docs/Web/HTML/Element/input#value) Attribut angeben, wenn Sie das `<input>` Element erstellen, so:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Den Wert mit JavaScript festlegen

Sie können den Zeitwert auch in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekts abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der Wert der `time` Eingabe ist immer im 24-Stunden-Format inklusive führender Nullen: `HH:mm`, ungeachtet des Eingabeformats, das wahrscheinlich basierend auf dem Gebietsschema des Benutzers (oder durch den User-Agent) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Using the step attribute](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format der Zeitwerte lernen, die durch diesen Eingabetyp verwendet werden im Abschnitt [Time strings](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich danach ändert.

Zunächst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabeelement hinzu, sowie ein {{HTMLElement("p")}} und ein {{HTMLElement("span")}}, um den Wert der `time` Eingabe anzuzeigen:

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event) Ereignis zu achten, welches jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn das geschieht, werden die Inhalte des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einer `time` Eingabe übermittle wird, wird der Wert kodiert, bevor er in den Formulardaten enthalten wird. Der Formulardateneintrag für eine Zeiteingabe wird immer `name=HH%3Amm` oder `name=HH%3Amm%3Ass` sein, wenn Sekunden enthalten sind (siehe [Using the step attribute](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die bei allen {{HTMLElement("input")}} Elementen zu finden sind, bieten `time` Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte einen **periodischen Bereich**, was bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder zum Anfang zurückkehren. Zum Beispiel bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte um 14:00 Uhr beginnen, durch Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [making min and max cross midnight](#min_und_max_um_mitternacht_überqueren_lassen) dieses Artikels.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein String, der die späteste akzeptierte Zeit angibt, im gleichen [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die früheste akzeptierte Zeit angibt, im [Zeitwertformat](#zeitwertformat) wie zuvor beschrieben. Wenn der angegebene Wert keine gültige Zeitzeichenkette ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch durch JavaScript-Code, der die `value` Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit ebenfalls angegebenem `readonly` Attribut.

### step

Das Attribut `step` ist eine Zahl, welche die Granularität angibt, der der Wert entsprechen muss, oder den speziellen Wert `any`, welcher unten beschrieben wird. Nur Werte, die dem Basiswert für Schritte ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (unter Berücksichtigung anderer Beschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht den Schritt-Konfigurationen entsprechen, kann der {{Glossary("user_agent", "user agent")}} auf den nächsten gültigen Wert runden und Zahlen in positive Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

Für `time` Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrundeliegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) bedeutet.

Wenn `any` als Wert für `step` gesetzt wird, werden die standardmäßigen 60 Sekunden verwendet, und der Sekundenzähler wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von time

Die grundlegendste Verwendung von `<input type="time">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}}, wie unten zu sehen ist:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formattribute zur Größenanpassung wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer etwa die gleiche Anzahl von Zeichen lang sind. Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um Größenvorgaben anzupassen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut verwenden, um die Menge an Zeit zu variieren, die jeweils beim Erhöhen oder Verringern der Zeit zu- oder abgenommen wird (zum Beispiel, damit sich die Zeit um jeweils 10 Minuten bewegt, wenn man die kleinen Pfeilsymbole anklickt).

Es nimmt einen ganzzahligen Wert, der die Anzahl der Sekunden definiert, um die Sie erhöhen möchten; der Standardwert ist 60 Sekunden. Mit diesem Standardwert zeigen die meisten Benutzeroberflächen von Benutzeragenten Stunden und Minuten, aber keine Sekunden an. Das Einfügen des [`step`](/de/docs/Web/HTML/Element/input#step) Attributs mit einem beliebigen numerischen Wert ungleich einem Vielfachen von `60` fügt Sekunden zur Benutzeroberfläche hinzu, wenn der `min` oder `max` Wert die Sekunden nicht bereits sichtbar gemacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, wie etwa 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, außer dass die Benutzeroberfläche des Benutzer-Agents Ihnen im Allgemeinen nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Dies ist hilfreich, aber es kann nicht vollständig darauf vertraut werden, dass der Wert eine korrekte Zeitzeichenkette ist, da diese auch eine leere Zeichenkette (`""`) sein kann, was zulässig ist.

### Festlegung von maximalen und minimalen Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel haben wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` eingestellt:

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

Hier ist das im obigen Beispiel verwendete CSS. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig bezeichnet.

#### min und max um Mitternacht überqueren lassen

Durch die Angabe eines [`min`](/de/docs/Web/HTML/Element/input#min) Attributes, das größer ist als das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut, umfasst der gültige Zeitbereich die Mitternacht, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinen anderen Eingabetypen unterstützt.

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

### Zeiten als erforderlich festlegen

Außerdem können Sie das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um die Eingabe der Zeit verpflichtend zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt oder ein leeres Zeitfeld enthält.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Zeiten festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ oder ähnliches).

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

{{ EmbedLiveSample('Examples', 600, 140) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Element/input#value">Wert</a></strong></td>
      <td>Ein String, der eine Zeit darstellt oder leer ist.</td>
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
        und
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
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

- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- Das generische {{HTMLElement("input")}} Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Date and time formats used in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Date and Time picker tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
