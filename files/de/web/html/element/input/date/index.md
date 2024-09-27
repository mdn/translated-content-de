---
title: <input type="date">
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`type="date"`** erzeugen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumauswahleingabe variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, aber _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Uhrzeit-Eingaben.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

## Wert

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird gemäß [Datumsformatierung](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich von dem tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Lokale des Browsers des Benutzers_ formatiert, aber der analysierte `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumwert in JavaScript mit den `value`- und `valueAsNumber`-Eigenschaften des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code sucht das erste {{HTMLElement("input")}}-Element, dessen `type` auf `date` gesetzt ist, und weist ihm den Wert `2017-06-01` (1. Juni 2017) zu. Anschließend wird dieser Wert sowohl in string- als auch in nummerischem Format zurückgelesen.

## Zusätzliche Attribute

Die für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attribute gelten auch für `date`-Eingaben, können jedoch die Darstellung nicht beeinflussen. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `Date`-Eingaben haben folgende zusätzliche Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) danach liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein mögliches Datumsstring im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge **später oder gleich** dem im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) davor liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs kein mögliches Datumsstring im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge **früher oder gleich** dem im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität spezifiziert, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten erläutert wird. Nur Werte, die dem Grundlagenwert für die Schrittweite entsprechen ([`min`](#min) falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value), und ein entsprechender Standardwert, wenn keiner von diesen angegeben ist), sind gültig.

Ein string-Wert von `any` bedeutet, dass keine Schrittweise impliziert ist und jeder Wert erlaubt ist (unter Vorbehalt anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweite-Konfiguration entsprechen, kann der [User Agent](/de/docs/Glossary/user_agent) auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positive Richtung bevorzugen, wenn zwei gleich nah sind.

Bei `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die dem 86.400.000-fachen des `step`-Wertes entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag bedeutet.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat denselben Effekt wie `1` bei `date`-Eingaben.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat unabhängig von der Lokale des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Anwendungen von `<input type="date">`.

### Grundlegende Verwendung von Datum

Die einfachste Verwendung von `<input type="date">` besteht aus einem `<input>` kombiniert mit seinem {{htmlelement("label")}}, wie unten gezeigt:

```html
<form action="https://example.com">
  <label>
    Enter your birthday:
    <input type="date" name="bday" />
  </label>

  <p><button>Submit</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

Dieses HTML sendet das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Maximale und minimale Daten einstellen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die Daten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir ein Mindestdatum auf `2017-04-01` und ein Höchstdatum auf `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahrteile des Textfeldes sind nicht bearbeitbar, und Daten außerhalb des April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die bei jedem Inkrementierungsschritt des Datums übersprungen werden (z.B. um nur Samstage wählbar zu machen).

### Eingabegröße steuern

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) für die Größenanpassung.

## Validierung

Standardmäßig überprüft `<input type="date">` den eingegebenen Wert nur auf sein Format. Die Oberflächen lassen normalerweise nicht zu, dass Sie etwas anderes als ein Datum eingeben — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten einstellen](#maximale_und_minimale_daten_einstellen)), deaktiviert das Formularsteuerungselement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der Grenzen liegt.

Sie können auch das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datumfeldes zwingend zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumfeld einzureichen.

Schauen wir uns ein Beispiel mit Mindest- und Höchstdatum an, und das Feld wurde auch zwingend gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das im obigen Beispiel verwendete CSS. Wir verwenden die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Icon neben der Eingabe basierend darauf hinzuzufügen, ob der aktuelle Wert gültig ist. Wir mussten das Icon auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, weil im Chrome zumindest der erzeugte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestaltet oder gezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnten katastrophale Daten auftreten, die schlecht formatiert, zu groß, vom falschen Typ usw. sind.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswähler mit dem nativen `<input type="date">`-Picker.

### HTML

Das HTML sieht wie folgt aus:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Enter your birthday:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
</form>
```

### CSS

Das CSS sieht wie folgt aus:

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### Ergebnisse

{{EmbedLiveSample('Examples', 600, 100)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#wert">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD-Format darstellt, oder leer
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
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
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
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Datum- und Uhrzeitauswahl-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate in HTML verwendet](/de/docs/Web/HTML/Date_and_time_formats)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
