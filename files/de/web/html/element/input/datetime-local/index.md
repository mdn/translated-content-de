---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerelemente, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser. In Browsern ohne Unterstützung degradieren diese elegant zu einfachen [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)-Steuerelementen.

Das Steuerelement soll ein _lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten: Die Eingabe erlaubt jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute, auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb eines Zeitzonen-Umstellungslücke).

## Wert

Ein Zeichenfolgenwert, der den in das Eingabefeld eingegebenen Wert des Datums darstellt. Das Format des Datums- und Uhrzeitwerts, der durch diesen Eingabetyp verwendet wird, wird in [Lokale Datums- und Uhrzeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe setzen, indem Sie ein Datum und eine Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut einfügen, wie folgt:

```html
<label for="party">Geben Sie ein Datum und eine Uhrzeit für Ihre Partybuchung ein:</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt, den es zu beachten gilt, ist, dass die angezeigten Datums- und Uhrzeitformate sich vom tatsächlichen `value` unterscheiden; das angezeigte Datum und die Uhrzeit sind gemäß der Benutzerlokalisierung formatiert, wie vom Betriebssystem berichtet, während der Datum/Uhrzeit `value` immer im Format `YYYY-MM-DDTHH:mm` bleibt. Wenn der obige Wert an den Server übermittelt wird, sieht er beispielsweise so aus: `partydate=2024-06-01T08:30`.

> [!NOTE]
> Bedenken Sie auch, dass wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) übermittelt werden, das Doppelpunktzeichen zum Einschluss in die URL-Parameter maskiert werden muss, z.B. `partydate=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}, um einen Weg dafür zu finden.

Sie können den Datumswert auch in JavaScript abrufen und setzen, indem Sie die {{domxref("HTMLInputElement")}} `value`-Eigenschaft verwenden, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Neben den allen {{HTMLElement("input")}}-Elementen gemeinsamen Attributen bieten `datetime-local` Eingaben die folgenden Attribute.

### max

Das späteste angenommene Datum und die späteste Zeit. Wenn der im Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt das Element die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs keine gültige Zeichenfolge ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, dann hat das Element keinen Maximalwert.

Dieser Wert muss eine Datumszeichenfolge angeben, die später als oder gleich der durch das `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste Zeit; Zeitstempel, die früher sind, führen dazu, dass das Element die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht. Wenn der Wert des `min`-Attributs keine gültige Zeichenfolge ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, dann hat das Element keinen Minimalwert.

Dieser Wert muss eine Datumszeichenfolge angeben, die früher als oder gleich der durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die der Ausgangsbasis für das Stepping entsprechen ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, falls keiner davon angegeben ist), sind gültig.

Ein Zeichenfolgenwert von `any` bedeutet, dass kein Stepping impliziert ist, und jeder Wert ist erlaubt (abgesehen von anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stepping-Konfiguration entsprechen, kann der {{Glossary("user agent")}} möglicherweise auf den nächsten gültigen Wert runden und bevorzugt Zahlen in positiver Richtung, wenn es zwei gleichmäßig nahe Optionen gibt.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) angibt.

_Derzeit ist unklar, was ein Wert von `any` für `step` bei der Verwendung mit `datetime-local`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Information feststeht._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler bequem; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Datum und Uhrzeit und normalisieren das an den Server gesendete Datenformat, unabhängig von der Lokalisierung des Benutzers. Es ist jedoch wichtig, an Ihre Benutzer zu denken. Verlangen Sie nicht von Ihren Benutzern, Daten einzugeben, die für das Funktionieren Ihrer App nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Größenattribute für Formularelemente wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größe dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Ein Punkt, den der `datetime-local` Eingabetyp nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder die Lokalisierung des Datums-/Uhrzeitsteuerungselements festzulegen. Dies war im `datetime` Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für die Entfernung waren der Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, nur ein Steuerungselement (oder Steuerungselemente) zur Einstellung des Datums/Uhrzeit zu haben und dann die Lokalisierung in einem separaten Steuerungselement zu behandeln.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer vermutlich bereits angemeldet ist und die Lokalisierung bereits festgelegt wurde, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp angeben. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie dem Benutzer erlauben müssen, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element verwenden, um dem Benutzer die Möglichkeit zu geben, die richtige Zeitzone durch Auswahl eines bestimmten Standorts aus einer Reihe von Standorten einzustellen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- und so weiter -->
</select>
```

In beiden Fällen würden die Informationen zu Datum/Uhrzeit und Zeitzone als separate Datenpunkte an den Server übermittelt, und Sie müssten sie dann serverseitig korrekt in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche erlauben es im Allgemeinen nicht, etwas anderes als Datum/Zeit einzugeben — was hilfreich ist —, aber ein Benutzer könnte dennoch keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine Uhrzeit (z.B. den 32. April) eingeben.

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten zu beschränken (siehe [Festlegen maximaler und minimaler Daten](#festlegen_maximaler_und_minimaler_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um das Ausfüllen des Datum/Uhrzeit-Feldes obligatorisch zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum abzusenden, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Lassen Sie uns ein Beispiel ansehen; hier haben wir minimal zulässige und maximal zulässige Datum/Uhrzeit-Werte festgelegt und das Feld auch als erforderlich markiert:

```html
<form>
  <div>
    <label for="party">
      Wählen Sie Ihr bevorzugtes Datum und die Uhrzeit für die Party aus
      (erforderlich, 1. Juni 8.30 Uhr bis 30. Juni 16.30 Uhr):
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
    <input type="submit" value="Party buchen!" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem außerhalb der Grenzen liegenden Datum) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole in einem {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local` Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}, wie unten gezeigt:

```html
<form>
  <label for="party">Geben Sie ein Datum und eine Uhrzeit für Ihre Partybuchung ein:</label>
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen maximaler und minimaler Daten und Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die Daten/Zeitpunkte einzuschränken, die der Benutzer wählen kann. Im folgenden Beispiel setzen wir ein Mindestdatum und -zeit auf `2024-06-01T08:30` und ein Höchstdatum und -zeit auf `2024-06-30T16:30`:

```html
<form>
  <label for="party">Geben Sie ein Datum und eine Uhrzeit für Ihre Partybuchung ein:</label>
  <input
    id="party"
    type="datetime-local"
    name="partydate"
    min="2024-06-01T08:30"
    max="2024-06-30T16:30" />
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Es können nur Tage im Juni 2024 ausgewählt werden. Abhängig vom verwendeten Browser sind Zeiten außerhalb der angegebenen Werte möglicherweise nicht wählbar. In anderen Browsern sind ungültige Daten und Zeiten wählbar, aber sie werden {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} entsprechen und werden [Validierung](#validierung) fehlschlagen.

In einigen Browsern (Chrome und Edge) wird nur der Tagesanteil des Datumswerts bearbeitbar sein, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahlbereich jedes Datum zuzulassen, aber der Wert wird beim Auswählen auf den gültigen Bereich beschränkt.

Der gültige Bereich umfasst alle Zeiten zwischen den `min` und `max` Werten; die Tageszeit ist nur auf die ersten und letzten Daten im Bereich beschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut zu verwenden, um die Anzahl von Tagen zu variieren, die bei jedem Inkrementieren des Datums übersprungen werden (z.B. möchten Sie vielleicht nur Samstage wählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die ein Datum und eine Uhrzeit darstellt (in der
        lokalen Zeitzone) oder leer.
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, {{domxref("HTMLInputElement")}}
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum und Zeit-Picker-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
