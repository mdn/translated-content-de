---
title: Wert des HTML-Attributs `<input type="time">`
short-title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{htmlelement("input")}}-Elemente vom Typ **`time`** erzeugen Eingabefelder, in die Benutzer einfach eine Uhrzeit (Stunden und Minuten, optional auch Sekunden) eingeben können.

Das Erscheinungsbild des Steuerelements hängt vom Browser und Betriebssystem ab, seine Funktionen sind jedoch gleich. Der Wert ist immer eine Uhrzeit im 24-Stunden-Format `HH:mm` oder `HH:mm:ss` mit führenden Nullen, unabhängig vom Eingabeformat der Benutzeroberfläche.

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

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Eingabefelder vom Typ `time` die folgenden Attribute.

> [!NOTE]
> Anders als viele Datentypen haben Uhrzeitwerte einen **periodischen Wertebereich**: Nach dem höchstmöglichen Wert beginnt der Wertebereich wieder von vorn. Wenn Sie beispielsweise `min` auf `14:00` und `max` auf `2:00` setzen, beginnen die zulässigen Uhrzeiten um 14:00 Uhr, reichen über Mitternacht hinaus und enden am nächsten Tag um 02:00 Uhr. Weitere Informationen finden Sie im Abschnitt [Zeitbereich über Mitternacht hinweg festlegen](#zeitbereich_über_mitternacht_hinweg_festlegen).

### list

Der Wert des Attributs `list` ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements im selben Dokument. Das {{HTMLElement("datalist")}} stellt eine Liste vordefinierter Werte bereit, die Benutzern für dieses Eingabefeld vorgeschlagen werden. Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht als Optionen vorgeschlagen. Die bereitgestellten Werte sind Vorschläge, keine Vorgaben: Benutzer können einen Wert aus der Liste auswählen oder einen anderen Wert eingeben.

### max

Eine Zeichenfolge, die die späteste zulässige Uhrzeit angibt, und zwar im oben beschriebenen [Uhrzeitformat](#format_des_uhrzeitwerts). Ist die angegebene Zeichenfolge keine gültige Uhrzeit, wird kein Höchstwert festgelegt.

### min

Eine Zeichenfolge, die die früheste zulässige Uhrzeit im zuvor beschriebenen [Uhrzeitformat](#format_des_uhrzeitwerts) angibt. Ist der angegebene Wert keine gültige Uhrzeitzeichenfolge, wird kein Mindestwert festgelegt.

### readonly

Ein boolesches Attribut, das – sofern vorhanden – festlegt, dass Benutzer das Feld nicht bearbeiten können. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da für ein schreibgeschütztes Feld kein Wert vorgeschrieben sein kann, hat `required` keine Wirkung auf Eingabefelder, für die auch das Attribut `readonly` angegeben ist.

### step

Das Attribut `step` ist eine Zahl, die die Schrittweite festlegt, der der Wert entsprechen muss, oder der unten beschriebene besondere Wert `any`. Gültig sind nur Werte, die vom Ausgangswert aus um eine ganzzahlige Anzahl von Schritten abweichen. Der Ausgangswert ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (`00:00:00`), falls keines von beiden angegeben ist.

Bei Eingabefeldern vom Typ `time` wird `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die dem 1000-Fachen des `step`-Werts entspricht (der zugrunde liegende Zahlenwert wird in Millisekunden angegeben). Der Standardwert ist 60, also 1 Minute.

Der Zeichenfolgenwert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern keine anderen Einschränkungen wie [`min`](#min) und [`max`](#max) gelten. In der Praxis hat er bei Eingabefeldern vom Typ `time` dieselbe Wirkung wie `60`, da die Auswahloberfläche in diesem Fall nur ganze Minuten zur Auswahl anbietet.

> [!NOTE]
> Wenn die eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, darf der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden. Sind zwei Werte gleich nahe, wird der größere Wert bevorzugt.

## Validierung

Standardmäßig wird bei `<input type="time">` keine Validierung eingegebener Werte durchgeführt. Allerdings lässt die Oberfläche des User Agents in der Regel nur die Eingabe einer Uhrzeit zu. Das ist hilfreich, aber Sie können sich nicht vollständig darauf verlassen, dass der Wert eine gültige Uhrzeitzeichenfolge ist: Auch eine leere Zeichenfolge (`""`) ist zulässig. Beispiele für die Validierung mithilfe der Attribute `min`, `max`, `step` und `required` finden Sie im Abschnitt [Höchst- und Mindestzeiten festlegen](#höchst-_und_mindestzeiten_festlegen).

## Beispiele

### Grundlegende Verwendung von time

Die einfachste Verwendung von `<input type="time">` besteht aus einer Kombination eines `<input>`- und eines {{htmlelement("label")}}-Elements:

```html
<label for="appointment-time">Choose an appointment time: </label>
<input id="appointment-time" type="time" name="appointment-time" />
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Eine Oberfläche zur Auswahl einer Uhrzeit erstellen

In diesem Beispiel erstellen wir ein Oberflächenelement zur Auswahl einer Uhrzeit mit dem nativen Auswahlsteuerelement von `<input type="time">`:

```html
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

{{ EmbedLiveSample('creating a time picker interface', 600, 140) }}

### Größe des Eingabefelds festlegen

`<input type="time">` unterstützt keine Attribute zur Größenfestlegung wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size), da Uhrzeiten immer ungefähr gleich viele Zeichen lang sind. Verwenden Sie für die Größenfestlegung [CSS](/de/docs/Web/CSS).

### Das Attribut value festlegen

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie beim Erstellen des `<input>`-Elements im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) eine gültige Uhrzeit angeben:

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

Sie können den Uhrzeitwert auch mit JavaScript über die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format des Uhrzeitwerts

Der `value` eines `time`-Eingabefelds liegt unabhängig vom Eingabeformat immer im 24-Stunden-Format mit führenden Nullen vor: `HH:mm`. Das Eingabeformat wird wahrscheinlich anhand der Spracheinstellung des Benutzers (oder durch den User Agent) gewählt. Wenn die Uhrzeit Sekunden enthält (siehe [Das Attribut step verwenden](#das_attribut_step_verwenden)), lautet das Format immer `HH:mm:ss`. Weitere Informationen zum Format des von diesem Eingabetyp verwendeten Uhrzeitwerts finden Sie unter [Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#time_strings).

Im folgenden Beispiel können Sie eine Uhrzeit eingeben und anschließend sehen, wie sich der Wert des Eingabefelds ändert.

Zunächst der HTML-Code: Wir fügen ein Label und ein Eingabefeld sowie ein {{HTMLElement("p")}}-Element mit einem {{HTMLElement("span")}} hinzu, um den Wert des `time`-Eingabefelds anzuzeigen:

```html
<label for="startTime">Start time: </label>
<input type="time" id="startTime" />
<p>
  Value of the <code>time</code> input:
  <code>"<span id="value">n/a</span>"</code>.
</p>
```

Der JavaScript-Code überwacht das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis des Uhrzeit-Eingabefelds, das bei jeder Änderung seines Inhalts ausgelöst wird. In diesem Fall wird der Inhalt des `<span>` durch den neuen Wert des Eingabefelds ersetzt.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

Wenn ein Formular mit einem `time`-Eingabefeld abgesendet wird, wird dessen Wert codiert, bevor er in die Formulardaten aufgenommen wird. Der Formulardateneintrag für ein Uhrzeit-Eingabefeld hat immer die Form `name=HH%3Amm` oder, wenn Sekunden enthalten sind, `name=HH%3Amm%3Ass` (siehe [Das Attribut step verwenden](#das_attribut_step_verwenden)).

### Das Attribut step verwenden

Mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) können Sie festlegen, um wie viel sich die Uhrzeit bei jeder Erhöhung oder Verringerung ändert – beispielsweise um jeweils 10 Minuten, wenn auf die kleinen Pfeilschaltflächen geklickt wird.

Das Attribut erwartet eine ganze Zahl, die die Schrittweite in Sekunden angibt; der Standardwert beträgt 60 Sekunden. Bei diesem Standardwert zeigen die meisten Uhrzeitoberflächen von User Agents Stunden und Minuten, aber keine Sekunden an. Wenn das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) einen Zahlenwert enthält, der nicht durch `60` teilbar ist, werden Sekunden in der Benutzeroberfläche angezeigt, sofern sie nicht bereits aufgrund des `min`- oder `max`-Werts sichtbar sind.

```html
<label for="appointment-time">Choose an appointment time: </label>
<input id="appointment-time" type="time" name="appointment-time" step="2" />
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

Um Minuten oder Stunden als Schrittweite festzulegen, geben Sie deren Anzahl in Sekunden an, beispielsweise 120 für 2 Minuten oder 7200 für 2 Stunden.

### Höchst- und Mindestzeiten festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die Uhrzeiten einschränken, die Benutzer auswählen dürfen. Im folgenden Beispiel legen wir `12:00` als früheste und `18:00` als späteste Uhrzeit fest:

```html
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
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Hier ist der im obigen Beispiel verwendete CSS-Code. Wir verwenden die CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um das Eingabefeld abhängig davon zu gestalten, ob sein aktueller Wert gültig ist. Neben dem Eingabefeld fügen wir einem {{htmlelement("span")}} ein Symbol als generierten Inhalt hinzu.

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

Das Ergebnis:

- Nur Uhrzeiten zwischen 12:00 und 18:00 gelten als gültig; Uhrzeiten außerhalb dieses Bereichs werden als ungültig gekennzeichnet.

#### Zeitbereich über Mitternacht hinweg festlegen

Wenn Sie das Attribut [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) auf einen Wert setzen, der größer ist als der Wert des Attributs [`max`](/de/docs/Web/HTML/Reference/Elements/input#max), erstreckt sich der gültige Zeitbereich über Mitternacht. Kein anderer Eingabetyp unterstützt diese Funktion.

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

### Die Eingabe einer Uhrzeit verpflichtend machen

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie außerdem die Eingabe einer Uhrzeit verpflichtend machen. Browser zeigen einen Fehler an, wenn Sie versuchen, eine Uhrzeit außerhalb des festgelegten Bereichs oder ein leeres Uhrzeitfeld abzusenden.

Im folgenden Beispiel haben wir eine früheste und eine späteste Uhrzeit festgelegt und das Feld als erforderlich markiert:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Wenn Sie versuchen, das Formular mit einer unvollständigen Uhrzeit (oder einer Uhrzeit außerhalb des festgelegten Bereichs) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel aus:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass eingegebene Daten das richtige Format haben. Es ist sehr einfach, den HTML-Code so zu ändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem können die HTML-Seite vollständig umgangen und Daten direkt an Ihren Server gesendet werden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können falsch formatierte Daten (oder zu große Daten, Daten des falschen Typs und Ähnliches) schwerwiegende Folgen haben.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/de/docs/Web/HTML/Reference/Elements/input#value">Wert</a></strong></td>
      <td>Eine Zeichenfolge, die eine Uhrzeit darstellt, oder eine leere Zeichenfolge.</td>
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
- Das allgemeine {{HTMLElement("input")}}-Element und die zu seiner Bearbeitung verwendete Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zu Auswahlsteuerelementen für Datum und Uhrzeit](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
