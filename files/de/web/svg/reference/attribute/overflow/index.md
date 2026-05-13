---
title: overflow
slug: Web/SVG/Reference/Attribute/overflow
l10n:
  sourceCommit: ed3f9fceef4ebde12363f2eb7193f1b1ccad7858
---

Das **`overflow`**-Attribut legt fest, was zu tun ist, wenn der Inhalt eines Elements zu groß ist, um in seinen Block-Formatierungskontext zu passen.

Dieses Attribut hat dieselben Parameterwerte und Bedeutungen wie die CSS-Eigenschaft {{cssxref("overflow")}}, jedoch gelten die folgenden zusätzlichen Punkte:

- Wenn es den Wert `visible` hat, hat das Attribut keine Wirkung (d.h. ein Beschneidungsrechteck wird nicht erstellt).
- Wenn die `overflow`-Eigenschaft den Wert `hidden` oder `scroll` hat, wird ein Clip in der exakten Größe des SVG-Anzeigebereichs angewendet.
- Wenn `scroll` auf einem {{SVGElement("svg")}}-Element angegeben ist, wird normalerweise eine Bildlaufleiste oder ein Panner für den SVG-Anzeigebereich angezeigt, unabhängig davon, ob ein Teil seines Inhalts beschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten impliziert der Wert `auto`, dass alle gerenderten Inhalte von Kindelementen sichtbar sein müssen, entweder durch einen Scrollmechanismus oder durch Rendern ohne Clip.

> [!NOTE]
> Obwohl der Anfangswert für overflow `auto` ist, wird er im User-Agent-Stylesheet für das {{SVGElement("svg")}}-Element überschrieben, wenn es nicht das Wurzelelement eines eigenständigen Dokuments ist, sowie für das {{SVGElement("pattern")}}- und das {{SVGElement("marker")}}-Element, um standardmäßig ausgeblendet zu werden.

> [!NOTE]
> Als Präsentationsattribut hat `overflow` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Nutzungshinweise

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

Für eine Beschreibung der Werte schauen Sie bitte die CSS-Eigenschaft {{cssxref("overflow")}} an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("overflow")}} Eigenschaft
