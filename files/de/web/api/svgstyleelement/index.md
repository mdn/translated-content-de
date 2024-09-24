---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("SVG")}}

Die **`SVGStyleElement`** Schnittstelle entspricht dem SVG {{SVGElement("style")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGStyleElement.type")}} {{deprecated_inline}}

  - : Ein String, der dem {{SVGAttr("type")}} Attribut des angegebenen Elements entspricht.

- {{domxref("SVGStyleElement.media")}}

  - : Ein String, der dem {{SVGAttr("media")}} Attribut des angegebenen Elements entspricht.

- {{domxref("SVGStyleElement.title")}}

  - : Ein String, der dem [`title`](/de/docs/Web/SVG/Element/style#title) Attribut des angegebenen Elements entspricht.

- {{domxref("SVGStyleElement.sheet")}} {{ReadOnlyInline}}

  - : Gibt das {{domxref("CSSStyleSheet")}} Objekt zurück, das mit dem angegebenen Element verknüpft ist, oder `null`, wenn keines vorhanden ist.

- {{domxref("SVGStyleElement.disabled")}}
  - : Ein boolescher Wert, der angibt, ob das zugehörige Stylesheet deaktiviert ist oder nicht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Beispiele

### Dynamisches Hinzufügen eines SVG-Style-Elements

Um ein SVG-Style-Element (`SVGStyleElement`) dynamisch zu erstellen, müssen Sie [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden, wobei Sie ein `style` Element im SVG-Namespace angeben.

> **Note:** [`Document.createElement()`](/de/docs/Web/API/Document/createElement) kann nicht verwendet werden, um SVG-Style-Elemente zu erstellen (es gibt ein [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) zurück).

Angenommen, folgendes SVG-Element ist gegeben:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

Sie können ein SVG-Style-Element wie folgt erstellen:

```js
// Holen Sie sich das SVG-Element-Objekt nach Tag-Namen
const svg = document.querySelector("svg");

// Erstellen Sie das `style` Element im SVG-Namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
style.appendChild(node);

// Fügen Sie das Style-Element zum SVG-Element hinzu
svg.appendChild(style);
```

### Zugriff auf ein vorhandenes SVG-Style

Sie können auf ein SVG-Style-Element zugreifen, das in HTML (oder einer SVG-Datei) definiert wurde, indem Sie die normalen HTML-Methoden zum Abrufen von Tags, IDs und so weiter verwenden.
Dazu gehören: {{domxref("Document.getElementsByTagName()")}}, {{domxref("Document.getElementById()")}}, {{domxref("Document.querySelector()")}}, {{domxref("Document.querySelectorAll()")}} und so weiter.

Beispielsweise betrachten Sie das untenstehende HTML, das eine SVG-Datei mit einem Style-Element definiert.

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

Um das erste `style` Element im ersten `svg` Element zu holen, könnten Sie {{domxref("Document.querySelector()")}} wie unten gezeigt verwenden.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternativ könnten Sie {{domxref("Document.getElementById()")}} verwenden, um die Tag-ID anzugeben:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Oder einfach das Element im Dokument per ID holen (in diesem Fall mit `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Eigenschaften holen und setzen

Dieses Beispiel zeigt, wie Sie die Eigenschaften eines Style-Elements abrufen und einstellen, das in einer SVG-Definition spezifiziert wurde.

### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style) Element sowie ein HTML [`<button>`](/de/docs/Web/HTML/Element/button) Element, das verwendet wird, um den Style zu aktivieren und zu deaktivieren, und ein HTML [`<textarea>`](/de/docs/Web/HTML/Element/button) Element zum Protokollieren der Eigenschaftswerte.

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
Wir haben `type` nicht gesetzt, da es veraltet ist, oder `disabled`, da es kein solches Attribut gibt (nur die Eigenschaft am Element).

### JavaScript

Der untenstehende Code erhält das `style` Element (ein `SVGStyleElement`) mit seiner ID.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Dann fügen wir eine Funktion hinzu, um die Style-Eigenschaften zu protokollieren.
Dies wird nach der Initialisierung aufgerufen, wann immer das Fenster die Größe ändert und wenn die Schaltfläche gedrückt wird.

```js
// Holen Sie sich das Protokollierungs-Textfeld
const log = document.getElementById("log");

function setLogText() {
  //Aktuelle Werte der Eigenschaften protokollieren
  log.value = `style.media: ${style.media} (frame width: ${window.innerWidth})\n`; // 'all' standardmäßig
  log.value += `style.title: ${style.title}\n`; // kein Standardwert
  log.value += `style.disabled: ${style.disabled}\n`; // 'false' standardmäßig
  log.value += `style.type: ${style.type}\n`; // veraltet (nicht verwenden)
  log.value += `style.sheet.rules[0].cssText: ${style.sheet.rules[0].cssText}\n`;
}

// Anfangswerte der Eigenschaften protokollieren
setLogText();

// Protokollieren, wenn der Rahmen die Größe ändert
addEventListener("resize", () => {
  setLogText();
});
```

Zum Schluss setzen wir einen Ereignishandler für die Schaltfläche.
Wenn die Schaltfläche geklickt wird, wird die {{domxref("SVGStyleElement.disabled","disabled")}} Eigenschaft umgeschaltet.
Dies aktualisiert auch das Protokoll und den Schaltflächentext.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";

  // Protokollieren nach Knopfdruck
  setLogText();
});
```

### Ergebnis

Das Ergebnis wird unten gezeigt.
Schalten Sie den Button um, um das SVG-Style-Element zu aktivieren und zu deaktivieren.
Wenn der SVG-Style nicht deaktiviert ist, können Sie auch die Fensterbreite ändern, um die Wirkung der `media` Eigenschaft auf den Stil zu sehen, wenn der Rahmen des Live-Beispiels 600px breit ist.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLStyleElement")}}
