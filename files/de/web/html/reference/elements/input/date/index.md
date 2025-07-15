---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: 016f7ecf42cfc0105bcf89e1f6f7fa2752099fdc
---

{{HTMLElement("input")}} Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, ein Datum einzugeben. Die Darstellung der Datumsauswahl-Benutzeroberfläche variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, Monat und Tag, aber _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Uhrzeit und Datum+Uhrzeit-Eingaben.

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

Ein String, der das im Eingabefeld eingegebene Datum repräsentiert. Das Datum wird entsprechend [Datumsformat-Strings](/de/docs/Web/HTML/Guides/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) Attribut festlegen, etwa so:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Ländereinstellung des Browsers des Benutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` auf `date` gesetzt ist, und legt seinen Wert auf `2017-06-01` (1. Juni 2017) fest. Anschließend wird dieser Wert in String- und Zahlenformaten zurückgelesen.

## Zusätzliche Attribute

Die Attribute, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, gelten auch für `date`-Eingaben, beeinflussen aber möglicherweise nicht deren Präsentation. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) danach liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert ein Datum-String **später oder gleich dem** im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) zuvor liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `min`-Attributs kein mögliches Datums-String im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` festgelegt sind, muss dieser Wert ein Datum-String **früher oder gleich dem** im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für den Schritt entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, und einem geeigneten Standardwert, falls keiner dieser Werte angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schritt impliziert ist und jeder Wert erlaubt ist (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich naheliegende Optionen gibt.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben; und wird als Anzahl von Millisekunden behandelt, die 86.400.000 mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag bedeutet.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat dieselbe Wirkung wie `1` für `date`-Eingaben.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Oberfläche zur Auswahl von Daten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Ländereinstellung des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Anwendungen von `<input type="date">`.

### Grundlegende Verwendungen von Datum

Die grundlegendste Verwendung von `<input type="date">` besteht aus einem `<input>`, das mit seinem {{htmlelement("label")}} kombiniert ist, wie unten zu sehen:

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

Dieses HTML übermittelt das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegung maximaler und minimaler Daten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um die vom Benutzer auswählbaren Datumsangaben einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum auf `2017-04-01` und ein Höchstdatum auf `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresabschnitte des Textfelds sind nicht bearbeitbar und Daten außerhalb April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die bei jedem Hochzählen des Datums übersprungen werden (z.B. um nur Samstage wählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) zur Größenänderung davon.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über das Format hinaus. Die Oberflächen lassen es im Allgemeinen nicht zu, dass Sie etwas anderes als ein Datum eingeben — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegung maximaler und minimaler Daten](#festlegung_maximaler_und_minimaler_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen einzureichen.

Sie können auch das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe des Datums obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datum-Feld einzureichen.

Schauen wir uns ein Beispiel mit Mindest- und Höchstdaten an und machen ein Feld erforderlich:

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

Hier ist das CSS aus dem obigen Beispiel. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingang hinzuzufügen, je nachdem, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf ein {{htmlelement("span")}} neben dem Eingang setzen, nicht auf den Eingang selbst, weil zumindest in Chrome der generierte Inhalt des Eingangs innerhalb des Formularkommandos platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Clientseitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu modifizieren oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnten schlecht formatierte, zu große, vom falschen Typ stammende usw. Daten zu Schaden führen.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswähler mit dem nativen `<input type="date">` Auswähler.

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
        Ein String, der ein Datum im YYYY-MM-DD-Format
        darstellt, oder leer
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown),
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [Leitfaden zum Datum- und Uhrzeitauswähler](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
