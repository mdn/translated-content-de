---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("SVG")}}

Die **`SVGStyleElement`**-Schnittstelle entspricht dem SVG-{{SVGElement("style")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGStyleElement.type`](/de/docs/Web/API/SVGStyleElement/type) {{deprecated_inline}}

  - : Ein Zeichenfolgenwert, der dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.media`](/de/docs/Web/API/SVGStyleElement/media)

  - : Ein Zeichenfolgenwert, der dem {{SVGAttr("media")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.title`](/de/docs/Web/API/SVGStyleElement/title)

  - : Ein Zeichenfolgenwert, der dem [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.sheet`](/de/docs/Web/API/SVGStyleElement/sheet) {{ReadOnlyInline}}

  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das dem angegebenen Element zugeordnet ist, oder `null`, wenn keines existiert.

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Beispiele

### Dynamisches Hinzufügen eines SVG-Style-Elements

Um ein SVG-Style-Element (`SVGStyleElement`) dynamisch zu erstellen, muss [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwendet werden, wobei ein `style`-Element im SVG-Namensraum angegeben wird.

> **Note:** [`Document.createElement()`](/de/docs/Web/API/Document/createElement) kann nicht verwendet werden, um SVG-Style-Elemente zu erstellen (es gibt ein [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zurück).

Angenommen, das folgende SVG-Element:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

Sie können ein SVG-Style-Element wie folgt erstellen:

```js
// Get the SVG element object by tag name
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
style.appendChild(node);

// Append the style element to the SVG element
svg.appendChild(style);
```

### Auf ein vorhandenes SVG-Style-Element zugreifen

Sie können auf ein SVG-Style-Element, das in HTML (oder einer SVG-Datei) definiert wurde, mit den normalen HTML-Methoden zugreifen, um Tags, IDs usw. zu erhalten.
Dazu gehören: [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) und so weiter.

Zum Beispiel, betrachte das HTML unten, das eine SVG-Datei mit einem Style-Element definiert.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style id="circle_style_id">
    circle {
      fill: gold;
      stroke: green;
      stroke-width: 3px;
    }
  </style>
  <circle cx="50" cy="50" r="25" />
</svg>
```

Um das erste `style`-Element im ersten `svg`-Element zu holen, könnten Sie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) wie unten gezeigt verwenden.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternativ können Sie [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, indem Sie die Tag-ID angeben:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Oder einfach das Element per ID vom Dokument holen (in diesem Fall mit `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Eigenschaften abrufen und festlegen

Dieses Beispiel demonstriert, wie die Eigenschaften eines Style-Elements abgerufen und gesetzt werden, das in diesem Fall in einer SVG-Definition angegeben wurde.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element sowie ein HTML-[`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element, das verwendet wird, um den Stil zu aktivieren und zu deaktivieren, und ein HTML-[`<textarea>`](/de/docs/Web/HTML/Reference/Elements/button)-Element zur Protokollierung der Eigenschaftswerte.

```html
<button>Disable</button>
<textarea id="log" rows="6" cols="90"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style id="circle_style_id" media="all and (min-width: 600px)">
    circle {
      fill: gold;
      stroke: green;
      stroke-width: 3px;
    }
  </style>
  <circle cx="60" cy="60" r="50" />
</svg>
```

Beachten Sie, dass wir oben das `media`-Attribut im `style`-Tag festgelegt haben.
Wir haben `type` nicht gesetzt, da es veraltet ist, oder `disabled`, da es ein solches Attribut nicht gibt (nur die Eigenschaft am Element).

### JavaScript

Der folgende Code erhält das `style`-Element (ein `SVGStyleElement`) mit seiner ID.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Dann fügen wir eine Funktion hinzu, um die Stileigenschaften zu protokollieren.
Diese wird nach der Initialisierung aufgerufen, wann immer die Rahmengröße geändert wird und wenn der Knopf gedrückt wird.

```js
// Get logging text area
const log = document.getElementById("log");

function setLogText() {
  //Log current values of properties
  log.value = `style.media: ${style.media} (frame width: ${window.innerWidth})\n`; // 'all' by default
  log.value += `style.title: ${style.title}\n`; // no default value
  log.value += `style.disabled: ${style.disabled}\n`; // 'false' by default
  log.value += `style.type: ${style.type}\n`; // deprecated (do not use)
  log.value += `style.sheet.rules[0].cssText: ${style.sheet.rules[0].cssText}\n`;
}

// Log initial property values
setLogText();

// Log when the frame resizes
addEventListener("resize", () => {
  setLogText();
});
```

Zuletzt setzen wir einen Ereignishandler für den Knopf.
Wenn der Knopf geklickt wird, wird die [`disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft umgeschaltet.
Dies aktualisiert auch das Protokoll und den Knopftext.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";

  // Log after button presses
  setLogText();
});
```

### Ergebnis

Das Ergebnis wird unten gezeigt.
Schalten Sie den Knopf um, um das SVG-Style-Element zu aktivieren und zu deaktivieren.
Wenn der SVG-Style nicht deaktiviert ist, können Sie auch die Fensterbreite ändern, um die Wirkung des `media`-Attributs auf den Stil zu sehen, wenn der Rahmen, der das Live-Beispiel enthält, 600px breit ist.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)
