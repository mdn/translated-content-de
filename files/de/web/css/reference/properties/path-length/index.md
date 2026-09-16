---
title: "`path-length` CSS property"
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`path-length`** legt eine gesamte Pfadlänge in Benutzereinheiten fest. Alle Pfadberechnungen werden dann mithilfe des Verhältnisses `path-length` / _(berechneter Wert der Pfadlänge)_ skaliert — dies schließt Textpfade, Animationspfade und verschiedene Konturoperationen ein.

Die Eigenschaft `path-length` gilt nur für {{SVGElement("circle")}}-, {{SVGElement("ellipse")}}-, {{SVGElement("line")}}-, {{SVGElement("path")}}-, {{SVGElement("polygon")}}-, {{SVGElement("polyline")}}- und {{SVGElement("rect")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind.

> [!NOTE]
> Falls vorhanden, überschreibt die CSS-Eigenschaft `path-length` das Attribut {{SVGAttr("pathLength")}} eines SVG-Elements.
> Diese Eigenschaft gilt nicht für SVG-, HTML- oder Pseudo-Elemente außer den oben aufgeführten.

## Syntax

```css
/* Keyword value */
path-length: none;

/* <length> values */
path-length: 0;
path-length: 70;
path-length: 500;

/* Global values */
path-length: inherit;
path-length: initial;
path-length: revert;
path-length: revert-layer;
path-length: unset;
```

### Werte

- `none`
  - : Es wird keine vom Autor festgelegte Pfadlänge angegeben, und für alle pfadbezogenen Berechnungen wird die vom User-Agent berechnete Pfadlänge verwendet.

- `<length>`
  - : Ein nicht negativer einheitenloser Wert, der eine vom Autor definierte gesamte Pfadlänge in Benutzereinheiten darstellt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel definiert einen Pfad und zeigt, wie mithilfe der CSS-Eigenschaft `path-length` eine Pfadlänge darauf angewendet wird.

#### SVG

Unser SVG definiert ein einzelnes gekrümmtes {{SVGElement("path")}}-Element mit einer farbigen {{SVGAttr("stroke")}}. Es enthält ein Attribut {{SVGAttr("stroke-dasharray")}}, das ein regelmäßiges gestricheltes Muster für die Kontur definiert.

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

Wir setzen einen `path-length`-Wert auf dem `<path>`:

```css live-sample___basic-path-length
path {
  path-length: 500;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic-path-length", "100%", "250")}}

Das Festlegen eines großen `path-length`-Werts führt dazu, dass die Striche kleiner werden und häufiger auftreten.

### Animieren von `path-length`

Ein wesentlicher Vorteil der Bereitstellung von `path-length` als CSS-Eigenschaft besteht darin, dass Sie darauf Standard-CSS-Funktionen wie [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) anwenden können. Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie ein `path-length` mit einer CSS-Animation animiert wird.

#### HTML und SVG

Dieses Beispiel enthält denselben SVG-`<path>` wie das vorherige. Zusätzlich enthält es ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element, das verwendet werden kann, um den zur Laufzeit auf den `<path>` angewendeten Wert von `path-length` zu ändern. Außerdem fügen wir ein {{htmlelement("output")}}-Element hinzu, um den aktuellen Schiebereglerwert anzuzeigen.

```html live-sample___path-length-animation
<div>
  <label for="path-slider">Adjust path-length</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

Auf dem Element {{cssxref(":root")}} definieren wir eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--path-length` und geben ihr einen Anfangswert von `200`. Anschließend setzen wir den `path-length`-Wert des `<path>`-Elements auf die Eigenschaft `--path-length` und legen darauf eine {{cssxref("animation")}} fest, die unendlich oft ausgeführt wird und zwischen Vorwärts- und Rückwärtsrichtung wechselt.

```css live-sample___path-length-animation
:root {
  --path-length: 200;
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

Als Nächstes definieren wir den {{cssxref("@keyframes")}}-Block für die Animation — er animiert die Eigenschaft `path-length` zwischen dem Wert `--path-length` und dem mit `1.5` multiplizierten Wert `--path-length`.

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

Wir beginnen unser Skript damit, Referenzen auf die Elemente `<input type="range">`, `<output>` und `:root` abzurufen.

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

Als Nächstes fügen wir dem Bereichsschieberegler einen `input`-Event-Handler hinzu, sodass bei einer Änderung seines Werts das `textContent`-Attribut des `<output>`-Elements und der Wert der benutzerdefinierten Eigenschaft `--path-length` auf den neuen Wert des Schiebereglers gesetzt werden.

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = slider.value;
  rootElem.style.setProperty("--path-length", slider.value);
});
```

#### Ergebnisse

{{EmbedLiveSample("path-length-animation", "100%", "250")}}

Passen Sie den Schieberegler an und beachten Sie, dass größere Werte zu einer kleineren Strichgröße führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Attribut {{SVGAttr("pathLength")}}
