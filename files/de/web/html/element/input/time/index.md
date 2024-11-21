---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die es dem Benutzer erleichtern, eine Uhrzeit (Stunden und Minuten und optional Sekunden) einzugeben.

Während das Erscheinungsbild der Benutzeroberfläche des Steuerelements auf dem Browser und dem Betriebssystem basiert, sind die Funktionen dieselben. Der Wert ist immer eine 24-Stunden-Zeit im Format `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Einstellen des Attributs "value"

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitpunkt im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, wie folgt:

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

Sie können den Zeitwert auch in JavaScript mithilfe der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` des `time`-Eingabefelds ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Lokalisierung des Benutzers oder vom User-Agent ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_schritt-attributs)), ist das Format immer `HH:mm:ss`. Weitere Informationen über das Format des Zeitwerts, das von diesem Eingabetyp verwendet wird, finden Sie in [Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeit-Eingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich danach ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe hinzu und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Der JavaScript-Code fügt der Zeit-Eingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu achten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. In diesem Fall werden die Inhalte des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einer `time`-Eingabe abgeschickt wird, wird der Wert codiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeit-Eingabe hat immer die Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass`, wenn Sekunden eingeschlossen sind (siehe [Using the step attribute](#verwendung_des_schritt-attributs)).

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte ein **periodisches Domain**, was bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder am Anfang beginnen. Wenn Sie beispielsweise `min` mit `14:00` und `max` mit `2:00` angeben, bedeutet das, dass die erlaubten Zeitwerte um 2:00 Uhr nachmittags beginnen, durch Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr morgens enden. Weitere Informationen finden Sie im Abschnitt [making min and max cross midnight](#min_und_max_über_mitternacht_hinweg) dieses Artikels.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste zu akzeptierende Zeit angibt, im gleichen [time value format](#zeitwertformat) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die früheste zu akzeptierende Zeit angibt, in dem zuvor beschriebenen [time value format](#zeitwertformat). Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, indem direkt die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft festgelegt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die der Grundlage für das Schrittmaß entsprechen ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner davon angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittmaß impliziert ist und jeder Wert erlaubt ist (sofern keine anderen Einschränkungen wie [`min`](#min) und [`max`](#max) bestehen).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittmaß-Konfiguration entsprechen, kann der {{Glossary("user_agent", "user agent")}} auf den nächstgelegenen gültigen Wert runden und Zahlen in positiver Richtung bevorzugen, wenn zwei gleich naheliegende Optionen bestehen.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden vorliegt). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute bzw. 60.000 Millisekunden) bedeutet.

Wenn `any` als Wert für `step` gesetzt ist, werden standardmäßig 60 Sekunden verwendet, und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Anwendungen von Zeit

Die grundlegendste Verwendung von `<input type="time">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Größeneingabeattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer in etwa die gleiche Anzahl von Zeichen aufweisen. Sie müssen für Größenbedarf auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Verwendung des Schritt-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Menge der Zeit zu variieren, die bei einer Inkrementierung oder Dekrementierung übersprungen wird (zum Beispiel, wenn die Zeit mit den kleinen Pfeil-Widgets um jeweils 10 Minuten verschoben wird).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Bei diesem Standard zeigen die meisten Benutzeroberflächen der User-Agents Stunden und Minuten, aber keine Sekunden an. Wenn das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut mit einem anderen numerischen Wert als einem Wert, der durch `60` teilbar ist, eingeschlossen wird, werden Sekunden in der Benutzeroberfläche hinzugefügt, sofern der `min`- oder `max`-Wert nicht bereits dazu geführt hat, dass die Sekunden sichtbar sind.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des Benutzeragenten generell nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert eine gültige Zeitzeichenfolge ist, da er möglicherweise eine leere Zeichenfolge (`""`) ist, was erlaubt ist.

### Festlegen von maximalen und minimalen Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um gültige Zeiten zu beschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir eine Mindestzeit auf `12:00` und eine Höchstzeit auf `18:00`:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generierten Inhaltsicon an einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig angesehen.

#### Min und Max über Mitternacht hinweg

Durch das Setzen eines [`min`](/de/docs/Web/HTML/Element/input#min)-Attributs, das größer ist als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut, wird der gültige Zeitbereich um Mitternacht herum fortgeführt und ein gültiger Zeitbereich erstellt. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit zwingend erforderlich zu machen. Browser zeigen einen Fehler an, wenn versucht wird, eine Zeit außerhalb der gesetzten Grenzen oder ein leeres Eingabefeld zu übermitteln.

Sehen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten gesetzt und auch das Feld als erforderlich gekennzeichnet:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Versuchen Sie es nun selbst mit dem Beispiel:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, die HTML zu ändern, um die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn fehlerhaft formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zum Zeitauswählen mit dem nativen Picker, der mit `<input type="time">` erstellt wird:

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
  <span class="validity"></span
```

### CSS

```css
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

### Ergebnis

{{ EmbedLiveSample('Examples', 600, 140) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Element/input#value">Wert</a></strong></td>
      <td>Ein String, der eine Zeit repräsentiert, oder leer.</td>
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
      <td><strong>Methode</strong></td>
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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeit-Picker-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilitätstabelle der CSS-Eigenschaften für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
