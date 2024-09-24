---
title: display
slug: Web/SVG/Attribute/display
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

{{SVGRef}}

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` bedeutet, dass das angegebene Element und seine Kinder nicht dargestellt werden. Jeder andere Wert als `none` oder `inherit` zeigt an, dass das angegebene Element vom Browser gerendert wird.

Wenn das `display` auf `none` für ein Container-Element gesetzt wird, führt dies dazu, dass der Container und alle seine Kinder unsichtbar werden; es wirkt somit auf Gruppen von Elementen als Gruppe. Das bedeutet, dass ein Kind eines Elements mit `display="none"` niemals gerendert wird, selbst wenn das Kind einen anderen Wert als `none` für `display` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das betreffende Element nicht Teil des Rendering-Baums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}}- und {{SVGElement("tref")}}-Elemente, auf die Ereignisverarbeitung, auf die Berechnung des Begrenzungsrahmens und auf die Berechnung von Clipping-Pfaden:

- Wenn `display` auf einem {{SVGElement("tspan")}}- oder {{SVGElement("tref")}}-Element auf `none` gesetzt ist, wird der Textstring für die Zwecke der Textlayout ignoriert.
- Bezüglich Ereignissen, wenn `display` auf `none` gesetzt ist, empfängt das Element keine Ereignisse.
- Die Geometrie eines [Grafikelements](/de/docs/Web/SVG/Element#graphics_elements) mit `display` auf `none` wird nicht in die Berechnung von Begrenzungsrahmen und Clipping-Pfaden einbezogen.

Das `display`-Attribut beeinflusst nur die direkte Darstellung eines gegebenen Elements, verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Zum Beispiel wird das Setzen auf `none` bei einem {{SVGElement("path")}}-Element verhindern, dass dieses Element direkt auf die Leinwand gerendert wird, aber das {{SVGElement("path")}}-Element kann dennoch von einem {{SVGElement("textPath")}}-Element referenziert werden; zudem wird seine Geometrie in der Text-auf-einem-Pfad-Verarbeitung verwendet, selbst wenn das {{SVGElement("path")}}-Element einen `display`-Wert von `none` hat.

Dieses Attribut beeinflusst auch die direkte Darstellung in Offscreen-Leinwänden, wie sie bei Masken oder Clipping-Pfaden vorkommt. So verhindert das Setzen von `display="none"` auf ein Kind eines {{SVGElement("mask")}}-Elements, dass das betreffende Kind-Element als Teil der Maske gerendert wird. Ebenso verhindert das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements, dass das betreffende Kind-Element zum Clipping-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut kann `display` als CSS-Eigenschaft genutzt werden. Siehe CSS {{cssxref("display")}} für weitere Informationen.

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
  <!-- Hier wird das gelbe Rechteck angezeigt -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- Hier wird das gelbe Rechteck nicht angezeigt -->
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

## Nutzungshinweise

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

Für eine Beschreibung der Werte, bitte beziehen Sie sich auf die CSS {{cssxref("display")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- {{cssxref("display")}}
