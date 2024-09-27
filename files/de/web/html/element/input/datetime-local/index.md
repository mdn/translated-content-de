---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabefelder, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie der Zeit in Stunden und Minuten.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

Die Benutzeroberfläche des Steuerelements variiert im Allgemeinen von Browser zu Browser. In Browsern ohne Unterstützung degradieren diese ohne Probleme zu einfachen [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)-Steuerelementen.

Das Steuerelement ist dazu gedacht, ein _lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _die lokale Zeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer Sommerzeitumstellung beim Vorstellen der Uhr).

## Wert

Ein String, der den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs einschließen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt, den Sie beachten sollten, ist, dass die angezeigten Datums- und Zeitformate sich vom tatsächlichen `value` unterscheiden; das angezeigte Datum und die Uhrzeit werden entsprechend der Benutzer-Lokalisierung formatiert, wie sie vom Betriebssystem gemeldet wird, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er aus wie `partydate=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Methods/GET) übermittelt werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z. B. `partydate=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können auch den Datumswert in JavaScript mittels der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingabefelder die folgenden Attribute.

### max

Das späteste zu akzeptierende Datum und die Uhrzeit. Wenn der in das Element eingetragene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Höchstwert.

Dieser Wert muss einen Datumsstring angeben, der später oder gleich dem durch das `min`-Attribut angegebenen Wert ist.

### min

Das früheste akzeptierte Datum und die Uhrzeit; Zeitstempel, die früher sind als dieser, führen dazu, dass die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Mindestwert.

Dieser Wert muss einen Datumsstring angeben, der früher oder gleich dem durch das `max`-Attribut angegebenen Wert ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die gleich dem Basiswert für die Schritte sind ([`min`](#min), falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und ein geeigneter Standardwert, wenn keiner der beiden angegeben ist) sind gültig.

Ein String-Wert von `any` bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann der [User Agent](/de/docs/Glossary/user_agent) den nächstgelegenen gültigen Wert runden, wobei bei zwei gleich nahen Optionen die positiven Zahlen bevorzugt werden.

Für `datetime-local` Eingabefelder wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) entspricht.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local` Eingabefeldern verwendet wird. Dies wird aktualisiert, sobald diese Informationen bestimmt wurden._

## Verwendung von datetime-local Eingabefeldern

Datum/Zeit-Eingabefelder sind praktisch für Entwickler; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Zeiten und standardisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Lokalisierung des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie nicht, dass Ihre Benutzer Daten eingeben, die für die Funktion Ihrer App nicht notwendig sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Attribute zur Größenanpassung von Formularsteuerelementen wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größen dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Ein Merkmal, das der Eingabetyp `datetime-local` nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder Lokalisierung des Datums-/Zeit-Steuerelements festzulegen. Dies war im Eingabetyp `datetime` verfügbar, der jedoch jetzt veraltet ist und aus der Spezifikation entfernt wurde. Die Hauptgründe für die Entfernung waren ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/Erfahrung. Es ist einfacher, nur ein Steuerelement (oder Steuerelemente) zum Festlegen des Datums/Zeit zu haben und dann die Lokalisierung in einem separaten Steuerelement zu behandeln.

Wenn Sie beispielsweise ein System erstellen, in dem der Benutzer wahrscheinlich schon angemeldet ist und seine Lokalisierung bereits festgelegt wurde, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden) Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie dem Benutzer erlauben müssen, eine Zeitzone zusammen mit einer Datum-/Zeiteingabe einzugeben, können Sie ein {{htmlelement("select")}}-Element haben, um dem Benutzer die Möglichkeit zu geben, die richtige Zeitzone auszuwählen, indem er einen bestimmten Standort aus einer Liste von Standorten auswählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden das Datum/Zeit und die Zeitzonenwerte als separate Datenpunkte an den Server übermittelt und dann müssten Sie sie auf der Serverseite entsprechend in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen Sie im Allgemeinen nichts eingeben, was kein Datum/Zeit ist — was hilfreich ist — aber ein Benutzer könnte trotzdem keinen Wert einfüllen und senden oder ein ungültiges Datum und/oder Zeit eingeben (z. B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Zeit-Feldes obligatorisch zu machen. In unterstützten Browsern wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld zu übermitteln.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum-/Zeitwerte festgelegt und auch das Feld erforderlich gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) zu senden, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu experimentieren:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend auf der Gültigkeit des aktuellen Wertes zu stylen. Wir platzieren die Icons in einem {{htmlelement("span")}} neben dem Eingabefeld.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, die HTML so anzupassen, dass die Validierung umgangen werden kann, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Servercode es versäumt, die empfangenen Daten zu validieren, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus einem `<input>`- und einem {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um die vom Benutzer auswählbaren Daten/Zeitpunkte einzuschränken. Im folgenden Beispiel wird ein Mindestwert für das Datum und die Uhrzeit von `2024-06-01T08:30` und ein Höchstwert von `2024-06-30T16:30` festgelegt:

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

Es können nur Tage im Juni 2024 ausgewählt werden. Abhängig vom verwendeten Browser sind Zeiten außerhalb der angegebenen Werte möglicherweise nicht auswählbar. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie passen zu {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und schlagen die [Validierung](#validierung) fehl.

In einigen Browsern (Chrome und Edge) ist nur der "Tage"-Teil des Datumswertes bearbeitbar und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahlmechanismus jedes Datum zuzulassen, aber der Wert wird auf den gültigen Bereich begrenzt, wenn ein Datum ausgewählt wird.

Der gültige Bereich schließt alle Zeiten zwischen den `min` und `max` Werten ein; die Tageszeit ist nur am ersten und letzten Datum im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jedem Inkrementieren des Datums übersprungen werden (z. B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt der Erstellung in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation desselben, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Datums- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeitauswahl Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [Kompatibilität der CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
