---
title: keyTimes
slug: Web/SVG/Attribute/keyTimes
l10n:
  sourceCommit: e4fdc3b273469accf7df1d2222633c92ff8c1852
---

{{SVGRef}}

Das **`keyTimes`**-Attribut repräsentiert eine Liste von Zeitwerten, die verwendet werden, um das Timing der Animation zu steuern.

Jeder Zeitpunkt in der Liste korrespondiert mit einem Wert in der {{SVGAttr("values")}}-Attributliste und definiert, wann der Wert in der Animation verwendet wird. Jeder Zeitwert in der `keyTimes`-Liste wird als Gleitkommawert zwischen 0 und 1 (einschließlich) angegeben und stellt einen proportionalen Offset in der Dauer des Animationselements dar.

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

{{EmbedLiveSample("Beispiel", "200", "200")}}

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
      <td><em>Keiner</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

Der Wert des `keyTimes`-Attributs ist eine durch Semikolon getrennte Liste von Werten.

Es muss genau so viele Werte in der `keyTimes`-Liste wie in der `values`-Liste geben.

Jeder aufeinanderfolgende Zeitwert muss größer oder gleich dem vorhergehenden Zeitwert sein.

Die Semantik der `keyTimes`-Liste hängt vom {{Glossary("interpolation", "Interpolation")}}-Modus ab:

- Für lineare und Spline-Animationen muss der erste Zeitwert in der Liste 0 und der letzte Zeitwert in der Liste `1` sein. Der mit jedem Wert assoziierte Schlüsselzeitpunkt definiert, wann der Wert gesetzt wird; Werte werden zwischen den Schlüsselzeiten interpoliert.
- Für diskrete Animationen muss der erste Zeitwert in der Liste `0` sein. Der mit jedem Wert assoziierte Zeitpunkt definiert, wann der Wert gesetzt wird; die Animationsfunktion verwendet diesen Wert, bis der nächste in der Liste definierte Zeitpunkt erreicht ist.

Wenn das {{SVGAttr("calcMode")}}-Attribut auf `paced` gesetzt ist, wird das `keyTimes`-Attribut ignoriert.

Wenn die Dauer der Animation unbestimmt ist, wird jede `keyTimes`-Spezifikation ignoriert.

- Safari-Problem: `keyTimes`-Werte sollten ohne Leerzeichen vor dem Semikolon getrennt werden, z.B.: `keyTimes="0; 0.25; 0.5; 0.75; 1"`

## Spezifikationen

{{Specifications}}
