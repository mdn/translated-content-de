---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{htmlelement("input")}} Elemente des Typs **`time`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einfach eine Zeit (Stunden und Minuten, optional auch Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Steuerelemente auf dem Browser und Betriebssystem basiert, sind die Funktionen dieselben. Der Wert ist immer eine 24-Stunden-Zeit im `HH:mm`- oder `HH:mm:ss`-Format mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

### Das `value`-Attribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut einfügen, so:

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

Sie können den Zeitwert auch in JavaScript mithilfe der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitformat des Wertes

Der `value` eines `time` Eingabefeldes ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das voraussichtlich basierend auf der Benutzersprache (oder durch den Benutzeragenten) ausgewählt wird. Wenn die Zeit Sekunden beinhaltet (siehe [Verwendung des `step`-Attributs](#verwendung_des_`step`-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwertes, das von diesem Eingabetyp verwendet wird, unter [Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings) erfahren.

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und dann beobachten, wie sich der Wert verändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe hinzu und ergänzen ein {{HTMLElement("p")}} Element mit einem {{HTMLElement("span")}} zur Anzeige des Werts der `time` Eingabe:

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu warten, das jedes Mal ausgelöst wird, wenn sich die Inhalte eines Eingabeelements ändern. Wenn dies geschieht, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular mit einer `time` Eingabe abgesendet wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Eintrag der Formulardaten für eine Zeiteingabe liegt immer in der Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass` wenn Sekunden enthalten sind (siehe [Verwendung des `step`-Attributs](#verwendung_des_`step`-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allen {{HTMLElement("input")}} Elementen gemeinsamen Attributen bieten `time` Eingaben die folgenden Attribute.

> [!NOTE]
> Anders als viele Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchst möglichen Wert erreichen und dann wieder umspringen. Zum Beispiel bedeutet ein `min` von `14:00` und ein `max` von `2:00`, dass die zulässigen Zeitwerte bei 14:00 Uhr beginnen, über Mitternacht des nächsten Tages laufen und bei 2:00 Uhr enden. Mehr dazu finden Sie im Abschnitt [min und max um Mitternacht kreuzen](#min_und_max_um_mitternacht_kreuzen) dieses Artikels.

### list

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}} Elements. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen werden sollen. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste akzeptierte Zeit angibt, im gleichen [Zeitwertformat](#zeitformat_des_wertes) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein maximaler Wert festgelegt.

### min

Ein String, der die früheste akzeptierte Zeit angibt, im zuvor beschriebenen [Zeitwertformat](#zeitformat_des_wertes). Wenn der angegebene Wert kein gültiger Zeitstring ist, wird kein minimaler Wert festgelegt.

### readonly

Ein boolesches Attribut, das, wenn vorhanden, angibt, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code, der die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft direkt setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinerlei Einfluss auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Step-Basiswert entfernt sind, sind gültig. Der Step-Basiswert ist [`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (`00:00:00`), falls beides nicht angegeben ist.

Für `time` Eingaben wird der Wert von `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die 1000 mal dem `step`-Wert entspricht (der zugrundeliegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein String-Wert von `any` bedeutet, dass kein Schritt festgelegt ist und jeder Wert erlaubt ist (jegliche andere Einschränkungen, wie [`min`](#min) und [`max`](#max) ausgenommen). In Wirklichkeit hat es denselben Effekt wie `60` für `time` Eingaben, da die Auswahl-UI in diesem Fall nur die Auswahl ganzer Minuten erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten der Step-Konfiguration nicht entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` besteht aus einer einfachen Kombination aus `<input>` und {{htmlelement("label")}} Element, wie unten zu sehen:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formulardimensionierungsattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr die gleiche Anzahl von Zeichen lang sind. Sie müssen sich bei Größenanforderungen auf [CSS](/de/docs/Web/CSS) verlassen.

### Verwendung des `step`-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Menge der Zeit zu variieren, die beim Erhöhen oder Verringern der Zeit übersprungen wird (zum Beispiel, damit die Zeit in Schritten von 10 Minuten eingestellt wird, wenn auf die kleinen Pfeil-Symbole geklickt wird).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie erhöhen möchten; der Standardwert ist 60 Sekunden. Mit diesem als Standardeinstellung zeigen die meisten Benutzeragenten-Zeiten UIs Stunden und Minuten, aber keine Sekunden an. Wenn das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut mit einem anderen numerischen Wert als einem, der durch `60` teilbar ist, enthalten ist, fügt es Sekunden zur UI hinzu, falls der `min`- oder `max`-Wert die Sekunden nicht bereits sichtbar gemacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl von Minuten oder Stunden in Sekunden an, z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des Benutzeragents normalerweise nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Dies ist hilfreich, aber Sie können nicht vollständig darauf vertrauen, dass der Wert ein richtiger Zeitstring ist, da es ein leerer String (`""`) sein könnte, was zulässig ist.

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

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Hier ist das im obigen Beispiel verwendete CSS. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltssymbol an einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

Das Ergebnis ist hier, dass:

- Nur Zeiten zwischen 12:00 und 18:00 als gültig betrachtet werden; Zeiten außerhalb dieses Bereichs werden als ungültig bezeichnet.

#### Min und Max um Mitternacht kreuzen

Durch das Festlegen eines [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attributs, das größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut ist, wird der gültige Zeitbereich über Mitternacht verlängert, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

### Zeiten obligatorisch machen

Außerdem können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie, jetzt mit dem Beispiel zu experimentieren:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, das HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

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
      <td><strong>IDL Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
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
- Das generische {{HTMLElement("input")}} Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum und Uhrzeit Auswahlanleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
