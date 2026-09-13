---
title: HTML-Attributwert `<input type="datetime-local">`
short-title: <input type="datetime-local">
slug: Web/HTML/Reference/Elements/input/datetime-local
l10n:
  sourceCommit: 100cf25d92d3953f3c70ecaa2af637d5e42179d8
---

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerelemente, mit denen der Benutzer einfach sowohl ein Datum als auch eine Uhrzeit eingeben kann, einschließlich Jahr, Monat und Tag sowie der Uhrzeit in Stunden und Minuten.

Die Benutzeroberfläche des Steuerelements unterscheidet sich im Allgemeinen von Browser zu Browser. Das Steuerelement soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten: Die Eingabe erlaubt jede gültige Kombination aus Jahr, Monat, Tag, Stunde und Minute – selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (etwa die eine Stunde innerhalb einer Lücke beim Übergang zur Sommerzeit).

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

Eine Zeichenfolge, die den Wert des in die Eingabe eingegebenen Datums darstellt. Das Format des von diesem Eingabetyp verwendeten Datums- und Uhrzeitwerts wird unter [Lokale Datums- und Uhrzeitzeichenfolgen](/de/docs/Web/HTML/Guides/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit im Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) angeben:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Zu beachten ist, dass sich die angezeigten Datums- und Uhrzeitformate vom tatsächlichen `value` unterscheiden: Das angezeigte Datum und die angezeigte Uhrzeit werden entsprechend dem vom Betriebssystem gemeldeten Gebietsschema des Benutzers formatiert, während der Datums-/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert wird. Wenn der obige Wert beispielsweise an den Server übermittelt wird, sieht er wie folgt aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie außerdem, dass bei einer Übermittlung solcher Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) das Doppelpunktzeichen zur Verwendung in den URL-Parametern maskiert werden muss, z. B. `party-date=2024-06-01T08%3A30`. Informationen zu einer Möglichkeit hierfür finden Sie unter {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}.

Sie können den Datumswert in JavaScript auch über die `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste akzeptierte Datum und die späteste akzeptierte Uhrzeit. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) später als dieser Zeitstempel ist, schlägt für das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl. Wenn der Wert des Attributs `max` keine gültige Zeichenfolge im Format `YYYY-MM-DDTHH:mm` ist, hat das Element keinen Maximalwert.

Dieser Wert muss eine Datumszeichenfolge angeben, die später als oder gleich der durch das Attribut `min` angegebenen ist.

### min

Das früheste akzeptierte Datum und die früheste akzeptierte Uhrzeit; frühere Zeitstempel führen dazu, dass für das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehlschlägt. Wenn der Wert des Attributs `min` keine gültige Zeichenfolge im Format `YYYY-MM-DDTHH:mm` ist, hat das Element keinen Minimalwert.

Dieser Wert muss eine Datumszeichenfolge angeben, die früher als oder gleich der durch das Attribut `max` angegebenen ist.

### step

Das Attribut `step` ist eine Zahl, die die Granularität angibt, der der Wert entsprechen muss, oder der weiter unten beschriebene spezielle Wert `any`. Nur Werte, die eine ganze Anzahl von Schritten von der Schrittbasis entfernt sind, sind gültig. Die Schrittbasis ist [`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) oder `0` (die Unix-Epoche, `1970-01-01T00:00`), wenn keines von beiden angegeben ist.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben und als Anzahl von Millisekunden behandelt, die dem 1000-Fachen des `step`-Werts entspricht (der zugrunde liegende numerische Wert ist in Millisekunden). Der Standardwert ist 60 und entspricht 1 Minute.

Ein Zeichenfolgenwert von `any` bedeutet, dass keine Schrittweite impliziert wird und jeder Wert zulässig ist (abgesehen von anderen Einschränkungen wie [`min`](#min) und [`max`](#max)). Tatsächlich hat dies für `datetime-local`-Eingaben dieselbe Wirkung wie `60`, da die Auswahloberfläche in diesem Fall nur die Auswahl ganzer Minuten erlaubt.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Schrittweitenkonfiguration entsprechen, kann der {{Glossary("user_agent", "User Agent")}} auf den nächstgelegenen gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn es zwei gleich nahe Optionen gibt.

## Verwendung von datetime-local-Eingaben

Datums-/Uhrzeiteingaben sind für Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zum Auswählen von Daten und Uhrzeiten und normalisieren das an den Server gesendete Datenformat unabhängig vom Gebietsschema des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Fordern Sie Ihre Benutzer nicht dazu auf, Daten einzugeben, die für die Funktion Ihrer Anwendung nicht erforderlich sind.

### Eingabegröße steuern

`<input type="datetime-local">` unterstützt keine Attribute zur Größenanpassung von Formularsteuerelementen wie [`size`](/de/docs/Web/HTML/Reference/Elements/input#size). Sie müssen für die Anpassung der Größen dieser Elemente auf [CSS](/de/docs/Web/CSS) zurückgreifen.

### Zeitzonen festlegen

Eine Funktion, die der Eingabetyp `datetime-local` nicht bereitstellt, ist die Möglichkeit, die Zeitzone und/oder das Gebietsschema des Datums-/Uhrzeit-Steuerelements festzulegen. Dies war im Eingabetyp `datetime` verfügbar, aber dieser Typ ist inzwischen veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe für seine Entfernung sind die fehlende Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche und Benutzererfahrung. Es ist einfacher, lediglich ein Steuerelement (oder mehrere Steuerelemente) zum Festlegen des Datums/der Uhrzeit zu haben und das Gebietsschema dann in einem separaten Steuerelement zu behandeln.

Wenn Sie beispielsweise ein System erstellen, bei dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Gebietsschema bereits festgelegt wurde, könnten Sie die Zeitzone in einem Eingabetyp [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Wenn Sie hingegen dem Benutzer erlauben müssen, zusammen mit einer Datums-/Uhrzeiteingabe eine Zeitzone einzugeben, könnten Sie ein {{htmlelement("select")}}-Element verwenden, damit der Benutzer die richtige Zeitzone durch Auswahl eines bestimmten Orts aus einer Reihe von Orten festlegen kann:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datums-/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt. Anschließend müssten Sie sie auf der Serverseite entsprechend in der Datenbank speichern.

## Validierung

Standardmäßig wendet `<input type="datetime-local">` keine Validierung auf eingegebene Werte an. Die Implementierungen der Benutzeroberfläche erlauben im Allgemeinen nicht die Eingabe von etwas anderem als einem Datum/einer Uhrzeit – was hilfreich ist –, ein Benutzer könnte jedoch trotzdem keinen Wert eingeben und das Formular absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z. B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Maximale und minimale Daten und Uhrzeiten festlegen](#maximale_und_minimale_daten_und_uhrzeiten_festlegen)), und Sie können das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) verwenden, um die Eingabe des Datums/der Uhrzeit verpflichtend zu machen. Dadurch zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum außerhalb der festgelegten Grenzen oder ein leeres Datumsfeld abzusenden.

Sehen wir uns ein Beispiel an: Hier haben wir minimale und maximale Datums-/Uhrzeitwerte festgelegt und das Feld außerdem als erforderlich markiert:

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

Wenn Sie versuchen, das Formular mit einem unvollständigen Datum (oder mit einem Datum außerhalb der festgelegten Grenzen) abzusenden, zeigt der Browser einen Fehler an. Probieren Sie jetzt das Beispiel aus:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist das im obigen Beispiel verwendete CSS. Wir verwenden hier die CSS-Eigenschaften {{cssxref(":valid")}} und {{cssxref(":invalid")}}, um die Eingabe abhängig davon zu gestalten, ob der aktuelle Wert gültig ist. Die Symbole platzieren wir auf einem {{htmlelement("span")}} neben der Eingabe.

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
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das korrekte Format haben. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, mit denen die Validierung umgangen oder vollständig entfernt werden kann. Es ist auch möglich, Ihr HTML vollständig zu umgehen und die Daten direkt an Ihren Server zu senden. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer in das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Die grundlegendste Verwendung von `<input type="datetime-local">` umfasst eine einfache Kombination aus `<input>`- und {{htmlelement("label")}}-Element, wie unten dargestellt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Maximale und minimale Daten und Uhrzeiten festlegen

Sie können die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwenden, um die Daten/Uhrzeiten einzuschränken, die der Benutzer auswählen kann. Im folgenden Beispiel legen wir eine minimale Datums-/Uhrzeitangabe von `2025-06-01T08:30` und eine maximale Datums-/Uhrzeitangabe von `2025-06-30T16:30` fest:

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

Es können nur Tage im Juni 2025 ausgewählt werden. Abhängig davon, welchen Browser Sie verwenden, können Uhrzeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Uhrzeiten auswählbar, entsprechen aber {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} und bestehen die [Validierung](#validierung) nicht.

In einigen Browsern (Safari) scheint die Datumsauswahl jedes Datum zu erlauben, aber der Wert wird beim Auswählen eines Datums auf den gültigen Bereich begrenzt.

Der gültige Bereich umfasst alle Uhrzeiten zwischen den Werten `min` und `max`; die Tageszeit ist nur am ersten und letzten Datum im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten das Attribut [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) verwenden können, um die Anzahl der Tage zu variieren, die bei jeder Erhöhung des Datums übersprungen werden (Sie möchten beispielsweise vielleicht nur Samstage auswählbar machen). Zum Zeitpunkt der Erstellung dieses Dokuments scheint dies jedoch in keiner Implementierung effektiv zu funktionieren.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die ein Datum und eine Uhrzeit (in der
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

- Das allgemeine {{HTMLElement("input")}}-Element und die zum Bearbeiten verwendete Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- [In HTML verwendete Datums- und Uhrzeitformate](/de/docs/Web/HTML/Guides/Date_and_time_formats)
- [Tutorial zur Datums- und Uhrzeitauswahl](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
