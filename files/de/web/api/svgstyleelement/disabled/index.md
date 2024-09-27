---
title: "SVGStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert (`true`) oder nicht (`false`) ist, und dies entsprechend zu setzen.

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [SVG `<style>`-Element](/de/docs/Web/SVG/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keine Auswirkung.

## Beispiele

### Deaktivieren eines im SVG definierten Stils

Dieses Beispiel zeigt, wie die disabled-Eigenschaft eines Stils, der in der HTML-SVG-Definition definiert wurde, programmgesteuert gesetzt wird.

#### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element sowie einen Button, der verwendet wird, um den Stil zu deaktivieren.

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

Der folgende Code ruft das `style`-Element (ein `SVGStyleElement`) mit seiner ID ab und setzt es dann auf deaktiviert.
Der Stil existiert bereits, da er im SVG definiert ist, sodass dies erfolgreich sein sollte.

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

Das Ergebnis ist unten gezeigt.
Drücken Sie den Button, um die `disabled`-Eigenschaft für den Stil, der für den Kreis verwendet wird, umzuschalten.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Deaktivieren eines programmgesteuert definierten Stils

Dieses Beispiel ist dem obigen sehr ähnlich, mit dem Unterschied, dass der Stil programmgesteuert definiert wird.

Beachten Sie, dass Sie mehrere Stile sowohl im SVG-Quellcode als auch programmgesteuert anwenden können.
Dieses Beispiel dient hauptsächlich dazu, zu zeigen, wie der Stil extern erstellt wird und an welchem Punkt der Stil deaktiviert werden kann.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die SVG-Definition enthält keine standardmäßige Stildefinition.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

Zuerst erstellen wir das neue SVG-Stil-Element.
Dies erfolgt, indem zunächst ein Stil-Element im SVG-Namespace mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellt, ein Textknoten mit der Stildefinition erstellt und angehängt und dann der Knoten an das oben definierte SVG angehängt wird.

> [!NOTE]
> Sie müssen [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) und nicht [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden, um den Stil zu erstellen, da Sie standardmäßig das äquivalente HTML-Stil-Element erstellen.

```js
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Dann deaktivieren wir den Stil.
Beachten Sie, dass dies der früheste Punkt ist, an dem das Setzen der Eigenschaft auf `true` erfolgreich sein wird.
Vor diesem Punkt hatte das SVG keinen zugehörigen Stil, und der Wert war standardmäßig `false`.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Button-Text umschaltet (dies ist dasselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis ist unten gezeigt.
Drücken Sie den Button, um den `disabled`-Zustand auf den Stil, der für den Kreis verwendet wird, umzuschalten.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
