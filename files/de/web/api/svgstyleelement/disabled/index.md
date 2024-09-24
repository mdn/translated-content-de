---
title: "SVGStyleElement: disabled Eigenschaft"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen oder festzulegen, ob das Stylesheet deaktiviert (`true`) ist oder nicht (`false`).

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [SVG-`<style>`-Element](/de/docs/Web/SVG/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`. Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren. Das Setzen der Eigenschaft auf `true` hat keine Wirkung, wenn kein Stylesheet vorhanden ist.

## Beispiele

### Deaktivieren eines im SVG definierten Stils

Dieses Beispiel zeigt, wie die `disabled`-Eigenschaft für einen in der HTML-SVG-Definition definierten Stil programmgesteuert gesetzt wird.

#### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, sowie einen Button, der verwendet wird, um den Stil zu deaktivieren.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) über seine ID ab und setzt es auf deaktiviert. Der Stil existiert bereits, da er im SVG definiert ist, sodass dies erfolgreich sein sollte.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
style.disabled = true;
```

Wir fügen dann einen Event-Handler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um die `disabled`-Eigenschaft für den Stil des Kreises umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmgesteuert definierten Stils

Dieses Beispiel ist dem obigen sehr ähnlich, außer dass der Stil programmgesteuert definiert wird.

Beachten Sie, dass Sie mehrere Stile sowohl im SVG-Quellcode als auch programmgesteuert anwenden können. Dieses Beispiel soll in erster Linie zeigen, wie der Stil extern erstellt und an welchem Punkt der Stil deaktiviert werden kann.

#### HTML

Das HTML ähnelt dem vorherigen Fall, aber die SVG-Definition enthält keine Standardstile.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

Zuerst erstellen wir den neuen SVG-Stilknoten. Dies erfolgt, indem wir zunächst ein Stilelement im SVG-Namensraum mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellen, einen Textknoten mit der Stildefinition erstellen und anhängen und dann den Knoten dem oben definierten SVG hinzufügen.

> [!NOTE]
> Sie müssen [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und nicht [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um den Stil zu erstellen, ansonsten erstellen Sie standardmäßig das äquivalente HTML-Stilelement.

```js
const svg = document.querySelector("svg");

// Erstellen des `style`-Elements im SVG-Namensraum
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Dann deaktivieren wir den Stil. Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird. Vor diesem Punkt hatte das SVG keinen zugehörigen Stil, daher ist der Wert standardmäßig `false`.

```js
// Deaktivieren des Stils
style.disabled = true;
```

Zum Schluss fügen wir einen Event-Handler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist derselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Drücken Sie den Button, um den `disabled`-Zustand des Stils des Kreises umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLStyleElement.disabled")}}
