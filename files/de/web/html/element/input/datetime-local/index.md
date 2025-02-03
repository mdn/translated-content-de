---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 1977c6e57be71ba31aaadec114ccdaca41c2019c
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erzeugen Eingabefelder, die es dem Benutzer ermöglichen, einfach sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser. Das Steuerelement ist dazu gedacht, ein _lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer Lücke beim Wechsel zur Sommerzeit).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts, der von diesem Eingabetyp verwendet wird, wird in [Lokalen Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, zum Beispiel:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Es ist wichtig zu beachten, dass die angezeigten Datums- und Uhrzeitformate sich vom tatsächlichen `value` unterscheiden; das angezeigte Datum und die Uhrzeit werden entsprechend der vom Betriebssystem des Benutzers gemeldeten Benutzersprache formatiert, während das Datum/Uhrzeit `value` immer im Format `YYYY-MM-DDTHH:mm` formatiert wird. Wenn der obige Wert an den Server gesendet wird, sieht er beispielsweise so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Bedenken Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) übermittelt werden, das Doppelpunkts-Zeichen für die Einbindung in die URL-Parameter maskiert werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können auch den Datumswert in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und setzen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local` Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, dann hat das Element keinen Maximalwert.

Dieser Wert muss ein Datum spezifizieren, das später oder gleich dem im `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die Uhrzeit; Zeitstempel vor diesem Wert führen dazu, dass das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, dann hat das Element keinen Minimalwert.

Dieser Wert muss ein Datum spezifizieren, das früher oder gleich dem im `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die gleich der Grundlage für das Schrittverhalten sind ([`min`](#min) falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keiner von beiden angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass kein Schrittverhalten impliziert wird und jeder Wert erlaubt ist (außer anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schritt-Konfiguration entsprechen, kann der {{Glossary("user_agent", "User-Agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

Für `datetime-local` Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) bedeutet.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local` Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Information vorliegt._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Uhrzeiten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Benutzersprache. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht, dass Ihre Benutzer Daten eingeben, die für das Funktionieren Ihrer Anwendung nicht benötigt werden.

### Steuern der Eingabegröße

`<input type="datetime-local">` unterstützt keine Form-Kontrollgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Einstellen von Zeitzonen

Eine Funktion, die der `datetime-local` Eingabetyp nicht bietet, ist die Möglichkeit, die Zeitzone und/oder das Gebietsschema des Datums-/Uhrzeit-Steuerelements festzulegen. Dies war im `datetime` Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für diese Entfernung sind ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, einfach ein Steuerelement (oder Steuerelemente) für die Einstellung des Datums/Uhrzeit zu haben und dann das Gebietsschema in einem separaten Steuerelement zu behandeln.

Wenn Sie zum Beispiel ein System erstellen, in dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Gebietsschema bereits eingestellt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andernfalls, wenn Sie dem Benutzer erlauben müssten, eine Zeitzone zusammen mit einer Datums-/Uhrzeiteingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, mit dem der Benutzer die richtige Zeitzone auswählen kann, indem er einen bestimmten Standort aus einer Reihe von Standorten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datums-/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten sie dann ordnungsgemäß in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen im Allgemeinen keine Eingaben zu, die kein Datum/Uhrzeit sind – was hilfreich ist – aber ein Benutzer könnte trotzdem keinen Wert eingeben und ihn senden, oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Uhrzeit-Felds obligatorisch zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld zu senden.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Werte für Datum/Uhrzeit gesetzt und das Feld auch erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie jetzt mit dem Beispiel herum:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir positionieren die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

> [!NOTE]
> Bei einer `datetime-local` Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Der grundlegendste Gebrauch von `<input type="datetime-local">` beinhaltet eine einfache Kombination aus `<input>` und {{htmlelement("label")}} Element, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die Auswahl der vom Benutzer wählbaren Daten/Zeitpunkte einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum von `2025-06-01T08:30` und ein Höchstdatum von `2025-06-30T16:30`:

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

Nur Tage im Juni 2025 können ausgewählt werden. Je nachdem, welchen Browser Sie verwenden, sind möglicherweise Zeiten außerhalb der angegebenen Werte nicht auswählbar. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie entsprechen {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und schlagen bei der [Validierung](#validierung) fehl.

In einigen Browsern (Chrome und Edge) ist nur der „Tage“-Teil des Datumswerts bearbeitbar, und Daten außerhalb des Junis können nicht durchsucht werden. In anderen (Safari) scheint der Datumsauswähler jedes Datum zuzulassen, aber der Wert wird auf den gültigen Bereich geklammert, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit wird nur an den ersten und letzten Tagen des Bereichs eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu ändern, die bei jeder Erhöhung des Datums übersprungen werden (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt der Erstellung in keiner Implementierung wirksam zu funktionieren.

## Technische Zusammenfassung

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, die zur Manipulation verwendet wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Leitfaden zur Verwendung von Datums- und Uhrzeitfeldern](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
