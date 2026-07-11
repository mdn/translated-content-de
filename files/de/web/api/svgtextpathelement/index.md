---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
l10n:
  sourceCommit: 8ee9efc5f273bd71fb650f555f53c1ba3932390c
---

{{APIRef("SVG")}}

Das **`SVGTextPathElement`**-Interface entspricht dem {{SVGElement("textPath")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

- [`SVGTextPathElement.href`](/de/docs/Web/API/SVGTextPathElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} Attribut des gegebenen Elements entspricht.
- [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("side")}} Attribut des gegebenen Elements entspricht.
    Zulässige Werte sind durch die auf diesem Interface definierten Konstanten [`TEXTPATH_SIDETYPE_*`](#textpath_sidetype_unknown) festgelegt.
- [`SVGTextPathElement.startOffset`](/de/docs/Web/API/SVGTextPathElement/startOffset) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das der X-Komponente des {{SVGAttr("startOffset")}} Attributs des gegebenen Elements entspricht.
- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("method")}} Attribut des gegebenen Elements entspricht.
    Zulässige Werte sind durch die auf diesem Interface definierten Konstanten [`TEXTPATH_METHODTYPE_*`](#textpath_methodtype_unknown) festgelegt.
- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("spacing")}} Attribut des gegebenen Elements entspricht.
    Zulässige Werte sind durch die auf diesem Interface definierten Konstanten [`TEXTPATH_SPACINGTYPE_*`](#textpath_spacingtype_unknown) festgelegt.

## Instanzmethoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die Methoden seines übergeordneten Interfaces, [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

## Statische Eigenschaften

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen.
    Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ zu wechseln.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Entspricht dem Wert `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Entspricht dem Wert `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen.
    Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ zu wechseln.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Entspricht dem Wert `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Entspricht dem Wert `exact`.
- `TEXTPATH_SIDETYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen.
    Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ zu wechseln.
- `TEXTPATH_SIDETYPE_LEFT` (1)
  - : Entspricht dem Wert `left`.
- `TEXTPATH_SIDETYPE_RIGHT` (2)
  - : Entspricht dem Wert `right`.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die Eigenschaften eines `SVGTextPathElement` setzen und abrufen können.

#### HTML

Zuerst definieren wir das SVG und das zugehörige CSS, um einen Pfad zu zeichnen, auf dem der Text entlangläuft (dies ist eine fast identische Kopie des SVG im Thema [`path`](/de/docs/Web/SVG/Reference/Attribute/path#path-data)).

```css hidden
html,
body,
svg {
  height: 400px;
  width: auto; /* Keeps the aspect ratio */
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path
    id="MyPath"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

Wir fügen auch eine Schaltfläche hinzu, um die `side`-Eigenschaft zu wechseln, um zu ändern, auf welcher Seite des Pfades der Text gezeichnet wird.
Beachten Sie, dass es auch versteckten Protokollierungscode gibt, der für das Beispiel nicht relevant ist.

```html
<button id="toggleBtn">Toggle side</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Der folgende Code wechselt die `side.baseVal`-Eigenschaft auf dem `textPath`, wodurch der Text die Seite wechselt.

Zuerst definieren wir eine Funktion, um jede der Eigenschaften des Pfadelements zu protokollieren, und rufen sie auf, um den Anfangszustand beim Laden zu protokollieren.
Die Eigenschaft `side.baseVale` wird zuerst protokolliert und zeigt, wie die enumerierten Konstanten gelesen und interpretiert werden können (dies wird in einem `try...catch`-Block durchgeführt, da `side` nicht in allen Browsern unterstützt wird).
Die anderen Eigenschaften des Textpfades werden ebenfalls protokolliert, jedoch als rohe Werte ihrer zugehörigen `baseVal`-Eigenschaft.

```js
const textPath = document.querySelector("textPath");

function logPathBaseVal() {
  // Log the baseVal for each property
  log("LOG:");

  try {
    let side;

    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      side = "right";
    } else if (
      textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT
    ) {
      side = "left";
    } else if (
      textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_UNKNOWN
    ) {
      side = "unknown";
    } else {
      side = "unexpected value";
    }
    log(` Current side: ${side}`);
  } catch {
    log(`side property is not supported in this browser`);
  }

  log(` href: ${textPath.href.baseVal}`);
  log(` method: ${textPath.method.baseVal}`);
  log(` spacing: ${textPath.spacing.baseVal}`);
  log(` startOffset: ${textPath.startOffset.baseVal}`);
}

// Log the initial state on load
logPathBaseVal();
```

Der Ereignis-Handler-Code für die Umschalttaste ist unten gezeigt. Dieser liest den aktuellen Wert der `side.baseVal`-Eigenschaft und wechselt den Wert, um die andere Seite zu erreichen.
Er protokolliert dann den aktuellen Zustand.

```js
// Toggle the side when the button is clicked
toggleBtn.addEventListener("click", () => {
  try {
    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      // Change to left
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT;
    } else {
      // Change to right
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT;
    }

    // Log the updated state
    logPathBaseVal();
  } catch (e) {
    log("Setting the side property is not supported in this browser.");
  }
});
```

#### Ergebnis

Drücken Sie die Schaltfläche, um die Zustände zu wechseln.

{{EmbedLiveSample('Basic usage', 200, 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("textPath")}}
