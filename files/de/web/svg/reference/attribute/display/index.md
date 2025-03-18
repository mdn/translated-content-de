---
title: display
slug: Web/SVG/Reference/Attribute/display
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` zeigt an, dass das gegebene Element und seine Kinder nicht gerendert werden. Jeder andere Wert als `none` oder `inherit` gibt an, dass das gegebene Element vom Browser gerendert wird.

Wenn auf ein Container-Element angewendet, bewirkt das Setzen von `display` auf `none`, dass der Container und alle seine Kinder unsichtbar werden; es wirkt also auf Gruppen von Elementen als Gruppe. Das bedeutet, dass jedes Kind eines Elements mit `display="none"` niemals gerendert wird, selbst wenn das Kind einen anderen `display`-Wert als `none` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das gegebene Element nicht Teil des Rendering-Baums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}}- und {{SVGElement("tref")}}-Elemente, die Ereignisverarbeitung, die Berechnung von Begrenzungsrahmen und die Berechnung von Clipping-Pfaden:

- Wenn `display` auf `none` auf ein {{SVGElement("tspan")}}- oder {{SVGElement("tref")}}-Element gesetzt ist, wird die Textzeichenkette für Layoutzwecke ignoriert.
- In Bezug auf Ereignisse erhält das Element keine Ereignisse, wenn `display` auf `none` gesetzt ist.
- Die Geometrie eines [Grafikelements](/de/docs/Web/SVG/Reference/Element#graphics_elements) mit `display` auf `none` wird nicht in die Berechnung von Begrenzungsrahmen und Clipping-Pfaden einbezogen.

Das `display`-Attribut beeinflusst nur das direkte Rendering eines gegebenen Elements und verhindert nicht, dass Elemente von anderen Elementen referenziert werden. Beispielsweise verhindert das Setzen auf `none` bei einem {{SVGElement("path")}}-Element, dass dieses Element direkt auf die Leinwand gerendert wird, aber das {{SVGElement("path")}}-Element kann weiterhin von einem {{SVGElement("textPath")}}-Element referenziert werden; zudem wird seine Geometrie im Text-auf-einem-Pfad-Verfahren verwendet, selbst wenn das {{SVGElement("path")}}-Element einen `display`-Wert von `none` hat.

Dieses Attribut beeinflusst auch das direkte Rendering in Offscreen-Canvas, wie es bei Masken oder Clip-Pfaden vorkommt. Das Setzen von `display="none"` auf ein Kind eines {{SVGElement("mask")}} verhindert daher, dass das gegebene Kindelement als Teil der Maske gerendert wird. Ebenso verhindert das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements, dass das gegebene Kindelement zum Clipping-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut hat `display` auch ein entsprechendes CSS-Eigenschafts-Pendant: {{cssxref("display")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

Für eine Beschreibung der Werte, siehe die CSS {{cssxref("display")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- CSS {{cssxref("display")}}-Eigenschaft
