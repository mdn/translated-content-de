---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die den Benutzer bequem eine Uhrzeit (Stunden und Minuten und optional Sekunden) eingeben lassen.

Während das Erscheinungsbild der Benutzeroberfläche der Steuerung vom Browser und Betriebssystem abhängt, sind die Funktionen gleich. Der Wert ist immer eine im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Uhrzeit, mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Festlegen der value-Eigenschaft

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements eine gültige Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, so zum Beispiel:

```html
<label for="appt-time">Choose an appointment time: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Festlegen des Wertes mit JavaScript

Sie können den Zeitwert auch in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwerts

Der `value` des `time`-Eingabefeldes ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Locale des Benutzers (oder durch den Benutzeragenten) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributes)), ist das Format immer `HH:mm:ss`. Weitere Informationen über das Format des Zeitwerts, der von diesem Eingabetyp verwendet wird, finden Sie in [Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert des Zeiteingabefeldes sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich anschließend ändert.

Erstens ein Blick auf das HTML. Es ist einfach genug, mit dem Label und der Eingabe, wie wir es bereits gesehen haben, aber mit der Ergänzung eines {{HTMLElement("p")}}-Elements mit einem {{HTMLElement("span")}}, um den Wert des `time`-Eingabefeldes anzuzeigen:

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

Der JavaScript-Code fügt dem Zeiteingabe-Feld Code hinzu, um auf das [`input`](/en-US/docs/Web/API/Element/input_event)-Ereignis zu lauschen, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies passiert, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einem `time`-Eingabefeld übermittelt wird, wird der Wert codiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributes)).

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Anders als bei vielen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder auf den Anfang zurückgesetzt werden. Wenn Sie beispielsweise ein `min` von `14:00` und ein `max` von `2:00` angeben, sind die zulässigen Zeitwerte von 14:00 Uhr, gehen durch Mitternacht zum nächsten Tag und enden um 2:00 Uhr. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht hinweg machen](#min_und_max_über_mitternacht_hinweg_machen) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Der {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste akzeptable Uhrzeit angibt, angegeben im oben beschriebenen [Zeitwertformat](#format_des_zeitwerts). Wenn der angegebene String keine gültige Uhrzeit ist, wird kein Höchstwert gesetzt.

### min

Ein String, der die früheste akzeptable Uhrzeit angibt, angegeben im vorher beschriebenen [Zeitwertformat](#format_des_zeitwerts). Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Mindestwert gesetzt.

### readonly

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch direkt durch JavaScript-Code, der die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) festlegt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen auch das readonly-Attribut angegeben ist.

### step

Das step-Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Übertreten ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende Zahlenwert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) anzeigt.

Wenn `any` als Wert für `step` festgelegt ist, werden die standardmäßigen 60 Sekunden verwendet und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendungen von Zeit

Die einfachste Verwendung von `<input type="time">` beinhaltet eine grundlegende `<input>`- und {{htmlelement("label")}}-Element-Kombination, wie unten gezeigt:

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr die gleiche Anzahl von Zeichen haben. Sie müssen für Größenanforderungen auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Verwendung des step-Attributes

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Zeiteinheit zu variieren, die bei jedem Erhöhen oder Verringern der Zeit gesprungen wird (zum Beispiel, damit die Zeit in 10-Minuten-Schritten beim Klicken auf die kleinen Pfeile bewegt wird).

Es nimmt einen ganzzahligen Wert, der die Anzahl der Sekunden bestimmt, die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Mit diesem Standard zeigen die meisten Benutzeragenten-Zeiten-Benutzeroberflächen Stunden und Minuten, aber keine Sekunden an. Durch die Angabe des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem anderen numerischen Wert als einem Wert, der durch `60` teilbar ist, werden Sekunden zur Benutzeroberfläche hinzugefügt, wenn der `min`- oder `max`-Wert nicht bereits die Sekunden sichtbar gemacht hat.

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, z. B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des Benutzeragenten im Allgemeinen nicht zulässt, dass Sie etwas anderes als eine Zeit eintragen. Dies ist hilfreich, jedoch können Sie sich nicht vollständig darauf verlassen, dass der Wert eine korrekte Zeitzeichenfolge ist, da er möglicherweise eine leere Zeichenfolge (`""`) ist, die zulässig ist.

### Festlegen maximaler und minimaler Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00` fest:

```html
<form>
  <label for="appt-time">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </label>
  <input id="appt-time" type="time" name="appt-time" min="12:00" max="18:00" />
  <span class="validity"></span>
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltssymbol an einem {{htmlelement("span")}} neben dem Eingabefeld hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 Uhr als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig gekennzeichnet.

#### Min und max über Mitternacht hinweg machen

Durch das Festlegen eines [`min`](/de/docs/Web/HTML/Element/input#min)-Attributes, das größer ist als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut, reicht der gültige Zeitbereich über Mitternacht hinaus, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zudem können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und auch das Feld erforderlich gemacht:

```html
<form>
  <div>
    <label for="appt-time">
      Choose an appointment time (opening hours 12:00 to 18:00):
    </label>
    <input
      id="appt-time"
      type="time"
      name="appt-time"
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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach, dass jemand Anpassungen am HTML vornimmt, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn Daten in falschem Format übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Zeitauswahl mithilfe des nativen Pickers, der mit `<input type="time">` erstellt wird:

### HTML

```html
<form>
  <label for="appt-time">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </label>
  <input
    id="appt-time"
    type="time"
    name="appt-time"
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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Anleitung zur Date- und Time-Picker-Nutzung](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilitätstabelle für CSS-Eigenschaften von Formularelementen](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
