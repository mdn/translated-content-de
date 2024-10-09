---
title: <input type='time'>
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die entworfen wurden, um dem Benutzer das einfache Eingeben einer Uhrzeit (Stunden und Minuten, optional auch Sekunden) zu ermöglichen.

Obwohl das Erscheinungsbild der Benutzeroberfläche des Steuerelements vom Browser und Betriebssystem abhängt, bleiben die Funktionen gleich. Der Wert ist stets eine im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Zeit mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Den Wertattribut festlegen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine gültige Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut beim Erstellen des `<input>`-Elements angeben, wie folgt:

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

Sie können den Zeitwert auch in JavaScript über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` des `time`-Eingabefelds ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf dem Ländercode des Benutzers (oder durch den User-Agent) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Mehr über das Format des von diesem Eingabetyp verwendeten Zeitwerts erfahren Sie unter [Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeitangabe sehen, indem Sie eine Zeit eingeben und beobachten, wie sich der Wert danach ändert.

Zuerst ein Blick auf das HTML. Dies ist einfach genug, mit der Beschriftung und Eingabe, wie wir es vorher gesehen haben, aber mit der Hinzufügung eines {{HTMLElement("p")}}-Elements mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu beobachten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` mit dem neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular, das eine `time`-Eingabe enthält, abgeschickt wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den gemeinsamen Attributen aller {{HTMLElement("input")}}-Elemente bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte eine **periodische Domäne**, das heißt, die Werte erreichen den höchstmöglichen Wert und springen dann wieder von vorne. Zum Beispiel bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte um 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag, enden um 2:00 Uhr. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht hinweg festlegen](#min_und_max_über_mitternacht_hinweg_festlegen) dieses Artikels.

### list

Die Werte des Attributs list ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Jegliche Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### max

Ein Zeichenfolgenwert, der die späteste akzeptierte Zeit angibt, angegeben im gleichen [Zeitwertformat](#zeitwertformat) wie oben beschrieben. Wenn die angegebene Zeichenfolge keine gültige Zeit ist, wird kein Maximalwert gesetzt.

### min

Ein Zeichenfolgenwert, der die früheste akzeptierte Zeit angibt, angegeben im [Zeitwertformat](#zeitwertformat) wie zuvor beschrieben. Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert gesetzt.

### readonly

Ein Boolean-Attribut, welches, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die mit der Basis für die Schrittweite ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) ansonsten, und ein entsprechender Standardwert, wenn keiner dieser Werte angegeben wird) übereinstimmen, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schrittfolge impliziert ist und jeder Wert zulässig ist (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweitenkonfiguration entsprechen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) auf den nächsten gültigen Wert runden, wobei bei zwei gleich nahen Optionen Zahlen in positiver Richtung bevorzugt werden.

Für `time`-Eingaben wird der Wert des `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrundeliegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) entspricht.

Wenn `any` als Wert für `step` festgelegt ist, wird das Standardmaß von 60 Sekunden verwendet und der Sekundenwert wird in der UI nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendungen von Zeit

Die einfachste Verwendung von `<input type="time">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer etwa dieselbe Anzahl von Zeichen lang sind. Sie müssen auf [CSS](/de/docs/Web/CSS) für Größeneinstellungen zurückgreifen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Menge an Zeit zu variieren, die bei jedem Inkrement oder Dekrement der Zeit übersprungen wird (zum Beispiel, damit sich die Zeit bei jedem Klick auf die kleinen Pfeil-Widgets um 10 Minuten bewegt).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie inkrementieren möchten; der Standardwert sind 60 Sekunden. Mit dieser Einstellung zeigen die meisten Benutzer-Agent-Zeit-UIs Stunden und Minuten, aber keine Sekunden an. Das Einbeziehen des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem numerischen Wert, der sich nicht durch `60` teilen lässt, fügt der UI Sekunden hinzu, falls `min` oder `max` nicht bereits die Sichtbarkeit der Sekunden verursacht hat.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, wie zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, abgesehen davon, dass die Benutzeroberfläche des Benutzer-Agents im Allgemeinen nicht zulässt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert ein ordnungsgemäßer Zeitstring ist, da es sich um einen leeren String (`""`) handeln kann, was zulässig ist.

### Einstellung von maximalen und minimalen Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine Mindestzeit von `12:00` und eine Maximalzeit von `18:00` fest:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir fügen ein Icon als generiertes Inhaltssymbol auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig gelten; Zeiten außerhalb dieses Bereichs werden als ungültig angesehen.

#### Min und Max über Mitternacht hinweg festlegen

Indem Sie ein [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut festlegen, wird der gültige Zeitbereich über Mitternacht hinweg verlängert, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit verpflichtend zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit außerhalb der festgelegten Grenzen oder ein leeres Zeitfeld einzureichen.

Werfen wir einen Blick auf ein Beispiel; hier haben wir minimale und maximale Zeiten festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Versuchen Sie nun, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, um die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte eine Katastrophe auftreten, wenn falsch formatierte Daten (oder Daten in falscher Größe oder falschem Typ usw.) eingereicht werden.

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Zeitauswahl unter Verwendung des nativen Pickers, der mit `<input type="time">` erstellt wird:

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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation desselben, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeitwahl-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
