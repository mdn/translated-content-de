---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

{{htmlelement("input")}}-Elemente des Typs **`datetime-local`** erstellen Eingabesteuerungen, die es dem Benutzer leicht machen, sowohl ein Datum als auch eine Uhrzeit einzugeben, einschließlich Jahr, Monat und Tag sowie die Uhrzeit in Stunden und Minuten.

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

Die Benutzeroberfläche der Steuerung variiert in der Regel von Browser zu Browser. Die Steuerung soll _ein lokales Datum und eine lokale Uhrzeit_ darstellen, nicht unbedingt _das lokale Datum und die lokale Uhrzeit des Benutzers_. Mit anderen Worten, die Eingabe erlaubt jede gültige Kombination von Jahr, Monat, Tag, Stunde und Minute – selbst wenn eine solche Kombination in der lokalen Zeitzone des Benutzers ungültig ist (wie die eine Stunde innerhalb einer zeitlichen Umstellung auf Sommerzeit).

## Wert

Eine Zeichenkette, die den Wert des in das Eingabefeld eingegebenen Datums darstellt. Das Format des Datums- und Uhrzeitwerts, das von diesem Eingabetyp verwendet wird, wird in [Lokale Datums- und Zeitzeichenketten](/de/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings) beschrieben.

Sie können einen Standardwert für die Eingabe festlegen, indem Sie ein Datum und eine Uhrzeit innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value)-Attributs angeben, so:

```html
<label for="party">Enter a date and time for your party booking:</label>
<input
  id="party"
  type="datetime-local"
  name="party-date"
  value="2017-06-01T08:30" />
```

{{ EmbedLiveSample('Value', 600, 60) }}

Ein Punkt, den es zu beachten gilt, ist, dass die angezeigten Datums- und Uhrzeitformate von dem tatsächlichen `value` abweichen; das angezeigte Datum und die Uhrzeit werden entsprechend der vom Betriebssystem des Benutzers gemeldeten Gebietsschema formatiert, während der Datum/Uhrzeit-`value` immer im Format `YYYY-MM-DDTHH:mm` formatiert wird. Wenn der obige Wert beispielsweise an den Server gesendet wird, sieht er so aus: `party-date=2024-06-01T08:30`.

> [!NOTE]
> Beachten Sie auch, dass, wenn solche Daten über HTTP [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET) gesendet werden, das Doppelpunkt-Zeichen für die Aufnahme in URL-Parameter escaped werden muss, z.B. `party-date=2024-06-01T08%3A30`. Siehe {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} für eine Möglichkeit, dies zu tun.

Sie können den Datumswert in JavaScript auch mit der `value`-Eigenschaft von [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) abrufen und festlegen, zum Beispiel:

```js
const dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, bieten `datetime-local`-Eingaben die folgenden Attribute.

### max

Das späteste Datum und die späteste Uhrzeit, die akzeptiert werden. Wenn der in das Element eingegebene [`value`](/de/docs/Web/HTML/Element/input#value) später als dieser Zeitstempel ist, schlägt die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) für das Element fehl. Wenn der Wert des `max`-Attributs keine gültige Zeichenkette ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Höchstwert.

Dieser Wert muss eine Datumszeichenkette angeben, die später oder gleich der durch das `min`-Attribut angegebenen ist.

### min

Das früheste Datum und die früheste Uhrzeit, die akzeptiert werden; Zeitstempel früher als dieser führen dazu, dass das Element die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) nicht besteht. Wenn der Wert des `min`-Attributs keine gültige Zeichenkette ist, die dem Format `YYYY-MM-DDTHH:mm` folgt, hat das Element keinen Mindestwert.

Dieser Wert muss eine Datumszeichenkette angeben, die früher oder gleich der durch das `max`-Attribut angegebenen ist.

### step

Das `step`-Attribut ist eine Zahl, die die Granularität angibt, an die der Wert sich halten muss, oder der spezielle Wert `any`, der unten beschrieben wird. Nur Werte, die dem Prinzip für das Abstufen ([`min`](#min), falls angegeben, andernfalls [`value`](/de/docs/Web/HTML/Element/input#value) und ein geeigneter Standardwert, falls keiner dieser Werte bereitgestellt wird) entsprechen, sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass kein Abstufungsprinzip impliziert wird und jeder Wert erlaubt ist (außer anderen Einschränkungen wie [`min`](#min) und [`max`](#max)).

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Abstufungskonfiguration entsprechen, kann der {{Glossary("user_agent", "Benutzeragent")}} auf den nächsten gültigen Wert runden, wobei bevorzugt Zahlen in positiver Richtung verwendet werden, wenn es zwei gleich nahe Optionen gibt.

Für `datetime-local`-Eingaben wird der Wert von `step` in Sekunden angegeben, mit einem Skalierungsfaktor von 1000 (da der zugrunde liegende numerische Wert in Millisekunden angegeben wird). Der Standardwert von `step` ist 60, was 60 Sekunden (oder 1 Minute oder 60.000 Millisekunden) anzeigt.

_Zu diesem Zeitpunkt ist unklar, was ein Wert von `any` für `step` bedeutet, wenn er mit `datetime-local`-Eingaben verwendet wird. Diese Informationen werden aktualisiert, sobald sie bekannt sind._

## Verwendung von datetime-local Eingaben

Datum/Uhrzeit-Eingaben sind für den Entwickler praktisch; sie bieten eine einfache Benutzeroberfläche zum Wählen von Daten und Uhrzeiten und sie normalisieren das an den Server gesendete Datenformat, unabhängig vom Gebietsschema des Benutzers. Es ist jedoch wichtig, Ihre Benutzer zu berücksichtigen. Verlangen Sie nicht von Ihren Benutzern, Daten einzugeben, die für das Funktionieren Ihrer App nicht benötigt werden.

### Steuerung der Eingabegröße

`<input type="datetime-local">` unterstützt keine Formsteuerungsgrößenattribute wie [`size`](/de/docs/Web/HTML/Element/input#size). Sie müssen [CSS](/de/docs/Web/CSS) verwenden, um die Größen dieser Elemente anzupassen.

### Einstellung der Zeitzonen

Eine Sache, die der `datetime-local` Eingabetyp nicht bietet, ist die Möglichkeit, die Zeitzone und/oder das Gebietsschema der Datum/Uhrzeit-Steuerung festzulegen. Dies war im `datetime` Eingabetyp verfügbar, dieser Typ ist jedoch veraltet und wurde aus der Spezifikation entfernt. Die Hauptgründe dafür, dass dies entfernt wurde, sind mangelnde Implementierung in Browsern und Bedenken hinsichtlich der Benutzeroberfläche/Erfahrung. Es ist einfacher, nur eine Steuerung (oder Steuerungen) zum Einstellen von Datum/Uhrzeit zu haben und dann mit dem Gebietsschema in einer separaten Steuerung umzugehen.

Zum Beispiel, wenn Sie ein System erstellen, in dem der Benutzer wahrscheinlich bereits angemeldet ist und sein Gebietsschema bereits festgelegt ist, könnten Sie die Zeitzone in einem [`hidden`](/de/docs/Web/HTML/Element/input/hidden)-Eingabetyp bereitstellen. Zum Beispiel:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Andererseits, wenn Sie es erforderlich machen müssten, dass der Benutzer eine Zeitzone zusammen mit einer Datum/Uhrzeit-Eingabe eingibt, könnten Sie ein {{htmlelement("select")}}-Element haben, mit dem der Benutzer durch Auswahl eines bestimmten Ortes aus einer Menge von Standorten die richtige Zeitzone einstellen kann:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- and so on -->
</select>
```

In beiden Fällen würden die Datum/Uhrzeit- und Zeitzonenwerte als separate Datenpunkte an den Server übermittelt, und Sie müssten diese dann entsprechend in der Datenbank auf der Serverseite speichern.

## Validierung

Standardmäßig führt `<input type="datetime-local">` keine Validierung der eingegebenen Werte durch. Die Implementierung der Benutzeroberfläche lässt in der Regel nichts anderes als ein Datum/Uhrzeit zu — was hilfreich ist — aber ein Benutzer könnte dennoch keinen Wert eingeben und absenden oder ein ungültiges Datum und/oder eine ungültige Uhrzeit eingeben (z.B. den 32. April).

Sie können [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen von maximalen und minimalen Daten](#festlegen_von_maximalen_und_minimalen_daten_und_zeiten)), und Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Ausfüllen von Datum/Uhrzeit verpflichtend zu machen. Infolgedessen zeigen Browser einen Fehler an, wenn Sie versuchen, ein Datum, das außerhalb der gesetzten Grenzen liegt, oder ein leeres Datumsfeld abzusenden.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Datums-/Uhrzeitwerte festgelegt und das Feld auch erforderlich gemacht:

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

Hier ist das im obigen Beispiel verwendete CSS. Hier nutzen wir die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um die Eingabe basierend darauf zu formatieren, ob der aktuelle Wert gültig ist. Wir setzen die Symbole auf einem {{htmlelement("span")}} neben der Eingabe.

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
> HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach, Anpassungen am HTML vorzunehmen, die es jemandem ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, können Probleme auftreten, wenn unsachgemäß formatierte Daten übermittelt werden (oder Daten, die zu groß sind, den falschen Typ haben usw.).

> [!NOTE]
> Bei einer `datetime-local`-Eingabe wird der Datumswert immer auf das Format `YYYY-MM-DDTHH:mm` normalisiert.

## Beispiele

### Grundlegende Verwendung von datetime-local

Die einfachste Verwendung von `<input type="datetime-local">` umfasst eine einfache `<input>`- und {{htmlelement("label")}}-Element-Kombination, wie unten gezeigt:

```html
<form>
  <label for="party">Enter a date and time for your party booking:</label>
  <input id="party" type="datetime-local" name="party-date" />
</form>
```

{{ EmbedLiveSample('Basic_uses_of_datetime-local', 600, 40) }}

### Festlegen von maximalen und minimalen Daten und Zeiten

Sie können die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die Daten/Uhrzeiten einzuschränken, die der Benutzer wählen kann. Im folgenden Beispiel legen wir ein minimales Datum von `2025-06-01T08:30` und ein maximales Datum von `2025-06-30T16:30` fest:

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

Nur Tage im Juni 2025 können ausgewählt werden. Abhängig von dem verwendeten Browser können Zeiten außerhalb der angegebenen Werte möglicherweise nicht ausgewählt werden. In anderen Browsern sind ungültige Daten und Zeiten auswählbar, aber sie werden {{CSSXref(":invalid")}} und {{CSSXref(":out-of-range")}} entsprechen und die [Validierung](#validierung) nicht bestehen.

In einigen Browsern (Chrome und Edge) ist nur der "Tage"-Teil des Datumswerts bearbeitbar, und Daten außerhalb des Juni können nicht gescrollt werden. In anderen (Safari) erscheint der Datumsauswahldialog so, als ob jedes Datum ausgewählt werden könnte, aber der Wert wird beim Auswählen eines Datums auf den gültigen Bereich beschränkt.

Der gültige Bereich umfasst alle Zeiten zwischen den `min`- und `max`-Werten; die Tageszeit ist nur an den ersten und letzten Daten im Bereich eingeschränkt.

> [!NOTE]
> Sie sollten das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut verwenden können, um die Anzahl der Tage zu variieren, die jedes Mal übersprungen werden, wenn das Datum erhöht wird (z.B. vielleicht wollen Sie nur Samstage wählbar machen). Dies funktioniert jedoch derzeit in keiner Implementierung wirklich effektiv.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die ein Datum und eine Uhrzeit (in der
        lokalen Zeitzone) darstellt, oder leer.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
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

- Das generische {{HTMLElement("input")}}-Element und die Schnittstelle, um es zu manipulieren, [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date) und [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- [Datum- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Uhrzeit-Auswahl Tutorial](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#date_and_time_pickers)
