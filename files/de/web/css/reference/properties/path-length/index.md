---
title: "`path-length` CSS property"
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{SeeCompatTable}}

Die [CSS-Eigenschaft](/de/docs/Web/CSS) **`path-length`** legt eine gesamte Pfadlänge in Benutzereinheiten fest. Alle Pfadberechnungen werden anschließend mit dem Verhältnis `path-length` / _(berechneter Wert der Pfadlänge)_ skaliert. Das gilt unter anderem für Textpfade, Animationspfade und verschiedene Operationen an Konturlinien.

Die Eigenschaft `path-length` gilt nur für die Elemente {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}} und {{SVGElement("rect")}}, die in einem {{SVGElement("svg")}} verschachtelt sind.

> [!NOTE]
> Falls die CSS-Eigenschaft `path-length` angegeben ist, überschreibt sie das Attribut {{SVGAttr("pathLength")}} eines SVG-Elements.
> Diese Eigenschaft gilt nicht für andere SVG- oder HTML-Elemente oder Pseudoelemente als die oben aufgeführten.

## Syntax

```css
/* Keyword value */
path-length: none;

/* <length> values */
path-length: 0;
path-length: 70px;
path-length: 500px;

/* Global values */
path-length: inherit;
path-length: initial;
path-length: revert;
path-length: revert-layer;
path-length: unset;
```

### Werte

- `none`
  - : Es ist keine vom Autor festgelegte Pfadlänge angegeben. Für alle pfadbezogenen Berechnungen wird die vom User Agent selbst berechnete Pfadlänge verwendet.

- `<length>`
  - : Ein nicht negativer {{cssxref("&lt;length&gt;")}}-Wert, der eine vom Autor festgelegte gesamte Pfadlänge angibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel definiert einen Pfad und zeigt, wie Sie ihm mit der CSS-Eigenschaft `path-length` eine Pfadlänge zuweisen.

#### SVG

Unser SVG definiert ein einzelnes gekrümmtes {{SVGElement("path")}}-Element mit einem farbigen {{SVGAttr("stroke")}}. Das Attribut {{SVGAttr("stroke-dasharray")}} legt ein regelmäßiges Strichmuster für die Konturlinie fest.

```html live-sample___basic-path-length live-sample___path-length-animation
<svg viewBox="0 0 600 200">
  <path
    d="M 30 100 C 150 20, 250 180, 380 100 S 520 20, 570 100"
    fill="none"
    stroke="#D85A30"
    stroke-width="4"
    stroke-dasharray="24 24"></path>
</svg>
```

#### CSS

Wir setzen für `<path>` einen `path-length`-Wert:

```css live-sample___basic-path-length
path {
  path-length: 500px;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-path-length", "100%", "250")}}

Ein großer `path-length`-Wert führt dazu, dass die Striche kleiner werden und häufiger auftreten.

### `path-length` animieren

Ein wesentlicher Vorteil von `path-length` als CSS-Eigenschaft ist, dass Sie darauf CSS-Funktionen wie [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) anwenden können. Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie Sie `path-length` mit einer CSS-Animation animieren.

#### HTML und SVG

Dieses Beispiel enthält denselben SVG-`<path>` wie das vorherige. Zusätzlich enthält es ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element, mit dem sich der auf `<path>` angewendete `path-length`-Wert zur Laufzeit ändern lässt. Ein {{htmlelement("output")}}-Element zeigt den aktuellen Wert des Schiebereglers an.

```html live-sample___path-length-animation
<div>
  <label for="path-slider">Adjust path-length</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

Auf dem {{cssxref(":root")}}-Element definieren wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--path-length` und geben ihr den Anfangswert `200px`. Anschließend setzen wir den `path-length`-Wert des `<path>`-Elements auf die Eigenschaft `--path-length` und weisen ihm eine {{cssxref("animation")}} zu, die unendlich oft abläuft und dabei abwechselnd vorwärts und rückwärts ausgeführt wird.

```css live-sample___path-length-animation
:root {
  --path-length: 200px;
}

path {
  path-length: var(--path-length);
  animation: path-length-anim 2s alternate infinite ease-in-out;
}
```

```css hidden live-sample___path-length-animation
div {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
}
```

Als Nächstes definieren wir den {{cssxref("@keyframes")}}-Block für die Animation. Er animiert die Eigenschaft `path-length` zwischen dem Wert von `--path-length` und dem mit `1.5` multiplizierten Wert von `--path-length`.

```css live-sample___path-length-animation
@keyframes path-length-anim {
  from {
    path-length: var(--path-length);
  }

  to {
    path-length: calc(var(--path-length) * 1.5);
  }
}
```

#### JavaScript

Zu Beginn unseres Skripts holen wir uns Referenzen auf die Elemente `<input type="range">`, `<output>` und `:root`.

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

Anschließend fügen wir dem Schieberegler einen `input`-Event-Handler hinzu. Wenn sich sein Wert ändert, werden sowohl `textContent` des `<output>`-Elements als auch der Wert der benutzerdefinierten Eigenschaft `--path-length` auf den neuen Wert des Schiebereglers gesetzt.

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = `${slider.value}px`;
  rootElem.style.setProperty("--path-length", `${slider.value}px`);
});
```

#### Ergebnis

{{EmbedLiveSample("path-length-animation", "100%", "250")}}

Verstellen Sie den Schieberegler und achten Sie darauf, wie größere Werte zu kleineren Strichen führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("pathLength")}}
