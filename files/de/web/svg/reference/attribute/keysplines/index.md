---
title: keySplines
slug: Web/SVG/Reference/Attribute/keySplines
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`keySplines`**-Attribut definiert eine Reihe von {{Glossary("Bezier_curve", "Bézierkurven")}} Kontrollpunkten, die mit der {{SVGAttr("keyTimes")}}-Liste verbunden sind und eine kubische Bézierfunktion definieren, die die Intervallbeschleunigung steuert.

Dieses Attribut wird ignoriert, es sei denn, das {{SVGAttr("calcMode")}}-Attribut ist auf `spline` gesetzt.

Wenn es irgendwelche Fehler in der keySplines-Spezifikation gibt (ungültige Werte, zu viele oder zu wenige Werte), wird die Animation nicht ausgeführt.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Verwendungshinweise

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
      <td><em>Kein</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Der Attributwert ist eine durch Semikolon getrennte Liste von Kontrollpunktbeschreibungen.

- `<control-point>`

  - : Jede Kontrollpunktbeschreibung besteht aus vier Werten: `x1 y1 x2 y2`, die die Bézier-Kontrollpunkte für ein Zeitsegment beschreiben. Die {{SVGAttr("keyTimes")}}-Werte, die das zugehörige Segment definieren, sind die Bézier-"Ankerpunkte", und die `keySplines`-Werte sind die Kontrollpunkte. Daher muss es eine Kontrollpunktgruppe weniger geben als {{SVGAttr("keyTimes")}}.

    Die Werte von `x1 y1 x2 y2` müssen alle im Bereich von 0 bis 1 liegen.

- Safari-Probleme
  - : Die `keyTimes`-Werte sollten durch ein Semikolon ohne Leerzeichen davor getrennt werden, z.B.: `keyTimes="0; 0.25; 0.5; 0.75; 1"`

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{Glossary("Bezier_curve", "Bézierkurve")}}
