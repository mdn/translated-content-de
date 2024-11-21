---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Zeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie der Zeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche der Steuerung variiert in der Regel von Browser zu Browser. In Browsern ohne Unterstützung, weichen diese elegant zurück, als ob [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) gesetzt wäre.

Die Steuerung soll _ein lokales Datum und eine lokale Zeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Zeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb eines Übergangsgaps der Sommerzeitumstellung).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Zeit in das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einfügen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt, den es zu beachten gilt, ist, dass die angezeigten Datums- und Zeitformate sich von dem tatsächlichen `value` unterscheiden; das angezeigte Datum und die Uhrzeit sind gemäß der vom Betriebssystem des Benutzers gemeldeten Locale formatiert, während das Datum/Zeit `value` immer in `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Bitte beachten Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) übermittelt werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und setzen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local` Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die früheste akzeptierte Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt die Element- [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` entspricht, hat das Element keinen Höchstwert.

Dieser Wert muss ein Datum angeben, das später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste akzeptierte Uhrzeit; Zeitstempel, die früher sind als dieser, führen dazu, dass das Element die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` entspricht, hat das Element keinen Mindestwert.

Dieser Wert muss ein Datum angeben, das früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die dem Grundwert für die Schritte entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls und ein geeigneter Standardwert, falls keiner dieser Werte angegeben ist) sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schritt impliziert wird und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei er Zahlen in positiver Richtung bevorzugt, wenn es zwei gleich nahestehende Optionen gibt.

Für `datetime-local` Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) anzeigt.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bei der Verwendung mit `datetime-local` Eingaben bedeutet. Dies wird aktualisiert, sobald diese Informationen verfügbar sind._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Daten und Zeiten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Locale des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Zwingen Sie Ihre Benutzer nicht, Daten einzugeben, die für das Funktionieren Ihrer App nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Attributgrößenkontrollen wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Zeitzonen festlegen

Ein Aspekt, den der Eingabetyp `datetime-local` nicht bietet, ist die Möglichkeit, die Zeitzone und/oder das Locale der Datum/Uhrzeit-Steuerung festzulegen. Dies war im Eingabetyp `datetime` verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für die Entfernung waren der Mangel an Implementierung in den Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, eine Steuerung (oder Steuerungen) zum Festlegen der Datum/Uhrzeit bereitzustellen und dann das Locale in einer separaten Steuerung zu handhaben.

Zum Beispiel, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Locale bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden) Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Auf der anderen Seite, wenn Sie es dem Benutzer ermöglichen müssen, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element verwenden, um dem Benutzer das Festlegen der richtigen Zeitzone zu ermöglichen, indem er einen bestimmten Ort aus einer Menge von Orten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server gesendet und Sie müssten sie entsprechend in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Benutzeroberflächenimplementierungen lassen in der Regel nichts anderes als ein Datum/Uhrzeit eingeben – was hilfreich ist – aber es könnte dennoch vorkommen, dass ein Benutzer keinen Wert eingibt und überträgt oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingibt (z.B. der 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Datum/Uhrzeit verpflichtend zu machen. In unterstützenden Browsern wird dann ein Fehler angezeigt, wenn Sie versuchen, ein Datum zu übermitteln, das außerhalb der festgelegten Grenzen liegt oder ein leeres Datumsfeld eingeben.

Lassen Sie uns ein Beispiel betrachten; hier haben wir minimale und maximale Datum/Uhrzeit-Werte gesetzt und das Feld auch verpflichtend gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu senden, zeigt der Browser einen Fehler an. Versuchen Sie nun, mit dem Beispiel zu experimentieren:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist allzu leicht für jemanden, Änderungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML völlig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme entstehen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local` Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine Kombination aus einem einfachen `<input>` und einem {{htmlelement("label")}} Element, wie unten zu sehen:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die Daten/Zeitangaben einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel setzen wir ein Mindestdatum von `2024-06-01T08:30` und ein Höchstdatum von `2024-06-30T16:30`:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input
    id="party"
    type="datetime-local"
    name="party-date"
    min="2024-06-01T08:30"
    max="2024-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Nur Tage im Juni 2024 können ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, werden jedoch als {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} markiert und scheitern an der [Validierung](#validierung).

In einigen Browsern (Chrome und Edge) wird nur der "Tage"-Teil des Datumswerts bearbeitbar sein, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahlbereich jede Datumszeit zu erlauben, aber der Wert wird auf den gültigen Bereich geklemmt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min` und `max` Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um die Anzahl der Tage zu variieren, die bei jedem Inkrement der Datumsangabe übersprungen werden (z.B. möchten Sie möglicherweise nur Samstage auswählbar machen). Allerdings scheint dies zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die verwendet wird, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Verwendete Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeitpicker-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
