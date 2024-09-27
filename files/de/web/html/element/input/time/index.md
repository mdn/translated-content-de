---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`time`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, einfach eine Uhrzeit (Stunden und Minuten und optional Sekunden) einzugeben.

Obwohl das Erscheinungsbild der Benutzeroberfläche der Steuerung von Browser und Betriebssystem abhängt, sind die Funktionen identisch. Der Wert ist immer im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Das value-Attribut setzen

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Wert im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einfügen, zum Beispiel:

```html
<label for="appt-time">Choose an appointment time: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Den Wert mit JavaScript setzen

Sie können den Zeitwert auch in JavaScript über die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwert-Format

Der `value` der `time`-Eingabe ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich anhand der Spracheinstellung des Benutzers (oder des Benutzeragents) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), ist das Format immer `HH:mm:ss`. Mehr über das Format des Zeitwerts, der von diesem Eingabetyp verwendet wird, erfahren Sie in [Zeitzeichenfolgen](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Zeit eingeben und anschließend beobachten, wie er sich ändert.

Zuerst ein Blick auf das HTML. Dies ist einfach genug, mit dem Label und der Eingabe, wie wir es schon gesehen haben, aber mit der Hinzufügung eines {{HTMLElement("p")}}-Elements mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um auf das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis zu achten, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einer `time`-Eingabe eingereicht wird, wird der Wert kodiert, bevor er in die Formulardaten aufgenommen wird. Der Formulardateneintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen anderen Datentypen haben Zeitwerte einen **periodischen Wertebereich**, was bedeutet, dass die Werte den höchsten möglichen Wert erreichen und dann wieder am Anfang anfangen. Zum Beispiel bedeutet die Angabe eines `min` von `14:00` und eines `max` von `2:00`, dass die erlaubten Zeitwerte bei 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag gehen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht festlegen](#min_und_max_über_mitternacht_festlegen) dieses Artikels.

### list

Der Wert des List-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste zu akzeptierende Zeit angibt, die im oben beschriebenen [Zeitwertformat](#zeitwert-format) angegeben wird. Wenn der angegebene String keine gültige Zeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die früheste zu akzeptierende Zeit angibt, die im zuvor beschriebenen [Zeitwertformat](#zeitwert-format) angegeben wird. Wenn der angegebene Wert kein gültiger Zeit-String ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code direkt in der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) geändert werden.

> [!NOTE]
> Da ein nur-lesbares Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Ausgangspunkt für die Schritte entsprechen ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Element/input#value), und ein angemessener Standardwert, wenn keiner von beiden angegeben wird), sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Schritte erforderlich sind und jeder Wert erlaubt ist (sofern keine anderen Einschränkungen bestehen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der [Benutzeragent](/de/docs/Glossary/user_agent) auf den nächsten gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn zwei gleich nahe Optionen bestehen.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden vorliegt). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) entspricht.

Wenn `any` als Wert für `step` gesetzt ist, werden die Standard 60 Sekunden verwendet, und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Nutzung von Zeit

Die einfachste Verwendung von `<input type="time">` umfasst eine Kombination aus einem einfachen `<input>` und einem {{htmlelement("label")}}, wie unten zu sehen:

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formular-Größenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr dieselbe Anzahl von Zeichen lang sind. Sie müssen [CSS](/de/docs/Web/CSS) für Größenanforderungen verwenden.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Anzahl der Zeit zu variieren, die bei jeder Erhöhung oder Verringerung der Zeit übersprungen wird (z. B. damit die Zeit in Schritten von 10 Minuten vorwärts und rückwärts bewegt wird, wenn Sie die kleinen Pfeilwidgets anklicken).

Es nimmt einen ganzzahligen Wert, der die Anzahl der Sekunden definiert, die Sie inkrementieren möchten; der Standardwert ist 60 Sekunden. Mit diesem als Standard zeigen die meisten Benutzeragenten-Zeit-UIs Stunden und Minuten, aber keine Sekunden. Die Einbeziehung des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem numerischen Wert, der nicht durch `60` teilbar ist, fügt der Benutzeroberfläche Sekunden hinzu, sofern nicht `min` oder `max` bereits die Sichtbarkeit der Sekunden verursacht haben.

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, z. B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf eingegebene Werte an, außer dass die Benutzeroberfläche des Benutzeragents im Allgemeinen nicht erlaubt, etwas anderes als einen Zeitwert einzugeben. Das ist hilfreich, aber Sie können nicht vollständig darauf vertrauen, dass der Wert ein korrekter Zeitstring ist, da er möglicherweise ein leerer String (`""`) ist, was erlaubt ist.

### Maximale und minimale Zeiten setzen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir eine minimale Zeit von `12:00` und eine maximale Zeit von `18:00`:

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

Hier ist das in dem obigen Beispiel verwendete CSS. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als generiertes Inhaltsicon auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig bezeichnet.

#### min und max über Mitternacht festlegen

Indem Sie ein [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut größer als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut festlegen, wird der gültige Zeitbereich über Mitternacht verlängert, um einen gültigen Zeitbereich zu erzeugen. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

Zusätzlich können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit einzureichen, die außerhalb der festgelegten Grenzen liegt, oder ein leeres Zeitfeld.

Werfen wir einen Blick auf ein Beispiel; hier haben wir minimale und maximale Zeiten festgelegt und auch das Feld erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten eingereicht werden (oder Daten, die zu groß, vom falschen Typ und so weiter sind).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zum Auswählen der Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wird:

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
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeitwähler-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
