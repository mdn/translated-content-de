---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`time`** erstellen Eingabefelder, die es dem Benutzer erleichtern, eine Uhrzeit (Stunden und Minuten und optional Sekunden) einzugeben.

Während das Erscheinungsbild der Benutzeroberfläche der Steuerelemente auf dem Browser und Betriebssystem basiert, sind die Funktionen die gleichen. Der Wert ist immer eine im 24-Stunden-Format formatierte Zeit `HH:mm` oder `HH:mm:ss`, mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Festlegen des Wertattributs

Sie können einen Standardwert für die Eingabe festlegen, indem Sie beim Erstellen des `<input>`-Elements einen gültigen Zeitwert im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, so wie:

```html
<label for="appt-time">Wählen Sie eine Terminzeit: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Festlegen des Werts mit JavaScript

Sie können den Zeitwert auch mit JavaScript über die {{domxref("HTMLInputElement")}} `value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Zeitwertformat

Der `value` des `time`-Inputs ist immer im 24-Stunden-Format, das führende Nullen enthält: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf der Locale des Benutzers (oder des Benutzers) ausgewählt wird. Wenn die Zeit Sekunden enthält (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), lautet das Format immer `HH:mm:ss`. Sie können mehr über das Format des Zeitwerts erfahren, der von diesem Eingabetyp verwendet wird, in [Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#time_strings).

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Uhrzeit eingeben und sehen, wie sie sich danach ändert.

Zuerst ein Blick auf das HTML. Dies ist einfach genug mit dem Label und der Eingabe wie zuvor gesehen, aber mit der Hinzufügung eines {{HTMLElement("p")}}-Elements mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

```html
<form>
  <label for="startTime">Startzeit: </label>
  <input type="time" id="startTime" />
  <p>
    Wert der <code>time</code>-Eingabe:
    <code>"<span id="value">n/a</span>"</code>.
  </p>
</form>
```

Der JavaScript-Code fügt der Zeiteingabe Code hinzu, um das {{domxref("Element/input_event", "input")}}-Ereignis zu überwachen, das jedes Mal ausgelöst wird, wenn sich der Inhalt eines Eingabeelements ändert. Wenn dies geschieht, werden die Inhalte des `<span>` durch den neuen Wert des Eingabeelements ersetzt.

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

Wenn ein Formular mit einer `time`-Eingabe abgeschickt wird, wird der Wert kodiert, bevor er in den Formulardaten enthalten wird. Der Formulardateneintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm`, oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen aller {{HTMLElement("input")}}-Elemente bieten Zeiteingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder von vorne beginnen. Beispielsweise bedeutet das Festlegen eines `min` von `14:00` und eines `max` von `2:00`, dass die zulässigen Zeitwerte um 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag laufen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [Making min and max cross midnight](#min_und_max_über_mitternacht_setzen) dieses Artikels.

### list

Der Wert des list-Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Die {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen einbezogen. Die angegebenen Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein Zeichenfolgenwert, der die späteste akzeptierte Zeit angibt, im oben beschriebenen [Zeitwertformat](#zeitwertformat) angegeben. Wenn die angegebene Zeichenfolge keine gültige Zeit ist, wird kein Maximalwert gesetzt.

### min

Ein Zeichenfolgenwert, der die früheste akzeptierte Zeit angibt, im zuvor beschriebenen [Zeitwertformat](#zeitwertformat). Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert gesetzt.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Der `value` kann jedoch weiterhin durch direktes Festlegen der {{domxref("HTMLInputElement")}} `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen Attribut `readonly`.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gehalten werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Basis für Schritte ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) sonst und ein geeigneter Standardwert, falls keiner dieser angegeben ist) sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt vorausgesetzt wird, und jeder Wert ist erlaubt (ausgenommen andere Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn zwei gleich nahe Optionen bestehen.

Für `time`-Eingaben wird der Wert des `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) angibt.

Wenn `any` als Wert für `step` festgelegt ist, werden die Standard-60 Sekunden verwendet und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendungen von Zeit

Die einfachste Verwendung von `<input type="time">` umfasst eine grundlegende Kombination aus `<input>`- und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="appt-time">Wählen Sie eine Terminzeit: </label>
  <input id="appt-time" type="time" name="appt-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuern der Eingabegröße

`<input type="time">` unterstützt keine Attributgrößenanpassung wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr die gleiche Anzahl von Zeichen haben. Sie müssen sich auf [CSS](/de/docs/Web/CSS) für Größenanforderungen verlassen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Zeitspanne zu variieren, die bei jeder Inkrementierung oder Dekrementierung der Zeit übersprungen wird (zum Beispiel, damit die Zeit um 10 Minuten auf einmal vorwärts springt, wenn man auf die kleinen Pfeilwidgets klickt).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie inkrementieren möchten; der Standardwert beträgt 60 Sekunden. Da dies der Standard ist, zeigen die meisten Benutzeroberflächen der Benutzeragenten Stunden und Minuten, aber keine Sekunden an. Das Einbeziehen des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem anderen numerischen Wert als ein durch `60` teilbarer Wert fügt Sekunden der Benutzeroberfläche hinzu, wenn der `min`- oder `max`-Wert nicht bereits die Sichtbarkeit der Sekunden verursacht hat.

```html
<form>
  <label for="appt-time">Wählen Sie eine Terminzeit: </label>
  <input id="appt-time" type="time" name="appt-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt anzugeben, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, zum Beispiel 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung auf die eingegebenen Werte an, abgesehen davon, dass die Benutzeroberfläche des Benutzeragenten im Allgemeinen keine andere Eingabe als einen Zeitwert zulässt. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert eine richtige Zeitzeichenfolge ist, da sie möglicherweise eine leere Zeichenfolge (`""`) ist, die erlaubt ist.

### Maximale und minimale Zeiten einstellen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir eine Mindestzeit von `12:00` und eine Höchstzeit von `18:00`:

```html
<form>
  <label for="appt-time">
    Wählen Sie eine Terminzeit (Öffnungszeiten 12:00 bis 18:00):
  </label>
  <input id="appt-time" type="time" name="appt-time" min="12:00" max="18:00" />
  <span class="validity"></span>
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist oder nicht. Wir fügen ein Icon als generiertes Inhaltssymbol auf einem {{htmlelement("span")}} neben der Eingabe hinzu.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieses Bereichs werden als ungültig angegeben.

#### Min und Max über Mitternacht setzen

Durch Festlegen eines [`min`](/de/docs/Web/HTML/Element/input#min)-Attributs, das größer ist als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut, wird der gültige Zeitbereich um Mitternacht verschoben, um einen gültigen Zeitbereich zu erzeugen. Diese Funktion wird von keinem anderen Eingabetyp unterstützt.

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // <input type=time> umgekehrter Bereich unterstützt
} else {
  // <input type=time> umgekehrter Bereich nicht unterstützt
}
```

### Zeiten erforderlich machen

Darüber hinaus können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit zu einer Pflicht zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit einzureichen, die außerhalb der festgelegten Grenzen liegt oder ein leeres Zeitfeld.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstzeiten festgelegt und das Feld auch zu einer Pflicht gemacht:

```html
<form>
  <div>
    <label for="appt-time">
      Wählen Sie eine Terminzeit (Öffnungszeiten 12:00 bis 18:00):
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
    <input type="submit" value="Formular absenden" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, die HTML-Anpassungen vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie gänzlich zu entfernen. Auch ist es möglich für jemanden, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu übermitteln. Wenn Ihr serverseitiger Code es versäumt, die empfangenen Daten zu validieren, könnte es zu einem Desaster führen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben und so weiter).

## Beispiele

In diesem Beispiel erstellen wir ein Interface-Element zur Auswahl der Zeit mit dem nativen Picker, der mit `<input type="time">` erstellt wird:

### HTML

```html
<form>
  <label for="appt-time">
    Wählen Sie eine Terminzeit (Öffnungszeiten 12:00 bis 18:00):
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
      <td>Eine Zeichenfolge, die eine Zeit darstellt, oder leer.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        und
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.
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

## Kompatibilität von Browsern

{{Compat}}

## Siehe auch

- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [`<input type="month">`](/de/docs/Web/HTML/Element/input/month)
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation {{domxref("HTMLInputElement")}}
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Date and Time picker tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
