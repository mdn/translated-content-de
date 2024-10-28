---
title: viewBox
slug: Web/SVG/Attribute/viewBox
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{SVGRef}}

Das **`viewBox`**-Attribut definiert die Position und Dimension im Benutzerraum eines SVG-Viewports.

Der Wert des `viewBox`-Attributs ist eine Liste von vier durch Leerzeichen und/oder Komma getrennten Zahlen: `min-x`, `min-y`, `width` und `height`. `min-x` und `min-y` repräsentieren die kleinsten X- und Y-Koordinaten, die das `viewBox` haben kann (die Ursprungspunkte des `viewBox`), und `width` und `height` geben die Größe des `viewBox` an. Das resultierende `viewBox` ist ein rechteckiger Bereich im Benutzerraum, der auf die Grenzen des Viewports eines SVG-Elements abgebildet wird (nicht der {{Glossary("Viewport", "Browser-Viewport")}}). Wenn ein SVG ein `viewBox`-Attribut enthält (oft in Kombination mit einem [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio)-Attribut), streckt oder skaliert eine Transformation den SVG-Viewport, um in ein bestimmtes Containerelement zu passen.

## Elemente

Sie können dieses Attribut mit den unten beschriebenen SVG-Elementen verwenden.

### `<marker>`

Für {{SVGElement('marker')}} definiert `viewBox` die Position und Dimension des Inhalts des `<marker>`-Elements.

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<pattern>`

Für {{SVGElement('pattern')}} definiert `viewBox` die Position und Dimension des Inhalts des Mustertiles.

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<svg>`

Für {{SVGElement('svg')}} definiert `viewBox` die Position und Dimension des Inhalts des `<svg>`-Elements.

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<symbol>`

Für {{SVGElement('symbol')}} definiert `viewBox` die Position und Dimension des Inhalts des `<symbol>`-Elements.

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<view>`

Für {{SVGElement('view')}} definiert `viewBox` die Position und Dimension des Inhalts des `<view>`-Elements.

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
      <td>Ja</td>
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

Der folgende Codeauszug enthält drei {{SVGElement("svg")}}s mit unterschiedlichen `viewBox`-Attributwerten und identischen {{SVGElement("rect")}} und {{SVGElement("circle")}} Nachfahren, die sehr unterschiedliche Ergebnisse erzeugen. Die Größe von `<rect>` wird mit relativen Einheiten definiert, daher sieht die visuelle Größe des erzeugten Quadrats unabhängig vom `viewBox`-Wert unverändert aus. Das Radiuslängenattribut {{SVGAttr("r")}} des `<circle>` ist in jedem Fall gleich, aber dieser Wert der Benutzereinheit wird gegen die im `viewBox` definierte Größe aufgelöst und führt zu unterschiedlichen Ergebnissen in jedem Fall.

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

Die Benutzereinheiten von `r="4"` werden gegen die `viewBox`-Größen aufgelöst und erzeugen dramatisch unterschiedliche Kreisgrößen. Die genaue Auswirkung des `viewBox`-Attributs wird durch das {{ SVGAttr("preserveAspectRatio") }}-Attribut beeinflusst.

> [!NOTE]
> Werte für `width` oder `height`, die kleiner oder gleich `0` sind, deaktivieren das Rendern des Elements.

## Spezifikationen

{{Specifications}}
