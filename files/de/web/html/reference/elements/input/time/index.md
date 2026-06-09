---
title: '`<input type="time">` HTML-Attributwert'
short-title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{htmlelement("input")}}-Elemente vom Typ **`time`** erzeugen Eingabefelder, die es dem Benutzer ermöglichen, einfach eine Uhrzeit (Stunden und Minuten, optional auch Sekunden) einzugeben.

Während das Erscheinungsbild der Benutzeroberfläche der Steuerung vom Browser und Betriebssystem abhängt, sind die Funktionen dieselben. Der Wert ist immer ein 24-Stunden-formatierter `HH:mm`- oder `HH:mm:ss`-Zeitwert, mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen anderen Datentypen haben Zeitwerte einen **periodischen Bereich**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder am Anfang beginnen. Wenn Sie beispielsweise ein `min` von `14:00` und ein `max` von `2:00` angeben, bedeutet das, dass die erlaubten Zeitwerte um 14:00 Uhr beginnen, um Mitternacht zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [Min und Max um Mitternacht überschreiten](#min_und_max_um_mitternacht_überschreiten) in diesem Artikel.

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge und keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein Zeichenfolgenwert, der die späteste akzeptierte Uhrzeit angibt, spezifiziert im gleichen [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn die angegebene Zeichenfolge keine gültige Uhrzeit ist, wird kein maximaler Wert festgelegt.

### min

Eine Zeichenfolge, die die früheste akzeptierte Uhrzeit angibt, im zuvor beschriebenen [Zeitwertformat](#zeitwertformat). Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein minimaler Wert festgelegt.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Der `value` kann jedoch weiterhin durch direktes Setzen der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) mit JavaScript geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Step-Basiswert entfernt sind, sind gültig. Der Step-Basiswert ist [`min`](#min), wenn angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (`00:00:00`), wenn keiner angegeben wurde.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben und als eine Anzahl von Millisekunden behandelt, die 1000 mal den `step`-Wert entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute entspricht.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Step impliziert wird und jeder Wert (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)) zulässig ist. In Wirklichkeit hat es denselben Effekt wie `60` für `time`-Eingaben, da in diesem Fall die Picker-Benutzeroberfläche nur die Auswahl ganzer Minuten erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Step-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen Werte in positiver Richtung bevorzugt werden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung für eingegebene Werte an, abgesehen davon, dass die Benutzerschnittstelle des Benutzeragents im Allgemeinen nicht zulässt, dass etwas anderes als ein Zeitwert eingegeben wird. Das ist hilfreich, aber Sie können nicht vollständig darauf vertrauen, dass der Wert eine ordnungsgemäße Zeitzeichenfolge ist, da es eine leere Zeichenfolge (`""`) sein könnte, was erlaubt ist. Für Beispiele zur Eingabevalidierung unter Verwendung der Attribute `min`, `max`, `step` und `required` siehe den Abschnitt [Höchste und niedrigste Zeiten einstellen](#höchste_und_niedrigste_zeiten_einstellen).

## Beispiele

### Grundlegende Anwendungen von time

Die einfachste Verwendung von `<input type="time">` beinhaltet eine grundlegende Kombination aus dem `<input>`- und dem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Erstellen einer Zeitwähler-Oberfläche

In diesem Beispiel erstellen wir ein Oberflächenelement zur Auswahl der Zeit unter Verwendung des nativen Pickers, der mit `<input type="time">` erstellt wurde:

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

{{EmbedLiveSample('creating a time picker interface', 600, 140)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Zeiten immer etwa gleich lang sind. Sie müssen für Größenanforderungen auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Den Wert-Attribut setzen

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut beim Erstellen des `<input>`-Elements einfügen, wie folgt:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{EmbedLiveSample('Setting_the_value_attribute', 600, 60)}}

### Den Wert mit JavaScript setzen

Sie können auch den Zeitwert in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` der `time`-Eingabe ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Locale des Benutzers (oder des Benutzeragents) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des Step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwerts erfahren, das von diesem Eingabetyp verwendet wird, unter [Zeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sie sich danach ändert.

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu achten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, wird der Inhalt des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular mit einer `time`-Eingabe übermittelt wird, wird der Wert codiert, bevor er in die Formulardaten aufgenommen wird. Der Formulardateneintrag für eine Zeiteingabe wird immer in der Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, falls Sekunden eingeschlossen sind (siehe [Verwendung des Step-Attributs](#verwendung_des_step-attributs)).

### Verwendung des Step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Zeitsprünge zu variieren, wann immer die Zeit erhöht oder verringert wird (zum Beispiel, sodass die Zeit in 10-Minuten-Schritten verläuft, wenn Sie auf die kleinen Pfeilsymbole klicken).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden angibt, um die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Bei diesem Standardwert zeigen die Zeiteingabe-Benutzeroberflächen der meisten Benutzeragenten Stunden und Minuten, nicht jedoch Sekunden an. Die Aufnahme des [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attributs mit einem numerischen Wert, der nicht durch 60 teilbar ist, fügt Sekunden zur Benutzeroberfläche hinzu, wenn nicht bereits der `min`- oder `max`-Wert die Sekunden sichtbar gemacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

### Höchste und niedrigste Zeiten einstellen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die vom Benutzer gewählt werden können. Im folgenden Beispiel setzen wir eine minimale Zeit von `12:00` und eine maximale Zeit von `18:00`:

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

{{EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier machen wir Gebrauch von den {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein generiertes Inhaltssymbol auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig bezeichnet.

#### Min und Max um Mitternacht überschreiten

Indem Sie ein [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut festlegen, umgeht der gültige Zeitbereich Mitternacht und erzeugt einen gültigen Zeitbereich. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit zu übermitteln, die außerhalb der festgelegten Grenzen liegt oder ein leeres Zeitfeld umfasst.

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt mit dem Beispiel zu spielen:

{{EmbedLiveSample('Making_times_required', 600, 120)}}

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die eingehenden Daten nicht validiert, könnte eine Katastrophe eintreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ usw.).

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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zu seiner Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Anleitung zum Datum- und Zeitpicker](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
