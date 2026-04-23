---
title: '`<input type="datetime-local">` HTML-Attributwert'
short-title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erstellen Eingabesteuerungen, mit denen der Benutzer leicht sowohl ein Datum als auch eine Uhrzeit eingeben kann, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe ermöglicht jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute—selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb der Lücke beim Übergang zur Sommerzeit).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des für diesen Eingabetyp verwendeten Datums- und Uhrzeitwerts wird in [Lokale Datums- und Uhrzeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attributs angeben, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Eine Sache, die beachtet werden sollte, ist, dass sich die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` unterscheiden; die angezeigten Daten und Zeiten sind gemäß der vom Betriebssystem gemeldeten Benutzer-Locale formatiert, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er aus wie `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass, falls solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) gesendet werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter escapet werden muss, z.B.: `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript über die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Neben den für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierbare Datum und Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt die Element-[Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der das Format `YYYY-MM-DDTHH:mm` erfüllt, hat das Element keinen Maximalwert.

Dieser Wert muss einen Datumsstring angeben, der später oder gleich dem im `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierbare Datum und Uhrzeit; Zeitstempel, die früher als dieser sind, führen dazu, dass die Element-[Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der das Format `YYYY-MM-DDTHH:mm` erfüllt, hat das Element keinen Minimalwert.

Dieser Wert muss einen Datumsstring angeben, der früher oder gleich dem im `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Basiswert entfernt sind, sind gültig. Der Basiswert ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01-01T00:00`), wenn keiner angegeben ist.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben und als eine Anzahl von Millisekunden behandelt, die 1000 Mal dem `step`-Wert entspricht (der zugrunde liegende Zahlenwert liegt in Millisekunden vor). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein String-Wert von `any` bedeutet, dass keine Schritte impliziert sind und jeder Wert erlaubt ist (unter Berücksichtigung anderer Einschränkungen wie [`min`](#min) und [`max`](#max)). Tatsächlich hat dies die gleiche Wirkung wie `60` für `datetime-local`-Eingaben, da die Auswahloberfläche in diesem Fall nur die Auswahl ganzer Minuten erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittkonfiguration entsprechen, kann das {{Glossary("user_agent", "Benutzeragent")}} auf den nächstgelegenen gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von datetime-local-Eingabefeldern

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Daten und Uhrzeiten und normalisieren das an den Server gesendete Datenformat, unabhängig von der Benutzer-Locale. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht, dass Ihre Benutzer Daten eingeben, die für das Funktionieren Ihrer Anwendung nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Größenattribute für Formularelemente wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Zeitzonen festlegen

Eine Sache, die der Eingabetyp `datetime-local` nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder Locale des Datums-/Uhrzeit-Steuerfeldes festzulegen. Dies war im Eingabetyp `datetime` verfügbar, aber dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe, warum dies entfernt wurde, sind ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/Benutzererfahrung. Es ist einfacher, eine Steuerung (oder Steuerungen) zur Einstellung des Datums/Uhrzeit zu haben und dann mit der Locale in einer separaten Steuerung umzugehen.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer wahrscheinlich bereits eingeloggt ist und seine Locale bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp bereitstellen. Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie dem Benutzer erlauben müssten, eine Zeitzone zusammen mit einem Datums/Uhrzeit-Eingabefeld einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, um es dem Benutzer zu ermöglichen, die richtige Zeitzone auszuwählen, indem er einen bestimmten Ort aus einer Liste von Standorten wählt:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In jedem Fall würden die Datums-/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten diese dann auf der Serverseite in der Datenbank entsprechend speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen im Allgemeinen nicht zu, dass Sie etwas anderes als ein Datum/Uhrzeit eingeben — was hilfreich ist —, aber ein Benutzer könnte immer noch keinen Wert ausfüllen und absenden oder ein ungültiges Datum und/oder Uhrzeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten festlegen](#maximale_und_minimale_daten_und_zeiten_festlegen)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datum-/Uhrzeit-Feldes verpflichtend zu machen. Infolgedessen wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum, das außerhalb der festgelegten Grenzen liegt oder ein leeres Datumsfeld einzugeben.

Schauen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum-/Uhrzeit-Werte festgelegt und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel jetzt aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn nicht korrekt formatierte Daten gesendet werden (oder Daten, die zu groß sind, den falschen Typ haben und so weiter).

> [!NOTE]
> Mit einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Maximale und minimale Daten und Zeiten festlegen

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die Daten/Uhrzeiten einzuschränken, die vom Benutzer ausgewählt werden können. Im folgenden Beispiel legen wir ein Mindestdatum von `2025-06-01T08:30` und ein Höchstdatum von `2025-06-30T16:30` fest:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, werden aber mit {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} übereinstimmen und [Validierung](#validierung) fehlschlagen.

In einigen Browsern (Safari) erscheint der Datumsauswahl, als ob jedes Datum möglich wäre, aber der Wert wird auf den gültigen Bereich eingegrenzt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Tagen im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. vielleicht möchten Sie nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Leitfaden zu Datums- und Uhrzeit-Pickern](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
