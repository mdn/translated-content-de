---
title: <input type="date">
slug: Web/HTML/Element/input/date
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`type="date"`** erstellen Eingabefelder, die dem Benutzer das Eingeben eines Datums ermöglichen. Das Erscheinungsbild der Datumsauswahl-Eingabeoberfläche variiert je nach Browser und Betriebssystem. Der Wert wird in das Format `yyyy-mm-dd` normalisiert.

Der resultierende Wert enthält das Jahr, den Monat und den Tag, aber _nicht_ die Uhrzeit. Die Eingabetypen {{HTMLElement("input/time", "time")}} und {{HTMLElement("input/datetime-local", "datetime-local")}} unterstützen Zeit- und Datum+Zeit-Eingaben.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

## Wert

Ein Zeichenfolgenwert, der das im Eingabefeld eingegebene Datum darstellt. Das Datum wird gemäß dem [Datumsformat](/de/docs/Web/HTML/Date_and_time_formats#date_strings) formatiert.

Sie können einen Standardwert für die Eingabe mit einem Datum innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs festlegen, so:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample('Value', 600, 40)}}

> [!NOTE]
> Das angezeigte Datumsformat unterscheidet sich vom tatsächlichen `value` — das angezeigte Datum wird _basierend auf der Sprache des Browsers des Benutzers_ formatiert, aber der interpretierte `value` wird immer im Format `yyyy-mm-dd` gespeichert.

Sie können den Datumswert in JavaScript mit den `value` und `valueAsNumber` Eigenschaften des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) erhalten und setzen. Zum Beispiel:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
```

Dieser Code findet das erste {{HTMLElement("input")}}-Element, dessen `type` `date` ist, und setzt seinen Wert auf `2017-06-01` (1. Juni 2017). Er liest diesen Wert dann in Zeichenfolgen- und Zahlenformaten zurück.

## Zusätzliche Attribute

Die allen {{HTMLElement("input")}}-Elementen gemeinsamen Attribute gelten auch für `date`-Eingaben, beeinflussen aber möglicherweise nicht deren Darstellung. Zum Beispiel funktionieren `size` und `placeholder` möglicherweise nicht. `date`-Eingaben haben die folgenden zusätzlichen Attribute.

### max

Das späteste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) danach liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen maximalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge **später oder gleich** der im `min`-Attribut sein.

### min

Das früheste akzeptierte Datum. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) vorher liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `min`-Attributs keine mögliche Datumszeichenfolge im Format `yyyy-mm-dd` ist, hat das Element keinen minimalen Datumswert.

Wenn sowohl die Attribute `max` als auch `min` gesetzt sind, muss dieser Wert eine Datumszeichenfolge **früher oder gleich** der im `max`-Attribut sein.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität festlegt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Basiswert für das Inkrementieren ([`min`](#min) falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner dieser Werte vorhanden ist) entsprechen, sind gültig.

Ein Zeichenfolgenwert `any` bedeutet, dass kein Inkrementieren impliziert ist und jeder Wert (vorbehaltlich anderer Einschränkungen wie [`min`](#min) und [`max`](#max)) erlaubt ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Inkrementierungskonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei bevorzugt positive Zahlen ausgewählt werden, wenn es zwei gleich nahe Optionen gibt.

Für `date`-Eingaben wird der Wert von `step` in Tagen angegeben und als eine Anzahl von Millisekunden behandelt, die 86.400.000 mal dem `step`-Wert entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert von `step` ist 1, was 1 Tag bedeutet.

> [!NOTE]
> Die Angabe von `any` als Wert für `step` hat für `date`-Eingaben die gleiche Wirkung wie `1`.

## Verwendung von Datumseingaben

Datumseingaben bieten eine einfache Schnittstelle zur Auswahl von Daten und sie normalisieren das an den Server gesendete Format unabhängig von der Sprache des Benutzers.

In diesem Abschnitt betrachten wir grundlegende und dann komplexere Verwendungen von `<input type="date">`.

### Grundlegende Anwendungen von Datumseingaben

Die grundlegendste Verwendung von `<input type="date">` besteht aus einem einzelnen `<input>` kombiniert mit seinem {{htmlelement("label")}}, wie unten gezeigt:

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

Dieses HTML reicht das eingegebene Datum unter dem Schlüssel `bday` bei `https://example.com` ein — was zu einer URL wie `https://example.com/?bday=1955-06-08` führt.

### Festlegen von maximalen und minimalen Daten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die Daten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel setzen wir ein Mindestdatum von `2017-04-01` und ein Höchstdatum von `2017-04-30`:

```html
<form>
  <label>
    Choose your preferred party date:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis ist, dass nur Tage im April 2017 ausgewählt werden können — die Monats- und Jahresanteile des Textfelds sind nicht editierbar, und Daten außerhalb von April 2017 können im Auswahl-Widget nicht ausgewählt werden.

Sie können das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum erhöht wird (z. B. um nur Samstage auswählbar zu machen).

### Kontrolle der Eingabegröße

`<input type="date">` unterstützt keine Formgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Bevorzugen Sie [CSS](/de/docs/Web/CSS) zur Größenanpassung.

## Validierung

Standardmäßig validiert `<input type="date">` den eingegebenen Wert nicht über sein Format hinaus. Die Benutzeroberflächen lassen im Allgemeinen nichts anderes als ein Datum zu — was hilfreich ist.

Wenn Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten)), deaktiviert das Formularsteuerelement ungültige Daten und zeigt einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der Grenzen zu senden.

Sie können auch das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen — ein Fehler wird angezeigt, wenn Sie versuchen, ein leeres Datumsfeld zu senden.

Schauen wir uns ein Beispiel für minimale und maximale Daten an, und wir haben auch ein Feld erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu senden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{EmbedLiveSample('Validation', 600, 100)}}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), um ein Symbol neben der Eingabe hinzuzufügen, basierend darauf, ob der aktuelle Wert gültig ist. Wir mussten das Symbol auf einem {{htmlelement("span")}} neben der Eingabe platzieren, nicht auf der Eingabe selbst, da zumindest in Chrome der generierte Inhalt der Eingabe innerhalb des Formularsteuerelements platziert wird und nicht effektiv gestylt oder angezeigt werden kann.

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
> Clientseitige Formularvalidierung ist _kein Ersatz_ für die Validierung auf dem Server. Es ist einfach für jemanden, das HTML zu modifizieren oder Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr Server die empfangenen Daten nicht validiert, könnte eine Katastrophe mit schlecht formatierten, zu großen, falschen Typen usw. Daten eintreten.

## Beispiele

In diesem Beispiel erstellen wir einen Datumsauswahler unter Verwendung der nativen `<input type="date">`-Auswahl.

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
        Eine Zeichenfolge, die ein Datum im Format YYYY-MM-DD
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
- [Leitfaden für Datums- und Zeitauswahl](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Kompatibilitätstabelle für CSS-Eigenschaften bei Formularelementen](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
