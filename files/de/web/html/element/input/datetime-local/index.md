---
title: <input type='datetime-local'>
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat und Tag sowie die Uhrzeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. In Browsern ohne Unterstützung werden diese zu einfachen [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Steuerungen degradiert.

Die Steuerung ist dazu gedacht, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb der Lücke beim Vorwärtssprung der Sommerzeitumstellung).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einfügen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Es ist zu beachten, dass die angezeigten Datums- und Zeitformate vom tatsächlichen `value` abweichen; das angezeigte Datum und die Zeit sind nach der Benutzersprache formatiert, wie sie vom Betriebssystem des Benutzers gemeldet wird, während Datum/Zeit `value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server gesendet wird, sieht er aus wie `partydate=2024-06-01T08:30`.

> [!NOTE]
> Bedenken Sie auch, dass wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) gesendet werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z.B. `partydate=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}, um eine Möglichkeit zu sehen, wie dies gemacht werden kann.

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die bei allen {{HTMLElement("input")}}-Elementen verfügbar sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datum angeben, das später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die Uhrzeit; Zeitpunkte früher als dieser führen dazu, dass das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datum angeben, das früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Feinheit angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Grundlage für das Inkremieren ([`min`](#min) wenn angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, wenn keiner von diesen bereitgestellt wird) sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Inkremieren impliziert ist und jeder Wert erlaubt ist (außer es gibt andere Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Inkremierungskonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstgültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nah liegende Optionen gibt.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden entspricht (oder 1 Minute, oder 60.000 Millisekunden).

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bei Verwendung mit `datetime-local`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Information bestimmt ist._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche für die Auswahl von Daten und Zeiten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Benutzersprache. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht von Ihren Benutzern, Daten einzugeben, die für das Funktionieren Ihrer Anwendung nicht benötigt werden.

### Kontrolle der Eingabegröße

`<input type="datetime-local">` unterstützt keine Form-Kontrollgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Zeitzonen festlegen

Ein Punkt, den der `datetime-local`-Eingabetyp nicht bietet, ist die Möglichkeit, die Zeitzone und/oder die Gebietsschema der Datums-/Uhrzeitsteuerung festzulegen. Dies war im `datetime`-Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet, da er aus der Spezifikation entfernt wurde. Die Hauptgründe, warum dies entfernt wurde, sind ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, einfach eine Steuerung (oder Steuerungen) für die Einstellung des Datums/der Uhrzeit zu haben und das Gebietsschema in einer separaten Steuerung zu behandeln.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Gebietsschema bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Auf der anderen Seite, wenn Sie es dem Benutzer ermöglichen müssen, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element verwenden, um es dem Benutzer zu ermöglichen, die richtige Zeitzone auszuwählen, indem er einen bestimmten Ort aus einer Reihe von Orten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt und dann müssten Sie diese auf der Serverseite angemessen in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf die eingegebenen Werte an. Die Benutzeroberflächenimplementierungen lassen im Allgemeinen keine Eingaben zu, die kein Datum/Uhrzeit sind – was hilfreich ist –, aber ein Benutzer könnte trotzdem keinen Wert eingeben und abschicken oder ein ungültiges Datum und/oder eine ungültige Zeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten zu beschränken (siehe [Festlegen maximaler und minimaler Daten](#festlegen_maximaler_und_minimaler_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Datum/Uhrzeit verbindlich zu machen. In den unterstützenden Browsern wird daher ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld abzuschicken.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum/Uhrzeit-Werte festgelegt und auch das Feld verpflichtend gemacht:

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
      name="partydate"
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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Icons auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _keine_ Alternative zu Skripten, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemandenn, das HTML so anzupassen, dass er die Validierung umgehen oder vollständig entfernen kann. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn fehlerhaft formatierte Daten übermittelt werden (oder Daten, die zu groß sind, die falsche Typen aufweisen usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen maximaler und minimaler Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die von den Benutzern wählbaren Daten/Zeitpunkte einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2024-06-01T08:30` und ein Höchstdatum von `2024-06-30T16:30` fest:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input
    id="party"
    type="datetime-local"
    name="partydate"
    min="2024-06-01T08:30"
    max="2024-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Es können nur Tage im Juni 2024 ausgewählt werden. Je nachdem, welchen Browser Sie verwenden, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, sie werden jedoch {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} zugeordnet und scheitern bei der [Validierung](#validierung).

In einigen Browsern (Chrome und Edge) wird nur der "Tage"-Teil des Datumswerts bearbeitbar sein, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumswähler es zu ermöglichen, jedes Datum zu wählen, aber der Wert wird beim Auswählen eines Datums auf den gültigen Bereich geklammert.

Der gültige Bereich umfasst alle Zeiten zwischen den `min` und `max` Werten; die Tageszeiten sind nur am ersten und letzten Tag des Bereichs eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die jedes Mal gesprungen werden, wenn das Datum erhöht wird (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Allerdings scheint dies zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Zeit (in der
        lokalen Zeitzone) darstellt, oder leer.
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
      <td><strong>IDL Attribute</strong></td>
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
        [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datums- und Zeitwähler-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
