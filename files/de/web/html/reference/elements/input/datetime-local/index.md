---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, leicht sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat, Tag sowie Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung ist dazu gedacht, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _die lokale Datum- und Uhrzeitzone des Benutzers_. Mit anderen Worten, die Eingabe ermöglicht jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute, selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig wäre (wie z.B. die eine Stunde in der Umstellungszeit der Sommerzeit).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts, das von diesem Eingabetyp verwendet wird, ist in [Lokale Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit im [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut einfügen, zum Beispiel:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt zu beachten ist, dass die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` abweichen; die angezeigten Datum- und Uhrzeitformate werden gemäß der vom Betriebssystem gemeldeten Benutzersprache formatiert, während das Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert wird. Wenn der oben genannte Wert zum Beispiel an den Server gesendet wird, sieht er aus wie `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunkt-Zeichen für die Einbindung in URL-Parameter umgewandelt werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die späteste akzeptierte Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel liegt, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine gültige Zeichenkette ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datum spezifizieren, das später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste akzeptierte Uhrzeit; Zeitstempel, die früher sind, lassen das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlagen. Wenn der Wert des `min`-Attributs keine gültige Zeichenkette ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datum spezifizieren, das früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Trittfindungs-Basiswert ([`min`](#min), falls angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) und ein entsprechender Standardwert, wenn keiner dieser Werte angegeben ist) entsprechen, sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Trittfindung impliziert ist und jeder Wert erlaubt ist (außer anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Trittfindungskonfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächstliegenden gültigen Wert runden, wobei er Zahlen in positive Richtung bevorzugt, wenn es zwei gleich nahe Optionen gibt.

Für `datetime-local`-Eingaben ist der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert für `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) anzeigt.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Information bestimmt ist._

## Verwendung von datetime-local-Eingaben

Datums-/Uhrzeiteingaben sind bequem für den Entwickler; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Uhrzeiten und normalisieren das Format der an den Server gesendeten Daten, unabhängig von der Benutzersprache. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht, dass Benutzer Daten eingeben, die für die Funktion Ihrer Anwendung nicht erforderlich sind.

### Kontrollieren der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formsteuerungsgrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größen dieser Elemente anzupassen.

### Einstellen von Zeitzonen

Ein Merkmal, das der Eingabetyp `datetime-local` nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder die Gebietsschema der Datums-/Uhrzeitssteuerung festzulegen. Dies war im Eingabetyp `datetime` verfügbar, aber dieser Typ ist jetzt veraltet und aus der Spezifikation entfernt worden. Die Hauptgründe für die Entfernung waren ein Mangel an Implementierung in Browsern und Bedenken bezüglich der Benutzeroberfläche/-erfahrung. Es ist einfacher, eine Steuerung (oder mehrere Steuerungen) zur Einstellung des Datums/Uhrzeit bereitzustellen und sich dann in einer separaten Steuerung mit dem Gebietsschema zu befassen.

Zum Beispiel, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits eingeloggt ist und sein Gebietsschema bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Auf der anderen Seite, wenn Sie dem Benutzer erlauben müssen, eine Zeitzone zusammen mit einer Datum-/Uhrzeiteingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, das es dem Benutzer ermöglicht, die richtige Zeitzone durch die Auswahl eines bestimmten Standorts aus einer Reihe von Standorten festzulegen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Zeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten sie entsprechend auf der Serverseite in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen im Allgemeinen nicht zu, dass etwas eingegeben wird, das kein Datum/Uhrzeit ist — was hilfreich ist — aber ein Benutzer könnte dennoch keinen Wert eingeben und einreichen oder ein ungültiges Datum und/oder Uhrzeit (z.B. den 32. April) eingeben.

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten zu beschränken (siehe [Einstellen von maximalen und minimalen Daten](#einstellen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Uhrzeit zwingend zu machen. Infolgedessen werden Browser einen Fehler anzeigen, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Daten/Zeitwerte festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole in einem {{htmlelement("span")}} neben dem Eingabefeld.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie gänzlich zu entfernen. Es ist auch möglich, dass jemand Ihr HTML völlig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Server-seitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Elementen, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Einstellen von maximalen und minimalen Daten und Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die Daten/Uhrzeiten zu beschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir ein Mindestdatum/-zeit von `2025-06-01T08:30` und ein Höchstdatum/-zeit von `2025-06-30T16:30` fest:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig davon, welcher Browser verwendet wird, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie werden {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} entsprechen und die [Validierung](#validierung) fehlschlagen.

In einigen Browsern (Chrome und Edge) kann nur der "Tage"-Teil des Datumswerts bearbeitet werden, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen Browsern (Safari) scheint der Datumsauswahldialog alle Daten zuzulassen, aber der Wert wird auf den gültigen Bereich beschränkt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Datumserhöhung übersprungen werden (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch derzeit in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Uhrzeit (in der
        lokalen Zeitzone) repräsentiert, oder leer.
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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [Datum- und Uhrzeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Uhrzeit-Auswahlleitfaden](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
