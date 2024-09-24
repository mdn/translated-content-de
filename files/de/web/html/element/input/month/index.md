---
title: <input type="month">
slug: Web/HTML/Element/input/month
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente vom Typ **`month`** erstellen Eingabefelder, die dem Benutzer ermöglichen, einen Monat und ein Jahr einzugeben, wobei Monat und Jahr einfach eingegeben werden können.
Der Wert ist eine Zeichenfolge im Format "`YYYY-MM`", wobei `YYYY` das vierstellige Jahr und `MM` die Monatsnummer ist.

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

Die Benutzeroberfläche der Kontrolle variiert im Allgemeinen von Browser zu Browser; derzeit ist die Unterstützung lückenhaft, mit nur Chrome/Opera und Edge auf Desktops – und den meisten modernen mobilen Browser-Versionen – die brauchbare Implementierungen haben.
In Browsern, die `month` Eingaben nicht unterstützen, wird die Kontrolle auf ein einfaches [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) zurückgestuft, obwohl möglicherweise eine automatische Validierung des eingegebenen Textes erfolgt, um sicherzustellen, dass er wie erwartet formatiert ist.

Für diejenigen, die einen Browser verwenden, der `month` nicht unterstützt, zeigt der folgende Screenshot, wie es in Chrome und Opera aussieht.
Ein Klick auf den Abwärtspfeil auf der rechten Seite öffnet einen Datumsauswahler, der es Ihnen ermöglicht, den Monat und das Jahr auszuwählen.

![Monatskontrolle im Chrome-Browser](month-control-chrome.png)

Die Microsoft Edge `month` Kontrolle sieht so aus:

![Monatskontrolle im Edge-Browser](month-control-edge.png)

## Wert

Eine Zeichenfolge, die den eingegebenen Monat und das Jahr im Format YYYY-MM (vier oder mehr Ziffern für das Jahr, dann ein Bindestrich ("`-`"), gefolgt vom zweistelligen Monat) darstellt.
Das Format der von diesem Eingabetyp verwendeten Monatszeichenfolge wird in [Month strings](/de/docs/Web/HTML/Date_and_time_formats#month_strings) beschrieben.

### Festlegen eines Standardwerts

Sie können einen Standardwert für die Eingabekontrolle festlegen, indem Sie einen Monat und ein Jahr innerhalb des [`value`](/de/docs/Web/HTML/Element/input#value) Attributs angeben, zum Beispiel:

```html
<label for="bday-month">In welchem Monat wurden Sie geboren?</label>
<input id="bday-month" type="month" name="bday-month" value="2001-06" />
```

{{EmbedLiveSample('Setting_a_default_value', 600, 60)}}

Ein wichtiger Punkt ist, dass das angezeigte Datumsformat sich vom tatsächlichen `value` unterscheidet; die meisten {{Glossary("user agent", "user agents")}} zeigen den Monat und das Jahr in einer lokalisierungsgerechten Form an, basierend auf der festgelegten Lokale des Betriebssystems des Benutzers, während das Datum `value` immer im Format `yyyy-MM` formatiert ist.

Wenn der obige Wert zum Beispiel an den Server übermittelt wird, wird er aussehen wie `bday-month=1978-06`.

### Festlegen des Werts mit JavaScript

Sie können den Datumswert auch in JavaScript mithilfe der {{domxref("HTMLInputElement.value")}} Eigenschaft abrufen und festlegen, zum Beispiel:

```html
<label for="bday-month">In welchem Monat wurden Sie geboren?</label>
<input id="bday-month" type="month" name="bday-month" />
```

```js
const monthControl = document.querySelector('input[type="month"]');
monthControl.value = "2001-06";
```

{{EmbedLiveSample("Setting_the_value_using_JavaScript", 600, 60)}}

## Zusätzliche Attribute

Neben den Attributen, die für {{HTMLElement("input")}} Elemente üblich sind, bieten Monatseingaben die folgenden Attribute.

### list

Der Wert des list Attributs ist die {{domxref("Element.id", "id")}} eines {{HTMLElement("datalist")}} Elements, das sich im gleichen Dokument befindet.
Die {{HTMLElement("datalist")}} bietet eine Liste voreingestellter Werte an, die dem Benutzer als Vorschläge für diese Eingabe gemacht werden.
Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Element/input#type) kompatibel sind, werden nicht in die vorgeschlagenen Optionen aufgenommen.
Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser voreingestellten Liste auswählen oder einen anderen Wert angeben.

### max

Das späteste Jahr und der späteste Monat, im oben im Abschnitt [Wert](#wert) besprochenen Zeichenkettenformat, das akzeptiert wird.
Wenn der [`value`](/de/docs/Web/HTML/Element/input#value), der in das Element eingegeben wurde, diesen überschreitet, schlägt das Element [die Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn der Wert des max Attributs keine gültige Zeichenfolge im Format "`yyyy-MM`" ist, hat das Element keinen Maximalwert.

Dieser Wert muss eine Jahr-Monat-Paarung angeben, die später oder gleich der des `min` Attributs ist.

### min

Das früheste Jahr und der früheste Monat, die akzeptiert werden, im gleichen "`yyyy-MM`" Format wie oben beschrieben.
Wenn der [`value`](/de/docs/Web/HTML/Element/input#value) des Elements geringer ist als dieser, schlägt das Element [die Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl.
Wenn ein Wert für `min` angegeben wird, der keine gültige Jahr- und Monatszeichenfolge ist, hat die Eingabe keinen Mindestwert.

Dieser Wert muss eine Jahr-Monat-Paarung sein, die früher oder gleich der des `max` Attributs ist.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann.
Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der den Wert der {{domxref("HTMLInputElement.value")}} Eigenschaft direkt festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem ebenfalls spezifizierten `readonly` Attribut.

### step

Das `step` Attribut ist eine Zahl, die die Granularität angibt, die der Wert einhalten muss, oder den speziellen Wert `any`, der unten beschrieben wird.
Nur Werte, die dem Stufungsgrundlagen entsprechen ([`min`](#min) falls angegeben, [`value`](/de/docs/Web/HTML/Element/input#value) andernfalls, und einem entsprechenden Standardwert, wenn keiner von diesen angegeben ist) sind gültig.

Ein Zeichenkettenwert von `any` bedeutet, dass keine Stufung impliziert ist, und jeder Wert (unter Vorbehalt anderer Einschränkungen, wie [`min`](#min) und [`max`](#max)) erlaubt ist.

> [!NOTE]
> Wenn die vom Benutzer eingegebenen Daten nicht der Stufungskonfiguration entsprechen, kann der {{Glossary("user agent")}} möglicherweise auf den nächsten gültigen Wert runden und dabei Zahlen in positiver Richtung bevorzugen, wenn zwei gleich nahe Optionen vorhanden sind.

Für `month` Eingaben wird der Wert von `step` in Monaten angegeben, mit einem Skalierungsfaktor von 1 (da der zugrunde liegende numerische Wert auch in Monaten ist).
Der Standardwert für `step` ist 1 Monat.

## Verwendung von Monatseingaben

Datumsbezogene Eingaben (einschließlich `month`) klingen zunächst bequem; sie versprechen eine einfache Benutzeroberfläche zur Auswahl von Daten und normalisieren das Datenformat, das an den Server gesendet wird, unabhängig von der Lokalisierung des Benutzers.
Es gibt jedoch Probleme mit `<input type="month">`, da derzeit viele große Browser es noch nicht unterstützen.

Wir werden einen Blick auf grundlegende und komplexere Verwendungen von `<input type="month">` werfen und dann im Abschnitt [Umgang mit Browser-Support](#umgang_mit_browser-support)) Ratschläge zur Minderung des Browser-Support-Problems anbieten.

### Grundlegende Verwendungen von Monat

Die einfachste Verwendung von `<input type="month">` beinhaltet eine einfache Kombination von {{HTMLElement("input")}} und {{htmlelement("label")}} Elementen, wie unten gezeigt:

```html
<form>
  <label for="bday-month">In welchem Monat wurden Sie geboren?</label>
  <input id="bday-month" type="month" name="bday-month" />
</form>
```

{{EmbedLiveSample('Basic_uses_of_month', 600, 40)}}

### Festlegen maximaler und minimaler Daten

Sie können die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute verwenden, um den Bereich der Daten einzuschränken, die der Benutzer auswählen kann.
Im folgenden Beispiel geben wir einen Mindestmonat von `1900-01` und einen Höchstmonat von `2013-12` an:

```html
<form>
  <label for="bday-month">In welchem Monat wurden Sie geboren?</label>
  <input
    id="bday-month"
    type="month"
    name="bday-month"
    min="1900-01"
    max="2013-12" />
</form>
```

{{EmbedLiveSample('Setting_maximum_and_minimum_dates', 600, 40)}}

Das Ergebnis hier ist, dass:

- Nur Monate zwischen Januar 1900 und Dezember 2013 ausgewählt werden können; Monate außerhalb dieses Bereichs können nicht in der Kontrolle gescrollt werden.
- Je nachdem, welchen Browser Sie verwenden, könnten Sie feststellen, dass Monate außerhalb des angegebenen Bereichs möglicherweise nicht im Monatsauswahler auswählbar sind (z.B. Edge), oder ungültig (siehe [Validierung](#validierung)) aber trotzdem verfügbar (z.B. Chrome).

### Steuern der Eingabegröße

`<input type="month">` unterstützt keine Attribut zur Größenanpassung von Formularen wie [`size`](/de/docs/Web/HTML/Element/input#size).
Sie müssen für Größenanforderungen auf [CSS](/de/docs/Web/CSS) zurückgreifen.

## Validierung

Standardmäßig wendet `<input type="month">` keine Validierung auf eingegebene Werte an.
Die Benutzeroberflächenimplementierungen lassen im Allgemeinen nichts anderes als ein Datum zu, was hilfreich ist, aber Sie können das Formular trotzdem mit dem `month` Eingabefeld leer oder mit einem ungültigen Datum (z.B. den 32. April) einreichen.

Um dies zu vermeiden, können Sie [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) verwenden, um die verfügbaren Daten einzuschränken (siehe [Festlegen maximaler und minimaler Daten](#festlegen_maximaler_und_minimaler_daten)), und zusätzlich das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut verwenden, um das Ausfüllen des Datums obligatorisch zu machen.
In unterstützenden Browsern wird ein Fehler angezeigt, wenn Sie versuchen, ein Datum einzureichen, das außerhalb der festgelegten Grenzen liegt, oder ein leeres Datumsfeld.

Sehen wir uns ein Beispiel an; hier haben wir minimale und maximale Daten festgelegt und auch das Feld obligatorisch gemacht:

```html
<form>
  <div>
    <label for="month">
      Welchen Monat möchten Sie besuchen (Juni bis Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Formular absenden" />
  </div>
</form>
```

Wenn Sie versuchen, das Formular ohne sowohl den Monat als auch das Jahr anzugeben (oder mit einem Datum außerhalb der festgelegten Grenzen), zeigt der Browser einen Fehler an.
Versuchen Sie jetzt, mit dem Beispiel zu spielen:

{{ EmbedLiveSample('Validation', 600, 120) }}

Hier ist ein Screenshot für diejenigen unter Ihnen, die keinen unterstützenden Browser verwenden:

![Monatsabfrage im Chrome-Browser erforderlich](month-required.png)

Hier ist das im obigen Beispiel verwendete CSS.
Wir nutzen die {{cssxref(":valid")}} und {{cssxref(":invalid")}} CSS-Eigenschaften, um das Eingabefeld basierend darauf zu gestalten, ob der aktuelle Wert gültig ist.
Wir mussten die Symbole auf einem {{htmlelement("span")}} neben dem Eingabefeld und nicht auf dem Eingabefeld selbst platzieren, da in Chrome der generierte Inhalt innerhalb des Formularelements platziert ist und nicht effektiv gestaltet oder angezeigt werden kann.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

> [!WARNING]
> Die HTML-Formularvalidierung ist _kein_ Ersatz für Skripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben.
> Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm erlauben, die Validierung zu umgehen oder sie ganz zu entfernen.
> Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet.
> Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu katastrophalen Folgen kommen, wenn falsch formatierte Daten übermittelt werden (oder Daten, die zu groß sind, vom falschen Typ und so weiter).

## Umgang mit Browser-Support

Wie bereits erwähnt, besteht das Hauptproblem bei der Verwendung von Datumseingaben zurzeit darin, dass viele große Browser sie noch nicht implementieren; nur Chrome/Opera und Edge unterstützen sie auf Desktops, und die meisten modernen Browser auf mobilen Geräten.
Zum Beispiel sieht der `month` Picker auf Chrome für Android so aus:

![Monatsauswahl auf Chrome für Android](month-android.png)

Nicht unterstützende Browser degradieren problemlos auf eine Texteingabe, aber dies schafft sowohl in Bezug auf die Konsistenz der Benutzeroberfläche (das präsentierte Steuerungselement wird anders sein) als auch die Datenverarbeitung Probleme.

Das zweite Problem ist das ernstere der beiden.
Wie bereits erwähnt, wird mit einer `month` Eingabe der tatsächliche Wert immer im Format `yyyy-mm` normalisiert.
Andererseits hat eine `text` Eingabe in ihrer Standardkonfiguration keine Ahnung, in welchem Format das Datum sein sollte, und dies stellt ein Problem dar, da es so viele verschiedene Möglichkeiten gibt, wie Menschen Daten schreiben.
Zum Beispiel:

- `mmyyyy` (072022)
- `mm/yyyy` (07/2022)
- `mm-yyyy` (07-2022)
- `yyyy-mm` (2022-07)
- `Month yyyy` (July 2022)
- und so weiter…

Ein Weg, das zu umgehen, besteht darin, ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut auf Ihre `month` Eingabe zu setzen.
Obwohl die `month` Eingabe es nicht verwendet, wird das Muster verwendet, wenn der Browser es als `text` Eingabe behandelt.
Wenn Sie das folgende Demo in einem Browser betrachten, der `month` Eingaben nicht unterstützt, werden Sie feststellen:

```html
<form>
  <div>
    <label for="month">
      Welchen Monat möchten Sie besuchen (Juni bis Sept.)?
    </label>
    <input
      id="month"
      type="month"
      name="month"
      min="2022-06"
      max="2022-09"
      required
      pattern="[0-9]{4}-[0-9]{2}" />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Formular absenden" />
  </div>
</form>
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

Wenn Sie versuchen, es zu übermitteln, werden Sie feststellen, dass der Browser jetzt eine Fehlermeldung anzeigt (und die Eingabe als ungültig hervorhebt), wenn Ihr Eintrag nicht dem Muster `nnnn-nn` entspricht, wobei `n` eine Zahl von 0 bis 9 ist.
Natürlich hindert dies die Leute nicht daran, ungültige Daten einzugeben (wie `0000-42`) oder falsch formatierte Daten, die dem Muster folgen.

Es gibt auch das Problem, dass der Benutzer nicht unbedingt weiß, welches der vielen Datumsformate erwartet wird.
Wir haben noch Arbeit vor uns.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Der beste Weg, um mit Datumsangaben in Formularen plattformübergreifend umzugehen (bis alle großen Browser sie für eine Weile unterstützt haben), besteht darin, den Benutzer zu bitten, den Monat und das Jahr in separaten Kontrollen ({{htmlelement("select")}} Elemente sind beliebt; siehe unten für eine Implementierung), oder JavaScript-Bibliotheken wie das [jQuery date picker](https://jqueryui.com/datepicker/) Plugin zu verwenden.

## Beispiele

In diesem Beispiel erstellen wir zwei Sätze von UI-Elementen, die jeweils darauf ausgelegt sind, dem Benutzer die Auswahl eines Monats und Jahres zu ermöglichen.
Der erste ist eine native `month` Eingabe, und der andere ist ein Paar von {{HTMLElement("select")}} Elementen, die es ermöglichen, Monat und Jahr unabhängig auszuwählen, für die Kompatibilität mit Browsern, die `<input type="month">` noch nicht unterstützen.

{{EmbedLiveSample('Examples', 600, 140)}}

### HTML

Das Formular, das den Monat und das Jahr anfordert, sieht folgendermaßen aus:

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">Welchen Monat möchten Sie uns besuchen?</label>
    <input type="month" id="month-visit" name="month-visit" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Welchen Monat möchten Sie uns besuchen?</p>
  <div class="fallbackDatePicker">
    <div>
      <span>
        <label for="month">Monat:</label>
        <select id="month" name="month">
          <option selected>Januar</option>
          <option>Februar</option>
          <option>März</option>
          <option>April</option>
          <option>Mai</option>
          <option>Juni</option>
          <option>Juli</option>
          <option>August</option>
          <option>September</option>
          <option>Oktober</option>
          <option>November</option>
          <option>Dezember</option>
        </select>
      </span>
      <span>
        <label for="year">Jahr:</label>
        <select id="year" name="year"></select>
      </span>
    </div>
  </div>
</form>
```

Das {{HTMLElement("div")}} mit der ID `nativeDatePicker` verwendet den `month` Eingabetyp, um Monat und Jahr anzufordern, während das `<div>` mit der ID `fallbackDatePicker` stattdessen ein Paar von `<select>` Elementen verwendet.
Das erste fragt den Monat ab, und das zweite das Jahr.

Das `<select>` zur Auswahl des Monats ist mit den Namen der Monate fest kodiert, da sie sich nicht ändern (Abgesehen von der Lokalisierung).
Die Liste der verfügbaren Jahreswerte wird dynamisch je nach aktuellem Jahr generiert (siehe die Codekommentare unten für ausführliche Erläuterungen, wie diese Funktionen funktionieren).

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

### JavaScript

Der JavaScript-Code, der auswählt, welcher Ansatz verwendet werden soll, und die Liste der Jahre für die nicht-native Jahres-`<select>` festlegt, folgt.

Der Teil des Beispiels, der am interessantesten sein kann, ist der Code zur Feature-Erkennung.
Um herauszufinden, ob der Browser `<input type="month">` unterstützt, erstellen wir ein neues {{htmlelement("input")}} Element, versuchen, seinen `type` auf `month` zu setzen, und prüfen dann sofort, auf welchen Typ es gesetzt ist.
Browser, die den Typ `month` nicht unterstützen, geben `text` zurück, da dies `month` zurückfällt, wenn es nicht unterstützt wird.
Wenn `<input type="month">` nicht unterstützt wird, blenden wir die native Picker-UI aus und zeigen stattdessen die Fallback-Picker-UI an.

```js
// UI-Elemente abrufen
const nativePicker = document.querySelector(".nativeDatePicker");
const fallbackPicker = document.querySelector(".fallbackDatePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const monthSelect = document.querySelector("#month");

// Fallback zunächst ausblenden
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Testen, ob eine neue Date-Eingabe auf eine Texteingabe zurückfällt oder nicht
const test = document.createElement("input");

try {
  test.type = "month";
} catch (e) {
  console.log(e.description);
}

// Wenn ja, führen Sie den Codeblock innerhalb des if () {} aus
if (test.type === "text") {
  // Den nativen Picker ausblenden und den Fallback anzeigen
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // Die Jahre dynamisch befüllen
  // (die Monate sind immer gleich, daher fest kodiert)
  populateYears();
}

function populateYears() {
  // Das aktuelle Jahr als Zahl abrufen
  const date = new Date();
  const year = date.getFullYear();

  // Dieses Jahr und die 100 Jahre davor im Jahr-<select> verfügbar machen
  for (let i = 0; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}
```

> [!NOTE]
> Denken Sie daran, dass einige Jahre 53 Wochen haben (siehe [Weeks per year](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))!
> Dies müssen Sie berücksichtigen, wenn Sie Produktionsanwendungen entwickeln.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die einen Monat und ein Jahr darstellt, oder
        leer.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><strong>IDL Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Kompatibilität in Browsern

{{Compat}}

## Siehe auch

- Das generische {{HTMLElement("input")}} Element und die Schnittstelle, die verwendet wird, um es zu manipulieren, {{domxref("HTMLInputElement")}}
- [Date- und Zeitformate, die in HTML verwendet werden](/de/docs/Web/HTML/Date_and_time_formats)
- [Datum- und Zeit-Auswahl-Tutorial](/de/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers)
- [`<input type="datetime-local">`](/de/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/de/docs/Web/HTML/Element/input/date), [`<input type="time">`](/de/docs/Web/HTML/Element/input/time), und [`<input type="week">`](/de/docs/Web/HTML/Element/input/week)
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
