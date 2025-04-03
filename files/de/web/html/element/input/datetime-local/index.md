---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer ermöglichen, sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat und Tag sowie die Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert im Allgemeinen von Browser zu Browser. Die Steuerung soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die Uhrzeit des Benutzers_. Das heißt, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – auch wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer Lücke beim Wechsel zur Sommerzeit).

## Wert

Ein String, der den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des Datums- und Zeitwertes, das von diesem Eingabetyp verwendet wird, ist in [Lokale Datums- und Zeitstrings](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit im [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut angeben, zum Beispiel:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Es ist zu beachten, dass sich die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` unterscheiden; die angezeigten Daten und Uhrzeiten werden gemäß der Benutzersprache konfiguriert, wie sie vom Betriebssystem berichtet wird, während das Datum/Zeit `value` immer im Format `YYYY-MM-DDTHH:mm` formatiert ist. Wenn der oben genannte Wert zum Beispiel an den Server übermittelt wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Denken Sie auch daran, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, das Doppelpunktsymbol in den URL-Parametern für die Einbeziehung maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumwert auch in JavaScript mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und einstellen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die späteste Zeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value)-Wert später als dieser Zeitstempel ist, schlägt die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) des Elements fehl. Wenn der Wert des `max`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Maximalwert.

Dieser Wert muss ein Datumsstring sein, der später oder gleich dem im `min`-Attribut angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste Zeit; Zeitstempel, die früher sind, lassen das Element [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen. Wenn der Wert des `min`-Attributs kein gültiger String ist, der dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Minimalwert.

Dieser Wert muss ein Datumsstring sein, der früher oder gleich dem im `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die den Grad der Genauigkeit angibt, mit dem der Wert übereinstimmen muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die der Grundlage für das Schrittmaß ([`min`](#min) falls angegeben, sonst [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, wenn keine dieser Optionen angegeben) entsprechen, sind gültig.

Ein Stringwert von `any` bedeutet, dass kein Schrittmaß impliziert ist, und jeder Wert ist erlaubt (ausgenommen andere Beschränkungen, wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht mit der Schrittkonfiguration übereinstimmen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nah gelegene Optionen gibt.

Für `datetime-local`-Eingaben wird der Wert des `step` in Sekunden angegeben und hat einen Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden ist). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute, also 60.000 Millisekunden) bedeutet.

_Zu dieser Zeit ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Dies wird aktualisiert, sobald diese Information bestimmt ist._

## Verwendung von datetime-local Eingaben

Datums-/Uhrzeiteingaben sind für den Entwickler bequem; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Daten und Uhrzeiten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Benutzersprache. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht von Ihren Benutzern, Daten einzugeben, die für das Funktionieren Ihrer Anwendung nicht benötigt werden.

### Steuerung der Eingabengröße

`<input type="datetime-local">` unterstützt keine Formularsteuerungs-Größenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen auf [CSS](/de/docs/Web/CSS) zurückgreifen, um die Größen dieser Elemente anzupassen.

### Festlegen von Zeitzonen

Eine Sache, die der Eingabetyp `datetime-local` nicht bietet, ist die Möglichkeit, die Zeitzone und/oder die Benutzersprache des Datums/Uhrzeit-Steuerung festzulegen. Dies war beim Eingabetyp `datetime` verfügbar, aber dieser Typ ist jetzt obsolet, da er aus der Spezifikation entfernt wurde. Die Hauptgründe dafür waren mangelnde Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/-erfahrung. Es ist einfacher, nur eine Steuerung (oder Steuerungen) zum Festlegen des Datums/Uhrzeit zu haben und dann mit der Benutzersprache in einer separaten Steuerung umzugehen.

Zum Beispiel, wenn Sie ein System erstellen, bei dem der Benutzer wahrscheinlich bereits eingeloggt ist, und seine Benutzersprache bereits eingestellt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie verlangen müssten, dass der Benutzer eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe eingibt, könnten Sie ein {{htmlelement("select")}}-Element haben, das es dem Benutzer ermöglicht, die richtige Zeitzone durch Auswahl eines bestimmten Orts aus einer Gruppe von Orten festzulegen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In jedem Fall würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und dann müssten Sie diese entsprechend in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung für eingegebene Werte an. Die UI-Implementierungen erlauben es im Allgemeinen nicht, etwas einzugeben, das kein Datum/Uhrzeit ist – was hilfreich ist –, aber ein Benutzer könnte immer noch keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen maximaler und minimaler Daten und Zeiten](#festlegen_maximaler_und_minimaler_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um die Eingabe des Datums/Uhrzeit obligatorisch zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum zu übermitteln, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Datum/Uhrzeit-Werte festgelegt, und das Feld auch als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzuschicken, zeigt der Browser einen Fehler an. Versuchen Sie, jetzt mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das CSS, das im obigen Beispiel verwendet wird. Hier verwenden wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist oder nicht. Wir platzieren die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format sind. Es ist viel zu einfach für jemanden, Anpassungen an dem HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen, oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr Serverseitenskript die Daten, die es erhält, nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten (oder Daten, die zu groß sind oder vom falschen Typ sind, usw.) übermittelt werden.

> [!NOTE]
> Mit einem `datetime-local`-Input wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendungen von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus `<input>` und {{htmlelement("label")}}-Element, wie unten zu sehen:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen maximaler und minimaler Daten und Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die vom Benutzer wählbaren Daten/Zeitpunkte einzuschränken. Im folgenden Beispiel legen wir ein Mindestdatum und eine Mindestzeit von `2025-06-01T08:30` und ein Höchstdatum und eine Höchstzeit von `2025-06-30T16:30` fest:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, werden jedoch {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} zugeordnet und die [Validierung](#validierung) schlägt fehl.

In einigen Browsern (Chrome und Edge) wird nur der „Tage“-Teil des Datumwertes bearbeitbar sein, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) scheint der Datumsauswahldialog jedes Datum zuzulassen, aber der Wert wird auf den gültigen Bereich beschränkt, wenn ein Datum ausgewählt wird.

Der gültige Bereich umfasste alle Zeiten zwischen den `min` und `max` Werten; der Zeitpunkt des Tages ist nur am ersten und letzten Datum im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um die Anzahl der Tage zu variieren, die bei jeder Datumserhöhung übersprungen werden (z.B. möchten Sie vielleicht nur Samstage auswählbar machen). Dies scheint jedoch zum Zeitpunkt des Schreibens in keiner Implementierung effektiv zu funktionieren.

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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle zur Manipulation dieses Elements, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [In HTML verwendete Datums- und Zeitformate](/de/docs/Web/HTML/Date_and_time_formats)
- [Tutorial zur Datums- und Uhrzeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
