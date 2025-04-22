---
title: "HTMLInputElement: value-Eigenschaft"
short-title: value
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: 25ef0a8da5e55b74e7500b23ed8864bcfaf6db03
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als Zeichenkette.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel, um einen Standardwert basierend auf einer Bedingung zu setzen.

## Wert

Eine Zeichenkette, die den Standardwert des {{htmlelement("input")}}-Elements angibt.

## Beispiele

### Den Wert eines Texteingabe-Elements abrufen

In diesem Beispiel wird der aktuelle Wert angezeigt, während der Benutzer Daten in die Eingabe eingibt.

#### HTML

Wir fügen ein {{htmlelement("input")}} und ein zugehöriges {{htmlelement("label")}} hinzu, mit einem {{htmlelement("pre")}}-Container für unsere Ausgabe.

```html
<label for="given-name">Your name:</label>

<input name="given-name" id="given-name" />

<pre id="log"></pre>
```

#### JavaScript

Das `<pre>`-Element wird in seiner [`innerText`](/de/docs/Web/API/HTMLElement/innerText)-Eigenschaft mit dem aktuellen Wert des `<input>` aktualisiert, jedes Mal, wenn ein [`keyup`](/de/docs/Web/API/Element/keyup_event)-Ereignis ausgelöst wird.

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

{{EmbedLiveSample("Den Wert eines Texteingabe-Elements abrufen", "", 100)}}

### Abrufen eines Farbwerts

Dieses Beispiel demonstriert die `value`-Eigenschaft mit einem `<input>` des Typs {{HTMLElement("input/color", "color")}}.

#### HTML

Wir fügen ein `<input>` des Typs `color` hinzu:

```html
<label for="color">Pick a color:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

Das `<pre>`-Element wird in seiner [`innerText`](/de/docs/Web/API/HTMLElement/innerText)-Eigenschaft mit dem Standardfarbwert (`#000000`) und danach jedes Mal aktualisiert, wenn ein [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis ausgelöst wird.

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

{{EmbedLiveSample("Abrufen eines Farbwerts", "", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
- [`HTMLInputElement.valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
