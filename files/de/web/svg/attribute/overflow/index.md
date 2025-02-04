---
title: overflow
slug: Web/SVG/Attribute/overflow
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{SVGRef}}

Das **`overflow`**-Attribut legt fest, was zu tun ist, wenn der Inhalt eines Elements zu groß ist, um in seinen Blockformatierungskontext zu passen. **Diese Funktion ist noch nicht weit verbreitet implementiert.**

Dieses Attribut hat die gleichen Parameterwerte und Bedeutungen wie die CSS-{{cssxref("overflow")}}-Eigenschaft, jedoch gelten die folgenden zusätzlichen Punkte:

- Wenn es den Wert `visible` hat, hat das Attribut keinen Effekt (d. h., ein begrenztes Rechteck wird nicht erstellt).
- Wenn die `overflow`-Eigenschaft den Wert `hidden` oder `scroll` hat, wird ein Clip von der genauen Größe der SVG-Ansicht angewendet.
- Wenn `scroll` auf einem {{SVGElement("svg")}}-Element angegeben ist, wird normalerweise eine Scrollleiste oder ein Verschieber für die SVG-Ansicht angezeigt, unabhängig davon, ob irgendein Inhalt abgeschnitten ist oder nicht.
- Innerhalb von SVG-Inhalten impliziert der Wert `auto`, dass alle gerenderten Inhalte für untergeordnete Elemente sichtbar sein müssen, entweder durch einen Scroll-Mechanismus oder indem sie ohne Clip gerendert werden.

> [!NOTE]
> Obwohl der Anfangswert für overflow `auto` ist, wird er im User-Agent-Stylesheet für das {{SVGElement("svg")}}-Element überschrieben, wenn es nicht das Stamm-Element eines eigenständigen Dokuments ist, sowie für das {{SVGElement("pattern")}}- und das {{SVGElement("marker")}}-Element, um standardmäßig verborgen zu sein.

> [!NOTE]
> Als Präsentationsattribut kann `overflow` als CSS-Eigenschaft verwendet werden. Weitere Informationen finden Sie in der CSS-{{cssxref("overflow")}}-Eigenschaft.

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

Für eine Beschreibung der Werte siehe bitte die CSS-{{cssxref("overflow")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("overflow")}}-Eigenschaft
