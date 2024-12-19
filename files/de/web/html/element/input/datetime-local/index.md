---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erstellen Eingabesteuerelemente, die dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie der Zeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert in der Regel von Browser zu Browser. In Browsern, die keine Unterstützung bieten, werden diese so degradiert, als wäre [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) festgelegt.

Das Steuerelement soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Anders gesagt, die Eingabe erlaubt jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie zum Beispiel die Stunde innerhalb einer Sommerzeit-Umstellungslücke).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einfügen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Eine Sache zu beachten ist, dass sich die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` unterscheiden; das angezeigte Datum und die Zeit sind entsprechend der Benutzersprache formatiert, wie sie vom Betriebssystem gemeldet wird, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server gesendet wird, sieht er folgendermaßen aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass bei der Übermittlung solcher Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) das Doppelpunkt-Zeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste zu akzeptierende Datum und die späteste Uhrzeit. Wenn das in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Höchstwert.

Dieser Wert muss ein Datumsstring angeben, der später oder gleich dem durch das `min`-Attribut angegebenen ist.

### min

Das früheste zu akzeptierende Datum und die früheste Uhrzeit; Zeitstempel, die früher sind als dieser, führen dazu, dass das Element bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Mindestwert.

Dieser Wert muss ein Datumsstring angeben, der früher oder gleich dem durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Basiswert für das Schrittmachen sind ([`min`](#min), falls angegeben, ansonsten das [`value`](/de/docs/Web/HTML/Element/input#value) und ein entsprechender Standardwert, falls keine dieser Angaben gemacht wird), sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Schrittfolge impliziert wird, und jeder Wert ist erlaubt (abzüglich anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Konfiguration der Schrittfolge übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden und dabei Werte in positiver Richtung bevorzugen, wenn zwei gleich nahe Optionen vorhanden sind.

Bei `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) bedeutet.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bei Verwendung mit `datetime-local`-Eingaben bedeutet. Dies wird aktualisiert, sobald diese Information bestimmt ist._

## Verwendung von datetime-local-Eingaben

Datum/Uhrzeit-Eingaben sind bequem für den Entwickler; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Zeiten und sie normalisieren das an den Server gesendete Datenformat, unabhängig von der Benutzersprache. Dennoch ist es wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht, dass Ihre Benutzer Daten eingeben, die für die Funktion Ihrer App nicht benötigt werden.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Form-Steuergrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Festlegung von Zeitzonen

Eine Sache, die der `datetime-local`-Eingabetyp nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder die Sprache des Datum/Uhrzeit-Steuerelements festzulegen. Dies war im `datetime`-Eingabetyp möglich, aber dieser Typ ist jetzt obsolet und wurde aus der Spezifikation entfernt. Die Hauptgründe für die Entfernung waren ein Mangel an Implementierung in Browsern und Bedenken über die Benutzeroberfläche/-erfahrung. Es ist einfacher, ein Steuerelement (oder mehrere) zur Einstellung des Datum/Uhrzeits bereitzustellen und sich dann in einem separaten Steuerelement mit der Sprache zu befassen.

Wenn Sie zum Beispiel ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und seine Sprache bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie zulassen müssen, dass der Benutzer eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe eingibt, könnten Sie ein {{htmlelement("select")}}-Element bereitstellen, damit der Benutzer die richtige Zeitzone durch Auswahl eines bestimmten Standorts aus einer Gruppe von Standorten einstellen kann:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In jedem Fall würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt und müssten dann serverseitig entsprechend in der Datenbank gespeichert werden.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen in der Regel nicht zu, dass irgendetwas anderes als ein Datum/Uhrzeit eingegeben wird – was hilfreich ist – aber ein Benutzer könnte immer noch keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Zeit (z. B. der 32. April) eingeben.

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#einstellen_maximaler_und_minimaler_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe von Datum/Uhrzeit obligatorisch zu machen. Infolgedessen zeigen unterstützende Browser einen Fehler an, wenn Sie versuchen, ein Datum abzusenden, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Schauen wir uns ein Beispiel an; hier haben wir Mindest- und Höchstwert für Datum/Uhrzeit festgelegt und auch das Feld als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzuschicken, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wurde. Hier verwenden wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend auf darauf, ob der aktuelle Wert gültig ist, zu stylen. Wir setzen die Symbole auf ein {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen, oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß, vom falschen Typ usw. sind).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datum-Wert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` beinhaltet eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten dargestellt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Einstellen maximaler und minimaler Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min)- und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute verwenden, um die Daten/Zeiten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir ein Minimum von `2024-06-01T08:30` und ein Maximum von `2024-06-30T16:30` fest:

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

Es können nur Tage im Juni 2024 ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, sind Zeiten außerhalb der angegebenen Werte möglicherweise nicht auswählbar. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie stimmen mit {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} überein und werden bei der [Validierung](#validierung) fehlschlagen.

In einigen Browsern (Chrome und Edge) wird nur der "Tage"-Teil des Datum-Werts bearbeitbar sein, und Daten außerhalb des Junis können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswähler jedes Datum zuzulassen, aber der Wert wird bei Auswahl eines Datums auf den gültigen Bereich geklammert.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Datumserhöhung gesprungen werden (z. B. möchten Sie vielleicht nur Samstage auswählbar machen). Allerdings scheint dies zum Zeitpunkt der Erstellung in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Uhrzeit (in der
        lokalen Zeitzone) oder leer darstellt.
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, mit der es manipuliert wird, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum und Uhrzeit Auswahl-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
