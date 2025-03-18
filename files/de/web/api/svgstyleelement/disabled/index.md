---
title: "SVGStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.disabled`**-Eigenschaft kann verwendet werden, um zu ermitteln und festzulegen, ob das Stylesheet deaktiviert (`true`) oder nicht (`false`) ist.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [SVG-`<style>`-Element](/de/docs/Web/SVG/Reference/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Wirkung.

## Beispiele

### Deaktivieren eines in SVG definierten Stils

Dieses Beispiel zeigt, wie die `disabled`-Eigenschaft für einen Stil, der in der HTML-SVG-Definition definiert wurde, programmgesteuert gesetzt wird.

#### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Reference/Element/style)-Element sowie einen Button, der verwendet wird, um den Stil zu deaktivieren.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) über seine ID ab und setzt es dann als deaktiviert.
Der Stil ist bereits vorhanden, da er in der SVG definiert ist, also sollte dies erfolgreich sein.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
style.disabled = true;
```

Wir fügen dann einen Ereignishandler für den Button hinzu, der den `disabled`-Zustand und den Button-Text umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um die `disabled`-Eigenschaft des für den Kreis verwendeten Stils umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmgesteuert definierten Stils

Dieses Beispiel ist dem obigen sehr ähnlich, außer dass der Stil programmgesteuert definiert wird.

Beachten Sie, dass Sie mehrere Stile sowohl in der SVG-Quelle als auch programmgesteuert anwenden können.
Dieses Beispiel dient hauptsächlich dazu zu demonstrieren, wie der Stil extern erstellt werden kann und wann der Stil deaktiviert werden kann.

#### HTML

Das HTML ähnelt dem vorherigen Fall, aber die SVG-Definition enthält keine Standardstilgebung.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

Zunächst erstellen wir das neue SVG-Stilelement.
Dies geschieht, indem zuerst ein Stilelement im SVG-Namensraum mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellt, ein Textknoten mit der Stildefinition erstellt und angehängt und dann der Knoten der oben definierten SVG hinzugefügt wird.

> [!NOTE]
> Sie müssen [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und nicht [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um den Stil zu erstellen, da Sie sonst standardmäßig das äquivalente HTML-Stilelement erstellen.

```js
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Dann deaktivieren wir den Stil.
Beachten Sie, dass dies der früheste Zeitpunkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich ist.
Vor diesem Zeitpunkt hatte die SVG keinen zugehörigen Stil, daher ist der Standardwert `false`.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den `disabled`-Zustand und den Button-Text umschaltet (dies ist dasselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten gezeigt.
Drücken Sie den Button, um den `disabled`-Zustand des für den Kreis verwendeten Stils umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
