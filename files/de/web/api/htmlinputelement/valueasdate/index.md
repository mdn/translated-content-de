---
title: "HTMLInputElement: valueAsDate-Eigenschaft"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

Die **`valueAsDate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als ein {{jsxref("Date")}}, oder `null`, wenn eine Umwandlung nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um ein Standarddatum basierend auf einer Bedingung zu setzen. Wenn der angegebene Wert weder `null` noch ein `Date`-Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn der angegebene Wert `null` oder ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, wird der Eingabewert auf die leere Zeichenfolge gesetzt.

Diese Eigenschaft gibt immer `null` zurück, wenn sie auf einem Eingabefeld abgefragt wird, das nicht datum- oder uhrzeitbasiert ist. Beim Setzen dieser Eigenschaft auf ein solches Eingabefeld wird ein `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Wert

Ein {{jsxref("Date")}}-Objekt oder `null`, wenn eine Umwandlung unmöglich ist.

## Beispiele

### Abrufen eines Datumswertes

Dieses Beispiel zeigt den Zugriff auf die `valueAsDate`-Eigenschaft bei einem `<input>` vom Typ {{HTMLElement("input/week", "week")}}.

#### HTML

Wir fügen ein `<input>` des Typs `week` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Uhrzeit ausgewählt ist, wird das leere Eingabefeld als `null` aufgelöst. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst, das den `<pre>`-Inhalt aktualisiert und den [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) des Formularsteuerfeldes im Vergleich zu diesem Wert als Datum anzeigt.

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

### Verwendung von Date-Methoden

Dieses Beispiel zeigt, wie {{jsxref("Date")}}-Methoden direkt auf die `valueAsDate`-Eigenschaft eines `<input>` vom Typ {{HTMLElement("input/date", "date")}} angewendet werden.

#### HTML

Wir fügen ein `<input>` des Typs `date` ein:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum ausgewählt ist, wird die leere Zeichenfolge als `null` aufgelöst. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst. Wir füllen dann das Protokoll mit dem ausgewählten Datum, formatiert mit der {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}}-Methode des `Date`-Objekts.

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
