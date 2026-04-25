---
title: "`d` CSS property"
short-title: d
slug: Web/CSS/Reference/Properties/d
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`d`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen Pfad, der durch das SVG-{{SVGElement("path")}}-Element gezeichnet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("d")}}-Attribut des Elements.

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
  - : Eine `path()`-Funktion mit einem in Anführungszeichen gesetzten [Datenstring](/de/docs/Web/SVG/Reference/Attribute/d)-Parameter. Der Datenstring definiert einen [SVG-Pfad](/de/docs/Web/SVG/Reference/Element/path). Der SVG-Pfad-Datenstring enthält [Pfadbefehle](/de/docs/Web/SVG/Reference/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad wird als ungültig betrachtet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Pfaddaten angeben

Dieses Beispiel demonstriert den grundlegenden Anwendungsfall von `d` und wie die CSS-`d`-Eigenschaft Vorrang vor dem `d`-Attribut hat.

#### HTML

Wir fügen zwei identische `<path>`-Elemente in einem SVG ein; deren `d`-Attributwerte sind `"m 5,5 h 90 v 90 h -90 v -90 z"`, was ein `90px`-Quadrat erzeugt.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Mit CSS stylen wir beide Pfade, indem wir einen schwarzen {{cssxref("stroke")}} und eine halbtransparente rote {{cssxref("fill")}} bereitstellen. Dann verwenden wir die `d`-Eigenschaft, um den Wert des SVG-{{SVGAttr("d")}}-Attributs nur für den letzten Pfad zu überschreiben. Der Browser rendert SVG-Bilder standardmäßig `300px` breit und `150px` hoch.

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

Der zweite `<path>` ist ein Herz, wie in dem `path()`-Funktionswert der CSS-`d`-Eigenschaft definiert. Der ungestylte `<path>` blieb ein Quadrat, wie in seinem SVG-`d`-Attributwert definiert.

### Datenpfade animieren

Dieses Beispiel zeigt, wie der `d`-Attributwert animiert werden kann.

#### HTML

Wir erstellen ein `<svg>`, das ein einzelnes `<path>`-Element enthält.

```html
<svg>
  <path />
</svg>
```

#### CSS

Wir verwenden das `d`-Attribut, um ein Herz mit einem durchgehenden Strich zu definieren. Mit CSS definieren wir die {{cssxref("fill")}}, {{cssxref("stroke")}} und {{cssxref("stroke-width")}} dieses Pfades und fügen einen zweisekündigen {{cssxref("transition")}} hinzu. Wir fügen einen {{cssxref(":hover")}}-Stil hinzu, der eine leicht abweichende {{cssxref("basic-shape/path", "path()")}}-Funktion enthält; der Pfad hat die gleiche Anzahl von Datenpunkten wie der Standardzustand, wodurch der Pfad animierbar wird.

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

Um die Animation zu sehen, bewegen Sie den Mauszeiger über das SVG.

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
- [Überblick über CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes/Overview)
- [CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes) Modul
