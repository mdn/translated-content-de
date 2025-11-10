---
title: "HTMLInputElement: valueAsDate-Eigenschaft"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`valueAsDate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als ein {{jsxref("Date")}} oder `null`, wenn eine Umwandlung nicht möglich ist.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um ein Standarddatum basierend auf einer Bedingung festzulegen. Wenn der bereitgestellte Wert weder `null` noch ein `Date`-Objekt ist, wird ein {{jsxref("TypeError")}} ausgelöst. Wenn der bereitgestellte Wert `null` oder ein [ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist, wird der Eingabewert auf den leeren String gesetzt.

Diese Eigenschaft gibt immer `null` zurück, wenn sie auf ein Eingabeelement angewendet wird, das nicht auf Datum oder Zeit basiert. Wird diese Eigenschaft auf einem solchen Eingabeelement gesetzt, wird ein `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Wert

Ein {{jsxref("Date")}}-Objekt oder `null`, wenn eine Umwandlung unmöglich ist. Das zurückgegebene Datum sollte immer als UTC-Zeit interpretiert werden—zum Beispiel mit Methoden wie `getUTCDate()` anstelle von `getDate()`. Wenn Sie nicht vorsichtig sind, kann das Ergebnis um 1 abweichen—zum Beispiel, wenn der Benutzer in einer negativen UTC-Zeitzone lebt (zum Beispiel in den USA), wird das Datum als lokales Datum interpretiert, was zum vorherigen Tag führt, als der Benutzer ausgewählt hat.

Die Eingabetypen [`month`](/de/docs/Web/HTML/Reference/Elements/input/month), [`date`](/de/docs/Web/HTML/Reference/Elements/input/date) und [`week`](/de/docs/Web/HTML/Reference/Elements/input/week) geben ein UTC-Datum zurück, das den ersten Moment des eingegebenen Zeitraums darstellt—d.h. sie sind immer Mitternacht in UTC. Für `month` ist das Datum der erste Tag des Monats. Für `week` ist das Datum der Montag der Woche. Der Eingabetyp [`time`](/de/docs/Web/HTML/Reference/Elements/input/time) hat das Datum immer auf `1970-01-01` gesetzt.

Der Eingabetyp [`datetime-local`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local) unterstützt die `valueAsDate`-Eigenschaft nicht, da er ein Datum und eine Uhrzeit in der lokalen Zeitzone (eine [wanduhrzeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime)) repräsentiert, wohingegen `Date`-Objekte einen absoluten Zeitpunkt repräsentieren. Allerdings bieten einige Browser möglicherweise eine nicht-standardisierte Implementierung. [WHATWG arbeitet daran](https://github.com/whatwg/html/issues/10882), die {{jsxref("Temporal")}} API mit den Datum-/Zeiteingaben zu integrieren, um diesen Anwendungsfall zu berücksichtigen.

## Beispiele

### Abrufen eines Datumswertes

Dieses Beispiel zeigt den Zugriff auf die `valueAsDate`-Eigenschaft auf einem `<input>` des Typs {{HTMLElement("input/week", "week")}}.

#### HTML

Wir fügen ein `<input>` des Typs `week` ein:

```html
<label for="date">Pick a date and time:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum oder keine Zeit ausgewählt ist, ergibt die leere Eingabe `null`. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst, das den Inhalt des `<pre>` aktualisiert, der den [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement/value) des Formularelements im Vergleich zu diesem Wert als Datum anzeigt.

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

Dieses Beispiel zeigt die Anwendung von {{jsxref("Date")}}-Methoden direkt auf die `valueAsDate`-Eigenschaft eines `<input>` des Typs {{HTMLElement("input/date", "date")}}.

#### HTML

Wir fügen ein `<input>` des Typs `date` ein:

```html
<label for="date2">Pick a date:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Wenn kein Datum ausgewählt ist, ergibt die leere Eingabe `null`. Jedes Mal, wenn eine Auswahl getroffen wird, wird ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst. Wir füllen dann das Log mit dem gewählten Datum, formatiert mit der {{jsxref("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}}-Methode des `Date`-Objekts.

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
