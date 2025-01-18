---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 84f6af2d3b9779b4168e9c3265e8941531155823
---

{{HTMLSidebar}}

Eingabefelder des Typs **`time`** bei {{htmlelement("input")}}-Elementen sind dafür konzipiert, es dem Benutzer zu erleichtern, eine Zeit (Stunden und Minuten, optional auch Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements vom Browser und Betriebssystem abhängt, sind die Funktionen identisch. Der Wert ist immer eine im 24-Stunden-Format formatierte Zeit `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Oberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Setzen des value-Attributes

Sie können einen Standardwert für die Eingabe festlegen, indem Sie einen gültigen Zeitpunkt im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut beim Erstellen des `<input>`-Elements angeben, wie folgt:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Setzen des Werts mit JavaScript

Sie können den Zeitwert auch mithilfe der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript setzen und abrufen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwertes

Der `value` des `time`-Eingabefelds liegt immer im 24-Stunden-Format mit führenden Nullen vor: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Spracheinstellung des Benutzers (oder des Benutzeragents) ausgewählt wird. Wenn die Zeit Sekunden beinhaltet (siehe [Verwendung des step-Attributes](#verwendung_des_step-attributes)), ist das Format immer `HH:mm:ss`. Weitere Informationen über das Zeitformat, das von diesem Eingabetyp verwendet wird, finden Sie unter [Time strings](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sich der Wert danach ändert.

Zunächst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe ein und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Wenn ein Formular mit einer `time`-Eingabe gesendet wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Dateneintrag eines Formulars für eine Zeiteingabe hat immer die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden eingeschlossen sind (siehe [Verwendung des step-Attributes](#verwendung_des_step-attributes)).

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte eine **periodische Domäne**, das bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder am Anfang beginnen. Zum Beispiel bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte um 14:00 Uhr beginnen, über Mitternacht zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [making min and max cross midnight](#mindest-_und_höchstwert_über_mitternacht_hinweg_setzen) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht kompatibel mit dem [`type`](/de/docs/Web/HTML/Element/input#type) sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste zu akzeptierende Zeit angibt, angegeben im selben [Zeitwertformat](#format_des_zeitwertes) wie oben beschrieben. Wenn der angegebene String keine gültige Zeit ist, wird kein Höchstwert gesetzt.

### min

Ein String, der die früheste zu akzeptierende Zeit angibt, angegeben im zuvor beschriebenen [Zeitwertformat](#format_des_zeitwertes). Wenn der angegebene Wert kein gültiger Zeit-String ist, wird kein Mindestwert gesetzt.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code direkt per Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Ausgangspunkt für das Stufen ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value), und einem geeigneten Standardwert, falls keine dieser Optionen angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Stufen impliziert wird und jeglicher Wert erlaubt ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stufenkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende Zahlenwert in Millisekunden vorliegt). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) entspricht.

Wenn `any` als Wert für `step` gesetzt ist, werden die standardmäßigen 60 Sekunden verwendet und der Sekundenwert wird nicht in der Benutzeroberfläche angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendung von Zeit

Die grundlegendste Verwendung von `<input type="time">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Elementen, wie unten zu sehen:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr gleich lang sind. Sie müssen hierfür auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Verwendung des step-Attributes

Mit dem [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut können Sie den Zeitabstand variieren, wann immer die Zeit erhöht oder verringert wird (zum Beispiel, damit sich die Zeit in 10-Minuten-Schritten bewegt, wenn Sie auf die kleinen Pfeilsymbole klicken).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, die Sie inkrementieren möchten; der Standardwert sind 60 Sekunden. Bei diesem Standard zeigt die Benutzeroberfläche der meisten Benutzeragenten Stunden und Minuten, aber keine Sekunden an. Das Hinzufügen des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem beliebigen numerischen Wert, der nicht durch `60` teilbar ist, fügt Sekunden in die Benutzeroberfläche ein, falls nicht bereits `min` oder `max` deren Sichtbarkeit verursacht haben.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, wie z.B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, außer dass die Benutzeroberfläche des Benutzeragenten normalerweise nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert ein korrekter Zeit-String ist, da es sich um einen leeren String (`""`) handeln könnte, was zulässig ist.

### Festlegen von maximalen und minimalen Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00`:

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

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-Eigenschaften von CSS, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein als erzeugter Inhalt erstelltes Symbol in einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

#### Mindest- und Höchstwert über Mitternacht hinweg setzen

Indem Sie ein [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut setzen, wird der gültige Zeitbereich um Mitternacht gewickelt, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

### Zeiten als erforderlich markieren

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit als obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt oder wenn das Zeitfeld leer ist.

Betrachten wir ein Beispiel; hier haben wir Mindest- und Höchstzeiten festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen an dem HTML vorzunehmen, die es jemandem ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Problemen kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ und so weiter).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Auswahl der Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wurde:

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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Leitfaden für Datums- und Zeitwähler](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
