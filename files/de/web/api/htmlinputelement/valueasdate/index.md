---
title: "HTMLInputElement: valueAsDate-Eigenschaft"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: b3255d84180469dd88777cac21082c57d9dabcfe
---

{{ APIRef("HTML DOM") }}

Die **`valueAsDate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als ein {{jsxref("Date")}}-Objekt oder `null`, wenn eine Konvertierung nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise ein Standarddatum basierend auf einer Bedingung festzulegen. Wenn der bereitgestellte Wert weder `null` noch ein `Date`-Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn der bereitgestellte Wert `null` oder ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, wird der Eingabewert auf den leeren String gesetzt.

Diese Eigenschaft gibt immer `null` zurück, wenn sie auf einem Eingabefeld zugreift, das nicht datums- oder zeitbasiert ist. Beim Setzen dieser Eigenschaft auf einem solchen Eingabefeld wird ein `InvalidStateError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Wert

Ein {{jsxref("Date")}}-Objekt oder `null`, wenn eine Konvertierung unmöglich ist. Das zurückgegebene Datum sollte immer als UTC-Zeit interpretiert werden – zum Beispiel, indem Methoden wie `getUTCDate()` anstelle von `getDate()` verwendet werden. Wenn Sie nicht vorsichtig sind, kann das Ergebnis um einen Tag abweichen – zum Beispiel, wenn der Benutzer in einer negativen UTC-Zeitverschiebung lebt (zum Beispiel in den USA), dann führt die Interpretation des Datums als lokales Datum zum vorherigen Tag von dem, was der Benutzer ausgewählt hat.

Die Eingabetypen [`month`](/de/docs/Web/HTML/Element/input/month), [`date`](/de/docs/Web/HTML/Element/input/date) und [`week`](/de/docs/Web/HTML/Element/input/week) geben ein UTC-Datum zurück, das den ersten Moment des eingegebenen Zeitraums darstellt – das heißt, sie sind immer Mitternacht in UTC. Bei `month` ist das Datum der erste Tag des Monats. Bei `week` ist das Datum der Montag der Woche. Der Eingabetyp [`time`](/de/docs/Web/HTML/Element/input/time) hat das Datum immer auf `1970-01-01` gesetzt.

Der Eingabetyp [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local) unterstützt die `valueAsDate`-Eigenschaft nicht, da er ein Datum und eine Uhrzeit in der lokalen Zeitzone (eine [Wanduhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime)) darstellt, während `Date`-Objekte einen absoluten Zeitpunkt repräsentieren. Einige Browser bieten jedoch möglicherweise eine nicht standardmäßige Implementierung. [WHATWG arbeitet daran](https://github.com/whatwg/html/issues/10882), die {{jsxref("Temporal")}}-API mit den Datums-/Zeiteingaben zu integrieren, um diesen Anwendungsfall zu berücksichtigen.

## Beispiele

### Abrufen eines Datumswerts

Dieses Beispiel demonstriert den Zugriff auf die `valueAsDate`-Eigenschaft eines `<input>` vom Typ {{HTMLElement("input/week", "week")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `week` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Uhrzeit ausgewählt ist, ergibt das leere Eingabefeld `null`. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst, das den `<pre>`-Inhalt aktualisiert und den [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) des Formularelements im Vergleich zu diesem Wert als Datum anzeigt.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Initial value: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsDate}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Retrieving a date value", "", 100)}}

### Verwenden von Date-Methoden

Dieses Beispiel zeigt die direkte Anwendung von {{jsxref("Date")}}-Methoden auf die `valueAsDate`-Eigenschaft eines `<input>` vom Typ {{HTMLElement("input/date", "date")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `date` ein:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum ausgewählt ist, ergibt der leere String `null`. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst. Wir füllen dann das Protokoll mit dem ausgewählten Datum, formatiert mithilfe der {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}}-Methode des `Date`-Objekts.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date2");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

logElement.innerText = `Initial value: ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  if (inputElement.valueAsDate !== null) {
    logElement.innerText = `You selected ${inputElement.valueAsDate.toLocaleDateString("en-US", options)}`;
  } else {
    logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsDate}`;
  }
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Using Date methods", "", 100)}}

Das Datum kann aufgrund Ihrer lokalen Zeitzone um einen Tag abweichen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
