---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("SVG")}}

Die **`SVGStyleElement`**-Schnittstelle entspricht dem SVG {{SVGElement("style")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGStyleElement.type`](/de/docs/Web/API/SVGStyleElement/type) {{deprecated_inline}}

  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.media`](/de/docs/Web/API/SVGStyleElement/media)

  - : Ein String, der dem {{SVGAttr("media")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.title`](/de/docs/Web/API/SVGStyleElement/title)

  - : Ein String, der dem [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.sheet`](/de/docs/Web/API/SVGStyleElement/sheet) {{ReadOnlyInline}}

  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem angegebenen Element verknüpft ist, oder `null`, falls keines vorhanden ist.

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Beispiele

### Dynamisches Hinzufügen eines SVG-Style-Elements

Um ein SVG-Style-Element (`SVGStyleElement`) dynamisch zu erstellen, müssen Sie [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und ein `style`-Element im SVG-Namespace spezifizieren.

> **Note:** [`Document.createElement()`](/de/docs/Web/API/Document/createElement) kann nicht verwendet werden, um SVG-Style-Elemente zu erstellen (diese Methode gibt ein [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zurück).

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

### Zugriff auf ein bestehendes SVG-Style

Sie können auf ein SVG-Style-Element, das in HTML (oder in einer SVG-Datei) definiert ist, mit den normalen HTML-Methoden für das Abrufen von Tags, IDs usw. zugreifen.
Dazu gehören: [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) und andere.

Zum Beispiel, betrachten Sie den folgenden HTML-Code, der eine SVG-Datei mit einem Style-Element definiert.

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

Um das erste `style`-Element im ersten `svg`-Element abzurufen, könnten Sie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) wie unten gezeigt verwenden.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternativ könnten Sie [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden und die Tag-ID angeben:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Oder das Element einfach aus dem Dokument per ID abrufen (in diesem Fall mit `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Abrufen und Festlegen von Eigenschaften

Dieses Beispiel zeigt, wie man die Eigenschaften eines Style-Elements abruft und festlegt, das in einer SVG-Definition angegeben wurde.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element, zusammen mit einem HTML-`<button>`-Element [/de/docs/Web/HTML/Reference/Elements/button), das verwendet wird, um den Style zu aktivieren und zu deaktivieren, sowie ein HTML-`<textarea>`-Element für die Protokollierung der Eigenschaftswerte.

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

Beachten Sie, dass wir oben das `media`-Attribut im `style`-Tag gesetzt haben.
Wir haben `type` nicht gesetzt, da es veraltet ist, oder `disabled`, da es ein solches Attribut nicht gibt (nur die Eigenschaft auf dem Element).

### JavaScript

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) mit seiner ID ab.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Wir fügen dann eine Funktion hinzu, um die Style-Eigenschaften zu protokollieren.
Diese wird nach der Initialisierung, bei jeder Größenänderung des Frames und wenn der Button gedrückt wird, aufgerufen.

```js
// Get logging text area
const log = document.getElementById("log");

function setLogText() {
  // Log current values of properties
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

Zuletzt setzen wir einen Ereignishandler für den Button.
Wenn der Button geklickt wird, wird die [`disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft umgeschaltet.
Dies aktualisiert auch das Protokoll und den Button-Text.

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
Schalten Sie den Button um, um das SVG-Style-Element zu aktivieren und zu deaktivieren.
Wenn der SVG-Style nicht deaktiviert ist, können Sie auch die Fensterbreite ändern, um die Wirkung der `media`-Eigenschaft auf den Style zu sehen, wenn der Frame des Live-Beispiels 600px breit ist.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)
