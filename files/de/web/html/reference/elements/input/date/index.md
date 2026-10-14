---
title: HTML-Attributwert von `<input type="date">`
short-title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erzeugen Eingabefelder, in die Benutzer ein Datum eingeben können. Das Erscheinungsbild der Datumsauswahl hängt vom Browser und vom Betriebssystem ab. Der Wert wird auf das Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält Jahr, Monat und Tag, aber _keine_ Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen die Eingabe einer Uhrzeit beziehungsweise von Datum und Uhrzeit.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;date&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Start date:</label>

<input
  type="date"
  id="start"
  name="trip-start"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
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

## Wert

Eine Zeichenfolge, die das im Eingabefeld eingegebene Datum darstellt. Das Datum ist gemäß dem [Format für Datumszeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für das Eingabefeld festlegen, indem Sie im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ein Datum angeben:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value`: Das angezeigte Datum wird _entsprechend der Spracheinstellung des Browsers_ formatiert, während der ausgewertete `value` immer das Format `yyyy-mm-dd` hat.

Sie können den Datumswert in JavaScript über die Eigenschaften `value` und `valueAsNumber` von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) auslesen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code sucht das erste {{HTMLElement("input")}}-Element, dessen `type` den Wert `date` hat, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Anschließend liest er diesen Wert als Zeichenfolge und als Zahl aus.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den [Eingabeattributen](/de/docs/Web/HTML/Reference/Elements/input#attributes), die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützt der Eingabetyp `date` die folgenden Attribute:

### max

Das späteste zulässige Datum. Liegt der im Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach, besteht das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Wenn der Wert des Attributs `max` keine gültige Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element kein maximales Datum.

Wenn sowohl `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge sein, die **später als oder gleich** dem Wert des Attributs `min` ist.

### min

Das früheste zulässige Datum. Liegt der im Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) davor, besteht das Element die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht. Wenn der Wert des Attributs `min` keine gültige Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element kein minimales Datum.

Wenn sowohl `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge sein, die **früher als oder gleich** dem Wert des Attributs `max` ist.

### step

Das Attribut `step` ist eine Zahl, die die Schrittweite angibt, an die sich der Wert halten muss, oder der unten beschriebene Sonderwert `any`. Gültig sind nur Werte, die vom Ausgangswert aus eine ganzzahlige Anzahl von Schritten entfernt sind. Als Ausgangswert dient [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01-01`), wenn keiner der beiden Werte angegeben ist.

Bei Eingabefeldern vom Typ `date` wird `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die dem `step`-Wert multipliziert mit 86.400.000 entspricht (der zugrunde liegende numerische Wert wird in Millisekunden angegeben). Der Standardwert ist 1, was einem Tag entspricht.

Der Zeichenfolgenwert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist (sofern keine anderen Einschränkungen wie [`min`](#min) und [`max`](#max) gelten). Bei Eingabefeldern vom Typ `date` hat dies praktisch dieselbe Wirkung wie `1`, da die Datumsauswahl nur ganze Tage zur Auswahl anbietet.

> [!NOTE]
> Wenn die eingegebenen Daten nicht der festgelegten Schrittweite entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden. Sind zwei Werte gleich weit entfernt, wird dabei der positive Wert bevorzugt.

## Datumseingabefelder verwenden

Datumseingabefelder bieten eine einfache Möglichkeit, ein Datum auszuwählen. Außerdem vereinheitlichen sie das Format der an den Server gesendeten Daten unabhängig von den Spracheinstellungen der Benutzer.

In diesem Abschnitt betrachten wir zunächst einfache und dann komplexere Einsatzmöglichkeiten von `<input type="date">`.

### Einfache Verwendung von date

Die einfachste Verwendung von `<input type="date">` besteht aus einem `<input>` und dem zugehörigen {{htmlelement("label")}}, wie unten gezeigt:

```html
<label>
  Enter your birthday:
  <input type="date" name="bday" />
</label>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

Wenn dieses Eingabefeld Teil eines Formulars ist, das mit der Methode `GET` an `https://example.com` gesendet wird, wird das eingegebene Datum unter dem Schlüssel `bday` übertragen. Daraus ergibt sich beispielsweise eine URL wie `https://example.com/?bday=1955-06-08`.

### Maximales und minimales Datum festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die auswählbaren Daten einschränken. Im folgenden Beispiel legen wir `2017-04-01` als frühestes und `2017-04-30` als spätestes Datum fest:

```html
<label>
  Choose your preferred party date:
  <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
</label>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Dadurch können nur Tage im April 2017 ausgewählt werden. Der Monat und das Jahr lassen sich im Eingabefeld nicht bearbeiten, und Daten außerhalb des April 2017 können in der Datumsauswahl nicht ausgewählt werden.

Mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) können Sie die Anzahl der Tage festlegen, um die das Datum bei jedem Schritt erhöht wird, beispielsweise damit nur Samstage auswählbar sind.

### Größe des Eingabefelds festlegen

`<input type="date">` unterstützt keine Attribute zur Größenfestlegung von Formularelementen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Verwenden Sie dafür vorzugsweise [CSS](/de/docs/Web/CSS).

## Validierung

Standardmäßig überprüft `<input type="date">` einen eingegebenen Wert nur hinsichtlich seines Formats. Die Benutzeroberflächen lassen in der Regel keine Eingabe zu, die kein Datum ist.

Wenn Sie die verfügbaren Daten mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) einschränken (siehe [Maximales und minimales Datum festlegen](#maximales_und_minimales_datum_festlegen)), deaktiviert das Formularsteuerelement ungültige Daten. Wenn Sie versuchen, ein Datum außerhalb des zulässigen Bereichs zu übermitteln, wird ein Fehler angezeigt.

Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie die Eingabe eines Datums verpflichtend machen. Wenn Sie versuchen, ein leeres Datumsfeld zu übermitteln, wird ein Fehler angezeigt.

Betrachten wir ein Beispiel mit einem minimalen und einem maximalen Datum, in dem das Feld außerdem ein Pflichtfeld ist:

```html
<form>
  <label>
    Choose your preferred party date (required, April 1st to 20th):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Submit</button>
  </p>
</form>
```

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum oder einem Datum außerhalb des festgelegten Bereichs zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS aus dem obigen Beispiel. Wir verwenden die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-[Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), um neben dem Eingabefeld ein Symbol anzuzeigen, je nachdem, ob der aktuelle Wert gültig ist. Das Symbol musste auf einem {{htmlelement("span")}} neben dem Eingabefeld platziert werden und nicht auf dem Eingabefeld selbst: Zumindest in Chrome wird der generierte Inhalt des Eingabefelds innerhalb des Formularsteuerelements platziert und kann daher nicht wirkungsvoll gestaltet oder angezeigt werden.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> [!WARNING]
> Die clientseitige Formularvalidierung ist _kein Ersatz_ für die Validierung auf dem Server. HTML lässt sich leicht verändern oder vollständig umgehen, indem Daten direkt an Ihren Server gesendet werden. Wenn Ihr Server die empfangenen Daten nicht validiert, können falsch formatierte, zu große oder vom falschen Typ stammende Daten schwerwiegende Folgen haben.

## Beispiele

In diesem Beispiel erstellen wir eine Datumsauswahl mit der nativen Datumsauswahl von `<input type="date">`.

### HTML

Das HTML sieht so aus:

```html
<div class="nativeDatePicker">
  <label for="bday">Enter your birthday:</label>
  <input type="date" id="bday" name="bday" />
  <span class="validity"></span>
</div>
```

### CSS

Das CSS sieht so aus:

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 600, 100)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die ein Datum im Format YYYY-MM-DD darstellt,
        oder eine leere Zeichenfolge
      </td>
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
        <a href="/de/docs/Web/API/HTMLInputElement/value"><code>value</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/valueAsDate"><code>valueAsDate</code></a>,
        <a href="/de/docs/Web/API/HTMLInputElement/valueAsNumber"><code>valueAsNumber</code></a>
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

- Das allgemeine {{HTMLElement("input")}}-Element und die Schnittstelle zu seiner Bearbeitung, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Tutorial zur Datums- und Uhrzeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
