---
title: text-overflow
slug: Web/SVG/Reference/Attribute/text-overflow
l10n:
  sourceCommit: 79c8ed4fc545d0e5dfb23ffcd7e3dbc38cfb6520
---

Das SVG-Attribut **`text-overflow`** legt fest, wie Textinhaltsblockelemente gerendert werden, wenn Text über die Linienboxen hinausgeht. Dies kann beispielsweise geschehen, wenn das Attribut {{SVGAttr("white-space")}} oder die {{CSSxref("white-space", "CSS-Eigenschaft")}} den Wert `nowrap` hat. Die Eigenschaft gilt nicht für vorformatierten Text oder Text, der auf einem Pfad platziert ist.

In SVG hat `text-overflow` einen Effekt, wenn ein gültig spezifizierter Umbruchbereich vorhanden ist, unabhängig vom berechneten Wert der {{CSSxref("overflow")}}-Eigenschaft auf dem Textinhaltsblockelement. Der Effekt ist rein visuell: Abgeschnittener Text wird nicht aus dem DOM entfernt, und ein gegebenenfalls angezeigtes Auslassungszeichen wird nicht selbst Teil des DOM. Für alle DOM-Methoden ist es so, als ob `text-overflow` nicht angewendet wurde und als ob der Umbruchbereich den Text nicht eingeschränkt hätte.

> [!NOTE]
> Als Präsentationsattribut hat `text-overflow` auch ein Gegenstück in der CSS-Eigenschaft: {{cssxref("text-overflow")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

## Verwendungsnotizen

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td><code>clip</code> | <code>ellipses</code></td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>clip</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `clip`
  - : Jeder Text, der den Umbruchbereich überschreitet, wird abgeschnitten. Zeichen können teilweise gerendert werden. Dies ist der Standardwert.
- `ellipsis`
  - : Wenn der anzuzeigende Text den Umbruchbereich überschreitet, wird der Text abgeschnitten und ein Auslassungszeichen so gerendert, dass es innerhalb des gegebenen Bereichs passt.

Weitere Informationen finden Sie in der [CSS-`text-overflow`](/de/docs/Web/CSS/text-overflow#values)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("text-overflow")}}-Eigenschaft
