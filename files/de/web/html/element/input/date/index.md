---
title: <input type='date'>
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild der Datumsauswahl-Eingabeoberfläche variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, jedoch _nicht_ die Zeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

## Wert

Ein String, der das im Eingabefeld eingegebene Datum darstellt. Das Datum ist entsprechend dem Format von [Datumsstrings](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Spracheinstellung des Browsers des Benutzers_ formatiert, aber das geparste `value` ist immer formatiert als `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value` und `valueAsNumber` abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Anschließend liest er diesen Wert in String- und Zahlenformaten zurück.

## Zusätzliche Attribute

Die gemeinsamen Attribute für alle {{HTMLElement("input")}}-Elemente gelten auch für `date`-Eingaben, können jedoch die Darstellung nicht beeinflussen. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn das in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) danach liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein mögliches Datum im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert ein Datumsstring sein, der **nach oder gleich** dem im `min`-Attribut ist.

### min

Das früheste akzeptierte Datum. Wenn das in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) vorher liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs kein mögliches Datum im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert ein Datumsstring sein, der **vor oder gleich** dem im `max`-Attribut ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gebunden sein muss, oder der besondere Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basisschritt ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert zulässig ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden und bevorzugt positive Zahlen, wenn es zwei gleich nahe Optionen gibt.

Bei `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als Anzahl von Millisekunden betrachtet, die dem `step`-Wert mal 86.400.000 entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was für 1 Tag steht.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat die gleiche Wirkung wie `1` für `date`-Eingaben.

## Verwendung von Date-Eingaben

Datumseingaben bieten eine einfache Schnittstelle zur Auswahl von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Lokalisation des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungen von `<input type="date">`.

### Grundlegende Verwendungen von Date

Die einfachste Verwendung von `<input type="date">` beinhaltet ein `<input>` kombiniert mit seinem {{htmlelement("label")}}, wie unten gesehen:

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

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die vom Benutzer wählbaren Daten einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum auf `2017-04-01` und ein Höchstdatum auf `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — der Monats- und Jahresteil des Textfeldes wird nicht bearbeitbar sein, und Daten außerhalb von April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. um nur Samstage auswählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS), um die Größe zu steuern.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Schnittstellen erlauben im Allgemeinen nicht, dass Sie etwas eingeben, das kein Datum ist — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen zu übermitteln.

Sie können auch das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld zu übermitteln.

Lassen Sie uns ein Beispiel für minimale und maximale Daten betrachten und auch ein Feld erforderlich machen:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Jetzt können Sie das Beispiel ausprobieren:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das im obigen Beispiel verwendete CSS. Wir nutzen die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, weil in Chrome zumindest der generierte Inhalt des Eingabefeldes innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die Client-seitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu ändern oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte eine Katastrophe mit falsch formatierten, zu großen, vom falschen Typ usw. Daten eintreten.

## Beispiele

In diesem Beispiel erstellen wir eine Datumsauswahl mit dem nativen `<input type="date">`-Picker.

### HTML

Das HTML sieht folgendermaßen aus:

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

Das CSS sieht folgendermaßen aus:

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
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD-Format darstellt,
        oder leer
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
- [Datum- und Zeit-Auswahl-Leitfaden](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
