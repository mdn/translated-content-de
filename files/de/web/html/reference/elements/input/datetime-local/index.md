---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerelemente variiert im Allgemeinen von Browser zu Browser. Das Steuerelement soll _ein lokales Datum und eine lokale Uhrzeit_ repräsentieren und nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute — selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer Zeitumstellung im Frühling).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums repräsentiert. Das Format des von diesem Eingabetyp verwendeten Datums- und Zeitwertes wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit in das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut einschließen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Es ist zu beachten, dass die angezeigten Datums- und Zeitformate von dem tatsächlichen `value` abweichen; die angezeigten Datums- und Zeitformate werden gemäß der vom Betriebssystem des Benutzers gemeldeten Locale formatiert, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert wird. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunkt-Zeichen für die Einbindung in die URL-Parameter umgewandelt werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können auch den Datumswert in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local` Eingaben die folgenden Attribute.

### max

Das späteste Datum und die späteste Uhrzeit, die akzeptiert wird. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` entspricht, hat das Element keinen Maximalwert.

Dieser Wert muss einen Datum-String angeben, der später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste Datum und die früheste Uhrzeit, die akzeptiert wird; Zeitstempel, die früher sind, führen dazu, dass die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss einen Datum-String angeben, der früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Ausgangspunkt für das Schrittmachen entsprechen ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) andernfalls, und ein entsprechender Standardwert, wenn keiner von beiden angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittmachen impliziert ist, und jeder Wert (vorbehaltlich anderer Beschränkungen, wie [`min`](#min) und [`max`](#max)) erlaubt ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und bei zwei gleich nahen Optionen bevorzugt einen größeren Wert wählen.

Für `datetime-local` Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden bedeutet (oder 1 Minute, oder 60.000 Millisekunden).

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen bestimmt sind._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind praktisch für den Entwickler; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Datum und Uhrzeit und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Locale des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht von Ihren Benutzern, dass sie Daten eingeben, die für Ihr Programm nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Attribute zur Steuerung der Formularkontrollgröße wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Eine Sache, die der Eingabetyp `datetime-local` nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder die Locale der Datum/Uhrzeit-Steuerung festzulegen. Dies war im Eingabetyp `datetime` verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe hierfür waren fehlende Implementierung in Browsern und Bedenken in Bezug auf die Benutzeroberfläche/Benutzererfahrung. Es ist einfacher, ein (oder mehrere) Steuerelemente für die Eingabe von Datum/Uhrzeit zu haben und dann die Locale in einem separaten Steuerelement zu behandeln.

Zum Beispiel, wenn Sie ein System erstellen, in dem der Benutzer wahrscheinlich bereits angemeldet ist und seine Locale bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) Eingabefeld bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie vom Benutzer verlangen müssen, dass er eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe eingibt, können Sie ein {{htmlelement("select")}}-Element haben, das es dem Benutzer ermöglicht, die richtige Zeitzone auszuwählen, indem er einen bestimmten Standort aus einer Reihe von Standorten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten diese dann serverseitig in der Datenbank entsprechend speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen im Allgemeinen keine Eingaben zu, die nicht Datum/Uhrzeit sind — was hilfreich ist — aber ein Benutzer könnte dennoch keinen Wert eingeben und abschicken oder ein ungültiges Datum und/oder eine Zeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten und Uhrzeiten festlegen](#maximale_und_minimale_daten_und_uhrzeiten_festlegen)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Uhrzeit-Feldes zwingend erforderlich zu machen. Infolgedessen werden Browser einen Fehler anzeigen, wenn Sie versuchen, ein Datum, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld zu übermitteln.

Lassen Sie uns ein Beispiel ansehen; hier haben wir minimale und maximale Datum/Uhrzeit-Werte festgelegt und das Feld außerdem als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um das Eingabefeld basierend darauf zu stylen, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftauchen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

> [!NOTE]
> Bei einer `datetime-local` Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Der grundlegendste Gebrauch von `<input type="datetime-local">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Maximale und minimale Daten und Uhrzeiten festlegen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die Daten/Uhrzeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir ein minimales Datum/Uhrzeit von `2025-06-01T08:30` und ein maximales Datum/Uhrzeit von `2025-06-30T16:30` fest:

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

Nur Tage im Juni 2025 können ausgewählt werden. Je nachdem, welchen Browser Sie verwenden, sind Zeiten außerhalb der angegebenen Werte möglicherweise nicht auswählbar. In anderen Browsern sind ungültige Daten und Uhrzeiten zwar auswählbar, entsprechen jedoch {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und werden die [Validierung](#validierung) nicht bestehen.

In einigen Browsern (Chrome und Edge) wird nur der "Tage"-Teil des Datumswertes bearbeitbar sein, und Daten außerhalb des Juni können nicht durchscrollt werden. In anderen (Safari) scheint der Datumsauswahl-Bereich jedes Datum zu erlauben, aber der Wert wird auf den gültigen Bereich begrenzt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit wird nur am ersten und letzten Datum im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) zu verwenden, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum inkrementiert wird (z.B., vielleicht möchten Sie nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Uhrzeit (in der
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zum Datum- und Zeit-Auswahlfeld](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
