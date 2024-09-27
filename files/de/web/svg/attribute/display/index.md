---
title: display
slug: Web/SVG/Attribute/display
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` bedeutet, dass das angegebene Element und seine Kinder nicht dargestellt werden. Jeder andere Wert als `none` oder `inherit` bedeutet, dass das angegebene Element vom Browser dargestellt wird.

Wenn es auf ein Container-Element angewendet wird, führt das Setzen von `display` auf `none` dazu, dass der Container und alle seine Kinder unsichtbar sind; es wirkt also auf Gruppen von Elementen als Gruppe. Das bedeutet, dass ein Kind eines Elements mit `display="none"` niemals dargestellt wird, selbst wenn das Kind einen anderen Wert für `display` als `none` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das angegebene Element nicht Teil des Rendering-Baums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}} und {{SVGElement("tref")}} Elemente, die Ereignisverarbeitung, die Berechnung des Begrenzungsrahmens und die Berechnung von Schnittpfaden:

- Wenn `display` auf `none` für ein {{SVGElement("tspan")}} oder {{SVGElement("tref")}}-Element gesetzt ist, wird die Textzeichenfolge für Zwecke der Textlayout ignoriert.
- In Bezug auf Ereignisse erhält das Element, wenn `display` auf `none` gesetzt ist, keine Ereignisse.
- Die Geometrie eines [Grafikelements](/de/docs/Web/SVG/Element#graphics_elements) mit `display` auf `none` wird bei der Berechnung von Begrenzungsrahmen und Schnittpfaden nicht einbezogen.

Das `display`-Attribut beeinflusst nur die direkte Darstellung eines gegebenen Elements, verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Beispielsweise wird durch das Setzen auf `none` bei einem {{SVGElement("path")}}-Element verhindert, dass dieses Element direkt auf die Leinwand gezeichnet wird, aber das {{SVGElement("path")}}-Element kann immer noch von einem {{SVGElement("textPath")}}-Element referenziert werden; außerdem wird seine Geometrie in der Text-auf-einem-Pfad-Verarbeitung verwendet, selbst wenn das {{SVGElement("path")}}-Element einen `display`-Wert von `none` hat.

Dieses Attribut beeinflusst auch die direkte Darstellung in Offscreen-Leinwänden, wie sie bei Masken oder Schnittpfaden auftreten. Das Setzen von `display="none"` auf ein Kind eines {{SVGElement("mask")}} wird das gegebene Kind-Element daran hindern, als Teil der Maske dargestellt zu werden. Ebenso wird das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements verhindern, dass das gegebene Kind-Element zum Schnittpfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut kann `display` als CSS-Eigenschaft verwendet werden. Siehe CSS {{cssxref("display")}} für weitere Informationen.

Sie können dieses Attribut mit jedem SVG-Element verwenden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Here the yellow rectangle is displayed -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- Here the yellow rectangle is not displayed -->
  <rect x="120" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect
    x="140"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    display="none"></rect>
</svg>
```

{{EmbedLiveSample("Example", "240", "120")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>inline</code></td>
    </tr>
    <tr>
      <th scope="row">Wert</th>
      <td>Siehe {{cssxref("display", "", "#formal_syntax")}}</td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

Für eine Beschreibung der Werte verweisen wir auf die CSS {{cssxref("display")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- {{cssxref("display")}}
