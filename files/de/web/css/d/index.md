---
title: d
slug: Web/CSS/d
l10n:
  sourceCommit: 055a1e91d6fc009abf2abe516057f47c861163d0
---

{{CSSRef}}

Die **`d`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert einen Pfad, der vom SVG {{SVGElement("path")}} Element gezeichnet werden soll. Falls vorhanden, überschreibt sie das {{SVGAttr("d")}} Attribut des Elements.

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
  - : Kein Pfad wird gezeichnet.
- `path(<string>)`
  - : Eine `path()` Funktion mit einem in Anführungszeichen gesetzten [Datenstring](/de/docs/Web/SVG/Attribute/d) Parameter. Der Datenstring definiert einen [SVG Pfad](/de/docs/Web/SVG/Element/path). Der SVG Pfaddatenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Attribute/d#path_commands), die implizit Pixel-Einheiten verwenden. Ein leerer Pfad gilt als ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Pfaddaten spezifizieren

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall für `d` und wie die CSS `d` Eigenschaft den `d` Attributwert überschreibt.

#### HTML

Wir fügen zwei identische `<path>` Elemente in ein SVG ein; ihre `d` Attributwerte sind `"m 5,5 h 90 v 90 h -90 v -90 z"`, was ein `90px` Quadrat erzeugt.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Mit CSS gestalten wir beide Pfade, indem wir einen schwarzen {{cssxref("stroke")}} und eine halbtransparente rote {{cssxref("fill")}} anwenden. Wir verwenden dann die `d` Eigenschaft, um den Wert des SVG {{SVGAttr("d")}} Attributs nur für den letzten Pfad zu überschreiben. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

```css
svg {
  border: 1px solid;
}

path {
  fill: #f338;
  stroke: #000;
}

path:last-of-type {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z"
  );
}
```

#### Ergebnisse

{{EmbedLiveSample("Specifying path data", "300", "180")}}

Der zweite `<path>` ist ein Herz, wie es im `path()` Funktionswert der CSS `d` Eigenschaft definiert ist. Der ungestaltete `<path>` blieb ein Quadrat, wie im SVG `d` Attributwert definiert.

### Datenpfade animieren

Dieses Beispiel zeigt, wie der `d` Attributwert animiert wird.

#### HTML

Wir erstellen ein `<svg>`, das ein einzelnes `<path>` Element enthält.

```html
<svg>
  <path />
</svg>
```

#### CSS

Wir verwenden das `d` Attribut, um ein Herz mit einer Linie durchzudefinieren. Wir setzen CSS ein, um die {{cssxref("fill")}}, {{cssxref("stroke")}}, und {{cssxref("stroke-width")}} dieses Pfades zu definieren und fügen eine zwei Sekunden dauernde {{cssxref("transition")}} hinzu. Wir ergänzen einen {{cssxref(":hover")}} Stil, der eine leicht abweichende {{cssxref("basic-shape/path", "path()")}} Funktion enthält; der Pfad hat die gleiche Anzahl an Datenpunkten wie der Standardzustand, was ihn animierbar macht.

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
- [Überblick über CSS-Shapes](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
