---
title: overflow
slug: Web/SVG/Attribute/overflow
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`overflow`**-Attribut legt fest, was zu tun ist, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. **Diese Funktion ist noch nicht weit verbreitet implementiert**.

Dieses Attribut hat dieselben Parameterwerte und Bedeutungen wie die CSS-{{cssxref("overflow")}}-Eigenschaft, jedoch gelten die folgenden zusätzlichen Punkte:

- Wenn es den Wert `visible` hat, hat das Attribut keine Wirkung (d. h., ein Clipping-Rechteck wird nicht erstellt).
- Hat die `overflow`-Eigenschaft den Wert `hidden` oder `scroll`, wird ein Clip in genau der Größe des SVG-Viewports angewendet.
- Beim {{SVGElement("svg")}}-Element wird normalerweise, wenn `scroll` angegeben ist, ein Bildlauf oder Panner für den SVG-Viewport angezeigt, unabhängig davon, ob sein Inhalt beschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten impliziert der Wert `auto`, dass aller gerenderter Inhalt für Kindelemente sichtbar sein muss, entweder durch einen Bildlaufmechanismus oder durch Rendern ohne Clip.

> [!NOTE]
> Obwohl der Anfangswert für overflow `auto` ist, wird er im User-Agent-Stylesheet für das {{SVGElement("svg")}}-Element überschrieben, wenn es nicht das Wurzelelement eines eigenständigen Dokuments ist, sowie für das {{SVGElement("pattern")}}-Element und das {{SVGElement("marker")}}-Element, sodass diese standardmäßig versteckt sind.

> [!NOTE]
> Als Präsentationsattribut kann `overflow` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("overflow")}}-Eigenschaft.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

Für eine Beschreibung der Werte siehe die CSS-{{cssxref("overflow")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overflow")}}
