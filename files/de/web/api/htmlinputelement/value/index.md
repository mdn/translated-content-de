---
title: "HTMLInputElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: 4011f1b19ba144ba1eb590f42e1e5cbb932f4794
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als Zeichenkette.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung einzustellen.

## Wert

Eine Zeichenkette, die den Wert des {{htmlelement("input")}}-Elements enthält, oder die leere Zeichenkette, wenn das Eingabeelement keinen gesetzten Wert hat.

## Beispiele

### Abrufen des Werts einer Texteingabe

In diesem Beispiel wird der aktuelle Wert angezeigt, während der Benutzer Daten in das Eingabefeld eingibt.

#### HTML

Wir fügen ein {{htmlelement("input")}} und ein zugehöriges {{htmlelement("label")}} hinzu, mit einem {{htmlelement("pre")}}-Container für unsere Ausgabe.

```html
<label for="givenname">Your name:</label>

<input name="givenname" id="givenname" />

<pre id="log"></pre>
```

#### JavaScript

Das [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<pre>`-Elements wird jedes Mal auf den aktuellen Wert des `<input>` aktualisiert, wenn ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst wird.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("givenname");

inputElement.addEventListener("keyup", () => {
  logElement.innerText = `Name: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a text input's value", "", 100)}}

### Abrufen eines Farbwerts

Dieses Beispiel zeigt, dass die `value`-Eigenschaft mit einem `<input>` vom Typ {{HTMLElement("input/color", "color")}} verwendet wird.

#### HTML

Wir fügen ein `<input>` vom Typ `color` ein:

```html
<label for="color">Pick a color:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

Das [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<pre>`-Elements wird mit dem Standardfarbwert (`#000000`) und dann jedes Mal aktualisiert, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst wird.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("color");

logElement.innerText = `Color: ${inputElement.value}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `Color: ${inputElement.value}`;
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

{{EmbedLiveSample("Retrieving a color value", "", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
- [`HTMLInputElement.valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
