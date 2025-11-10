---
title: keyTimes
slug: Web/SVG/Reference/Attribute/keyTimes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`keyTimes`**-Attribut repräsentiert eine Liste von Zeitwerten, die verwendet werden, um die zeitliche Abfolge der Animation zu steuern.

Jeder Zeitwert in der Liste entspricht einem Wert in der {{SVGAttr("values")}}-Attributliste und definiert, wann der Wert in der Animation verwendet wird. Jeder Zeitwert in der `keyTimes`-Liste wird als Gleitkommawert zwischen 0 und 1 (einschließlich) angegeben, was einen proportionalen Offset in der Dauer des Animationselements darstellt.

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
      repeatCount="indefinite"
      values="60; 110; 60; 10; 60"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
    <animate
      attributeName="cy"
      dur="4s"
      repeatCount="indefinite"
      values="10; 60; 110; 60; 10"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
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
        {{cssxref("number")}} [
        <code>;</code> {{cssxref("number")}} ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Der Wert des `keyTimes`-Attributs ist eine durch Semikolon getrennte Liste von Werten.

Es müssen genau so viele Werte in der `keyTimes`-Liste vorhanden sein wie in der `values`-Liste.

Jeder nachfolgende Zeitwert muss größer oder gleich dem vorhergehenden Zeitwert sein.

Die Semantik der `keyTimes`-Liste hängt vom {{Glossary("interpolation", "Interpolation")}}-Modus ab:

- Bei linearen und Spline-Animationen muss der erste Zeitwert in der Liste 0 sein, und der letzte Zeitwert in der Liste muss `1` sein. Der Schlüsselzeitpunkt, der jedem Wert zugeordnet ist, definiert, wann der Wert gesetzt wird; Werte werden zwischen den Schlüsselzeiten interpoliert.
- Bei diskreten Animationen muss der erste Zeitwert in der Liste `0` sein. Die Zeit, die jedem Wert zugeordnet ist, definiert, wann der Wert gesetzt wird; die Animationsfunktion verwendet diesen Wert bis zur nächsten in der Liste definierten Zeit.

Wenn das {{SVGAttr("calcMode")}}-Attribut auf `paced` eingestellt ist, wird das `keyTimes`-Attribut ignoriert.

Wenn die Dauer der Animation unbestimmt ist, wird jede `keyTimes`-Spezifikation ignoriert.

- Safari-Problem: `keyTimes`-Werte sollten ohne Leerzeichen davor durch Semikolon getrennt werden, z.B.: `keyTimes="0; 0.25; 0.5; 0.75; 1"`

## Spezifikationen

{{Specifications}}
