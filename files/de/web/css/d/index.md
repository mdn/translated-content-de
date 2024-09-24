---
title: d
slug: Web/CSS/d
l10n:
  sourceCommit: 055a1e91d6fc009abf2abe516057f47c861163d0
---

{{CSSRef}}

Die **`d`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert einen Pfad, der durch das SVG-{{SVGElement("path")}}-Element gezeichnet werden soll. Wenn vorhanden, überschreibt sie das {{SVGAttr("d")}}-Attribut des Elements.

> [!NOTE]
> Die `d`-Eigenschaft gilt nur für {{SVGElement("path")}}-Elemente, die in einem {{SVGElement("svg")}} verschachtelt sind. Sie gilt nicht für andere SVG-Elemente, HTML-Elemente oder Pseudo-Elemente.

## Syntax

```css
/* Standardwert */
d: none;

/* Grundlegende Verwendung */
d: path("m 5,5 h 35 L 20,30 z");
d: path("M 0,25 l 50,150 l 200,50 z");
d: path("M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z");

/* Globale Werte */
d: inherit;
d: initial;
d: revert;
d: revert-layer;
d: unset;
```

### Werte

Der Wert ist entweder eine {{cssxref("basic-shape/path", "path()")}}-Funktion mit einem einzelnen {{cssxref("&lt;string&gt;")}}-Parameter oder das Schlüsselwort `none`.

- `none`
  - : Es wird kein Pfad gezeichnet.
- `path(<string>)`
  - : Eine `path()`-Funktion mit einem in Anführungszeichen stehenden [Daten-String](/de/docs/Web/SVG/Attribute/d)-Parameter. Der Daten-String definiert einen [SVG-Pfad](/de/docs/Web/SVG/Element/path). Der SVG-Pfad-Daten-String enthält [Pfadbefehle](/de/docs/Web/SVG/Attribute/d#path_commands), die implizit Pixeleinheiten verwenden. Ein leerer Pfad gilt als ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Pfaddaten angeben

Dieses Beispiel zeigt den grundlegenden Anwendungsfall von `d` und wie die CSS-`d`-Eigenschaft den Wert des `d`-Attributs überschreibt.

#### HTML

Wir fügen zwei identische `<path>`-Elemente in ein SVG ein; ihre `d`-Attributwerte sind `"m 5,5 h 90 v 90 h -90 v -90 z"`, was ein `90px` Quadrat erzeugt.

```html
<svg>
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
  <path d="m 5,5 h 90 v 90 h -90 v -90 z" />
</svg>
```

#### CSS

Mit CSS gestalten wir beide Pfade, indem wir einen schwarzen {{cssxref("stroke")}} und eine halbtransparente rote {{cssxref("fill")}} bereitstellen. Wir verwenden dann die `d`-Eigenschaft, um den Wert des SVG-{{SVGAttr("d")}}-Attributs nur für den letzten Pfad zu überschreiben. Der Browser rendert SVG-Bilder standardmäßig als `300px` breit und `150px` hoch.

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

Der zweite `<path>` ist ein Herz, wie es im Wert der CSS-`d`-Eigenschafts-`path()`-Funktion definiert ist. Der ungestylte `<path>` blieb ein Quadrat, wie es in seinem SVG-`d`-Attributwert definiert ist.

### Datenpfade animieren

Dieses Beispiel zeigt die Animation des `d`-Attributwerts.

#### HTML

Wir erstellen ein `<svg>`, das ein einziges `<path>`-Element enthält.

```html
<svg>
  <path />
</svg>
```

#### CSS

Wir verwenden das `d`-Attribut, um ein Herz mit einem Strich durch das Herz zu definieren. Mithilfe von CSS definieren wir das {{cssxref("fill")}}, den {{cssxref("stroke")}} und die {{cssxref("stroke-width")}} dieses Pfads und fügen eine zweisekündige {{cssxref("transition")}} hinzu. Wir ergänzen einen {{cssxref(":hover")}}-Stil, der eine leicht unterschiedliche {{cssxref("basic-shape/path", "path()")}}-Funktion enthält; der Pfad hat die gleiche Anzahl von Datenpunkten wie der Standardzustand, wodurch der Pfad animierbar wird.

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

Um die Animation zu sehen, fahren Sie mit der Maus über das SVG.

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
- [Übersicht der CSS-Formen](/de/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul
