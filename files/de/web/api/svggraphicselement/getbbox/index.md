---
title: "SVGGraphicsElement: Methode getBBox()"
short-title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
l10n:
  sourceCommit: c1a5060f30cf78819a3ce5ec223e82e4380ec1cc
---

{{APIRef("SVG")}}

Die Methode **`getBBox()`** des Interfaces [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement) gibt das kleinste Rechteck zurück, das das Element enthält. Das Rechteck wird im Benutzerkoordinatensystem des Elements gemessen, wobei die Geometrieattribute des Elements und seiner Nachfahren berücksichtigt werden.

Standardmäßig umfasst das Rechteck nur die Form des Elements. Mit dem Parameter `options` können Sie zusätzlich die Kontur und die Marker einbeziehen sowie das Rechteck auf den Teil des Elements beschränken, den sein Clipping-Pfad sichtbar lässt.

> [!NOTE]
> `getBBox()` gibt den Begrenzungsrahmen zum Zeitpunkt des Aufrufs zurück, auch wenn das Element noch nicht gerendert wurde. Außerdem werden Transformationen, die auf das Element oder seine Elternelemente angewendet wurden, nicht berücksichtigt.

> [!NOTE]
> `getBBox()` gibt andere Werte zurück als [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), da Letzteres Werte relativ zum Viewport zurückgibt.

## Syntax

```js-nolint
getBBox()
getBBox(options)
```

### Parameter

- `options` {{experimental_inline}} {{optional_inline}}
  - : Ein Objekt, das steuert, welche Teile des Elements in den Begrenzungsrahmen einbezogen werden. Es kann die folgenden Eigenschaften haben:
    - `fill` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Form des Elements in den Begrenzungsrahmen einbezogen wird. Der Standardwert ist `true`. Die Form wird auch dann einbezogen, wenn das Element keine Füllung hat, sodass ein Element mit auf `none` gesetztem {{cssxref("fill")}} dennoch zum Begrenzungsrahmen beiträgt.
    - `stroke` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Kontur des Elements zusammen mit ihren Linienkappen und Linienverbindungen in den Begrenzungsrahmen einbezogen wird. Der Standardwert ist `false`. Dies hat keine Auswirkung, wenn die Eigenschaft {{cssxref("stroke")}} auf `none` gesetzt ist.
    - `markers` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob die Marker des Elements in den Begrenzungsrahmen einbezogen werden. Der Standardwert ist `false`. Jeder Marker trägt die darin gezeichneten Formen bei, nicht jedoch den gesamten Bereich, der durch seine Attribute {{SVGAttr("markerWidth")}} und {{SVGAttr("markerHeight")}} definiert wird.
    - `clipped` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Begrenzungsrahmen auf den Teil des Elements beschränkt wird, den sein {{cssxref("clip-path")}} sichtbar lässt. Der Standardwert ist `false`.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das den Begrenzungsrahmen im Benutzerkoordinatensystem des Elements beschreibt, unabhängig von Transformationen, die auf das Element oder seine Elternelemente angewendet wurden.

> [!NOTE]
> Browser geben derzeit ein in SVG 1.1 definiertes [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt zurück, das dieselben Eigenschaften `x`, `y`, `width` und `height` besitzt, aber keine `DOMRect`-Instanz ist.

## Beispiele

### Begrenzungsrahmen vergleichen

Dieses Beispiel umrandet dasselbe {{SVGElement("g")}}-Element zweimal. Die grüne Umrandung ist ein SVG-{{SVGElement("rect")}}, das mit dem von `getBBox()` zurückgegebenen Rechteck positioniert wird, und die rote Umrandung ist ein absolut positioniertes {{HTMLElement("div")}}, das mit dem von [`getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) zurückgegebenen Rechteck positioniert wird. Beide Umrandungen umfassen denselben Text, aber die darunterstehenden Werte unterscheiden sich: `getBBox()` gibt Benutzereinheiten an, während `getBoundingClientRect()` CSS-Pixel relativ zum Viewport angibt.

#### HTML

```html
<svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <g id="greeting">
    <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
    <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">
      Hello World Again!
    </text>
  </g>
  <rect id="bbox" stroke="green" stroke-width="2" fill="none" />
</svg>

<div id="client-rect"></div>
<ul id="legend"></ul>
```

#### CSS

```css
svg {
  max-width: 400px;
}

#client-rect {
  position: absolute;
  box-sizing: border-box;
  border: 2px dashed red;
}

ul {
  padding-inline-start: 1em;
  font-family: monospace;
  line-height: 1.5;
}
```

#### JavaScript

```js
const greeting = document.querySelector("#greeting");
const legend = document.querySelector("#legend");

const bbox = greeting.getBBox();
const outline = document.querySelector("#bbox");
outline.setAttribute("x", bbox.x);
outline.setAttribute("y", bbox.y);
outline.setAttribute("width", bbox.width);
outline.setAttribute("height", bbox.height);

const clientRect = greeting.getBoundingClientRect();
const overlay = document.querySelector("#client-rect");
overlay.style.left = `${clientRect.x + window.scrollX}px`;
overlay.style.top = `${clientRect.y + window.scrollY}px`;
overlay.style.width = `${clientRect.width}px`;
overlay.style.height = `${clientRect.height}px`;

for (const [label, rect] of [
  ["getBBox()", bbox],
  ["getBoundingClientRect()", clientRect],
]) {
  const item = document.createElement("li");
  item.textContent = `${label} → ${rect.x.toFixed(1)}, ${rect.y.toFixed(1)}, ${rect.width.toFixed(1)}, ${rect.height.toFixed(1)}`;
  legend.append(item);
}
```

#### Ergebnis

{{EmbedLiveSample("Comparing_bounding_boxes", "", "220")}}

### Optionen für Begrenzungsrahmen

Dieses Beispiel zeichnet einen Pfad mit einer dicken Kontur, einem Marker an jedem Ende und einem Clipping-Pfad. Jeder Aufruf von `getBBox()` aktiviert eine weitere Option, und jedes resultierende Rechteck wird in einer anderen Farbe umrandet: die Form allein in Rot, die hinzugefügte Kontur in Grün, die hinzugefügten Marker in Orange und das zugeschnittene Ergebnis in Schwarz.

#### HTML

```html
<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerUnits="userSpaceOnUse"
      markerWidth="30"
      markerHeight="30">
      <circle cx="5" cy="5" r="5" fill="rebeccapurple" />
    </marker>
    <clipPath id="clip">
      <rect x="40" y="40" width="120" height="80" />
    </clipPath>
  </defs>

  <path
    id="chevron"
    d="M 50 100 L 100 50 L 150 100"
    fill="none"
    stroke="cornflowerblue"
    stroke-width="20"
    marker-start="url(#dot)"
    marker-end="url(#dot)"
    clip-path="url(#clip)" />

  <g fill="none" stroke-width="1">
    <rect id="fill-box" stroke="red" />
    <rect id="stroke-box" stroke="green" />
    <rect id="markers-box" stroke="orange" />
    <rect id="clipped-box" stroke="black" />
  </g>
</svg>

<ul id="legend"></ul>
```

#### CSS

```css
svg {
  max-width: 400px;
}

ul {
  padding-inline-start: 1em;
  font-family: monospace;
  line-height: 1.5;
}
```

#### JavaScript

```js
const chevron = document.querySelector("#chevron");
const legend = document.querySelector("#legend");

const variants = [
  { id: "fill-box", label: "getBBox()", options: {} },
  {
    id: "stroke-box",
    label: "getBBox({ stroke: true })",
    options: { stroke: true },
  },
  {
    id: "markers-box",
    label: "getBBox({ stroke: true, markers: true })",
    options: { stroke: true, markers: true },
  },
  {
    id: "clipped-box",
    label: "getBBox({ stroke: true, markers: true, clipped: true })",
    options: { stroke: true, markers: true, clipped: true },
  },
];

for (const { id, label, options } of variants) {
  const box = chevron.getBBox(options);

  const outline = document.querySelector(`#${id}`);
  outline.setAttribute("x", box.x);
  outline.setAttribute("y", box.y);
  outline.setAttribute("width", box.width);
  outline.setAttribute("height", box.height);

  const item = document.createElement("li");
  item.style.color = outline.getAttribute("stroke");
  item.textContent = `${label} → ${box.x.toFixed(1)}, ${box.y.toFixed(1)}, ${box.width.toFixed(1)}, ${box.height.toFixed(1)}`;
  legend.append(item);
}
```

#### Ergebnis

{{EmbedLiveSample("Bounding_box_options", "", "480")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [getBBox im SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
