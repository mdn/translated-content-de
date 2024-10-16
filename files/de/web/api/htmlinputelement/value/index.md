---
title: "HTMLInputElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als Zeichenkette.

Diese Eigenschaft kann auch direkt gesetzt werden, um beispielsweise einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zeichenkette, die den Wert des {{htmlelement("input")}}-Elements enthält, oder eine leere Zeichenkette, wenn das Eingabeelement keinen Wert hat.

## Beispiele

### Abrufen des Werts einer Texteingabe

In diesem Beispiel wird der aktuelle Wert protokolliert, während der Benutzer Daten in das Eingabefeld eingibt.

#### HTML

Wir fügen ein {{htmlelement("input")}} und ein zugehöriges {{htmlelement("label")}} sowie einen {{htmlelement("pre")}}-Container für unsere Ausgabe ein.

```html
<label for="given-name">Your name:</label>

<input name="given-name" id="given-name" />

<pre id="log"></pre>
```

#### JavaScript

Der [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<pre>`-Elements wird jedes Mal aktualisiert, wenn ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst wird, und zwar auf den aktuellen Wert des `<input>`.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("given-name");

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

Dieses Beispiel zeigt, wie die `value`-Eigenschaft mit einem `<input>` des Typs {{HTMLElement("input/color", "color")}} verwendet wird.

#### HTML

Wir fügen ein `<input>` des Typs `color` ein:

```html
<label for="color">Pick a color:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

Der [`innerText`](/de/docs/Web/API/HTMLElement/innerText) des `<pre>`-Elements wird mit dem Standardfarbwert (`#000000`) aktualisiert und dann jedes Mal aktualisiert, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst wird.

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
