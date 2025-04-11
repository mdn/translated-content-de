---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die den Benutzer dazu bringen, einfach eine Zeit (Stunden und Minuten sowie optional Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements vom Browser und Betriebssystem abhängt, sind die Funktionen dieselben. Der Wert ist immer eine in 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Zeit mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

### Den Wert-Attribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Den Wert mittels JavaScript setzen

Sie können den Zeitwert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwertes

Der `value` des `time`-Inputs ist stets in einem 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Lokalisierung des Benutzers (oder durch den Benutzer-Agenten) ausgewählt wird. Wenn die Zeit Sekunden umfasst (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Mehr über das Format des Zeitwerts, der von diesem Eingabetyp verwendet wird, können Sie bei [Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings) lernen.

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und sehen, wie sie sich danach ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und ein Input hinzu und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert des `time`-Inputs anzuzeigen:

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

Der JavaScript-Code ergänzt die Zeiteingabe um Code, der das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis überwacht, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Input-Elements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` mit dem neuen Wert des Input-Elements ersetzt.

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

Wenn ein Formular mit einer Zeiteingabe gesendet wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat stets die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden einbezogen sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die alle {{HTMLElement("input")}}-Elemente offerieren, bieten `time`-Inputs folgende Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen verfügen Zeitwerte über eine **periodische Domäne**, was bedeutet, dass die Werte einen höchsten möglichen Wert erreichen, um dann wieder zum Anfang zurückzukehren. Zum Beispiel bedeutet das Festlegen eines `min` von `14:00` und eines `max` von `2:00`, dass die zulässigen Zeitwerte um 2:00 Uhr beginnen, durch Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Siehe mehr im Abschnitt [min und max über Mitternacht setzen](#min_und_max_über_mitternacht_setzen) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet dem Benutzer eine Liste vordefinierter Werte zur Auswahl für diese Eingabe. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste akzeptierte Zeit angibt, im selben [Zeitwertformat](#format_des_zeitwertes), wie oben beschrieben. Wenn der vorgegebene String keine gültige Zeit ist, wird kein maximaler Wert gesetzt.

### min

Ein String, der die früheste akzeptierte Zeit angibt, im [Zeitwertformat](#format_des_zeitwertes), wie vorher beschrieben. Wenn der angegebene Wert kein gültiger Zeitstring ist, wird kein Mindestwert gesetzt.

### readonly

Ein Boolean-Attribut, das bei Vorhandensein bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der besondere Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Grundlage für die Schrittgröße sind ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ansonsten, und ein entsprechender Standardwert, wenn keiner von beidem angegeben ist), sind zulässig.

Ein String-Wert von `any` bedeutet, dass keine Schrittweise impliziert ist und jeglicher Wert erlaubt ist (unter Ausnahmen anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzer-Agent")}} möglicherweise auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (bzw. 1 Minute oder 60.000 Millisekunden) entspricht.

Wenn `any` als Wert für `step` festgelegt ist, werden die standardmäßigen 60 Sekunden verwendet und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Zeit-Eingaben verwenden

### Grundlegende Verwendung von Zeit

Die einfachste Verwendung von `<input type="time">` besteht aus einer einfachen Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Kontrolle der Eingabegröße

`<input type="time">` unterstützt keine Form-Attributgrößen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer ungefähr gleich lang sind. Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um Größenanforderungen zu erfüllen.

### Verwendung des Step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um den Betrag zu variieren, um den die Zeit erhöht oder verringert wird (zum Beispiel, damit die Zeit bei einem Klick auf die kleinen Pfeilsteuerungen jeweils um 10 Minuten bewegt wird).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie die Zeit erhöhen möchten; der Standardwert ist 60 Sekunden. Wenn dies als Standard festgelegt ist, beschränken sich die meisten Benutzer-Agenten-Zeit-UIs auf Stunden und Minuten, aber nicht auf Sekunden. Die Einbeziehung des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attributs mit einem numerischen Wert, der nicht durch 60 teilbar ist, fügt Sekunden zur Benutzeroberfläche hinzu, wenn der `min` oder `max`-Wert die Sekunden nicht bereits sichtbar gemacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keinerlei Validierung auf eingegebene Werte an, außer dass die Benutzeroberfläche des Benutzer-Agenten normalerweise verhindert, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert ein korrekter Zeitstring ist, da er möglicherweise ein leerer String (`""`) ist, was erlaubt ist.

### Maximale und minimale Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein Icon als generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig gekennzeichnet.

#### Min und max über Mitternacht setzen

Indem ein [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut festgelegt wird, wird der gültige Zeitbereich um Mitternacht herum verlängert, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keiner anderen Eingabetype unterstützt.

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

Zudem können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Angabe der Zeit als zwingend erforderlich zu kennzeichnen. Browser zeigen einen Fehler an, wenn versucht wird, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und das Feld ebenfalls als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Probieren Sie jetzt mit dem Beispiel herum:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist sehr einfach für jemanden, die HTML zu ändern, um die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, kann es zu Problemen kommen, wenn unerwartet formatierte Daten (oder Daten, die zu groß, vom falschen Typ usw. sind) übermittelt werden.

## Beispiele

In diesem Beispiel erstellen wir ein Oberflächenelement zur Auswahl einer Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wurde:

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
        und
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp).
      </td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zu dessen Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Anleitung zum Datum- und Zeit-Picker](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
