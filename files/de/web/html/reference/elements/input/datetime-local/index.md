---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einschließlich Jahr, Monat, Tag sowie Stunden und Minuten einfach einzugeben.

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

Die Benutzeroberfläche der Steuerung unterscheidet sich im Allgemeinen von Browser zu Browser. Die Steuerung ist dazu bestimmt, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe lässt jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute zu – auch wenn eine solche Kombination in der lokalen Zeitzone des Nutzers ungültig ist (wie z. B. die eine Stunde innerhalb einer Umstellung der Sommerzeit im Frühling).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des von diesem Eingabetyp verwendeten Datums- und Zeitwertes wird in [Ortsdaten- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt, den Sie beachten sollten, ist, dass die angezeigten Datums- und Zeitformate sich vom tatsächlichen `value` unterscheiden; die angezeigten Datum- und Zeitwerte werden gemäß der vom Betriebssystem des Benutzers gemeldeten Lokalisierung formatiert, während der `value`-Wert immer im Format `YYYY-MM-DDTHH:mm` angegeben wird. Wenn der obige Wert zum Beispiel an den Server übermittelt wird, sieht er wie `party-date=2024-06-01T08:30` aus.

> [!NOTE]
> Beachten Sie auch, dass, wenn solche Daten über HTTP mittels [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allen {{HTMLElement("input")}}-Elementen gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste zu akzeptierende Datum und die Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` entspricht, hat das Element keinen Maximalwert.

Dieser Wert muss einen Datumsstring angeben, der später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste zu akzeptierende Datum und die Zeit; Zeitstempel, die früher sind als dieser, führen dazu, dass die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` entspricht, hat das Element keinen Minimalwert.

Dieser Wert muss einen Datumsstring spezifizieren, der früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an der der Wert sich orientieren muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schrittgrundwert ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, und ein geeigneter Standardwert, wenn keiner von beiden angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Stufung impliziert ist und jeder Wert zulässig ist (vorbehaltlich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrundeliegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) anzeigt.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen feststehen._

## Verwendung von datetime-local-Eingaben

Datum/Uhrzeit-Eingaben sind für Entwickler bequem; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Uhrzeiten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Lokalisierung des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Zwingen Sie Ihre Benutzer nicht, Daten einzugeben, die für das Funktionieren Ihrer Anwendung nicht notwendig sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Attributen zur Größenbestimmung von Formularsteuerelementen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Ein Punkt, den der `datetime-local`-Eingabetyp nicht bietet, ist die Möglichkeit, die Zeitzone und/oder Lokalisierung der Datums-/Uhrzeit-Steuerung festzulegen. Dies war im `datetime`-Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für diese Entfernung sind das Fehlen von Implementierungen in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, einfach eine Steuerung (oder Steuerungen) zur Einstellung des Datums/Zeit zu haben und dann die Lokalisierung in einer separaten Steuerung zu behandeln.

Beispielsweise, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und seine Lokalisierung bereits eingestellt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp bereitstellen. Beispielsweise:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Auf der anderen Seite, wenn Sie dem Benutzer erlauben müssen, eine Zeitzone zusammen mit einer Datum-/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, mit dem der Benutzer die richtige Zeitzone einstellen kann, indem er einen bestimmten Ort aus einer Gruppe von Orten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum-/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server gesendet, und Sie müssten sie auf der Serverseite entsprechend in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen im Allgemeinen keine Eingabe zu, die kein Datum/Uhrzeit ist – was hilfreich ist – aber der Benutzer könnte trotzdem keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit (z. B. den 32. April) eingeben.

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Uhrzeitfeldes obligatorisch zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum abzusenden, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum-/Uhrzeitwerte festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist allzu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML komplett umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer im Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus `<input>`- und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute verwenden, um die Daten/Uhrzeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir ein minimales Datum `2025-06-01T08:30` und ein maximales Datum `2025-06-30T16:30`:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig von dem verwendeten Browser können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie stimmen mit {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} überein und schlagen bei der [Validierung](#validierung) fehl.

In einigen Browsern (Chrome und Edge) wird nur der „Tage“-Teil des Datumswerts bearbeitbar sein, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahl erlaubt zu sein, dass jedes Datum verwendet wird, aber der Wert wird in den gültigen Bereich geklemmt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Tagen im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Inkrementierung des Datums gesprungen werden (z. B. vielleicht möchten Sie nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Zeit (in der lokalen Zeitzone) darstellt, oder leer.
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Date and Time picker tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
