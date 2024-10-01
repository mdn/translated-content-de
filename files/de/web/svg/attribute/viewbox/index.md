---
title: viewBox
slug: Web/SVG/Attribute/viewBox
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`viewBox`**-Attribut definiert die Position und Dimension im Benutzerraum eines SVG-Viewports.

Der Wert des `viewBox`-Attributes besteht aus einer Liste von vier Zahlen, die durch Leerzeichen und/oder ein Komma getrennt sind: `min-x`, `min-y`, `width` und `height`. `min-x` und `min-y` repräsentieren die kleinsten X- und Y-Koordinaten, die das `viewBox` haben kann (die Ursprungspunkte des `viewBox`), und `width` sowie `height` bestimmen die Größe des `viewBox`. Das resultierende `viewBox` ist ein Rechteck im Benutzerraum, das auf die Grenzen des Viewports eines SVG-Elements abgebildet wird (nicht auf den {{Glossary("Viewport", "Browser-Viewport")}}). Wenn ein SVG ein `viewBox`-Attribut enthält (oft in Kombination mit einem [`preserveAspectRatio`](/de/docs/Web/SVG/Attribute/preserveAspectRatio) Attribut), wird eine Transformation vorgenommen, die den SVG-Viewport dehnt oder anpasst, um in ein bestimmtes Containerelement zu passen.

## Elemente

Sie können dieses Attribut mit den im Folgenden beschriebenen SVG-Elementen verwenden.

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
      <td>Ja</td>
    </tr>
  </tbody>
</table>

### `<pattern>`

Für {{SVGElement('pattern')}} definiert `viewBox` die Position und Dimension für den Inhalt der Musterscheibe.

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

Der folgende Codeausschnitt enthält drei {{SVGElement("svg")}}, die unterschiedliche Werte für das `viewBox`-Attribut besitzen und identische {{SVGElement("rect")}}- und {{SVGElement("circle")}}-Nachfahren aufweisen, was sehr unterschiedliche Ergebnisse erzeugt. Die Größe von `<rect>` wird mit relativen Einheiten definiert, sodass die visuelle Größe des erstellten Quadrats unabhängig vom `viewBox`-Wert unverändert aussieht. Das Radiuslängenattribut {{SVGAttr("r")}} des `<circle>` ist in jedem Fall gleich, aber dieser Benutzerwert wird im Verhältnis zur Größe, die im `viewBox` definiert ist, aufgelöst und führt in jedem Fall zu unterschiedlichen Ergebnissen.

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

Die Benutzereinheiten von `r="4"` werden im Zusammenhang mit den `viewBox`-Größen aufgelöst und erzeugen dramatisch unterschiedliche Kreisgrößen. Der genaue Effekt des `viewBox`-Attributs wird durch das {{ SVGAttr("preserveAspectRatio") }}-Attribut beeinflusst.

> [!NOTE]
> Werte für `width` oder `height`, die kleiner oder gleich `0` sind, deaktivieren die Darstellung des Elements.

## Spezifikationen

{{Specifications}}
