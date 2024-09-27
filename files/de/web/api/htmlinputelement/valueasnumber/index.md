---
title: "HTMLInputElement: valueAsNumber Eigenschaft"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{ APIRef("HTML DOM") }}

Die **`valueAsNumber`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als Zahl oder `NaN`, wenn eine Umwandlung in einen numerischen Wert nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zahl, die den Wert des Elements darstellt, oder `NaN`, wenn eine numerische Umwandlung unmöglich ist.

## Beispiele

### Abrufen eines Zahlenwertes

In diesem Beispiel zeigt das Log den aktuellen Wert des {{HTMLElement("input/number", "number")}}-Eingabefeldes an, wenn er geändert wird.

#### HTML

Wir fügen ein {{htmlelement("input")}} vom Typ `number` und ein zugehöriges {{htmlelement("label")}} sowie einen {{htmlelement("pre")}}-Container für unsere Ausgabe ein.

```html
<label for="number">Pick a number between 1 and 10:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

Das [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<pre>`-Elements wird jedes Mal auf den aktuellen Wert des `<input>` aktualisiert, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst wird.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("number");

inputElement.addEventListener("change", () => {
  logElement.innerText = `Number: ${inputElement.valueAsNumber}`;
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

{{EmbedLiveSample("Retrieving a number value", "", 100)}}

Wenn Sie die Zahl im Widget löschen, ist das Ergebnis `NaN`.

### Abrufen eines Datumswertes als Zahl

Dieses Beispiel demonstriert die `valueAsNumber`-Eigenschaft eines `<input>`-Elements mit dem Typ {{HTMLElement("input/datetime-local", "datetime-local")}}.

#### HTML

Wir fügen ein `<input>` vom Typ `datetime-local` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Uhrzeit ausgewählt ist, wird der leere String zu `NaN`. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst, das den `<pre>`-Inhalt aktualisiert und den [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) des Formularelements im Vergleich zu diesem Wert als Zahl anzeigt.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Initial value: ${inputElement.valueAsNumber}`;

inputElement.addEventListener("change", () => {
  const d = new Date(inputElement.valueAsNumber);
  logElement.innerText = `${inputElement.value} resolves to ${inputElement.valueAsNumber}, \nwhich is ${d.toDateString()} at ${d.toTimeString()}`;
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

{{EmbedLiveSample("Retrieving a date value as a number", "", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value)
- [`HTMLInputElement.valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
