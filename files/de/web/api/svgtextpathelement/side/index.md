---
title: "SVGTextPathElement: side-Eigenschaft"
short-title: side
slug: Web/API/SVGTextPathElement/side
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("SVG")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`side`**-Eigenschaft der [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Seite des Pfads darstellt, auf der der Text (relativ zur Pfadrichtung) platziert wird.

Die `side.baseVal`-Eigenschaft spiegelt das {{SVGAttr("side")}} Inhaltsattribut des angegebenen {{SVGElement("textPath")}}-Elements als einen Aufzählungswert wider. Obwohl `side` schreibgeschützt ist, können Sie `side.baseVal` verwenden, um den Wert des entsprechenden Attributs zu ändern.

In SVG 2 spiegelt `side.animVal` auch den nicht animierten Wert des Attributs wider.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

Die folgenden statischen Eigenschaften geben die Werte an, die von `side.baseVal` (und `side.animVal`) zurückgegeben werden können:

- [`SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_unknown) (1)
  - : Der Text wird auf der linken Seite des Pfads gerendert (standardmäßig).
    Dies entspricht einem Wert von `"left"` im SVG `side`-Attribut.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_right) (2)
  - : Der Text wird auf der rechten Seite des Pfads gerendert.
    Dies entspricht einem Wert von `"right"` im SVG `side`-Attribut.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_UNKNOWN`](/de/docs/Web/API/SVGTextPathElement#textpath_sidetype_left) (0)
  - : Der Seitentyp ist unbekannt oder ungültig.
    Dieser Wert kann nicht gesetzt werden.

Beachten Sie, dass `baseVal` nicht auf `0` (`TEXTPATH_SIDETYPE_UNKNOWN`) oder einen anderen als die oben aufgeführten Werte gesetzt werden kann.
Die Eigenschaft `animVal` ist schreibgeschützt und löst einen Fehler aus, wenn Sie versuchen, ihr einen Wert zuzuweisen.

## Beispiele

Siehe auch das [Beispiel](/de/docs/Web/API/SVGTextPathElement#basic_usage) in `SVGTextPathElement`, das es Ihnen ermöglicht, das `side`-Attribut zu toggeln.

### Zugriff auf die `side`-Eigenschaft

Dieses Beispiel demonstriert, wie Sie die `side`-Eigenschaft und insbesondere ihren `baseVal` setzen und abrufen können.

#### HTML

Zuerst definieren wir HTML und CSS für einen SVG-Pfad, der Text auf der rechten Seite in unterstützenden Browsern unter Verwendung des SVG `side`-Attributs zeichnet.

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

Wir fügen auch eine Schaltfläche hinzu, um den Wert der `side.baseVal`-Eigenschaft zu toggeln.
Beachten Sie, dass es auch Protokollierungscode gibt, der versteckt ist, da er nicht relevant ist.

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

Der folgende Code ruft zuerst die `side.baseVal`-Eigenschaft ab und vergleicht sie mit den aufgezählten statischen Eigenschaftswerten, um zu bestimmen (und zu protokollieren), auf welcher Seite des Pfads der Text gezeichnet wird.
Wenn die `side`-Eigenschaft nicht definiert ist, wird der Code fehlschlagen, und wir vermerken, dass die `side`-Eigenschaft nicht unterstützt wird.

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

Der folgende Code zeigt, wie Sie `side.baseVal` mit den aufgezählten statischen Werten setzen können.
Der Ereignishandler überprüft zuerst den aktuellen Wert von `side.baseVal` und toggelt dann den Wert auf die statische Eigenschaft, die auf die andere Seite passt.

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

Togglen Sie die Schaltfläche, um den Text von einer Seite auf die andere zu verschieben.

{{EmbedLiveSample('Zugriff auf die `side`-Eigenschaft', 200, 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPathElement.side`](/de/docs/Web/API/SVGTextPathElement/side)
- [`SVGTextPathElement` Methodentypen](/de/docs/Web/API/SVGTextPathElement#static_properties)
