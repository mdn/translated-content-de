---
title: "HTMLInputElement: valueAsDate-Eigenschaft"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

Die **`valueAsDate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als {{jsxref("Date")}}, oder `null`, wenn die Umwandlung nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise ein Standarddatum basierend auf einer Bedingung zu setzen. Wenn der bereitgestellte Wert weder `null` noch ein `Date`-Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn der bereitgestellte Wert `null` oder ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, wird der Eingabewert auf den leeren String gesetzt.

Diese Eigenschaft gibt immer `null` zurück, wenn sie auf einem Eingabeelement ohne datums- oder zeitbasierte Typen aufgerufen wird. Beim Setzen dieser Eigenschaft auf ein solches Eingabeelement wird ein `InvalidStateError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Wert

Ein {{jsxref("Date")}}-Objekt oder `null`, wenn eine Umwandlung unmöglich ist.

## Beispiele

### Abrufen eines Datumswerts

Dieses Beispiel zeigt, wie die `valueAsDate`-Eigenschaft auf einem `<input>` vom Typ {{HTMLElement("input/week", "week")}} abgerufen wird.

#### HTML

Wir fügen ein `<input>` vom Typ `week` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Uhrzeit ausgewählt ist, löst die leere Eingabe `null` auf. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst, das den `<pre>`-Inhalt aktualisiert, der den [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) des Formularsteuerelements im Vergleich zu diesem Wert als Datum zeigt.

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

### Verwenden von Datumsmethoden

Dieses Beispiel zeigt die direkte Anwendung von {{jsxref("Date")}}-Methoden auf die `valueAsDate`-Eigenschaft eines `<input>` vom Typ {{HTMLElement("input/date", "date")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `date` ein:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum ausgewählt ist, löst der leere String `null` auf. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst. Wir füllen dann das Protokoll mit dem ausgewählten Datum aus, formatiert mit der {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}}-Methode des `Date`-Objekts.

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
