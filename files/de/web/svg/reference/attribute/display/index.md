---
title: display
slug: Web/SVG/Reference/Attribute/display
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`display`**-Attribut ermöglicht es Ihnen, die Darstellung von grafischen oder Container-Elementen zu steuern.

Ein Wert von `display="none"` zeigt an, dass das gegebene Element und seine Kinder nicht gerendert werden. Jeder Wert außer `none` oder `inherit` zeigt an, dass das gegebene Element vom Browser gerendert wird.

Wenn es auf ein Container-Element angewendet wird, bewirkt das Setzen von `display` auf `none`, dass der Container und alle seine Kinder unsichtbar sind; es wirkt also auf Gruppen von Elementen als Gruppe. Das bedeutet, dass kein Kind eines Elements mit `display="none"` je gerendert wird, selbst wenn das Kind einen anderen Wert für `display` als `none` hat.

Wenn das `display`-Attribut auf `none` gesetzt ist, wird das gegebene Element nicht Teil des Renderbaums. Dies hat Auswirkungen auf die {{SVGElement("tspan")}}-Elemente, die Ereignisverarbeitung, die Berechnung des Begrenzungsrahmens und die Berechnung von Clipping-Pfaden:

- Wenn `display` bei einem {{SVGElement("tspan")}}-Element auf `none` gesetzt ist, wird die Textzeichenfolge für Layoutzwecke ignoriert.
- In Bezug auf Ereignisse: Wenn `display` auf `none` gesetzt ist, erhält das Element keine Ereignisse.
- Die Geometrie eines [Grafikelements](/de/docs/Web/SVG/Reference/Element#graphics_elements) mit `display` auf `none` wird nicht in die Berechnungen von Begrenzungsrahmen und Clipping-Pfaden einbezogen.

Das `display`-Attribut beeinflusst nur das direkte Rendering eines gegebenen Elements, verhindert jedoch nicht, dass Elemente von anderen Elementen referenziert werden. Zum Beispiel verhindert das Setzen auf `none` bei einem {{SVGElement("path")}}-Element, dass es direkt auf der Leinwand gerendert wird, aber das {{SVGElement("path")}}-Element kann immer noch von einem {{SVGElement("textPath")}}-Element referenziert werden; zudem wird seine Geometrie bei der Text-auf-einem-Pfad-Verarbeitung verwendet, selbst wenn das {{SVGElement("path")}} den `display`-Wert `none` hat.

Dieses Attribut beeinflusst auch das direkte Rendering in Offscreen-Leinwände, wie sie bei Masken oder Clipping-Pfaden auftreten. Das Setzen von `display="none"` auf ein Kind eines {{SVGElement("mask")}} verhindert, dass das gegebene Kindelement als Teil der Maske gerendert wird. Ebenso verhindert das Setzen von `display="none"` auf ein Kind eines {{SVGElement("clipPath")}}-Elements, dass das gegebene Kindelement zum Clipping-Pfad beiträgt.

> [!NOTE]
> Als Präsentationsattribut hat `display` auch ein entsprechendes CSS-Eigenschaftsgegenstück: {{cssxref("display")}}. Wenn beides spezifiziert ist, hat die CSS-Eigenschaft Vorrang.

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

Für eine Beschreibung der Werte siehe bitte die CSS {{cssxref("display")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("visibility")}}-Attribut
- CSS {{cssxref("display")}}-Eigenschaft
