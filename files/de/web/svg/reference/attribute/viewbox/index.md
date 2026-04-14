---
title: viewBox
slug: Web/SVG/Reference/Attribute/viewBox
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

Das **`viewBox`**-Attribut definiert die Position und Dimension im Benutzerspace eines SVG-Viewports.

Der Wert des `viewBox`-Attributs ist eine Liste von vier durch Leerzeichen und/oder Kommas getrennten Zahlen: `min-x`, `min-y`, `width` und `height`. `min-x` und `min-y` repräsentieren die kleinsten X- und Y-Koordinaten, die das `viewBox` haben kann (die Ursprungskonfigurationen des `viewBox`), und `width` und `height` spezifizieren die Größe des `viewBox`. Das resultierende `viewBox` ist ein Rechteck im Benutzerspace, das auf die Begrenzung des Viewports eines SVG-Elements abgebildet wird (nicht auf den {{Glossary("Viewport", "Browser-Viewport")}}). Wenn ein SVG ein `viewBox`-Attribut enthält (oft in Kombination mit einem [`preserveAspectRatio`](/de/docs/Web/SVG/Reference/Attribute/preserveAspectRatio)-Attribut), wird durch eine Transformation der SVG-Viewport gestreckt oder in einen bestimmten Container eingepasst.

## Elemente

Sie können dieses Attribut mit den in den folgenden Abschnitten beschriebenen SVG-Elementen verwenden.

### `<marker>`

Für {{SVGElement('marker')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<marker>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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

Für {{SVGElement('pattern')}} definiert `viewBox` die Position und Dimension für den Inhalt der Kachel des Musters.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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

Für {{SVGElement('svg')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<svg>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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

Für {{SVGElement('symbol')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<symbol>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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

Für {{SVGElement('view')}} definiert `viewBox` die Position und Dimension für den Inhalt des `<view>`-Elements.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></strong
        >,?
        <strong
          ><a href="/de/docs/Web/SVG/Guides/Content_type#number"
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

Der untenstehende Codeausschnitt umfasst drei {{SVGElement("svg")}}s mit verschiedenen `viewBox`-Attributwerten und identischen {{SVGElement("rect")}}- und {{SVGElement("circle")}}-Nachfahren, die sehr unterschiedliche Ergebnisse erzeugen. Die Größe von `<rect>` wird mit relativen Einheiten definiert, sodass die visuelle Größe des erzeugten Quadrats unabhängig vom `viewBox`-Wert unverändert erscheint. Das Attribut {{SVGAttr("r")}} des `<circle>` ist in jedem Fall gleich, aber dieser Benutzer-Unit-Wert wird in Bezug auf die im `viewBox` definierte Größe aufgelöst, was unterschiedliche Ergebnisse in jedem Fall erzeugt.

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

Die Benutzereinheiten von `r="4"` werden in Bezug auf die `viewBox`-Größen aufgelöst, wodurch sich dramatisch unterschiedliche Kreisgrößen ergeben. Der genaue Effekt des `viewBox`-Attributs wird durch das {{SVGAttr("preserveAspectRatio")}}-Attribut beeinflusst.

> [!NOTE]
> Werte für `width` oder `height`, die kleiner oder gleich `0` sind, deaktivieren die Darstellung des Elements.

## Spezifikationen

{{Specifications}}
