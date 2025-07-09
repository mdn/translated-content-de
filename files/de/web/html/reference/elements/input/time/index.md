---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{htmlelement("input")}}-Elemente des Typs **`time`** erstellen Eingabefelder, die darauf ausgelegt sind, dem Benutzer das einfache Eingeben einer Uhrzeit (Stunden und Minuten, und optional Sekunden) zu ermöglichen.

Obwohl das Erscheinungsbild der Benutzeroberfläche der Kontrolle vom Browser und Betriebssystem abhängig ist, sind die Funktionen dieselben. Der Wert ist immer eine im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Uhrzeit mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

### Das value-Attribut festlegen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut einschließen, wie folgt:

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

Sie können den Zeitwert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwerts

Der `value` des `time`-Eingabefelds ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Benutzersprache (oder vom User-Agent) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format der Zeitwerte, die von diesem Eingabetyp verwendet werden, in [Zeitwerte](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings) erfahren.

In diesem Beispiel können Sie den Wert des Zeiteingabefelds sehen, indem Sie eine Zeit eingeben und anschließend überprüfen, wie sich der Wert verändert.

Zuerst ein Blick auf das HTML. Wir fügen eine Beschriftung und eine Eingabe hinzu und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Der JavaScript-Code fügt dem Zeiteingabefeld Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu warten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies passiert, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular, das ein `time`-Eingabefeld enthält, übermittelt wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Dateneintrag des Formulars für ein Zeiteingabefeld wird immer in der Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass` sein, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte einen **periodischen Bereich**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder am Anfang beginnen. Zum Beispiel bedeutet das Festlegen eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte bei 14:00 Uhr beginnen, durch Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht setzen](#min_und_max_über_mitternacht_setzen) in diesem Artikel.

### list

Die Werte des list-Attributs sind die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im selben Dokument vorhanden ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Eine Zeichenkette, die die späteste akzeptierte Zeit angibt, im selben [Zeitwertformat](#format_des_zeitwerts), wie oben beschrieben. Wenn die angegebene Zeichenkette keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Eine Zeichenkette, die die früheste akzeptierte Zeit angibt, im [Zeitwertformat](#format_des_zeitwerts), wie vorher beschrieben. Wenn der angegebene Wert keine gültige Zeitzeichenkette ist, wird kein Minimalwert festgelegt.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin direkt durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schritt-Basiswert ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein geeigneter Standardwert, falls keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schrittweite impliziert ist, und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nah beieinander liegende Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) angibt.

Wenn `any` als Wert für `step` gesetzt ist, wird der Standardwert von 60 Sekunden verwendet, und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` umfasst eine einfache Kombination von `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Eingabegröße steuern

`<input type="time">` unterstützt keine Formulargrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer in etwa gleich lang sind. Für Größenanforderungen müssen Sie auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Menge an Zeit zu variieren, die bei jedem Inkrementieren oder Dekrementieren gesprungen wird (zum Beispiel, damit die Zeit beim Klicken auf die kleinen Pfeil-Widgets um 10 Minuten wechselt).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Mit diesem Standardwert zeigen die meisten User-Agent-Zeit-Benutzeroberflächen Stunden und Minuten, aber keine Sekunden an. Das Einschließen des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attributs mit einem beliebigen numerischen Wert, der nicht durch `60` teilbar ist, fügt der Benutzeroberfläche Sekunden hinzu, es sei denn, der `min`- oder `max`-Wert hat die Anzeige der Sekunden bereits verursacht.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, wie zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des User-Agent im Allgemeinen nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig auf den Wert als korrekte Zeitzeichenfolge verlassen, da es sich um eine leere Zeichenfolge (`""`) handeln könnte, was zulässig ist.

### Maximale und minimale Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer wählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

#### Min und max über Mitternacht setzen

Durch das Setzen eines [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attributs, das größer ist als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut, wird der gültige Zeitbereich über Mitternacht gewickelt, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Darüber hinaus können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe der Zeit verpflichtend zu machen. Browser zeigen eine Fehlermeldung an, wenn Sie versuchen, eine Zeit einzugeben, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld einzugeben.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und auch das Feld als erforderlich festgelegt:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie, jetzt mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

## Beispiele

In diesem Beispiel erstellen wir ein Schnittstellenelement zur Auswahl der Zeit unter Verwendung des nativen Pickers, der mit `<input type="time">` erstellt wird:

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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zu seiner Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Date and Time picker Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
