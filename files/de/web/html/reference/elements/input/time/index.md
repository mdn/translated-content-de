---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{htmlelement("input")}} Elemente des Typs **`time`** erzeugen Eingabefelder, die es dem Nutzer erleichtern sollen, eine Zeit (Stunden und Minuten, optional auch Sekunden) einzugeben.

Auch wenn das Erscheinungsbild der Benutzeroberfläche der Steuerelemente auf dem Browser und Betriebssystem basiert, bleiben die Funktionen gleich. Der Wert ist immer eine 24-Stunden-Zeit im Format `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

### Das Wertattribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein gültiges Zeitformat im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut angeben, wenn Sie das `<input>` Element erstellen, zum Beispiel:

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

Sie können den Zeitwert auch in JavaScript mit der `value` Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` des `time` Eingabefeldes ist stets im 24-Stunden-Format angegeben, einschließlich führender Nullen: `HH:mm`, unabhängig vom Eingabeformat, welches wahrscheinlich basierend auf der Locale des Nutzers (oder durch den User Agent) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step Attributs](#verwendung_des_step_attributs)), ist das Format immer `HH:mm:ss`. Weitere Informationen über das von diesem Eingabetyp verwendete Zeitwertformat finden Sie unter [Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich danach ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein `label` und `input` ein und ergänzen es mit einem {{HTMLElement("p")}} Element und einem {{HTMLElement("span")}}, um den Wert der `time` Eingabe anzuzeigen:

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

Der JavaScript Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event) Ereignis zu achten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einer `time` Eingabe übermittelt wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Datenbankeintrag des Formulars für eine Zeiteingabe hat stets die Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step Attributs](#verwendung_des_step_attributs)).

## Zusätzliche Attribute

Neben den für alle {{HTMLElement("input")}} Elemente gemeinsamen Attributen bieten `time` Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte einen **periodischen Bereich**, das bedeutet, dass die Werte den maximal möglichen Wert erreichen, dann jedoch wieder von vorne beginnen. Wenn Sie beispielsweise `min` auf `14:00` und `max` auf `2:00` festlegen, bedeutet dies, dass die erlaubten Zeitwerte um 2:00 PM beginnen, über Mitternacht bis zum nächsten Tag laufen und um 2:00 AM enden. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht verwenden](#min_und_max_über_mitternacht_verwenden) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}} Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Nutzer als Vorschläge für diese Eingabe angeboten werden. Werte, die in der Liste enthalten sind und nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein Zeichenfolgenwert, der die späteste akzeptierte Zeit angibt; dargestellt im gleichen [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn die angegebene Zeichenfolge keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Eine Zeichenfolge, die die früheste akzeptierte Zeit angibt, im zuvor beschriebenen [Zeitwertformat](#zeitwertformat). Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value` Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem ebenfalls angegebenen `readonly` Attribut.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden ist, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganzzahlige Anzahl von Schritten vom Schritt-Basiswert entfernt sind, sind gültig. Der Schrittbasiswert ist [`min`](#min), wenn angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (`00:00:00`), wenn keiner angegeben ist.

Für `time` Eingaben wird der Wert von `step` in Sekunden angegeben und als eine Anzahl von Millisekunden behandelt, welche 1000-mal dem `step` Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Springen impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). In der Praxis hat es jedoch den gleichen Effekt wie `60` für `time` Eingaben, da das Picker-UI in diesem Fall nur das Auswählen ganzer Minuten zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht den Step-Konfigurationen entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgelegenen gültigen Wert runden und in Fällen von zwei gleich nahen Optionen Zahlen in positiver Richtung bevorzugen.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}} Element, wie unten zu sehen:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr gleich viele Zeichen lang sind. Für Größenanpassungen müssen Sie auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Verwendung des step Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden, um die Zeitspanne zu variieren, die bei jedem Erhöhen oder Verringern der Zeit übersprungen wird (zum Beispiel, damit sich die Zeit in 10-Minuten-Schritten bewegt, wenn die kleinen Pfeile gedrückt werden).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie sich erhöhen wollen; der Standardwert ist 60 Sekunden. Bei diesem Standardwert zeigen die meisten User-Agent-Zeit-UIs Stunden und Minuten, aber keine Sekunden an. Wenn das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut mit einem numerischen Wert eingefügt wird, der nicht durch `60` teilbar ist, fügt dies Sekunden zur UI hinzu, wenn der `min` oder `max` Wert die Sekunden nicht bereits sichtbar gemacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, außer dass die Benutzeroberfläche des User-Agents im Allgemeinen nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert ein korrekter Zeitstring ist, da es möglicherweise ein leerer String (`""`) sein kann, der erlaubt ist.

### Maximale und minimale Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Maximalzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier machen wir Gebrauch von den {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltssymbol auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

Das Ergebnis hier ist:

- Nur Zeiten zwischen 12:00 und 18:00 werden als gültig angesehen; Zeiten außerhalb dieses Bereichs werden als ungültig gekennzeichnet.

#### Min und Max über Mitternacht verwenden

Indem Sie ein [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut setzen, wird der gültige Zeitbereich über Mitternacht umbrochen, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinen anderen Eingabetypen unterstützt.

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

Darüber hinaus können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um das Ausfüllen der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und auch das Feld als erforderlich erklärt:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> HTML Formularvalidierung ist _keine_ Ersatzlösung für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die eingehenden Daten nicht validiert, könnte ein Desaster auftreten, wenn falsch formatierte Daten (oder Daten, die zu groß, von falschem Typ usw. sind) übermittelt werden.

## Beispiele

In diesem Beispiel erstellen wir ein Benutzerschnittstellenelement zur Zeitauswahl mit dem nativen Picker, der mit `<input type="time">` erstellt wird:

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
      <td><strong><a href="/de/docs/Web/HTML/Reference/Elements/input#value">Wert</a></strong></td>
      <td>Eine Zeichenkette, die eine Zeit darstellt, oder leer.</td>
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
      <td><strong>IDL Attribute</strong></td>
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
- Das generische {{HTMLElement("input")}} Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate in HTML verwendet](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Zeitpicker-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
