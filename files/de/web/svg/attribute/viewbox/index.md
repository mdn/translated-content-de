---
title: viewBox
slug: Web/SVG/Attribute/viewBox
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`viewBox`**-Attribut definiert die Position und Größe des SVG-Viewports im Benutzerkoordinatensystem.

Der Wert des `viewBox`-Attributs ist eine Liste von vier durch Leerzeichen und/oder Kommas getrennten Zahlen: `min-x`, `min-y`, `width` und `height`. `min-x` und `min-y` repräsentieren die kleinsten X- und Y-Koordinaten, die das `viewBox` haben kann (die Ursprungspunkte des `viewBox`), und `width` und `height` geben die Größe des `viewBox` an. Das resultierende `viewBox` ist ein Rechteck im Benutzerkoordinatensystem, das auf die Grenzen des Viewports eines SVG-Elements abgebildet wird (nicht auf den [Browser-Viewport](/de/docs/Glossary/Viewport)).
Wenn ein SVG ein `viewBox`-Attribut enthält (oft in Kombination mit einem [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio)-Attribut), erfolgt eine Transformation, die den SVG-Viewport so streckt oder skaliert, dass er in ein bestimmtes Containerelement passt.

## Elemente

Sie können dieses Attribut mit den in den folgenden Abschnitten beschriebenen SVG-Elementen verwenden.

### `<marker>`

Für {{SVGElement('marker')}} definiert `viewBox` die Position und Größe des Inhalts des `<marker>`-Elements.

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

Für {{SVGElement('pattern')}} definiert `viewBox` die Position und Größe des Inhalts der Musterkachel.

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

Für {{SVGElement('svg')}} definiert `viewBox` die Position und Größe des Inhalts des `<svg>`-Elements.

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

Für {{SVGElement('symbol')}} definiert `viewBox` die Position und Größe des Inhalts des `<symbol>`-Elements.

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

Für {{SVGElement('view')}} definiert `viewBox` die Position und Größe des Inhalts des `<view>`-Elements.

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

Der untenstehende Codeausschnitt enthält drei {{SVGElement("svg")}}s mit unterschiedlichen `viewbox`-Attributwerten und identischen {{SVGElement("rect")}}- und {{SVGElement("circle")}}-Nachkommen, die sehr unterschiedliche Ergebnisse erzeugen. Die Größe von `<rect>` wird unter Verwendung relativer Einheiten definiert, sodass die visuelle Größe des erzeugten Quadrats unabhängig vom `viewBox`-Wert unverändert aussieht. Das Radiuslängenattribut {{SVGAttr("r")}} des `<circle>` ist in jedem Fall dasselbe, aber dieser Benutzerkoordinateneinheitswert wird gegen die im `viewBox` definierte Größe aufgelöst, was in jedem Fall unterschiedliche Ergebnisse erzeugt.

{{EmbedLiveSample("Examples", '100%', 200)}}

Die Benutzereinheiten von `r="4"` werden gegen die `viewBox`-Größen aufgelöst, was drastisch unterschiedliche Kreisgrößen erzeugt. Der genaue Effekt des `viewbox`-Attributs wird durch das {{ SVGAttr("preserveAspectRatio") }}-Attribut beeinflusst.

> [!NOTE]
> Werte für `width` oder `height`, die kleiner oder gleich `0` sind, deaktivieren die Darstellung des Elements.

## Spezifikationen

{{Specifications}}
