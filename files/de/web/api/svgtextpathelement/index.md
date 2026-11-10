---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGTextPathElement`** entspricht dem Element {{SVGElement("textPath")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen.
    Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu setzen.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Entspricht dem Wert `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Entspricht dem Wert `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen.
    Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu setzen.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Entspricht dem Wert `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Entspricht dem Wert `exact`.
- `TEXTPATH_SIDETYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen.
    Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu setzen.
- `TEXTPATH_SIDETYPE_LEFT` (1)
  - : Entspricht dem Wert `left`.
- `TEXTPATH_SIDETYPE_RIGHT` (2)
  - : Entspricht dem Wert `right`.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

- [`SVGTextPathElement.href`](/de/docs/Web/API/SVGTextPathElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} des jeweiligen Elements entspricht.
- [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side) {{ReadOnlyInline}} {{non-standard_inline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("side")}} des jeweiligen Elements entspricht.
    Die zulässigen Werte werden durch die in dieser Schnittstelle definierten Konstanten [`TEXTPATH_SIDETYPE_*`](#textpath_sidetype_unknown) festgelegt.
- [`SVGTextPathElement.startOffset`](/de/docs/Web/API/SVGTextPathElement/startOffset) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die der X-Komponente des Attributs {{SVGAttr("startOffset")}} des jeweiligen Elements entspricht.
- [`SVGTextPathElement.method`](/de/docs/Web/API/SVGTextPathElement/method) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("method")}} des jeweiligen Elements entspricht.
    Die zulässigen Werte werden durch die in dieser Schnittstelle definierten Konstanten [`TEXTPATH_METHODTYPE_*`](#textpath_methodtype_unknown) festgelegt.
- [`SVGTextPathElement.spacing`](/de/docs/Web/API/SVGTextPathElement/spacing) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("spacing")}} des jeweiligen Elements entspricht.
    Die zulässigen Werte werden durch die in dieser Schnittstelle definierten Konstanten [`TEXTPATH_SPACINGTYPE_*`](#textpath_spacingtype_unknown) festgelegt.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert jedoch die Methoden ihrer übergeordneten Schnittstelle [`SVGTextContentElement`](/de/docs/Web/API/SVGTextContentElement)._

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die Eigenschaften eines `SVGTextPathElement` setzen und auslesen können.

#### HTML

Zunächst definieren wir das SVG und das zugehörige CSS, um einen Pfad zu zeichnen, entlang dessen Text dargestellt wird. Dies ist nahezu eine Kopie des SVG im Thema zum Attribut [`path`](/de/docs/Web/SVG/Reference/Attribute/path#path-data).

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

Außerdem fügen wir einen Button hinzu, mit dem die Eigenschaft `side` umgeschaltet werden kann, um die Seite des Pfads zu ändern, auf der der Text dargestellt wird.
Beachten Sie, dass auch ausgeblendeter Protokollierungscode vorhanden ist, der für das Beispiel nicht relevant ist.

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

Der folgende Code schaltet die Eigenschaft `side.baseVal` von `textPath` um, sodass der Text auf die andere Seite des Pfads wechselt.

Zunächst definieren wir eine Funktion, die jede Eigenschaft des Pfadelements protokolliert, und rufen sie beim Laden auf, um den Anfangszustand zu protokollieren.
Die Eigenschaft `side.baseVale` wird zuerst protokolliert und zeigt, wie die Enumerationskonstanten ausgelesen und interpretiert werden können. Dies geschieht in einem `try...catch`-Block, da `side` nicht von allen Browsern unterstützt wird.
Die übrigen Eigenschaften des Textpfads werden ebenfalls protokolliert, allerdings als Rohwerte ihrer jeweiligen Eigenschaft `baseVal`.

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

Der Code des Event-Handlers für den Umschaltbutton ist unten dargestellt. Er liest den aktuellen Wert der Eigenschaft `side.baseVal` aus und ändert ihn so, dass er der anderen Seite entspricht.
Anschließend protokolliert er den aktuellen Zustand.

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

Klicken Sie auf den Button, um zwischen den Zuständen zu wechseln.

{{EmbedLiveSample('Basic usage', 200, 600)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("textPath")}}
