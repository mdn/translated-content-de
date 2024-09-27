---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("SVG")}}

Das **`SVGStyleElement`** Interface entspricht dem SVG {{SVGElement("style")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGStyleElement.type`](/de/docs/Web/API/SVGStyleElement/type) {{deprecated_inline}}

  - : Eine Zeichenkette, die dem {{SVGAttr("type")}} Attribut des gegebenen Elements entspricht.

- [`SVGStyleElement.media`](/de/docs/Web/API/SVGStyleElement/media)

  - : Eine Zeichenkette, die dem {{SVGAttr("media")}} Attribut des gegebenen Elements entspricht.

- [`SVGStyleElement.title`](/de/docs/Web/API/SVGStyleElement/title)

  - : Eine Zeichenkette, die dem [`title`](/de/docs/Web/SVG/Element/style#title) Attribut des gegebenen Elements entspricht.

- [`SVGStyleElement.sheet`](/de/docs/Web/API/SVGStyleElement/sheet) {{ReadOnlyInline}}

  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt zurück, das mit dem gegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Beispiele

### Dynamisches Hinzufügen eines SVG-Style-Elements

Um ein SVG-Style-Element (`SVGStyleElement`) dynamisch zu erstellen, müssen Sie [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und ein `style` Element im SVG-Namespace angeben.

> **Note:** [`Document.createElement()`](/de/docs/Web/API/Document/createElement) kann nicht verwendet werden, um SVG-Style-Elemente zu erstellen (es gibt ein [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zurück).

Angesichts des folgenden SVG-Elements:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

Können Sie ein SVG-Style-Element wie folgt erstellen:

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

Sie können auf ein in HTML (oder einer SVG-Datei) definiertes SVG-Style-Element zugreifen, indem Sie die normalen HTML-Methoden zum Abrufen von Tags, IDs usw. verwenden.
Dazu gehören: [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) und so weiter.

Zum Beispiel, betrachten Sie das folgende HTML, das eine SVG-Datei mit einem Style-Element definiert.

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

Um das erste `style` Element im ersten `svg` Element abzurufen, könnten Sie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) wie unten gezeigt verwenden.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternativ könnten Sie [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, indem Sie die Tag-ID angeben:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Oder einfach das Element per ID aus dem Dokument holen (in diesem Fall mit `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Eigenschaften abrufen und setzen

Dieses Beispiel demonstriert, wie man die Eigenschaften eines Style-Elements abruft und setzt, das in einer SVG-Definition angegeben wurde.

### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style) Element sowie ein HTML [`<button>`](/de/docs/Web/HTML/Element/button) Element, das zum Aktivieren und Deaktivieren des Styles verwendet wird, und ein HTML [`<textarea>`](/de/docs/Web/HTML/Element/button) Element zur Protokollierung der Eigenschaftswerte.

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

Beachten Sie, dass wir oben das `media` Attribut im `style` Tag gesetzt haben.
Wir haben `type` nicht gesetzt, da es veraltet ist, oder `disabled`, da es kein solches Attribut gibt (nur die Eigenschaft auf dem Element).

### JavaScript

Der folgende Code ruft das `style` Element (ein `SVGStyleElement`) mithilfe seiner ID ab.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Wir fügen dann eine Funktion hinzu, um die Style-Eigenschaften zu protokollieren.
Diese wird nach der Initialisierung aufgerufen, wann immer der Rahmen die Größe ändert und wenn der Knopf gedrückt wird.

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

Zuletzt setzen wir einen Ereignishandler für den Button.
Wenn der Button geklickt wird, wird die [`disabled`](/de/docs/Web/API/SVGStyleElement/disabled) Eigenschaft umgeschaltet.
Dies aktualisiert auch das Protokoll und den Text des Buttons.

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
Wenn das SVG-Style nicht deaktiviert ist, können Sie auch die Fensterbreite anpassen, um die Wirkung der `media` Eigenschaft auf den Stil zu sehen, wenn der Rahmen mit dem Live-Beispiel 600px breit ist.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)
