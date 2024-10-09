---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerelemente, mit denen der Benutzer sowohl ein Datum als auch eine Uhrzeit bequem eingeben kann, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser. In Browsern ohne Unterstützung fallen diese Steuerelemente elegant auf einfache [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Steuerelemente zurück.

Das Steuerelement ist dazu gedacht, ein _lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt das _lokale Datum und die lokale Uhrzeit des Benutzers_. Anders ausgedrückt, die Eingabe ermöglicht jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die Stunde innerhalb einer Zeitumstellung im Frühjahr).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Zeitwerts, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Beachten Sie, dass die angezeigten Datums- und Zeitformate sich vom tatsächlichen `value` unterscheiden; das angezeigte Datum und die Uhrzeit werden gemäß den lokalen Einstellungen des Nutzers formatiert, während das Datum/Zeit `value` immer im Format `YYYY-MM-DDTHH:mm` vorliegt. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er wie `party-date=2024-06-01T08:30` aus.

> [!NOTE]
> Beachten Sie auch, dass beim Übermitteln solcher Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) das Doppelpunktzeichen für die Einfügung in die URL-Parameter ersetzt werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} als eine Möglichkeit, dies zu tun.

Sie können den Datumwert auch in JavaScript über die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft abrufen und setzen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local` Eingaben die folgenden Attribute.

### max

Das späteste Datum und die Uhrzeit, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt das Element bei der [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datum später oder gleich dem im `min`-Attribut angegebenen Wert angeben.

### min

Das früheste akzeptierte Datum und die Uhrzeit; Zeitstempel, die früher sind, führen dazu, dass das Element bei der [Einschränkungsprüfung](/de/docs/Web/HTML/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datum früher oder gleich dem im `max`-Attribut angegebenen Wert angeben.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder den speziellen Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Ausgangspunkt für den Schritt sind ([`min`](#min), falls angegeben, ansonsten [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, falls keiner von beiden angegeben ist), sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Schrittweite impliziert ist, und jeder Wert ist erlaubt (unter Berücksichtigung anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittweite übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} zu dem nächsten gültigen Wert runden, wobei er bei zwei gleich nahen Optionen die Zahl in positiver Richtung bevorzugt.

Für `datetime-local` Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden vorliegt). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, oder 60.000 Millisekunden) bedeutet.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local` Eingaben verwendet wird. Dies wird so bald wie möglich aktualisiert, sobald diese Information feststeht._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler bequem; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Daten und Zeiten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von den lokalen Einstellungen des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie nicht von Ihren Benutzern, Daten einzugeben, die für die Funktion Ihrer App nicht benötigt werden.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formsteuerelementsgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größen dieser Elemente anzupassen.

### Zeitzonen einstellen

Eine Sache, die der `datetime-local` Eingabetyp nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder die lokale Einstellung des Datum/Uhrzeit-Steuerelements festzulegen. Dies war im `datetime` Eingabetyp verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für diese Entfernung waren ein Mangel an Implementierung in den Browsern und Bedenken bezüglich der Benutzeroberfläche/-erfahrung. Es ist einfacher, nur ein Steuerelement (oder Steuerelemente) zur Einstellung des Datum/Uhrzeit zu haben und dann mit der lokalen Einstellung in einem separaten Steuerelement umzugehen.

Zum Beispiel, wenn Sie ein System erstellen, in dem der Benutzer wahrscheinlich bereits angemeldet ist und seine lokale Einstellung bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden) Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie erforderlich wären, dem Benutzer zu ermöglichen, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, um dem Benutzer zu ermöglichen, die richtige Zeitzone auszuwählen, indem er einen bestimmten Standort aus einer Reihe von Standorten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Uhrzeit und die Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten sie entsprechend in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen im Allgemeinen nichts anderes als Datum/Zeit-Eingaben zu – was hilfreich ist – aber ein Benutzer könnte immer noch keinen Wert ausfüllen und absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z. B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten einstellen](#maximale_und_minimale_daten_und_zeiten_einstellen)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datum/Uhrzeit-Eingabefeldes obligatorisch zu machen. In unterstützenden Browsern wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datum-Feld einzureichen.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum/Uhrzeit-Werte festgelegt und das Feld ebenfalls als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Versuchen Sie nun, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML-Code vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Servercode die erhaltenen Daten nicht validiert, können Probleme auftreten, wenn nicht richtig formatierte Daten (oder zu große Daten, falscher Datentyp usw.) übermittelt werden.

> [!NOTE]
> Mit einer `datetime-local` Eingabe wird der Datumwert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` umfasst eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Maximale und minimale Daten und Zeiten einstellen

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die von den Benutzern auswählbaren Daten/Zeitpunkte einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum von `2024-06-01T08:30` und ein Höchstdatum von `2024-06-30T16:30` fest:

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

Nur Tage im Juni 2024 können ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, könnten Zeiten außerhalb der angegebenen Werte möglicherweise nicht auswählbar sein. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, entsprechen jedoch {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und werden die [Validierung](#validierung) nicht bestehen.

In einigen Browsern (Chrome und Edge) ist der "Tage"-Teil des Datumwerts nur bearbeitbar, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) erscheint der Datumsauswahlkalender, um jedes Datum zu ermöglichen, aber der Wert wird auf den gültigen Bereich abgestimmt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min` und `max` Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jedem Inkrement der Daten übersprungen werden (z.B. möchten Sie möglicherweise nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Date_and_time_formats)
- [Leitfaden zum Datum- und Zeitpicker](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
