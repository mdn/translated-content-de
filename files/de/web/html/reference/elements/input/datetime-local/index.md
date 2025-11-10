---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erzeugen Eingabesteuerelemente, mit denen der Benutzer einfach sowohl ein Datum als auch eine Uhrzeit eingeben kann, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

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

Das UI des Steuerelements variiert im Allgemeinen von Browser zu Browser. Das Steuerelement soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen und nicht unbedingt _das lokale Datum und die Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute — auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer Sommerzeitsprung-Übergangslücke).

## Wert

Ein String, der den Wert des im Eingabefeld eingegebenen Datums darstellt. Das Format des von diesem Eingabetyp verwendeten Datums- und Zeitwertes wird in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

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

Es ist zu beachten, dass die angezeigten Datums- und Zeitformate von dem tatsächlichen `value` abweichen; die angezeigten Daten und Zeiten sind gemäß der vom Betriebssystem des Benutzers gemeldeten Benutzerlokale formatiert, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Bedenken Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunktzeichen für die Aufnahme in die URL-Parameter maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert auch in JavaScript abrufen und setzen, indem Sie die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) verwenden, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den für alle {{HTMLElement("input")}}-Elemente gemeinsamen Attributen bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste zu akzeptierende Datum und die späteste zu akzeptierende Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) nach diesem Zeitstempel liegt, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datumsstring spezifizieren, der später oder gleich dem durch das `min`-Attribut angegebenen Wert ist.

### min

Das früheste zu akzeptierende Datum und die früheste zu akzeptierende Uhrzeit; Zeitstempel, die früher sind, führen dazu, dass das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht besteht. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datumsstring spezifizieren, der früher oder gleich dem durch das `max`-Attribut angegebenen Wert ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die sich der Wert halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Schrittgrund entfernt sind, sind gültig. Der Schrittgrund ist [`min`](#min), wenn angegeben; andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Zeit, `1970-01-01T00:00`), wenn keiner angegeben ist.

Für `datetime-local`-Eingabefelder wird der Wert von `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die dem 1000-fachen des `step`-Wertes entsprechen (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute anzeigt.

Ein String-Wert von `any` bedeutet, dass keine Schrittweitenanforderung impliziert wird, und es wird jeder Wert zugelassen (vorbehaltlich anderer Beschränkungen, wie [`min`](#min) und [`max`](#max)). In Wirklichkeit hat es denselben Effekt wie `60` für `datetime-local`-Eingaben, da die Auswahlanzeige in diesem Fall nur das Auswählen ganzer Minuten erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittweitenkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden und bevorzugt dabei Werte in positiver Richtung, wenn zwei gleich weit entfernte Optionen vorhanden sind.

## Verwendung von datetime-local-Eingaben

Datum-/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Daten und Zeiten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Lokale des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht von Ihren Benutzern, Daten einzugeben, die für die Funktionsweise Ihrer Anwendung nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formulareinsteuergrößenattribute wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Zeitzoneneinstellungen setzen

Eines, das der Eingabetyp `datetime-local` nicht bietet, ist die Möglichkeit, die Zeitzone und/oder Lokale des Datum-/Uhrzeit-Steuerelements festzulegen. Dies war im Eingabetyp `datetime` möglich, doch dieser Typ ist jetzt veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für dessen Entfernung waren ein Mangel an Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, nur ein Steuerelement (oder Steuerelemente) zum Einstellen des Datums/Zeit anzubieten und sich dann mit der Lokale in einem separaten Steuerelement zu befassen.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und seine Lokale bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Wenn Sie andererseits dem Benutzer erlauben müssen, eine Zeitzone zusammen mit einer Datum/Zeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element verwenden, um dem Benutzer das Einstellen der richtigen Zeitzone durch Auswahl eines bestimmten Ortes aus einer Reihe von Standorten zu ermöglichen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Zeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt und dann auf der Serverseite entsprechend in der Datenbank gespeichert werden müssen.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die UI-Implementierungen lassen im Allgemeinen keine Eingaben zu, die nicht einem Datum/Zeit entsprechen — was hilfreich ist — aber ein Benutzer könnte dennoch keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Zeit (z.B. der 32. April) eintragen.

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Zeit-Feldes obligatorisch zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum einzugeben, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld einzugeben.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum/Zeit-Werte festgelegt und das Feld auch obligatorisch gemacht:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum zu senden (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das im obigen Beispiel verwendete CSS. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe basierend darauf zu gestalten, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen, oder sie ganz zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr Server-seitiger Code die Daten, die er erhält, nicht validiert, können Probleme auftreten, wenn nicht korrekt formatierte Daten (oder zu große Daten, Daten des falschen Typs usw.) übermittelt werden.

> [!NOTE]
> Bei einem `datetime-local`-Eingabefeld wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` umfasst eine grundlegende Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie im Folgenden gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die vom Benutzer wählbaren Daten/Zeiten einzuschränken. Im folgenden Beispiel setzen wir ein Mindestdatum von `2025-06-01T08:30` und ein Maximaldatum von `2025-06-30T16:30`:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, sind Zeiten außerhalb der angegebenen Werte möglicherweise nicht auswählbar. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie werden übereinstimmend mit {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} sein und [Validierung](#validierung) fehlschlagen.

In einigen Browsern (Chrome und Edge) wird nur der "Tage"-Teil des Datumswertes bearbeitbar sein und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswähler jedes Datum zuzulassen, aber der Wert wird beim Auswählen eines Datums auf den gültigen Bereich geklemmt.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt der Erstellung dieses Artikels in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Zeit (in der lokalen Zeitzone)
        darstellt, oder leer.
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
- [Verwendete Datums- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Zeitwähler-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
