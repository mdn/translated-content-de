---
title: "HTMLInputElement: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/HTMLInputElement/value
l10n:
  sourceCommit: 4011f1b19ba144ba1eb590f42e1e5cbb932f4794
---

{{ APIRef("HTML DOM") }}

Die **`value`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}}-Schnittstelle repräsentiert den aktuellen Wert des {{htmlelement("input")}}-Elements als Zeichenkette.

Diese Eigenschaft kann auch direkt gesetzt werden, zum Beispiel um einen Standardwert basierend auf einer Bedingung festzulegen.

## Wert

Eine Zeichenkette, die den Wert des {{htmlelement("input")}}-Elements enthält, oder die leere Zeichenkette, wenn das Eingabeelement keinen Wert gesetzt hat.

## Beispiele

### Abrufen des Werts einer Texteingabe

In diesem Beispiel zeigt das Protokoll den aktuellen Wert an, während der Benutzer Daten in das Eingabefeld eingibt.

#### HTML

Wir fügen ein {{htmlelement("input")}} und ein zugehöriges {{htmlelement("label")}} hinzu, mit einem {{htmlelement("pre")}}-Container für die Ausgabe.

```html
<label for="givenname">Ihr Name:</label>

<input name="givenname" id="givenname" />

<pre id="log"></pre>
```

#### JavaScript

Das {{domxref("HTMLElement.innerText", "innerText")}} des `<pre>`-Elements wird auf den aktuellen Wert des `<input>` aktualisiert, jedes Mal, wenn ein {{domxref("Element/keyup_event", "keyup")}}-Ereignis ausgelöst wird.

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

Dieses Beispiel zeigt die `value`-Eigenschaft mit einem `<input>` des Typs {{HTMLElement("input/color", "color")}}.

#### HTML

Wir fügen ein `<input>` des Typs `color` hinzu:

```html
<label for="color">Wählen Sie eine Farbe:</label>

<input name="color" id="color" type="color" />

<pre id="log"></pre>
```

#### JavaScript

Das {{domxref("HTMLElement.innerText", "innerText")}} des `<pre>`-Elements wird mit dem Standardfarbwert (`#000000`) aktualisiert und dann jedes Mal aktualisiert, wenn ein {{domxref("HTMLElement/change_event", "change")}}-Ereignis ausgelöst wird.

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
- {{DOMXref("HTMLInputElement.valueAsDate")}}
- {{DOMXref("HTMLInputElement.valueAsNumber")}}
