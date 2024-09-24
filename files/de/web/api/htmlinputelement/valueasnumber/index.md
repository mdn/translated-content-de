---
title: "HTMLInputElement: Eigenschaft valueAsNumber"
short-title: valueAsNumber
slug: Web/API/HTMLInputElement/valueAsNumber
l10n:
  sourceCommit: 3a5e079301779c589f35b35620b12a7a73c42fa2
---

{{APIRef("HTML DOM")}}

Die **`valueAsNumber`** Eigenschaft des {{DOMxRef("HTMLInputElement")}}-Interface stellt den aktuellen Wert des {{htmlelement("input")}}-Elements als Zahl dar oder `NaN`, wenn die Umwandlung in einen numerischen Wert nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise basierend auf einer Bedingung einen Standardnummernwert festzulegen.

## Wert

Eine Zahl, die den Wert des Elements darstellt, oder `NaN`, wenn die numerische Umwandlung unmöglich ist.

## Beispiele

### Abrufen eines Zahlenwerts

In diesem Beispiel wird der aktuelle Wert des {{HTMLElement("input/number", "number")}}-Eingabefelds beim Ändern angezeigt.

#### HTML

Wir binden ein {{htmlelement("input")}} des Typs `number` und ein zugehöriges {{htmlelement("label")}} ein, mit einem {{htmlelement("pre")}}-Container für unsere Ausgabe.

```html
<label for="number">Wählen Sie eine Zahl zwischen 1 und 10:</label>

<input name="number" id="number" min="1" max="10" type="number" />

<pre id="log"></pre>
```

#### JavaScript

Das {{domxref("HTMLElement.innerText", "innerText")}} des `<pre>`-Elements wird jedes Mal auf den aktuellen Wert des `<input>` aktualisiert, wenn ein {{domxref("HTMLElement/change_event", "change")}}-Ereignis ausgelöst wird.

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

Wenn Sie die Nummer im Widget löschen, ist das Ergebnis `NaN`.

### Abrufen eines Datumswerts als Zahl

Dieses Beispiel demonstriert die `valueAsNumber` Eigenschaft eines `<input>` mit dem Typ {{HTMLElement("input/datetime-local", "datetime-local")}}.

#### HTML

Wir binden ein `<input>` des Typs `datetime-local` ein:

```html
<label for="date">Wählen Sie ein Datum und eine Uhrzeit:</label>

<input name="date" id="date" type="datetime-local" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Uhrzeit ausgewählt ist, wird der leere String als `NaN` aufgelöst. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein {{domxref("HTMLElement/change_event", "change")}}-Ereignis ausgelöst, das den `<pre>`-Inhalt aktualisiert und den {{DOMXref("HTMLInputElement.value")}} des Formularelements im Vergleich zu diesem Wert als Zahl anzeigt.

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
- {{DOMXref("HTMLInputElement.value")}}
- {{DOMXref("HTMLInputElement.valueAsDate")}}
