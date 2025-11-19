---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, um dem Benutzer das einfache Eingeben einer Uhrzeit (Stunden und Minuten und optional Sekunden) zu ermöglichen.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements von Browser und Betriebssystem abhängt, bleiben die Funktionen gleich. Der Wert ist immer eine im 24-Stunden-Format angegebene Zeit `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen anderen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte nach Erreichen des höchstmöglichen Werts wieder zum Anfang zurückkehren. Beispielsweise bedeutet das Festlegen eines `min` von `14:00` und eines `max` von `2:00`, dass die zulässigen Zeitwerte um 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Mehr dazu finden Sie im Abschnitt [min und max über Mitternacht führen](#min_und_max_über_mitternacht_führen) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte als Vorschläge für den Benutzer dieser Eingabe. Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein String, der die späteste akzeptierte Zeit angibt, angegeben im gleichen [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die frühest akzeptierte Zeit angibt, angegeben im zuvor beschriebenen [Zeitwertformat](#zeitwertformat). Wenn der angegebene Wert kein gültiger Zeitstring ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) via JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` bei Eingaben mit dem zusätzlich angegebenen `readonly`-Attribut keine Auswirkungen.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittgrundlage entfernt sind, sind gültig. Die Schrittgrundlage ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (`00:00:00`), falls keines von beiden angegeben ist.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben und wie eine Anzahl von Millisekunden behandelt, die dem `step`-Wert mal 1000 entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute bedeutet.

Ein String-Wert von `any` bedeutet, dass kein Stepping impliziert wird und jeder Wert zulässig ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). In der Praxis hat es bei `time`-Eingaben den gleichen Effekt wie `60`, da die Picker-Benutzeroberfläche in diesem Fall nur das Auswählen ganzer Minuten ermöglicht.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stepping-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei vorzugsweise Zahlen in positiver Richtung verwendet werden, wenn zwei gleich nahe Optionen vorliegen.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf die eingegebenen Werte an, außer dass die Benutzeroberfläche des Benutzeragenten Ihnen im Allgemeinen nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Dies ist hilfreich, aber Sie können nicht vollständig darauf vertrauen, dass der Wert ein gültiger Zeitstring ist, da er möglicherweise ein leerer String (`""`) ist, was zulässig ist. Für Beispiele zur Constraint-Validierung unter Verwendung der Attribute `min`, `max`, `step` und `required` siehe den Abschnitt [Höchst- und Mindestzeiten festlegen](#maximale_und_minimale_zeiten_festlegen).

## Beispiele

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` umfasst eine einfache Kombination aus einem `<input>`- und einem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Erstellen einer Zeit-Picker-Benutzeroberfläche

In diesem Beispiel erstellen wir ein Schnittstellenelement zur Zeitauswahl unter Verwendung des nativen Pickers, der mit `<input type="time">` erstellt wird:

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

### Steuereingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr dieselbe Anzahl von Zeichen haben. Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Das Wert-Attribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitpunkt im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut angeben:

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

Sie können den Zeitwert auch in JavaScript über die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` der `time`-Eingabe ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Benutzerlokalisierung (oder durch den Benutzeragenten) ausgewählt wird. Falls die Zeit Sekunden einschließt (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Weitere Informationen über das Format des von diesem Eingabetyp verwendeten Zeitwertes finden Sie in [Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie er sich danach ändert.

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event) Ereignis zu lauschen, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular mit einer `time`-Eingabe übermittelt wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Eintritt in die Formulardaten für eine Zeiteingabe wird immer in der Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass` sein, falls Sekunden eingeschlossen sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut verwenden, um die Menge der Zeit zu variieren, die vorwärts oder rückwärts gesprungen wird, wann immer die Zeit erhöht oder verringert wird (zum Beispiel, damit sich die Zeit in 10-Minuten-Schritten bewegt, wenn Sie die kleinen Pfeilsymbole anklicken).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Mit diesem als Standard zeigen die meisten Benutzeragenten-Oberflächen Stunden und Minuten, aber keine Sekunden an. Die Einbeziehung des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attributs mit einem beliebigen numerischen Wert, der nicht durch `60` teilbar ist, fügt Sekunden in die Benutzeroberfläche ein, es sei denn, der `min`- oder `max`-Wert hat nicht bereits dafür gesorgt, dass die Sekunden sichtbar sind.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, wie z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

### Maximale und minimale Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein generiertes Inhalte-Symbol neben der Eingabe als {{htmlelement("span")}} hinzu.

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

Das Ergebnis ist:

- Nur Zeiten zwischen 12:00 und 18:00 werden als gültig angesehen; Zeiten außerhalb dieses Bereichs werden als ungültig markiert.

#### Min und Max über Mitternacht führen

Indem man ein [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut setzt, wird der gültige Zeitbereich um Mitternacht herumlaufen, um einen gültigen Zeitbereich zu produzieren. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut verwenden, um die Eingabe der Zeit verbindlich zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt oder ein leeres Zeitfeld enthält.

Betrachten wir ein Beispiel: hier haben wir Mindest- und Höchstzeiten festgelegt und auch das Feld als erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, um die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte ein Desaster eintreten, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

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
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Zeit-Auswahl-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
