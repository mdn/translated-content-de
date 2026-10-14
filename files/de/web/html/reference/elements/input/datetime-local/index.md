---
title: HTML-Attributwert `<input type="datetime-local">`
short-title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

{{htmlelement("input")}}-Elemente vom Typ **`datetime-local`** erzeugen Eingabefelder, mit denen Benutzer einfach ein Datum und eine Uhrzeit eingeben können: Jahr, Monat und Tag sowie Stunden und Minuten.

Die Benutzeroberfläche des Eingabefelds unterscheidet sich im Allgemeinen von Browser zu Browser. Es dient dazu, _ein lokales Datum und eine lokale Uhrzeit_ darzustellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Die Eingabe erlaubt also jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute – selbst wenn diese Kombination in der lokalen Zeitzone des Benutzers nicht vorkommt, etwa eine Uhrzeit innerhalb der übersprungenen Stunde bei der Umstellung auf Sommerzeit.

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

## Wert

Ein String, der den Wert des eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts für diesen Eingabetyp wird unter [Strings für lokale Datums- und Uhrzeitangaben](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert festlegen, indem Sie im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) ein Datum und eine Uhrzeit angeben:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Beachten Sie, dass sich die angezeigten Datums- und Uhrzeitformate vom tatsächlichen `value` unterscheiden. Datum und Uhrzeit werden entsprechend den Gebietsschemaeinstellungen angezeigt, die das Betriebssystem des Benutzers meldet. Der Datums- und Uhrzeitwert in `value` hat dagegen immer das Format `YYYY-MM-DDTHH:mm`. Wird der obige Wert beispielsweise an den Server übermittelt, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie außerdem: Wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) übermittelt werden, muss der Doppelpunkt für die Verwendung in URL-Parametern maskiert werden, beispielsweise als `party-date=2024-06-01T08%3A30`. Eine Möglichkeit dafür ist {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}.

Sie können den Datumswert auch in JavaScript über die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Neben den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten Eingabefelder vom Typ `datetime-local` die folgenden Attribute.

### max

Das späteste zulässige Datum mit Uhrzeit. Liegt der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) nach diesem Zeitpunkt, schlägt die [Validierung anhand von Beschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `max` kein gültiger String im Format `YYYY-MM-DDTHH:mm`, hat das Element keinen Höchstwert.

Dieser Wert muss ein Datum mit Uhrzeit angeben, das nach dem durch das Attribut `min` angegebenen Wert liegt oder ihm entspricht.

### min

Das früheste zulässige Datum mit Uhrzeit. Bei früheren Zeitpunkten schlägt die [Validierung anhand von Beschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Ist der Wert des Attributs `min` kein gültiger String im Format `YYYY-MM-DDTHH:mm`, hat das Element keinen Mindestwert.

Dieser Wert muss ein Datum mit Uhrzeit angeben, das vor dem durch das Attribut `max` angegebenen Wert liegt oder ihm entspricht.

### step

Das Attribut `step` ist eine Zahl, die festlegt, in welchen Schritten der Wert zulässig ist. Alternativ kann es den unten beschriebenen speziellen Wert `any` haben. Gültig sind nur Werte, die vom Ausgangswert aus um ein ganzzahliges Vielfaches der Schrittweite abweichen. Als Ausgangswert dient [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (der Beginn der Unix-Zeitrechnung, `1970-01-01T00:00`), wenn keines von beiden angegeben ist.

Bei Eingabefeldern vom Typ `datetime-local` wird `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die dem 1000-Fachen des `step`-Werts entspricht (der zugrunde liegende Zahlenwert wird in Millisekunden angegeben). Der Standardwert ist 60, also 1 Minute.

Der Stringwert `any` bedeutet, dass keine Schrittweite vorgegeben ist und jeder Wert zulässig ist, sofern andere Beschränkungen wie [`min`](#min) und [`max`](#max) eingehalten werden. Tatsächlich hat `any` bei Eingabefeldern vom Typ `datetime-local` dieselbe Wirkung wie `60`, da die Auswahloberfläche in diesem Fall nur die Auswahl ganzer Minuten ermöglicht.

> [!NOTE]
> Entsprechen die vom Benutzer eingegebenen Daten nicht der festgelegten Schrittweite, kann der {{Glossary("user_agent", "User Agent")}} auf den nächsten gültigen Wert runden. Sind zwei Werte gleich weit entfernt, werden dabei Werte in positiver Richtung bevorzugt.

## Eingabefelder vom Typ datetime-local verwenden

Datums- und Uhrzeiteingaben sind für Entwickler praktisch: Sie bieten eine einfache Benutzeroberfläche zur Auswahl von Datum und Uhrzeit und vereinheitlichen das an den Server gesendete Datenformat unabhängig vom Gebietsschema des Benutzers. Berücksichtigen Sie jedoch die Bedürfnisse Ihrer Benutzer. Verlangen Sie keine Angaben, die Ihre App nicht benötigt.

### Größe des Eingabefelds steuern

`<input type="datetime-local">` unterstützt keine Attribute zur Größenfestlegung von Formularsteuerelementen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Um die Größe dieser Elemente anzupassen, müssen Sie [CSS](/de/docs/Web/CSS) verwenden.

### Zeitzonen festlegen

Der Eingabetyp `datetime-local` bietet keine Möglichkeit, die Zeitzone und/oder das Gebietsschema des Datums- und Uhrzeitsteuerelements festzulegen. Diese Möglichkeit gab es beim Eingabetyp `datetime`, der inzwischen jedoch veraltet ist und aus der Spezifikation entfernt wurde. Die Hauptgründe dafür waren die fehlende Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche und Benutzererfahrung. Einfacher ist es, ein oder mehrere Steuerelemente für Datum und Uhrzeit bereitzustellen und die Zeitzone in einem separaten Steuerelement zu erfassen.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet und seine Zeitzone bekannt ist, könnten Sie diese in einem Eingabefeld vom Typ [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) angeben:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Wenn Benutzer dagegen zusammen mit Datum und Uhrzeit auch eine Zeitzone eingeben können müssen, könnten Sie ein {{htmlelement("select")}}-Element verwenden. Darin können Benutzer die passende Zeitzone auswählen, indem sie einen Ort aus einer Liste wählen:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen werden Datum und Uhrzeit sowie die Zeitzone als getrennte Daten an den Server übermittelt. Anschließend müssen Sie sie serverseitig entsprechend in der Datenbank speichern.

## Validierung

Standardmäßig validiert `<input type="datetime-local">` die eingegebenen Werte nicht. Die Benutzeroberflächen lassen im Allgemeinen nur Datums- und Uhrzeitangaben zu, was hilfreich ist. Benutzer könnten das Feld aber trotzdem leer lassen und das Formular absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben, etwa den 32. April.

Mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie die verfügbaren Daten einschränken (siehe [Höchst- und Mindestwerte für Datum und Uhrzeit festlegen](#höchst-_und_mindestwerte_für_datum_und_uhrzeit_festlegen)). Mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) können Sie die Eingabe von Datum und Uhrzeit verpflichtend machen. Browser zeigen dann einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld zu übermitteln.

Das folgende Beispiel legt Mindest- und Höchstwerte für Datum und Uhrzeit fest und macht das Feld zum Pflichtfeld:

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

```js hidden
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum oder einem Datum außerhalb der festgelegten Grenzen abzusenden, zeigt der Browser einen Fehler an. Probieren Sie das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Im obigen Beispiel wird das folgende CSS verwendet. Mit den CSS-Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} gestalten wir das Eingabefeld abhängig davon, ob sein aktueller Wert gültig ist. Die Symbole platzieren wir in einem {{htmlelement("span")}}-Element neben dem Eingabefeld.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Der HTML-Code lässt sich leicht so verändern, dass die Validierung umgangen oder vollständig entfernt wird. Außerdem können Benutzer Ihr HTML vollständig umgehen und Daten direkt an Ihren Server senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, sobald falsch formatierte, zu große oder Daten des falschen Typs übermittelt werden.

> [!NOTE]
> Bei einem Eingabefeld vom Typ `datetime-local` wird der Datums- und Uhrzeitwert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` besteht aus einer Kombination aus einem `<input>`- und einem {{htmlelement("label")}}-Element:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input id="party" type="datetime-local" name="party-date" />
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Höchst- und Mindestwerte für Datum und Uhrzeit festlegen

Mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) können Sie einschränken, welche Datums- und Uhrzeitwerte Benutzer auswählen können. Im folgenden Beispiel legen wir `2025-06-01T08:30` als Mindestwert und `2025-06-30T16:30` als Höchstwert fest:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  min="2025-06-01T08:30"
  max="2025-06-30T16:30" />
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_dates_and_times', 600, 40) }}

Es können nur Tage im Juni 2025 ausgewählt werden. Je nach Browser lassen sich Uhrzeiten außerhalb der angegebenen Grenzen möglicherweise nicht auswählen. In anderen Browsern können ungültige Datums- und Uhrzeitwerte ausgewählt werden, erfüllen dann aber {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und bestehen die [Validierung](#validierung) nicht.

In manchen Browsern (Safari) scheint die Datumsauswahl jedes beliebige Datum zuzulassen. Bei der Auswahl wird der Wert jedoch auf den gültigen Bereich begrenzt.

Der gültige Bereich umfasst alle Zeitpunkte zwischen den Werten von `min` und `max`. Die Uhrzeit ist nur am ersten und am letzten Tag des Bereichs eingeschränkt.

> [!NOTE]
> Mit dem Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) sollte sich festlegen lassen, um wie viele Tage das Datum bei jedem Schritt erhöht wird, beispielsweise um nur Samstage auswählbar zu machen. Zum Zeitpunkt der Erstellung dieses Artikels scheint dies jedoch in keiner Implementierung zuverlässig zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der ein Datum und eine Uhrzeit (in der lokalen Zeitzone) darstellt, oder ein leerer String.
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

- Das allgemeine {{HTMLElement("input")}}-Element und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), mit der es bearbeitet werden kann
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Anleitung für die Datums- und Uhrzeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
