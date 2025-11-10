---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("SVG")}}

Die **`SVGStyleElement`** Schnittstelle entspricht dem SVG {{SVGElement("style")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGStyleElement.type`](/de/docs/Web/API/SVGStyleElement/type) {{deprecated_inline}}
  - : Ein String, der dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.media`](/de/docs/Web/API/SVGStyleElement/media)
  - : Ein String, der dem {{SVGAttr("media")}}-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.title`](/de/docs/Web/API/SVGStyleElement/title)
  - : Ein String, der dem [`title`](/de/docs/Web/SVG/Reference/Element/style#title)-Attribut des angegebenen Elements entspricht.

- [`SVGStyleElement.sheet`](/de/docs/Web/API/SVGStyleElement/sheet) {{ReadOnlyInline}}
  - : Gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das mit dem angegebenen Element verknüpft ist, oder `null`, wenn es keines gibt.

- [`SVGStyleElement.disabled`](/de/docs/Web/API/SVGStyleElement/disabled)
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Beispiele

### Dynamisches Hinzufügen eines SVG-Style-Elements

Um ein SVG-Style-Element (`SVGStyleElement`) dynamisch zu erzeugen, müssen Sie [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und ein `style`-Element im SVG-Namespace angeben.

> [!NOTE]
> [`Document.createElement()`](/de/docs/Web/API/Document/createElement) kann nicht verwendet werden, um SVG-Style-Elemente zu erzeugen (es gibt ein [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zurück).

Angenommen, das folgende SVG-Element:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

Sie können ein SVG-Style-Element wie folgt erzeugen:

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

### Zugriff auf ein vorhandenes SVG-Style

Sie können auf ein SVG-Style-Element, das in HTML (oder einer SVG-Datei) definiert wurde, mit den normalen HTML-Methoden zum Abrufen von Tags, IDs usw. zugreifen.
Dazu gehören: [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) und so weiter.

Zum Beispiel, betrachten Sie das untenstehende HTML, das eine SVG-Datei mit einem Style-Element definiert.

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

Um das erste `style`-Element im ersten `svg`-Element abzurufen, können Sie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) wie unten gezeigt verwenden.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternativ könnten Sie [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) verwenden, indem Sie die Tag-ID angeben:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Oder Sie holen einfach das Element aus dem Dokument per ID (in diesem Fall mit `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Eigenschaften abrufen und setzen

Dieses Beispiel zeigt, wie die Eigenschaften eines Style-Elements abgerufen und gesetzt werden, das in einer SVG-Definition angegeben wurde.

### HTML

Der HTML-Code enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element sowie ein HTML-`<button>`-Element, das zum Aktivieren und Deaktivieren des Styles verwendet wird, und ein HTML-`<textarea>`-Element zum Protokollieren der Eigenschaftswerte.

```html
<button>Disable</button>
<textarea id="log" rows="6" cols="90"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style id="circle_style_id" media="(width >= 600px)">
    circle {
      fill: gold;
      stroke: green;
      stroke-width: 3px;
    }
  </style>
  <circle cx="60" cy="60" r="50" />
</svg>
```

Beachten Sie, dass wir oben das `media`-Attribut am `style`-Tag gesetzt haben.
Wir haben `type` nicht gesetzt, da es veraltet ist, oder `disabled`, da es ein solches Attribut nicht gibt (nur die Eigenschaft am Element).

### JavaScript

Der untenstehende Code ruft das `style`-Element (ein `SVGStyleElement`) über seine ID ab.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Wir fügen dann eine Funktion hinzu, um die Style-Eigenschaften zu protokollieren.
Diese wird nach der Initialisierung aufgerufen, immer wenn das Fenster die Größe ändert, und wenn die Schaltfläche gedrückt wird.

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

Zuletzt setzen wir einen Event-Handler für die Schaltfläche.
Wenn die Schaltfläche geklickt wird, wird die [`disabled`](/de/docs/Web/API/SVGStyleElement/disabled)-Eigenschaft umgeschaltet.
Dies aktualisiert auch das Protokoll und den Schaltflächentext.

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
Sie können die Schaltfläche umschalten, um das SVG-Style-Element zu aktivieren und zu deaktivieren.
Wenn das SVG-Style nicht deaktiviert ist, können Sie auch die Fensterbreite ändern, um die Wirkung der `media`-Eigenschaft auf den Style zu sehen, wenn der Frame, der das Live-Beispiel enthält, 600px breit ist.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)
