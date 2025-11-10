---
title: overflow
slug: Web/SVG/Reference/Attribute/overflow
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`overflow`**-Attribut legt fest, was zu tun ist, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. **Diese Funktion ist noch nicht weit verbreitet implementiert**.

Dieses Attribut hat die gleichen Parameterwerte und Bedeutungen wie die CSS-Eigenschaft {{cssxref("overflow")}}, jedoch gelten die folgenden zusätzlichen Punkte:

- Hat es den Wert `visible`, hat das Attribut keine Wirkung (d.h. ein Clip-Rechteck wird nicht erstellt).
- Wenn die `overflow`-Eigenschaft den Wert `hidden` oder `scroll` hat, wird ein Clip von genau der Größe des SVG-Viewports angewendet.
- Wenn `scroll` für ein {{SVGElement("svg")}}-Element angegeben ist, wird normalerweise ein Scrollbalken oder ein Panner für den SVG-Viewport angezeigt, unabhängig davon, ob ein Teil des Inhalts beschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten impliziert der Wert `auto`, dass alle gerenderten Inhalte für Kindelemente entweder durch einen Scrollmechanismus sichtbar sein müssen oder durch Rendern ohne Clip angezeigt werden.

> [!NOTE]
> Obwohl der Anfangswert für overflow `auto` ist, wird er im User-Agent-Stylesheet für das {{SVGElement("svg")}}-Element überschrieben, wenn es nicht das Wurzelelement eines eigenständigen Dokuments ist, sowie für das {{SVGElement("pattern")}}-Element und das {{SVGElement("marker")}}-Element, um standardmäßig verborgen zu sein.

> [!NOTE]
> Als Präsentationsattribut hat `overflow` auch eine CSS-Eigenschaftsentsprechung: {{cssxref("overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit folgenden SVG-Elementen verwendet werden:

- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("symbol")}}
- {{SVGElement("svg")}}
- {{SVGElement("text")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg" overflow="auto">
  <text y="20">
    This text is wider than the SVG, so there should be a scrollbar shown.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "200", "50")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>scroll</code> |
        <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte, siehe bitte die CSS-Eigenschaft {{cssxref("overflow")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("overflow")}}-Eigenschaft
