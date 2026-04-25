---
title: '`<input type="time">` HTML-Attributwert'
short-title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{htmlelement("input")}} Elemente des Typs **`time`** erzeugen Eingabefelder, die darauf ausgelegt sind, dem Nutzer die Eingabe einer Uhrzeit (Stunden und Minuten, optional auch Sekunden) zu erleichtern.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements je nach Browser und Betriebssystem unterschiedlich ist, sind die Funktionen gleich. Der Wert ist immer eine im 24-Stunden-`HH:mm` oder `HH:mm:ss`-Format formatierte Uhrzeit mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte einen **periodischen Bereich**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder zu Beginn zurückkehren. Beispielsweise bedeutet das Festlegen eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte um 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [min und max Mitternacht überschreiten lassen](#min_und_max_mitternacht_überschreiten_lassen) dieses Artikels.

### list

Die Werte des List-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} liefert eine Liste vordefinierter Werte, die dem Nutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Nutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein Zeichenfolgenwert, der die späteste zu akzeptierende Uhrzeit angibt, angegeben im selben [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn die angegebene Zeichenfolge keine gültige Uhrzeit ist, wird kein Maximalwert festgelegt.

### min

Eine Zeichenfolge, die die früheste zu akzeptierende Uhrzeit angibt, angegeben im [Zeitwertformat](#zeitwertformat), wie zuvor beschrieben. Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert festgelegt.

### readonly

Ein boolesches Attribut, das, sofern vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der direkt die Eigenschaft [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schritt-Basiswert ist [`min`](#min), wenn angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, oder `0` (`00:00:00`), wenn keiner bereitgestellt wird.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die 1000-mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt angenommen wird und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). In Wirklichkeit hat es für `time`-Eingaben den gleichen Effekt wie `60`, da die Picker-Benutzeroberfläche in diesem Fall nur die Auswahl ganzer Minuten zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schritt-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden und Vorzug in positive Richtung geben, wenn es zwei gleichnahe Optionen gibt.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des Agenten im Allgemeinen nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Das ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert eine korrekte Zeitzeichenfolge ist, da es eine leere Zeichenfolge (`""`) sein könnte, was erlaubt ist. Beispiele für Einschränkungsvalidierung mithilfe der Attribute `min`, `max`, `step` und `required` finden Sie im Abschnitt [Festlegen von maximalen und minimalen Zeiten](#festlegen_von_maximalen_und_minimalen_zeiten).

## Beispiele

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Erstellen einer Zeitpicker-Oberfläche

In diesem Beispiel erstellen wir ein Interface-Element zur Auswahl der Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wurde:

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

{{ EmbedLiveSample('creating a time picker interface', 600, 140) }}

### Kontrolle der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr gleich lang in Zeichen sind. Für Größenbedürfnisse müssen Sie auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Den Wert-Attribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) angeben, etwa so:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Den Wert mit JavaScript setzen

Sie können den Zeitwert auch in JavaScript über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` des `time`-Inputs ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, welches wahrscheinlich basierend auf der Benutzer-Lokalisierung (oder dem User-Agent) ausgewählt wird. Wenn die Uhrzeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwerts erfahren, der von diesem Eingabetyp verwendet wird, in [Zeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert des Zeiteingabefeldes sehen, indem Sie eine Zeit eingeben und beobachten, wie er sich danach ändert.

Zunächst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe hinzu und fügen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}} hinzu, um den Wert des `time`-Inputs anzuzeigen:

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

Der JavaScript-Code fügt dem Zeiteingabefeld Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu achten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies passiert, wird der Inhalt des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular, das ein `time`-Input enthält, übermittelt wird, wird der Wert kodiert, bevor er in die Daten des Formulars aufgenommen wird. Der Formulardateneintrag für ein Zeiteingabeelement wird immer in der Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass` sein, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Zeitmengen zu variieren, die gesprungen werden, wann immer die Zeit erhöht oder verringert wird (zum Beispiel, damit sich die Zeit in 10-Minuten-Schritten bewegt, wenn die kleinen Pfeil-Widgets gedrückt werden).

Es nimmt einen ganzzahligen Wert, der die Anzahl der Sekunden definiert, die Sie erhöhen möchten; der Standardwert ist 60 Sekunden. Mit diesem als Standardwert zeigen die Benutzeroberflächen der meisten User-Agenten Stunden und Minuten, aber keine Sekunden an. Das Einfügen des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attributes mit einem anderen numerischen Wert als einem Wert, der durch `60` teilbar ist, fügt Sekunden zur Benutzeroberfläche hinzu, sofern der `min` oder `max` Wert nicht bereits dazu geführt hat, dass die Sekunden sichtbar werden.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

### Festlegen von maximalen und minimalen Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die gültigen Zeiten einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier machen wir Gebrauch von den CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Icon als generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

#### min und max Mitternacht überschreiten lassen

Durch das Festlegen eines [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attributs, das größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut ist, wird der gültige Zeitbereich um Mitternacht herum verlängert, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Zeitangabe obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Zeiten festgelegt und das Feld auch erforderlich gemacht:

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
> Die HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn schlecht formatierte Daten eingegeben werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Reference/Elements/input#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die eine Zeit darstellt, oder leer.</td>
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Anleitung zu Datums- und Zeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
