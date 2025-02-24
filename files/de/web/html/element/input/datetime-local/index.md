---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung ist dazu gedacht, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Anders ausgedrückt, die Eingabe ermöglicht jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die Stunde innerhalb einer Zeitumstellung im Frühling).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts, das von diesem Eingabetyp verwendet wird, ist in [Lokale Datums- und Uhrzeit-Strings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Es ist zu beachten, dass die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` abweichen; die angezeigten Datum- und Uhrzeitwerte werden gemäß dem vom Betriebssystem gemeldeten Benutzerstandort formatiert, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` ist. Wenn der obige Wert an den Server gesendet wird, sieht es beispielsweise so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) übermittelt werden, dass das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft erhalten und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allen {{HTMLElement("input")}}-Elementen gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute:

### max

Das späteste Datum und die späteste Uhrzeit, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später ist als dieser Zeitstempel, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss einen Datums-String angeben, der später als oder gleich dem vom `min`-Attribut angegebenen ist.

### min

Das früheste Datum und die früheste Uhrzeit, die akzeptiert werden; Zeitstempel, die früher sind als dieser, führen dazu, dass das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss einen Datums-String angeben, der früher als oder gleich dem vom `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert gehalten werden muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Schritt-Basiswert ([`min`](#min) falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value), und ein geeigneter Standardwert, wenn keiner dieser angegebenen Werte vorhanden ist) entsprechen, sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Schritt festgelegt ist, und jeder Wert ist erlaubt (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "user agent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `datetime-local`-Eingaben wird der `step`-Wert in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute bzw. 60.000 Millisekunden) entspricht.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Informationen vorliegen._

## Verwendung von datetime-local-Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache UI zur Auswahl von Datum und Uhrzeit und normalisieren das an den Server gesendete Datenformat, unabhängig vom Standort des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie Ihre Benutzer nicht dazu auf, Daten einzugeben, die für das Funktionieren Ihrer App nicht notwendig sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formsteuerungsgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Elemente anzupassen.

### Zeitzoneneinstellungen

Ein Aspekt, den der `datetime-local`-Eingabetyp nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder das Gebietsschema der Datum/Uhrzeit-Steuerung zu setzen. Dies war im `datetime`-Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet und aus der Spezifikation entfernt worden. Die Hauptgründe für diese Entfernung waren ein Mangel an Implementierung in Browsern und Bedenken über die Benutzeroberfläche/erfahrung. Es ist einfacher, nur eine Steuerung (oder Steuerungen) zum Setzen von Datum/Uhrzeit zu haben und dann das Gebietsschema in einer separaten Steuerung zu behandeln.

Zum Beispiel könnte man, wenn man ein System erstellt, bei dem der Benutzer wahrscheinlich bereits eingeloggt ist und sein Gebietsschema bereits festgelegt ist, die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn man dem Benutzer erlauben muss, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnte man ein {{htmlelement("select")}}-Element haben, um dem Benutzer zu ermöglichen, die richtige Zeitzone auszuwählen, indem er einen bestimmten Ort aus einer Liste auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen werden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und dann müssten Sie sie serverseitig entsprechend in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen ermöglichen es im Allgemeinen nicht, etwas anderes als ein Datum/Uhrzeit einzugeben — was hilfreich ist — aber ein Benutzer könnte trotzdem keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten und Zeiten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen der Datum/Uhrzeit-Eingabe obligatorisch zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum abzusenden, das außerhalb der festgelegten Grenzen liegt oder ein leeres Datumsfeld hat.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum/Uhrzeit-Werte festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) zu senden, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe abhängig davon zu gestalten, ob der aktuelle Wert gültig ist. Wir setzen die Symbole auf ein {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten (oder Daten, die zu groß, vom falschen Typ usw. sind) übermittelt werden.

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` beinhaltet eine Kombination aus einem einfachen `<input>` und einem {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die Daten/Uhrzeiten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir eine Mindestdatum/Uhrzeit von `2025-06-01T08:30` und eine Höchstdatum/Uhrzeit von `2025-06-30T16:30` fest:

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

Es können nur Tage im Juni 2025 ausgewählt werden. Je nachdem, welchen Browser Sie verwenden, sind möglicherweise keine Zeiten außerhalb der angegebenen Werte wählbar. In anderen Browsern können ungültige Daten und Zeiten ausgewählt werden, sie entsprechen jedoch nicht {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und schlagen bei der [Validierung](#validierung) fehl.

In einigen Browsern (Chrome und Edge) kann nur der "Tage"-Teil des Datumwerts bearbeitet werden, und Daten außerhalb Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahldialog jedes Datum zuzulassen, aber der Wert wird auf den gültigen Bereich geklemmt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. möchten Sie vielleicht nur Samstage wählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Datums- und Uhrzeitformate in HTML verwendet](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Uhrzeit-Auswahl Anleitung](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
