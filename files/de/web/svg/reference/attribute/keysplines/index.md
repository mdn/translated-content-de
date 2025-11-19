---
title: keySplines
slug: Web/SVG/Reference/Attribute/keySplines
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`keySplines`**-Attribut definiert eine Reihe von {{Glossary("Bezier_curve", "Bézier-Kurven")}} Kontrollpunkten, die mit der {{SVGAttr("keyTimes")}}-Liste verbunden sind und eine kubische Bézier-Funktion definieren, die das Intervall-Tempo steuert.

Dieses Attribut wird ignoriert, es sei denn, das {{SVGAttr("calcMode")}}-Attribut ist auf `spline` gesetzt.

Wenn es irgendwelche Fehler in der keySplines-Spezifikation gibt (schlechte Werte, zu viele oder zu wenige Werte), wird die Animation nicht ausgeführt.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      dur="4s"
      calcMode="spline"
      repeatCount="indefinite"
      values="60; 110; 60; 10; 60"
      keyTimes="0; 0.25; 0.5; 0.75; 1"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
    <animate
      attributeName="cy"
      dur="4s"
      calcMode="spline"
      repeatCount="indefinite"
      values="10; 60; 110; 60; 10"
      keyTimes="0; 0.25; 0.5; 0.75; 1"
      keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1" />
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Nutzungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>&#x3C;control-point></code> [ <code>;</code>
        <code>&#x3C;control-point></code> ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Der Attributwert ist eine durch Semikolons getrennte Liste von Kontrollpunktbeschreibungen.

- `<control-point>`
  - : Jede Kontrollpunktbeschreibung besteht aus vier Werten: `x1 y1 x2 y2`, die die Bézier-Kontrollpunkte für ein Zeitintervall beschreiben. Die {{SVGAttr("keyTimes")}}-Werte, die das zugehörige Segment definieren, sind die Bézier-„Ankerpunkte“, und die `keySplines`-Werte sind die Kontrollpunkte. Daher muss es eine Kontrollpunktmenge weniger geben als es {{SVGAttr("keyTimes")}} gibt.

    Die Werte von `x1 y1 x2 y2` müssen alle im Bereich von 0 bis 1 liegen.

- Safari-Probleme
  - : `keyTimes`-Werte sollten ohne Leerzeichen davor mit Semikolon getrennt sein, zum Beispiel: `keyTimes="0; 0.25; 0.5; 0.75; 1"`

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{Glossary("Bezier_curve", "Bézier-Kurve")}}
