---
title: d
slug: Web/CSS/Reference/Properties/d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`d`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Pfad, der vom SVG {{SVGElement("path")}} Element gezeichnet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("d")}} Attribut des Elements.

> [!NOTE]
> Die `d` Eigenschaft gilt nur für {{SVGElement("path")}} Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Default */
d: none;

/* Basic usage */
d: path("m 5,5 h 35 L 20,30 z");
d: path("M 0,25 l 50,150 l 200,50 z");
d: path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z");

/* Global values */
d: inherit;
d: initial;
d: revert;
d: revert-layer;
d: unset;
```

### Werte

Der Wert ist entweder eine {{cssxref("basic-shape/path", "path()")}} Funktion mit einem einzigen {{cssxref("&lt;string&gt;")}} Parameter oder das Schlüsselwort `none`.

- `none`
  - : Es wird kein Pfad gezeichnet.
- `path(<string>)`
  - : Eine `path()` Funktion mit einem zitierten [Daten-String](/de/docs/Web/SVG/Reference/Attribute/d) Parameter. Der Daten-String definiert einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path). Der SVG-Pfad-Daten-String enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad wird als ungültig betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Pfaddaten

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `d` und wie die CSS-`d`-Eigenschaft den `d`-Attributwert überschreibt.

#### HTML

Wir fügen zwei identische `<path>` Elemente in ein SVG ein; ihre `d`-Attributwerte sind `"m 5,5 h 90 v 90 h -90 v -90 z"`, was ein `90px` Quadrat erstellt.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Mit CSS stylen wir beide Pfade, indem wir einen schwarzen {{cssxref("stroke")}} und eine halbtransparente rote {{cssxref("fill")}} bereitstellen. Dann verwenden wir die `d` Eigenschaft, um den Wert des SVG {{SVGAttr("d")}} Attributs nur für den letzten Pfad zu überschreiben. Der Browser rendert SVG-Bilder standardmäßig als `300px` breit und `150px` hoch.

```css
svg {
  border: 1px solid;
}

path {
  fill: #ff333388;
  stroke: black;
}

path:last-of-type {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z"
  );
}
```

#### Ergebnisse

{{EmbedLiveSample("Specifying path data", "300", "180")}}

Der zweite `<path>` ist ein Herz, wie es im CSS `d` Eigenschaftswert der `path()` Funktion definiert ist. Der ungestylte `<path>` bleibt ein Quadrat, wie im SVG `d` Attributwert definiert.

### Animieren von Pfaddaten

Dieses Beispiel zeigt die Animation des `d` Attributwerts.

#### HTML

Wir erstellen ein `<svg>`, das ein einzelnes `<path>` Element enthält.

```html
<svg>
  <path />
</svg>
```

#### CSS

Wir verwenden das `d` Attribut, um ein Herz mit einem Strich hindurch zu definieren. Wir verwenden CSS, um die {{cssxref("fill")}}, {{cssxref("stroke")}} und {{cssxref("stroke-width")}} dieses Pfads zu definieren und fügen einen zweisekündigen {{cssxref("transition")}} hinzu. Wir fügen einen {{cssxref(":hover")}} Stil hinzu, der eine leicht unterschiedliche {{cssxref("basic-shape/path", "path()")}} Funktion enthält; der Pfad hat die gleiche Anzahl von Datenpunkten wie der Standardzustand, was den Pfad animierbar macht.

```css
svg {
  border: 1px solid;
}

path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M90,5 L5,90"
  );
  transition: all 2s;
  fill: none;
  stroke: red;
  stroke-width: 3px;
}

svg:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
  stroke: black;
}
```

#### Ergebnisse

{{EmbedLiveSample("Animating data paths", "300", "180")}}

Um die Animation zu sehen, bewegen Sie die Maus über das SVG.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("d")}} Attribut
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("basic-shape/path", "path()")}} Funktion
- {{cssxref("basic-shape")}} Datentyp
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
