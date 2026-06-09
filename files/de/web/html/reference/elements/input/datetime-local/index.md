---
title: '`<input type="datetime-local">` HTML-Attributwert'
short-title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, mit denen der Benutzer einfach sowohl ein Datum als auch eine Uhrzeit eingeben kann, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;datetime-local&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="meeting-time">Choose a time for your appointment:</label>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />
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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung ist dafür gedacht, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen und nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Das bedeutet, dass die Eingabe jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute erlaubt, auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie z. B. die eine Stunde innerhalb der Lücke bei der Umstellung auf Sommerzeit).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des von diesem Eingabetyp verwendeten Datums- und Zeitwerts wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Zu beachten ist, dass die angezeigten Datums- und Zeitformate von dem tatsächlichen `value` abweichen; die angezeigten Datums- und Zeitangaben sind gemäß der vom Betriebssystem des Benutzers gemeldeten Benutzersprache formatiert, während der Datum-/Zeitwert immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Denken Sie auch daran, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunkt-Zeichen in den URL-Parametern escaped werden muss, z. B.: `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript mit der `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allen {{HTMLElement("input")}}-Elementen gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste zu akzeptierende Datum und die späteste Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt die Elementvalidierung [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen maximalen Wert.

Dieser Wert muss ein Datumsstring spezifizieren, das später oder gleich dem durch das `min`-Attribut spezifizierten ist.

### min

Das früheste zu akzeptierende Datum und die früheste Uhrzeit; Zeitstempel früher als dieser führen dazu, dass das Element die [Constraint Validation](/de/docs/Web/HTML/Guides/Constraint_validation) nicht besteht. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen minimalen Wert.

Dieser Wert muss ein Datumsstring spezifizieren, das früher oder gleich dem durch das `max`-Attribut spezifizierten ist.

### step

Das `step`-Attribut ist eine Zahl, die die Genauigkeit angibt, die der Wert einhalten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Basiswert des Schritts entfernt sind, sind gültig. Der Basiswert des Schritts ist [`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, oder `0` (die Unix-Epoche, `1970-01-01T00:00`), wenn keiner angegeben ist.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben und als eine Anzahl von Millisekunden behandelt, die 1000-mal dem `step`-Wert gleich ist (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein Stringwert von `any` bedeutet, dass kein festgelegtes Intervall impliziert wird, und jeder Wert erlaubt ist (es sei denn, es gibt andere Beschränkungen, wie [`min`](#min) und [`max`](#max)). In Wirklichkeit hat es für `datetime-local`-Eingaben die gleiche Auswirkung wie `60`, da die Auswahloberfläche in diesem Fall nur ganze Minuten zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der festgelegten Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei bei gleich nahen Optionen die positiven Zahlen bevorzugt werden.

## Verwendung von datetime-local Eingaben

Datums-/Uhrzeit-Eingabesteuerelemente sind bequem für den Entwickler; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Uhrzeiten und normalisieren das Datenformat, das unabhängig von der Sprache des Benutzers an den Server gesendet wird. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie nicht von Ihren Benutzern, Daten einzugeben, die für das Funktionieren Ihrer Anwendung nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formsteuerungsattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Etwas, das der `datetime-local` Eingabetyp nicht bereitstellt, ist eine Möglichkeit zur Einstellung der Zeitzone und/oder Lokalisierung des Datums-/Uhrzeit-Steuerelements. Dies war im `datetime` Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet, da er aus der Spezifikation entfernt wurde. Die Hauptgründe für die Entfernung sind ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, eine Steuerung (oder Steuerungen) für die Festlegung des Datums/der Uhrzeit zu haben und dann die Lokalisierung in einer separaten Steuerung zu behandeln.

Zum Beispiel, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und seine Lokalisierung bereits eingestellt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn es erforderlich wäre, dass der Benutzer eine Zeitzone zusammen mit einer Datums-/Uhrzeiteingabe eingibt, könnten Sie ein {{htmlelement("select")}}-Element verwenden, um dem Benutzer zu ermöglichen, die richtige Zeitzone durch Auswahl eines bestimmten Standorts aus einer Menge von Standorten festzulegen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In jedem Fall würden die Datums-/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und dann müssten Sie sie entsprechend in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen im Allgemeinen keine Eingaben zu, die kein Datum/Uhrzeit sind — was hilfreich ist —, aber ein Benutzer könnte dennoch keinen Wert ausfüllen und senden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z. B. den 32. April).

Mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die verfügbaren Daten einschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und mit dem [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut können Sie die Eingabe des Datums/Uhrzeit-Felds erforderlich machen. Als Ergebnis zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld abzuschicken.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Werte für Datum/Zeit festgelegt und das Feld auch erforderlich gemacht:

```html
<form>
  <div>
    <label for="party">
      Choose your preferred party date and time (required, June 1st 8.30am to
      June 30th 4.30pm):
    </label>
    <input
      id="party"
      type="datetime-local"
      name="party-date"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Book party!" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) zu senden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend auf der Gültigkeit des aktuellen Werts zu gestalten. Wir platzieren die Icons auf einem {{htmlelement("span")}} neben der Eingabe.

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> Die HTML-Formularvalidierung ist _nicht_ ein Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach, Änderungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist außerdem möglich, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die erhaltenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten gesendet werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local` Eingabe wird der Datumwert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus einem `<input>` und einem {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die Daten/Uhrzeiten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir ein Mindestdatum von `2025-06-01T08:30` und ein Höchstdatum von `2025-06-30T16:30` fest:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2025-06-01T08:30"
    max="2025-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Nur Tage im Juni 2025 können ausgewählt werden. Je nachdem, welchen Browser Sie verwenden, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, entsprechen aber {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und fallen durch die [Validierung](#validierung).

In einigen Browsern (Safari) erscheint der Datumsauswahlbereich, um jedes Datum zuzulassen, aber der Wert wird bei der Auswahl eines Datums auf den gültigen Bereich beschränkt.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z. B. möchten Sie möglicherweise nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Uhrzeit (in der lokalen Zeitzone) darstellt oder leer ist.
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zum Datum- und Zeitwähler](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
