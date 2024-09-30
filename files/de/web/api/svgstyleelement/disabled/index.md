---
title: "SVGStyleElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGStyleElement.disabled`**-Eigenschaft kann verwendet werden, um festzustellen, ob das Stylesheet deaktiviert (`true`) ist oder nicht (`false`).

Beachten Sie, dass es kein entsprechendes `disabled`-Attribut auf dem [SVG `<style>`-Element](/de/docs/Web/SVG/Element/style) gibt.

## Wert

Gibt `true` zurück, wenn das Stylesheet deaktiviert ist oder kein zugehöriges Stylesheet vorhanden ist; andernfalls `false`.
Der Wert ist standardmäßig `false` (wenn ein zugehöriges Stylesheet vorhanden ist).

Die Eigenschaft kann verwendet werden, um ein zugehöriges Stylesheet zu aktivieren oder zu deaktivieren.
Das Setzen der Eigenschaft auf `true`, wenn kein zugehöriges Stylesheet vorhanden ist, hat keinen Effekt.

## Beispiele

### Deaktivierung eines in SVG definierten Styles

Dieses Beispiel zeigt, wie die disabled-Eigenschaft programmgesteuert auf einen Style gesetzt wird, der in der HTML-SVG-Definition definiert wurde.

#### HTML

Das HTML enthält eine SVG-Definition für einen [`<circle>`](/de/docs/Web/SVG/Element/circle) mit einem [`<style>`](/de/docs/Web/SVG/Element/style)-Element, zusammen mit einem Button, der verwendet werden soll, um den Style zu deaktivieren.

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

Der folgende Code holt das `style`-Element (ein `SVGStyleElement`) anhand seiner ID und setzt es dann auf deaktiviert.
Der Style existiert bereits, da er im SVG definiert ist, daher sollte dies gelingen.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
style.disabled = true;
```

Wir fügen dann einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Text des Buttons umschaltet.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten angezeigt.
Drücken Sie den Button, um die `disabled`-Eigenschaft des Styles für den Kreis umzuschalten.

{{EmbedLiveSample("Deaktivierung eines in SVG definierten Styles")}}

### Deaktivierung eines programmgesteuert definierten Styles

Dieses Beispiel ist dem obigen sehr ähnlich, außer dass der Style programmgesteuert definiert wird.

Beachten Sie, dass Sie mehrere Styles sowohl in der SVG-Quelle als auch programmgesteuert anwenden können.
Dieses Beispiel soll hauptsächlich zeigen, wie der Style extern erstellt wird, und zu welchem Zeitpunkt der Style deaktiviert werden kann.

#### HTML

Das HTML ist ähnlich wie im vorherigen Fall, aber die SVG-Definition enthält kein Standard-Styling.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

Zuerst erstellen wir den neuen SVG-Style-Knoten.
Dies geschieht, indem zuerst ein Style-Element im SVG-Namespace mit [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) erstellt wird, ein Textknoten mit der Style-Definition erstellt und angehängt wird, und dann der Knoten dem oben definierten SVG hinzugefügt wird.

> [!NOTE]
> Sie müssen [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) verwenden und nicht [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um den Style zu erstellen, da Sie sonst standardmäßig das entsprechende HTML-Style-Element erstellen würden.

```js
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Dann deaktivieren wir den Style.
Dies ist der früheste Punkt, an dem das Setzen der Eigenschaft auf `true` erfolgreich ist.
Vor diesem Punkt hatte das SVG keinen zugeordneten Style, sodass der Wert standardmäßig auf `false` gesetzt ist.

```js
//Disable the style
style.disabled = true;
```

Zuletzt fügen wir einen Ereignishandler für den Button hinzu, der den deaktivierten Zustand und den Text des Buttons umschaltet (dies ist derselbe wie im vorherigen Beispiel).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Ergebnis

Das Ergebnis wird unten angezeigt.
Drücken Sie den Button, um den `disabled`-Zustand des Styles für den Kreis umzuschalten.

{{EmbedLiveSample("Deaktivierung eines programmgesteuert definierten Styles")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLStyleElement.disabled`](/de/docs/Web/API/HTMLStyleElement/disabled)
