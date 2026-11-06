---
title: "SVGTextPathElement: Eigenschaft side"
short-title: side
slug: Web/API/SVGTextPathElement/side
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("SVG")}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`side`** der Schnittstelle [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) gibt an, auf welcher Seite des Pfads der Text platziert wird (relativ zur Pfadrichtung).

Die Eigenschaft `side.baseVal` spiegelt das Inhaltsattribut {{SVGAttr("side")}} des betreffenden {{SVGElement("textPath")}}-Elements als Aufzählungswert wider.
Obwohl `side` schreibgeschützt ist, können Sie mit `side.baseVal` den Wert des entsprechenden Attributs ändern.

In SVG 2 spiegelt `side.animVal` ebenfalls den nicht animierten Wert des Attributs wider.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

Die folgenden statischen Eigenschaften geben die Werte an, die `side.baseVal` (und `side.animVal`) zurückgeben können:

- [`SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_unknown) (1)
  - : Der Text wird auf der linken Seite des Pfads gerendert (Standardeinstellung).
    Dies entspricht dem Wert `"left"` des SVG-Attributs `side`.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_right) (2)
  - : Der Text wird auf der rechten Seite des Pfads gerendert.
    Dies entspricht dem Wert `"right"` des SVG-Attributs `side`.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_UNKNOWN`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_left) (0)
  - : Die Seite ist unbekannt oder ungültig.
    Dieser Wert kann nicht gesetzt werden.

Beachten Sie, dass `baseVal` weder auf `0` (`TEXTPATH_SIDETYPE_UNKNOWN`) noch auf einen anderen als die oben aufgeführten Werte gesetzt werden kann.
`animVal` ist schreibgeschützt; ein Schreibversuch löst eine Ausnahme aus.

## Beispiele

Siehe auch das [Beispiel](/de/docs/Web/API/SVGTextPathElement#basic_usage) zu `SVGTextPathElement`, in dem Sie das Attribut `side` umschalten können.

### Auf die Eigenschaft `side` zugreifen

Dieses Beispiel zeigt, wie Sie die Eigenschaft `side` und insbesondere ihren Wert `baseVal` auslesen und setzen können.

#### HTML

Zunächst definieren wir HTML und CSS für einen SVG-Pfad, auf dessen rechter Seite der Text in unterstützenden Browsern mithilfe des SVG-Attributs `side` gezeichnet wird.

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
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 " />

  <text>
    <textPath href="#MyPath" side="right">This text follows a path.</textPath>
  </text>
</svg>
```

Außerdem fügen wir eine Schaltfläche hinzu, mit der sich der Wert der Eigenschaft `side.baseVal` umschalten lässt.
Der Code enthält auch eine Protokollierung, die ausgeblendet ist, da sie hier nicht relevant ist.

```html
<button id="toggle-side">Toggle Side</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 50px;
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

Der folgende Code liest zunächst die Eigenschaft `side.baseVal` aus und vergleicht sie mit den statischen Aufzählungswerten, um festzustellen (und zu protokollieren), auf welcher Seite des Pfads der Text gezeichnet wird.
Wenn die Eigenschaft `side` nicht definiert ist, löst der Code eine Ausnahme aus. In diesem Fall halten wir fest, dass `side` nicht unterstützt wird.

```js
const textPath = document.querySelector("textPath");
const button = document.querySelector("#toggle-side");

// Helper function to read and log the current side
function logCurrentSide() {
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
    log(`Current side: ${side}`);
  } catch {
    log(`side property is not supported in this browser`);
  }
}

// Log the initial state on load
logCurrentSide();
```

Der folgende Code zeigt, wie Sie `side.baseVal` auf einen der statischen Aufzählungswerte setzen können.
Der Event-Handler prüft zunächst den aktuellen Wert von `side.baseVal` und schaltet ihn dann auf die statische Eigenschaft für die jeweils andere Seite um.

```js
// Toggle the side when the button is clicked
button.addEventListener("click", () => {
  try {
    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      // Change to left
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT;
    } else {
      // Change to right
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT;
    }

    // Log the updated state
    logCurrentSide();
  } catch (e) {
    log("Setting the side property is not supported in this browser.");
  }
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche, um den Text von einer Seite auf die andere zu verschieben.

{{EmbedLiveSample('Accessing the `side` property', 200, 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Methodentypen von `SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement#static_properties)
