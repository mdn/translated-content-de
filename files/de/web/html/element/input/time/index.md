---
title: <input type="time">
slug: Web/HTML/Element/input/time
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`time`** erstellen Eingabefelder, die den Nutzer dazu einladen, auf einfache Weise eine Uhrzeit (Stunden und Minuten und optional Sekunden) einzugeben.

Während das Erscheinungsbild der Benutzeroberfläche des Steuerelements vom Browser und Betriebssystem abhängt, sind die Funktionen identisch. Der Wert ist immer eine im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` formatierte Uhrzeit mit führenden Nullen, unabhängig vom Format der Benutzereingabe.

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

### Festlegen des Attributs value

Sie können einen Standardwert für die Eingabe festlegen, indem Sie eine gültige Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribute beim Erstellen des `<input>`-Elements verwenden, wie folgt:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{ EmbedLiveSample('Setting_the_value_attribute', 600, 60) }}

### Festlegen des Werts mit JavaScript

Sie können den Zeitwert auch in JavaScript über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Zeitwerts

Der `value` des `time`-Eingabefelds ist immer im 24-Stunden-Format mit führenden Nullen: `HH:mm`, unabhängig vom Eingabeformat, das wahrscheinlich basierend auf den lokalen Einstellungen des Nutzers (oder vom Benutzeragenten) ausgewählt wird. Wenn die Uhrzeit Sekunden beinhaltet (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)), lautet das Format immer `HH:mm:ss`. Sie können mehr über das Format des von diesem Eingabetyp verwendeten Zeitwerts unter [Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#time_strings) erfahren.

In diesem Beispiel können Sie den Wert der Zeiteingabe sehen, indem Sie eine Uhrzeit eingeben und beobachten, wie sie sich danach ändert.

Zuerst ein Blick auf das HTML. Wir fügen ein Label und eine Eingabe ein und ergänzen ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}}, um den Wert der `time`-Eingabe anzuzeigen:

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

Wenn ein Formular, das eine `time`-Eingabe enthält, übermittelt wird, wird der Wert codiert, bevor er in die Formulardaten aufgenommen wird. Der Formulareintrag für eine Zeiteingabe hat immer die Form `name=HH%3Amm` oder `name=HH%3Amm%3Ass`, wenn Sekunden enthalten sind (siehe [Verwendung des step-Attributs](#verwendung_des_step-attributs)).

## Zusätzliche Attribute

Zusätzlich zu den für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attributen bieten `time`-Eingaben die folgenden Attribute.

> [!NOTE]
> Im Gegensatz zu vielen Datentypen haben Zeitwerte eine **periodische Domäne**, was bedeutet, dass die Werte den höchstmöglichen Wert erreichen und dann wieder zum Anfang zurückkehren. Zum Beispiel bedeutet das Angeben einer `min` von `14:00` und einer `max` von `2:00`, dass die erlaubten Zeitwerte ab 14:00 Uhr beginnen, über Mitternacht bis zum nächsten Tag reichen und um 2:00 Uhr enden. Weitere Informationen finden Sie im Abschnitt [min und max über Mitternacht hinaus festlegen](#min_und_max_über_mitternacht_hinaus_festlegen) in diesem Artikel.

### list

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Das {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Nutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden in den vorgeschlagenen Optionen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### max

Ein String, der die späteste zu akzeptierende Uhrzeit angibt, angegeben im selben [Zeitwertformat](#format_des_zeitwerts) wie oben beschrieben. Wenn der angegebene String keine gültige Uhrzeit ist, wird kein Maximalwert festgelegt.

### min

Ein String, der die früheste zu akzeptierende Uhrzeit angibt, angegeben im im [Zeitwertformat](#format_des_zeitwerts) beschriebenen Format. Wenn der angegebene Wert keine gültige Zeitzeichenfolge ist, wird kein Minimalwert festgelegt.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch direktes Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft durch JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der im Folgenden beschrieben wird. Nur Werte, die mit der Grundlage für das Stepping ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) ansonsten und ein geeigneter Standardwert, falls keiner dieser Werte angegeben wird) übereinstimmen, sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Stepping impliziert ist und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Stepping-Konfiguration übereinstimmen, kann der {{Glossary("user_agent", "user agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn zwei gleich nahe Optionen vorhanden sind.

Für `time`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben ist). Der Standardwert von `step` beträgt 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) entspricht.

Wenn `any` als Wert für `step` festgelegt wird, bleibt der Standardwert von 60 Sekunden erhalten und der Sekundenwert wird in der Benutzeroberfläche nicht angezeigt.

## Verwendung von Zeiteingaben

### Grundlegende Verwendungen von Zeit

Der grundlegendste Einsatz von `<input type="time">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Steuerung der Eingabegröße

`<input type="time">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size), da Zeiten immer ungefähr gleich lang sind. Sie müssen auf [CSS](/de/docs/Web/CSS) für Größenanforderungen zurückgreifen.

### Verwendung des step-Attributs

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Menge der Zeit zu variieren, die bei jedem Erhöhen oder Verringern der Zeit gesprungen wird (zum Beispiel, damit die Zeit in 10-Minuten-Schritten erhöht wird, wenn Sie auf die kleinen Pfeilwidgets klicken).

Es nimmt einen ganzzahligen Wert an, der die Anzahl der Sekunden definiert, um die Sie inkrementieren möchten; der Standardwert beträgt 60 Sekunden. Mit diesem als Standardwert zeigt die Benutzeroberfläche des Benutzeragenten in der Regel Stunden und Minuten, aber keine Sekunden an. Das Einfügen des [`step`](/de/docs/Web/HTML/Element/input#step)-Attributs mit einem numerischen Wert, der nicht durch `60` teilbar ist, fügt Sekunden zur Benutzeroberfläche hinzu, wenn nicht das `min`- oder `max`-Wert bereits dazu geführt hat, dass die Sekunden sichtbar sind.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schritt festzulegen, geben Sie die Anzahl der Minuten oder Stunden in Sekunden an, z. B. 120 für 2 Minuten oder 7200 für 2 Stunden.

## Validierung

Standardmäßig wendet `<input type="time">` keine Validierung von eingegebenen Werten an, außer dass die Benutzeroberfläche des Benutzeragenten im Allgemeinen nicht erlaubt, dass Sie etwas anderes als einen Zeitwert eingeben. Dies ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert ein ordnungsgemäßer Zeitstring ist, da er möglicherweise eine Leerzeichenzeile (`""`) ist, die erlaubt ist.

### Festlegen von maximalen und minimalen Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die gültigen Zeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir eine minimal gültige Zeit von `12:00` und eine maximal gültige Zeit von `18:00`:

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

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir fügen ein Symbol als erzeugtes Inhaltssymbol auf einem {{htmlelement("span")}} neben der Eingabe ein.

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

- Nur Zeiten zwischen 12:00 und 18:00 als gültig angesehen werden; Zeiten außerhalb dieser Spanne werden als ungültig gekennzeichnet.

#### Min und Max über Mitternacht hinaus festlegen

Durch Einstellen eines [`min`](/de/docs/Web/HTML/Element/input#min)-Attributs, das größer ist als das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut, wird der gültige Zeitbereich über Mitternacht herumgehen, um einen gültigen Zeitbereich zu produzieren. Diese Funktionalität wird von keinem anderen Eingabetyp unterstützt.

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

### Zeiten als erforderlich festlegen

Darüber hinaus können Sie das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Zeit obligatorisch zu machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Zeit außerhalb der festgelegten Grenzen oder ein leeres Zeitfeld einzugeben.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Zeiten festgelegt und das Feld auch als erforderlich gekennzeichnet:

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

Wenn Sie versuchen, das Formular mit einer unvollständigen Zeit (oder mit einer Zeit außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie, jetzt mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem erlauben, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu Katastrophen kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, von der falschen Art usw.) übermittelt werden.

## Beispiele

In diesem Beispiel erstellen wir ein Benutzeroberflächenelement zur Wahl der Uhrzeit mit dem nativen Picker, erstellt mit `<input type="time">`:

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
      <td><strong><a href="/de/docs/Web/HTML/Element/input#value">Value</a></strong></td>
      <td>Ein String, der eine Uhrzeit darstellt, oder leer.</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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
- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zu dessen Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Anleitung zum Datum- und Uhrzeit-Picker](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
