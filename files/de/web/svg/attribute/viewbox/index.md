---
title: viewBox
slug: Web/SVG/Attribute/viewBox
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`viewBox`**-Attribut definiert die Position und Dimension im Benutzerraum eines SVG-Ansichtsfensters.

Der Wert des `viewBox`-Attributs ist eine Liste von vier Zahlen, getrennt durch Leerzeichen und/oder Kommas: `min-x`, `min-y`, `width` und `height`. `min-x` und `min-y` repräsentieren die kleinsten X- und Y-Koordinaten, die das `viewBox` haben kann (die Ursprungskoodinaten des `viewBox`), und `width` und `height` spezifizieren die Größe des `viewBox`. Das resultierende `viewBox` ist ein Rechteck im Benutzerraum, das auf die Grenzen des Ansichtsfensters eines SVG-Elements abgebildet wird (nicht das [Browser-Ansichtsfenster](/de/docs/Glossary/Viewport)).
Wenn ein SVG ein `viewBox`-Attribut enthält (oft in Kombination mit einem [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio)-Attribut), erfolgt eine Transformation, die das SVG-Ansichtsfenster streckt oder anpasst, um in ein bestimmtes Containerelement zu passen.

## Elemente

Sie können dieses Attribut mit den unten beschriebenen SVG-Elementen verwenden.

### `<marker>`

Für {{SVGElement('marker')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<marker>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### `<pattern>`

Für {{SVGElement('pattern')}} definiert `viewBox` die Position und Dimension für den Inhalt der Mustervorlage.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### `<svg>`

Für {{SVGElement('svg')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<svg>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### `<symbol>`

Für {{SVGElement('symbol')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<symbol>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### `<view>`

Für {{SVGElement('view')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<view>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Content_type#number"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
  vertical-align: top;
}
svg:not(:root) {
  display: inline-block;
}
```

Der untenstehende Code-Snippet enthält drei {{SVGElement("svg")}}s mit unterschiedlichen `viewbox`-Attributwerten und identischen {{SVGElement("rect")}} und {{SVGElement("circle")}} Nachkommen, die sehr unterschiedliche Ergebnisse erzeugen. Die Größe von `<rect>` wird mit relativen Einheiten definiert, sodass die visuelle Größe des erzeugten Quadrats unabhängig vom `viewBox`-Wert unverändert aussieht. Das Radiuslängen-{{SVGAttr("r")}}-Attribut des `<circle>` ist in jedem Fall gleich, aber dieser Benutzereinheitenwert wird gegen die im `viewBox` definierte Größe aufgelöst, was in jedem Fall zu unterschiedlichen Ergebnissen führt.

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100%" height="100%" />
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 200)}}

Die Benutzereinheiten von `r="4"` werden gegen die `viewBox`-Größen aufgelöst, was zu dramatisch unterschiedlichen Kreisgrößen führt. Der genaue Effekt des `viewbox`-Attributs wird durch das {{SVGAttr("preserveAspectRatio")}}-Attribut beeinflusst.

> [!NOTE]
> Werte für `width` oder `height` kleiner oder gleich `0` deaktivieren das Rendering des Elements.

## Spezifikationen

{{Specifications}}
