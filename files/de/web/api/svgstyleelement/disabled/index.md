---
title: "SVGStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert (`true`) oder nicht (`false`) ist und um es entsprechend zu setzen.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [SVG `<style>`-Element](/de/docs/Web/SVG/Reference/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Auswirkung.

## Beispiele

### Deaktivieren eines im SVG definierten Styles

Dieses Beispiel demonstriert das programmgesteuerte Setzen der disabled-Eigenschaft auf einen Style, der in der HTML-SVG-Definition definiert wurde.

#### HTML

Das HTML enthält eine SVG-Definition für ein [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style) Element, zusammen mit einem Button, der verwendet wird, um den Style zu deaktivieren.

```html
<button>Enable</button>
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

#### JavaScript

Der folgende Code erhält das `style`-Element (ein `SVGStyleElement`) über seine ID und setzt es dann auf deaktiviert.
Der Style existiert bereits, da er im SVG definiert ist, daher sollte dies erfolgreich sein.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
style.disabled = true;
```

Wir fügen dann einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um die `disabled`-Eigenschaft auf dem für den Kreis verwendeten Style umzuschalten.

{{EmbedLiveSample("Deaktivierung eines im SVG definierten Styles")}}

### Deaktivierung eines programmgesteuerten Styles

Dieses Beispiel ist dem obigen sehr ähnlich, mit dem Unterschied, dass der Style programmgesteuert definiert wird.

Beachten Sie, dass Sie mehrere Styles sowohl im SVG-Quellcode als auch programmgesteuert anwenden können.
Dieses Beispiel wird hauptsächlich bereitgestellt, um zu demonstrieren, wie der Style extern erstellt wird und um zu zeigen, zu welchem Zeitpunkt der Style deaktiviert werden kann.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die SVG-Definition enthält keine Standardstilierung.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

Zuerst erstellen wir das neue SVG-Style-Element.
Dies erfolgt, indem zuerst ein Style-Element im SVG-Namespace mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellt wird, ein Textknoten mit der Stildefinition erstellt und hinzugefügt und das Element dann dem oben definierten SVG hinzugefügt wird.

> [!NOTE]
> Sie müssen [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und nicht [`Document.createElement()`](/de/docs/Web/API/Document/createElement) um den Style zu erstellen, da Sie andernfalls standardmäßig das äquivalente HTML-Style-Element erstellen.

```js
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Dann deaktivieren wir den Style.
Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das SVG keinen zugehörigen Style, und der Wert ist daher standardmäßig `false`.

```js
// Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist das gleiche wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um den `disabled`-Zustand auf dem für den Kreis verwendeten Style umzuschalten.

{{EmbedLiveSample("Deaktivierung eines programmgesteuerten Styles")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
