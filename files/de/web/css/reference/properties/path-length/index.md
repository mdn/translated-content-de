---
title: "`path-length` CSS property"
short-title: path-length
slug: Web/CSS/Reference/Properties/path-length
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

Die **`path-length`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine gesamte Pfadlänge in Benutzereinheiten. Alle Pfadberechnungen werden dann mit dem Verhältnis `path-length` / _(berechneter Wert der Pfadlänge)_ skaliert — dies umfasst Textpfade, Animationspfade und verschiedene Strichoperationen.

Die `path-length` Eigenschaft gilt nur für {{SVGElement("circle")}}, {{SVGElement("ellipse")}}, {{SVGElement("line")}}, {{SVGElement("path")}}, {{SVGElement("polygon")}}, {{SVGElement("polyline")}}, und {{SVGElement("rect")}} Elemente, die in einem {{SVGElement("svg")}} eingebettet sind.

> [!NOTE]
> Falls vorhanden, überschreibt die `path-length` CSS-Eigenschaft das {{SVGAttr("pathLength")}} Attribut eines SVG-Elements.
> Diese Eigenschaft gilt nicht für SVG-, HTML- oder Pseudoelemente, die nicht oben aufgelistet sind.

## Syntax

```css
/* Keywords */
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
  - : Es ist keine vom Autor definierte Pfadlänge angegeben und die eigene berechnete Pfadlänge des Benutzer-Agents wird für alle pfadbezogenen Berechnungen verwendet.

- `<length>`
  - : Ein nicht-negativer, einheitsloser Wert, der eine vom Autor definierte gesamte Pfadlänge in Benutzereinheiten darstellt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel definiert einen Pfad und zeigt, wie eine Pfadlänge mit der `path-length` CSS-Eigenschaft darauf angewendet wird.

#### SVG

Unser SVG definiert ein einzelnes gekrümmtes {{SVGElement("path")}} Element mit einem farbigen {{SVGAttr("stroke")}}. Es enthält ein {{SVGAttr("stroke-dasharray")}} Attribut, das ein regelmäßiges gestricheltes Muster für den Strich definiert.

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

Wir setzen einen `path-length` Wert auf das `<path>`:

```css live-sample___basic-path-length
path {
  path-length: 500;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic-path-length", "100%", "250")}}

Das Festlegen eines großen `path-length` Wertes führt dazu, dass die Striche kleiner und häufiger werden.

### Animieren von `path-length`

Ein großer Vorteil, `path-length` als CSS-Eigenschaft verfügbar zu machen, ist, dass Sie Standard-CSS-Funktionen wie [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) darauf anwenden können. Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie Sie eine `path-length` mit einer CSS-Animation animieren können.

#### HTML und SVG

Dieses Beispiel enthält das gleiche SVG `<path>` wie das vorherige. Zusätzlich beinhaltet es ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element, das verwendet werden kann, um den Wert der auf das `<path>` angewendeten `path-length` zur Laufzeit zu ändern. Wir fügen auch ein {{htmlelement("output")}} Element hinzu, um den aktuellen Schiebereglerwert anzuzeigen.

```html live-sample___path-length-animation
<div>
  <label for="path-slider">Adjust path-length</label>
  <input type="range" id="path-slider" min="0" max="800" value="200" />
  <output>200</output>
</div>
```

#### CSS

Auf dem {{cssxref(":root")}} Element definieren wir eine [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*), genannt `--path-length`, und geben ihr einen Anfangswert von `200`. Dann setzen wir den `path-length` Wert des `<path>` Elements auf die `--path-length` Eigenschaft und setzen eine {{cssxref("animation")}} darauf, die eine unendliche Anzahl von Malen läuft und zwischen vorwärts und rückwärts wechselt.

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

Als nächstes definieren wir den {{cssxref("@keyframes")}} Block für die Animation — er animiert die `path-length` Eigenschaft zwischen dem `--path-length` Wert und dem `--path-length` Wert multipliziert mit `1.5`.

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

Wir starten unser Skript, indem wir Referenzen zu den `<input type="range">`, `<output>` und `:root` Elementen holen.

```js live-sample___path-length-animation
const slider = document.querySelector("input");
const output = document.querySelector("output");
const rootElem = document.querySelector(":root");
```

Als nächstes fügen wir einen `input` Ereignishandler zum Bereichs-Schieberegler hinzu, sodass, wenn sein Wert geändert wird, das `textContent` des `<output>` Elements und der Wert der `--path-length` benutzerdefinierten Eigenschaft auf den neuen Wert des Schiebereglers gesetzt werden.

```js live-sample___path-length-animation
slider.addEventListener("input", () => {
  output.textContent = slider.value;
  rootElem.style.setProperty("--path-length", slider.value);
});
```

#### Ergebnisse

{{EmbedLiveSample("path-length-animation", "100%", "250")}}

Passen Sie den Schieberegler an und beachten Sie, wie größere Werte zu einer kleineren Strichgröße führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("pathLength")}} Attribut
