---
title: "HTMLInputElement: valueAsDate-Eigenschaft"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

Die **`valueAsDate`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}} Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("input")}} Elements als {{jsxref("Date")}}, oder `null`, wenn eine Konvertierung nicht möglich ist.

Diese Eigenschaft kann direkt gesetzt werden, beispielsweise um ein Standarddatum basierend auf einer Bedingung festzulegen. Wenn der angegebene Wert weder `null` noch ein `Date` Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn der angegebene Wert `null` oder ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, wird der Eingabewert auf den leeren String gesetzt.

Diese Eigenschaft gibt immer `null` zurück, wenn sie auf einem Eingabefeld abgerufen wird, das nicht auf Datum oder Uhrzeit basiert. Beim Setzen dieser Eigenschaft auf ein solches Eingabefeld wird ein `InvalidStateError` {{domxref("DOMException")}} ausgelöst.

## Wert

Ein {{jsxref("Date")}} Objekt oder `null`, wenn eine Konvertierung unmöglich ist.

## Beispiele

### Abrufen eines Datumswerts

Dieses Beispiel demonstriert den Zugriff auf die `valueAsDate` Eigenschaft auf einem `<input>` vom Typ {{HTMLElement("input/week", "week")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `week` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder Uhrzeit ausgewählt ist, wird das leere Eingabefeld als `null` aufgelöst. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein {{domxref("HTMLElement/change_event", "change")}} Ereignis ausgelöst, das den Inhalt des `<pre>` aktualisiert und den {{DOMXref("HTMLInputElement.value")}} des Formularelements im Vergleich zu diesem Wert als Datum anzeigt.

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

Dieses Beispiel demonstriert die direkte Anwendung von {{jsxref("Date")}} Methoden auf die `valueAsDate`-Eigenschaft eines `<input>` vom Typ {{HTMLElement("input/date", "date")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `date` ein:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum ausgewählt ist, wird der leere String als `null` aufgelöst. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein {{domxref("HTMLElement/change_event", "change")}} Ereignis ausgelöst. Wir füllen dann das Log mit dem ausgewählten Datum, formatiert mittels der `Date` Objektmethode {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}}.

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

Das Datum kann aufgrund Ihrer lokalen Zeitzone einen Tag abweichen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
