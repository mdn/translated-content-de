---
title: d
slug: Web/CSS/Reference/Properties/d
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`d`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen Pfad, der vom SVG {{SVGElement("path")}}-Element gezeichnet werden soll. Wenn sie vorhanden ist, überschreibt sie das {{SVGAttr("d")}}-Attribut des Elements.

> [!NOTE]
> Die `d`-Eigenschaft gilt nur für {{SVGElement("path")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente noch für HTML-Elemente oder Pseudo-Elemente.

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

Der Wert ist entweder eine {{cssxref("basic-shape/path", "path()")}}-Funktion mit einem einzigen {{cssxref("&lt;string&gt;")}}-Parameter oder das Schlüsselwort `none`.

- `none`
  - : Es wird kein Pfad gezeichnet.
- `path(<string>)`
  - : Eine `path()`-Funktion mit einem in Anführungszeichen gesetzten [Daten-String](/de/docs/Web/SVG/Reference/Attribute/d). Der Daten-String definiert einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path). Der SVG-Pfad-Daten-String enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixel-Einheiten verwenden. Ein leerer Pfad gilt als ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Pfaddaten angeben

Dieses Beispiel demonstriert die grundlegende Verwendung von `d` und wie die CSS-`d`-Eigenschaft Vorrang vor dem `d`-Attribut hat.

#### HTML

Wir fügen zwei identische `<path>`-Elemente in ein SVG ein; ihre `d`-Attributwerte sind `"m 5,5 h 90 v 90 h -90 v -90 z"`, was ein `90px` großes Quadrat erzeugt.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Mit CSS gestalten wir beide Pfade, indem wir einen schwarzen {{cssxref("stroke")}} und ein halbtransparentes rotes {{cssxref("fill")}} bereitstellen. Wir verwenden dann die `d`-Eigenschaft, um den Wert des SVG-{{SVGAttr("d")}}-Attributs nur für den letzten Pfad zu überschreiben. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

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

Der zweite `<path>` ist ein Herz, wie es im `path()`-Funktionswert der CSS-`d`-Eigenschaft definiert ist. Der ungestylte `<path>` blieb ein Quadrat, wie es im `d`-Attributwert seines SVGs definiert ist.

### Animieren von Datenpfaden

Dieses Beispiel zeigt die Animation des `d`-Attributwerts.

#### HTML

Wir erstellen ein `<svg>`, das ein einzelnes `<path>`-Element enthält.

```html
<svg>
  <path />
</svg>
```

#### CSS

Wir verwenden das `d`-Attribut, um ein Herz mit einem Strich durch es zu definieren. Wir verwenden CSS, um das {{cssxref("fill")}}, den {{cssxref("stroke")}} und die {{cssxref("stroke-width")}} dieses Pfads zu definieren und eine zweisekündige {{cssxref("transition")}} hinzuzufügen. Wir fügen einen {{cssxref(":hover")}}-Stil hinzu, der eine leicht abweichende {{cssxref("basic-shape/path", "path()")}}-Funktion enthält; der Pfad hat die gleiche Anzahl an Datenpunkten wie der Standardzustand, was den Pfad animierbar macht.

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

Um die Animation anzusehen, fahren Sie mit der Maus über das SVG.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("d")}}-Attribut
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("basic-shape/path", "path()")}}-Funktion
- {{cssxref("basic-shape")}}-Datentyp
- [Übersicht über CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
