---
title: <input type="date">
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="date"`** erstellen Eingabefelder, die es dem Nutzer ermöglichen, ein Datum einzugeben. Das Erscheinungsbild des Datumseingabe-UI variiert je nach Browser und Betriebssystem. Der Wert wird im Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, jedoch _nicht_ die Uhrzeit. Die {{HTMLElement("input/time", "time")}}- und {{HTMLElement("input/datetime-local", "datetime-local")}}-Eingabetypen unterstützen die Eingabe von Uhrzeit und Datum+Uhrzeit.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

## Wert

Ein String, der das im Input eingegebene Datum darstellt. Das Datum wird gemäß [Datumsformatierungs-Strings](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für den Input mit einem Datum im Attribut [`value`](/de/docs/Web/HTML/Element/input#value) festlegen, wie folgt:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Spracheinstellung des Browsers des Nutzers_ formatiert, aber der geparste `value` ist immer im Format `yyyy-mm-dd`.

Sie können den Datumswert in JavaScript mit den Eigenschaften `value` und `valueAsNumber` von {{domxref("HTMLInputElement")}} abrufen und festlegen. Beispielsweise:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // gibt "2017-06-01" aus
console.log(dateControl.valueAsNumber); // gibt 1496275200000 aus, ein JavaScript-Zeitstempel (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt dessen Wert auf `2017-06-01` (1. Juni 2017). Anschließend liest er diesen Wert im String- und Zahlenformat zurück.

## Zusätzliche Attribute

Die gemeinsamen Attribute für alle {{HTMLElement("input")}}-Elemente gelten auch für `date`-Eingaben, können jedoch deren Darstellung nicht beeinflussen. Beispielsweise funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) danach liegt, schlägt die Element- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein mögliches Datumsstring im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datum-String **später oder gleich** dem im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) davor liegt, schlägt die Element- [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs kein mögliches Datumsstring im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert ein Datum-String **früher oder gleich** dem im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Schrittverhalten entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und ein entsprechender Standardwert, wenn keines davon angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittverhalten angenommen wird und jeder Wert (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)) zulässig ist.

> [!NOTE]
> Wenn die vom Nutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user agent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen bevorzugt in Richtung der positiven Zahl gerundet wird.

Für `date`-Eingaben wird der Wert des `step` in Tagen angegeben und als Anzahl von Millisekunden behandelt, die dem `step`-Wert 86.400.000-mal entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag bedeutet.

> [!NOTE]
> Das Festlegen von `any` als Wert für `step` hat denselben Effekt wie `1` für `date`-Eingaben.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Schnittstelle zum Auswählen von Daten und normalisieren das Datumsformat, das an den Server gesendet wird, unabhängig von der Spracheinstellung des Nutzers.

In diesem Abschnitt betrachten wir einfache und dann komplexere Anwendungen von `<input type="date">`.

### Einfache Verwendungen von Datum

Die einfachste Verwendung von `<input type="date">` umfasst ein `<input>`-Element in Kombination mit seinem {{htmlelement("label")}}, wie unten zu sehen:

```html
<form action="https://example.com">
  <label>
    Geben Sie Ihr Geburtsdatum ein:
    <input type="date" name="bday" />
  </label>

  <p><button>Absenden</button></p>
</form>
```

{{EmbedLiveSample('Basic_uses_of_date', 600, 40)}}

Dieses HTML sendet das eingegebene Datum unter dem Schlüssel `bday` an `https://example.com` — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die Benutzer auf bestimmte auswählbare Daten zu beschränken. Im folgenden Beispiel setzen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30`:

```html
<form>
  <label>
    Wählen Sie Ihr bevorzugtes Party-Datum:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresbestandteile des Textfeldes sind nicht editierbar, und Daten außerhalb April 2017 können im Auswahlelement nicht ausgewählt werden.

Sie können das Attribut [`step`](/de/docs/Web/HTML/Element/input#step) verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum erhöht wird (z. B. um nur Samstage auswählbar zu machen).

### Steuerung der Eingabegröße

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) zur Größenbestimmung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über dessen Format hinaus. Die Schnittstellen erlauben es grundsätzlich nicht, etwas anderes als ein Datum einzugeben — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der Grenzen liegt.

Sie können auch das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) verwenden, um das Ausfüllen des Datumsfelds zwingend erforderlich zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld einzureichen.

Lassen Sie uns ein Beispiel für minimale und maximale Daten ansehen, und auch ein erforderliches Feld:

```html
<form>
  <label>
    Wählen Sie Ihr bevorzugtes Party-Datum (erforderlich, 1. bis 20. April):
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Absenden</button>
  </p>
</form>
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) einzureichen, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Wir verwenden die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben dem Eingabefeld einzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben dem Eingabefeld platzieren, nicht auf dem Eingabefeld selbst, da im Chrome zumindest der generierte Inhalt der Eingabe innerhalb des Formularelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Die clientseitige Formularvalidierung _ist kein Ersatz_ für die Validierung auf dem Server. Es ist einfach, das HTML zu modifizieren oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnten katastrophale Daten folgen, die schlecht formatiert, zu groß oder vom falschen Typ sind.

## Beispiele

In diesem Beispiel erstellen wir einen Datumswähler mit dem nativen `<input type="date">`-Picker.

### HTML

Das HTML sieht wie folgt aus:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Geben Sie Ihr Geburtsdatum ein:</label>
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
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum im YYYY-MM-DD-Format
        darstellt, oder leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, mit der es manipuliert wird, {{domxref("HTMLInputElement")}}
- [Datum- und Uhrzeit-Wählerinformationen](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Datums- und Uhrzeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Kompatibilitätstabelle für CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
