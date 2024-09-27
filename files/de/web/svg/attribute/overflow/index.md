---
title: overflow
slug: Web/SVG/Attribute/overflow
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`overflow`**-Attribut legt fest, was zu tun ist, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. **Dieses Feature ist noch nicht weit verbreitet implementiert.**

Dieses Attribut hat die gleichen Parameterwerte und Bedeutungen wie die CSS-Eigenschaft {{cssxref("overflow")}}, jedoch gelten die folgenden zusätzlichen Punkte:

- Wenn es den Wert `visible` hat, hat das Attribut keine Wirkung (d. h. ein Clipping-Rechteck wird nicht erstellt).
- Wenn die `overflow`-Eigenschaft den Wert `hidden` oder `scroll` hat, wird ein Clip der genauen Größe des SVG-Viewports angewendet.
- Wenn `scroll` auf einem {{SVGElement("svg")}}-Element angegeben ist, wird normalerweise ein Scrollbalken oder Panner für den SVG-Viewport angezeigt, unabhängig davon, ob ein Teil seines Inhalts abgeschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten impliziert der Wert `auto`, dass aller gerenderter Inhalt für Kindelemente entweder durch einen Scrollmechanismus sichtbar sein muss oder ohne Clip gerendert wird.

> [!NOTE]
> Obwohl der Anfangswert für overflow `auto` ist, wird er im Benutzer-Agent-Stylesheet für das {{SVGElement("svg")}}-Element überschrieben, wenn es nicht das Wurzelelement eines eigenständigen Dokuments ist, sowie für das {{SVGElement("pattern")}}- und das {{SVGElement("marker")}}-Element, um standardmäßig verborgen zu sein.

> [!NOTE]
> Als Präsentationsattribut kann `overflow` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie unter der CSS-Eigenschaft {{cssxref("overflow")}}.

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

## Anwendungshinweise

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

Für eine Beschreibung der Werte sehen Sie bitte die CSS-Eigenschaft {{cssxref("overflow")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overflow")}}
