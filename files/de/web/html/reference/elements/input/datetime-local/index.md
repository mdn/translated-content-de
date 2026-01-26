---
title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 991d9809b3ecd8e01b5be871a1f30581e55ee060
---

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erzeugen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einfach einzugeben, einschließlich Jahr, Monat und Tag sowie die Zeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute - selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb der Zeitumstellung im Frühjahr).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des Datums- und Zeitwerts, das von diesem Eingabetyp verwendet wird, ist in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit in das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut einfügen, wie folgt:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Eines zu beachten ist, dass sich die angezeigten Datums- und Zeitformate vom tatsächlichen `value` unterscheiden; die angezeigten Daten und Zeiten werden gemäß der vom Betriebssystem des Benutzers gemeldeten lokalen Einstellungen formatiert, während der Datum/Zeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er aus wie `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunktzeichen für die Einbindung in die URL-Parameter maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumwert auch in JavaScript mithilfe der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die späteste Zeit. Wenn der eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datumsstring angeben, der später oder gleich dem im `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste Zeit; Zeitstempel, die früher sind, führen dazu, dass das Element bei der [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlägt. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datumsstring angeben, der früher oder gleich dem im `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die festlegt, wie grob der Wert sein muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die eine ganze Anzahl von Schritten vom Basiswert entfernt sind, sind gültig. Der Basiswert ist [`min`](#min), wenn angegeben, sonst [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), oder `0` (der Unix-Epoch, `1970-01-01T00:00`), wenn keiner angegeben ist.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die dem `step`-Wert mal 1000 entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60, was 1 Minute entspricht.

Ein Stringwert von `any` bedeutet, dass kein Step angegeben ist und jeder Wert erlaubt ist (außer anderen Einschränkungen, wie [`min`](#min) und [`max`](#max)). Tatsächlich hat es die gleiche Wirkung wie `60` für `datetime-local`-Eingaben, da die Auswahl-UI in diesem Fall nur ganze Minuten zulässt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stepping-Konfiguration entsprechen, kann der {{Glossary("user_agent", "user agent")}} auf den nächsten gültigen Wert runden, wobei Zahlen in positiver Richtung bevorzugt werden, wenn es zwei gleich nahestehende Optionen gibt.

## Verwendung von datetime-local-Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zur Auswahl von Datum und Uhrzeit und normalisieren das an den Server gesendete Datenformat, unabhängig von der lokalen Einstellung des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie Ihre Benutzer nicht auf, Daten einzugeben, die für die Funktion Ihrer App nicht erforderlich sind.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Größenattribute von Formularsteuerelementen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Eine Sache, die der Eingabetyp `datetime-local` nicht bietet, ist eine Möglichkeit, die Zeitzone und/oder das Gebietsschema der Datum/Uhrzeit-Steuerung festzulegen. Dies war im Input-Typ `datetime` verfügbar, aber dieser Typ ist jetzt obsolet und wurde aus der Spezifikation entfernt. Die Hauptgründe dafür waren ein Mangel an Implementierung in den Browsern und Bedenken hinsichtlich der Benutzeroberfläche/Benutzererfahrung. Es ist einfacher, einfach eine Steuerung (oder Steuerungen) für das Festlegen des Datums/Uhrzeit zu haben und dann das Gebietsschema in einer separaten Steuerung zu behandeln.

Zum Beispiel, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Gebietsschema bereits festgelegt wurde, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Auf der anderen Seite, wenn Sie den Benutzer zwingen müssen, eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe einzugeben, könnten Sie ein {{htmlelement("select")}}-Element haben, um es dem Benutzer zu ermöglichen, die richtige Zeitzone auszuwählen, indem Sie einen bestimmten Ort aus einer Reihe von Standorten auswählen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In jedem Fall würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt und müssten dann entsprechend in der Datenbank auf der Serverseite gespeichert werden.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche lassen im Allgemeinen nicht zu, dass man etwas eingibt, das kein Datum/Uhrzeit ist - was hilfreich ist - aber ein Benutzer könnte immer noch keinen Wert eingeben und versuchen zu senden oder ein ungültiges Datum und/oder eine ungültige Zeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Ausfüllen des Datums/Uhrzeits als erforderlich zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum zu übermitteln, das außerhalb der festgelegten Grenzen liegt oder ein leeres Datumsfeld ist.

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder einem Datum außerhalb der festgelegten Grenzen) zu übermitteln, zeigt der Browser einen Fehler an. Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier nutzen wir die {{cssxref(":valid")}}- und {{cssxref(":invalid")}}-CSS-Eigenschaften, um die Eingabe je nachdem zu stylen, ob der aktuelle Wert gültig ist. Wir platzieren die Symbole in einem {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Änderungen am HTML vorzunehmen, die ihm erlauben die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ sind usw.).

> [!NOTE]
> Mit einer `datetime-local`-Eingabe wird der Datumwert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus `<input>`- und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute verwenden, um die vom Benutzer wählbaren Daten/Zeit zu beschränken. Im folgenden Beispiel setzen wir ein Mindestdatum/Uhrzeit von `2025-06-01T08:30` und ein Höchstdatum/Uhrzeit von `2025-06-30T16:30`:

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

Es können nur Tage im Juni 2025 ausgewählt werden. Abhängig vom verwendeten Browser sind Zeiten, die außerhalb der festgelegten Werte liegen, möglicherweise nicht wählbar. In anderen Browsern sind ungültige Daten und Zeiten wählbar, aber sie entsprechen {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und werden die [Validierung](#validierung) nicht bestehen.

In einigen Browsern (Safari) scheint der Datepicker jedes Datum zu erlauben, aber der Wert wird auf den gültigen Bereich begrenzt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; der Zeitpunkt des Tages ist nur an den ersten und letzten Tagen im Bereich beschränkt.

> [!NOTE]
> Sie sollten in der Lage sein, das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut zu verwenden, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [Datum- und Zeitformate in HTML](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Datum- und Zeitpicker-Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
